let frutas = [];
let laticinios = [];
let congelados = [];
let doces = [];
let massas = [];
let produto = document.getElementById('b__Produto').value;
let checkboxes = document.querySelectorAll('input[type="checkbox"]');

function exibeArray(id, array) {
    let idDaLista = document.getElementById(id);
    idDaLista.innerHTML = array.join(',<br> '); 
    atualizarItens();
}

//criar bloco de itens já incluidos
function atualizarItens() {
    let select = document.getElementById('itemSelecionado');
    select.innerHTML = '<option value="" disabled selected>Escolha um item</option>';
    frutas.forEach(item => select.add(new Option(item, item)));
    laticinios.forEach(item => select.add(new Option(item, item)));
    congelados.forEach(item => select.add(new Option(item, item)));
    doces.forEach(item => select.add(new Option(item, item)));
    massas.forEach(item => select.add(new Option(item, item)));
}

//funçao para desmarcar os outros check box
checkboxes.forEach(checkbox => {
    checkbox.addEventListener('change', function() {
        if (this.checked) {
            checkboxes.forEach(otherCheckbox => {
                if (otherCheckbox !== this) {
                    otherCheckbox.checked = false;
                }
            });
        }
    });
});

//funcao para adicionar um produto
function adicionaProduto() {
    let produto = document.getElementById('b__Produto').value.trim();
    if (!produto) {
        alert('Por favor, digite o nome do produto.');
        return;
    }
    if (document.getElementById('b__Check1').checked) {
        frutas.push(produto);
    } else if (document.getElementById('b__Check2').checked) {
        laticinios.push(produto);
    } else if (document.getElementById('b__Check3').checked) {
        congelados.push(produto);
    } else if (document.getElementById('b__Check4').checked) {
        doces.push(produto);
    } else if (document.getElementById('b__Check5').checked) {
        massas.push(produto);
    } else {
        alert('Você não escolheu o grupo do produto. Volte e escolha um dos grupos!');
    }

    exibeArray('frutas__Text', frutas);
    exibeArray('laticinios__Text', laticinios);
    exibeArray('congelados__Text', congelados);
    exibeArray('doces__Text', doces);
    exibeArray('massas__Text', massas);
    document.getElementById('b__Produto').value = '';
}
//funcao para deletar um produto
function deletaProduto() {
    const select = document.getElementById('itemSelecionado');
    const itemSelecionado = select.value;
    if (!itemSelecionado) {
        alert('Por favor, selecione um item para deletar.');
        return;
    }

    // Remove o item dos arrays
    frutas = frutas.filter(item => item !== itemSelecionado);
    laticinios = laticinios.filter(item => item !== itemSelecionado);
    congelados = congelados.filter(item => item !== itemSelecionado);
    doces = doces.filter(item => item !== itemSelecionado);
    massas = massas.filter(item => item !== itemSelecionado);

    // Atualiza a exibição e o select
    exibeArray('frutas__Text', frutas);
    exibeArray('laticinios__Text', laticinios);
    exibeArray('congelados__Text', congelados);
    exibeArray('doces__Text', doces);
    exibeArray('massas__Text', massas);
}

