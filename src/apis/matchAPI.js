import axios from 'axios';

const getMatchList = async () => {
  const response = await axios.get(
    'https://pes-vbee-server-v1.onrender.com/api/v1/match',
  );
  const data = await response.data;
  return data;
};

export default getMatchList;
