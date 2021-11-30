import React, { Fragment, useEffect } from 'react'
import { useSelector } from 'react-redux'
import { useParams } from 'react-router-dom'
import { useTopicsInfoAction } from '../../redux/actions/topics'
import ErrorPage from '../../components/error-page'
import Details from './details'
import Replies from './replies'

export default function Topic(props) {
	const { id } = useParams() //获取文章id

	// topicInfo数据
	const topicInfo = useSelector((state) => state.topics.topicInfo)

	// useTopicsInfoAction hook
	const topicsInfoAction = useTopicsInfoAction()

	useEffect(() => {
		topicsInfoAction(id)
	}, [])

	const renderTopicDetail = () => {
		return (
      <Fragment>
        {/*  文章详情 */}
        <Details topicInfo={topicInfo} />
        {/* 评论 */}
        <Replies replies={topicInfo.replies} />
      </Fragment>
    )
	}

	return <div>{topicInfo.id ? renderTopicDetail() : <ErrorPage />}</div>
}
