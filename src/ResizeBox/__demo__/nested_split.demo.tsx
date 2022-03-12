
/**
 * title: 面板分割嵌套
 * desc: 面板分割可以嵌套使用。
 */
import { ResizeBox, Typography } from '@sensoro-design/react';

const rightPane = (
  <div>
    <ResizeBox.Split
      direction="vertical"
      style={{height: 200}}
      panes={[
        (<Typography.Paragraph>Top</Typography.Paragraph>),
        (<Typography.Paragraph>Bottom</Typography.Paragraph>)
      ]}
    >
    </ResizeBox.Split>
  </div>
);

export default () => {
  return (
    <div>
      <ResizeBox.Split
        style={{height: 200, width: 500, border: '1px solid var(--color-border)'}}
        panes={[
          (<Typography.Paragraph>Right</Typography.Paragraph>),
          (rightPane)
        ]}
      >
      </ResizeBox.Split>
    </div>
  )
}
