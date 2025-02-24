function MyLinkedList() {
    let length = 0;
    let head = null;

    let Node = function (element, nota, status) {
        this.element = element;
        this.nota = nota;
        this.status = status;
        this.next = null;
    };

    this.append = function(element, nota, status){
        const node = new Node(element, nota, status);
        let current = null;
        if (head === null){
            head = node;
        }else {
            current = head;
            while (current.next){
                current = current.next;
            }
            current.next = node;
        }
        length++;
    };

    this.size = function(){
        return length;
    };

    this.getElementAt = function(position){
        if(position >= 0 && position < this.size()){
            let node = head;
            for (let i = 0; i < position; i++){
                node = node.next;
            }
            return node;
        }
        return null;
    };

    this.insert = function(position, element, nota, status){        
        if(position >= 0 && position <= length){
            let node = new Node(element, nota, status),
                current = head,
                previous,
                index = 0;
           if (position === 0){
                node.next = current;
                head = node;
           } else {
               previous = this.getElementAt(position - 1);
               current = previous.next;
               node.next = current;
               previous.next = node;
           }
           length++;
           return true;
        } else {
            return false;
        }
    };

    this.removeAt = function(position) {
        if (position > -1 && position < length){
            let current = head,
                previous;
            if (position === 0){
                head = current.next;
            } else {
                previous = this.getElementAt(position - 1);      
                current = previous.next;
                previous.next = current.next;
            }
            length--;
            return current.element;
        } else{
            return null;
        }
    };

    this.remove = function(element) {
        let position = this.indexOf(element);
        return this.removeAt(position);
    };

    this.indexOf = function(element){
        let current = head;
        let index = 0;
        while (current) {
            if (element === current.element) {
                return index;
            }
            index++;
            current = current.next;
        }
        return -1;
    };

    this.isEmpty = function(){
        return length === 0;
    };

    this.getHead = function(){
        return head;
    };

    this.toString = function() {
        let current = head;
        let string = '';
        while(current){
            string += current.element + ' ' + current.nota + ' ' + current.status + (current.next ? ' -> ':' ');
            current = current.next;
        }
        return string;
    };  

    // Método para ordenar a lista por nota decrescente usando Bubble Sort
    this.sortListByGradeDesc = function() {
        let swapped;
        do {
            swapped = false;
            let current = head;
            let prev = null;
            while (current && current.next) {
                if (current.nota < current.next.nota) {
                    if (prev === null) {
                        head = current.next;
                    } else {
                        prev.next = current.next;
                    }
                    let temp = current.next;
                    current.next = temp.next;
                    temp.next = current;
                    prev = temp;
                    swapped = true;
                } else {
                    prev = current;
                    current = current.next;
                }
            }
        } while (swapped);
    };

    // Método para contar alunos com matrícula ativa
    this.countActiveStudents = function() {
        let current = head;
        let count = 0;
        while (current) {
            if (current.status === 'A') {
                count++;
            }
            current = current.next;
        }
        return count;
    };

    // Método para imprimir a lista
    this.printList = function() {
        let current = head;
        while (current) {
            console.log(current.element);
            current = current.next;
        }
    };
}

let listaEncadeada = new MyLinkedList();

// Adicionar alunos
listaEncadeada.append('Pedro', '8.9', 'A');
listaEncadeada.append('Ana', '8.7', 'A');
listaEncadeada.append('Maria', '9.3', 'I');
listaEncadeada.append('Paula', '9.1', 'A');
listaEncadeada.append('André', '7.5', 'A');
listaEncadeada.append('João', '8.0', 'A');

//Lista de alunos adicionados
console.log('A lista possui os alunos :', listaEncadeada.toString());

// Remover aluno
listaEncadeada.remove('Pedro');
console.log('A lista atualizada possui os alunos :', listaEncadeada.toString());

// Ordenar a lista por nota decrescente
listaEncadeada.sortListByGradeDesc();
console.log('A lista em ordem decrescente de nota é :', listaEncadeada.toString());

// Total de alunos
console.log('A lista atualizada possui os alunos :', listaEncadeada.toString());