window.onload = function () {

    const input = this.document.getElementById ("tarefaInput");
    const btnAdicionar = this.document.getElementById("btnAdicionar");
    const lista = this.document.getElementById ("listaTarefas");

    btnAdicionar.addEventListener("click", () => {
    //Recupera o valor do campo input text
    const texto = input.value.trim ();

    //Criar um elemento da minha lista de tarefas
    const li = this.document.createElement ("li");

    //Adicionando o click para Riscar a tarefa.
    li.addEventListener("click", () => {
        li.classList.toggle("concluida")
    });
    
    //Adicionar o valor do input no meu item da lista
    li.textContent = texto;

    const btnRemover = this.document.createElement("button");
    btnRemover.textContent = "x";
    btnRemover.classList.add("fechar");
    btnRemover.addEventListener("click", () => {
        li.remove();
    });

    //Adicionando o botão X na LI (Item)
    li.appendChild(btnRemover);

    //adiciona o item na lista para ser apresentado
    lista.appendChild(li);
    
    //limpa o valor apos da adição.
    input.value = "";

  });
    
};