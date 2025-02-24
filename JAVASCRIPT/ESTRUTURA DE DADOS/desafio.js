function LinkedList() {
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
        if(position >= 0 && position <= this.size()){
            let node = head;
            for (let i = 0; (i < position) && (node != null); i++){
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
        if (position > -1 && position <= length){
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
            return current;
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
}

let listaEncadeada = new LinkedList();

// Adicionando alunos
listaEncadeada.append('Pedro', 8.9, 'A');
listaEncadeada.append('Ana', 8.7, 'A');
listaEncadeada.append('Maria', 9.3, 'I');

console.log('Relação total de alunos:');
console.log(listaEncadeada.toString());

console.log('Alunos com matrícula ativa:');
// Verificando alunos com matrícula ativa
let current = listaEncadeada.getHead();
while(current) {
    if(current.status === 'A') {
        console.log(current.element);
    }
    current = current.next;
}

// Removendo Pedro
listaEncadeada.remove('Pedro');
console.log(listaEncadeada.toString());

// Adicionando Paula na posição 1
console.log('Adicionando Paula na posição 1:');
listaEncadeada.insert(1, 'Paula', 9.1, 'A');
console.log(listaEncadeada.toString());

// Adicionando Pedro na posição 2 e João na posição 5
console.log('Adicionando Pedro na posição 2 e João na posição 5:');
listaEncadeada.insert(2, 'Pedro', 8.9, 'A');
listaEncadeada.insert(5, 'João', 7.5, 'A');
console.log(listaEncadeada.toString());