import * as types from './types'

export default {
  // 获取用户信息
  [types.GET_DETAILLIST] (state, data) {
    state.detailList = data
  },
  [types.SAVE_RECORDID] (state, data) {
    state.recordIdList.push(data)
  }
}
