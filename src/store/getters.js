export default {
  totalCount (state) {
    return state.cartFoods.reduce((proTotal,food) => proTotal + food.count ,0)
  },
  totalPrice (state) {
    return state.cartFoods.reduce((proTotal,food) =>proTotal + food.count*food.price ,0)
  },
  positiveSize (state){
    return state.ratings.reduce((preTotal,rating) => preTotal + (rating.rateType === 0 ?1:0),0)
  }
}
