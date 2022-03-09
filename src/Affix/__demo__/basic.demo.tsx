/**
 * title: 基本用法
 * desc: 基本用法，不设置固定位置时，当页面滚动元素不可见时，元素固定在页面最顶部。
 */
import { Affix, Button } from '@sensoro-design/react';

export default () => {
  return (
    <Affix>
      <Button type="primary">Affix Top</Button>
    </Affix>
  )
}
