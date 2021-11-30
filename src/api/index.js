import request from './ajax'

export const reqTopicsList = (tab='all', page=1, limit=20, dmrender=true) => {
  return request({
    method: 'get',
    url: `/topics?tab=${tab}&page=${page}&limit=${limit}&mdrender=${dmrender}`
  })
}

export const reqTopicsInfo = (id) => {
  return request({
    method: 'get',
    url: `/topic/${id}`
  })
}

export const reqUserInfo = (loginname) => {
  return request({
    method: 'get',
    url: `/user/${loginname}`
  })
}