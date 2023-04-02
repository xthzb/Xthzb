Ext.define('HWeb.view.home.Main', {
  extend: 'Ext.Panel',
  alias: 'widget.homeMain',

  title: '首页', titleAlign: 'center',
  layout: { type: 'table', columns: 3 },
  defaults: {
    style: 'margin:8px;',
    width: 250, minHeight: 100,
  },
  items: [
    {
      xtype: 'form', title: '个人信息',
      defaults: { xtype: 'displayfield', labelWidth: 40, labelAlign: 'right' },
      items: [
      ]
    },
    {
      xtype: 'panel', title: '新闻中心', 
    },
    {
      xtype: 'panel', title: '待办事项',
    },
    {
      xtype: 'panel', title: '待办事项',
    },

  ]
});