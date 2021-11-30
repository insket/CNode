import { useDispatch } from 'react-redux'
import { GET_TOPICS, GET_TOPICS_INFO, GET_USER_INFO } from '../constants'

import { reqTopicsList, reqTopicsInfo, reqUserInfo} from '../../api'

// 文章列表 hook
export const useTopicsListAction = () => {
  const dispatch = useDispatch()
  return async (tab, page) => {
    const { data } = await reqTopicsList(tab, page)
    // console.log(data);
    dispatch(getTopicsListAction(data))
  }
}

// dispatch 文章列表
export const getTopicsListAction = (data) => ({
  type: GET_TOPICS,
  data
})

//　获取文章详情
export const useTopicsInfoAction = () => {
  const dispatch = useDispatch()
  return async (id) => {
    const { data } = await reqTopicsInfo(id)
    dispatch(getTopicsInfoAction(data))
  }
}

//  dispatch　获取文章详情
export const getTopicsInfoAction = (data) => ({
  type: GET_TOPICS_INFO,
  data
})

//　获取用户详情
export const useUserInfoAction = () => {
  const dispatch = useDispatch()
  return async (loginname) => {
    const { data } = await reqUserInfo(loginname)
    dispatch(getUserInfoAction(data))
  }
}

//  dispatch　　获取用户详情
export const getUserInfoAction = (data) => ({
  type: GET_USER_INFO,
  data
})