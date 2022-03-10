
/**
 * title: 自定义下拉菜单的展示
 * desc: Customize the popup content by `dropdownRender`
 */
import { Cascader, Divider, Space } from '@sensoro-design/react';

const options = [
  {
    value: 'beijing',
    label: 'Beijing',
    children: [
      {
        value: 'Beijing',
        label: 'Beijing',
        children: [
          {
            value: 'chaoyang',
            label: 'Chaoyang',
            children: [
              {
                value: 'datunli',
                label: 'Datunli',
              },
            ],
          },
        ],
      },
    ],
  },
  {
    value: 'shanghai',
    label: 'Shanghai',
    children: [
      {
        value: 'shanghaishi',
        label: 'Shanghai',
        children: [
          {
            value: 'huangpu',
            label: 'Huangpu',
          },
        ],
      },
    ],
  },
];

export default () => {
  return (
    <Space size="large">
      <Cascader
        placeholder="Please select ..."
        style={{ width: 300  }}
        options={options}
        dropdownRender={menu => {
          return <div >
              {menu}
            <Divider style={{margin: 0}}/>
            <div style={{margin: 4}}> The footer content</div>
          </div>
        }}
      />
      <Cascader
        style={{ width: 300  }}
        dropdownColumnRender={(menu, level) => {
          return <div style={{ height: '100%', display: 'flex', flexDirection: 'column'}}>
            <div style={{flex: 1}}>
              {menu}
            </div>
            <Divider style={{margin: 0}}/>
            <div style={{margin: 4}}> The footer content(Level {level})</div>
          </div>
        }}
        options={options}
      />
    </Space>
  )
}
