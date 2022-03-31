
/**
 * title: 展开图标位置
 * desc: 可以通过`expandIconPosition`属性设置展开 Icon 的位置。
 */
import React from 'react';
import { Collapse, Radio, Grid, Typography } from '@sensoro-design/react';

import InfoCircleOutlined from '@sensoro-design/icons/InfoCircleOutlined';
import SettingOutlined from '@sensoro-design/icons/SettingOutlined';

import type { CollapseProps } from '@sensoro-design/react/es/Collapse'

const CollapseItem = Collapse.Item;

export default () => {
  const [position, setPosition] = React.useState<CollapseProps['expandIconPosition']>('left');

  return (
    <div>
      <Grid.Row align="center" style={{ marginBottom: 24 }}>
        <Typography.Text>Position:</Typography.Text>
        <Radio.Group
          style={{ marginLeft: 20 }}
          value={position}
          onChange={setPosition}
          options={[
            { label: 'hide', value: '' },
            { label: 'left', value: 'left' },
            { label: 'right', value: 'right' },
          ]}
        />
      </Grid.Row>

      <Collapse
        {...(position ? { expandIconPosition: position } : { expandIcon: null })}
        style={{ maxWidth: 1180 }}
      >
        <CollapseItem
          header="Beijing Toutiao Technology Co., Ltd."
          name="1"
          extra={<InfoCircleOutlined />}
        >
          Beijing Toutiao Technology Co., Ltd.
        </CollapseItem>

        <CollapseItem header="Introduce" name="2" extra={<SettingOutlined />}>
          ByteDance's core product, Toutiao ("Headlines"), is a content platform in China and around
          the world. Toutiao started out as a news recommendation engine and gradually evolved into
          a platform delivering content in various formats, such as texts, images,
          question-and-answer posts, microblogs, and videos.
        </CollapseItem>

        <CollapseItem header="The Underlying AI Technology" name="3">
          In 2016, ByteDance's AI Lab and Peking University co-developed Xiaomingbot (张小明), an
          artificial intelligence bot that writes news articles. The bot published 450 articles
          during the 15-day 2016 Summer Olympics in Rio de Janeiro. In general, Xiaomingbot
          published stories approximately two seconds after the event ended.
        </CollapseItem>
      </Collapse>
    </div>
  );
}
