import {
  RECEIVE_ADDRESS,
  RECEIVE_CATEGORYS,
  RECEIVE_SHOPS,
  RECEIVE_USER_INFO,
  RESET_USER_INFO
} from './mutation-types'

import {
  reqAddress,
  reqFoodCategorys,
  reqShops,
  reqUserInfo,
  reqLogout
} from '../api'

export default {
  async getAddress({commit,state}){
    const geohash = state.latitude + ',' +state.longitude
    const result = await reqAddress(geohash)
    if(result.code === 0){
      const address = result.data
      commit(RECEIVE_ADDRESS,{address})
    }
  },
  async getCategorys({commit,state}){
    const result = await reqFoodCategorys()
    if(result.code === 0){
      const categorys = result.data
      commit(RECEIVE_CATEGORYS,{categorys})
    }
  },
  async getShops({commit,state}){
    const {longitude,latitude} = state
    const result = await reqShops(longitude,latitude)
    if(result.code ===0){
      const shops = result.data
      commit(RECEIVE_SHOPS,{shops})
    }
  },
  recordUser({commit},userInfo){
    commit(RECEIVE_USER_INFO,{userInfo})
  },
  async getUserInfo({commit}){
    const result = await reqUserInfo()
    if(result.code === 0){
      const userInfo = result.data
      commit(RECEIVE_USER_INFO,{userInfo})
    }
  },
  async logout ({commit}){
    const result = await reqLogout()
    if(result.code === 0){
      commit(RESET_USER_INFO)
    }
  }

}
