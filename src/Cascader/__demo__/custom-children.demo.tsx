
/**
 * title: 自定义选择框
 * desc: `children` 会覆盖默认的选择框。
 */
import React from 'react';
import { Cascader, Link, Typography } from '@sensoro-design/react';

const options = [
  {
    value: 'Beijing',
    label: 'Beijing',
    children: [
      {
        value: 'Beijing',
        label: 'Beijing',
        children: [
          {
            value: 'Chaoyang',
            label: 'Chaoyang',
            children: [
              {
                value: 'Datunli',
                label: 'Datunli',
              },
            ],
          },
          {
            value: 'Dongcheng',
            label: 'Dongcheng',
          },
          {
            value: 'Xicheng',
            label: 'Xicheng',
          },
          {
            value: 'Haidian',
            label: 'Haidian',
          },
        ],
      },
    ],
  },
  {
    value: 'Shanghai',
    label: 'Shanghai',
    children: [
      {
        value: 'Shanghai',
        label: 'Shanghai',
        children: [
          {
            value: 'Huangpu',
            label: 'Huangpu',
          },
        ],
      },
    ],
  },
];

export default class Demo extends React.Component {
  state = {
    text: ['Shanghai', 'Shanghai', 'Huangpu'].join(', '),
  };

  onChange = (value, selectedOptions) => {
    this.setState({
      text: selectedOptions.map((a) => a.label).join(', '),
    });
  };

  render() {
    return (
      <div>
        <Typography.Text>City</Typography.Text>
        <Cascader
          defaultValue={['Shanghai', 'Shanghai', 'Huangpu']}
          placeholder="Please select ..."
          style={{ width: 300 }}
          options={options}
          onChange={this.onChange}
        >
          <Link >{this.state.text}</Link>
        </Cascader>
      </div>
    );
  }
}
