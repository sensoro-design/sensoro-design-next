/**
 * title: 自定义按钮
 * desc: 可以自定义返回顶部的按钮。
 */
import { BackTop, Button, Typography } from '@sensoro-design/react';

const { Paragraph } = Typography;

export default () => {
  return (
    <div style={{ position: 'relative', padding: '8px 12px' }}>
      <BackTop
        style={{ position: 'absolute' }}
        visibleHeight={30}
        target={() => document.getElementById('custom_backtop')}
      >
        <Button type="primary" iconOnly style={{ width: 40, height: 40 }}>UP</Button>
      </BackTop>
      <div id="custom_backtop" style={{height: 300, overflow: 'auto'}}>
        <Paragraph>This is the content</Paragraph>
        <Paragraph>This is the content</Paragraph>
        <Paragraph>This is the content</Paragraph>
        <Paragraph>This is the content</Paragraph>
        <Paragraph>This is the content</Paragraph>
        <Paragraph>This is the content</Paragraph>
        <Paragraph>This is the content</Paragraph>
        <Paragraph>This is the content</Paragraph>
        <Paragraph>This is the content</Paragraph>
        <Paragraph>This is the content</Paragraph>
        <Paragraph>This is the content</Paragraph>
        <Paragraph>This is the content</Paragraph>
        <Paragraph>This is the content</Paragraph>
        <Paragraph>This is the content</Paragraph>
        <Paragraph>This is the content</Paragraph>
        <Paragraph>This is the content</Paragraph>
        <Paragraph>This is the content</Paragraph>
        <Paragraph>This is the content</Paragraph>
        <Paragraph>This is the content</Paragraph>
        <Paragraph>This is the content</Paragraph>
        <Paragraph>This is the content</Paragraph>
        <Paragraph>This is the content</Paragraph>
      </div>
  </div>
  )
}
