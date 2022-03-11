/**
 * title: 联动
 * desc: 省市联动示例。
 */
import { useEffect, useState } from 'react';
import { Select, Space } from '@sensoro-design/react';

const Option = Select.Option;

const data = {
  Beijing: ['Haidian', 'Chaoyang', 'Changping'],
  Sichuan: ['Chengdu', 'Mianyang', 'Aba'],
  Guangdong: ['Guangzhou', 'Shenzhen', 'Shantou']
};

export default () => {
  const provinces = Object.keys(data);
  const defaultProvince = provinces[0];

  const [province, setProvince] = useState(defaultProvince);
  const [cities, setCities] = useState([]);
  const [city, setCity] = useState('');

  useEffect(() => {
    const cities = data[province] || [];
    setCities(cities);
    setCity(cities[0]);
  }, [province]);

  return (
    <Space size="large">
      <Select
        placeholder="Select Province"
        style={{ width: 154 }}
        onChange={(value) => setProvince(value)}
        defaultValue={province}
      >
        {provinces.map((option, index) => (
          <Option key={index} value={option}>
            {option}
          </Option>
        ))}
      </Select>
      <Select
        placeholder="Select city"
        style={{ width: 154 }}
        onChange={(value) => setCity(value)}
        value={city}
      >
        {cities.map((option, index) => (
          <Option key={index} value={option}>
            {option}
          </Option>
        ))}
      </Select>
    </Space>
  );
}
