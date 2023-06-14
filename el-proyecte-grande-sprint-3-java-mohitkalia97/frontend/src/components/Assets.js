import React, { useState, useEffect } from "react";
import "../assets/styles/assets.css";
import { TextField } from "@mui/material";
import UseCurrencyDataFetch from "./UseCurrencyDataFetch";

function Assets() {
  const [applePrice, setApplePrice] = useState(null);
  const [stock, setStock] = useState(0);
  const [winOrLoss, setWinOrLoss] = useState(null)

  const saveDataToDatabase = async (data) => {
    try {
      const requestData = {
        name: "AAPL",
        price : applePrice,
        amount: 1
      };
      const response = await fetch('http://localhost:8090/currency-add-data', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(requestData),
      });
    } catch (error) {
    }
  };

  const { data: appleData } = UseCurrencyDataFetch(
    'http://localhost:8090/apple-price'
  );
  useEffect(() => {
    setApplePrice(appleData ? appleData['c'] : null);
  }, [appleData]);

  const handleAddCurrencyClick = (event) => {
    setStock(stock + applePrice);
    saveDataToDatabase(JSON.stringify(stock));
  };

  return (
    <div className="App">
      <header className="App-header">
        <h1>My Assets</h1>
        <ul>
          <table className ="table-asset">
            <tbody>
              <tr>
                <th className="th-name">Name</th>
                <th className="th-stock">Stock</th>
                <th className="th-winorloss">Win/Loss</th>
              </tr> 
              <tr>
                <td>
                      Apple Inc. - AAPL
                </td>
                <td>
                      {stock}
                </td>
                <td>
                      {winOrLoss}
                </td>
                <td>
                    <TextField></TextField>
                </td>
                <td>
                      <button className="add-currency" onClick={handleAddCurrencyClick}>Add</button> 
                      <button className="remove-currency"> Remove </button>
                </td>
              </tr>
            </tbody>
          </table>
          <li>
          </li>
        </ul>
      </header>
    </div>
  );
}
export default Assets;
