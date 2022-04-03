
/**
 * title: 获取选项的文本
 * desc: 可以通过设置 `labelInValue=true` 获取选项的 label 值
 */
import { InputTag } from '@sensoro-design/react';

export default () => {
  return (
    <InputTag
      allowClear
      labelInValue
      defaultValue={[{ label: 'a', value: '1' }]}
      placeholder="Please input"
      style={{ maxWidth: 350 }}
      onChange={(v) => {
        console.log(v);
      }}
    />
  )
}
