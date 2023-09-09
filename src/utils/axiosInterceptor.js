// axiosInterceptor.js
import axios from 'axios';
import Cookies from 'js-cookie';

// Function to set the authentication token in a cookie
const setAuthToken = (token) => {
    console.log("set auth token called");
    const credentials = `${token.username}:${token.password}`;
    const encodedCredentials = btoa(credentials);
    // const encodedCredentials = Buffer.from(credentials).toString('base64');
    // return encodedCredentials;
    Cookies.set('auth_token', encodedCredentials, { expires: 1 }); // Save the token in a cookie that expires in 7 days
};

// Function to get the authentication token from the cookie
const getAuthToken = () => {
    console.log("get auth token called");
    return Cookies.get('auth_token');
};

// Function to remove the authentication token from the cookie
const removeAuthToken = () => {
    Cookies.remove('auth_token');
};



const setupAxiosInterceptors = (navigate) => {
    axios.interceptors.response.use(
        (response) => response,
        (error) => {
            if (error.response && error.response.status === 401) {
                // Redirect to /login when receiving a 401 (Unauthorized) response
                navigate('/login');
            }
            return Promise.reject(error);
        }
    );

    // Add an interceptor to include the authentication token in the request headers
    axios.interceptors.request.use(
        (config) => {
            const authToken = getAuthToken();
            if (authToken) {
                config.headers['Authorization'] = `Basic ${authToken}`;
            }
            return config;
        },
        (error) => {
            return Promise.reject(error);
        }
    );
};

export { setAuthToken, getAuthToken, removeAuthToken, setupAxiosInterceptors };
