# IP Input

---

一个简单的IP输入组件

---

## 使用说明

<pre lang='javascript'>
seajs.use(['ipinput', '$'], function(ipinput, $){
  var ip = new ipinput({
    field : $('#ip-input'),
    splitSymbol : '-'
  }).render();
});
</pre>

参数说明
* field : 表单中原始IP字段, 可以是一个DOM对象/jQuery对象/sizzle选择器，必填
* splitSymbol : IP字段中的分隔符，默认为"."，可选
