/**
 * title: 校验输入
 * desc: 通过 `validate` 校验输入
 */
import { InputTag, Message } from '@sensoro-design/react';

export default () => {
  return (
    <InputTag
      allowClear
      style={{ maxWidth: 350 }}
      validate={(v) => {
        if (!v || v.length < 3) {
          Message.error('长度必须大于3');
          return false;
        }
        return true;
      }}
      placeholder="Please input"
    />
  )
}
