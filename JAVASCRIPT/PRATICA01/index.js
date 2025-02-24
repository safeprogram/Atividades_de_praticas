const readline = require('readline-sync');
const contatoControlador = require('./controlador');

function menu() {
    console.log("1. Adicionar contato");
    console.log("2. Listar contatos");
    console.log("3. Buscar contato");
    console.log("4. Atualizar contato");
    console.log("5. Remover contato");
    console.log("6. Sair");
}

function escolherOpcao(opcao) {
    switch(opcao) {
        case '1':
            const nome1 = readline.question("Nome: ");
            const email1 = readline.question("Email: ");
            const telefone1 = readline.question("Telefone: ");
            contatoControlador.adicionarContato(nome1, email1, telefone1);
            break;
        case '2':
            const contatos = contatoControlador.listarContatos();
            contatos.forEach(contato => console.log(`${contato.nome} - ${contato.email} - ${contato.telefone}`));
            break;
        case '3':
            const nome3 = readline.question("Nome do contato a ser buscado: ");
            const contatoEncontrado = contatoControlador.buscarContato(nome3);
            if (contatoEncontrado) {
                console.log(`${contatoEncontrado.nome} - ${contatoEncontrado.email} - ${contatoEncontrado.telefone}`);
            } else {
                console.log("Contato não encontrado.");
            }
            break;
        case '4':
            const nome4 = readline.question("Nome do contato a ser atualizado: ");
            const email4 = readline.question("Novo email: ");
            const telefone4 = readline.question("Novo telefone: ");
            const atualizado = contatoControlador.atualizarContato(nome4, email4, telefone4);
            if (atualizado) {
                console.log("Contato atualizado com sucesso.");
            } else {
                console.log("Contato não encontrado.");
            }
            break;
        case '5':
            const nome5 = readline.question("Nome do contato a ser removido: ");
            const removido = contatoControlador.removerContato(nome5);
            if (removido) {
                console.log("Contato removido com sucesso.");
            } else {
                console.log("Contato não encontrado.");
            }
            break;
        case '6':
            process.exit();
        default:
            console.log("Opção inválida.");
    }
}

function main() {
    while (true) {
        menu();
        const opcao = readline.question("Escolha uma opção: ");
        escolherOpcao(opcao);
    }
}

main();