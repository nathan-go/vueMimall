# Vue 全家桶实战 从零独立开发企业级电商系统

## 1-2 node 环境安装

1. node：v8，运行环境

## 1.3 node 升降级

1. 使用 n 或者 nvm
2. npm i -g n
3. 使用 n 来管理 node 的版本，升降级都可以
4. 自己的电脑使用的 nvm
5. ls -a:显示当下文件下所有的文件
6. 关于 nvm 使用的情况，有一篇这个写的很好。
7. https://juejin.im/post/5c2197ad6fb9a04a0e2d37ca
8. 注意里面所有的全局安装的模块也是跟着 node 的版本走的，所以全局需要重新安装，这个和 n 是不一样的。

## git

### 2.1 git 安装

### 2.2 git 配置

1. code ~/.profile
2. 环境变量
3. echo \$PATH

### 2.3 git 配置和 ssh 公钥

1. git config --list
2. 我们要注意解决重新输入密码和账号的问题
3. 两种方式解决：
    1. 使用 store 来存储账号和密码(http)
    2. 使用公钥的方式，但是我们注意，配置公钥是使用了 ssh 的方式，所以不管我们是添加远程仓库还是 clone，这种方式是适用于使用 ssh 的方式的哦
4. 注意 ssh 的哦

### 2.4 vscode 操作 git

1. add, commit, push, 都有了的哦
2. 创建分支： 我们在左下角就可以看到
3. 创建之后我们需要 push 上去，旁边就能看到一朵云，点一下就 push 上去了
4. 现在我们解决问题： 就是 merge 的问题，分支之间的合并我们回到之前的分支，然后 command + shift + p： 点击 git merge，merge 需要合并的分支，就完成了
5. 解决问题： 冲突的问题。产生冲突后，插件会提醒我们是采用当前的更改还是采用传入的更改，我们修改了就可以了

### 2.5 git 常用命令

1. 看图就行，完成之前的所有 xmind 图

## chapter3: vuecli

### 3.1 vuecli

### 3.2 vuecli 使用

1. 完成基本的架构，非业务上面的架构
2. 脚手架工具
3. vue create projectName
4. 或者 vue ui， 一样的
5. 使用 ui 也挺方便的，比较直观，但是我们还是使用命令来处理吧

## chapter4: 项目基础架构

### 4.1 前端跨域解决方案

1. 什么是前端跨域？
2. 跨域是浏览器为了安全而做出的限制策略，所以是只有前端才存在跨域的问题，后端就不存在这个问题。
3. 浏览器请求必须遵循同源的策略： 同域名，同端口，同协议
4. 前后端分离后，就出现的错误。

#### 解决方式

1. 三种方式
    1. cors 跨域
    2. jsonp 跨域
    3. 代理跨域

##### 1. cors 跨域

1. cors 跨域，服务端设置，前端直接调用
2. 说明： 后台允许前端某个站点进行访问
3. 前端不需要做什么，只是需要后端做出一定的设置就行了
4. 我们来测试一下： 使用 easy-mock 来试试
5. 需要在 response 里面添加 Access-Control-Allow-Credentials 的头部

### 4.2 jsonp 跨域

1.

### 4.4 接口梳理

### 4.5 项目的目录结构设定

1. 目录： 大图片放到 public 里面，而把小图片放到 src 下面 assets 里面
2. 因为 webpack 会自动的设置大图片打包，小图片变成 base64 来处理。
3. 所以 assets 里面我们就放一些 icon 图片，
4. App.vue 是最外层的组件，我们这只需要放 router-view 就可以了
5. 在 src 下面新建一个 api 文件夹，index.js 用来统一处理 api，方便我们日后统一管理
6. src 下的 util 就是简单的用来防止我们工具
7. storage 文件夹： 前端数据存储的工具箱，我们在里面会建一些怎么去存值，怎么去取值的，之后会遇到
8. store： 因为我们会用到 vuex，所以这个也是有必要的
9. router： 路由就不说了吧，因为只有一个文件，所以我们这里添加了 router.js 文件
10. 在 page 里面，home.vue 是总框架，因为 detail 页面和 index 页面和 product 页面， 都复用了 footer 和 header，所以我们这里注意： home 是主体，里面的内容通过 router-view 来转换到不同的 detail，index 或者 product 里面。
11. alipay 是阿里的中转页面。

### 4.6 基本插件需求

1. 轮播插件，懒加载插件，还有 elementUI
2. elementUI 需要按需加载，因为只是使用了一部分
3. 使用了 scss 的预编译
4. 一键修改主题，肯定是通过 scss 或者其他的预编译工具来实现的。
5. cookie 也是需要使用的
6. npm i vue-lazyload element-ui node-sass sass-loader vue-awesome-swiper vue-axios vue-cookie --save-dev

### 4.7 路由的封装

1. 我们在给`/`写路由的时候，给 Home 组件加入一个嵌套视图，注意这里的使用方式。
2. 我们首页里面，有三个子路由，就是 index， home，和 product，共享了 footer 和 header，所以这样子设置
3. 其他的同理，有个单独的 cart
4. order，order 下面有 orderList, orderPay, orderConfirm
5. 注意这里又一个快速转到文件的东东，我们 command + P， 输入就行
6. 注意里面 redirect 去了 index 里面
7. 页面中找到共性或者 api 来找到 router 的响应
8. 如何看设计稿，重要的

### 4.8 storage 的封装

1. cookie，localStorage，sessionStorage 三者的区别？
2. 为什么需要封装 storage，本身不是已经有 api 可以使用了么？

#### 问题一

1. 区别
    1. 存储大小，cookie 4k，存储字符串。storage，5m，是存储了对象
    2. 有效期： cookie 是有有效期的，但是 storage 永久存储，是说的 localStorage，但是针对 sessionStorage 可不是，会话相关的。
    3. cookie 会发送到服务器端，存储在内存中，storage 只是存储在浏览器端。
    4. 路径： cookie 有路径的限制，而 storage 只存储在域名下
    5. api： cookie 没有特定的 api，storage 有对应的 api

#### 问题二

1. 为什么封装 storage？
    1. storage 本身有 api，但是只是简单的 key/value 的形式
    2. storage 只存储字符串，需要人工转换成 json 对象
    3. storage 只能一次性清空，不能单个清空
2. 本例 app 使用的 sessionStorage，不进行持久的存储。

### 4.9 接口错误拦截

1. 统一报错
2. 未登录统一拦截，权限的问题。
3. 请求值，返回值统一处理
4. axios, 前端请求，请求拦截，访问拦截
5. axios， ie11 才开始支持
6. 使用 axios.all 或者 promise.all 来处理多个请求的 loading
7. 使用 vue-axios，把 axios 作用域对象挂载到 this 实例上，方便我们去使用 axios 而不是每次去调用
8. axios.interceptors, 用处非常多，比如我们可以统一的针对请求和响应做出处理而不是在每个地方进行修改
9. 接口规范
    ```js
    {
      status: 0,
      data:[],
      msg: ''
    }
    ```
10. 注意后端返回的值里面有很多，只有 data 才是我们关注的，而且 data 里面其实是上面的格式。这些代码写在了 main.js 的拦截器里面
11. 架构里面的错误拦截我们都是放到了 main.js 里面，没有做过类似的需要多理解多看看
12. 这里面有 baseURL 和 timeout 的设置，我们看看

## 4.10 接口的环境设置

1. 开发上线的不同阶段，需要不同的配置
2. 不同的跨域方式，也是不同的
3. 打包的时候统一注入环境参数，统一管理环境，输出不同的版本包
4. 添加了一个 vue.config.js

### step1

1. 首先在 package.json 里面我们有一个 script serve 里面可以输入模式的
2. 新建一个 env.js 在 src 里面，然后上面这个参数对于我们做环境的判断是有帮助的
3. process.env.NODE_ENV,来获取
4. 如果我们使用了代理的跨域，那么 env 里面就没什么事儿了，但是如果我们使用了 jsonp，或者 cors 的跨域方式，我们的 env 是有必要的
5. mode 后面的字符串包括 production, development, test, 如果我们想要自定义的话，我们需要设置。 6.我们需要在外面设置一个`.env.name`,的文件，文件里面的内容是
   `NODE_ENV='name'`

## 4.11 mock 设置

1. 开发阶段，为了高效，需要提前 mock
2. 减少冗余，灵活插拔
3. 减少沟通，坚守接口链条的时间

### 方式

1. 本地创建 json
2. easy-mock 平台
3. 集成 mock api

### 本地方式

1. 我们使用本地 json 方式
2. env 的设置取消掉，api 的 baseURL 也取消掉，我们在 public 目录下面创建了 mock 文件夹，下面是 json 数据，这样子我们就可以得到数据了，但是我们需要注意的是，json 数据必须合乎标准，因为我们做了拦截，数据不符合标准会做出错处理。

### easy-mock 方式

1. 我们需要重新设置 baseURL 的地址，然后正确的修改 axios.get('/user/login')的地址就可以了

### 集成 mock pai

1. 使用 mockjs，没有真正的请求，在发送的时候就被拦截到了
2. 安装 mockjs
3. 然后我们在 main.js 文件里面添加内容
4. 首先我们设置了一个 boolean 值，用做 mock 的开关，然后我们在 src 目录下面创建一个 mock 文件夹，再新建一个 api.js,这里面是为了设置 mock
5. 开关的意思是我们只有在开的时候才会使用 mock，所以在里面使用 require 是合适的，如果我们使用了 import 的话就肯定会加载
6. 我们看到里面的没有 xhr 的请求的，因为 mock 会在请求之前拦截并回复数据的哦。
