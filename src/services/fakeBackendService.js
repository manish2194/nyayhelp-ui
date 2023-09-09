// Simulated users data
const usersData = [
  { id: 1, name: "John Doe" },
  { id: 2, name: "Jane Smith" },
  { id: 3, name: "Alice Johnson" },
];

import Data from "../assets/extension.json";
import States from "../assets/flipkart_states.json";
import Steps from "../assets/flipkart_steps.json";

// Simulated products data
const productsData = [
  { id: 1, name: "Product 1", price: 10 },
  { id: 2, name: "Product 2", price: 20 },
  { id: 3, name: "Product 3", price: 30 },
];

// Simulated API call to fetch data
export const fetchData = async (url) => {
  // Simulate the delay of an API call
  await new Promise((resolve) => setTimeout(resolve, 500));

  // Simulated data response based on URL
  const responseData = getResponseData(url);

  return responseData;
};

const getSelectedExtension = (url) => {
  let arr = url.split("/");
  let id = arr[arr.length - 1];
  return [...Data.data].find((e) => e.extension_id === id);
};

// Simulated response data based on URL
const getResponseData = (url) => {
  switch (true) {
    case url.endsWith("/api/extension"):
      return Data;
    case url.endsWith("/api/states"):
      return States;
    case !!url.match(/\/extension\/\w+/):
      return getSelectedExtension(url);
    case url.endsWith("/api/states/configurations"):
      return Steps;

    // Add more cases for different URLs and return data types

    default:
      return null;
  }
};
