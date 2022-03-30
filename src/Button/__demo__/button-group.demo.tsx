/**
 * title: 组合按钮
 * desc: 可用在同级多项操作，以按钮组合方式出现
 */
import React from 'react';
import { Button, Space } from '@sensoro-design/react';

import LeftOutlined from '@sensoro-design/icons/LeftOutlined';
import RightOutlined from '@sensoro-design/icons/RightOutlined';
import StarOutlined from '@sensoro-design/icons/StarOutlined';
import DownOutlined from '@sensoro-design/icons/DownOutlined';
import EllipsisOutlined from '@sensoro-design/icons/EllipsisOutlined';
import SettingOutlined from '@sensoro-design/icons/SettingOutlined';
import PlusOutlined from '@sensoro-design/icons/PlusOutlined';

const ButtonGroup = Button.Group;

export default () => {
  return (
    <Space size="large" direction="vertical">
      <Space size="large">
        <ButtonGroup>
          <Button>Publish</Button>
          <Button icon={<DownOutlined />} />
        </ButtonGroup>
        <ButtonGroup>
          <Button type="secondary">Publish</Button>
          <Button type="secondary" icon={<EllipsisOutlined />} />
        </ButtonGroup>
      </Space>
      <ButtonGroup>
        <Button type="primary">Publish</Button>
        <Button type="primary" icon={<DownOutlined />} />
      </ButtonGroup>
      <Space size="large">
        <ButtonGroup>
          <Button type="primary" icon={<LeftOutlined />} style={{ padding: '0 8px' }}>Prev</Button>
          <Button type="primary" style={{ padding: '0 8px' }}>Next<RightOutlined /></Button>
        </ButtonGroup>
        <ButtonGroup>
          <Button type="primary" icon={<StarOutlined />} />
          <Button type="primary" icon={<PlusOutlined />} />
          <Button type="primary" icon={<SettingOutlined />} />
        </ButtonGroup>
        <ButtonGroup>
          <Button type="primary" icon={<StarOutlined />}>Favorite</Button>
          <Button type="primary" icon={<SettingOutlined />}>Setting</Button>
        </ButtonGroup>
      </Space>
    </Space>
  )
}
