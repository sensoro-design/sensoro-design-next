/**
 * title: 自定义指示符
 * desc: 通过指定 `icon` 可以指定自定义图标作为加载组件。
 */
import { Spin, Card, Link } from '@sensoro-design/react';
import LoadingOutlined from '@sensoro-design/icons/LoadingOutlined';

export default () => {
  return (
    <Spin loading={true} size={30} icon={<LoadingOutlined />}>
      <Card style={{ width: 360 }} title="Arco Card" extra={<Link> More </Link>}>
        ByteDance's core product, Toutiao ("Headlines"), is a content platform in China and around the world. Toutiao
        started out as a news recommendation engine and gradually evolved into a platform delivering content in various
        formats.
      </Card>
    </Spin>
  );
};
