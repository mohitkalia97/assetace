package com.codecool.api;

import com.mashape.unirest.http.HttpResponse;
import com.mashape.unirest.http.Unirest;
import com.mashape.unirest.http.exceptions.UnirestException;
import org.springframework.stereotype.Component;
import org.springframework.web.bind.annotation.CrossOrigin;

import java.io.IOException;

@Component
public class ShareAPI {

    String shareAPIKey = "cg3mkqpr01qmn4dpacsgcg3mkqpr01qmn4dpact0";

    public String getShareData() throws UnirestException {

        String currency = "AAPL";
        String shareAPI = "https://finnhub.io/api/v1/quote?symbol="+currency+"&token="+shareAPIKey;

        Unirest.setTimeouts(0, 0);
        HttpResponse<String> response = Unirest.get(shareAPI).asString();
        //String newResponse = response.toString();
        return response.getBody();
    }

    public String getTeslaData() throws UnirestException {

        String currency = "TSLA";
        String shareAPI = "https://finnhub.io/api/v1/quote?symbol="+currency+"&token="+shareAPIKey;

        Unirest.setTimeouts(0, 0);
        HttpResponse<String> response = Unirest.get(shareAPI).asString();
        //String newResponse = response.toString();
        return response.getBody();
    }

    public String getGoldData() throws UnirestException {

        String currency = "XAU";
        String shareAPI = "https://finnhub.io/api/v1/quote?symbol="+currency+"&token="+shareAPIKey;

        Unirest.setTimeouts(0, 0);
        HttpResponse<String> response = Unirest.get(shareAPI).asString();
        //String newResponse = response.toString();
        return response.getBody();
    }

}
