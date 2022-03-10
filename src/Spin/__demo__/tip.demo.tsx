
/**
 * title: 自定义描述文案
 * desc: 通过 `tip` 字段自定义加载时的文案。
 */
import { Spin, Card, Link } from '@sensoro-design/react';

export default () => {
  return (
    <Spin tip="This may take a while..." loading>
      <Card
        style={{ width: 360 }}
        title="Delay 500ms"
        extra={
          <Link> More </Link>
        }
      >
        ByteDance's core product, Toutiao ("Headlines"), is a content platform in China and around
        the world. Toutiao started out as a news recommendation engine and gradually evolved into a
        platform delivering content in various formats.
      </Card>
    </Spin>
  );
}
