
/**
 * title: 定制伸缩杆内容
 * desc: 可通过属性 `resizeTriggers` 定制各个方向的伸缩杆的内容。
 */
import { ResizeBox, Divider, Typography } from '@sensoro-design/react';
import './styles.less';

const { Paragraph } = Typography;

const TriggerContent = function({ className }) {
  return (
    <div className={`resizebox-demo-custom-trigger ${className}`}>
      <div className="resizebox-demo-custom-trigger-line"/>
    </div>
  )
};

export default () => {
  return (
    <div>
      <ResizeBox
        directions={['right', 'bottom']}
        style={{ width: 500, minWidth: 100, maxWidth: '100%', height: 200, textAlign: 'center' }}
        resizeTriggers={{
          right: <TriggerContent className="resizebox-demo-custom-trigger-vertical" />,
          bottom: <TriggerContent className="resizebox-demo-custom-trigger-horizontal" />
        }}
      >
        <Paragraph>We are building the future of content discovery and creation.</Paragraph>
        <Divider />
        <Paragraph>
          ByteDance's content platforms enable people to enjoy content powered by AI technology. We
          inform, entertain, and inspire people across language, culture and geography.
        </Paragraph>
        <Divider>ByteDance</Divider>
        <Paragraph>Yiming Zhang is the founder and CEO of ByteDance.</Paragraph>
      </ResizeBox>
    </div>
  )
}
