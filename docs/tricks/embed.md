# 记录一些随便遇到的技巧

## 立即执行函数

```javascript
;(function(){
    //TODO
})();
```

:::tip 问：上面的；号作用是什么？
答：前端页面脚本压缩可减少脚本数量和脚本大小，为了避免压缩时前一个脚本没有写最后一个分号而导致压缩后脚本不能使用，所以要在开始加一个分号

增补原因：
(![原因](https://hidetoxic01.oss-cn-hangzhou.aliyuncs.com/docs/20210306172336.png))
:::

## [fileName].d.ts的作用

:::tip 问：为什么很多包都有.d.ts文件
答：用 ts 写的模块在发布的时候仍然是用 js 发布，这就导致一个问题：ts 那么多类型数据都没了，所以需要一个 d.ts 文件来标记某个 js 库里面对象的类型
然后 typings 就是一个网络上的 d.ts 数据库

定义了一些接口，使得你用typescript编程的时候调用此模块，IDE有提示
:::

<!-- 
## import 和 require
属于两种不同的模块引入规范 在webpack内不可混用 不然打包会报错
export 和  -->

## vue中设置scrollTop无效

可以使用

```javascript
 scrollToBottom () {
      this.$nextTick(() => {
        setTimeout(() => {
          var element = this.$el.querySelector('#scrollDiv')
          element.scrollTop = element.scrollHeight
        }, 10)
      })
    }
```

## 关于use strict
1.开启use strict后 禁止自定义函数的this指向window