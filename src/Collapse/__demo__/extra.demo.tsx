/**
 * title: 额外节点
 * desc: 通过 `extra` 可以设置额外节点。
 */
import { Collapse } from '@sensoro-design/react';

import MoreOutlined from '@sensoro-design/icons/MoreOutlined';

const CollapseItem = Collapse.Item;

export default () => {
  return (
    <Collapse destroyOnHide defaultActiveKey={['1', '2']} style={{ maxWidth: 1180 }}>
      <CollapseItem
        header="Beijing Toutiao Technology Co., Ltd."
        name="1"
        extra={<MoreOutlined />}
      >
        Beijing Toutiao Technology Co., Ltd.
      </CollapseItem>

      <CollapseItem
        header="Beijing Toutiao Technology Co., Ltd."
        name="2"
        extra={<MoreOutlined />}
      >
        ByteDance's core product, Toutiao ("Headlines"), is a content platform in China and around the
        world. Toutiao started out as a news recommendation engine and gradually evolved into a
        platform delivering content in various formats, such as texts, images, question-and-answer
        posts, microblogs, and videos.
      </CollapseItem>

      <CollapseItem
        header="Beijing Toutiao Technology Co., Ltd."
        name="3"
        extra={<MoreOutlined />}
      >
        In 2016, ByteDance's AI Lab and Peking University co-developed Xiaomingbot (张小明), an
        artificial intelligence bot that writes news articles. The bot published 450 articles during
        the 15-day 2016 Summer Olympics in Rio de Janeiro. In general, Xiaomingbot published stories
        approximately two seconds after the event ended.
      </CollapseItem>
    </Collapse>
  )
}
