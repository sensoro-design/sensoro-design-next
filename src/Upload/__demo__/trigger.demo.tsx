
/**
 * title: 自定义上传节点
 * desc: 可以传入自定义内容作为文件上传的触发节点。
 */
import { Upload } from '@sensoro-design/react';

export default () => {
  return (
    <div className="upload-demo-trigger">
      <Upload
        action="/"
        onChange={(fileList, file) => {
          console.log(fileList, file);
        }}
      >
        <div className="trigger">
          <div>
            Drag the file here or <span style={{ color: '#3370FF' }}> Click to upload</span>
          </div>
        </div>
      </Upload>
  </div>
  )
}
