#ip input


----------------------------
<form >
  <div id='ddd'>
    <input type='text' value='202-96-128-86' id='ip-input' />
  </div>

  <br/>
  <br/>
  <br/>
  <input type='submit' value='submit'/>
</form>


````javascript
seajs.use(['ipinput', '$'], function(ipinput, $){
  var ip = new ipinput({
    field : $('#ip-input'),
    splitSymbol : '-'
  }).render();
});
````
