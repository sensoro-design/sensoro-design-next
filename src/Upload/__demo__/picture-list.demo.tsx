
/**
 * title: 图片列表样式
 * desc:图片列表样式
 */
import { Upload } from '@sensoro-design/react';

const defaultFileList =  [
  {
    uid: '-3',
    name: 'light.png',
    url: '//p1-arco.byteimg.com/tos-cn-i-uwbnlip3yd/a8c8cdb109cb051163646151a4a5083b.png~tplv-uwbnlip3yd-webp.webp',
  },
]

export default () => {
  return (
    <Upload
      listType="picture-list"
      action="/"
      multiple
      defaultFileList={defaultFileList}
    />
  )
}
