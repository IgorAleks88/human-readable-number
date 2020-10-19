module.exports = function toReadable (number) {
    if (number==0) {
        return 'zero';
    }
    let textNumber='';
    let hundredNumber=Math.trunc(number/100);
    if (hundredNumber>0) {
    number=number-hundredNumber*100;
    switch (hundredNumber){
        case 1: textNumber='one hundred ';
        break;
        case 2: textNumber='two hundred ';
        break;
        case 3: textNumber='three hundred ';
        break;
        case 4: textNumber='four hundred ';
        break;
        case 5: textNumber='five hundred ';
        break;
        case 6: textNumber='six hundred ';
        break;
        case 7: textNumber='seven hundred ';
        break;
        case 8: textNumber='eight hundred ';
        break;
        case 9: textNumber='nine hundred ';
        break;
        default: break;
    }
}
if (number==0) {
    return textNumber.slice(0,-1);
}
if (number>19) {
  let tenNumber=Math.trunc(number/10);
  number=number-tenNumber*10;
  switch (tenNumber){
    case 2: textNumber=textNumber+'twenty ';
    break;
    case 3: textNumber=textNumber+'thirty ';
    break;
    case 4: textNumber=textNumber+'forty ';
    break;
    case 5: textNumber=textNumber+'fifty ';
    break;
    case 6: textNumber=textNumber+'sixty ';
    break;
    case 7: textNumber=textNumber+'seventy ';
    break;
    case 8: textNumber=textNumber+'eighty ';
    break;
    case 9: textNumber=textNumber+'ninety ';
    break;
    default: break;
}
switch(number){
    case 1: 
    return textNumber+'one'
    break;
    case 2: 
    return textNumber+'two'
    break;
    case 3: 
    return textNumber+'three'
    break;
    case 4: 
    return textNumber+'four'
    break;
    case 5: 
    return textNumber+'five'
    break;
    case 6: 
    return textNumber+'six'
    break;
    case 7: 
    return textNumber+'seven'
    break;
    case 8: 
    return textNumber+'eight'
    break;
    case 9: 
    return textNumber+'nine'
    break;
    default: return textNumber.slice(0,-1);
    break;
}
}
switch(number){
    case 1: 
    return textNumber+'one'
    break;
    case 2: 
    return textNumber+'two'
    break;
    case 3: 
    return textNumber+'three'
    break;
    case 4: 
    return textNumber+'four'
    break;
    case 5: 
    return textNumber+'five'
    break;
    case 6: 
    return textNumber+'six'
    break;
    case 7: 
    return textNumber+'seven'
    break;
    case 8: 
    return textNumber+'eight'
    break;
    case 9: 
    return textNumber+'nine'
    break;
    case 10: 
    return textNumber+'ten'
    break;
    case 11: 
    return textNumber+'eleven'
    break;
    case 12: 
    return textNumber+'twelve'
    break;
    case 13: 
    return textNumber+'thirteen'
    break;
    case 14: 
    return textNumber+'fourteen'
    break;
    case 15: 
    return textNumber+'fifteen'
    break;
    case 16: 
    return textNumber+'sixteen'
    break;
    case 17: 
    return textNumber+'seventeen'
    break;
    case 18: 
    return textNumber+'eighteen'
    break;
    case 19: 
    return textNumber+'nineteen'
    break;

}
}
