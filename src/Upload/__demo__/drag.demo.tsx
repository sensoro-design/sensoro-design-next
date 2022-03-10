
/**
 * title: 拖拽上传
 * desc: 拖拽上传。当使用拖拽上传，且设置 `accept` 时候，选择后的文件将会被根据后缀名及文件类型被过滤。不符合格式的文件将不会出现在上传列表。
 */
import { Upload } from '@sensoro-design/react';

export default () => {
  return (
    <Upload
      drag
      multiple
      accept="image/*"
      action="/"
      tip="Only pdf, png, jpg can be uploaded, and the size does not exceed 100MB"
    />
  )
}
