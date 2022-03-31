/**
 * title: 异步关闭
 * desc:
 */
import { Tag, Message } from '@sensoro-design/react';

export default () => {
  return (
    <Tag
      closable
      onClose={() => {
        return new Promise<void>((resolve, reject) => {
          setTimeout(() => {
            if (Math.random() >= 0.5) {
              resolve();
            } else {
              Message.error('Close failed');
              reject();
            }
          }, 3000);
        });
      }}
    >
      Tag 1
    </Tag>
  )
}
