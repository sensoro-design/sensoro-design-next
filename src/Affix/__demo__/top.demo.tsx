/**
 * title: 顶部固定
 * desc: 元素向上滚动到距顶部一定距离时固定。
 */
import { Affix, Button } from '@sensoro-design/react';

export default () => {
  return (
    <Affix offsetTop={80}>
      <Button type="primary">80px to affix top</Button>
    </Affix>
  )
}
