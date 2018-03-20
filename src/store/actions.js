import * as types from './types'

export const getDetailList = async ({ commit }, data) => {
  commit(types.GET_DETAILLIST, data)
  // console.log(data)
  commit(types.SAVE_RECORDID, data)
}

export const getUserInfo = async ({ commit }, data) => {
  commit(types.GET_USERINFO, data)
}
// 兴趣推荐异步方法
export const saveUserLike = async ({ commit }, data) => {
  // console.log(data)
  commit(types.SAVE_USERLIKE, data)
}
export const saveMovieName = async ({ commit }, data) => {
  // console.log(data)
  commit(types.SAVE_MOVIENAME, data)
}
// 兴趣推荐刷新之后清空
export const delUserLike = async ({ commit }, data) => {
  commit(types.DEL_USERLIKE, {})
}
// export const saveRecordId = async ({ commit }, data) => {
//   console.log(data)
//   // let list = {'id':data}
//   // commit(types.SAVE_RECORDID, list)
// }
