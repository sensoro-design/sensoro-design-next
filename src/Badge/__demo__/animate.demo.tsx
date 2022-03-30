/**
 * title: 动画效果
 * desc: `count` 改变时候存在动画效果。
 */
import React from 'react';
import { Badge, Avatar, Grid, Button, Switch } from '@sensoro-design/react';

import PlusOutlined from '@sensoro-design/icons/PlusOutlined';
import MinusOutlined from '@sensoro-design/icons/MinusOutlined';

export default () => {
  const [count, setCount] = React.useState(12);
  const [dot, setDot] = React.useState(true);

  return <div>
    <Grid.Row align="center" style={{marginBottom: 20}}>
      <Badge dot={dot} count={dot ? count : 0} style={{ marginRight: 50 }}>
        <Avatar shape="square"> </Avatar>
      </Badge>
      <Switch checked={dot} onChange={setDot}></Switch>
    </Grid.Row>
    <Grid.Row  align="center" >
      <Badge count={count} style={{ marginRight: 50 }}>
        <Avatar shape="square"> </Avatar>
      </Badge>
      <Button.Group>
        <Button  icon={<PlusOutlined />} onClick={() => setCount(c => c + 1)}>
        </Button>
        <Button  icon={<MinusOutlined />} onClick={() => setCount(c => Math.max(c - 1, 0))}>
        </Button>
      </Button.Group>
  </Grid.Row>
  </div>
}
