/**
 * title: 自定义节点
 * desc: 可以通过属性 `dotColor`, `dotType` 设置节点的颜色以及节点类型。同时可通过 `dot` 直接传入 `ReactNode`自定义节点样式。优先级高于 `dotColor` 和 `dotType`
 */
import { Timeline } from '@sensoro-design/react';

import CheckOutlined from '@sensoro-design/icons/CheckOutlined';
import ClockCircleOutlined from '@sensoro-design/icons/ClockCircleOutlined';

const TimelineItem = Timeline.Item;

export default () => {
  return (
    <div style={{ display: 'flex' }}>
    <Timeline style={{ marginRight: 40 }}>
      <TimelineItem label="2020-04-12" dotColor="#00B42A">
        The first milestone
      </TimelineItem>
      <TimelineItem label="2020-05-17">The second milestone</TimelineItem>
      <TimelineItem
        label="2020-06-22"
        dot={<ClockCircleOutlined style={{ fontSize: 12, color: '#F53F3F' }} />}
      >
        The third milestone
      </TimelineItem>
      <TimelineItem label="2020-06-22" dotColor="var(--color-fill-4)">
        The third milestone
      </TimelineItem>
    </Timeline>

    <Timeline style={{ marginRight: 40 }}>
      <TimelineItem
        label="2020-04-12"
        dot={
          <CheckOutlined
            style={{ fontSize: 12, padding: 2, boxSizing: 'border-box', borderRadius: '50%', backgroundColor: 'var(--color-primary-light-1)' }}
          />
        }
      >
        The first milestone
      </TimelineItem>
      <TimelineItem
        label="2020-05-17"
        dot={
          <CheckOutlined
            style={{ fontSize: 12, padding: 2, boxSizing: 'border-box', borderRadius: '50%', backgroundColor: 'var(--color-primary-light-1)' }}
          />
        }
      >
        The second milestone
      </TimelineItem>
      <TimelineItem label="2020-06-22">The third milestone</TimelineItem>
      <TimelineItem label="2020-06-22" dotColor="var(--color-fill-4)">
        The third milestone
      </TimelineItem>
    </Timeline>

    <Timeline>
      <TimelineItem label="2020-04-12">The first milestone</TimelineItem>
      <TimelineItem label="2020-05-17" dotColor="var(--color-fill-4)">
        The second milestone
      </TimelineItem>
      <TimelineItem label="2020-06-22" dotColor="var(--color-fill-4)">
        The third milestone
      </TimelineItem>
    </Timeline>
  </div>
  )
}
