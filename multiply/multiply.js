const fs = require('fs');
const colors = require('colors');

let listarTabla = (base, limite = 10) => {
    return new Promise((resolve, reject) => {
        if(!Number(base)){
            reject(`${base} no es un numero`);
            return;
        }
        for(let i=1;i<=limite;i++){
            console.log(`${base} x ${i} = ${base*i}\n`.green);
        }
    });
};

let crearArchivo = (base, limite = 10) => {
    return new Promise((resolve, reject) => {
        if(!Number(base)){
            reject(`${base} no es un numero`);
            return;
        }

        let data = '';

        for(let i=1;i<=limite;i++){
            data += (`${base} x ${i} = ${base*i}\n`);
        }
        
        fs.writeFile(`files/tabla${base}-${limite}.txt`, data, (err) => {
            if(err){
                reject(err);
            }
            else{
                resolve(`Tabla del ${base} al ${limite}`);
            } 
        });
    });
};

module.exports = {crearArchivo, listarTabla};


