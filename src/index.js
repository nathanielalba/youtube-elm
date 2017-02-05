require('./index.html');

const Elm = require('./Main.elm');
const node = document.getElementById('app')

const app = Elm.Main.embed(node)
