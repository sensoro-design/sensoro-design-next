/**
 * title: 带边框的标签
 * desc: 通过参数 `bordered`，可以显示带边框的标签。
 */
import { Tag, Space } from '@sensoro-design/react';

const COLORS = [
  'red',
  'orangered',
  'orange',
  'gold',
  'lime',
  'green',
  'cyan',
  'blue',
  'arcoblue',
  'purple',
  'pinkpurple',
  'magenta',
  'gray',
];

export default () => {
  return (
    <Space wrap>
      <Tag bordered >
        Default
      </Tag>
      {COLORS.map((color, i) => <Tag key={i} color={color} bordered>{color}</Tag>)}
    </Space>
  )
}
