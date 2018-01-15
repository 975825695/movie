import * as types from './types'

export const getDetailList = async ({ commit }, data) => {
  commit(types.GET_DETAILLIST, data)
}
