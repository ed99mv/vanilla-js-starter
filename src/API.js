async function getTasks(tarea) {
  let tareaApi = {
    tarea: tarea,
   
  }
  const response = await fetch("http://localhost:3000/api/task");
  const tasks = await response.json(tareaApi);
  console.log(tasks);
  
}

function post(tarea) {
  let tareaApi = {
    tarea: tarea,
    
  }
  
  fetch('http://localhost:3000/api/task', {
    method: "POST",
    body: JSON.stringify(tareaApi),
    headers: {"Content-type": "application/json; charset=UTF-8"}
  })
  .then(response => response.json()) 
  .then(json => console.log(json))
  .catch(err => console.log(err));
}

function deleteApi() {
  
    fetch( "http://localhost:3000/api/task"+ "/" + id, {
      method: 'DELETE'
    }).then(() => {
       console.log('removed');
    }).catch(err => {
      console.error(err)
    });
}
///EXPORT´S///
export{getTasks,post, deleteApi}