function getFullResponseFromAPI(success) {
  return new Promise((resolve, reject) => {
    if (success) resolve({ status: 200, body: 'Success' });
    reject(Error('Error! Failed to fetch data from API.'));
  });
}

export default getFullResponseFromAPI;
