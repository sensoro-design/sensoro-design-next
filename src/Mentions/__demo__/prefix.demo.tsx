/**
 * title: 自定义触发字符
 * desc: 指定 `prefix` 来自定义触发字符。默认为 `@`，可以自定义为任意字符。
 */
import { Mentions, Space } from '@sensoro-design/react';

export default () => {
  return (
    <Space size={40}>
      <Mentions
        style={{ width: 154, marginBottom: 10 }}
        placeholder="Input @"
        options={['Bytedance', 'Bytedesign', 'Bytenumner']}
      />
      <Mentions
        style={{ width: 154, marginBottom: 10 }}
        prefix="#"
        placeholder="Input #"
        options={['Bytedance', 'Bytedesign', 'Bytenumner']}
      />
      <Mentions
        style={{ width: 154, marginBottom: 10 }}
        prefix="*"
        placeholder="Input *"
        options={['Bytedance', 'Bytedesign', 'Bytenumner']}
      />
    </Space>
  )
}
