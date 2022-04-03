/**
 * title: 跟随鼠标显示弹出层
 * desc: 设置 `alignPoint` 属性，可以使弹出层出现在鼠标位置。你可能想要`trigger=click`时候，在范围内点击时，弹出层一直展示，并根据鼠标位置更新弹出层位置，可以查看下一个示例。
 */
import React from 'react';
import { Trigger, Select, Grid, Skeleton, Typography } from '@sensoro-design/react';

import './styles.less';

function Popup() {
  return <div className="demo-trigger-popup" style={{width: 300}}>
    <Skeleton />
  </div>;
}

export default () => {
  const [trigger, setTrigger] = React.useState(['click'])

  return (
    <div>
      <Grid.Row align="center" style={{marginBottom: 20}}>
        <Typography.Text>Trigger</Typography.Text>
        <Select
          value={trigger}
          style={{width: 300, marginLeft: 20}}
          options={['click', 'hover', 'contextMenu']}
          onChange={setTrigger}
          mode="multiple"
        ></Select>
      </Grid.Row>
      <Trigger
        popup={() => <Popup/>}
        alignPoint
        position="bl"
        popupAlign={{ bottom: 8, left: 8}}
        trigger={trigger}
      >
        <div className="demo-trigger-manual">
          <Typography.Text>Click</Typography.Text>
        </div>
      </Trigger>
    </div>
  )
}
