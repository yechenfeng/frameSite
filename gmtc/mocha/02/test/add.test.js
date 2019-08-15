/**
 * 测试脚本
 * Created by chenfeng on 2018/07/05.
 * Mocha默认运行test子目录里面的测试脚本
 * 直接执行 cd 02
 * 直接执行 mocha
 * 生成测试报告 ../node_modules/.bin/mocha --reporter mochawesome
 */

var add = require('../src/add.js');
var expect = require('chai').expect;

describe('加法函数的测试', function() {
  it('1 加 1 应该等于 2', function() {
    expect(add(1, 1)).to.be.equal(2);
  });

  it('任何数加0应该等于自身', function() {
    expect(add(1, 0)).to.be.equal(1);
  });
});
