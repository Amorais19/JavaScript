const listElement = document.querySelector("#app ul")
const inputElement = document.querySelector("#app input")
const buttonElement = document.querySelector("#app button")

// listElement e outros foram nomes dado pelo prórpio Lazaro, posso nomear do jeito que eu quiser
// console.log(listElement, inputElement, buttonElement) -> confere se fizemos tudo certo

//const tarefas = ["Estudar para prova", "Dormir cedo"]
const tarefas = JSON.parse(localStorage.getItem("tarefas")) || [] // pega o que tem lá (no local storage da pessoa que tiver no meu site) ou inicia com o vetor vazio

function renderTarefas() {
    listElement.innerHTML = "" // aqui faz não repetir os itens anteriores da tarefa
    // console.log(tarefas)
    for (const itemTarefa of tarefas) {
        // console.log(itemTarefa)
        const tarefaElement = document.createElement("li")
        const tarefaText = document.createTextNode(itemTarefa)
        const linkElement = document.createElement("a") // cria uma tag a
        linkElement.setAttribute("href", "#") // link # é uma âncora
        const pos = tarefas.indexOf(itemTarefa) // pos é uma variável, no caso, uma variável para posição
        linkElement.setAttribute("onclick", `deleteTarefa(${pos})`) // o $ esta atribuindo o "pos" no "deleteTarefa", o ``é usado pois se usar "" ele vai escrever como texto
        const linkText = document.createTextNode("Excluir") // exclui uma linha, que é o "a" do html
        linkElement.appendChild(linkText)

        tarefaElement.appendChild(tarefaText)
        tarefaElement.appendChild(linkElement)
        listElement.appendChild(tarefaElement)
    }
}
renderTarefas()
function addTarefas() {
    const text = inputElement.value
    tarefas.push(text)
    // console.log(text)
    renderTarefas()
    inputElement.value = "" // aqui está limpando a barra de pesquisa
    saveToStorage()
}
buttonElement.onclick = addTarefas
function deleteTarefa(pos) { // o parâmetro podia ser qualquer coisa
    // delete tarefas[pos] deixaria o item com "undefined", tipo vazio, mas permanecendo a linha
    tarefas.splice(pos, 1)
    renderTarefas()
    saveToStorage()
}
function saveToStorage() {
    localStorage.setItem("tarefas", JSON.stringify(tarefas)) // setItem está armazenando (o que eu digito), e o get pega (o que eu digito)
}