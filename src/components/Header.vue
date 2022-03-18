<template>
  <div class="myheader">
    我是头部组件
    <!-- <router-link to="/login">登录</router-link> -->
    <div>
      <span>成为会员请</span>
      <button>登录</button>
    </div>

    <br />
    <label for="">
      <input v-model="name" type="text" />
      <button @click="goSearch">搜索</button>
    </label>
  </div>
</template>

<script>
export default {
    data(){
        return{
            name:'3333'
        }
    },
    methods:{
        goSearch(){
            this.$router.push({
              name:"search",
              params:{
                keyworld:this.name
              },
              query:{
                name:this.name
              }
            })
        }
    }
    
    
}


</script>

<style scoped>
.myheader {
  height: 200px;
  background: pink;
}
</style>