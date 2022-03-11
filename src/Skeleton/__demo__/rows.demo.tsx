/**
 * title: 文本行数和宽度
 * desc: 设置文本行数及文本宽度。
 */
import { Skeleton } from '@sensoro-design/react';

export default () => {
  return (
    <Skeleton text={{ rows: 3, width: ['100%', 600, 400] }} image />
  )
}
