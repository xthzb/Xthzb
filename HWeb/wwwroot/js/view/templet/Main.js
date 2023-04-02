Ext.define('HWeb.view.templet.Main', {
  extend: 'Ext.Container',

  style: 'padding:5px',
  items: [
    {
      xtype: 'menu', floating: false, plain: false,
      width: 150, height: 200,
      style:'padding:5px;',
      items: [
        {
          text: '个人',
          menu: {
            items: [
              { text: 'asdf' },
              { text: 'asdf' },
              { text: 'asdf' },
              { text: 'asdf' },
            ]
          }
        },
        { text: '个人' },
        { text: '个人' },
        { text: '个人' },
        { text: '个人' },
      ]
    }
  ]

});