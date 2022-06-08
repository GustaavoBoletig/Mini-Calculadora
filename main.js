document.getElementById('adicao').addEventListener('click', adicionar);
document.getElementById('subtracao').addEventListener('click', subtrair);
document.getElementById('multiplicacao').addEventListener('click', multiplicar);
document.getElementById('divisao').addEventListener('click', dividir);

function adicionar() {

    const interface1 = Number(document.getElementById('interface1').value);
    const interface2 = Number(document.getElementById('interface2').value);
    document.getElementById('output').innerHTML = `Resultado da adição : ${interface1 + interface2}`;

};
function subtrair() {

    const interface1 = Number(document.getElementById('interface1').value);
    const interface2 = Number(document.getElementById('interface2').value);
    document.getElementById('output').innerHTML = `Resultado da subtração : ${interface1 - interface2}`;

};
function multiplicar() {
    const interface1 = Number(document.getElementById('interface1').value);
    const interface2 = Number(document.getElementById('interface2').value);
    document.getElementById('output').innerHTML = `Resultado da multiplicação : ${interface1 * interface2}`;

}
function dividir() {

    const interface1 = Number(document.getElementById('interface1').value);
    const interface2 = Number(document.getElementById('interface2').value);
    document.getElementById('output').innerHTML = `Resultado da divisão : ${interface1 / interface2}`;

};
