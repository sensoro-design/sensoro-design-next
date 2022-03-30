/**
 * title: 带图标的开关
 * desc: 自定义开关按钮上显示的图标。
 */
import { Switch, Space } from '@sensoro-design/react';

import CheckOutlined from '@sensoro-design/icons/CheckOutlined';
import CloseOutlined from '@sensoro-design/icons/CloseOutlined';

export default () => {
  return (
    <Space size="large">
      <Switch checkedIcon={<CheckOutlined />} uncheckedIcon={<CloseOutlined />} defaultChecked />
      <Switch type="round" checkedIcon={<CheckOutlined />} uncheckedIcon={<CloseOutlined />} defaultChecked />
      <Switch type="line" checkedIcon={<CheckOutlined />} uncheckedIcon={<CloseOutlined />} defaultChecked />
    </Space>
  )
}
