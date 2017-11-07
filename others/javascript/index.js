/*
 *  javascript 系列
    1 JAVASCRIPT 基础
    2 JQUERY 基础
    3 JAVASCRIPT：ES6 新功能
    4 BACKBONE 基础
    5 UNDERSCORE 基础
    6 BACKBONE 应用实例
    依赖
        7-1 HTML：标记语言
        7-2 HTML5 与 Bootstrap 应用实例
        8-1 CSS：样式语言
        8-2 CSS：选择器
        8-3 CSS：FLEXBOX 布局
        8-4 CSS：过渡
        8-5 CSS：变换
        8-6 SocCSS：动画ket
        8-7 响应式网页设计
        8-8 SASS 基础
*/
// 🍎🍎🍎🍎🍎🍎🍎🍎🍎 1 JAVASCRIPT 基础 🍎🍎🍎🍎🍎🍎🍎🍎🍎<br />
//     介绍
        //     web开发必学：html + css + js
//     在网页中嵌入脚本代码的方法
        //     <script src="./index.js" type="text/javascript"></script>
//     注释 - 说明你的意图
        //     
// 🍎数据
//     变量 - 给东西起个名字
//     数据的类型 - 数字，文字，真与假 ...
//     文本字符串的处理
//     Array 数组 - 把数据有序地放在大盒子里装着
// 🍎流程控制
//     if - 先判断条件的对与错然后再决定要做的事
//     switch - 先判断条件的对与错然后再决定要做的事
//     while 循环 - 重复地去做要做的事
//     for 循环 - 重复地去做要做的事
// 🍎函数
//     function 函数 - 一块可以执行的代码
//     定义一个函数
//     函数表达式
//     变量的范围
//     Object 对象 - 能存数据 能做事
// 🍎对象
//     创建一个对象
//     对象里的数组
//     更新与删除对象里的属性
//     为对象添加方法
//     循环输出对象里的属性
// 🍎DOM
//     DOM - 操纵文档的接口
//     文档树
//     获取文档中的元素 getELementById
//     getElementsByTagName
//     querySelector 与 querySelectorAll
//     访问元素的属性
//     在文档中创建并插入新的节点
//     insertBefore - 在指定位置插入节点
// 🍎事件
//     Event - 处理发生的事情
//     处理事件的方法
//     用对象的事件处理程序处理发生的事件
//     addEventListener - 为对象绑定事件
//     事件的传播
//     更改事件传播方式
//     停止传播事件
// 🍌🍌🍌🍌🍌🍌🍌🍌🍌 2 JQUERY 基础 🍌🍌🍌🍌🍌🍌🍌🍌🍌<br />
//     介绍
// 🍌准备
//     准备
//     当页面载入以后
//     jQuery 函数
//     jQuery 方法
// 🍌选择器
//     选择器
//     基本的选择器
//     选择器里的过滤
//     选择器里使用元素的属性
//     选择表单元素
//     子元素选择器 - :first-child, :last-child
//     子元素选择器 - :nth-child
//     内容过滤
//     过滤的方法
//     使用文档树形结构里的关系过滤
// 🍌属性
//     操纵元素的属性
//     设置与移除元素属性的方法
//     添加，移除，切换 CSS 类
//     元素的宽度和高度属性
//     设置 CSS 属性
//     元素的偏移 - offset
//     元素的位置 - position
// 🍌DOM
//     包装 - wrap
//     内部追加 - append, prepend
//     外部追加 - after, before
//     移除 - remove, empty
//     替换 - replaceAll, replaceWith
//     克隆 - clone
// 🍌事件
//     事件
//     鼠标事件
//     键盘输入与表单事件
//     键盘输入与表单 - focus, blur
//     键盘输入与表单 - keyup
//     键盘输入与表单，change, submit
//     事件的绑定 - on
//     事件的取消绑定 - off
// 🍌效果
//     逐渐消失与逐渐显示
//     动画完成以后的回调函数
//     滑动效果与显示或隐藏
// 🌰🌰🌰🌰🌰🌰🌰🌰🌰 3 JAVASCRIPT：ES6 新功能 🌰🌰🌰🌰🌰🌰🌰🌰🌰<br />
// 🌰准备
//     准备学习：JavaScript（新）
// 🌰作用域
//     块作用域 - let
//     恒量 - const
// 🌰解构
//     解构数组 - Array Destructuring
//     解构对象 - Object Destructuring
// 🌰字符串模板
//     模板字符串 - Template Strings
//     带标签的模板字符串 - Tagged Templates
//     判断字符串里是否包含其它的字符串
// 🌰函数
//     默认参数 - Default Parameter Values
//     展开操作符- Spread
//     剩余操作符 - Rest
//     解构参数 - Destructured Parameters
//     函数的名字 - name 属性
//     箭头函数 - Arrow Functions
// 🌰对象
//     对象表达式
//     对象属性名
//     对比两个值是否相等 - Object.is()
//     把对象的值复制到另一个对象里 - Object.assign()
//     设置对象的 prototype - Object.setPrototypeOf()
//     __proto__
//     super
// 🌰生成器与迭代器
//     迭代器 - Iterators
//     生成器 - Generators
// 🌰类
//     Classes - 类
//     get 与 set
//     静态方法 - static
//     继承 - extends
// 🌰集合
//     Set
//     Map
// 🌰模块
//     Modules - 模块
//     重命名导出与导入的东西
//     导出与导入默认
// 🍐🍐🍐🍐🍐🍐🍐🍐🍐 4 BACKBONE 基础 🍐🍐🍐🍐🍐🍐🍐🍐🍐<br />
//     介绍
//     准备
// 🍐模型
//     模型 - Model
//     获取，添加，删除，清空属性
//     默认值 - defaults
//     初始化 - initialize
//     属性值变化发生的事件 - change
//     验证属性的值 - validate
//     利用验证失败后的事件 - invalid
// 🍐视图
//     视图 - View
//     渲染视图 - render
//     模板 - template
// 🍐集合
//     集合 - Collection
//     添加模型到集合里
//     从集合中移除模型 - remove, reset, pop, shift
//     push, unshift，at: index
//     事件 - add, remove, change
//     更聪明的添加模型到集合里的方法 - set
//     获取在集合里的模型
//     集合视图
// 🍐路由
//     路由 - Router
//     地址中的参数
//     地址中的可选部分
//     手工改变地址 - navigate
// 🍐RESTful
//     RESTful - 准备
//     数据库
//     控制器
//     从数据库中提取数据到集合里
//     提取模型 - fetch
//     添加数据 - save
//     把模型添加到集合里再更新到数据库 - create
//     更新数据
//     删除数据 - destroy
// 🧀🧀🧀🧀🧀🧀🧀🧀🧀 5 UNDERSCORE 基础 🧀🧀🧀🧀🧀🧀🧀🧀🧀<br />
//     介绍
//     准备
// 🧀集合
//     集合 - 循环处理列表中的每一个项目 - each
//     遍历列表项目生成新的处理之后的列表 - map
//     把列表里的所有值转换成一个值 - reduce
//     查找，过滤，反过滤 - find, filter, reject
//     找到包含特定属性和值的项目 - where, findWhere
//     判断列表里的项目 - every, some, contains
//     挑出列表里面的指定属性的值 - pluck
//     找出列表里面值最大或最小的项目 - max, min
//     排序 - sortBy
//     分组 - groupBy
//     分组计数 - countBy
//     随机与取样 - shuffle, sample
// 🧀数组
//     数组 - 从数组里挑选项目 - first, last, initial, rest, without
//     把数组分割成两部分 - partition
//     并集，交集，差集 - union, intersection, difference
//     去掉数组里面的重复的项目 - uniq
//     找出指定值的项目在数组中的位置 - indexOf, lastIndexOf
//     测试即将插入到数组里的项目的位置 - sortedIndex
// 🧀函数
//     函数 - 为函数绑定对象 - bind
//     把对象里的一些方法绑定到对象上 - bindAll
//     延时执行函数 - delay
//     你继续，我先等会儿 - defer
//     防止滥用- throttle
//     只能执行一次的函数 - once
// 🧀其它
//     对象 - keys, values, pick, omit
//     链式调用 - chain
// 🎂🎂🎂🎂🎂🎂🎂🎂🎂 6 BACKBONE 应用实例 🎂🎂🎂🎂🎂🎂🎂🎂🎂<br />
//     预览
//     准备
// 🎂准备
//     HTML
// 🎂创建任务
//     创建新任务的功能 - 创建任务模型
//     创建任务集合（任务列表）
//     理解 Backbone 的 localStorage
//     任务的视图（模型视图）
//     任务项目的模板
//     应用的视图
//     回车以后创建新任务 - keypress 事件
//     如果按的是回车键就去创建新任务
//     把任务项目显示在应用的界面上 - add 事件
//     回顾
// 🎂切换状态
//     切换任务的完成状态 - 思路
//     切换任务的完成状态 - 实施
//     为完成的任务添加样式
//     当任务发生变化时重新渲染并显示 - change 事件
// 编辑任务
// 🎂编辑任务
//     双击任务标题以后显示编辑任务的文本框 - dblclick 事件
//     回车或离开编辑任务的文本框时保存修改 - keypress 与 blur 事件
// 🎂删除任务
//     删除单个的任务项目
//     删除以后立即把任务从界面中移除掉 - destroy 事件
//     删除单个任务的另一种方法
// 🎂状态栏
//     显示还剩多少个任务与删除完成的任务按钮
//     得到完成的任务与未完成的任务
//     状态栏模板
//     在应用的视图里使用显示任务状态栏的模板
//     清除所有已完成的任务
//     切换所有任务的状态
// 🎂切换显示
//     切换显示不同状态的任务列表
//     模板
//     路由器
//     利用自定义事件
//     判断是否要隐藏任务项目
//     激活菜单项
// ☕️☕️☕️☕️☕️☕️☕️☕️☕️ 7-1 HTML：标记语言 ☕️☕️☕️☕️☕️☕️☕️☕️☕️<br />
// 😊准备
//     学习 html, css, javascript 前的准备
// 😊语法
//     html 文档
//     元素、标签、属性
// 😊基础元素
//     文本
//     行内文本
//     图像
//     视频与音频
//     表格
//     表单 #1
//     表单 #2
// 😊结构
//     网页结构 #1 介绍
//     网页结构 #2 相关元素
//     网页结构 #3 示例 - 使用标题划分结构
//     网页结构 #4 示例 - 使用 header，footer，section，aside 划分
// ☕️☕️☕️☕️☕️☕️☕️☕️☕️ 7-2 HTML5 与 Bootstrap 应用实例 ☕️☕️☕️☕️☕️☕️☕️☕️☕️<br />
// 😊准备
//     准备
//     定制 Bootstrap 架构
//     网页的 head 部分
// 😊页头
//     页头部分的设计
//     页头部分的代码
//     页头部分的样式
// 😊导航
//     主导航的设计
//     主导航菜单的样式
// 😊主体
//     内容列表块的设计
//     内容列表块的内容
//     内容块上的工具提示
//     内容块上的 Popover
//     内容块的样式
//     内容块的整体效果
//     分页导航与导航路径
//     导航路径上的蝴蝶结
// 😊页脚
//     底部边栏的设计
//     底部边栏的代码
//     底部边栏的样式
//     页脚的设计与样式
// 😊文章
//     文章页面的设计
//     文章评论
// 😊边栏
//     右边栏
// 😊😊😊😊😊😊😊😊😊 8-1 CSS：样式语言 😊😊😊😊😊😊😊😊😊<br />
// 😊准备
//     学习 html, css, javascript 前的准备
//     css 样式的写法
// 😊使用 css
//     使用 css：行内样式
//     使用 css：内嵌样式
//     使用 css：外联样式表
// 😊选择器
//     样式的应用范围 - Selectors
//     样式的应用范围：标签选择器
//     样式的应用范围 - 类选择器
//     样式的应用范围 - ID 选择器
// 😊调试样式
//     调试样式：查看元素应用的样式
//     调试样式：编辑样式
//     调试样式：使用 Workspace 实时编辑样式
// 😊样式的层叠
//     样式的层叠 - Cascading
//     样式的层叠 - 自定义的样式比默认的更优先
//     样式的层叠 - 类选择器比标签选择器更优先
//     样式的层叠 - 同级别的样式最后定义的更优先
//     样式的层叠 - ID 选择器比类选择器更优先
//     样式的层叠 - 行内样式比 ID 选择器更优先
// 😊继承
// 样式的继承 - Inheritance
// 😊😊😊😊😊😊😊😊😊 8-2 CSS：选择器 😊😊😊😊😊😊😊😊😊<br />
//     介绍
// 😊基础
//     类型选择器 - Type selector
//     选择器的群组 - Groups of selectors
//     通用选择器 - Universal selector
//     类选择器 - Class selectors
//     ID选择器 - ID selectors
//     属性选择器 - Attribute selectors
//     属性选择器里的匹配
// 😊伪类
//     链接
//     用户动作 :hover, :active, :focus
//     目标 :target
//     用户界面 :disabled
//     结构伪类 :nth-child()
//     :nth-last-child()
//     :nth-of-type(), :nth-last-of-type()
//     :first-child, :last-child
//     :first-of-type, :last-of-type
//     独生子 :only-child
//     空白元素 :empty
//     否定 :not()
// 😊伪元素
//     首行与首字 - first-line, first-letter
//     之前与之后 - after, before
// 😊组合
//     后裔
//     儿子 >
//     兄弟 +
// 😊😊😊😊😊😊😊😊😊 8-3 CSS：FLEXBOX 布局 😊😊😊😊😊😊😊😊😊<br />
//     Flexbox 基础概念
// 😊Flex Container
//     设置 flex 容器
//     flex-direction - 项目的排列方向
//     flex-wrap - 是否要换行显示
//     flex-flow
//     justify-content
//     align-items
//     align-content - 多行项目的对齐方式
// 😊Flex Item
//     order - 改变项目的顺序
//     flex-grow, flex-basis, flex-shrink
//     align-self - 自己对齐
// 😊😊😊😊😊😊😊😊😊 8-4 CSS：过渡 😊😊😊😊😊😊😊😊😊<br />
// 😊准备
//     准备
// 😊Transitions
//     过渡：Transitions
//     多属性过渡
// 😊😊😊😊😊😊😊😊😊 8-5 CSS：变换 😊😊😊😊😊😊😊😊😊<br />
// 😊准备
//     准备
// 😊2D
//     变换：transform
//     变换与过渡
//     变换的起点：transform-origin
//     变换的方法
// 😊3D
//     3D 变换：perspective
//     3D 变换方法
//     整体的 3D 变换
// 😊😊😊😊😊😊😊😊😊 8-6 SocCSS：动画ket 😊😊😊😊😊😊😊😊😊<br />
//     动画
//     动画属性
// 😊😊😊😊😊😊😊😊😊 8-7 响应式网页设计 😊😊😊😊😊😊😊😊😊<br />
//     介绍
//     响应式设计的真实例子
// 😊基础
//     viewport - 可视窗口
//     手工配置 viewport
//     像素密度
// 😊媒体查询
//     应用媒体查询的方法
//     media type 媒体类型
//     meida feature 媒体特性
//     aspect-ratio 可视窗口宽与高的比例
//     device-aspect-ratio 设备的宽与高的比例
//     orientation 设备的使用方向
//     height （可视窗口高度）与 device-height（设备高度）
//     width（可视窗口宽度） 与 device-width（设备宽度）
//     resolution 像素密度
//     操作符 - and
//     逗号分隔连接多个媒体查询
//     操作符 - not
// 😊布局
//     响应式布局 #1
//     响应式布局 #2
//     响应式布局 #3
// 😊导航
//     响应式导航
//     导航菜单的 HTML
//     导航菜单的 CSS
//     切换按钮的样式
//     响应式导航菜单的样式
// 😊图像
//     响应式的图像
//     响应式的背景图像
//     不同尺寸的设备使用不同的图像
//     不同尺寸的设备使用不同的背景图像
//     根据屏幕密度切换不同的背景图像
//     picturefill
// 😊幻灯片
//     响应式幻灯片
//     幻灯片的控制按钮
//     幻灯片的控制按钮样式
//     修复幻灯片被覆盖的问题
// 😊结束
//     结束语
// 😊😊😊😊😊😊😊😊😊 8-8 SASS 基础 😊😊😊😊😊😊😊😊😊<br />
//     介绍
// 😊准备
//     Mac：安装 Sass
//     Windows：安装 Sass
//     把 Sass 编译成 CSS
//     自动编译 Sass
//     修改编译输出的 CSS 格式
//     .sass 与 .scss 的区别
// 😊基础
//     变量 - Variables
//     嵌套 - Nesting
//     嵌套时调用父选择器
//     嵌套属性
//     混合 - Mixins
//     Mixin 里的参数
//     继承/扩展 - inheritance
//     Partials 与 @import
//     注释
// 😊数据类型
//     数据类型 - data type
//     数字
//     数字函数
//     字符串
//     字符串函数
//     颜色
//     颜色函数- rgb 与 rgba
//     颜色函数-hsl 与 hsla
//     颜色函数-adjust-hue
//     颜色函数-lighten 与 darken
//     颜色函数 - saturate 与 desaturate
//     颜色函数 - opacify 与 transparentize
//     列表 - list
//     列表函数
//     map 与相关函数
//     布尔值
//     Interpolation
// 😊控制指令
//     控制指令 - Control Directives
//     @if
//     @for
//     @each
//     @while
// 😊自定义
//     用户自定义的函数
//     警告与错误
