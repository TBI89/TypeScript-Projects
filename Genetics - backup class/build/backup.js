class Backup {
    // Initiate data members:
    constructor(subject, value) {
        this.subject = subject;
        this.value = value;
    }
    // Display all:
    displayBackup() {
        return `Subject: ${this.subject} \nValue: ${this.value}`;
    }
}
export default Backup;
