Ext.define('HWeb.view.main.Main', {
  extend: 'Ext.container.Viewport',
  requires: [
    'HWeb.view.main.MainControl',
    'HWeb.view.main.MainModel',
    'HWeb.view.home.Main',
    'ux.Theme'
  ],
  alias: 'widget.main',
  controller: 'main', viewModel:'main',

  layout: 'border',

  items: [
    {
      region: 'north', xtype: 'container', itemId: 'North',
      cls: 'main-north',
      items: [
        {
          xtype: 'container', height: 50, cls: 'main-north-1',
          bind: { html: '{title}'}
        },
        {
          xtype: 'container', layout: 'hbox',
          items: [
            {
              xtype: 'segmentedbutton', itemId: 'Menu',
              style: 'margin-left:25px;margin-bottom:8px;',
              defaults: { scale: 'large', style: 'padding:0 20px;' },
              _items1: [
                { text: '首页', name: 'HWeb.view.home.Main', iconCls: 'x-fa fa-h-square' },
                { text: '企业公文', name: 'HWeb.view.article.Main' },
                { text: '内部邮件', name: 'HWeb.view.mail.Main' },
                {
                  text: '人事管理', menu: {
                    layout: 'vbox',
                    items: [
                      { text: '职员管理', name: 'HWeb.view.employee.Main' },
                      { text: '薪资管理', name: 'HWeb.view.salary.Main' },
                      { text: '考勤管理', name: 'HWeb.view.attendance.Main' },
                    ]
                  }
                },
                {
                  text: '其它业务', menu: {
                    layout: 'vbox',
                    items: [
                      { text: '职员管理', name: 'HWeb.view.employee.Main' },
                      { text: '薪资管理', name: 'HWeb.view.salary.Main' },
                      { text: '考勤管理', name: 'HWeb.view.attendance.Main' },
                    ]
                  }
                },
                { text: '文件下载', name: 'HWeb.view.files.Main' },
                { text: '系统管理', name: 'HWeb.view.system.Main' },
              ]
            },
            { xtype: 'tbspacer', width: 100 },
            { xtype: 'uxTheme' },
          ]
        },
      ]
    },
    {
      region: 'west', xtype: 'panel', itemId: 'West',
      split: true, collapsible: true,
      title:'功能菜单',titleAlign:'center',
      width:150,maxWidth:300,minWidth:100,
    },
    {
      region: 'center', xtype: 'container', itemId: 'Center',
      layout: 'fit', cls: 'main-center',
      items: [{ xtype: 'homeMain' }]
    }
  ]
});