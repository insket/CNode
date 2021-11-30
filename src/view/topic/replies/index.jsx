import React from 'react'
import { Link } from 'react-router-dom'
import { fromnow } from '../../../utils'
import { Card, List, Comment, Avatar } from 'antd'
import { UserOutlined } from '@ant-design/icons'

export default function Replies(props) {
	const { replies } = props
	// 反转replies 新发表的在上
	replies.reverse()

	return (
		<Card className='comment' title='评论列表' loading={!replies} type='inner'>
			<List
				dataSource={replies}
				renderItem={(itemData) => {
					const { author, content, create_at } = itemData
					return (
						<List.Item>
							<Comment
								author={author.loginname}
								avatar={
									<Link to={`/user/${author.loginname}`}>
										<Avatar
											icon={<UserOutlined />}
											src={author.avatar_url}
											title={author.loginname}
										/>
									</Link>
								}
								content={<div dangerouslySetInnerHTML={{ __html: content }} />}
								datetime={<span>发表于:{fromnow(create_at)}</span>}
							/>
						</List.Item>
					)
				}}
				pagination={{ simple: true }}
			></List>
		</Card>
	)
}
