import React from 'react'
import { Link, useLocation } from 'react-router-dom'
import qs from 'qs'
import { indexNav, types } from '../../../router'
import { Menu } from 'antd'

export default function HomePageNav() {
	const { search } = useLocation()
  // 处理 tab  ?tab=good => tab=good
	const { tab } = qs.parse(search.substr(1))
  // 如果路径没有 tab 展示第一个
	let activeNavIndex = tab === undefined ? 0 : types.indexOf(tab)
	// console.log(activeNavIndex)

	return (
		<Menu
			mode='horizontal'
			defaultSelectedKeys={activeNavIndex + ''}
			selectedKeys={activeNavIndex + ''}
		>
			{indexNav.map((item, index) => {
				return (
					<Menu.Item key={index}>
						<Link to={item.url}>{item.name}</Link>
					</Menu.Item>
				)
			})}
		</Menu>
	)
}
