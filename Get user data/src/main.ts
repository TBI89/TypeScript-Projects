
// Collect user info via prompt:
const firstName: string = prompt("Please enter your first name");
const lastName: string = prompt("Please enter your last name");
const email: string = prompt("Please enter your email address");
const phoneNumber: number = +prompt("Please enter your phone number name");
const age: number = +prompt("Please enter your age");

// Display the info in an html div element:
const dataBox: HTMLDivElement | null = document.getElementById("dataBox") as HTMLDivElement | null;
let html: string | number =
    `
    <p>First name: ${firstName}<br>Last Name: ${lastName}<br>Email: ${email}<br>Phone Number: ${phoneNumber}<br>Age: ${age}</p>
    `;
dataBox.innerHTML = html;