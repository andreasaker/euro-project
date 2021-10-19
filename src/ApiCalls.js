//my-json-server api calls¨

export const getUsers = () => {
  const result = fetch(
    "https://my-json-server.typicode.com/proactivehealth/work-test-sample/users" //should normaly be in a .env file
  )
    .then((resp) => resp.json())
    .then((data) => [...data])
    .catch((err) => console.log(err));
  return result;
};

export const getUserInsurances = () => {
  const result = fetch(
    "https://my-json-server.typicode.com/proactivehealth/work-test-sample/user_insurances" //should normaly be in a .env file
  )
    .then((resp) => resp.json())
    .then((data) => data)
    .catch((err) => console.log(err));
  return result;
};

export const getInsurances = () => {
  const result = fetch(
    "https://my-json-server.typicode.com/proactivehealth/work-test-sample/insurances" //should normaly be in a .env file
  )
    .then((resp) => resp.json())
    .then((data) => [...data])
    .catch((err) => console.log(err));
  return result;
};
