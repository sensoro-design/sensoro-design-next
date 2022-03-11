/**
 * title: 自定义标题栏
 * desc: `titleTexts` 允许传入 render 函数以完全自定义 Transfer 的标题栏，函数接收的参数为 `{ countTotal: number; countSelected: number; checkbox: ReactNode; clear: () => void }`。
 */
import { Transfer } from '@sensoro-design/react';
import { IconDelete } from '@sensoro-design/react/icon';

export default () => {
  const dataSource = new Array(8).fill(null).map((_, index) => ({
    key: `${index + 1}`,
    value: `Option ${index + 1}`,
  }));

  const styleHeader = { display: 'flex', alignItems: 'center', justifyContent: 'space-between' };

  return (
    <Transfer
      dataSource={dataSource}
      defaultTargetKeys={['1', '2', '3']}
      defaultSelectedKeys={['4', '6', '7']}
      titleTexts={[
        ({ countTotal, countSelected, checkbox }) => {
          return (
            <div style={styleHeader}>
              {`LEFT ${countSelected}-${countTotal}`}
              {checkbox}
            </div>
          );
        },
        ({ countTotal, countSelected, clear }) => {
          return (
            <div style={styleHeader}>
              {`RIGHT ${countSelected}-${countTotal}`}
              <IconDelete style={{ cursor: 'pointer' }} onClick={clear} />
            </div>
          );
        },
      ]}
    />
  );
}
