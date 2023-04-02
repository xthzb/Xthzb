Ext.define('HWeb.view.login.LoginControl', {
  extend: 'Ext.app.ViewController',
  alias: 'controller.login',

  control: {
    'textfield[name=UserId]': {
      'afterrender': function (athis) {
        athis.focus();
      },
      'specialkey': function (athis, e) {
        if (e.getKey() == e.ENTER) {
          this.view.down('textfield[name=Password]').focus();
        }
      }
    },
    'textfield[name=Password]': {
      'specialkey': function (athis, e) {
        if (e.getKey() == e.ENTER) {
          this.view.down('button').focus();
          if (!this.view.down('button').disabled) {
            this.view.down('button').fireEvent('click');
          }
        }
      }
    },
    'button': {
      'click': function (athis) {
        this.Submit();
      }
    }
  },
  Submit: function () {
    var me = this;
    me.view.submit({
      url: '/Pages/User/Login',
      method: 'post',
      success: function (aform, action) {
        var tUserId = aform.getValues().UserId;
        console.log(aform);
        Ext.create('HWeb.view.main.Main').controller.Show(tUserId);
        me.view.destroy();
      },
      failure: function (aform,action) {
        console.log(action);
      }
    });
  }
});