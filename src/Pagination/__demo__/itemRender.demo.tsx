/**
 * title: 上一步和下一步
 * desc: 设置 `itemRender`，可以自由定制分页按钮。
 */
import { Pagination } from '@sensoro-design/react';

function itemRender(page, type, originElement) {
  if (type === 'prev') {
    return <a style={{ fontSize: 14, margin: '0 8px' }}>Prev</a>;
  }
  if (type === 'next') {
    return <a style={{ fontSize: 14, margin: '0 8px' }}>Next</a>;
  }
  return originElement;
}

export default () => {
  return <Pagination itemRender={itemRender} total={200} />
}
