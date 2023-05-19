const listElement = document.querySelector("#app ul")
const inputElement = document.querySelector("#app input")
const buttonElement = document.querySelector("#app button")

// listElement e outros foram nomes dado pelo prórpio Lazaro, posso nomear do jeito que eu quiser
// console.log(listElement, inputElement, buttonElement) -> confere se fizemos tudo certo

const tarefas = ["Estudar para prova", "Dormir cedo"]

for (const itemTarefa of tarefas) {
    //console.log(itemTarefa)
    const tarefaElement = document.createElement("li")
    const tarefaText = document.createTextNode(itemTarefa)

    tarefaElement.appendChild(tarefaText)
    listElement.appendChild(tarefaElement)
}