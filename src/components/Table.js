import React from "react";

const Table = () => {
  return (
    <table class="table table-bordered">
      <thead>
        <tr>
          <th scope="col">Description</th>
          <th scope="col">Location</th>
          <th scope="col">Date</th>
          <th scope="col">Amount</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td>Bought a doll house</td>
          <td>Amazon/Online</td>
          <td>05/09/2020</td>
          <td>$25.00</td>
        </tr>
        <tr>
          <td>Ate out</td>
          <td>Good Burger</td>
          <td>05/10/2020</td>
          <td>$15.50</td>
        </tr>
        <tr>
          <td>Bought a Bike</td>
          <td>Craigslist</td>
          <td>05/15/2020</td>
          <td>$45.90</td>
        </tr>
      </tbody>
    </table>
  );
};

export default Table;
