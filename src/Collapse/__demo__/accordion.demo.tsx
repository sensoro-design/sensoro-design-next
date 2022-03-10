/**
 * title: 手风琴模式
 * desc: 手风琴模式。
 */
import { Collapse } from '@sensoro-design/react';

const CollapseItem = Collapse.Item;

export default () => {
  return (
    <Collapse accordion style={{ maxWidth: 1180 }}>
      <CollapseItem header="Beijing Toutiao Technology Co., Ltd." name="1">
        Beijing Toutiao Technology Co., Ltd.
      </CollapseItem>
      <CollapseItem header="Beijing Toutiao Technology Co., Ltd." name="2">
        Beijing Toutiao Technology Co., Ltd.
      </CollapseItem>
      <CollapseItem header="Beijing Toutiao Technology Co., Ltd." name="3">
        Beijing Toutiao Technology Co., Ltd.
      </CollapseItem>
    </Collapse>
  )
}
