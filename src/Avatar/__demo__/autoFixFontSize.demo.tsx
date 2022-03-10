
/**
 * title: 自动调整字体大小
 * desc: 如果头像是文字的话，会自动调节字体大小，来适应头像框。
 */
import { useState } from 'react';
import { Avatar, Button } from '@sensoro-design/react';

export default () => {
  const [index, setIndex] = useState(0);
  const list = ['B', 'Arco', 'Design', 'Tom', 'AD'];
  return <div>
    <Avatar style={{ marginRight: 24, verticalAlign: 'middle', backgroundColor: '#14a9f8' }}>{list[index]}</Avatar>
    <Button
      type="secondary"
      onClick={() => setIndex(index >= 4 ? 0 : index + 1)}
      style={{ verticalAlign: 'middle' }}
    >
      Change
    </Button>
  </div>;
}
