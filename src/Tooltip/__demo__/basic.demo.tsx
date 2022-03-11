/**
 * title: 基础用法
 * desc: 鼠标移入，气泡出现，鼠标移出，气泡消失。
 */
import { Tooltip, Typography } from '@sensoro-design/react';

const { Text } = Typography;

export default () => {
  return (
    <div>
      <Tooltip content="This is tooltip content">
        <Text style={{ marginRight: 20 }}>Mouse over to display tooltip</Text>
      </Tooltip>
      <Tooltip content="This is a two-line tooltip content.This is a two-line tooltip content.">
        <Text>Mouse over to display multiple lines tooltip</Text>
      </Tooltip>
    </div>
  )
}
