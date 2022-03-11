/**
 * title: 简洁
 * desc: 在空间有限的场景下，可以将 `simple` 设置为 `true`，使用较为简单的文本分页方式。
 */
import { Pagination } from '@sensoro-design/react';

export default () => {
  return (
    <Pagination simple total={50} size="small" />
  )
}
