import React, { useEffect, useRef } from 'react';
import classNames from '@pansy/classnames';
import { EditContentProps } from './interface';
import Input from '../Input';
import mergedToString from '../_util/mergedToString';

export default function EditContent(props: EditContentProps) {
  const { prefixCls, children, setEditing, editableConfig } = props;
  const classes = classNames(`${prefixCls}-typography`, `${prefixCls}-edit-content`);

  const str = mergedToString(children);

  const input = useRef(null);

  useEffect(() => {
    input.current && input.current.focus && input.current.focus();
    if (input.current && input.current.dom) {
      const { length } = input.current.dom.value;
      input.current.dom.setSelectionRange(length, length);
    }
  }, []);

  function onEnd() {
    setEditing(false);
    editableConfig.onEnd && editableConfig.onEnd(str);
  }

  function onChange(value) {
    editableConfig.onChange && editableConfig.onChange(value);
  }

  function onBlur() {
    onEnd();
  }

  return (
    <div className={classes}>
      <Input.TextArea
        onBlur={onBlur}
        ref={input}
        value={str}
        autoSize
        onChange={onChange}
        onPressEnter={onEnd}
      />
    </div>
  );
}
