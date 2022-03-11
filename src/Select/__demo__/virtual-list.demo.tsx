/**
 * title: 大数据
 * desc:
 * `Select` 使用了虚拟滚动技术，在大量数据的情况也能保证性能。
 * **当指定了 `triggerProps.autoAlignPopupWidth = false` 且 `Option.label` 为非文本类型时，由于无法在选项列表首次渲染时获取选项的最大宽度，虚拟滚动会被自动关闭。**
 */
import { Select, Typography } from '@sensoro-design/react';

const Option = Select.Option;
const options = new Array(10000).fill(null).map((value, index) => `Item ${index}`);

export default () => {
  return (
    <>
      <Typography.Title heading={6}>10000 items</Typography.Title>
      <Select mode="multiple" allowCreate placeholder="Select a tag" allowClear style={{ width: 345 }}>
        {options.map((option) => (
          <Option key={option} value={option}>
            {option}
          </Option>
        ))}
      </Select>
    </>
  )
}
