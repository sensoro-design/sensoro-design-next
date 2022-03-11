/**
 * title: 全部展示
 * desc: 展示全部配置项。
 */
import { Pagination } from '@sensoro-design/react';

export default () => {
  return (
    <div>
      <Pagination showTotal total={200} showJumper sizeCanChange style={{ width: 800, marginBottom: 20 }} />
      <Pagination disabled showTotal total={200} showJumper sizeCanChange style={{ width: 800 }} />
    </div>
  )
}
