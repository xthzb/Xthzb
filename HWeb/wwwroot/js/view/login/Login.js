Ext.define('HWeb.view.login.Login', {
  extend: 'Ext.form.Panel',
  requires: [
    'HWeb.view.login.LoginControl',
    'HWeb.view.login.LoginModel'
  ],
  controller: 'login', viewModel: 'login',

  renderTo: 'Login',
  border: 0,
  frame: true,
  layout: { type: 'vbox', align: 'middle', pack: 'center' },
  defaults: {
    labelAlign: 'right', labelWidth: 50,
    style: 'margin:8px;',
    fieldStyle: 'font-size:18px;padding-left:8px;',
    width: 280, allowBlank: false,
  },
  items: [
    {
      xtype: 'container', height: 80,
      bind: {
        html: [
          '<div style="font-size:35px;font-weight:200;font-family:幼圆;text-align:center;">',
          '{title}<br/><span style="font-size:18px;">用户登录</span>',
          '</div > '
        ].join('')
      }
    },
    {
      xtype: 'textfield', name: 'UserId', emptyText: '请输入您的工号', value: UserId
    },
    {
      xtype: 'textfield', inputType: 'password', name: 'Password', emptyText: '请输入您的密码',
    },
  ],
  buttonAlign: 'center',
  buttons: [
    { text: '登录', scale: 'medium', width: 180, formBind: true }
  ]
});