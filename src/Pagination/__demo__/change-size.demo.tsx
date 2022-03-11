/**
 * title: 改变每页展示条目
 * desc: 可定义每页展示条目数量。
 */
import { Pagination } from '@sensoro-design/react';

export default () => {
  return (
    <Pagination total={200} sizeCanChange />
  )
}
