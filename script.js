// Функция getData для загрузки данных из файла db.json
function getData() {
  return fetch("db.json")
    .then((response) => {
      if (!response.ok) {
        throw new Error("Ошибка при получении данных");
      }
      return response.json();
    })
    .catch((error) => {
      console.log(error);
    });
}

// Функция sendData для отправки данных из файла db.json
function sendData(data) {
  return fetch("https://jsonplaceholder.typicode.com/posts", {
    method: "POST",
    headers: {
      "Content-Type": "application/json, charset=UTF-8",
    },
    body: JSON.stringify(data),
  })
    .then((response) => {
      if (!response.ok) {
        throw new Error("Ошибка при отправке данных");
      } else {
        console.log("Данные успешно отправлены");
      }
    })
    .catch((error) => {
      console.log(error);
    });
}

getData().then((data) => {
  sendData(data);
});
