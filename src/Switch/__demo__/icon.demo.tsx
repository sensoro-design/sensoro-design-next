
/**
 * title: 带图标的开关
 * desc: 自定义开关按钮上显示的图标。
 */
import { Switch, Space } from '@sensoro-design/react';
import { IconCheck, IconClose } from '@sensoro-design/react/icon';

export default () => {
  return (
    <Space size="large">
      <Switch checkedIcon={<IconCheck />} uncheckedIcon={<IconClose />} defaultChecked />
      <Switch type="round" checkedIcon={<IconCheck />} uncheckedIcon={<IconClose />} defaultChecked />
      <Switch type="line" checkedIcon={<IconCheck />} uncheckedIcon={<IconClose />} defaultChecked />
    </Space>
  )
}
