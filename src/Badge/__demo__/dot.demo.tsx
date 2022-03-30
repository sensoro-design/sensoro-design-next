/**
 * title: 小红点
 * desc: 设置 `dot`，即可只显示小红点而不显示数字。`count > 0` 时才显示。
 */
import { Badge, Space } from '@sensoro-design/react';

import BellOutlined from '@sensoro-design/icons/BellOutlined';

export default () => {
  return (
    <Space size={40}>
      <Badge count={9} dot offset={[6, -2]}>
        <a href="#">Link</a>
      </Badge>
      <Badge count={9} dot  offset={[2, -2]}>
        <BellOutlined style={{ color: '#888', fontSize: 18, verticalAlign: -3 }} />
      </Badge>
    </Space>
  )
}
