import React from 'react'
import { Link } from 'react-router-dom'
import TopicsTab from '../../components/topics-tab'
import { fromnow } from '../../utils'
import { List, Col, Avatar } from 'antd'
import { UserOutlined } from '@ant-design/icons';


export default function TopicList(props) {

  const { data } = props

  // 渲染列表
  const renderList = (avatar_url, loginname, good, top, tab, id, title, last_reply_at) => {
    return (
      <List.Item>
        {/* 头像 */}
        <Col xs={2}>
          <Link to={`/user/${loginname}`}>
            <Avatar icon={<UserOutlined/>} src={avatar_url} title={loginname}/>
          </Link>
        </Col>
        {/* 文章 */}
        <Col xs={22} md={20}>
          <Link to={`/topic/${id}`} className='topicsTab'>
              <TopicsTab tab={good ? 'good' : top ? 'top' : tab}/>
            <span>{title}</span>
          </Link>
        </Col>
        {/* 日期 */}
        <Col xs={0} md={4} className='fromNow'>
          {fromnow(last_reply_at)}
        </Col>
      </List.Item>
    )
  }


  return (
    <List
      className='topics_list'
      loading={!data.length}
      dataSource={data}
      renderItem={(data) => {
        // console.log(data);
        const { author, last_reply_at, good, top, tab, title, id } = data
        const { avatar_url, loginname} = author
        return (
          renderList(avatar_url, loginname, good, top, tab, id, title, last_reply_at)
        )
      }}
    />
  )
}
