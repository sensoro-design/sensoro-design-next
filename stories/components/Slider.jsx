import React, { useState } from 'react';
import { Slider, Switch, Form, Typography } from '@self';

const defaultConfig = {
  showTicks: false,
  showInput: false,
  onlyMarkValue: false,
  reverse: false,
};

const marks = {
  0: '0km',
  10: '10km',
  20: '20km',
  30: '30km',
  50: '50km',
};

function Demo() {
  const [config, setConfig] = useState(defaultConfig);

  return (
    <div style={{ width: 600 }}>
      <Form
        style={{ margin: '20px' }}
        layout="inline"
        onValuesChange={(_, values) => {
          setConfig(values);
        }}
      >
        {Object.keys(defaultConfig).map((key) => (
          <Form.Item
            label={key}
            field={key}
            triggerPropName="checked"
            key={key}
            initialValue={config[key]}
          >
            <Switch />
          </Form.Item>
        ))}
      </Form>

      <div style={{ marginBottom: 20 }}>
        <Typography.Text bold>分段区间-滑动输入条</Typography.Text>
        <Slider
          {...config}
          max={50}
          defaultValue={10}
          marks={marks}
          getIntervalConfig={([begin, end]) => {
            const interval = `${begin}~${end}`;
            switch (interval) {
              case `0~10`: {
                return { width: '50%' };
              }
              default:
                return { step: (end - begin) / 5 };
            }
          }}
        />
      </div>
      <Typography.Text bold>未分段-滑动输入条</Typography.Text>
      <Slider {...config} max={50} defaultValue={10} marks={marks} />
    </div>
  );
}
export default Demo;
