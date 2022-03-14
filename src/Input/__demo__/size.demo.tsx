/**
 * title: 输入框尺寸
 * desc: 输入框定义了四种默认尺寸（`small`, `default`, `large`），分别为24px，32px，40px。
 */
import React, { useState } from 'react';
import { Input, Radio, Select } from '@sensoro-design/react';
import { IconClockCircle, IconSearch, IconInfoCircle } from '@sensoro-design/react/icon';

const RadioGroup = Radio.Group;
const InputSearch = Input.Search;

export default () => {
  const [size, setSize] = useState('default');

  return (
    <div>
      <RadioGroup
        type="button"
        mode="fill"
        name="size"
        value={size}
        onChange={(size) => {
          setSize(size);
        }}
        style={{ marginBottom: 24 }}
      >
        {['small', 'default', 'large'].map((x) => {
          return (
            <Radio key={x} value={x}>
              {x}
            </Radio>
          );
        })}
      </RadioGroup>
      <br />
      <div>
        <Input
          size={size}
          style={{ width: 350, marginRight: 24, marginBottom: 24 }}
          prefix={<IconClockCircle />}
          placeholder="Please enter something"
        />
        <Input
          size={size}
          style={{ width: 350, marginBottom: 24 }}
          suffix={<IconInfoCircle />}
          placeholder="Please enter something"
        />
      </div>
      <div>
        <Input
          size={size}
          style={{ width: 350, marginRight: 24, marginBottom: 24 }}
          addAfter="KG"
          placeholder="Please enter something"
        />
        <Input
          size={size}
          style={{ width: 350, marginBottom: 24 }}
          addBefore="+86"
          placeholder="Please enter something"
        />
      </div>
      <div>
        <Input
          size={size}
          style={{ width: 350, marginBottom: 24, marginRight: 24 }}
          addBefore="+86"
          addAfter={<IconSearch />}
          prefix={<IconClockCircle />}
          suffix={<IconInfoCircle />}
          allowClear
          placeholder="Please enter something"
        />
        <InputSearch
          size={size}
          placeholder="Please enter something"
          style={{ width: 350, marginBottom: 24 }}
          searchButton={true}
        />
      </div>
      <div>
        <Input
          size={size}
          style={{ width: 350, marginBottom: 24, marginRight: 24 }}
          addBefore={
            <Select size={size} placeholder="Please select" style={{ width: 100 }}>
              <Select.Option value="http://">http://</Select.Option>
              <Select.Option value="https://">https://</Select.Option>
            </Select>
          }
          allowClear={true}
          placeholder="Please enter something"
        />
        <Input
          size={size}
          style={{ width: 350, marginBottom: 24, }}
          allowClear={true}
          placeholder="Please enter something"
        />
      </div>
    </div>
  )
}
