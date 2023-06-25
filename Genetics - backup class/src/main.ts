import Backup from "./backup.js";
import Kitten from "./kitten.js";

const userName = new Backup<string>("First Name", "David");
console.log(userName.displayBackup());

const userAge = new Backup<number>("Age", 33);
console.log(userAge.displayBackup());

const userIsSingle = new Backup<boolean>("Single", false);
console.log(userIsSingle.displayBackup());

const dateOfBirth = new Backup<Date>("Date of Birth", new Date(1989, 11, 24));
console.log(dateOfBirth.displayBackup());

console.log("---------------------");

const pet = new Backup<Kitten>("Pet Info",new Kitten("Gini", 6, true));
console.log(pet.displayBackup());