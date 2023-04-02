Ext.define('HWeb.view.main.MainControl', {
  extend: 'Ext.app.ViewController',
  alias:'controller.main',

  control: {
    '#': {
      'afterrender': function () {
        var me = this;
        Ext.Ajax.request({
          url: './Main/MainMenu',
          success: function (res, opts) {
            var tData = Ext.decode(res.responseText);
            me.view.down('#Menu').add(tData);
          }
        });
      }
    },
    'main #North #Menu': {
      'toggle': function (container, button, pressed) {
        if (button.name) {
          this.view.down('#Center').removeAll();
          this.view.down('#Center').add(Ext.create(button.name));
        }
      }
    },
    // 写在前面，防止被截
    'main #North #Menu menuitem': {
      'click': function (aButton) {
        if (aButton.name) {
          this.view.down('#Center').removeAll();
          this.view.down('#Center').add(Ext.create(aButton.name));
        }
      }
    },
  },
  Show: function (auserid) {

  },

});