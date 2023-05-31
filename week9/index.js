const axios = require('axios');

const fetchData = async () => {
  try {
    let config = {
      method: 'get',
      maxBodyLength: Infinity,
      url: 'https://api.api-ninjas.com/v1/facts?limit=1',
      headers: { 
        'X-Api-Key': 'y5TJQhHVNXPu02MMlvYPGw==Qha8QKpVf2zMq8dC'
      }
    };
  
    const response = await axios.request(config);
    console.log(JSON.stringify(response.data[0].fact));
    let data = response.data[0].fact;
    return data;
  } catch (error) {
    console.log(error.message);
  }
};

fetchData();
