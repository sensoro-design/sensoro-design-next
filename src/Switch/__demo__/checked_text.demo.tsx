
/**
 * title: 自定义文案
 * desc: 自定义开关打开（关闭）时需要显示的文字或者图标。
 */
import { Switch, Space } from '@sensoro-design/react';
import { IconCheck, IconClose } from '@sensoro-design/react/icon';

export default () => {
  return (
    <Space size="large">
      <Switch checkedText="ON" uncheckedText="OFF" />
      <Switch checkedText="1" uncheckedText="0" type="round" defaultChecked />
      <Switch checkedText={<IconCheck />} uncheckedText={<IconClose />} defaultChecked />
    </Space>
  )
}
