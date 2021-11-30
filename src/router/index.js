import React from 'react'
import { Switch, Route } from 'react-router-dom'

import HomePage from '../view/home-page'
import About from '../view/about'
import Getstart from '../view/getstart'
import Topic from '../view/topic'
import User from '../view/user'
import Page404 from '../view/page404'
import qs from 'qs'

const types = ['all', 'good', 'share', 'ask', 'job', 'dev']

function IndexRouter() {
  return (
    <Switch>
      <Route path='/'
       exact
       render={(props) => {
         let { search } = props.location;
         let { tab, page } = qs.parse(search.substr(1));
         // 如果是默认路径没有tab 或者tab是type里的一个
         if ((tab === undefined && page === undefined) ||
         (types.includes(tab) && (page === undefined || page>0))) {
          return <HomePage/>
         }
         return <Page404/>
       }}/>
      <Route path='/topic/:id' component={Topic} exact />
      <Route path='/user/:username' component={User} exact />
      <Route path='/getstart' component={Getstart} exact />
      <Route path='/about' component={About} exact />
      <Route path='' component={Page404} />
    </Switch>
  )
}

const nav = [
  {
    to:'/',
    title: '首页'
  },
  {
    to:'/getstart',
    title: '新手入门'
  },
  {
    to:'/about',
    title: '关于我们'
  }
]

const indexNav = [
  {
    name: '全部',
    url: '/?tab=all'
  },
  {
    name: '精华',
    url: '/?tab=good'
  },
  {
    name: '分享',
    url: '/?tab=share'
  },
  {
    name: '问答',
    url: '/?tab=ask'
  },
  {
    name: '招聘',
    url: '/?tab=job'
  },
  {
    name: '客户端测试',
    url: '/?tab=dev'
  }
]

export { IndexRouter, nav, indexNav, types }
