const confg = {
    base: {
        demand: true,
        alias: 'b'
    },
    limite: {
        alias: 'l',
        default: 10
    }
}

const argv = require('yargs')
.command('listar','Imprime en console la tabla de multiplicar', confg)
.command('crear','Genera un archivo con la tabla de multiplicar', confg)
.help().argv;

module.exports = {
    argv
}