## 这是一个简单的todomvc样板项目,主要目的在于介绍组件的使用。

目前，我们对外只提供混淆过的qnui代码。但是你依旧可以按需引用不同的组件js。

由于样式文件的体积并不到，建议您在全局入口直接引用cdn文件，请求改成最新版本号。


`http://g.alicdn.com/qn/QNUI-OPEN/0.1.2/qnui.min.css`


- `import Button from 'qnui/lib/button'`,这样只会引用Button组件对应的js代码，当时当引用的组件较多时，这样的代码写起来会比较头疼。

使用https://www.npmjs.com/package/babel-plugin-transform-imports这个插件，可以让你在使用es6解构语法的同时享受按需引用。

- `import {Button,Checkbox} from 'qnui'`

将会被解析成

```

var _button = require('qnui/lib/button');
var _checkbox = require('qnui/lib/button');

```

具体的使用方法可以参考本项目中的.babelrc
