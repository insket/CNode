import React, { useEffect } from 'react'
import { useSelector } from 'react-redux'
import { useLocation } from 'react-router-dom'
import qs from 'qs'

import { useTopicsListAction } from '../../redux/actions/topics'
import HomePageNav from './home-page-nav'
import HomePagination from './home-pagination.js'
import TopicList from '../../components/topics-list'

export default function HomePage() {
	const topicList = useSelector((state) => state.topics.topicList) //得到 topicList
	const getData = useTopicsListAction() //调用 hooks

	// 获取点击的tab
	const { search } = useLocation()
	let { tab, page } = qs.parse(search.substr(1))

	useEffect(() => {
		getData(tab, page)
	}, [tab, page])

	return (
		<div>
			<HomePageNav />
			<TopicList data={topicList} />
      <HomePagination tab={tab} page={page}/>
		</div>
	)
}
