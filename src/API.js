async function get() {
  const response = await fetch("http://localhost:3000/api/task", {
    method: "GET",
    headers: {
      Accept: "application/json",
      "Content-type": "application/json; charset=UTF-8",
    },
  });
  if (!response.ok) {
    throw new Error(`HTTP error! status: ${response.status}`);
  }
  const data = await response.json();
  return data;
}

async function post(tarea) {
  const response = await fetch("http://localhost:3000/api/task", {
    method: "POST",
    headers: {
      Accept: "application/json",
      "Content-type": "application/json; charset=UTF-8",
    },
    body: JSON.stringify(tarea),
  });
  const post = await response.json();
  return post;
}

function deleteApi(i) {
  fetch("http://localhost:3000/api/task/" + i, {
    method: "DELETE",
  })
    .then(() => {
      console.log("Eliminado");
    })
    .catch((err) => {
      console.error(err);
    });
}

async function updateTask(id, task) {
  const response = await fetch("http://localhost:3000/api/task/" + id, {
    method: "PUT",
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json",
    },
    body: JSON.stringify(task),
  });
  const updatedTask = await response.json();
  return updatedTask;
}
///EXPORT´S///
export { post, deleteApi, get, updateTask };
