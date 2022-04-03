/**
 * title: 自定义图标
 * desc: `showUploadList` 字段可以设置图标。
 */
import React from 'react';
import { Upload, Radio, Typography, Message } from '@sensoro-design/react';

import CloseOutlined from '@sensoro-design/icons/CloseOutlined';
import DownloadOutlined from '@sensoro-design/icons/DownloadOutlined';
import SmileFilled from '@sensoro-design/icons/SmileFilled';
import FileTextOutlined from '@sensoro-design/icons/FileTextOutlined';

export default () => {
  const [listType, setListtype] = React.useState('text')
  return (
    <div>
      <Typography.Text>Type:</Typography.Text> &emsp;
      <Radio.Group
        name="listType"
        value={listType}
        onChange={setListtype}
        style={{ marginLeft: 20, marginBottom: 20 }}
        options={["text", "picture-list", "picture-card"]}
      >
      </Radio.Group>
      <div>
        <Upload
          showUploadList={{
            // Please dont remove this comment
            reuploadIcon: <DownloadOutlined />,
            cancelIcon: <CloseOutlined />,
            fileIcon: <FileTextOutlined />,
            removeIcon: <CloseOutlined />,
            previewIcon: null,
            errorIcon: <SmileFilled />,
            fileName: file => {
              return <a onClick={() => { Message.info('click ' + file.name) }}>{file.name}</a>
            }
          }}
          progressProps={{ formatText: (percent) =>  `${percent}%` }}
          multiple
          defaultFileList={[
            {
              uid: '-2',
              name: 'light.png',
              url: '//p1-arco.byteimg.com/tos-cn-i-uwbnlip3yd/a8c8cdb109cb051163646151a4a5083b.png~tplv-uwbnlip3yd-webp.webp',
            },
            {
              uid: '-1',
              name: 'ice.png',
              url: '//p1-arco.byteimg.com/tos-cn-i-uwbnlip3yd/3ee5f13fb09879ecb5185e440cef6eb9.png~tplv-uwbnlip3yd-webp.webp',
            },
          ]}
          listType={listType}
          action="/"
        />
      </div>
    </div>
  );
}
