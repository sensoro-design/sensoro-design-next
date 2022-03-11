
/**
 * title: 自定义弹出框宽度
 * desc:
 * 这个例子展示了弹出框可以根据内容自动调节宽度，最小宽度为输入框的宽度。
 * `triggerProps.autoAlignPopupWidth` 参数为弹出框宽度跟输入框保持一致。
 * `triggerProps.autoAlignPopupMinWidth` 参数为弹出框最小宽度跟输入框保持一致。
 * 可以自由组合。
 */
import { Select, Space } from '@sensoro-design/react';

const Option = Select.Option;

export default () => {
  return (
    <Space size="large">
      <Select
        placeholder="Please select"
        style={{ width: 154 }}
        triggerProps={{
          autoAlignPopupWidth: false,
          position: 'bl',
        }}
      >
        <Option value="1">Beijing</Option>
        <Option disabled value="2">
          Shanghai
        </Option>
        <Option value="3">Guangzhou</Option>
        <Option value="4">Shenzhen</Option>
      </Select>
      <Select
        placeholder="Please select"
        style={{ width: 154 }}
        triggerProps={{
          autoAlignPopupWidth: false,
          autoAlignPopupMinWidth: true,
          position: 'bl',
        }}
      >
        <Option value="1">Beijing Beijing Beijing Beijing Beijing</Option>
        <Option disabled value="2">
          Shanghai
        </Option>
        <Option value="3">Guangzhou</Option>
        <Option value="4">Shenzhen</Option>
      </Select>
    </Space>
  )
}
