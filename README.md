# ipinput

---

// description

---

## 使用说明

<code lang='javascript'>
seajs.use(['ipinput', '$'], function(ipinput, $){
  var ip = new ipinput({
    field : $('#ip-input'),
    splitSymbol : '-'
  }).render();
});
</code>

参数说明
* field : 表单中原始IP字段
* splitSymbol : IP字段中的分隔符，默认为"."，可选
