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
// 🍎数据
//     变量 - 给东西起个名字
        //     区分大小写
            var band, Band;
        //     CamelCase
//     数据的类型 - 数字，文字，真与假 ...
            var fullName; // undefined
            undefined + 2 // NaN
            var fullName, weight = 160; // string number
            var firstName = "chenfeng" , lastName = "ye"; //  string
            160 + ".5斤" // string
            parseInt('1.5斤') // 1
            parseFloat('1.5斤') // 1.5
//     文本字符串的处理
            var words = "打工仔陈峰是个前端工程师"; // undefined
            words.length // 12
            words.charAt(0) // "打"
            words.charAt(words.length - 1) // "师"
            words.indexOf("工") // 1
            words.lastIndexOf("工") // 9
            words.substring(0,3) // "打工仔"
            words.replace("打工仔", "程序猿") // "程序猿陈峰是个前端工程师"
            words.split("是个") // (2) ["打工仔陈峰", "前端工程师"]0: "打工仔陈峰"1: "前端工程师"length: 2__proto__: Array(0)
            var newWords = words.split("是个") // undefined
            newWords // (2) ["打工仔陈峰", "前端工程师"]
            newWords[0] // "打工仔陈峰"
            newWords[1] // "前端工程师"
//     Array 数组 - 把数据有序地放在大盒子里装着
            var trackCD1 = []; // undefined
            typeof trackCD1 // "object"
            trackCD1 // []
            trackCD1 = ["双截棍", "菊花台", "七里香"] // (3) ["双截棍", "菊花台", "七里香"]
            trackCD1.length // 3
            trackCD1[0] // "双截棍"
            trackCD1[3] = "烟花易冷" // "烟花易冷"
            trackCD1 // (4) ["双截棍", "菊花台", "七里香", "烟花易冷"]0: "双截棍"1: "菊花台"2: "七里香"3: "烟花易冷"4: "牛仔很忙"length: 5__proto__: Array(0)
            trackCD1.push("牛仔很忙") // 5
            trackCD1 // (5) ["双截棍", "菊花台", "七里香", "烟花易冷", "牛仔很忙"]
            trackCD1.pop() // "牛仔很忙"
            trackCD1 // (4) ["双截棍", "菊花台", "七里香", "烟花易冷"]
            trackCD1.shift() // "双截棍"
            trackCD1 // (3) ["菊花台", "七里香", "烟花易冷"]
            delete trackCD1[2] // true
            trackCD1 // (3) ["菊花台", "七里香", empty]
            trackCD1.splice(2) // [empty]
            trackCD1 // (2) ["菊花台", "七里香"]
            var trackCD2 = ["夜曲", "星晴"]; // undefined
            var track = trackCD1.concat(trackCD2) // undefined
            track // (4) ["菊花台", "七里香", "夜曲", "星晴"]
// 🍎流程控制
//     if - 先判断条件的对与错然后再决定要做的事
            // if (true) {
            //
            // } else {
            //
            // }
//     switch - 先判断条件的对与错然后再决定要做的事
            // switch (newWords) {
            //     case newWords:
            //
            //         break;
            //     default:
            //
            // }
//     while 循环 - 重复地去做要做的事
            // while (true) {
            //
            // }
//     for 循环 - 重复地去做要做的事
            // for (var i = 0; i < track.length; i++) {
            //     track[i]
            // }
// 🍎函数
//     function 函数 - 一块可以执行的代码
            function functionName (param1, param2) {

            }
//     定义一个函数
            function alertMessge (message) {
                alert(message);
            }
//     函数表达式
            var alertMessageBDS = function (message) {
                alert(message);
            }
//     变量的范围
        //     函数以外：全局变量
        //     函数以内：内部变量
            var message = "全局变量";
            function alertMessgeBL () {
                alert(message);
                var messageJB = "局部变量";
            }
            // alert(messageJB); // Uncaught ReferenceError: messageJB is not defined
//     Object 对象 - 能存数据 能做事
        //     对象
            //     对象属性 - 变量
            //     对象方法 - 行为
            //     not include [number] [string] [boolean] [null] [undefined]
            typeof NaN // "number"
// 🍎对象
//     创建一个对象
            var beyond = {}; // undefined
            beyond.formIn = "1983"; // "1983"
            beyond["foundedIn"] = "香港"; // "香港"
            beyond // {formIn: "1983", foundedIn: "香港"}

            var beyond = {formIn: "1983", foundedIn: "香港"}; // undefined
            beyond // {formIn: "1983", foundedIn: "香港"}
            beyond.formIn // "1983"
            beyond["foundedIn"] // "香港"
//     对象里的数组
            var beyond = {
                formIn: "1983",
                foundedIn: "香港",
                artist: [
                    "A",
                    "B",
                    "C",
                    "D"
                ]
            };
            beyond.artist[0] // "A"
            beyond.artist[1] // "B"
//     更新与删除对象里的属性
            beyond.foundedIn // "香港"
            beyond.foundedIn = "中国香港" // "中国香港"
            delete beyond.formIn // true
            beyond // {foundedIn: "中国香港", artist: Array(4)}
//     为对象添加方法
            beyond.showArtist = function () {
                for (var i = 0; i < this.artist.length; i++) {
                    console.log(this.artist[i]);
                }
            }
            beyond // {foundedIn: "中国香港", artist: Array(4), showArtist: ƒ}
            beyond.showArtist() // A B C D
//     循环输出对象里的属性
            var property;
            for (property in beyond) {
                if (typeof beyond[property] !== "function") { // 输出 属性值非function的 属性值
                    console.log(beyond[property]);
                }
            }
// 🍎DOM
//     DOM - 操纵文档的接口
        //     文档对象模型 Document Object Model
        //     js可以更改网页 结构、内容、样式
        //     js操作DOM（接口）
        //     DOM 是一套规范
        //     DOM提供另一种方法来表示 存储 操作文档的方法
        //     用对象来表示文档（属性、方法、时间组织在对象中）
        //     head body div ul li（都是文档对象中的一部分）
//     文档树
        //     document
            //     html
                //     head
                    //     title
                //     body
                    //     h1
                    //     p
//     获取文档中的元素 getELementById
            document.getElementById("page-title") // <h1 id="page-title">title</h1>
//     getElementsByTagName
            document.getElementsByTagName("li") // (4) [li, li, li, li]
//     querySelector 与 querySelectorAll
        //     querySelector    返回第一个
            document.querySelector(".art-list li") // <li>​A​</li>​
        //     querySelectorAll 返回所有
            document.querySelectorAll(".art-list li") // (4) [li, li, li, li]
//     访问元素的属性
            var pageTitle = document.getElementById("page-title");
            pageTitle.nodeName // "H1"
            pageTitle.innerText // "title"
            pageTitle.parentNode // <div>​…​</div>​
            pageTitle.nextElementSibling // <ul class=​"art-list">​…​</ul>​
            var artists = document.querySelector(".art-list");
            artists.childNodes // (9) [text, li, text, li, text, li, text, li, text]
            artists.childElementCount // 4
            artists.firstElementChild // <li>​A​</li>​
            artists.lastElementChild // <li>​D​</li>​
            artists.firstElementChild.innerText // "A"
            artists.firstElementChild.innerText = "A+" // "A+"
//     在文档中创建并插入新的节点
            var newMember = document.createElement("li") // undefined
            var newMemberText = document.createTextNode("E") // undefined
            newMember.appendChild(newMemberText) // "E"
            document.querySelector(".art-list").appendChild(newMember) // <li>​E​</li>​
//     insertBefore - 在指定位置插入节点
            artists.insertBefore(newMember, artists.firstChild) // <li>​E​</li>​
// 🍎事件
//     Event - 处理发生的事情
        //     事件
            //     执行动作 通过事件处理程序
//     处理事件的方法
        //     <a href="#" onclick="alert('你点击了我');" onmouseover="console.log('你来了');" onmouseout="console.log('你离开了');">点我</a>
//     用对象的事件处理程序处理发生的事件
            var btn = document.querySelector(".btn");
            btn.onclick = function () {
                alert('你点击了我');
            }
        //     window.onload
            //     浏览器加载 样式、资源都显示和下载了，才触发onload
            window.onload = function () {
                var btn = document.querySelector(".btn");
                btn.onclick = function () {
                    alert('你点击了我');
                }
            }
//     addEventListener - 为对象绑定事件
            btn.addEventListener("click", showMessage, false);
            function showMessage (event) {
                console.log("showMessage, 你点击了我");
                console.log(event); // 输出事件的对象：MouseEvent {isTrusted: true, screenX: -1861, screenY: 56, clientX: 61, clientY: 229, …}
                event.stopPropagation();
            }
            function showMessage2 (event) {
                console.log("showMessage2, 你点击了我");
                console.log(event); // 输出事件的对象：MouseEvent {isTrusted: true, screenX: -1861, screenY: 56, clientX: 61, clientY: 229, …}
            }
//     事件的传播
            var listGroup = document.querySelector(".list-group");
            listGroup.addEventListener("click", showMessage, true); // false（冒泡）-先执行showMessage2-li，true（捕获）-先执行showMessage-ul，
        //     冒泡传播：从下到上、从里到外
        //     捕获传播：从外向内
//     更改事件传播方式
        //     更改外层事件的 第三个参数 false => true
            //     冒泡传播 => 捕获传播
            var item1 = document.getElementById("item1");
            item1.addEventListener("click", showMessage2, false);
//     停止传播事件
        //     event.stopPropagation();
        //     目前事件是从外向内传播，只执行了showMessage-ul，使用event.stopPropagation()阻止了事件的传播，不会执行showMessage2-li
// 🍌🍌🍌🍌🍌🍌🍌🍌🍌 2 JQUERY 基础 🍌🍌🍌🍌🍌🍌🍌🍌🍌<br />
//     介绍
        //     选择特定元素、设置属性、处理事件、使用动画
// 🍌准备
//     准备
        //     下载、导入
//     当页面载入以后
        //     load
            //     所有资源准备好，才执行
        //     ready
            //     所有结构准备好，就执行
            $(document).ready(function () { // 易读
                console.log("准备好了~");
            });
            $(function () { // 简单
                console.log("准备好了~");
            });
//     jQuery 函数
        //     jQuery()
        //     $()
            $('.list-group li')
            $(document)
            $('<h1>jquery</h1>')
//     jQuery 方法
        //     链式调用
            $('.list-group li').attr('alt', 'tag').addClass('class_name')
// 🍌选择器
//     选择器
        //     css3选择器
//     基本的选择器
            $('.list-group li').length // 5
            $('.list-group li').size() // 5
//     选择器里的过滤
            $('.list-group li:first').html('first')
            $('.list-group li:last').html('last')
            $('.list-group li:odd').html('odd')
            // $('.list-group li:even').html('even')
            $('.list-group li:eq(2)').html('eq(2)')
            $('.list-group li:lt(2)').html('lt(2)') // 小于
            $('.list-group li:gt(2)').html('gt(2)') // 大于
//     选择器里使用元素的属性
            $('[data-tag]')
            $('li[data-tag]')
            $('li[data-tag=tag1]')
            $('li[data-tag~=tag1]')
            $('li[data-tag*=tag1]')
//     选择表单元素
            $(':input') // 包含以下类型
                $(':button')
                $(':submit')
                $(':reset')
                $(':password')
                $(':file')
                $(':checkbox') // 所有复选框
                $(':radio')
                $(':checked') // 勾选的复选框
                $(':focus') // 焦点
                $(':disabled') // 禁用
                $(':enabled') // 启用
//     子元素选择器 - :first-child, :last-child
        //     first 第一个结果
        //     first-child 第一个子元素(有多个结果) - 属于元素的第一个子元素，两个平行的元素只计算一个
            $('img:first-child') // (4) [img, img, img, img, prevObject: init(1), context: document, selector: "img:first-child"]
            $('img:last-child') // (3) [img, img, img, prevObject: init(1), context: document, selector: "img:last-child"]
//     子元素选择器 - :nth-child
        //     索引号是从1开始的
            $('.list-group li:nth-child(1)') // [li.class_name, prevObject: init(1), context: document, selector: ".list-group li:nth-child(1)"]
            $('.list-group li:nth-child(odd)') // 奇数 li
            $('.list-group li:nth-child(even)') // 偶数 li
            $('.list-group li:nth-child(2n)') // 2 4 6 ...
            $('.list-group li:nth-last-child(2n)') // ... 6 4 2
//     内容过滤
            $('li:contains("2")') // 包含文字“2”的li元素
//     过滤的方法
            $('li img')
            $(':input').eq(0) // 第一个input
            $(':input').eq(-1) // 最后一个input
            $(':input').first() // 第一个input
            $(':input').last() // 最后一个input
            $(':input').slice(1,2) // 第二个input
//     使用文档树形结构里的关系过滤
            $('#ul-2')
            $('#ul-2').children()
            $('#ul-2').children('.item1')
            $('#ul-2').parent()
            $('#ul-2').next()
            $('#ul-2').prev()
            $('#ul-2').siblings() // 所有兄弟
            $('#ul-2').nextAll() // 后面兄弟
            $('#ul-2').prevAll() // 前面兄弟
// 🍌属性
//     操纵元素的属性
            $('.list-group li').attr('alt', 'tag')
//     设置与移除元素属性的方法
        //     获取attr的值，只能获取结果中的第一个值，需要配合 map 或 each 进行使用
            $('.list-group li').attr('alt', 'tag')
            $('.list-group li').removeAttr('alt')
//     添加，移除，切换 CSS 类
            $('.list-group li').addClass('class_name')
            $('.list-group li').removeClass('class name')
            $('.list-group li').toggleClass('selector')
//     元素的宽度和高度属性
            $('#item1').width()
            $('#item1').innerWidth()
            $('#item1').outerWidth()
            $('#item1').height(133)
            $('#item1').innerHeight() // 包括 padding + element = innerHeight
            $('#item1').outerHeight() // 包括 padding + element + border = outerHeight
//     设置 CSS 属性
            $('#item1').css('width')
            $('#item1').css('width', '166')
            $('#item1').css({width: '166', height: '133'})
//     元素的偏移 - offset
            $('#item1').offset() // {top: 109.875, left: 48} - 元素相对于文档的位置（元素的最顶端到文档的顶端）
//     元素的位置 - position
            $('#item1').position() // {top: 22, left: 40} - 元素相对于用来定位的父元素ul(style="position:relative;")的位置
// 🍌DOM
//     包装 - wrap
            // $("p").wrap("<strong></strong>"); // <strong>p</strong> <strong>p</strong>
            // $("p").wrapInner("<strong></strong>"); // <p>strong</p> <p>strong</p>
            // $("p").wrapAll("<strong></strong>"); // <strong>p p</strong>
            // $('#wrap').unwrap()
            // $('#wrap div').unwrap()
//     内部追加 - append, prepend
            $('#内部追加').append('<h5>append</h5>')
            $('#内部追加').prepend('<h5>prepend</h5>')
            $('<h5>appendTo</h5>').appendTo('#内部追加')
            $('<h5>prependTo</h5>').prependTo('#内部追加')
//     外部追加 - after, before
            $('#外部追加').after('<h5>after</h5>')
            $('#外部追加').before('<h5>before</h5>')
//     移除 - remove, empty
            $('#内部追加').empty() // 清空子元素
            $('#内部追加').remove() // 清空选择的DOM节点
//     替换 - replaceAll, replaceWith
            $('#外部追加').replaceWith('<h6>h6</h6>') // 参数-内容
            $('<h6>h6</h6>').replaceAll('#外部追加') // 参数-目标
//     克隆 - clone
            $('#克隆').clone().appendTo('#克隆')
// 🍌事件
//     事件
        //     使用 on 进行绑定很灵活
//     鼠标事件
            $(function () {
                $('#事件').prev().css('display', 'none');
                $('#事件').click(function () {
                    $(this).prev().toggle(); // 切换显示与隐藏
                });
                $('#事件').dblclick(function () { // 双击
                    $(this).prev().toggle();
                });
                $('#事件').hover(function () { // 鼠标放置(mouseenter)和离开(mouseleave)都会进入
                    $(this).prev().toggle();
                });
            });
//     键盘输入与表单事件
        //     focus/blur/change/submit/keydown/keyup/keypress（delete不会触发keypress事件）
//     键盘输入与表单 - focus, blur
            $(function () {
                $('#comment').focus( function() {
                    $(this).attr('rows', '5');
                });
                $('#comment').blur( function() {
                    if ($(this).val() === '') {
                        $(this).attr('rows', '2');
                    }
                    $('.alert').text('暂停输入').show();
                });
            });
//     键盘输入与表单 - keyup
            $(function () {
                $('#comment').keyup( function() {
                    $('.alert').text('正在输入...').show();
                });
            });
//     键盘输入与表单，change, submit
            $(function () {
                $('#notice').change( function() {
                    if ($(this).prop('checked')) {
                        $('.alert').text('发送通知').show();
                    } else {
                        $('.alert').text('不发送通知').show();
                    }
                });
                $('form').submit( function() {
                    $('.alert').text('正在提交内容...').show();
                    alert($('#comment').val());
                });
            });
//     事件的绑定 - on
            $('#事件on li').on('click', function () { // 执行多次
                alert($(this));
            });
            $('#事件on li').one('click', function () { // 执行一次
                alert($(this));
            });
//     事件的取消绑定 - off
            $('.on').on('click', function () { // 开
                $('#事件on li').on('click', function () {
                    alert($(this));
                });
            });
            $('.off').on('click', function () { // 关
                $('#事件on li').off('click');
            });
// 🍌效果
//     逐渐消失与逐渐显示
            $('.fadeIn').on('click', function () {
                $('#效果').fadeIn('500');
            });
            $('.fadeOut').on('click', function () {
                $('#效果').fadeOut('slow');
            });
            $('.fadeToggle').on('click', function () {
                $('#效果').fadeToggle('fast');
            });
//     动画完成以后的回调函数
            $('.fadeIn').on('click', function () {
                $('#效果').fadeIn('500', function() {
                    alert('done');
                });
            });
            $('.fadeOut').on('click', function () {
                $('#效果').fadeOut('slow', function() {
                    alert('done');
                });
            });
            $('.fadeToggle').on('click', function () {
                $('#效果').fadeToggle('fast', function() {
                    alert('done');
                });
            });
//     滑动效果与显示或隐藏
            $('.slideDown').on('click', function () {
                $('#效果2').slideDown('500');
            });
            $('.slideUp').on('click', function () {
                $('#效果2').slideUp('slow');
            });
            $('.slideToggle').on('click', function () {
                $('#效果2').slideToggle('fast');
            });
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
