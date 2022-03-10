
/**
 * title: 自定义标签节点
 * desc: 指定 `renderTag` 来自定义标签节点。
 */
import { InputTag, Tag } from '@sensoro-design/react';

const options = ['arcoblue', 'orange', 'lime'];

function tagRender(props) {
  const { label, value, closable, onClose } = props;

  return (
    <Tag
      color={options.indexOf(value) > -1 ? value : 'gray'}
      closable={closable}
      onClose={onClose}
      style={{ margin: '2px 6px 2px 0' }}
    >
      {label}
    </Tag>
  );
}

export default () => {
  return (
    <InputTag
      allowClear
      placeholder="Please input"
      defaultValue={options}
      renderTag={tagRender}
      style={{ maxWidth: 350 }}
    />
  )
}

