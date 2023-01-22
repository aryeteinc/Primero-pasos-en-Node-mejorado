const operacion = require('./helpers/operacion');
const yargs = require('./config/yargs');
console.clear();
console.log(yargs);

const {t,b,l,s} = yargs;
operacion(t, b,l,s)
.then((tabla) => console.log(tabla) )
.catch(err => console.log(error))

