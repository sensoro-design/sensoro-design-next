/**
 * title: 自定义节点内容
 * desc: 自定义节点内容
 */
import { Timeline } from '@sensoro-design/react';

import ExclamationCircleFilled from '@sensoro-design/icons/ExclamationCircleFilled';

const TimelineItem = Timeline.Item;

export default () => {
  return (
    <Timeline>
      <TimelineItem label="2017-03-10" dotColor="#00B42A" >The first milestone</TimelineItem>
      <TimelineItem label="2018-05-22" >The second milestone</TimelineItem>
      <TimelineItem label="2020-06-22" dotColor="#F53F3F">
        The third milestone
        <ExclamationCircleFilled style={{color: 'F53F3F', fontSize: 12, marginLeft: 4 }}/>
      </TimelineItem>
      <TimelineItem label="2020-09-30" dotColor="#C9CDD4" >The fourth milestone</TimelineItem>
    </Timeline>
  )
}
