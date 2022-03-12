
/**
 * title: 分段输入条
 * desc:
 * 在设置了 `marks` 后，实际上将 `Slider` 分成了多个区间，可以传入 `getIntervalConfig` 对每个区间的宽度和步长进行设置。
 * ** 注意：会优先将空间分配给传入了 `width`的区间, 剩下的将会按照区间长度分配剩余的空间。 **
 */
import { useState } from 'react';
import { Slider, Switch, Form, Typography } from '@sensoro-design/react';

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

export default () => {
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
