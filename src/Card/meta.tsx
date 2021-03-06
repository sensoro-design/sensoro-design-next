import React, { useContext } from 'react';
import classNames from '@pansy/classnames';
import { ConfigContext } from '../ConfigProvider';
import { CardMetaProps } from './interface';

function Meta(props: CardMetaProps, ref) {
  const { className, title, avatar, description, actionList, ...others } = props;
  const { getPrefixCls } = useContext(ConfigContext);
  const prefixCls = getPrefixCls('card-meta');
  const classes = classNames(prefixCls, className);

  return (
    <div {...others} ref={ref} className={classes}>
      {title || description ? (
        <div className={`${prefixCls}-content`}>
          {title && <div className={`${prefixCls}-title`}>{title}</div>}
          {description && <div className={`${prefixCls}-description`}>{description}</div>}
        </div>
      ) : null}
      {avatar || actionList ? (
        <div
          className={classNames(`${prefixCls}-footer `, { [`${prefixCls}-footer-only-actions`]: !avatar })}
        >
          {avatar ? <div className={`${prefixCls}-avatar`}>{avatar}</div> : null}
          {actionList}
        </div>
      ) : null}
    </div>
  );
}

const MetaComponent = React.forwardRef<unknown, CardMetaProps>(Meta);

MetaComponent.displayName = 'CardMeta';

export default MetaComponent;

export { CardMetaProps };
