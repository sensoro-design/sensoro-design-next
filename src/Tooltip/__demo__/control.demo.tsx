
/**
 * title: 受控模式
 * desc:
 *  通过 `popupVisible` 和 `onVisibleChange` 控制下拉框的展开和收起。
 * 具体 onVisibleChange 的触发时机可查看[Trigger](/react/components/trigger#受控用法)组件文档
 */
import React from 'react';
import { Tooltip, Button, Switch, Typography } from '@sensoro-design/react';

const { Text } = Typography;

export default () => {
  const [visible, setVisible] = React.useState(false)

  return <div>
      <Text style={{ marginRight: 10 }}>{visible ? 'Hide' : 'Show'} Tooltip</Text>
      <Switch
        onChange={() => {setVisible(!visible)}}
        >
      </Switch>
      <br/>
      <br/>
      <Tooltip
        position="bottom"
        content="Mouse over to display tooltip"
        popupVisible={visible}
      >
        <Button>Be Controled</Button>
      </Tooltip>
  </div>
}
