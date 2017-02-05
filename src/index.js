require('./index.html');
require('../style/main.scss');

const Elm = require('./Main.elm');
const node = document.getElementById('app')

const app = Elm.Main.embed(node)
