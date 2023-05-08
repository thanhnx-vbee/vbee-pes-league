import React, { useEffect, useState } from 'react';
import getMatchList from '../../apis/matchAPI';

const Component = () => {
  const [rows, setRows] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const data = await getMatchList();
      setRows(data.result);
    };
    fetchData();
  }, []);

  return (
    <div>
      <table>
        <thead>
          <tr>
            <th>STT</th>
            <th>Group Stage</th>
            <th>Date</th>
            <th>Home Team</th>
            <th>Home Team Image</th>
            <th>Away Team</th>
            <th>Away Team Image</th>
            <th>Home Score</th>
            <th>Away Score</th>
          </tr>
        </thead>
        <tbody>
          {rows.map((row, index) => (
            // eslint-disable-next-line no-underscore-dangle
            <tr key={row._id}>
              <td>{index + 1}</td>
              <td>{row.groupStage}</td>
              <td>{row.date}</td>
              <td>{row.homeId.name}</td>
              <td>{row.homeId.image}</td>
              <td>{row.awayId.name}</td>
              <td>{row.awayId.image}</td>
              <td>{row.homeScore}</td>
              <td>{row.awayScore}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Component;
