import React, { PropsWithChildren, useState } from 'react';
import classNames from '@pansy/classnames';
import Dropdown from '../Dropdown';
import omit from '../_util/omit';
import { BreadCrumbItemProps } from './interface';

import DownOutlined from '@sensoro-design/icons/DownOutlined';

function Item(props: PropsWithChildren<BreadCrumbItemProps>) {
  const { children, style, className, prefixCls, droplist, dropdownProps } = props;
  const [dropdownVisible, setDropdownVisible] = useState(false);

  const dom = (
    <div
      style={style}
      className={classNames(
        `${prefixCls}-item`,
        {
          [`${prefixCls}-item-with-dropdown`]: droplist,
        },
        className
      )}
    >
      {children}
      {droplist && (
        <span
          className={classNames(`${prefixCls}-item-dropdown-icon`, {
            [`${prefixCls}-item-dropdown-icon-active`]: dropdownVisible,
          })}
        >
          <DownOutlined />
        </span>
      )}
    </div>
  );

  return droplist ? (
    <Dropdown
      droplist={droplist}
      onVisibleChange={(visible) => {
        setDropdownVisible(visible);
        dropdownProps && dropdownProps.onVisibleChange && dropdownProps.onVisibleChange(visible);
      }}
      {...omit(dropdownProps, ['onVisibleChange'])}
    >
      {dom}
    </Dropdown>
  ) : (
    dom
  );
}

Item.displayName = 'BreadcrumbItem';

export default Item;

export { BreadCrumbItemProps };
