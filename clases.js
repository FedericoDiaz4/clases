class Usuario {
    constructor(name, surname, books, pets) {
        this.name = name,
        this.surname = surname,
        this.books = books,
        this.pets = pets
    }

    getFullName() {
        return `${this.name} ${this.surname}`;
    }

    addMascota(namePet) {
        this.pets.push(namePet);
    }

    countMascotas() {
        return this.pets.length;
    }

    addLibros(name, author) {
        const book = {name, author}
        this.books.push(book);
    }

    getBookNames() {
        return this.books.map(book => book.name);
    }

}

const books = [{name: "Libro1", author: "Autor1"}, {name: "Libro2", author: "Autor2"}, {name: "Libro3", author: "Autor3"}];
const pets = ["perro", "gato", "hamster"];

const usuario = new Usuario("Jose", "Lopez", books, pets)

console.log(usuario.getFullName());
console.log(usuario.countMascotas());
usuario.addMascota("mascota4");
console.log(usuario.countMascotas());
usuario.addLibros("Libro4", "Autor4");
console.log(usuario.getBookNames());