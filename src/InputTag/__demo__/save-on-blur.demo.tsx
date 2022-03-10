
/**
 * title: 失焦时保存
 * desc: 设置 `saveOnBlur` 在失焦时自动将正在输入的文本保存为标签。
 */
import { InputTag } from '@sensoro-design/react';

export default () => {
  return (
    <InputTag
      saveOnBlur
      placeholder="Input and blur directly"
      style={{ maxWidth: 350 }}
    />
  )
}
