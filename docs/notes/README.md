---
title: 面试过程中的问题
date: '2021-04-12 04:00:00'
categories:
 - 面试
tags:
 - 面试
publish: false
isTimeLine: true
---
## 一、flex相关问题
父容器包括的几个主要属性：
* <b>flex-diriction</b>
* <b>flex-wrap</b>
* <b>justify-content</b>
* <b>align-item </b>
* <b>align-content </b>
### 1.flex-direction
表示主轴的方式，即项目排布方式，在父容器中定义
> * row（默认） : 水平方向，起点在左侧
> * row-reverse : 水平方向，起点在右
> * column  : 垂直方向，起点在顶部
> * column-reverse : 垂直方向，起点在底部
### 2.flex-wrap
表示主轴排满时的换行行为。
（direction如果时column如何分布?）
> * nowrap （默认）: 不换行
> * wrap : 换行，第一行在上方
> * wrap-reverse  : 换行，第一行在下方

### 3.justify-content
表示主轴（即flex-diriction标注的方向）对齐方式
> * flex-start （默认）: 左对齐
> * flex-end : 右对齐
> * center : 居中对齐
> * space-between : 两端对齐，项目之间的间隔都相等，但是第一个跟最后一个贴近两侧。
> * space-evenly : 两端对齐，每个项目之间间隔都相等，每个都相等。
> * space-around  : 两端对齐，每个项目两侧相等。

### 4.align-items
表示交叉轴（即flex-diriction未标注的方向）对齐方式
> * flex-start : 交叉轴起点对齐
> * flex-end : 交叉轴终点对齐
> * center : 交叉轴中点对齐
> * baseline : 项目首个元素第一行文字基线对齐。
> * stretch（默认） : 两端对齐，每个项目之间间隔都相等，每个都相等。

### 5.align-content
表示存在多个轴线（即flex-wrap换行之后）的对齐方式。如果只有一条轴线则不生效。
> * flex-start : 交叉轴起点对齐
> * flex-end : 交叉轴终点对齐
> * center : 交叉轴中点对齐
> * baseline : 项目首个元素第一行文字基线对齐。
> * stretch（默认） : 两端对齐，每个项目之间间隔都相等，每个都相等。

元素包括的几个主要属性：
* <b>order</b>
* <b>flex-grow</b>
* <b>flex-shrink</b>
* <b>flex-basis</b>
* <b>flex </b>
* <b>align-self</b>
### 6.order
属性定义项目的排列顺序。数值越小，排列越靠前，默认为0。
### 7.flex-grow
表示该元素的放大比例，默认为0，即如果存在剩余空间，也不放大。如果所有项目值一致，则所有元素平均分配，如果一个元素的flex-grow为2，其他元素为1，则该元素的容器是其他元素的两倍。
### 8.flex-shrink
表示该元素的缩小比例，默认为1，即如果空间不足，该项目将缩小。如果所有项目值一致，则所有元素平均缩小，如果一个元素的flex-shrink为0，其他元素为1，则该元素的不缩小。
### 9.flex-basis
表示在分配多余空间之前，项目占据的主轴空间。浏览器根据这个属性，计算主轴是否有多余空间。它的默认值为auto，即项目的本来大小。也可以设置一个固定的值，表示该项目在主轴占的大小。
### 10.flex 
flex属性是flex-grow, flex-shrink 和 flex-basis的简写，默认值为0 1 auto。后两个属性可选。
### 11.align-self
表示单个项目有与其他项目不一样的对齐方式，可覆盖父容器align-items属性。默认值为auto，表示继承父元素的align-items属性，如果没有父元素，则等同于stretch。值除了auto外与align-items一致。
## 二、css居中方法
### 水平居中
1. 行内元素： text-align:center
2. 块级元素： margin-left:auto; margin-right:auto;
3. 绝对及相对定位元素宽度已知： left:50%; margin-left:-[宽度]；
4. 宽度未知： left:50%; transform:translateX(-50%);
5. flex布局: justify-content: center;

### 垂直居中
1. 行内元素：line-height: height;
2. 绝对及相对定位元素高度已知： top:50%; margin-top:-[宽度]；
3. 高度未知：top:50%; transform:translateY(-50%);
4. flex布局： align-items: center;

> 终极解决方案：top:0;left:0;right:0;bottom:0; margin: auto;

## 三、圣杯布局双飞翼布局以及flex实现
> <b>目的：</b>
> * header和footer各自占领屏幕所有宽度，高度固定。
> * 中间的container是一个三栏布局。
> * 三栏布局两侧宽度固定不变，中间部分自动填充整个区域，且中间部分有限加载。
> * 中间部分的高度是三栏中最高的区域的高度。

### 圣杯布局
<b>html代码结构</b>
``` html
<header id="header">顶部</header>
<div class="container">
  <div class="main">内容区域</div>
  <div class="left">左侧</div>
  <div class="right">右侧</div>
</div>
<footer id="footer">底部</footer>
```


## 四、常见的性能优化手段

## 五、常见的前端攻击方法及预防手段
### XSS跨站脚本攻击
<b>原理：</b>攻击者通过在Web页面中插入script代码，当用户浏览时script代码执行，从而实现攻击的目的，实际原因就是未过滤用户输入的内容，未将<script>进行转义。
<b>防御手段：</b>对用户代码进行转义（vue使用xss插件），将用户的输入转义为字符串，同时注意v-html的使用。

### CSRF（Cross Site Request Forgy）跨站请求伪造
<b>原理：</b>第三方网站通过iframe内嵌某一个网站，并且将iframe设置为透明不可见，将其覆盖在其他经过伪装的DOM上，伪装的可点击DOM（按钮等）与实际内嵌网站的可点击DOM位置相同，当用户点击伪装的DOM时，实际上点击的是iframe中内嵌的网页的DOM从而触发请求操作。
<b>防御手段：</b>
1. 敏感操作增加验证码；
2. 服务端验证请求头Referer；
3. 验证token；

## 六、代码评审评审那些方面
## 七、Vuex问题
## 八、Vue-router问题
## 九、webpack问题
## 十、手写代码防抖节流
## 十一、手写代码深拷贝
## 十二、设计一个比较准确的倒计时
## 十三、描述一下js事件循环
## 十四、描述一下js事件循环