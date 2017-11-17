import {handleApiResponse} from './utils';


export async function signUpUser(signUpJson) {
  console.log('Object =>>>>', signUpJson);
  const data = JSON.stringify({ account: signUpJson });
  console.log('DATA Object =>>>>', data)
  return new Promise(function(resolve, reject) {
    try {
      fetch(`http://localhost:3001/accounts`, {
        method:'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: data
      })
        .then(response => {
            console.log("get signup api response", response)
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
