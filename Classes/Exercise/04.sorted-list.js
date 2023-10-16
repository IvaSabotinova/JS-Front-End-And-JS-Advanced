class List {
    #numbers;

    constructor() {
        this.#numbers = [];
        this.size = 0;
    }

    add(number) {
        this.#numbers.push(number);
        this.size = this.#numbers.length;
        this.#numbers.sort((a, b) => a - b);
        
    }

    remove(index) {
        if (index < 0 || index >= this.#numbers.length) {
            throw new Error('Index is outside the boundary of the array!')
        }
       
        this.#numbers.splice(index, 1);
        this.size = this.#numbers.length;       
    }

    get(index) {
        if (index < 0 || index >= this.#numbers.length) {
            throw new Error('Index is outside the boundary of the array!')
        }
     return this.#numbers[index];
    }

    
}

let list = new List();
list.add(5);
list.add(6);
list.add(7);
console.log(list.get(1));
list.remove(1);
console.log(list.get(1));
console.log(list.size)

