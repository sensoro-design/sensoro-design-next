/**
 * title: 只读
 * desc: 通过 `readonly` 指定 `Rate` 为只读。
 */
import { Rate } from '@sensoro-design/react';

export default () => {
  return <Rate readonly defaultValue={3.5} allowHalf />
}
