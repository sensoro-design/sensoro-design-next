
/**
 * title: 标签文本位置
 * desc: 通过 `labelPosition` 可以设置标签文本的位置。
 */
import React from 'react';
import { Timeline, Grid, Radio, Typography } from '@sensoro-design/react';

const TimelineItem = Timeline.Item;
const { Row } = Grid;

export default () => {
  const [mode, setMode] = React.useState('left');
  const [pos, setLabelPos] = React.useState('same');

  return (
    <div>
      <Row align="center">
        <Typography.Text>labelPosition: &nbsp; &nbsp;</Typography.Text>
        <Radio.Group
          value={pos}
          onChange={setLabelPos}
          options={[
            { label: 'same', value: 'same' },
            { label: 'relative', value: 'relative' },
          ]}
        />
      </Row>
      <Row align="center" style={{ margin: '20px 0 24px' }}>
        <Typography.Text>mode: &nbsp; &nbsp;</Typography.Text>
        <Radio.Group
          value={mode}
          onChange={setMode}
          options={[
            { label: 'left', value: 'left' },
            { label: 'right', value: 'right' },
            { label: 'alternate', value: 'alternate' },
          ]}
        />
      </Row>
      <Timeline mode={mode} labelPosition={pos}>
        <TimelineItem label="2017-03-10" dotColor="#52C419">
          The first milestone
        </TimelineItem>
        <TimelineItem label="2018-05-12" dotColor="#F5222D" labelPosition="same">
          The second milestone
        </TimelineItem>
        <TimelineItem label="2020-09-30" position="bottom">
          The third milestone
        </TimelineItem>
      </Timeline>
    </div>
  );
}
