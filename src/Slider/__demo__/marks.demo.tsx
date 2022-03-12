
/**
 * title: 添加标签文本
 * desc: 可以通过传入 `marks` 添加标签文本。当设置 `onlyMarkValue` 的时候，只可以选择节点值。此时`step`会被忽略。
 */
import React from 'react';
import { Slider } from '@sensoro-design/react';
export default class Demo extends React.Component {
  render() {
    return (
      <div style={{ width: 240 }}>
        <Slider
          defaultValue={5}
          max={15}
          marks={{
            0: '0km',
            5: '5km',
            10: '10km',
            15: '15km',
          }}
          style={{ marginBottom: 80 }}
        />
        <Slider
          onlyMarkValue
          defaultValue={10}
          max={15}
          marks={{
            0: '0km',
            5: '5km',
            10: '10km',
            15: '15km',
          }}
        />
      </div>
    );
  }
}
