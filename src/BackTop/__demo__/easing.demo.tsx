/**
 * title: 滚动类型和滚动时间
 * desc: 当然，我们提供了更丰富的功能可供使用，你可以通过指定 `easing` 和 `duration` 来指定滚动到顶部的过度效果和滚动时间。
 */
import { useState } from 'react';
import { BackTop, Select, Input, Typography } from '@sensoro-design/react';

import ArrowRightOutlined from '@sensoro-design/icons/ArrowRightOutlined';

import './styles.less';

const { Paragraph, Text } = Typography;

const easingTypes = [
  'linear',
  'quadIn',
  'quadOut',
  'quadInOut',
  'cubicIn',
  'cubicOut',
  'cubicInOut',
  'quartIn',
  'quartOut',
  'quartInOut',
  'quintIn',
  'quintOut',
  'quintInOut',
  'sineIn',
  'sineOut',
  'sineInOut',
  'bounceIn',
  'bounceOut',
  'bounceInOut',
];

export default () => {
  const [easing, setEasing] = useState('linear');
  const [duration, setDuration] = useState(200);

  return (
    <div>
      <div style={{ margin: 12 }}>
        <Text style={{ marginRight: 8 }}>Easing</Text>
        <Select onChange={setEasing} defaultValue={easing} style={{ width: 200, marginRight: 10 }}>
          {easingTypes.map((easing) => (
            <Select.Option key={easing} value={easing}>
              {easing}
            </Select.Option>
          ))}
        </Select>
        <Text style={{ margin: '0 8px 0 40px' }}>Time</Text>
        <Input
          onChange={setDuration}
          style={{ width: 200 }}
          value={duration}
          placeholder="Please enter the easing time"
        />
      </div>
      <div style={{ position: 'relative' }}>
        <BackTop
          easing={easing}
          duration={duration}
          style={{ position: 'absolute', right: 60, bottom: 60 }}
          visibleHeight={30}
          target={() => document.getElementById('custom_backtop2')}
        >
          <div className="custom-backtop">
            <ArrowRightOutlined />
            <br />
            TOP
          </div>
        </BackTop>
        <div id="custom_backtop2" style={{ height: 300, overflow: 'auto', padding: '8px 12px' }}>
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
    </div>
  );
}
