
/**
 * title: 基础用法
 * desc: 最基础的上传组件用法。
 */
import { Upload } from '@sensoro-design/react';

export default () => {
  return (
    <div>
      <div>
        <Upload action="/" />
      </div>
      <div>
        <Upload action="/" disabled style={{marginTop: 40}}/>
      </div>
    </div>
  )
}
