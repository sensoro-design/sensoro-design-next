
/**
 * title: 限制上传数量
 * desc: 通过`limit`限制上传的最大数量。超出后上传按钮会隐藏.
 */
import { Upload, Message } from '@sensoro-design/react';

export default () => {
  return (
    <Upload
      action="/"
      limit={3}
      multiple
      onExceedLimit={() => {
        Message.warning('超过上传数量限制！最多上传3个')
      }}
    />
  )
}
