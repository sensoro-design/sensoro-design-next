/**
 * title: 配合List使用
 * desc: 配合 List 组件展现评论列表。
 */
import React from 'react';
import { Comment, List } from '@sensoro-design/react';
import HeartOutlined from '@sensoro-design/icons/HeartOutlined';
import StarOutlined from '@sensoro-design/icons/StarOutlined';
import MessageOutlined from '@sensoro-design/icons/MessageOutlined';
import StarFilled from '@sensoro-design/icons/StarFilled';
import HeartFilled from '@sensoro-design/icons/HeartFilled';
import './styles.less';

export default () => {
  const [likes, setLikes] = React.useState([]);
  const [stars, setStars] = React.useState([]);

  const data = [
    {
      id: 1,
      author: 'Socrates',
      like: 13,
      star: 3,
      avatar: '//p1-arco.byteimg.com/tos-cn-i-uwbnlip3yd/e278888093bef8910e829486fb45dd69.png~tplv-uwbnlip3yd-webp.webp',
      content: 'Comment body content.',
      datetime: '1 hour',
    },
    {
      id: 2,
      author: 'Balzac',
      like: 12,
      star: 1,
      avatar: '//p1-arco.byteimg.com/tos-cn-i-uwbnlip3yd/9eeb1800d9b78349b24682c3518ac4a3.png~tplv-uwbnlip3yd-webp.webp',
      content: 'Comment body content.',
      datetime: '2 hour',
    },
  ];

  return (
    <List bordered={false} header={<span>2 comments</span>}>
      {data.map((item, index) => {
        const like = likes.indexOf(item.id) > -1;
        const star = stars.indexOf(item.id) > -1;

        return (
          <List.Item key={item.id}>
            <Comment
              author={item.author}
              avatar={item.avatar}
              content={item.content}
              datetime={item.datetime}
              actions={[
                <span
                  className="custom-comment-action"
                  key="heart"
                  onClick={() =>
                    setLikes(like ? likes.filter((x) => x !== item.id) : [...likes, item.id])
                  }
                >
                  {like ? <HeartFilled style={{ color: '#f53f3f' }} /> : <HeartOutlined />}{' '}
                  {item.like + (like ? 1 : 0)}
                </span>,
                <span
                  className="custom-comment-action"
                  key="star"
                  onClick={() =>
                    setStars(star ? stars.filter((x) => x !== item.id) : [...stars, item.id])
                  }
                >
                  {star ? <StarFilled style={{ color: '#ffb400' }} /> : <StarOutlined />}{' '}
                  {item.star + (star ? 1 : 0)}
                </span>,
                <span className="custom-comment-action" key="reply">
                  <MessageOutlined /> Reply
                </span>,
              ]}
            />
          </List.Item>
        );
      })}
    </List>
  );
};
