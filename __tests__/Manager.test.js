const Manager = require('../lib/Manager');

test('Can create an instance of manager object', () => {
    const m = new Manager();
    expect(typeof(m)).toBe('object');
});

test("Can set a manager's office number through the constructor", () => {
    const officeNumber = 222;
    const m = new Manager('Steve', 67890, 'steve@company.com', officeNumber);

    expect(m.officeNumber).toBe(officeNumber);
    expect(m.officeNumber).toEqual(expect.any(Number));

});

test("Can retrieve a manager's role through getRole()", () => {
    const m = new Manager('Steve', 67890, 'steve@company.com', 222);

    expect(m.getRole()).toBe('Manager')

});