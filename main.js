import{
    criarPessoa,
    buscarPessoas,
    editarPessoa,
    excluirPessoa
} from "./crud.js"

const nome = document.getElementById("nome");
const idade = document.getElementById("idade");
const profissao = document.getElementById("profissao");
const formulario = document.getElementById("form-pessoas")
const lista = document.getElementById("lista-pessoas");

formulario.addEventListener("submit", async (event) =>{
    event.preventDefault();
    await criarPessoa(
        nome.value,
        Number(idade.value),
        profissao.value
    );
    formulario.reset();
});
buscarPessoas((pessoas) => {
    lista.innerHTML = "";
    
    pessoas.forEach((pessoa) => {
        const div = document.createElement("div");
        div.innerHTML = `
        <p>Nome:${pessoa.nome}</p>
        <p>Idade:${pessoa.idade}</p>
        <p>Profissão:${pessoa.profissao}</p>
        <button class="editar">Editar</button>
        <button class="excluir">Excluir</button>
        `
        div.querySelector(".editar").addEventListener('click', async () => {
        const novoNome = prompt("Novo nome:", pessoa.nome);
        const novaIdade = prompt("Nova idade:", pessoa.idade);
        const novaProfissao = prompt("Nova rofissão:", pessoa.profissao);

        if(novoNome && novaIdade && novaProfissao){
            await editarPessoa(
                pessoa.id,
                novoNome,
                Number(novaIdade),
                novaProfissao
            );
        };
    });

    div.querySelector(".excluir").addEventListener('click', async () => {
        if(confirm("Deseja excluir pessoa?")){
            await excluirPessoa(pessoa.id);
        };
    });

    lista.appendChild(div);
    });
});