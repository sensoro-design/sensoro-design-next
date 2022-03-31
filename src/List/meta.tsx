import React, { useContext } from 'react';
import classNames from '@pansy/classnames';
import { ConfigContext } from '../ConfigProvider';
import { ListItemMetaProps } from './interface';

function Meta(props: ListItemMetaProps, ref) {
  const { getPrefixCls } = useContext(ConfigContext);
  const { className, avatar, title, description, ...others } = props;
  const prefixCls = getPrefixCls('list');
  const baseClassName = `${prefixCls}-item-meta`;
  const hasAvatar = !!avatar;
  const hasContent = !!(title || description);

  return (
    <div ref={ref} {...others} className={classNames(baseClassName, className)}>
      {hasAvatar && <div className={`${baseClassName}-avatar`}>{avatar}</div>}
      {hasContent && (
        <div className={`${baseClassName}-content`}>
          {title && <div className={`${baseClassName}-title`}>{title}</div>}
          {description && <div className={`${baseClassName}-description`}>{description}</div>}
        </div>
      )}
    </div>
  );
}

const MetaComponent = React.forwardRef<HTMLDivElement, ListItemMetaProps>(Meta);

MetaComponent.displayName = 'ListItemMeta';

export default MetaComponent;
