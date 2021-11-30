import { GET_TOPICS, GET_TOPICS_INFO, GET_USER_INFO } from '../constants'

const defaultState = {
  topicList: [],
  topicInfo: {},
  userInfo: {}
}

export default function topics(preState = defaultState, action) {
  const { type, data } = action
  switch (type) {
    case GET_TOPICS:
      return {...preState, topicList: data};
    case GET_TOPICS_INFO:
      return {...preState, topicInfo: data};
    case GET_USER_INFO:
      return {...preState, userInfo: data};
    default:
      return preState
  }
}