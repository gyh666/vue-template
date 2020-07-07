### uView
[官网连接](https://www.uviewui.com/)
多平台快速开发的UI框架

#### 文字省略
五个类名在文字超出内容盒子时，分别只显示一行、两行、三行、四行、五行省略号:
`u-line-1` `u-line-2` `u-line-3` `u-line-4` `u-line-5`
#### 字体大小
1. x为10-40之间(包含10和40)，当x >= 10 && x < 20时，表现为px性质，当x >= 20 && x <= 40时，表现为rpx性质
`.u-font-x`
2. 为了更加形象和方便记忆，uView另外提供了一套断点的字体大小，分别以xs、sm、md、lg、xl作为后缀，如下：
```
.u-font-xs {
	font-size: 22rpx;
}

.u-font-sm {
	font-size: 26rpx;
}

.u-font-md {
	font-size: 28rpx;
}

.u-font-lg {
	font-size: 30rpx;
}

.u-font-xl {
	font-size: 34rpx;
}
```
#### 定位
相对定位`u-relative(u-rela)`
绝对定位`u-absolute(u-abso)`
#### 文字对齐
文字左对齐`.u-text-left`
文字居中对齐`.u-text-center`
文字右对齐`.u-text-right`

#### 骨架屏
```
u-skeleton(必须)，该类名用于页面的最外层元素，供骨架屏组件查询和定位出绘制骨架的位置和尺寸
u-skeleton-circle(可选)，该类名用于页面的圆形元素，供骨架组件描绘出圆形的骨架块
u-skeleton-rect(可选)，该类名用于页面的矩形元素，供骨架组件描绘出矩形的骨架块
u-skeleton-fillet(可选)，该类名用于页面的矩形带圆角元素，供骨架组件描绘出矩形带圆角的骨架块
```