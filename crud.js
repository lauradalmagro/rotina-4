import {database} from "./firebase.js"
import{push, update, remove, ref, onValue, set} from "https://www.gstatic.com/firebasejs/12.19.0/firebase-database.js";

const pessoas = ref(database, "pessoas");
export function criarPessoa(nome, idade, profissao) {
    const novaPessoa = push(pessoas);

    return set(novaPessoa, {
        id: novaPessoa.key,
        nome: nome,
        idade: idade,
        profissao: profissao
    });
}

export function buscarPessoas(callback) {
    onValue(pessoas, (snapshot) => {
        const dados = snapshot.val();

        const lista = dados ? Object.values(dados) : [];

        callback(lista);
    });
}

export function editarPessoa(id, nome, idade, profissao) {
    const pessoa = ref(database, `pessoas/${id}`);

    return update(pessoa, {
        nome: nome,
        idade: idade,
        profissao: profissao
    });
}

export function excluirPessoa(id) {
    const pessoa = ref(database, `pessoas/${id}`);

    return remove(pessoa);
}