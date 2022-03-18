1: vue -cli 脚手架初始化项目
node + webpack +淘宝镜像
node_modules文件夹：项目依赖文件

public文件夹：一般放置一些静态资源（图片），需要注意放在public文件夹中的静态资源，webpack 进行打包的时候会原封不动的打包到dist文件夹中

src 文件夹（程序员源代码文件夹）：
  assets文件夹：一般也是放置静态资源（一般放置多个组件公用的静态资源），注意：放在assets 文件夹中的静态资源，在webpack 打包的时候，webpack
  打包的时候，webpack 会把静态资源当作一个模块，打包在js文件里面

  components : 一般放置的是非路由组件 (全局组件)

  App.vue :唯一的组件，vue当中的组件（.vue）

  main.js :程序的入口文件，也是整个程序当中最先执行的文件

babel.config.js :配置文件（babel 相关）

package.json文件 ： 认为项目的‘身份证’，记录项目叫做什么，怎么运行

package-lock.json  :缓存性文件

README.md  ：说明文件

2:src文件夹简写方法，配置别名 ---jsconfig.json

3:eslint校验功能关闭。
  ---在根目录下创建一个vue.config.js 
  比如：声明变量但是没有使用eslint校验工具报错


4：项目路由的分析
  vue-router
  前端所谓路由：KV键值对。
  key；Url (地址栏中的路径)
  value : 相应的路由组件
  注意：项目上中下结构

 路由组件：
 home首页路由组件 /search 路由组件/login登录路由/refister注册路由

 非路由组件：
 header [首页，搜索页]
 foorer [首页，搜索页],在登录|注册页面没有。


 5：路由组件的搭建
 vue-router
 在上面分析的时候，路由组件应该有四个：home / search /login /register
 --components 文件夹：经常放置非路由组件（公用全局组件）
 --page|view  文件夹 ：经常放置路由组件
 5.1配置路由
 项目当中的路由一般配置在router 文件夹中

 5.2 注册完路由，不管路由组件，还是非路由组件身上都有$route /$routers 属性

 5.3  
  $route:一般获取路由信息 【路径/query/params】
  $routers: 一般进行编程式导航路由跳转【push|replace】

 5.4 路由的跳转
  1：路由的跳转有两种形式 ：声明式导航router-link ,可以进行路由的跳转
  2：编程试导航 push |replace 可以进行路由的跳转

6：Foot组件显示与隐藏 
  显示或者隐藏组件： v-if ||  v-show
  footer 组件：在登录注册的时候是隐藏的
 6.1：我们可以根据组件身上的$route 获取当前路由的信息，通过路由路径判断  
 6.2 :通过路由配置 路由元信息 meta:{show:true|false} 

7:路由传参：
  1：路由跳转的几种方式
   比如 A->B
   声明式导航： router-link (务必要有to属性)，可以实现路由的跳转
   编程式导航： 利用的是组件实例的  $router.push|replace 方法，可以实现路由的跳转。（可以书写一些自己的业务）
8：路由传参，参数的几种写法？
 params参数：属于路径当中的一部分，需要注意，在配置路由的时候，需要站位
 query参数: 不属于路径当中的一部分，类似于ajax中的 queryString /home?k=v&kv=,  不需要占位
      



  





  

