export function signoZodiaco(fecha:string):string{

    var month:number = new Date(fecha).getMonth();
    var day:number = new Date(fecha).getDay();

    var sign:string = "";

    switch (month) {
        case 0:
            (day < 20) ? sign = "Capricorn" : sign ="aquarius";            
            break;
        case 1:
            (day < 19) ? sign = "Aquarius" : sign ="Piscis";
            break;
        case 2:
            (day < 21) ? sign = "Piscis" : sign ="Aries";
            break;
        case 3:
            (day < 20) ? sign = "Aries" : sign ="Taurus";
            break;
        case 4:
            (day < 21) ? sign = "Taurus" : sign ="Gemini";
            break;
        case 5:
            (day < 21) ? sign = "Gemini" : sign ="Cancer";
            break;
        case 6:
            (day < 23) ? sign = "Gemini" : sign ="Cancer";
            break;
        case 7:
            (day < 23) ? sign = "Leo" : sign ="virgo";
            break;
        case 8:
            (day < 23) ? sign = "virgo" : sign ="libra";
            break;
        case 9:
            (day < 23) ? sign = "Libra" : sign ="scorpio";
            break;
        case 10:
            (day < 22) ? sign = "scorpio" : sign ="sagittarius";
            break;
        case 11:
            (day < 22) ? sign = "sagittarius" : sign ="capricorn";
            break;
    
        default:
            break;
    }
    return sign;
}

export function tipoNumero(num:number):string{
    if(num % 2 == 0){
        return "El numero es par";   
    }else{
        return "El numero es impar";
    }
}