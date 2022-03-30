
/**
 * title: 可关闭标签
 * desc: 可设置 `closable` 属性控制标签是否可关闭，可关闭标签可通过 `onClose` 事件执行一些关闭后操作。也可通过 `visible` 属性控制标签的显示隐藏。
 */
import { useState } from 'react';
import { Tag, Switch, Typography } from '@sensoro-design/react';

import StarOutlined from '@sensoro-design/icons/StarOutlined';

export default () => {
  const [visible, setVisible] = useState(true);

  function onClose() {
    setVisible(!visible);
  };

  return (
    <div>
      <Tag closable visible={visible} onClose={onClose} style={{ marginRight: 24 }}>
        Tag
      </Tag>
      <Tag icon={<StarOutlined />} closable visible={visible} onClose={onClose}>
        Tag
      </Tag>
      <div style={{ marginTop: 24 }}>
        <Switch
          style={{ marginRight: 8 }}
          size="small"
          checked={visible}
          onChange={onClose}
        />
        <Typography.Text>Toggle</Typography.Text>
      </div>
    </div>
  );
}
