import React, { useState, useRef, useEffect, PropsWithChildren } from 'react';
import Tooltip from '../Tooltip';
import { isObject, isArray } from '../_util/is';
import copy from '../_util/clipboard';
import EditOutlined from '@sensoro-design/icons/EditOutlined';
import CopyOutlined from '@sensoro-design/icons/CopyOutlined';
import CheckCircleFilled from '@sensoro-design/icons/CheckCircleFilled';
import mergedToString from '../_util/mergedToString';

import type { OperationsProps } from './interface';

export default function Operations(props: PropsWithChildren<OperationsProps>) {
  const {
    children,
    copyable,
    editable,
    ellipsis,
    isEllipsis,
    expanding,
    setEditing,
    onClickExpand,
    forceShowExpand,
    currentContext = {},
  } = props;

  const { getPrefixCls, locale } = currentContext;

  const prefixCls = getPrefixCls('typography');

  const [isCopied, setCopied] = useState(false);
  const copyTimer = useRef(null);

  const copyConfig = isObject(copyable) ? copyable : {};
  const ellipsisConfig = isObject(ellipsis) ? ellipsis : {};
  const editableConfig = isObject(editable) ? editable : {};

  const expandNodes = isArray(ellipsisConfig.expandNodes)
    ? ellipsisConfig.expandNodes
    : [locale.Typography.fold, locale.Typography.unfold];

  useEffect(() => {
    return () => {
      clearTimeout(copyTimer.current);
      copyTimer.current = null;
    };
  }, []);

  function onClickCopy() {
    if (isCopied) return;
    const text = copyConfig.text !== undefined ? copyConfig.text : mergedToString(children);
    copy(text);
    setCopied(true);
    copyConfig.onCopy && copyConfig.onCopy(text);

    copyTimer.current = setTimeout(() => {
      setCopied(false);
    }, 3000);
  }

  const tooltips = copyConfig.tooltips || [locale.Typography.copy, locale.Typography.copied];
  const copyElement = copyable && (
    <Tooltip content={isCopied ? tooltips[1] : tooltips[0]}>
      <span
        className={isCopied ? `${prefixCls}-operation-copied` : `${prefixCls}-operation-copy`}
        onClick={onClickCopy}
      >
        {isCopied ? <CheckCircleFilled /> : copyConfig.icon || <CopyOutlined />}
      </span>
    </Tooltip>
  );

  const editElement = editable && (
    <Tooltip content={locale.Typography.edit}>
      <span
        className={`${prefixCls}-operation-edit`}
        onClick={() => {
          editableConfig.onStart && editableConfig.onStart(mergedToString(children));
          setEditing(true);
        }}
      >
        <EditOutlined />
      </span>
    </Tooltip>
  );

  const ellipsisElement =
    forceShowExpand || (ellipsisConfig.expandable && isEllipsis) ? (
      <a className={`${prefixCls}-operation-expand`} onClick={onClickExpand}>
        {expanding ? expandNodes[0] : expandNodes[1]}
      </a>
    ) : null;

  return (
    <>
      {ellipsisElement}
      {editElement}
      {copyElement}
    </>
  );
}
