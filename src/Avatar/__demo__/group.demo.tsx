
/**
 * title: 头像组
 * desc: 使用 `Avatar.Group` 可以使用头像组功能，可通过 `size` 指定头像的大小。
 */
import { Avatar } from '@sensoro-design/react';

const AvatarGroup = Avatar.Group;

export default () => {
  return (
    <div>
      <AvatarGroup size={32} style={{ margin: 10 }}>
        <Avatar style={{ backgroundColor: '#7BC616' }}>A</Avatar>
        <Avatar style={{ backgroundColor: '#14C9C9' }}>B</Avatar>
        <Avatar style={{ backgroundColor: '#168CFF' }}>C</Avatar>
        <Avatar style={{ backgroundColor: '#FF7D00' }}>Arco</Avatar>
        <Avatar style={{ backgroundColor: '#FFC72E' }}>Design</Avatar>
      </AvatarGroup>
      <br />
      <AvatarGroup size={24} style={{ margin: 10 }}>
        <Avatar style={{ backgroundColor: '#7BC616' }}>A</Avatar>
        <Avatar style={{ backgroundColor: '#14C9C9' }}>B</Avatar>
        <Avatar style={{ backgroundColor: '#168CFF' }}>C</Avatar>
        <Avatar style={{ backgroundColor: '#FF7D00' }}>Arco</Avatar>
        <Avatar style={{ backgroundColor: '#FFC72E' }}>Design</Avatar>
      </AvatarGroup>
    </div>
  )
}
