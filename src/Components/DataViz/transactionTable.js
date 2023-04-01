import React from 'react';
import './table.css';

function Table(props) {
  const { data } = props;

  return (
    <table>
      <thead>
        <tr>
          <th>Date</th>
          <th>Time</th>
          <th>Type</th>
          <th>Description</th>
          <th>Debit</th>
          <th>Credit</th>
          <th>Balance</th>
        </tr>
      </thead>
      <tbody>
        {data.map((item, index) => (
          <tr key={index}>
            <td>{item.Date}</td>
            <td>{item.Time}</td>
            <td>{item.Type}</td>
            <td>{item.Description}</td>
            <td>{item.Debit}</td>
            <td>{item.Credit}</td>
            <td>{item.Balance}</td>
          </tr>
        ))}
      </tbody>
    </table>
  );
}

export default Table;
