/**
 * title: 基本用法
 * desc: 基础页头，适合使用在需要简单描述的场景。默认是没有底色的。
 */
import { PageHeader, Radio } from '@sensoro-design/react';

export default () => {
  return (
    <div style={{ background: 'var(--color-fill-2)', padding: 40 }}>
      <PageHeader
        style={{ background: 'var(--color-bg-2)' }}
        title="ArcoDesign"
        subTitle="This is a description"
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
