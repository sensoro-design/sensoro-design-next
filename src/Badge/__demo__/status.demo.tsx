
/**
 * title: 状态点
 * desc: 设置 `status`，可以得到不同的状态点。`default - 默认` `processing - 进行中` `success - 成功` `warning - 提醒` `error - 错误`。
 */
import { Badge, Space } from '@sensoro-design/react';

export default () => {
  return (
    <Space size="large" direction="vertical">
      <Space size="large">
        <Badge status="default" />
        <Badge status="processing" />
        <Badge status="success" />
        <Badge status="warning" />
        <Badge status="error" />
      </Space>
      <Space size="large">
        <Badge status="default" text="Default" />
        <Badge status="processing" text="Processing" />
        <Badge status="success" text="Success" />
        <Badge status="warning" text="Warning" />
        <Badge status="error" text="Error" />
      </Space>
    </Space>
  )
}
