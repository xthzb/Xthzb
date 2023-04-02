window.JS_ROOT = './wwwroot/js';
Ext.Loader.setConfig({
    paths: {
        'ux': './wwwroot/js/ux'
    }
});

Ext.application({
    name: 'HWeb',
    appFolder: JS_ROOT,
    requires: [
        'HWeb.view.login.Login',
        'HWeb.view.main.Main'
    ],
    mainView: 'HWeb.view.main.Main',
    launch: function () { }
});