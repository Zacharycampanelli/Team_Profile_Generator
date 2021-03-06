// Creates a card for a Manager object
function generateManager(data) {
  return `
  <div class="card px-0 mx-1 my-2" style="width: 18rem;">
    <div class="card-header">
      <h3>${data.name}</h3> <br>
      <h5><i class="fas fa-user-tie"></i>${data.getRole()}</h5>
    </div>
    <div class="card-body">
    <ul class="list-group list-group-flush">
      <li class="list-group-item">ID: ${data.id} </li>
      <li class="list-group-item"><a href="mailto:${data.email}">Email: ${
    data.email
  }</a></li>
      <li class="list-group-item">Office Number: ${data.officeNumber} </li>
    </ul>
    </div>
   </div>
  `;
}

// Creates a card for an Engineer object
function generateEngineer(data) {
  return `
  <div class="card px-0 mx-1 my-2" style="width: 18rem;">
    <div class="card-header">
    <h3>${data.name}</h3> <br>
      <h5><i class="fas fa-laptop-code"></i>${data.getRole()}</h5>
    </div>
    <div class="card-body">
    <ul class="list-group list-group-flush">
      <li class="list-group-item">ID: ${data.id} </li>
      <li class="list-group-item"><a href="mailto:${data.email}">Email: ${
    data.email
  }</a></li>
      <li class="list-group-item"><a href="https://github.com/${
        data.github
      }">Github: ${data.github}</a></li>
    </ul>
    </div>
   </div>
  `;
}

// Creates a card for an Intern object
function generateIntern(data) {
  return `
  <div class="card px-0 mx-1 my-2" style="width: 18rem;">
    <div class="card-header">
    <h3>${data.name}</h3> <br>
      <h5><i class="fas fa-graduation-cap"></i>${data.getRole()}</h5>
    </div>
    <div class="card-body">
    <ul class="list-group list-group-flush">
      <li class="list-group-item">ID: ${data.id} </li>
      <li class="list-group-item"><a href="mailto:${data.email}">Email: ${
    data.email
  }</a></li>
      <li class="list-group-item">School: ${data.school} </li>
    </ul>
    </div>
   </div>
  `;
}

// Creates a card object for each employee in the array
function buildCard(data) {
  let str = ``;

  for (let i = 0; i < data.length; i++) {
    let role = data[i].getRole();
    // Getting the role of the employee determines what information their card will contain
    if (role === 'Manager') {
      str += generateManager(data[i]);
    } else if (role === 'Engineer') {
      str += generateEngineer(data[i]);
    } else if (role === 'Intern') {
      str += generateIntern(data[i]);
    }
  }
  return str;
}

// The start of the html string, takes the data passed through the employees array in index.js
module.exports = (data) => {
  return `
    <!DOCTYPE html>
    <html lang="en">
  
    <head>
      <meta charset="UTF-8">
      <meta name="viewport" content="width=device-width, initial-scale=1.0">
      <meta http-equiv="X-UA-Compatible" content="ie=edge">
      <title>Team_Profile_Generator</title>
      <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.1.3/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-1BmE4kWBq78iYhFldvKuhfTAU6auU8tT94WrHftjDbrCEXSU1oBoqyl2QvZ6jIW3" crossorigin="anonymous">
      <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.11.2/css/all.min.css">
      <link href="https://fonts.googleapis.com/css?family=Public+Sans:300i,300,500&display=swap" rel="stylesheet">
      <link rel="stylesheet" href="style.css">
    </head>
  
    <body>
      <header>
        <div class="container flex-row justify-space-between align-center pt-4  mx-auto my-auto">
            <h1>My Team</h1>
        </div>
      </header>
      <main class="container my-5">
        <div class = "row">
          ${buildCard(data)}  
        </div>
      </main>

      <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.1.3/dist/js/bootstrap.bundle.min.js" integrity="sha384-ka7Sk0Gln4gmtz2MlQnikT1wXgYsOg+OMhuP+IlRH9sENBO0LRn5q+8nbTov4+1p" crossorigin="anonymous"></script>
    </body>
    </html>
    `;
};
