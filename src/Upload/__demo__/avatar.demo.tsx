
/**
 * title: 用户头像上传
 * desc: 点击上传用户头像，可使用 beforeUpload 限制用户上传的图片格式和大小。
 */
import React from 'react';
import { Upload, Progress } from '@sensoro-design/react';
import { IconPlus, IconEdit } from '@sensoro-design/react/icon';

export default () => {
  const [file, setFile] = React.useState()
  const cs = `arco-upload-list-item${file && file.status === 'error' ? ' is-error' : ''}`;

  return (
    <div>
      <Upload
        action='/'
        fileList={file ? [file] : []}
        showUploadList={false}
        onChange={(_, currentFile) => {
          setFile({
            ...currentFile,
            url: URL.createObjectURL(currentFile.originFile),
          })
        }}
        onProgress={(currentFile) => {
          setFile(currentFile)
        }}
      >
        <div className={cs}>
          {file && file.url ? (
            <div className='arco-upload-list-item-picture custom-upload-avatar'>
              <img src={file.url} />
              <div className="arco-upload-list-item-picture-mask">
                <IconEdit/>
              </div>
              {file.status === 'uploading' && file.percent < 100 && <Progress
                  percent={file.percent}
                  type="circle"
                  size="mini"
                  style={{
                    position: 'absolute',
                    left: '50%',
                    top: '50%',
                    transform: 'translateX(-50%) translateY(-50%)'
                  }}
                />
              }
            </div>
          ) : (
            <div className='arco-upload-trigger-picture'>
              <div className="arco-upload-trigger-picture-text">
                <IconPlus/>
                <div style={{marginTop: 10, fontWeight: 600}}>Upload</div>
              </div>
            </div>
          )}
        </div>
      </Upload>
    </div>
  );
}
