/**
 * title: 迷你尺寸
 * desc: 适用于小场景或数字气泡样式。
 */
import { Tooltip, Typography } from '@sensoro-design/react';

const { Text } = Typography;

export default () => {
  return (
    <Tooltip mini content="123456789" >
      <Text>Mouse over to display tooltip</Text>
    </Tooltip>
  )
}
