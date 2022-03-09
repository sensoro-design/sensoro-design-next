/**
 * title: 自定义节点内容
 * desc: 可以通过传入函数类型的 `children` 来自定义渲染单选节点。
 */
import { Radio, Button, Space, Typography } from '@sensoro-design/react';
import './styles.less'

export default () => {
  return (
    <div>
      <div style={{marginBottom: 20}}>
        <Radio.Group defaultValue={'Beijing'}>
          {['Beijing', 'Shanghai', 'Guangzhou'].map((item) => {
            return (
              <Radio key={item} value={item}>
                {({ checked }) => {
                  return <Button key={item} shape="round" type={checked ? 'primary' : 'default'}>{item}</Button>
                }}
              </Radio>
            )
          })
          }
        </Radio.Group>
      </div>
      <Radio.Group>
        {[1, 2].map((item) => {
          return (
            <Radio key={item} value={item}>
              {({ checked }) => {
                return (
                  <Space
                    align="start"
                    className={`custom-radio-card ${checked ? 'custom-radio-card-checked' : ''}`}
                  >
                    <div className="custom-radio-card-mask">
                      <div className="custom-radio-card-mask-dot"></div>
                    </div>
                    <div>
                      <div className="custom-radio-card-title">Radio Card {item}</div>
                      <Typography.Text type="secondary">this is a text</Typography.Text>
                    </div>
                  </Space>
                );
              }}
            </Radio>
          );
        })}
      </Radio.Group>
    </div>
  )
}
