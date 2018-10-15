document.write('10 + 12 = ' + sum1(10, 12) + '<br>');
document.write('58 - 34 = ' + sum2(58, 34) + '<br>');
document.write('6 * 7 =  ' +sum3(6, 7) + '<br>');
document.write('144 / 12 = '+sum4(144, 12) + '<br>');
document.write('12 + 1 = '+sum5(12) + '<br>');
document.write('34 - 1 = '+sum6(34) + '<br>' + '<br>');


function sum1(cijfer1, cijfer2) {
    return cijfer1 + cijfer2;
}
function sum2(cijfer1, cijfer2) {
    return cijfer1 - cijfer2;
}
function sum3(cijfer1, cijfer2) {
    return cijfer1 * cijfer2;
}
function sum4(cijfer1, cijfer2) {
    return cijfer1 / cijfer2;
}
function sum5(cijfer1, cijfer2) {
    return cijfer1 + 1;
}
function sum6(cijfer1, cijfer2) {
    return cijfer1 - 1;
}
