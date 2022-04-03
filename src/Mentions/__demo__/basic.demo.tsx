/**
 * title: 基础用法
 * desc: 用于在输入中提及某人或某事，常用于发布、聊天或评论功能。
 */
import { Mentions } from '@sensoro-design/react';

export default () => {
  return (
    <Mentions
      style={{ width: 154 }}
      defaultValue="@Bytedance"
      options={['Bytedance', 'Bytedesign', 'Bytenumner']}
    />
  )
}
