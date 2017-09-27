class LoginApi {

   login(data) {
     return new Promise((resolve, reject) => {
       const response = {
         data: null
       };

       setTimeout(() => {
         if (data.password === '12345') {
           response.data = true;

           resolve(response);
         } else {
           response.data = null;
           response.error = 'Failed to login';

           reject(new Error('Wrong password'));
         }
       }, 2000);
     })
   }
}

export default new LoginApi();