/**
 * title: 展示总数
 * desc: 您可以通过设置 `showTotal` 来显示数据总数。
 */
import { Pagination } from '@sensoro-design/react';

export default () => {
  return (
    <div>
      <Pagination showTotal total={50} style={{ marginBottom: 20 }} />
      <Pagination showTotal={(total, range) => <span>{`${range[0]} - ${range[1]} of ${total} items`}</span>} total={200} />
    </div>
  )
}
