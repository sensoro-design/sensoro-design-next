/**
 * title: 多个面板分割
 * desc: 可以通过 `SplitGroup` 进行多个面板分割，同时还支持快速收缩及手动收缩
 */
import { useState } from 'react'
import { ResizeBox, Typography } from '@sensoro-design/react';

import DoubleLeftOutlined from '@sensoro-design/icons/DoubleLeftOutlined';
import DoubleRightOutlined from '@sensoro-design/icons/DoubleRightOutlined';

import './styles.less';

const { Paragraph, Text } = Typography;

const panes = [
  { size: 0.2, collapsible: { prev: true } },
  { size: 0.4, min: '50px' },
  {
    resizable: false,
    collapsible: {
      prev: {
        // 自定义伸缩杆向前快速收缩触发器
        icon: <DoubleLeftOutlined />,
        onClick: (_, collapsed, status, activeIndex) => {
          console.log('快速收缩：', collapsed, status, activeIndex);
        },
      },
      next: {
        icon: <DoubleRightOutlined />,
        onClick: (_, collapsed, status, activeIndex) => {
          console.log('快速收缩：', collapsed, status, activeIndex);
        },
      },
    },
    // 自定义伸缩杆
    trigger: (prev, resize, next) => {
      return (
        <div className="resizebox-split-group-demo-trigger">
          {prev}
          {resize}
          {next}
        </div>
      );
    },
  },
  {}
];

const verticalPanes = [{ collapsible: true }, { min:0.1, collapsible: { next: true } }, {}];

const HorizontalSplitGroup = () => {
  const [offsets, setOffsets] = useState([]);
  return (
    <ResizeBox.SplitGroup
      onMoving={(_, sizes) => setOffsets(sizes)}
      className="resizebox-split-group-demo-horizontal"
      panes={panes.map((obj, index) => ({
        content: (
          <div className="resizebox-split-group-demo-content">
            <Paragraph>
              <Paragraph>
                <Text mark>pane {index}</Text>
                <br />
                <Text code>min：{obj.min || 0}</Text>
                <br />
                <Text code>size： {obj.size || 'not set'}</Text>
                <br />
                <Text code>offset：{offsets[index] || 'initial'}</Text>
              </Paragraph>
            </Paragraph>
          </div>
        ),
        ...obj,
      }))}
    />
  );
};

const VerticalSplitGroup = () => {
  return (
    <ResizeBox.SplitGroup
      className="resizebox-split-group-demo-vertical"
      direction="vertical"
      panes={verticalPanes.map((obj, index) => ({
        content: (
          <div className="resizebox-split-group-demo-content">
            <Text mark>pane {index}</Text>
          </div>
        ),
        ...obj,
      }))}
    />
  );
};

export default () => {
  return (
    <ResizeBox.SplitGroup
      direction="vertical"
      className="resizebox-split-group-demo"
      panes={[{ content: <HorizontalSplitGroup /> ,size: 0.4 }, { content: <VerticalSplitGroup /> }]}
    />
  );
}
