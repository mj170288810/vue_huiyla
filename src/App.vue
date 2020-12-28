<template>
  <div id="app">
    <router-view></router-view>
    <FooterGuide v-show="$route.meta.showFooter"/>
  </div>
</template>

<script>
  import FooterGuide from "./components/FooterGuide/FooterGuide";
  // import {reqFoodCategorys,reqAddress} from './api'
  // import {mapActions,mapState} from 'vuex'
    export default {
      name: "App",
      components : {
        FooterGuide
      }
/*      mounted() {
        this.getCategorys()
        this.getAddress()
        console.log(this.address)
        console.log(this.categorys)
      },*/
/*      methods : {
        ...mapActions(['getCategorys','getAddress'])
      },
      computed: {
        ...mapState(['address','categorys'])
      }*/
    }
</script>

<style lang="stylus" rel="stylesheet/stylus">
  @import "./common/stylus/mixins.styl"
  #app
    width 100%
    height 100%
    background #f5f5f5
</style>
