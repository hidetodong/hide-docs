# Javascript 相关知识

## ES6 

### import 与 export

ES6中导入导出




#### 需要研究

```javascript

function importAll(r) {
	let modules = {}
	r.keys().forEach(key =
    > (modules[key] = r(key)))
	return modules
}
const modules = importAll(require.context("./", true, /\.js$/))

const api = Object.assign.apply(null, Object.values(modules))

export default api

```

#### vue.sync 修饰符

```javascript
在说vue 修饰符sync前，我们先看下官方文档：vue .sync 修饰符，里面说vue .sync 修饰符以前存在于vue1.0版本里，但是在在 2.0 中移除了 .sync 。但是在 2.0 发布之后的实际应用中，我们发现 .sync 还是有其适用之处，比如在开发可复用的组件库时。我们需要做的只是让子组件改变父组件状态的代码更容易被区分。从 2.3.0 起我们重新引入了 .sync 修饰符，但是这次它只是作为一个编译时的语法糖存在。它会被扩展为一个自动更新父组件属性的 v-on 监听器。
示例代码如下：

<comp :foo.sync="bar"></comp>
会被扩展为：

<comp :foo="bar" @update:foo="val => bar = val"></comp>
当子组件需要更新 foo 的值时，它需要显式地触发一个更新事件：


this.$emit('update:foo', newValue)

```
