// import axios from "axios";
// axios.defaults.baseURL = 

//  const axiosInterceptor = () => {
//     axios.interceptors.request.use(
//         (config) => {
//             return config;
//         },
//         (err) => {
//             return Promise.reject(err); 
//         },
//     );
//     axios.interceptors.response.use(
//         (res) => { 
//             return res; 
//         },
//         (err) => {
//             return err
//         },
//     );
// }





import axios from "axios";
import loader from "../Components/loader/loader";

console.log('hello',process.env.REACT_APP_BASEURL)
const axiosHttp = axios.create({
  baseURL: process.env.REACT_APP_BASEURL || 'https://fakestoreapi.com',
});

axiosHttp.interceptors.request.use(
  (config) => {
    document.body.classList.add('loading-indicator');
    const token = null
    return {
      ...config,
      headers: {
        ...(token !== null && { Authorization: `${token}` }),
        ...config.headers,
      },
    };
  },
  (error) => {
    return Promise.reject(error);
  }
);

axiosHttp.interceptors.response.use(
  (response) => {
    document.body.classList.remove('loading-indicator');

    //const url = response.config.url;

    //setLocalStorageToken(token);
    return response;
  },
  (error) => {
    return onResponseRejected(error)
  }
);

const onResponseRejected = (error) => {
    console.log('error',error)
    if(error.response.status === 0 && (error.response.statusText === ''|| error.response.statusText === 'Unknown Error')){
        console.log('Unable to connect the server, please try again in a couple of seconds.')
      }else if(error.response.status === 404){
        console.log('page not found');
      }else if(error.response.status === 500){
        console.log('Server was busy try again in a couple of seconds');
      }else if(error.response.status === 303 || error.response.status === 403){
        console.log('Server understands the request but refuses to authorize it');
      }else if(error.response.status === 401){
        console.log('Authentication failed');
      }else if(error.response.status == 400 || error.response.status === 409){
        console.log('Error occured,while uploading file');
      }
  
    return Promise.reject(error);
}

export default axiosHttp;

  

