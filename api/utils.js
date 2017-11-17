export function handleApiResponse(response) {
  return new Promise((resolve, reject) => {
    if (response === null || response === undefined) {
      const error = new Error('API Response Error');
      reject(error);
    }

    //if fetch request was successful, resolve promise and return the json value
    //check for other status numbers and reject promise with appropriate error message
    if (response.status >= 200 && response.status < 300) {
      response.json().then(responseJson => {
        // console.log("responseJson", responseJson);
        resolve(responseJson);
      }); //end promise response.json();
    } else {
      response
        .json()
        .then(responseJson => {
          console.log('responseJson', responseJson);
          const error = new Error(responseJson.error);
          error.message = responseJson.error;
          error.data = responseJson.data;
          //handle specific error response codes
          //401 = unauthorized access, reset access_token and direct user to login
          if (response.status === 401) {
            // store.dispatch(setUserProfile(null));
            // localStorage.removeItem(lsTokenKey);
          }

          reject(error);
        })
        .catch(error => {
          reject(error);
        }); //end promise response.json();
    }
  });
} //end of handleApiResponse
