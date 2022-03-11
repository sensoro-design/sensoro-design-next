/**
 * title: 更多页码
 * desc: 页码数较大时，使用多页码的分页样式。
 */
import { Pagination } from '@sensoro-design/react';

export default () => {
  return (
    <Pagination defaultCurrent={5} total={200} sizeCanChange />
  )
}
