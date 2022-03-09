/**
 * title: 底部固定
 * desc: 元素向下滚动到距底部一定距离时固定。
 */
import { Affix, Button } from '@sensoro-design/react';

export default () => {
  return (
    <Affix offsetBottom={120}>
      <Button type="primary">120px to affix bottom</Button>
    </Affix>
  )
}
