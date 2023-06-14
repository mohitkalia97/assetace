function EuroDollarConverter (eurPrice){
    var exchangeRate = 1/eurPrice+1;
    return exchangeRate;
  }
  export default EuroDollarConverter;