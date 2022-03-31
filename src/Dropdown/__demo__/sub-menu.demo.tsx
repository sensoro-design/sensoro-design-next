/**
 * title: 多级菜单
 * desc: 带有多级菜单的下拉框。
 */
import { Dropdown, Menu, Button } from '@sensoro-design/react';

import DownOutlined from '@sensoro-design/icons/DownOutlined';

const SubMenu = Menu.SubMenu;
const MenuItem = Menu.Item;

const data = [
  ['Beijing', ['Haidian', 'Chaoyang', 'Daxing']],
  ['Shanghai', ['Pudong', 'Huangpu', 'Xuhui']],
  ['Guangzhou', ['Baiyun', 'Tianhe', 'Fanyu']],
  ['Shenzhen', ['Futian', 'Luohu', 'Nanshan']],
];

const dropList = (
  <Menu>
    {data.map((city, outerIndex) => {
      if (city.length > 1) {
        const districts = city[1];
        return (
          <SubMenu key={outerIndex} title={<span>{city[0]}</span>}>
            {districts.map((district, innerIndex) => {
              return (
                <MenuItem key={`${outerIndex}_${innerIndex}`}>{districts[innerIndex]}</MenuItem>
              );
            })}
          </SubMenu>
        );
      }

      return <MenuItem key={outerIndex}>{city[0]}</MenuItem>;
    })}
  </Menu>
);

export default () => {
  return (
    <div className="dropdown-demo">
      <Dropdown trigger="click" droplist={dropList} position="bl">
        <Button type="text">
          Click
          <DownOutlined />
        </Button>
      </Dropdown>
    </div>
  );
}
