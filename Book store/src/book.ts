
// New book object
class Book {

    // Data members:
    public name: string;
    public author: string;
    public publication: string;
    public price: number;
    public static readonly vat: number = 1.17;

    // Initialize object properties:
    public constructor(name: string, author: string, publication: string, price: number) {
        this.name = name;
        this.author = author;
        this.publication = publication;
        this.price = price;
    }

    // Display book properties:
    public displayBookProps(): void {
        console.log("Book Name: " + this.name);
        console.log("Author Name: " + this.author);
        console.log("Published by: " + this.publication);
        console.log("Price: " + this.price);
    }

    // Calculate vat:
    public priceWithVat() {
        return this.price * Book.vat;
    }

}

// Export and use in the main file:
export default Book;