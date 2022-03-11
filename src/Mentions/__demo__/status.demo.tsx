
/**
 * title: 无效或只读
 * desc: 通过 `disabled` 设置是否禁用，通过 `readOnly` 属性设置是否只读。
 */
import { Mentions, Space } from '@sensoro-design/react';

export default () => {
  return (
    <Space size={40}>
      <Mentions
        style={{ width: 154 }}
        readOnly
        defaultValue="Bytedance"
        options={['Bytedance', 'Bytedesign', 'Bytenumner']}
      />
      <Mentions
        style={{ width: 154 }}
        disabled
        defaultValue="Bytedance"
        options={['Bytedance', 'Bytedesign', 'Bytenumner']}
      />
    </Space>
  )
}
