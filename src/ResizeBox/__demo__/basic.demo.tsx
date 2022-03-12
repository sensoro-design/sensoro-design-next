
/**
 * title: 基础用法
 * desc: `ResizeBox` 伸缩框组件的基础使用。通过设置 `directions`，可以指定四条边中的哪几条边可以进行伸缩。
 */
import { ResizeBox, Divider, Typography } from '@sensoro-design/react';

const { Paragraph } = Typography;

export default () => {
  return (
    <div>
      <ResizeBox
        directions={['right', 'bottom']}
        style={{ width: 500, minWidth: 100, maxWidth: '100%', height: 200, textAlign: 'center' }}
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

