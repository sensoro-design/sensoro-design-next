import React, { forwardRef, useContext } from 'react';
import classNames from '@pansy/classnames';
import { processChildren } from './util';
import { MenuItemGroupProps } from './interface';
import MenuContext from './context';
import MenuIndent from './indent';

function ItemGroup(props: MenuItemGroupProps, ref) {
  const { children, title, level, className, style } = props;
  const { prefixCls, levelIndent } = useContext(MenuContext);

  const childrenLevel = level === 1 ? level + 1 : level;
  const childrenList = processChildren(children, { level: childrenLevel });

  return (
    <div ref={ref} className={classNames(`${prefixCls}-group`, className)} style={style}>
      <div className={`${prefixCls}-group-title`}>
        <MenuIndent level={level} prefixCls={prefixCls} levelIndent={levelIndent} />
        <span>{title}</span>
      </div>
      {childrenList}
    </div>
  );
}

const ForwardRefItemGroup = forwardRef<unknown, MenuItemGroupProps>(ItemGroup);

const ItemGroupComponent = ForwardRefItemGroup as typeof ForwardRefItemGroup & {
  menuType: string;
};

ItemGroupComponent.displayName = 'MenuItemGroup';

ItemGroupComponent.menuType = 'MenuGroup';

export default ItemGroupComponent;
