import React from 'react';
import classNames from '@pansy/classnames';
import omit from 'lodash/omit';
import noop from 'lodash/noop';
import isBoolean from 'lodash/isBoolean';
import { SortableContainer, SortableElement, SortableHandle } from 'react-sortable-hoc';

import CloseOutlined from '@sensoro-design/icons/CloseOutlined';
import SearchOutlined from '@sensoro-design/icons/SearchOutlined';
import HolderOutlined from '@sensoro-design/icons/HolderOutlined';

import { ConfigConsumer } from '../ConfigProvider';
import Input from '../Input';
import Link from '../Link';
import Spin from '../Spin';
import Tree from '../Tree';
import Checkbox from '../Checkbox';
import Empty from '../Empty';

import { strings } from './constants';
import { _generateDataByType, _generateSelectedItems } from './utils';
import { isArray } from '../_util/is';

import type {
  DataSource,
  GroupItem,
  BaseValue,
  TransferProps,
  OnSortEndProps,
  TransferState,
  HeaderConfig,
  SourcePanelProps,
  ResolvedDataItem,
  SelectedPanelProps,
} from './interface';
import Pagination from '../Pagination';
// import { TreeDataType } from '../Tree/interface';
import type { ConfigProviderProps } from '../ConfigProvider';
import type { Locale } from '../locale/interface';

export class Transfer extends React.Component<TransferProps, TransferState> {
  prefixCls: string;
  _treeRef: Tree;

  static defaultProps: TransferProps = {
    type: strings.TYPE_LIST,
    dataSource: [] as DataSource[],
    defaultValue: [] as Array<string | number>,
    emptyContent: {},
    showPath: false,
    pagination: true,
    onSearch: noop,
    onChange: noop,
    onSelect: noop,
    onDeselect: noop,
  };

  constructor(props: TransferProps) {
    super(props);

    let { defaultValue = [], dataSource, type, pagination } = props;

    if (isBoolean(pagination) && pagination === true) {
      pagination = {};
    }

    const initState: TransferState = {
      data: [],
      selectedItems: new Map(),
      searchResult: new Set(),
      inputValue: '',
    };

    if (Boolean(dataSource) && isArray(dataSource)) {
      initState.data = _generateDataByType(dataSource, type);
    }

    if (Boolean(defaultValue) && isArray(defaultValue)) {
      initState.selectedItems = _generateSelectedItems(defaultValue, initState.data);
    }

    if (pagination) {
      initState.pagination = {
        current: 1,
        pageSize: pagination.pageSize || 10,
      };
    }

    this.state = initState;
  }

  handleInputChange = (inputVal: string) => {
    const { data } = this.state ?? {};
    const { filter, type } = this.props;

    if (type === strings.TYPE_TREE_TO_LIST) {
      // const searchResult = new Set(data.map((item) => item.key));
      // this._adapter.searchTree(inputVal);
      // this._adapter.notifySearch(inputVal);
      // this._adapter.updateInput(inputVal);
      // this._adapter.updateSearchResult(searchResult);
      return;
    }

    const filterFunc =
      typeof filter === 'function'
        ? (item) => filter(inputVal, item)
        : (item) => typeof item.label === 'string' && item.label.includes(inputVal);
    const searchData = data.filter(filterFunc);

    const searchResult = new Set(searchData.map((item) => item.key));

    this.props.onSearch(inputVal);
    this.setState({ inputValue: inputVal });
    this.setState({ searchResult });
    this.setState({
      pagination: {
        ...this.state.pagination,
        current: 1,
      },
    });
  };

  handleSelect = (values: BaseValue[]) => {
    const { disabled } = this.props;
    const { data } = this.state;

    const selectedItems = this.getSelected();
    const dataItems = data.map((d) => [d.value, d]);

    const allItemsMap = new Map(dataItems as any);
    const nextSelectedItemsMap = new Map();

    if (disabled) {
      return;
    }

    values.forEach((value: any) => {
      const node = allItemsMap.get(value) as ResolvedDataItem;

      if (selectedItems.has(node.key)) {
        nextSelectedItemsMap.set(node.key, node);
        return;
      }

      if (node.disabled) {
        return;
      }

      nextSelectedItemsMap.set(node.key, node);
      return;
    });

    if (!this._isControlledComponent()) {
      this.setState({
        selectedItems: nextSelectedItemsMap,
      });
    }

    this._notifyChange(nextSelectedItemsMap);
  };

  handleSelectOrRemove = (item: ResolvedDataItem) => {
    const { disabled } = this.props;
    const { selectedItems } = this.state;

    if (disabled || item.disabled) {
      return;
    }

    if (selectedItems.has(item.key)) {
      selectedItems.delete(item.key);
      this.props.onDeselect(item);
    } else {
      selectedItems.set(item.key, item);
      this.props.onSelect(item);
    }

    if (!this._isControlledComponent()) {
      this.setState({ selectedItems });
    }

    this._notifyChange(selectedItems);
  };

  handleSortEnd = (callbackProps: OnSortEndProps) => {
    const { oldIndex, newIndex } = callbackProps;
    const selectedItems = this.getSelected();

    let selectedArr = [...selectedItems.values()];
    selectedArr = this._arrayMove(selectedArr, oldIndex, newIndex);

    let newSelectedItems = new Map();
    selectedArr.forEach((option) => {
      newSelectedItems = newSelectedItems.set(option.key, option);
    });

    this.setState({
      selectedItems: newSelectedItems,
    });
    this._notifyChange(newSelectedItems);
  };

  handleClear = () => {
    const { disabled } = this.props;
    const { selectedItems, data } = this.state;

    if (disabled) {
      return;
    }

    const newSelectedItems = new Map(selectedItems);

    data.forEach((item) => {
      if (!item.disabled) {
        newSelectedItems.delete(item.key);
      }
    });

    if (!this._isControlledComponent()) {
      this.setState({
        selectedItems: newSelectedItems,
      });
    }

    this._notifyChange(newSelectedItems);
  };

  handleAll = (wantAllChecked: boolean) => {
    const { disabled, type } = this.props;
    const { selectedItems, data, searchResult, inputValue } = this.state;

    if (disabled) {
      return;
    }

    const inSearchMode = inputValue !== '';
    let operateData = [];

    operateData = inSearchMode ? data.filter((item) => searchResult.has(item.key)) : data;
    operateData = type === strings.TYPE_TREE_TO_LIST ? data : operateData;

    let newSelectedItems = new Map();

    switch (true) {
      case !wantAllChecked:
        newSelectedItems = new Map(selectedItems);
        operateData.forEach((item) => {
          // If the item is disabled, keep it
          if (!item.disabled) {
            newSelectedItems.delete(item.key);
          }
        });
        break;
      case wantAllChecked:
        newSelectedItems = new Map(selectedItems);
        operateData.forEach((item) => {
          if (item.disabled) {
            // The disabled item, judge whether it is selected, if it is selected, still need to add the selection
            if (selectedItems.has(item.key)) {
              newSelectedItems.set(item.key, item);
            }
            return;
          }
          newSelectedItems.set(item.key, item);
        });
        break;
      default:
        break;
    }

    if (!this._isControlledComponent()) {
      this.setState({
        selectedItems: newSelectedItems,
      });
    }

    this._notifyChange(newSelectedItems);
  };

  renderFilter(locale: Locale['Transfer']) {
    const { inputProps, filter, disabled } = this.props;

    if (typeof filter === 'boolean' && !filter) {
      return null;
    }

    return (
      <div role="search" aria-label="Transfer filter" className={`${this.prefixCls}-filter`}>
        <Input
          prefix={<SearchOutlined />}
          placeholder={locale.placeholder}
          value={this.state.inputValue}
          disabled={disabled}
          onChange={this.handleInputChange}
          {...inputProps}
        />
      </div>
    );
  }

  renderEmpty(type: string, emptyText: React.ReactNode = <Empty />) {
    const classes = classNames({
      [`${this.prefixCls}-empty`]: true,
      [`${this.prefixCls}-empty-right`]: type === 'right',
      [`${this.prefixCls}-empty-left`]: type === 'left',
    });

    return (
      <div aria-label="empty" className={classes}>
        {emptyText}
      </div>
    );
  }

  renderHeader(headerConfig: HeaderConfig) {
    const { disabled } = this.props;
    const { totalContent, allContent, onAllClick, type, showButton } = headerConfig;
    const classes = classNames({
      [`${this.prefixCls}-header`]: true,
      [`${this.prefixCls}-right-header`]: type === 'right',
      [`${this.prefixCls}-left-header`]: type === 'left',
    });

    return (
      <div className={classes}>
        <span className={`${this.prefixCls}-header-total`}>{totalContent}</span>
        {showButton ? (
          <Link disabled={disabled} className={`${this.prefixCls}-header-all`} onClick={onAllClick}>
            {allContent}
          </Link>
        ) : null}
      </div>
    );
  }

  renderLeftItem(item: ResolvedDataItem, index: number) {
    const { renderSourceItem, disabled } = this.props;

    const { selectedItems } = this.state;
    const checked = selectedItems.has(item.key);

    if (renderSourceItem) {
      return renderSourceItem({ ...item, checked, onChange: () => this.handleSelectOrRemove(item) });
    }

    const classes = classNames({
      [`${this.prefixCls}-item`]: true,
      [`${this.prefixCls}-item-disabled`]: item.disabled,
    });

    return (
      <Checkbox
        key={index}
        disabled={item.disabled || disabled}
        className={classes}
        checked={checked}
        role="listitem"
        onChange={() => this.handleSelectOrRemove(item)}
      >
        {item.label}
      </Checkbox>
    );
  }

  renderRightItem(item: ResolvedDataItem): React.ReactNode {
    const { renderSelectedItem, draggable, type, showPath } = this.props;

    let newItem = item;
    if (draggable) {
      newItem = { ...item, key: item._optionKey };
      delete newItem._optionKey;
    }

    const onRemove = () => this.handleSelectOrRemove(newItem);

    const classes = classNames({
      [`${this.prefixCls}-item`]: true,
      [`${this.prefixCls}-right-item`]: true,
      [`${this.prefixCls}-right-item-draggable`]: draggable,
    });

    const shouldShowPath = type === strings.TYPE_TREE_TO_LIST && showPath === true;

    const label = shouldShowPath ? this._generatePath(item) : item.label;

    if (renderSelectedItem) {
      return renderSelectedItem({ ...item, onRemove, sortableHandle: SortableHandle });
    }

    const DragHandle = SortableHandle(() => (
      <HolderOutlined
        role="button"
        aria-label="Drag and sort"
        className={`${this.prefixCls}-right-item-drag-handler`}
      />
    ));

    return (
      <div role="listitem" className={classes} key={newItem.key}>
        {draggable ? <DragHandle /> : null}
        <div className={`${this.prefixCls}-right-item-text`}>{label}</div>
        <CloseOutlined
          onClick={onRemove}
          aria-disabled={item.disabled}
          className={classNames(`${this.prefixCls}-item-close-icon`, {
            [`${this.prefixCls}-item-close-icon-disabled`]: item.disabled,
          })}
        />
      </div>
    );
  }

  renderGroupTitle(group: GroupItem, index: number) {
    const classes = classNames(`${this.prefixCls}-group-title`);

    return (
      <div className={classes} key={`title-${index}`}>
        {group.title}
      </div>
    );
  }

  renderLeftTree() {
    const { selectedItems } = this.state;
    const { disabled, dataSource, treeProps } = this.props;
    const { values } = this.getValuesAndItemsFromMap(selectedItems);

    const onCheck = (selectedKeys) => {
      this.handleSelect(selectedKeys);
    };

    const restTreeProps = omit(treeProps, ['value', 'ref', 'onChange']);

    return (
      <Tree
        disabled={disabled}
        treeData={dataSource as any}
        multiple
        checkable
        selectedKeys={values}
        autoExpandParent
        ref={(tree) => (this._treeRef = tree)}
        style={{ flex: 1, overflow: 'overlay' }}
        onCheck={onCheck}
        {...restTreeProps}
      />
    );
  }

  renderLeftList(visibileItems: ResolvedDataItem[]) {
    const content = [] as React.ReactNode[];
    const groupStatus = new Map();

    visibileItems.forEach((item, index) => {
      const parentGroup = item._parent;
      const optionContent = this.renderLeftItem(item, index);

      if (parentGroup && groupStatus.has(parentGroup.title)) {
        content.push(optionContent);
      } else if (parentGroup) {
        const groupContent = this.renderGroupTitle(parentGroup, index);
        groupStatus.set(parentGroup.title, true);
        content.push(groupContent);
        content.push(optionContent);
      } else {
        content.push(optionContent);
      }
    });

    return (
      <div className={`${this.prefixCls}-left-list`} role="list" aria-label="Option list">
        {content}
      </div>
    );
  }

  renderPagination(total: number) {
    const { pagination, type, disabled } = this.props;

    if (pagination === false || type === 'treeList') {
      return null;
    }

    if (this.state.pagination.pageSize >= total) return null;

    return (
      <div className={`${this.prefixCls}-pagination`}>
        <Pagination
          simple
          total={total}
          size="small"
          disabled={disabled}
          current={this.state.pagination.current}
          pageSize={this.state.pagination.pageSize}
          onChange={(pageNumber: number) => {
            this.setState({
              pagination: {
                ...this.state.pagination,
                current: pageNumber,
              },
            });
          }}
        />
      </div>
    );
  }

  renderLeft(locale: Locale['Transfer']) {
    const { loading, type, emptyContent, renderSourcePanel } = this.props;
    const { data, selectedItems, inputValue, searchResult, pagination } = this.state;

    const totalToken = locale.total;
    const inSearchMode = inputValue !== '';
    const showNumber = inSearchMode ? searchResult.size : data.length;
    const filterData = inSearchMode ? data.filter((item) => searchResult.has(item.key)) : data;

    let renderData = [...filterData];

    if (this.props.pagination && type !== 'treeList') {
      const { current, pageSize } = pagination;
      renderData = renderData.filter((_, index) => {
        return index < pageSize * current && index >= pageSize * (current - 1);
      });
    }

    const totalText = totalToken.replace('${total}', `${showNumber}`);
    const noMatch = inSearchMode && searchResult.size === 0;

    const leftContainesNotInSelected = Boolean(filterData.find((f) => !selectedItems.has(f.key)));

    const headerConfig: HeaderConfig = {
      totalContent: totalText,
      allContent: leftContainesNotInSelected ? locale.selectAll : locale.clearSelectAll,
      onAllClick: () => this.handleAll(leftContainesNotInSelected),
      type: 'left',
      showButton: type !== strings.TYPE_TREE_TO_LIST,
    };

    const inputCom = this.renderFilter(locale);
    const headerCom = this.renderHeader(headerConfig);
    const paginationCom = this.renderPagination(filterData.length);
    const emptyCom = this.renderEmpty('left', inputValue ? emptyContent.search : emptyContent.left);
    const loadingCom = <Spin />;

    let content: React.ReactNode = null;

    switch (true) {
      case loading:
        content = loadingCom;
        break;
      case noMatch:
        content = emptyCom;
        break;
      case type === strings.TYPE_TREE_TO_LIST:
        content = (
          <>
            {headerCom}
            {this.renderLeftTree()}
          </>
        );
        break;
      case !noMatch && (type === strings.TYPE_LIST || type === strings.TYPE_GROUP_LIST):
        content = (
          <>
            {headerCom}
            {this.renderLeftList(renderData)}
            {paginationCom}
          </>
        );
        break;
      default:
        content = null;
        break;
    }

    const { values } = this.getValuesAndItemsFromMap(selectedItems);

    const renderProps: SourcePanelProps = {
      loading,
      noMatch,
      filterData,
      sourceData: data,
      allChecked: !leftContainesNotInSelected,
      showNumber,
      inputValue,
      selectedItems,
      value: values,
      onSelect: this.handleSelect,
      onAllClick: () => this.handleAll(leftContainesNotInSelected),
      onSearch: this.handleInputChange,
      onSelectOrRemove: (item: ResolvedDataItem) => this.handleSelectOrRemove(item),
    };

    if (renderSourcePanel) {
      return renderSourcePanel(renderProps);
    }

    return (
      <section className={`${this.prefixCls}-left`}>
        {inputCom}
        {content}
      </section>
    );
  }

  renderRightSortableList(selectedData: Array<ResolvedDataItem>) {
    const SortableItem = SortableElement(((item: ResolvedDataItem) =>
      this.renderRightItem(item)) as React.SFC<ResolvedDataItem>);

    const SortableList = SortableContainer(
      ({ items }: { items: Array<ResolvedDataItem> }) => (
        <div className={`${this.prefixCls}-right-list`} role="list" aria-label="Selected list">
          {items.map((item, index: number) => (
            <SortableItem key={item.label} index={index} {...item} _optionKey={item.key} />
          ))}
        </div>
      ),
      { distance: 10 } as any,
    );

    return <SortableList useDragHandle onSortEnd={this.handleSortEnd} items={selectedData} />;
  }

  renderRight(locale: Locale['Transfer']) {
    const { selectedItems } = this.state;
    const { emptyContent, renderSelectedPanel, draggable } = this.props;
    const selectedData = [...selectedItems.values()];

    const renderProps: SelectedPanelProps = {
      length: selectedData.length,
      selectedData,
      onClear: this.handleClear,
      onRemove: this.handleSelectOrRemove,
      onSortEnd: (props) => this.handleSortEnd(props),
    };

    if (renderSelectedPanel) {
      return renderSelectedPanel(renderProps);
    }

    const selectedToken = locale.selected;
    const selectedText = selectedToken.replace('${total}', `${selectedData.length}`);

    const headerConfig = {
      totalContent: selectedText,
      allContent: locale.clear,
      onAllClick: () => this.handleClear(),
      type: 'right',
      showButton: Boolean(selectedData.length),
    };

    const headerCom = this.renderHeader(headerConfig);
    const emptyCom = this.renderEmpty('right', emptyContent.right);
    const panelCls = `${this.prefixCls}-right`;

    let content = null;

    switch (true) {
      case !selectedData.length:
        content = emptyCom;
        break;
      case selectedData.length && !draggable:
        const list = (
          <div className={`${this.prefixCls}-right-list`} role="list" aria-label="Selected list">
            {selectedData.map((item) => this.renderRightItem({ ...item }))}
          </div>
        );
        content = list;
        break;
      case selectedData.length && draggable:
        content = this.renderRightSortableList(selectedData);
        break;
    }

    return (
      <section className={panelCls}>
        {headerCom}
        {content}
      </section>
    );
  }

  renderTransfer = ({ getPrefixCls, locale }: ConfigProviderProps) => {
    const { className, style, disabled, renderSelectedPanel, renderSourcePanel } = this.props;

    const transferLocale = locale['Transfer'];

    this.prefixCls = getPrefixCls('transfer');

    const classes = classNames(this.prefixCls, className, {
      [`${this.prefixCls}-disabled`]: disabled,
      [`${this.prefixCls}-custom-panel`]: renderSelectedPanel && renderSourcePanel,
    });

    return (
      <div className={classes} style={style}>
        {this.renderLeft(transferLocale)}
        {this.renderRight(transferLocale)}
      </div>
    );
  };

  getSelected = () => {
    const { selectedItems } = this.state;

    return new Map(selectedItems);
  };

  getValuesAndItemsFromMap(selectedItems) {
    const { type } = this.props;
    const items = [];
    const values = [];

    for (const item of selectedItems) {
      const obj = type === strings.TYPE_GROUP_LIST ? omit(item[1], '_parent') : item[1];
      items.push(obj);
      values.push(obj.value);
    }
    return { items, values };
  }

  _generatePath(item) {
    const { path = [] } = item;
    return path.map((p) => p.label).join(' > ');
  }

  _notifyChange(selectedItems) {
    const { items, values } = this.getValuesAndItemsFromMap(selectedItems);
    this.props.onChange(values, items);
  }

  _isControlledComponent(key: string = 'value') {
    return key in this.props;
  }

  _arrayMove(array, from: number, to: number) {
    const newArray = array.slice();
    newArray.splice(to < 0 ? newArray.length + to : to, 0, newArray.splice(from, 1)[0]);
    return newArray;
  }

  render() {
    return <ConfigConsumer>{this.renderTransfer}</ConfigConsumer>;
  }
}
