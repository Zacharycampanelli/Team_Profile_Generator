const Engineer = require('../lib/Engineer');

test('Can create an instance of Engineer object', () => {
    const e = new Engineer();
    expect(typeof(e)).toBe('object');
});

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