/**
 * title: 基本用法
 * desc: 通过鼠标或键盘输入内容。
 */
import { Input } from '@sensoro-design/react';

export default () => {
  return (
    <Input
      style={{ width: 350 }}
      allowClear
      placeholder="Please Enter something"
    />
  )
}
