
/**
 * title: 回复框
 * desc: 实现一个评论回复框。
 */
import { Comment, Button, Input  } from '@sensoro-design/react';
import MessageOutlined from '@sensoro-design/icons/MessageOutlined';
import './styles.less';

export default () => {
  return (
    <Comment
      align="right"
      actions={<span className="custom-comment-action"><MessageOutlined /> Reply</span>}
      author="Balzac"
      avatar='//p1-arco.byteimg.com/tos-cn-i-uwbnlip3yd/9eeb1800d9b78349b24682c3518ac4a3.png~tplv-uwbnlip3yd-webp.webp'
      content={
        <div>
          A design is a plan or specification for the construction of an object or system or for the implementation of an activity or process, or the result of that plan or specification in the form of a prototype, product or process.
        </div>
      }
      datetime="1 hour"
    >
      <Comment
        align="right"
        actions={[
          <Button key="0" type="secondary">Cancel</Button>,
          <Button key="1" type="primary">Reply</Button>,
        ]}
        avatar="//p1-arco.byteimg.com/tos-cn-i-uwbnlip3yd/e278888093bef8910e829486fb45dd69.png~tplv-uwbnlip3yd-webp.webp"
        content={<div>
          <Input.TextArea placeholder="Here is you content." />
        </div>}
        >
      </Comment>
    </Comment>
  );
};
