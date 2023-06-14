package com.codecool.api;

import com.mashape.unirest.http.HttpResponse;
import com.mashape.unirest.http.Unirest;
import com.mashape.unirest.http.exceptions.UnirestException;
import org.springframework.stereotype.Component;
import org.springframework.web.bind.annotation.CrossOrigin;

@Component
public class CurrencyAPI {
    public String getEuroDollarPrice() throws UnirestException {
        String shareAPIKey="I3hLgBn5gO0W4vd97vn9cCXAqsSNqfHITdJlMqI2";
        String currencyAPI = "https://api.freecurrencyapi.com/v1/latest?apikey="+shareAPIKey;
        Unirest.setTimeouts(0, 0);
        HttpResponse<String> response = Unirest.get(currencyAPI).asString();
        return response.getBody();
    }
}
