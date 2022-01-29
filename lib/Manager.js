const Employee = require("./Employee");

class Manager extends Employee {
    constructor(name='', id='', email='', officeNumber='') {
        super();

        this.officeNumber = parseInt(officeNumber);
    }

    getRole() {
        return 'Manager';
    }
}

module.exports = Manager;