import {RepasoIf} from "./RepasoIf";
export function getContinente(pais:string):string{
    var continente:string = '';
    var activities:string[][] = [
        ['ALBANIA', 'ALEMANIA','FRANCIA','PAÍSES BAJOS','MOLDAVIA'],
        ['COLOMBIA', 'ESTADOS UNIDOS','JAMAICA','PUERTO RICO','URUGUAY'],
        ['AFGANISTÁN', 'JORDANIA','MALASIA','SINGAPUR','TAIWAN'],
        ['CABO VERDE', 'CHAD','ETIOPÍA','KENIA','MARRUECOS'],
        ['KIRIBATI', 'ISLAS MARSHALL','NUEVA ZELANDA','TONGA','TUVALU']
    ];
    
    for (let i = 0; i < activities.length; i++) {
        if (activities[i].includes(pais)) {
            switch (i) {
                case 0:
                    continente = 'EUROPA';
                    break;
                case 1:
                    continente = 'AMERICA';
                    break;
                case 2:
                    continente = 'ASIA';
                    break;
                case 3:
                    continente = 'AFFRICA';
                    break;
                case 4:
                    continente = 'OCEANIA';
                    break;
            
                default:
                    break;
            }
            return continente;
        };
        
    }
}

export function impares(numero:number){
    for (var i = 0; i <= numero; i++) {
        if (i % 2 != 0) {
            console.log(i);
        }        
    }
}

export function invertirArray(array){
    return array.reverse();
}

export function isArcoiris(arrayColores:string[]){
    var arcoiris:string[] = ["rojo", "naranja", "amarillo", "verde", "cian", "azul" , "violeta"];
    for (let i = 0; i < arrayColores.length; i++) {
        if (arcoiris.includes(arrayColores[i])) {
            console.log(arrayColores[i]);
        }        
    }
}

export function esPar(arrayNumeros:number[]){
    for (let i = 0; i < arrayNumeros.length; i++) {
        if (arrayNumeros[i] % 2 == 0) {
            console.log(arrayNumeros[i]);
        }        
    }
}

export function empiezaPor(arrayNombres:string[]):boolean{
    var todos = true;
    for (let i = 0; i < arrayNombres.length; i++) {
        if (arrayNombres[i].charAt(0) == "M" && todos) {
            console.log(arrayNombres[i]);
        }else{
            todos = false;        
        }
    }
    return todos;
}

export function sumaChars(arrayPalabras:string[]):number{
    var charCount = 0;
    for (let i = 0; i < arrayPalabras.length; i++) {
        charCount += arrayPalabras[i].length;
    }
    console.log(charCount);
    return charCount;
}
 
export function tipoNumeroArray(array){
    return RepasoIf.tipoNumero(sumaChars(array));
}
