import * as types from './types'

export const getDetailList = async ({ commit }, data) => {
  commit(types.GET_DETAILLIST, data)
  // console.log(data)
  commit(types.SAVE_RECORDID, data)
}

export const getUserInfo = async ({ commit }, data) => {
  commit(types.GET_USERINFO, data)
}
// export const saveRecordId = async ({ commit }, data) => {
//   console.log(data)
//   // let list = {'id':data}
//   // commit(types.SAVE_RECORDID, list)
// }
