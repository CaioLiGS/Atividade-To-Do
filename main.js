function adicionarTarefa(){
    let li = document.createElement('li')
    let input = document.formPrincipal.tarefa.value
    let input_texto = document.createTextNode(input)

    li.appendChild(input_texto)

    let ul = document.querySelector(".tarefas")
    ul.appendChild(li)

    document.formPrincipal.tarefa.value = ""

    criarBotaoFechar(li, ul)
}

function criarCheck(li, ul){
    let rotulo = document.createElement('SPAN')
    let fechar = document.createTextNode('√')
}

function criarBotaoFechar(li, ul){
    let rotulo = document.createElement('SPAN')
    let fechar = document.createTextNode('X')

    rotulo.className = "close"
    rotulo.appendChild(fechar)

    ul.appendChild(rotulo)

    rotulo.onclick = () => {
        li.style.display = "none"
        rotulo.style.display = "none"
    }
}

document.querySelectorAll('LI').forEach(criarBotaoFechar)
document.querySelector('ul').addEventListener('click', (e) => {
    if(e.target.tagName === "LI"){
        e.target.classList.toggle('checked')
    }
})
