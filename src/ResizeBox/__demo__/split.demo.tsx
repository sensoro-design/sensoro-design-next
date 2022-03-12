/**
 * title: 面板分割
 * desc: 将一个面板分割成两个可以调整宽度或高度的两部分。用`direction`控制分割方向。
 */
import { ResizeBox, Typography } from '@sensoro-design/react';

export default () => {
  return (
    <ResizeBox.Split
      style={{height: 200, width: 500, border: '1px solid var(--color-border)'}}
      panes={[
        (<Typography.Paragraph>Right</Typography.Paragraph>),
        (<Typography.Paragraph>Left</Typography.Paragraph>)
      ]}
    />
  )
}
