import React, { Fragment } from 'react'
import { Link } from 'react-router-dom'
import TopicsTab from '../../../components/topics-tab'
import { fromnow } from '../../../utils'
import { Card } from 'antd'

export default function Details(props) {
	const { topicInfo } = props

	const { author, content, create_at, title, visit_count, tab, good, top } = topicInfo

	return (
		<Card
			bordered
			loading={!author}
			title={
				<Fragment>
					<h1>
						<TopicsTab tab={top ? 'top' : good ? 'good' : tab} />
						{title}
					</h1>
					<p>
						-作者：
						<Link to={`/user/${author.loginname}`}>{author.loginname}</Link>
						&nbsp;&nbsp; -创作时间: {fromnow(create_at)}&nbsp;&nbsp; -浏览人数:{' '}
						{visit_count}
					</p>
				</Fragment>
			}
			type='inner'
		>
			<div dangerouslySetInnerHTML={{ __html: content }}></div>
		</Card>
	)
}
