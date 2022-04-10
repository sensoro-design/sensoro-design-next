/**
 * title: 搜索树
 * desc:
 */
import { useState, useEffect } from 'react';
import { Tree, Input } from '@sensoro-design/react';

const TreeData = [
  {
    label: 'Trunk 0-0',
    key: '0-0',
    children: [
      {
        label: 'Branch 0-0-1',
        key: '0-0-1',
        children: [
          {
            label: 'Leaf 0-0-1-1',
            key: '0-0-1-1',
          },
          {
            label: 'Leaf 0-0-1-2',
            key: '0-0-1-2',
          },
        ],
      },
    ],
  },
  {
    label: 'Trunk 0-1',
    key: '0-1',
    children: [
      {
        label: 'Branch 0-1-1',
        key: '0-1-1',
        children: [
          {
            label: 'Leaf 0-1-1-0',
            key: '0-1-1-0',
          },
        ],
      },
      {
        label: 'Branch 0-1-2',
        key: '0-1-2',
        children: [
          {
            label: 'Leaf 0-1-2-0',
            key: '0-1-2-0',
          },
        ],
      },
    ],
  },
];

function searchData(inputValue) {
  const loop = (data) => {
    const result = [];
    data.forEach((item) => {
      if (item.title.toLowerCase().indexOf(inputValue.toLowerCase()) > -1) {
        result.push({ ...item });
      } else if (item.children) {
        const filterData = loop(item.children);
        if (filterData.length) {
          result.push({
            ...item,
            children: filterData,
          });
        }
      }
    });
    return result;
  };

  return loop(TreeData);
}

export default () => {
  const [treeData, setTreeData] = useState(TreeData);
  const [inputValue, setInputValue] = useState('');

  useEffect(() => {
    if (!inputValue) {
      setTreeData(TreeData);
    } else {
      const result = searchData(inputValue);
      setTreeData(result);
    }
  }, [inputValue]);

  return (
    <div>
      <Input.Search style={{ marginBottom: 8, maxWidth: 240 }} onChange={setInputValue} />

      <Tree
        treeData={treeData}
        renderTitle={(node) => {
          const label = node.label as string;

          if (inputValue) {
            const index = label.toLowerCase().indexOf(inputValue.toLowerCase());
            if (index === -1) {
              return label;
            }
            const prefix = label.substr(0, index);
            const suffix = label.substr(index + inputValue.length);

            return (
              <span>
                {prefix}
                <span style={{ color: 'var(--color-primary-light-4)' }}>{label.substr(index, inputValue.length)}</span>
                {suffix}
              </span>
            );
          }
          return label;
        }}
      ></Tree>
    </div>
  );
};
