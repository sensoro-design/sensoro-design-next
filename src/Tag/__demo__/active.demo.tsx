
/**
 * title: 动态编辑标签
 * desc: 可动态添加和删除标签。
 */
import { useState } from 'react';
import { Tag, Button, Input, Message } from '@sensoro-design/react';
import { IconPlus } from '@sensoro-design/react/icon';

export default () => {
  const [tags, setTags] = useState(['Tag 1', 'Tag 2', 'Tag 3']);
  const [showInput, setShowInput] = useState(false);
  const [inputValue, setInputValue] = useState('');

  function addTag() {
    if (inputValue) {
      tags.push(inputValue);
      setTags(tags);
      setInputValue('');
    }
    setShowInput(false);
  }

  function removeTag(removeTag) {
    const newTags = tags.filter((tag) => tag !== removeTag);
    setTags(newTags);
  }

  return (
    <div style={{ display: 'flex', alignItems: 'flex-start' }}>
      {tags.map((tag, index) => {
        return (
          <Tag
            key={tag}
            closable={index !== 0}
            onClose={() => removeTag(tag)}
            style={{ marginRight: 24 }}
          >
            {tag}
          </Tag>
        );
      })}
      {showInput ? (
        <Input
          autoFocus
          size="mini"
          value={inputValue}
          style={{ width: 84 }}
          onPressEnter={addTag}
          onBlur={addTag}
          onChange={setInputValue}
        />
      ) : (
        <Tag
          icon={<IconPlus />}
          style={{
            width: 84,
            backgroundColor: 'var(--color-fill-2)',
            border: '1px dashed var(--color-fill-3)',
            cursor: 'pointer',
          }}
          onClick={() => setShowInput(true)}
        >
          Add Tag
        </Tag>
      )}
    </div>
  );
}
