# 前端开发

## 1:静态页面开发

1：rem布局移动端h5开发。

2: 小程序开发。

## 2:vue-cli项目

1:云和恩墨后台管理系统

涉及vuex、axios、vue-cli、Echarts、mock等主要技术。了解了vue全家桶的用法，路由，ajax，监听事件等。

```
├── README.md
├── build
│   ├── build.js
│   ├── check-versions.js
│   ├── logo.png
│   ├── utils.js
│   ├── vue-loader.conf.js
│   ├── webpack.base.conf.js
│   ├── webpack.dev.conf.js
│   ├── webpack.prod.conf.js
│   └── webpack.test.conf.js
├── config
│   ├── dev.env.js
│   ├── index.js
│   ├── prod.env.js
│   └── test.env.js
├── debug.log
├── dist
│   ├── index.html
│   └── static
│       ├── css
│       ├── favicon.ico
│       ├── fonts
│       ├── img
│       └── js
├── index.html
├── mock
│   ├── index.js
│   └── modules
│       ├── database
│       ├── domain
│       ├── hardware
│       ├── login
│       ├── monitor
│       ├── resource
│       └── user
├── package-lock.json
├── package.json
├── src
│   ├── App.vue
│   ├── api
│   │   ├── index.js
│   │   └── modules
│   ├── assets
│   │   ├── fonts
│   │   ├── images
│   │   └── scss
│   ├── components
│   │   └── status
│   ├── main.js
│   ├── router
│   │   ├── index.js
│   │   └── modules
│   ├── store
│   │   ├── index.js
│   │   ├── modules
│   │   └── mutation_types
│   ├── utils
│   │   ├── brush
│   │   ├── filters
│   │   ├── highlight
│   │   ├── http
│   │   ├── navigation
│   │   ├── notification
│   │   ├── plugins
│   │   ├── time
│   │   └── util
│   └── views
│       ├── alarm
│       ├── database
│       ├── domainSetting
│       ├── error
│       ├── hardware
│       ├── homepage
│       ├── login
│       ├── panel
│       ├── resource
│       └── sysSetting
├── static
│   └── favicon.ico
└── test
    ├── e2e
    │   ├── custom-assertions
    │   ├── nightwatch.conf.js
    │   ├── runner.js
    │   └── specs
    └── unit
        ├── index.js
        ├── karma.conf.js
        └── specs

```



2：开普敦

封装了各种方法、组件；让开发更简单，很多公共的东西可以直接拿出来用。
布局组件，样式等。
比如：mixin混合（form页面的公共方法，变量。page页面的公共方法和变量。store里面的getter，mutation，action等。）表单的提交等。

```
.
├── CHANGELOG.MD
├── README.md
├── build
│   ├── config.js
│   ├── config.prod.js
│   ├── server.js
│   ├── webpack.config.base.js
│   ├── webpack.config.dev.js
│   └── webpack.config.prod.js
├── cpt-toolkit
│   ├── Promise.extension.js
│   ├── components
│   │   ├── cpt-modal.vue
│   │   ├── cpt-panel.vue
│   │   ├── cpt-signature
│   │   ├── cpt-tree
│   │   ├── form-tab
│   │   ├── image-view
│   │   ├── index.js
│   │   ├── layouts
│   │   ├── render.js
│   │   └── step
│   ├── directives
│   │   ├── drag.js
│   │   ├── grid-autosize.js
│   │   ├── index.js
│   │   ├── inner-class.js
│   │   └── modal-ext.js
│   ├── filters
│   │   ├── get.js
│   │   ├── index.js
│   │   ├── lo.js
│   │   ├── moment.js
│   │   └── round.js
│   ├── index.js
│   ├── mixins
│   │   ├── edit.js
│   │   ├── form.js
│   │   └── page.js
│   ├── plugins
│   │   └── event-hub.js
│   ├── types
│   │   ├── axios.d.ts
│   │   ├── es6-promise.d.ts
│   │   └── index.d.ts
│   └── utils
│       ├── ajax.js
│       ├── common-utils.js
│       ├── dom-utils.js
│       ├── enhance-comp.js
│       ├── idcard-utils.js
│       ├── model-utils.js
│       └── tree.js
├── docs
│   ├── AJAX.MD
│   ├── ENHANCE.MD
│   ├── EVENTHUB.MD
│   ├── PROMISE.MD
│   ├── SCAFFOLD.MD
│   ├── UTILS.MD
│   ├── components
│   ├── directives
│   ├── filters
│   └── mixins
│       ├── EDIT.MD
│       ├── FORM.MD
│       └── PAGE.MD
├── hooks
│   ├── commit-msg
│   └── pre-commit
├── index.d.ts
├── package-lock.json
├── package.json
├── postcss.config.js
├── src
│   ├── assets
│   │   ├── logo.png
│   │   └── static
│   ├── components
│   │   ├── app.vue
│   │   ├── global
│   │   ├── home
│   │   ├── intro
│   │   └── login
│   ├── index.html
│   ├── main.js
│   ├── routes
│   │   ├── home
│   │   ├── index.js
│   │   ├── intro.js
│   │   └── login
│   ├── store
│   │   ├── index.js
│   │   └── modules
│   ├── styles
│   │   ├── app.less
│   │   ├── common.less
│   │   ├── index.less
│   │   └── variables.less
│   └── utils
│       ├── ajax.js
│       ├── buz-utils.js
│       ├── common.js
│       └── consts.js
└── tsconfig.json
```



