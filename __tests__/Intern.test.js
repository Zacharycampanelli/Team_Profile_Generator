const Intern = require('../lib/Intern');

test('Can create an instance of Intern object', () => {
  const i = new Intern();
  expect(typeof i).toBe('object');
});

test("Can set an Intern's school through the constructor", () => {
  const school = 'Uconn';
  const i = new Intern('Isiah', 95329, 'isiah@company.com', school);

  expect(i.school).toBe(school);
  expect(i.school).toEqual(expect.any(String));
});

test("Can retrieve an Intern's school through getSchool()", () => {
  const i = new Intern('Isiah', 95329, 'isiah@company.com', 'Uconn');

  expect(i.getSchool()).toBe('Uconn');
});

test("Can retrieve an intern's role through getRole()", () => {
  const i = new Intern();

  expect(i.getRole()).toBe('Intern');
});
