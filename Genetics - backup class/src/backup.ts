
class Backup<T> {

    // Members:
    public subject: string;
    public value: T;

    // Initiate data members:
    public constructor(subject: string, value: any) {
        this.subject = subject;
        this.value = value;
    }

    // Display all:
    public displayBackup(): string {
       return `Subject: ${this.subject} \nValue: ${this.value}`;
    }

}

export default Backup;