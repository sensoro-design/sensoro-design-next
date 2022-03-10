/**
 * title: 基础用法
 * desc: 常规的内容容器，可承载文字、列表、图片、段落，常用于模块划分和内容概览。
 */
import { Card, Link } from '@sensoro-design/react';

export default () => {
  return (
    <div style={{ display: 'flex' }}>
      <Card style={{ width: 360 }} title="Arco Card" extra={<Link>More</Link>}>
        ByteDance's core product, Toutiao ("Headlines"), is a content platform in China and around the
        world. Toutiao started out as a news recommendation engine and gradually evolved into a
        platform delivering content in various formats.
      </Card>
    </div>
  )
}
