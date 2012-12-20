/**
 * ip输入框
 * author : x.fantasy@gmail.com
 * last modify : 2012.12.19
 */

 define(function(require, exports, module) {
  require('./ipinput.css');

  var Templatable = require('templatable');
  var Widget = require('widget');
  var $ = require('$');
  var template = require('./ipinput.tpl');

  var Ipinput = Widget.extend({
    //初始化
    setup : function () {
      this.get('field').after(this.element);
      $(this.get('field'))[0].setAttribute('type', 'hidden');
    },
    Implements: Templatable,
    attrs : {
      template : template,
      model : {
        "ip" : ["", "", "", ""]
      },
      //ip分隔符
      splitSymbol : {
        value : "."
      },
      field: {
        setter: function(val) {
          return $(val);
        }
      }
    },
    initAttrs: function(config, dataAttrsConfig) {
      Ipinput.superclass.initAttrs.call(this, config, dataAttrsConfig);
      this.model = {"ip" : this._getModel()};
    },
    events : {
      'focus input' : function(e) {
        var target = $(e.target);
        target.select();
      },
      'blur input' : function(e) {
        var target = $(e.target);
        target.val(_filterValue(target));
        this._syncFieldValue();
      },
      'click input' : function(e) {
        var target = $(e.target);
        target.select();
      },
      'keyup input' : function(e) {
        var target = $(e.target);
        var keyCode = e.keyCode || e.which;
        if (keyCode != 9 && keyCode != 16) {
          target.val(_filterValue(target));
        }
        //输入"."可以跳到下一个输入框
        if (keyCode == 190) {
          this._focusNextElement(target);
          return false;
        }
      }
    },
    _getModel : function() {
      return this.get('field').val().split(this.get('splitSymbol'));
    },
    _syncFieldValue : function() {
      var ips = this.element.find('input');
      var ipsValue = [];
      for (var i = 0, l = ips.length; i < l; i++) {
        ipsValue.push(ips.eq(i).val());
      }
      this.get('field').val(ipsValue.join(this.get('splitSymbol')));
    },
    _focusNextElement : function (el) {
      var inputs = $(this.element).find('input');
      var index = inputs.index(el);
      if (index < inputs.length - 1) {
        inputs[++index].focus();
      }
    }
  });

  var _filterValue = function(target) {
    var val = target.val().replace(/\D/g, '') * 1;
    return val > 255 ? 255 : (val == 0 ? '0' : val);
  };

  module.exports = Ipinput;
});

