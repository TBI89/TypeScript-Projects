// Collect user info via prompt:
const firstName = prompt("Please enter your first name");
const lastName = prompt("Please enter your last name");
const email = prompt("Please enter your email address");
const phoneNumber = +prompt("Please enter your phone number name");
const age = +prompt("Please enter your age");
const dataBox = document.getElementById("dataBox");
if (dataBox) {
    let html = `
    <p>First name: ${firstName}<br>Last Name: ${lastName}<br>Email: ${email}<br>Phone Number: ${phoneNumber}<br>Age: ${age}</p>
    `;
    dataBox.innerHTML = html;
}
