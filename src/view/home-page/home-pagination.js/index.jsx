import React from 'react'
import { Link } from 'react-router-dom'
import { Pagination } from 'antd'

export default function HomePagination(props) {

  let { tab, page } = props
  tab = tab === undefined ? 'all' : tab
  page = page === undefined ? '1' : page

	return (
		<div className='pagination'>
			<Pagination
        defaultCurrent={page}
        defaultPageSize={20}
        total={1000}
        itemRender={(page, type) => {
          switch(type) {
            case 'page':
              return <Link to={`/?tab=${tab}&page=${page}`}>{page}</Link>
            case 'prev':
              return page === 0 ? '' : <Link to={`/?tab=${tab}&page=${page}`}>{'<'}</Link>
            case 'next':
              return <Link to={`/?tab=${tab}&page=${page}`} disabled={page === 1 ? true : false}>{'>'}</Link>
              default:
              return <Link to={`/?tab=${tab}&page=${page}`} disabled={page === 1 ? true : false}>{'...'}</Link>
          }
        }}
      />
		</div>
	)
}
