// Required
const fs = require('fs');


let listarTabla = (base, limite = 10) => {
        for (let i = 1; i <= limite; i++) {
           console.log(`${ base } x ${ i } = ${ base*i }\n`);    
        }

}


let crearArchivo = (base, limite = 10) => {
    return new Promise((resolve, reject) =>{

        if ( !Number(base) || !Number(limite) ) {
            reject(`El valor introducido ${ base } no es un numero`);
            return;
        }
        let data = "";
        
        for (let i = 1; i <= limite; i++) {
            data += `${ i } x ${ base } = ${ i*base }\n`;
        }
        
        fs.writeFile(`tablas/tabla-${ base }-al-${ limite }.txt`, data, (err) => {
          if (err) 
            reject(err);
          else  
            resolve(`tabla-${ base }-al-${ limite }.txt`);
        });
    });
}

module.exports= {
    crearArchivo,
    listarTabla
};

