const fs = require("fs");

async function operacion(tipoOperation,base=5,limit=10,list){
    let tabla = ''; 
    let tipo = tipoOperation;
    //let tablaScreen = ''; 
    
    try {
        let nameOperation ='';
        for (let index = 1; index <= limit; index++) {
            let ope,simbol;
            switch (tipo){
                case 'M':
                ope = `${base * index}`;
                simbol = '*';
                nameOperation = "Multiplicacion";
                break;
            
                case 'D':
                ope = `${base / index}`;
                simbol = '/';
                nameOperation = "Division";
                break;
    
                case 'R':
                ope = `${base - index}`;
                simbol = '-';
                nameOperation = "Resta";
                break;
    
                case 'S':
                ope = `${base + index}`;
                simbol = '+';
                nameOperation = "Suma";
                break;
            }
            
          tabla += `${base} ${simbol} ${index} = ${ope}\n`          
        }
        if(list){
            console.log(tabla);
        }

        fs.writeFileSync(`./salida/tabla-${base}-${nameOperation}.txt`,tabla,(error) => {
            if (error){
                throw error;
            }
        });
        return `tabla-${base}-${nameOperation}.txt => creada`;
    } catch (error) {
        return error;
    }

   
}

module.exports = operacion;