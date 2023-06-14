import React, {useState} from 'react';
import '../assets/styles/markets.css';
import ReloadHelper from './ReloadHelper';
import UseCurrencyDataFetch from './UseCurrencyDataFetch.js';
import EuroDollarConverter from './EuroDollarConverter';
import Box from '@mui/material/Box';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';


function Markets() {

  const { data: btcData, error: btcError, loading: btcLoading } = UseCurrencyDataFetch(
    'http://localhost:8090/bitcoin-price', 
  );
  const btcPrice = btcData ? btcData.data['1'].quote.EUR.price : null;

  const { data: ethData, error: ethError, loading: ethLoading } = UseCurrencyDataFetch(
    'http://localhost:8090/ethereum-price'
  );
  const ethereumPrice = ethData ? ethData.data['1027'].quote.EUR.price : null;

  const { data: appleData, error: appleError, loading: appleLoading } = UseCurrencyDataFetch(
    'http://localhost:8090/apple-price'
  );
  const applePrice = appleData ? appleData['c'] : null;

  const { data: teslaData, error: teslaError, loading: teslaLoading } = UseCurrencyDataFetch(
    'http://localhost:8090/tesla-price'
  );
  const teslaPrice = teslaData ? teslaData.c : null;

  const { data: eurData, error: eurError, loading: eurLoading } = UseCurrencyDataFetch(
    'http://localhost:8090/euro-dollar-price', 
  );
  const eurPrice = eurData ? eurData.data["EUR"] : null;

  const { data: dollarData, error: dollarError, loading: dollarLoading } = UseCurrencyDataFetch(
    'http://localhost:8090/euro-dollar-price', 
  );
  const dollarPrice = dollarData ? dollarData.data["EUR"] : null;

  const [currency, setCurrency] = useState('EUR');
  const [eurPriceLocal, setEurPriceLocal] = useState(eurPrice);
  const [dollarPriceLocal, setDollarPriceLocal] = useState(dollarPrice);
    
  const handleChange = (event) => {
    const selectedCurrency = event.target.value;
    setCurrency(selectedCurrency);
    if (selectedCurrency === 'USD') {
      setEurPriceLocal((dollarPriceLocal));
    } else {
      setDollarPriceLocal((eurPriceLocal));
    }
  };
  
  ReloadHelper();

  return (
    <div>
      <div className="currency-changer" style={{ height: "30px"}}>
            <Box sx={{ minWidth: 262, maxHeight:50, position: "absolute", top: 47, right: 0 }} className="table-cell">
              <FormControl fullWidth>
                <InputLabel id="demo-simple-select-label">Currency</InputLabel>
                <Select
                  labelId="simple-select-label"
                  id="simple-select"
                  value={currency}
                  onChange={handleChange}
                >
                  <MenuItem value={"USD"}>USD</MenuItem>
                  <MenuItem value={"EUR"}>EUR</MenuItem>
                </Select>
              </FormControl>
            </Box>
        </div>
        
      <table class="currency-table">
        <tbody>
        <tr>
          <td>1 USD</td>
          <td>{dollarLoading ? (
              <span>Loading...</span>
            ) : dollarError ? (
              <span>Error</span>
            ) : (
              <span> {(eurPrice)} EUR</span>
            )}</td>
        </tr>
        <tr>
          <td>1 EUR</td>
          <td>{eurLoading ? (
            <span>Loading...</span>
          ) : eurError ? (
            <span>Error</span>
          ) : (
            <span>{EuroDollarConverter(eurPrice)-1} USD</span>
          )}</td>
        </tr>
        </tbody>
      </table>
    
      <div className="table" style={{top: "px"}}>

        <div className="table-row">
          <div className="table-cell table-title">Asset</div>
          <div className="table-cell table-title">Price</div>
        </div>

        <div className="table-row">
          <div className="table-cell">Bitcoin</div>
          <div className="table-cell">
            {btcLoading ? (
              <span>Loading...</span>
            ) : btcError ? (
              <span>Error</span>
            ) : (
              <span>{currency === "EUR" ? btcPrice : EuroDollarConverter(btcPrice)*btcPrice} {currency}</span>
            )}
          </div>
        </div>

        <div className="table-row">
          <div className="table-cell">Ethereum</div>
          <div className="table-cell">
            {ethLoading ? (
              <span>Loading...</span>
            ) : ethError ? (
              <span>Error</span>
            ) : (
              <span>{currency === "EUR" ? ethereumPrice : EuroDollarConverter(ethereumPrice)*ethereumPrice} {currency}</span>
            )}
          </div>
        </div>
        
        <div className="table-row">
          <div className="table-cell">Apple</div>
          <div className="table-cell">
            {appleLoading ? (
              <span>Loading...</span>
            ) : appleError ? (
              <span>Error</span>
            ) : (
              <span>{currency === "EUR" ? applePrice : EuroDollarConverter(applePrice)*applePrice} {currency}</span>
            )}
          </div>
        </div>

        <div className="table-row">
          <div className="table-cell">Tesla</div>
          <div className="table-cell">
            {teslaLoading ? (
              <span>Loading...</span>
            ) : teslaError ? (
              <span>Error</span>
            ) : (
              <span>{currency === "EUR" ? teslaPrice : EuroDollarConverter(teslaPrice)*teslaPrice} {currency}</span>
            )}
          </div>
        </div>

    </div>
  </div>
  );
}

export default Markets;
