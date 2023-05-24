class Publisher {
    constructor (items) {
        this.items = items;
    }
    printItems() {
        console.log(this.items.map(value => value.print()));
    }
    add(item) {
        this.items.push(item);
    }
}
class Item {
    constructor (description, title) {
        this.description = description;
        this.title = title;
    }
    print() {
        return `Title: ${this.title}. Description: ${this.description}`;
    } 
}
class Article extends Item {
    constructor (description, title, author) {
        super (description, title);
        this.author = author;
    }
    print() {
        return `${super.print()} By author: ${this.author}`;
    }
}
class News extends Item {
    constructor (description, title, source, date) {
        super (description, title);
        this.source = source;
        this.date = date;
    }
    print() {
        return `Source: ${this.source}, Happened on: ${this.date}. ${super.print()}`;
    }
}
class Course extends Item {
    constructor (description, title, expirationDate) {
        super (description, title);
        this.expirationDate = new Date(expirationDate);
    }
    #isActual() {
        let curDate = new Date();
        return this.expirationDate > curDate;
    }
    print () {
        if (this.#isActual()) {
        return `Course: ${this.title}, will be available till ${this.expirationDate}`;
        }
        else return "Not actual";
    }
}

let article1 = new Article ("Школьник из 7-го класса выиграл в лотерею 1 млрд долларов", "Вот это выигрыш!", "Григорий Озеренок");
let news1 = new News ("Источники утверждают, что мы будем жить очень хорошо", "Как мы будем жить?", "fakenews.com", "22.05.2023");
let course1 = new Course ("Научим Вас быть счастливыми за 10000 долларов", "Курсы счастья", "2024,06,22");

let publisher1 = new Publisher ([article1, news1, course1]);

let news2 = new News ("Источники утверждают, что мы победили всех врагов", "Мы очень крутые!", "fakenews.com", "22.05.2023");

publisher1.add(news2);
publisher1.printItems();

