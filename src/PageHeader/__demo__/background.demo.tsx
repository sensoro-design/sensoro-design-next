/**
 * title: 底色透明
 * desc: 默认是没有底色的，如果有需要可以通过`style`或类名设置不同底色。
 */
import { PageHeader, Radio, Message } from '@sensoro-design/react';

const ghostBgStyle = {
  backgroundImage: 'radial-gradient(var(--color-fill-3) 1px, rgba(0, 0, 0, 0) 1px)',
  backgroundSize: '16px 16px',
  padding: 20,
};

export default () => {
  return (
    <div style={ghostBgStyle}>
      <PageHeader
        title="ArcoDesign"
        subTitle="This is a description"
        backIcon
        onBack={() => Message.info('点击了返回按钮')}
        extra={
          <div>
            <Radio.Group mode="fill" type="button" defaultValue="small">
              <Radio value="large">Large</Radio>
              <Radio value="medium">Medium</Radio>
              <Radio value="small">Small</Radio>
            </Radio.Group>
          </div>
        }
      />
    </div>
  )
}
