/**
 * title: 区分大小写
 * desc: 使用 `strict=true` 来指明在匹配时严格区分大小写。
 */
import { AutoComplete } from '@sensoro-design/react';

const data = ['beijing', 'beihai', 'baoding'];

export default () => {
  return (
    <AutoComplete
      placeholder="Input `B`"
      strict
      data={data}
      style={{ width: 154 }}
    />
  )
}
