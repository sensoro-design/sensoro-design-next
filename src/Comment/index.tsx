import React, { PropsWithChildren, forwardRef, useContext } from 'react';
import classNames from '@pansy/classnames';
import { ConfigContext } from '../ConfigProvider';
import { isString, isObject } from '../_util/is';
import { CommentProps } from './interface';
import useMergeProps from '../_util/hooks/useMergeProps';

const defaultAlign = {
  datetime: 'left',
  actions: 'left',
};

const defaultProps: CommentProps = {
  align: 'left',
};

function Comment(baseProps: PropsWithChildren<CommentProps>, ref) {
  const { getPrefixCls, componentConfig } = useContext(ConfigContext);
  const props = useMergeProps<PropsWithChildren<CommentProps>>(
    baseProps,
    defaultProps,
    componentConfig?.Comment
  );

  const prefixCls = getPrefixCls('comment');
  const { actions, author, avatar, content, datetime } = props;

  const align = {
    ...defaultAlign,
    ...(isObject(props.align)
      ? props.align
      : {
          datetime: props.align,
          actions: props.align,
        }),
  };

  return (
    <div ref={ref} className={classNames(`${prefixCls}`, props.className)} style={props.style}>
      {avatar && (
        <div className={classNames(`${prefixCls}-avatar`)}>
          {isString(avatar) ? <img src={avatar} alt="comment-avatar" /> : avatar}
        </div>
      )}
      <div className={`${prefixCls}-inner`}>
        <div className={`${prefixCls}-inner-content`}>
          {(author || datetime) && (
            <div className={`${prefixCls}-title ${prefixCls}-title-align-${align.datetime}`}>
              {author && <span className={`${prefixCls}-author`}>{author}</span>}
              {datetime && <span className={`${prefixCls}-datetime`}>{datetime}</span>}
            </div>
          )}
          {content && <div className={`${prefixCls}-content`}>{content}</div>}
          {actions && (
            <div className={`${prefixCls}-actions ${prefixCls}-actions-align-${align.actions}`}>
              {actions}
            </div>
          )}
        </div>
        {props.children && <div className={`${prefixCls}-inner-comment`}>{props.children}</div>}
      </div>
    </div>
  );
}

const CommentRef = forwardRef<unknown, PropsWithChildren<CommentProps>>(Comment);

CommentRef.displayName = 'Comment';

export default CommentRef;

export { CommentProps };
