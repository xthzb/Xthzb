Ext.define('ux.Theme', {
  extend: 'Ext.form.field.ComboBox',
  xtype: 'uxTheme',

  fieldLabel: '更换主题', name: 'theme', labelAlign: 'right', labelWidth: 70,
  editable: false,
  displayField: 'title', valueField: 'title',
  value: 'gray',
  store: {
    fields: ['title'],
    data: [
      //{ title: 'aria' },
      { title: 'classic' },
      //{ title: 'classic-sandbox' },
      //{ title: 'crisp' },
      //{ title: 'crisp-touch' },
      { title: 'gray' },
      //{ title: 'neptune' },
      //{ title: 'neptune-touch' },
      //{ title: 'triton' },
    ]
  },
  listeners: {
    select: function (combo) {
      var value = combo.getValue();
      var tUrl = '/Libs/ext-6.2.0/build/classic/theme-' + value + '/resources/' + 'theme-' + value + '-all.css';
      Ext.util.CSS.swapStyleSheet('theme', tUrl);
      return;

      window.open('?theme=' + newValue, '_top');
      return;

      var  theme = combo.getValue();  
      var href = 'ext/packages/ext-theme-'+theme+'/build/resources/ext-theme-'+theme+'-all.css';  
      var link = Ext.fly('theme');  
               
      if(!link) {  
        link = Ext.getHead().appendChild({  
          tag:'link',  
          id:'theme',  
          rel:'stylesheet',  
          href:''  
        });  
      };  
      link.set({href:Ext.String.format(href, theme)});  
    },
    change1: function (aThis, newValue, oldValue) {
    }
  }
});