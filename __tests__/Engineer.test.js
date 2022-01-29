const Engineer = require('../lib/Engineer');

test('Can create an instance of Engineer object', () => {
    const e = new Engineer();
    expect(typeof(e)).toBe('object');
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

test("Can set an engineer's github username through the constructor", () => {
    const github = 'Garys_Github';
    const e = new Engineer('Gary', 24560, 'gary@company.com', github);

    expect(e.github).toBe(github);
    expect(e.github).toEqual(expect.any(String));

});

test("Can retrieve an engineer's GitHub username through getGithub()", () => {
    const e = new Engineer('Gary', 24560, 'gary@company.com', 'Garys_Github');

    expect(e.getGithub()).toBe('Garys_Github')
})

test("Can retrieve an engineer's role through getRole()", () => {
    const e = new Engineer();

    expect(e.getRole()).toBe('Engineer')

});