// Procurar o botão
document.querySelector("#add-time")
//Quando clicar no botão
.addEventListener('click', cloneField)

// Executar uma ação
function cloneField() {
    // Duplicar os campos. Que campos?
    const newFieldContainer = document.querySelector('.schedule-item').cloneNode(true)// boolean: true ou false
    
    // pegar os campos. Que Campos??
    const fields = newFieldContainer.querySelectorAll('input')
    
    // para cada caompo, limpar
    fields.forEach(function(field) {
        // pega o field do momento e limpa ele
        field.value = ""
    })
    // Colocar na página. Onde??
    document.querySelector("#schedule-items").appendChild(newFieldContainer)
}
    