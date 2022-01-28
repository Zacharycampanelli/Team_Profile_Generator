const Employee = require('../lib/Employee');

test('Can create an instance of employee object', () => {
    const e = new Employee();
    expect(typeof(e)).toBe('object');
});

test('Can set the employee name through constructor', () => {
    const name = 'Bob';
    const e = new Employee(name);
    expect(e.name).toBe(name);
});

test('Can set the employee id through constructor', () => {
    const name = 'Bob';
    const id = '12345';
    const e = new Employee(name, id)
    expect(e.id).toBe(id);

});

test('Can set the employee id through constructor', () => {
    const name = 'Bob';
    const id = '12345';
    const email = 'bob@company.com'
    const e = new Employee(name, id, email)
    expect(e.email).toBe(email);

});

test('Can access employee name through getName()', () => {
    const name = 'Bob';
    const id = '12345';
    const email = 'bob@company.com'
    const e = new Employee(name, id, email)
    expect(e.getName()).toBe(name);
});

test('Can access employee id through getId()', () => {
    const name = 'Bob';
    const id = '12345';
    const email = 'bob@company.com'
    const e = new Employee(name, id, email)
    expect(e.getId()).toBe(id);
});

test('Can access employee email through getEmail()', () => {
    const name = 'Bob';
    const id = '12345';
    const email = 'bob@company.com'
    const e = new Employee(name, id, email)
    expect(e.getEmail()).toBe(email);
});

test('Can access employee role through getRole()', () => {
    const name = 'Bob';
    const id = '12345';
    const email = 'bob@company.com'
    const e = new Employee(name, id, email)
    expect(e.getRole()).toBe('Employee');
});