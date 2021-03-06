import React, { CSSProperties } from 'react';
import classNames from '@pansy/classnames';
import { ImageProps } from './interface';
import useShowFooter from './utils/hooks/useShowFooter';
import MoreOutlined from '@sensoro-design/icons/MoreOutlined';
import { TriggerForToolbar } from './trigger-for-toolbar';

interface ImageFooterProps {
  style?: CSSProperties;
  className?: string | string[];
  title?: ImageProps['title'];
  description?: ImageProps['description'];
  actions?: ImageProps['actions'];
  prefixCls: string;
  simple?: boolean;
}

export const ImageFooter = (props: ImageFooterProps) => {
  const { style, className, title, description, actions, prefixCls, simple } = props;

  const [showFooter, showCaption, showActions] = useShowFooter({ title, description, actions });

  if (!showFooter) return null;

  const footerPrefixCls = `${prefixCls}-footer`;
  const classes = classNames(footerPrefixCls, className, {
    [`${footerPrefixCls}-with-actions`]: showActions,
  });

  const renderActionList = () => {
    const actionsList = (
      <div className={`${prefixCls}-actions-list`}>
        {actions.map((item, index) => {
          return (
            <div className={`${prefixCls}-actions-item`} key={`${index}`}>
              {item}
            </div>
          );
        })}
      </div>
    );
    if (simple) {
      return (
        <div className={`${prefixCls}-actions-list`}>
          <TriggerForToolbar prefixCls={prefixCls} popup={() => actionsList}>
            <div className={classNames(`${prefixCls}-actions-item`, `${prefixCls}-actions-item-trigger`)}>
              <span>
                <MoreOutlined />
              </span>
            </div>
          </TriggerForToolbar>
        </div>
      );
    }
    return actionsList;
  };

  return (
    <div className={classes} style={style}>
      {showCaption && (
        <div className={classNames(`${footerPrefixCls}-block`, `${prefixCls}-caption`)}>
          {title && (
            <div className={`${prefixCls}-caption-title`} title={title}>
              {title}
            </div>
          )}
          {description && !simple && (
            <div className={`${prefixCls}-caption-description`} title={description}>
              {description}
            </div>
          )}
        </div>
      )}
      {showActions && (
        <div className={classNames(`${footerPrefixCls}-block`, `${prefixCls}-actions`)}>
          {renderActionList()}
        </div>
      )}
    </div>
  );
};
