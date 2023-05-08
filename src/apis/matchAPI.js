const getMatchList = async () => {
  const response = await fetch(
    'https://pes-vbee-server-v1.onrender.com/api/v1/match',
  );
  const data = await response.json();
  console.log(data);
  return data;
};

export default getMatchList;
