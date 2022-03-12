
/**
 * title: 自定义轴线样式
 * desc: 自定义轴线样式
 */
import { Timeline, Typography } from '@sensoro-design/react';

const TimelineItem = Timeline.Item;

export default () => {
  return (
    <div>
    <Timeline>
      <TimelineItem label="2017-03-10" lineType="dashed">
        The first milestone
        <br/>
        <Typography.Text type="secondary" style={{ fontSize: 12, marginTop: 4 }}>
          This is a descriptive message
        </Typography.Text>
      </TimelineItem>
      <TimelineItem label="2018-05-12" lineType="dashed">
        The second milestone
        <br/>
        <Typography.Text type="secondary" style={{ fontSize: 12, marginTop: 4 }}>
          This is a descriptive message
        </Typography.Text>
      </TimelineItem>
      <TimelineItem label="2020-09-30" lineType="dashed">
        The third milestone
        <br/>
        <Typography.Text type="secondary" style={{ fontSize: 12, marginTop: 4 }}>
          This is a descriptive message
        </Typography.Text>
      </TimelineItem>
    </Timeline>
  </div>
  )
}
