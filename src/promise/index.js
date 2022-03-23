//Promesa 1
const someThingWillHappen = () =>{
  return new Promise((resolve, reject) =>{
    if(true){
      resolve('Hey!');
    }else{
      reject('Whoops!');
    }
  });
}

someThingWillHappen()
  .then(response => console.log(response))
  .catch(err => console.error(err));

//Promesa 2
const someThingWillHappen2 = () => {
  return new Promise((resolve, reject) =>{
    if(true){
      setTimeout(() => {
        resolve('true');
      }, 2000);
    }else{
      const error = new Error('Whoops!');
      reject(error);
    }
  });
}

someThingWillHappen2()
  .then(response => console.log(response))
  .catch(err => console.error(err));

//Ejecutando Promesas en un arreglo
Promise.all([someThingWillHappen(), someThingWillHappen2()])
  .then(response => {
    console.log('Array of results', response);
  })
  .catch(err => {
    console.error(err);
  });