/**
 * title: 输入框组合
 * desc: 通过鼠标或键盘输入内容。
 */
import { Input, Grid, Select, DatePicker } from '@sensoro-design/react';

import MinusOutlined from '@sensoro-design/icons/MinusOutlined';

const InputSearch = Input.Search;

export default () => {
  return (
    <div>
      <Grid.Row>
        <div style={{marginRight: 24, width: 360, display: 'inline-block', marginBottom: 24}}>
          <Input.Group compact>
            <Select defaultValue="Beijing" showSearch style={{ width: '25%' }}>
              <Select.Option value="Beijing">Beijing</Select.Option>
              <Select.Option value="Tianjin">Tianjin</Select.Option>
              <Select.Option value="Shanghai">Shanghai</Select.Option>
            </Select>
            <Input style={{ width: '75%' }} placeholder="Please enter an address" />
          </Input.Group>
        </div>
        <div style={{marginRight: 24, width: 360, display: 'inline-block', marginBottom: 24}}>
          <Input.Group compact>
            <Select defaultValue="Beijing" showSearch style={{ width: '25%' }}>
              <Select.Option value="Beijing">Beijing</Select.Option>
              <Select.Option value="Tianjin">Tianjin</Select.Option>
              <Select.Option value="Shanghai">Shanghai</Select.Option>
            </Select>
            <DatePicker style={{ width: '75%' }}/>
          </Input.Group>
        </div>
        <div style={{marginRight: 24, width: 360, display: 'inline-block', marginBottom: 24}}>
          <Input.Group compact>
            <Select defaultValue="Beijing" showSearch style={{ width: '25%' }}>
              <Select.Option value="Beijing">Beijing</Select.Option>
              <Select.Option value="Tianjin">Tianjin</Select.Option>
              <Select.Option value="Shanghai">Shanghai</Select.Option>
            </Select>
            <InputSearch placeholder='Search' style={{ width: '75%' }} />
          </Input.Group>
        </div>
      </Grid.Row>
      <Grid.Row>
        <div style={{marginRight: 24, width: 360, display: 'inline-block', marginBottom: 24}}>
          <Input.Group>
            <Input
              style={{ width: '24%', marginRight: 8 }}
              value="010"
              readOnly
            />
            <Input style={{ width: '60%' }} placeholder="Phone number" />
          </Input.Group>
        </div>
        <div style={{marginRight: 24, width: 360, display: 'inline-block', marginBottom: 24}}>
          <Input.Group>
            <Input
              style={{ width: '24%', marginRight: 8 }}
              value="010"
              readOnly
            />
            <MinusOutlined style={{ color: 'var(--color-text-1)' }} />
            <Input
              style={{ width: '60%', marginLeft: 8 }}
              defaultValue="8899887"
              placeholder="Phone number"
            />
          </Input.Group>
        </div>
      </Grid.Row>
    </div>
  )
}
