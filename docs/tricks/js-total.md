# Javascript知识点整理

## 变量

### 变量类型

原始类型
- String
- Number
- Null
- Undefined
- Symbol
- Boolean

引用类型
- Object
- Array
- Function
- Date
- RegExp

### 变量特点

#### Null和Undefined

```javascript
typeof null  // object
```
这实际上是 JavaScript 最初实现中的一个错误，然后被 ECMAScript 沿用了。现在，null 被认为是对象的占位符，从而解释了这一矛盾，但从技术上来说，它仍然是原始值。

```javascript
undefined == null // true
```
undefined 是声明了变量但未对其初始化时赋予该变量的值

null 则用于表示尚未存在的对象