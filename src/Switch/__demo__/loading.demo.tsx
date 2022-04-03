/**
 * title: 加载中
 * desc: 开关处于加载中状态，不可点击。
 */
import { Switch, Space } from '@sensoro-design/react';

export default () => {
  return (
    <Space size="large" direction="vertical">
      <Space size="large">
        <Switch loading defaultChecked />
        <Switch loading />
        <Switch loading type="round" defaultChecked />
        <Switch loading type="round" />
        <Switch loading type="line" defaultChecked />
        <Switch loading type="line" />
      </Space>
      <Space size="large">
        <Switch loading size="small" defaultChecked />
        <Switch loading size="small" />
        <Switch loading size="small" type="round" defaultChecked />
        <Switch loading size="small" type="round" />
        <Switch loading size="small" type="line" defaultChecked />
        <Switch loading size="small" type="line" />
      </Space>
    </Space>
  )
}
