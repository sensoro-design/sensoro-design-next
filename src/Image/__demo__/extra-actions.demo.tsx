
/**
 * title: 额外操作
 * desc: 额外操作通过 `actions` 设置，默认情况下水平排列，如果您的操作按钮比较多，我们也提供了 `simple` 模式将按钮收入一个下拉框中，但是需要注意的是在 `simple` 模式下，描述将不显示。
 */
import { useState } from 'react';
import { Image, Tooltip } from '@sensoro-design/react';

import EyeOutlined from '@sensoro-design/icons/EyeOutlined';
import DownloadOutlined from '@sensoro-design/icons/DownloadOutlined';
import InfoCircleOutlined from '@sensoro-design/icons/InfoCircleOutlined';

import './styles.less';

function DemoImage(props) {
  const [visible, setVisible] = useState(false);

  return <Image
    src='//p1-arco.byteimg.com/tos-cn-i-uwbnlip3yd/a8c8cdb109cb051163646151a4a5083b.png~tplv-uwbnlip3yd-webp.webp'
    title='A user’s avatar'
    description='Present by Arco Design'
    actions={[
      <span key="1" className="image-demo-action-item" onClick={(e) => { setVisible(true); }} style={{ padding: "" }}>
        <EyeOutlined />
      </span>,
      <span key="2" className="image-demo-action-item" onClick={(e) => { console.log('download'); }}>
        <DownloadOutlined />
      </span>,
      <Tooltip key="3" content="A user’s avatar">
        <span className="image-demo-action-item">
          <InfoCircleOutlined />
        </span>
      </Tooltip>,
    ]}
    previewProps={{
      visible,
      onVisibleChange: (e) => {
        setVisible(false);
      },
    }}
    {...props}
  />
}

export default () => {
  return (
    <div>
      <div>
        <DemoImage
          width={300}/>
        <DemoImage
          width={200}
          simple={true}
          style={{ marginLeft: 67, verticalAlign: 'top' }}
        />
      </div>
      <div style={{ marginTop: 67 }}>
        <DemoImage
          width={300}
          footerPosition="outer"
        />
        <DemoImage
          width={200}
          simple={true}
          footerPosition="outer"
          style={{ marginLeft: 67, verticalAlign: 'top' }}
        />
      </div>
    </div>
  )
}

