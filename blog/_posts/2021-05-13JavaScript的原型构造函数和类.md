---
title: JavaScript的原型，构造函数和类
date: 2021-05-13
tags: 
  - JavaScript
  - Vue
author: Yu
location: Shanghai  
---

# 原型

几乎每个JavaScript对象都有一个与之关联的对象，称为原型prototype，JavaScript对象从这个对象继承属性

- new Ｏbject()创建的对象和字面量{ }创建的对象继承Object.prototype，即原型对象是Object.prototype
- 使用new关键字和构造函数创建的对象，原型是构造函数prototype属性的值，如new Date()对象原型是Date.prototype
- 多数构造函数的原型继承自Object.prototype，例如Date.prototype从Object.prototype继承属性，这种称为原型链
- 查询属性时，按照自有属性，原型链的顺序查找
- 几乎所有对象都有原型，但只有少数对象有prototype属性，如Object.create()函数使用第一个参数为原型
- Object.prototype是没有原型的对象
- Object.create()的一个用处是防止对象被其他库修改

# 构造函数

（只有）任何普通函数对象一个有protetype属性，构造函数的prototype属性将被用作新对象的原型，如Vue.prototype，prototype的值是一个对象，有一个constructor属性，constructor属性的值是该函数对象

```
let F = function() {}
let c = F.prototype.constructor
c === F  // true
```

箭头函数没有prototype属性，不能作为构造函数使用，当且仅当两个对象继承同一个原型对象时，才是同一个类的实例

如o instanceof F 操作符检查对象是否继承F.prototype，而不是是否通过new F()构造

# 类

类使用基于原型的继承，类表示一组对象从同一个原型对象继承属性，
