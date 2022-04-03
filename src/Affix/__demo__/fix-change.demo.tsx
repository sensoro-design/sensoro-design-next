/**
 * title: 固定状态改变回调
 * desc: 当固定状态发生改变时，会触发事件。
 */
import { Affix, Button, Message } from '@sensoro-design/react';

export default () => {
  return (
    <Affix
      offsetBottom={80}
      onChange={(fixed) => {
        Message.info({ content: `${fixed}`, showIcon: true });
      }}
    >
      <Button type="primary">80px to affix bottom</Button>
    </Affix>
  )
}
