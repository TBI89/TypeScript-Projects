import Book from "./book.js";
// Creating 3 new hard-coded objects(books) and displaying there properties & price + vat:
const booksForKids = new Book("Harry Potter", "J.K Rowling", "Bloomsbury ", 58);
booksForKids.displayBookProps();
console.log("Price with vat: " + booksForKids.priceWithVat().toFixed(0));
const selfDevelopment = new Book("Atomic Habits", "James Clear", "Matar ", 100);
selfDevelopment.displayBookProps();
console.log("Price with vat: " + selfDevelopment.priceWithVat().toFixed(0));
const professional = new Book("Lower Back Disorders", "Stuart Mcgill", "Yeda", 408);
professional.displayBookProps();
console.log("Price with vat: " + professional.priceWithVat().toFixed(0));
