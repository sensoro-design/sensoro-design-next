/**
 * title: 基础用法
 * desc: 基本用法
 */
import React from 'react';
import { Switch, Timeline, Typography } from '@sensoro-design/react';

const TimelineItem = Timeline.Item;
export default class Demo extends React.Component {
  state = {
    reverse: false,
  };

  render() {
    const { reverse } = this.state;
    return (
      <div>
        <div style={{ marginBottom: 40 }}>
          <Typography.Text style={{ verticalAlign: 'middle', marginRight: 8 }}>Reverse</Typography.Text>
          <Switch
            style={{ verticalAlign: 'middle' }}
            size="small"
            checked={reverse}
            onChange={() => {
              this.setState({ reverse: !this.state.reverse });
            }}
          />
        </div>
        <Timeline reverse={this.state.reverse}>
          <TimelineItem label="2017-03-10">The first milestone</TimelineItem>
          <TimelineItem label="2018-05-12">The second milestone</TimelineItem>
          <TimelineItem label="2020-09-30">The third milestone</TimelineItem>
        </Timeline>
      </div>
    );
  }
}
