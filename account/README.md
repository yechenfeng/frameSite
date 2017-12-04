step
#step1  cd 任意目录
    mongod(启动mongoDB)
#step2  cd /Users/howbuy2017/Library/Mobile\ Documents/com\~apple\~CloudDocs/doc/ninghao/frame/frameSite/others/node/node-demo
    yarn start(链接node与mongoDB)
#step3  浏览器 or Insomnia 访问 http://localhost:8888/cgi-mock/trade/buyfundindex.htm
    Robo 3T(查看mock数据库)
    Insomnia(模拟请求)
    编辑node/node-demo/中相关文件，添加数据至数据库
#step4  cd /Users/howbuy2017/Library/Mobile\ Documents/com\~apple\~CloudDocs/doc/ninghao/frame/frameSite/account
    yarn start(开发环境：启动)
#step5  cd /Users/howbuy2017/Library/Mobile\ Documents/com\~apple\~CloudDocs/doc/ninghao/frame/frameSite/account
    yarn build(生产环境：构建与打包)
