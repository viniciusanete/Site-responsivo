var resultDomestic;
var resultCuidador;
var resultPassadeira;
var resultPiscina;
var resultDog;
var resultPosObra;

function id(el)
{
    return document.getElementById(el);
}

window.onload = function ()
{
    id('diaDomestica').onchange = function ()
    {
        id('horaDomestica4').style.display = this.value == '14/12/Q' ? 'block' : 'none';
        id('horaDomestica3').style.display = this.value == '06/12/T' ? 'block' : 'none';
        id('horaDomestica2').style.display = this.value == '04/12/D' ? 'block' : 'none';
        id('horaDomestica1').style.display = this.value == '03/12/S' ? 'block' : 'none';
    }
}


function calcularDomestica()
{
    var nPessoasDomesticas = parseInt(document.getElementById('nPessoasD').value, 10);
    resultDomestic = nPessoasDomesticas * 150.00;
    document.getElementById('resultDomestica').value = "R$ " + resultDomestic + ",00";
}


function calcularCuidador()
{
    var nPessoasCuidador = parseInt(document.getElementById('nPessoasC').value, 10);
    var nPlantaoCuidador = parseInt(document.getElementById('plantao').value, 10);
    var nMeses = parseInt(document.getElementById('meses').value, 10);
    resultCuidador = ((nPessoasCuidador * nPlantaoCuidador) * nMeses + 600);
    document.getElementById('resultCuidador').value = "R$ " + resultCuidador + ",00 /mês";
}

function calcularPassadeira()
{
    var nHorasServico = parseInt(document.getElementById('horasPassadeira').value, 10);
    resultPassadeira = 50 * nHorasServico;
    document.getElementById('resultPassadeira').value = "R$ " + resultPassadeira + ",00";

}

function calcularPiscina()
{
    var nPiscinas = parseInt(document.getElementById('qPiscinas').value, 10);
    resultPiscina = 100 * nPiscinas;
    document.getElementById('resultPiscina').value = "R$ " + resultPiscina + ",00";
}

function calcularDogWalker()
{
    var nDogs = parseInt(document.getElementById('nDogs').value, 10);
    var hDogs = parseInt(document.getElementById('hDogs').value, 10);
    resultDog = (hDogs * 50) * nDogs;
    document.getElementById('resultDog').value = "R$ " + resultDog + ",00";
}

function calcularPosObra()
{
    var casaPredio = parseInt(document.getElementById('casaPredio').value, 10);
    var totalPessoas = parseInt(document.getElementById('totalPessoas').value, 10);
    if (casaPredio == 1)
    {
        resultPosObra = (totalPessoas * 50);
    }
    if (casaPredio == 2)
    {
        resultPosObra = totalPessoas * 100;
    }
    document.getElementById('totalPosObra').value = "R$ " + resultPosObra + ",00";
}


function saberTotal()
{
    if (resultDog == null)
    {
        resultDog = 0;
    }
    if (resultPiscina == null)
    {
        resultPiscina = 0;
    }
    if (resultPassadeira == null)
    {
        resultPassadeira = 0;
    }
    if (resultDomestic == null)
    {
        resultDomestic = 0
    }
    if (resultCuidador == null)
    {
        resultCuidador = 0
    }
    if (resultPosObra == null)
    {
        resultPosObra = 0;
    }
    var calculo = parseInt(resultDog) + parseInt(resultPiscina) + parseInt(resultPassadeira) + parseInt(resultDomestic) + parseInt(resultPosObra) + parseInt(resultCuidador);
    document.getElementById('totalPreco').value = "R$ " + calculo;
}