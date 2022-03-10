
/**
 * title: 自定义进度条
 * desc: `progressProps` 字段可以自定义进度条属性。
 */
import React from 'react';
import { Upload, Button } from '@sensoro-design/react';

export default () => {
  const [fileList, setFileList] = React.useState([
    {
      status: 'init',
      uid: '-2',
      percent: 0,
      name: 'light.png',
      url:
        '//p1-arco.byteimg.com/tos-cn-i-uwbnlip3yd/a8c8cdb109cb051163646151a4a5083b.png~tplv-uwbnlip3yd-webp.webp',
    },{
      status: 'error',
      uid: '-1',
      percent: 0,
      name: 'cat.png',
      url: '//p1-arco.byteimg.com/tos-cn-i-uwbnlip3yd/e278888093bef8910e829486fb45dd69.png~tplv-uwbnlip3yd-webp.webp',
    },
  ])

  return (
    <div className="custom-upload-progress">
      <Upload
        showUploadList={{
          startIcon: <Button size="mini" type="text">开始上传</Button>,
          cancelIcon: <Button size="mini" type="text">取消上传</Button>,
          reuploadIcon: <Button size="mini" type="text">点击重试</Button>,
        }}
        progressProps={{
          size: 'small',
          type: 'line',
          showText: true,
          width: '100%'
        }}
        multiple
        fileList={fileList}
        action="/"
        onChange={setFileList}
        onProgress={(file) => {
          setFileList(v => {
            return v.map(x => {
              return x.uid === file.uid ? file : x
            })
          })
        }}
      />
    </div>
  )
}
