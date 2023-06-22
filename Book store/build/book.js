// New book object
class Book {
    // Initialize object properties:
    constructor(name, author, publication, price) {
        this.name = name;
        this.author = author;
        this.publication = publication;
        this.price = price;
    }
    // Display book properties:
    displayBookProps() {
        console.log("Book Name: " + this.name);
        console.log("Author Name: " + this.author);
        console.log("Published by: " + this.publication);
        console.log("Price: " + this.price);
    }
    // Calculate vat:
    priceWithVat() {
        return this.price * Book.vat;
    }
}
Book.vat = 1.17;
// Export and use in the main file:
export default Book;
