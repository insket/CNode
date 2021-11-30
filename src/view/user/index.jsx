import React, { useEffect } from 'react'
import { useSelector } from 'react-redux'
import { useParams } from 'react-router-dom'
import { useUserInfoAction } from '../../redux/actions/topics'
import ErrorPage from '../../components/error-page'
import TopicsList from '../../components/topics-list'
import { Card, Avatar } from 'antd'
import { UserOutlined } from '@ant-design/icons'

export default function User() {
	// 得到用户的名称
	let { username } = useParams()

	// 用户信息
	const userInfo = useSelector((state) => state.topics.userInfo)

	const UserInfoAction = useUserInfoAction()

	useEffect(() => {
		UserInfoAction(username)
	}, [])

	const rednerUserInfo = () => {
		const {
			avatar_url,
			score,
			loginname,
			githubUsername,
			create_at,
			recent_topics,
			recent_replies,
		} = userInfo

		return (
			<div>
				<Card className='user-card user-top-info' loading={!userInfo.loginname}>
					<Avatar size={80} icon={<UserOutlined />} src={avatar_url} />
					<p className='user'>
						--用户名: {loginname}&nbsp;&nbsp; --注册时间: {create_at}&nbsp;&nbsp; -- 积分: {score}
					</p>
					<p>
						Github:{' '}
						<a
							href={`https://github.com/${githubUsername}`}
							target='_blank'
							rel='noopener noreferrer'
						>
							{githubUsername}
						</a>
					</p>
				</Card>
				<Card
					className='user-card'
					loading={!userInfo.loginname}
					title='最近创建的话题'
					type='inner'
				>
					<TopicsList data={recent_topics} />
				</Card>
				<Card
					className='user-card'
					loading={!userInfo.loginname}
					title='最近参与的话题'
					type='inner'
				>
					<TopicsList data={recent_replies} />
				</Card>
			</div>
		)
	}

	return <div>{userInfo.loginname ? rednerUserInfo() : <ErrorPage />}</div>
}
