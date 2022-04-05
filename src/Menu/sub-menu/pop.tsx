import React, { useContext, useState } from 'react';
import cs from '@pansy/classnames';
import { MenuSubMenuProps } from '../interface';
import DownOutlined from '@sensoro-design/icons/DownOutlined';
import RightOutlined from '@sensoro-design/icons/RightOutlined';
import { isChildrenSelected } from '../util';
import omit from '../../_util/omit';
import Dropdown from '../../Dropdown';
import Menu from '../index';
import MenuIndent from '../indent';
import MenuContext from '../context';
import { useHotkeyHandler } from '../hotkey';

const SubMenuPop = (props: MenuSubMenuProps & { forwardedRef }) => {
  const {
    _key,
    children,
    style,
    className,
    title,
    level,
    selectable,
    forwardedRef,
    triggerProps: propTriggerProps,
  } = props;
  const {
    prefixCls,
    mode,
    inDropdown,
    levelIndent,
    hotkeyInfo,
    selectedKeys = [],
    icons,
    triggerProps: contextTriggerProps,
    onClickSubMenu,
    onClickMenuItem,
  } = useContext(MenuContext);

  const triggerProps = { ...contextTriggerProps, ...propTriggerProps };
  const [popupVisible, setPopupVisible] = useState(false);

  const baseClassName = `${prefixCls}-pop`;
  const isSelected = selectable && selectedKeys.indexOf(props._key as string) > -1;
  const needPopOnBottom = mode === 'horizontal' && !inDropdown;

  const isActive = useHotkeyHandler(_key, () => {
    setPopupVisible(hotkeyInfo.activeKeyPath.indexOf(_key) > 0);
  });

  const renderSuffix = () => {
    const MergedIconRight = icons && icons.popArrowRight ? icons.popArrowRight : <RightOutlined />;
    const MergedIconDown =
      icons && icons.horizontalArrowDown ? icons.horizontalArrowDown : <DownOutlined />;
    return (
      <span className={`${prefixCls}-icon-suffix`}>
        {needPopOnBottom ? MergedIconDown : MergedIconRight}
      </span>
    );
  };

  const hasSelectedStatus = isChildrenSelected(children, selectedKeys) || isSelected;

  return (
    <Dropdown
      trigger="hover"
      onVisibleChange={(visible) => setPopupVisible(visible)}
      droplist={
        <Menu
          selectedKeys={selectedKeys}
          onClickMenuItem={(key, event) => {
            onClickMenuItem(key, event);
            setPopupVisible(false);
          }}
        >
          {children}
        </Menu>
      }
      triggerProps={{
        position: needPopOnBottom ? 'bl' : 'rt',
        popupVisible,
        showArrow: true,
        autoAlignPopupMinWidth: true,
        classNames: 'fadeIn',
        duration: 100,
        mouseEnterDelay: 50,
        mouseLeaveDelay: 50,
        className: cs(`${baseClassName}-trigger`, triggerProps && triggerProps.className),
        ...omit(triggerProps, ['className']),
      }}
    >
      <div
        ref={forwardedRef}
        style={style}
        className={cs(
          baseClassName,
          `${baseClassName}-header`,
          {
            [`${prefixCls}-active`]: isActive,
            [`${prefixCls}-selected`]: hasSelectedStatus,
          },
          className
        )}
        onClick={(event) => {
          onClickSubMenu(_key, level, 'pop');
          selectable && onClickMenuItem(_key, event);
        }}
      >
        <MenuIndent prefixCls={prefixCls} levelIndent={levelIndent} level={level} />
        {title}
        {renderSuffix()}
        {hasSelectedStatus && mode === 'horizontal' ? (
          <div className={`${prefixCls}-selected-label`} />
        ) : null}
      </div>
    </Dropdown>
  );
};

export default SubMenuPop;
