import {handleApiResponse} from './utils';


export async function editUsersForm(editUserJson, token) {
  console.log('Object =>>>>', editUserJson, token);
  const data = JSON.stringify({ user: editUserJson });
  console.log('DATA Object =>>>>', data)
  return new Promise(function(resolve, reject) {
    try {
      fetch(`http://localhost:3001/users/1`, {
        method:'PUT',
        headers: {'Content-Type': 'application/json'},
        body: data
      })
        .then(response => {
            console.log("get login api response", response)
            handleApiResponse(response)
              .then(responseJson => {
                console.log("responseJson", responseJson)
                resolve(responseJson)
              })
              .catch(error => {
                console.log("error", error)
                reject(error)
              })
        })
        .catch(error => {
          console.log("error", error);
          reject(error)
        })
      }catch(error){
        console.log("error", error)
        reject(error)
      }
  });
}
