window.onload = function () {

    const input = this.document.getElementById("tarefaInput");
    const btnAdicionar = this.document.getElementById("btnAdicionar");
    const lista = this.document.getElementById("ListaTarefa");

    btnAdicionar.addEventListener("click", () => {
        
        //recupera o valor do campo input text 
        const texto = input.value.trim();

        //Criar um elemento da minha linha lista tarefa 
       const li = this.document.createElement("li");

       // adicionar o valor do input no meu item da lista 
       li.textContent = texto;

       //adiciona o item na lista para ser apresentado 
      
      lista.appendChild(li);
      



    });
};