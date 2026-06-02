async function getUsers() {

    document.getElementById("loading").innerText =
    "Loading...";

    const response = await fetch(
      "https://jsonplaceholder.typicode.com/users"
    );

    const data = await response.json();

    document.getElementById("loading").innerText = "";

    let output = "";

    data.forEach(user => {
        output += `<li>${user.name}</li>`;
    });

    document.getElementById("users").innerHTML =
    output;
}

async function addUser() {

    const response = await fetch(
      "https://jsonplaceholder.typicode.com/posts",
      {
        method: "POST",

        headers: {
          "Content-Type": "application/json"
        },

        body: JSON.stringify({
          title: "My Post",
          body: "Hello World",
          userId: 1
        })
      }
    );

    const data = await response.json();

    console.log(data);
}