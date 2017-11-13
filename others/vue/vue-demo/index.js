// 🍎🍎🍎🍎🍎🍎🍎🍎🍎 01、预览 🍎🍎🍎🍎🍎🍎🍎🍎🍎<br />
// 🍎🍎🍎 渲染
var app_xuanran = new Vue({
    el: '#app_xuanran',
    data: {
        message: 'hello'
    }
})
    // app_xuanran.message  =>   "hello"
    // app_xuanran.message = 'hola' =>  "hola"
// 🍎🍎🍎 绑定元素属性
var app_bind = new Vue({
    el: '#app_bind',
    data: {
        message: 'hello',
        title: 'hello'
    }
})
    // app_bind.title    =>   "hello"
    // app_bind.title = 'hola'   =>   "hola"
// 🍎🍎🍎 条件
var app_tiaojian = new Vue({
    el: '#app_if',
    data: {
        message: 'hello',
        title: 'hello',
        visible: true
    }
})
    // app_tiaojian.visible    =>  true
    // app_tiaojian.visible = false  =>  false
// 🍎🍎🍎 用户输入
var app = new Vue({
    el: '#app_input',
    data: {
        message: 'hello',
        title: 'hello',
        visible: true
    },
    methods: {
        logMessage () {
            console.log(this.message);
        }
    }
})
// 🍎🍎🍎 循环
var app_xunhuan = new Vue({
    el: '#app_xunhuan',
    data: {
        comments: [
            {content: 'nice ~'},
            {content: 'great ~'},
            {content: 'awesome ~'}
        ]
    }
})
    // app_xunhuan.comments.push({content: 'wonderful ~'})  =>  4
// 🍎🍎🍎 组件
Vue.component('component_comment', {
    props: ['comment'],
    template: '<li>{{ comment.content }}</li>'
})
var app_zujian = new Vue({
    el: '#app_zujian',
    data: {
        comments: [
            {content: 'vue组件   nice ~'},
            {content: 'vue组件   great ~'},
            {content: 'vue组件   awesome ~'}
        ]
    }
})

// 🍌🍌🍌🍌🍌🍌🍌🍌🍌 02、前端框架 🍌🍌🍌🍌🍌🍌🍌🍌🍌<br />
// 🍠 【实例】<br />
// 🍌🍌🍌 Vue实例
var vm = new Vue
    // vm.$mount('#app_shili')  =>  2
var vm = new Vue({
    el: '#app_shili'
})
    // vm.$el   =>  <div id=​"app_shili">​2​</div>​
// 🍌🍌🍌 数据：data
var dataSource = {
    message: 'hello'
}
var app_data = new Vue({
    el: '#app_data',
    data: dataSource
})
    // dataSource === app_data.$data
    // app_data.$data.message === app_data.message  =>  hello
    // app_data.message = 'hola'   =>  hola
    // dataSource.message   =>  hola
    // dataSource.message = '您好'   =>  您好
    // dataSource.message   =>  您好
app_data.$watch('message', function (newValue, oldValue) {
    console.log(newValue, oldValue);
})
// 🍌🍌🍌 生命周期：lifecycle
var app_lifecycle = new Vue({
    el: '#app_lifecycle',
    data: dataSource,
    beforeCreate () { // 创建前   只执行一次
        console.log('01 beforeCreate');
    },
    created () { // 创建后   只执行一次
        console.log('02 created');
    },
    beforeMount () { // 挂载前   只执行一次
        console.log('03 beforeMount');
    },
    mounted () { // 挂载后   只执行一次
        console.log('04 mounted');
    },
    beforeUpdate () { // 更新前   只执行一次
        console.log('05 beforeUpdate');
    },
    updated () { // 更新后   只执行一次
        console.log('06 updated');
    },
    beforeDestroy () { // 销毁前   只执行一次
        console.log('07 beforeDestroy  要被干掉了');
    },
    destroyed () { // 销毁后   只执行一次
        console.log('08 destroyed  bye bye ~');
    }
})
    // app_lifecycle.$destroy()    =>  [Log] 要被干掉了 [Log] bye bye ~
// 🍠 【模板】<br />
// 🍌🍌🍌 模板：template

// 🍌🍌🍌 绑定属性：v-bind
// 🍌🍌🍌 绑定类
// 🍌🍌🍌 文本 与 HTML
// 🍠 【条件与循环】<br />
// 🍌🍌🍌 条件：v-if
// 🍌🍌🍌 列表：v-for
// 🍌🍌🍌 数组方法
// 🍠 【事件】<br />
// 🍌🍌🍌 事件：v-on
// 🍌🍌🍌 键盘事件
// 🍠 【表单】<br />
// 🍌🍌🍌 表单
// 🍌🍌🍌 复选框
// 🍌🍌🍌 单选按钮
// 🍌🍌🍌 选择列表

// 🌰🌰🌰🌰🌰🌰🌰🌰🌰 03、组件 🌰🌰🌰🌰🌰🌰🌰🌰🌰<br />
// 🌰🌰🌰   注册组件
// 🌰🌰🌰   组合组件
// 🌰🌰🌰   props：传递数据
// 🌰🌰🌰   验证属性
// 🌰🌰🌰   自定义事件
// 🌰🌰🌰   应用自定义事件
// 🌰🌰🌰   内容分发：slot
// 🌰🌰🌰   带名字的 slot

// 🍐🍐🍐🍐🍐🍐🍐🍐🍐 04、路由 🍐🍐🍐🍐🍐🍐🍐🍐🍐<br />
// 🍠 【准备】<br />
// 🍐🍐🍐   准备项目
// 🍠 【路由】<br />
// 🍐🍐🍐   路由
// 🍐🍐🍐   改进样式
// 🍐🍐🍐   动态路由匹配
// 🍐🍐🍐   嵌套的路由
// 🍐🍐🍐   路由的基本用法

// 🧀🧀🧀🧀🧀🧀🧀🧀🧀 05、数据管理 🧀🧀🧀🧀🧀🧀🧀🧀🧀<br />
// 🍠 【准备】<br />
// 🧀🧀🧀   准备Vuex项目
// 🧀🧀🧀   Vuex介绍
// 🍠 【Vuex】<br />
// 🧀🧀🧀   Vuex
// 🧀🧀🧀   State
// 🧀🧀🧀   Getters
// 🧀🧀🧀   Mutations
// 🧀🧀🧀   mapGetters
// 🧀🧀🧀   为应用创建简单的API
// 🧀🧀🧀   Actions
// 🧀🧀🧀   更多动作

// 🎂🎂🎂🎂🎂🎂🎂🎂🎂 06、应用案例 🎂🎂🎂🎂🎂🎂🎂🎂🎂<br />
// 🍠 【演示与准备】<br />
// 🎂🎂🎂   项目演示
// 🎂🎂🎂   准备Vue范例项目
// 🍠 【数据库】<br />
// 🎂🎂🎂   配置在浏览器存储数据的数据库
// 🎂🎂🎂   存储与获取数据
// 🍠 【应用】<br />
// 🎂🎂🎂   创建笔记应用
// 🎂🎂🎂   笔记应用的样式
// 🎂🎂🎂   得到数据库的数据集合
// 🎂🎂🎂   查询数据库交给组件使用
// 🎂🎂🎂   显示笔记列表
// 🎂🎂🎂   创建新笔记
// 🎂🎂🎂   显示与编辑笔记
// 🎂🎂🎂   笔记编辑器的样式
// 🎂🎂🎂   截取笔记内容
// 🎂🎂🎂   保存笔记
// 🎂🎂🎂   笔记的更新时间
// 🎂🎂🎂   笔记的字数
// 🎂🎂🎂   删除笔记
// 🎂🎂🎂   无笔记提示

// ☕️☕️☕️☕️☕️☕️☕️☕️☕️ 07、应用案例（Vuex） ☕️☕️☕️☕️☕️☕️☕️☕️☕️<br />
// 🍠 【准备】<br />
// ☕️☕️☕️   用 Vuex 改进笔记案例项目
// ☕️☕️☕️   用 vue-cli 创建 Vue.js 项目
// ☕️☕️☕️   为项目添加版本控制
// ☕️☕️☕️   模块化的 Vue.js 项目
// 🍠 【项目】<br />
// ☕️☕️☕️   准备项目
// ☕️☕️☕️   项目结构
// ☕️☕️☕️   应用的模板
// ☕️☕️☕️   应用的样式
// 🍠 【Vuex】<br />
// ☕️☕️☕️   Vuex
// ☕️☕️☕️   配置使用数据库
// ☕️☕️☕️   应用的 State 与 Getters
// ☕️☕️☕️   应用的 Actions 与 Mutations
// ☕️☕️☕️   创建笔记
// ☕️☕️☕️   更新笔记
// ☕️☕️☕️   Getters：更新时间，字数，截图内容
// ☕️☕️☕️   删除笔记
