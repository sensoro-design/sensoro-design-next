/**
 * title: 多色标签
 * desc: 我们提供多种预设色彩的标签样式，通过 `color` 设置不同颜色。如果预设值不能满足你的需求，`color` 字段也可以设置自定义色值。
 */
import { Tag } from '@sensoro-design/react';

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

const COLORS_CUSTOM = [
  '#f53f3f',
  '#7816ff',
  '#00b42a',
  '#165dff',
  '#ff7d00',
  '#eb0aa4',
  '#7bc616',
  '#86909c',
  '#b71de8',
  '#0fc6c2',
  '#ffb400',
  '#168cff',
  '#ff5722',
];

export default () => {
  return (
    <>
      {COLORS.map((color, i) => (
        <Tag key={i} closable color={color} style={{ margin: '0 16px 16px 0 ' }}>
          {color}
        </Tag>
      ))}
      <h3 style={{ color: 'var(--color-text-2)' }}>Custom Color</h3>
      {COLORS_CUSTOM.map((color, i) => (
        <Tag key={i} closable color={color} style={{ margin: '0 16px 16px 0 ' }}>
          {color}
        </Tag>
      ))}
    </>
  );
};
