
/**
 * title: 自定义文案
 * desc: 自定义开关打开（关闭）时需要显示的文字或者图标。
 */
import { Switch, Space } from '@sensoro-design/react';

import CheckOutlined from '@sensoro-design/icons/CheckOutlined';
import CloseOutlined from '@sensoro-design/icons/CloseOutlined';

export default () => {
  return (
    <Space size="large">
      <Switch checkedText="ON" uncheckedText="OFF" />
      <Switch checkedText="1" uncheckedText="0" type="round" defaultChecked />
      <Switch checkedText={<CheckOutlined />} uncheckedText={<CloseOutlined />} defaultChecked />
    </Space>
  )
}
