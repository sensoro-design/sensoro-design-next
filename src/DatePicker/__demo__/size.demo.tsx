
/**
 * title: 尺寸
 * desc: 设置 `size` 可以使用四种尺寸（`mini` `small` `default` `large`）的输入框。高度分别对应 24px、32px、36px、40px。
 */
import React from 'react';
import { Radio, DatePicker } from '@sensoro-design/react';

const RadioGroup = Radio.Group;

export default class Demo extends React.Component {
  state = {
    size: 'default',
  };

  handleChange = (size) => {
    this.setState({ size });
  };

  render() {
    const { size } = this.state;

    return (
      <div>
        <RadioGroup
          type="button"
          mode="fill"
          name="size"
          value={this.state.size}
          onChange={this.handleChange}
          style={{ marginBottom: 20 }}
        >
          {['mini', 'small', 'default', 'large'].map((x) => {
            return (
              <Radio key={x} value={x}>
                {x}
              </Radio>
            );
          })}
        </RadioGroup>
        <br />
        <DatePicker
          size={size}
          style={{ width: 254 }}
        />
      </div>
    );
  }
}
