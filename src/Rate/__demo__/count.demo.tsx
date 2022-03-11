/**
 * title: 任意长度的评分
 * desc: 通过指定 `count` 来打造任意长度的评分组件。
 */
import { Rate } from '@sensoro-design/react';

export default () => {
  return <Rate count={10} allowHalf />
}
