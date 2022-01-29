const Manager = require('../lib/Manager');

test('Can create an instance of manager object', () => {
    const m = new Manager();
    expect(typeof(m)).toBe('object');
});

// test("Can set a manager object's properties through the constructor", () => {
//     const name = 'Steve';
//     const id = 67890;
//     const email = 'steve@company.com'
//     const officeNumber = 222;
//     const m = new Manager(name, id, email, officeNumber);
//     expect(m.name).toBe(name);
//     expect(m.name).toEqual(expect.any(String));
//     expect(m.id).toBe(id);
//     expect(m.id).toEqual(expect.any(Number));
//     expect(m.email).toBe(email);
//     expect(m.email).toEqual(expect.any(String));
//     expect(m.officeNumber).toBe(officeNumber);
//     expect(m.officeNumber).toEqual(expect.any(Number));

// });

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