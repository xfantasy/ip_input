#ip input


----------------------------
<form >
    <input type='text' value='202-96-128-86' class='ip-input' />

    <input type='text' value='202-00-128-86' class='ip-input' />

  <br/>
  <br/>
  <br/>
  <input type='submit' value='submit'/>
</form>


````javascript
seajs.use(['ipinput', '$'], function(ipinput, $){
  $('.ip-input').each(function() {
    var ip = new ipinput({
      field : this,
      splitSymbol : '-'
    }).render();
  });
});
````
