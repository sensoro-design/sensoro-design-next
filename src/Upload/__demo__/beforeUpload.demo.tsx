/**
 * title: 上传前校验
 * desc: `beforeUpload` 会在每一个文件上传之前执行。如果返回 false 或者 Promise.reject， 那么将会取消当前文件的上传。
 */
import { Upload, Modal } from '@sensoro-design/react';

export default () => {
  return (
    <div>
      <Upload
        multiple
        action="/"
        beforeUpload={(file) => {
          return new Promise((resolve, reject) => {
            Modal.confirm({
              title: 'beforeUpload',
              content: `确认上传 ${file.name}`,
              onConfirm: () => resolve(true),
              onCancel: () => reject('cancel'),
            });
          });
        }}
      />
    </div>
  );
}
