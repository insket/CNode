import React, { Fragment } from 'react'
import { useHistory } from 'react-router-dom'
import {Alert} from 'antd'

export default function ErrorPage() {

  const history = useHistory()

  return (
    <Alert
      closable
      message='请求出错'
      type='error'
      description={
        <Fragment>
          <p>参数请求错误</p>
          <p>点击关闭按钮返回上一步</p>
        </Fragment>
      }
      afterClose={() => {
        history.go(-1)
      }}
    />
  )
}
