/**
 * title: 自定义渲染行数据
 * desc: 通过 `render` 自定义渲染每一个项目，可用于渲染复杂数据。
 */
import { Transfer } from '@sensoro-design/react';
import { IconStar } from '@sensoro-design/react/icon';

export default () => {
  const dataSource = new Array(8).fill(null).map((_, index) => ({
    key: `${index + 1}`,
    value: `Option ${index + 1}`,
  }));

  return (
    <Transfer
      render={(item) => (
        <span style={+item.key % 5 === 1 ? { color: '#165DFF' } : {}}>
          {item.value}
          {+item.key === 7 ? (
            <IconStar style={{ marginLeft: 4, color: 'rgb(var(--gold-6))' }} />
          ) : null}
        </span>
      )}
      dataSource={dataSource}
      defaultTargetKeys={['1', '2', '3']}
      defaultSelectedKeys={['4', '6', '7']}
      titleTexts={['To-do list', 'Selected list']}
    />
  );
}
