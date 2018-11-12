class Customer1 {
    firstName: string;
    lastName: string;

    public greeter() {
        console.log("Hello ${this.firstName} ${this.lastName}");
    }
}

//object = instance of class
let customer = new Customer1();
customer.firstName = "Raj";
customer.lastName = "Shahu";
customer.greeter();