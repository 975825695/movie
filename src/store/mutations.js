import * as types from './types'

export default {
  // 获取用户信息
  [types.GET_DETAILLIST] (state, data) {
    state.detailList = data
  },
  [types.SAVE_RECORDID] (state, data) {
    state.recordIdList.push(data)
  },
  [types.GET_USERINFO] (state, data) {
    state.userInfo = data
  },
  [types.SAVE_USERLIKE] (state, data) {
    if (data === '爱情') {
      state.userLike.love += 1
    } else if (data === '喜剧') {
      state.userLike.comic += 1
    } else if (data === '战争') {
      state.userLike.fight += 1
    }
  }
}
