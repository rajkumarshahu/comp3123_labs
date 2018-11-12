class Customer {
    private firstName: string;
    private lastName: string;

    constructor(firstName: string, lastName: string) {
        this.firstName = firstName;
        this.lastName = lastName;
    }

    public greeter() {
        console.log("Hello ${this.firstName} ${this.lastName}");
    }
}

//object = instance of class
let customer = new Customer("Raj", "Shahu");
customer.firstName = "Raj";
customer.lastName = "Shahu";
customer.greeter();