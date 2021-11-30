import { Link, useLocation } from 'react-router-dom'
import { nav } from '../../router'
import { Row, Col, Menu } from 'antd'

export default function MyHeader(props) {
	const { pathname } = useLocation()
	// 默认选中的nav
	let activeSelectIndex = nav.findIndex((item) => {
		return item.to === pathname
	})

	return (
    <div>
      <Row>
        <Col xs={6} sm={6} md={6}>
          <h1 className='logo' id='logo'>
            <Link to='/'>CNode</Link>
          </h1>
        </Col>
        <Col xs={18} sx={18} md={18}>
          <Menu
            mode='horizontal'
            theme='dark'
            defaultSelectedKeys={activeSelectIndex + ''}
            selectedKeys={activeSelectIndex + ''}
          >
            {nav.map((item, index) => {
              return (
                <Menu.Item key={index}>
                  <Link to={item.to}>{item.title}</Link>
                </Menu.Item>
              )
            })}
          </Menu>
        </Col>
      </Row>
    </div>
	)
}
