
/**
 * title: 时间轴展示类型
 * desc: 设置 `mode=alternate`时将会交替展示内容。同时可以通过设置 `TimelineItem` 的 `positon`属性控制时间轴节点的位置.
 */
import { Timeline, Grid } from '@sensoro-design/react';

const TimelineItem = Timeline.Item;

function Demo({ mode }) {
  return (
    <Timeline mode={mode} style={{flex: 1}}>
      <TimelineItem label="2017-03-10">The first milestone</TimelineItem>
      <TimelineItem label="2018-05-12">The second milestone</TimelineItem>
      <TimelineItem label="2020-09-30" position="bottom">
        The third milestone
      </TimelineItem>
    </Timeline>
  );
}

export default () => {
  return (
    <Grid.Row justify="space-between">
      <Demo mode="alternate" />
      <Demo mode="right" />
    </Grid.Row>
  )
}
