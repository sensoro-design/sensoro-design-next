import type { CSSProperties, ReactNode } from 'react';
import type { SortableHandle } from 'react-sortable-hoc';
import type { InputProps } from '../Input';
import type { TreeProps } from '../Tree';

export type BaseValue = string | number;

export interface EmptyContent {
  left?: ReactNode;
  right?: ReactNode;
  search?: ReactNode;
}

export interface OnSortEndProps {
  oldIndex: number;
  newIndex: number;
}

export interface GroupItem {
  /**
   * 分组名称
   */
  title?: string;
  /**
   * 分组数据
   */
  children?: DataItem[];
}

export type DataItemMap = Map<number | string, DataItem>;

export type DataSource = DataItem[] | GroupItem[];

export interface DataItem {
  /**
   * 样式类名
   */
  className?: string;
  /**
   * 内联样式
   */
  style?: React.CSSProperties;
  /**
   * 每个选项的唯一标识，不允许重复，必填
   */
  key: BaseValue;
  /**
   * 选项值
   */
  value: BaseValue;
  /**
   * 选项展示内容
   */
  label?: React.ReactNode;
  /**
   * 是否禁用
   * @default false
   */
  disabled?: boolean;
  [x: string]: any;
}

export type ValueType = 'list' | 'groupList' | 'treeList';

export interface RenderSelectedItemProps extends DataItem {
  onRemove?: () => void;
  sortableHandle?: typeof SortableHandle;
}

export interface RenderSourceItemProps extends DataItem {
  checked: boolean;
  onChange?: () => void;
}

export interface OnSortEndProps {
  oldIndex: number;
  newIndex: number;
}

export type OnSortEnd = ({ oldIndex, newIndex }: OnSortEndProps) => void;

export interface SelectedPanelProps {
  /* Number of selected options */
  length: number;
  /* Collection of all selected options */
  selectedData: Array<DataItem>;
  /* Callback function that should be called when click to clear */
  onClear: () => void;
  /* The function that should be called when a single option is deleted */
  onRemove: (item: DataItem) => void;
  /* The function that should be called when reordering the results */
  onSortEnd: OnSortEnd;
}

export interface SourcePanelProps {
  value: Array<string | number>;
  /* Loading */
  loading: boolean;
  /* Whether there are no items that match the current search value */
  noMatch: boolean;
  /* Items that match the current search value */
  filterData: Array<DataItem>;
  /* All items */
  sourceData: Array<DataItem>;
  /* Whether to select all */
  allChecked: boolean;
  /* Number of filtered results */
  showNumber: number;
  /* Input search box value */
  inputValue: string;
  /* The function that should be called when the search box changes */
  onSearch: (searchString: string) => void;
  /* The function that should be called when all the buttons on the left are clicked */
  onAllClick: () => void;
  /* Selected item on the left */
  selectedItems: Map<string | number, DataItem>;
  /* The function that should be called when selecting or deleting a single option */
  onSelectOrRemove: (item: DataItem) => void;
  /* The function that should be called when selecting an option, */
  onSelect: (value: BaseValue[]) => void;
}

export interface ResolvedDataItem extends DataItem {
  _parent?: {
    title: string;
  };
  _optionKey?: string | number;
}

export interface HeaderConfig {
  totalContent: string;
  allContent: string;
  onAllClick: () => void;
  type: string;
  showButton: boolean;
}

export interface TransferState {
  data: ResolvedDataItem[];
  selectedItems: Map<BaseValue, ResolvedDataItem>;
  searchResult: Set<BaseValue>;
  inputValue: string;
}

export interface TransferProps<D extends DataItem = DataItem> {
  /**
   * 样式类名
   */
  className?: string;
  /**
   * 内联样式
   */
  style?: CSSProperties;
  /**
   * 是否禁用
   * @default false
   */
  disabled?: boolean;
  /**
   * 是否开启拖拽排序
   * @default false
   */
  draggable?: boolean;
  /**
   * 数据源
   */
  dataSource?: DataSource[];
  /**
   * 默认已选中值
   */
  defaultValue?: BaseValue[];
  /**
   * 已选中值，传入该项时，将作为受控组件使用
   */
  value?: BaseValue[];
  /**
   * Transfer 类型
   * @default 'list'
   */
  type?: ValueType;
  /**
   * 自定义空状态
   */
  emptyContent?: EmptyContent;
  /**
   * 自定义筛选逻辑, 当为 false 时，不展示搜索框
   */
  filter?: boolean | ((input: string, item: D) => boolean);
  /**
   * 自定义搜索框
   */
  inputProps?: InputProps;
  /**
   * 是否正在加载左侧选项
   */
  loading?: boolean;
  /**
   * 当 type 为treeList时，控制右侧选中项是否显示选择路径
   * @default false
   */
  showPath?: boolean;
  /**
   * 当 type 为treeList时，可作为 TreeProps 传入左侧的 Tree 组件
   */
  treeProps?: Omit<TreeProps, 'value' | 'ref' | 'onChange'>;
  /**
   * 自定义左侧单个候选项的渲染
   */
  renderSourceItem?: (item: RenderSourceItemProps) => React.ReactNode;
  /**
   * 自定义左侧候选面板的渲染
   */
  renderSourcePanel?: (sourcePanelProps: SourcePanelProps) => React.ReactNode;
  /**
   * 自定义右侧单个已选项的渲染
   */
  renderSelectedItem?: (item: RenderSelectedItemProps) => React.ReactNode;
  /**
   * 自定义右侧已选面板的渲染
   */
  renderSelectedPanel?: (selectedPanelProps: SelectedPanelProps) => React.ReactNode;
  /**
   * 勾选时的回调
   */
  onSelect?: (item: D) => void;
  /**
   * 选中值发生变化时触发的回调, 拖拽排序变化后也会触发该回调
   */
  onChange?: (values: BaseValue[], items: D[]) => void;
  /**
   * 搜索框输入内容变化时调用
   */
  onSearch?: (search: string) => void;
  /**
   * 取消勾选时的回调
   */
  onDeselect?: (item: D) => void;
}
