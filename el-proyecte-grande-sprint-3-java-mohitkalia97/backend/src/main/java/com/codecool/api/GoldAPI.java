package com.codecool.api;


import com.mashape.unirest.http.HttpResponse;
import com.mashape.unirest.http.Unirest;
import com.mashape.unirest.http.exceptions.UnirestException;
import org.springframework.stereotype.Component;

@Component
public class GoldAPI {

    public String getGoldData() throws UnirestException {


        String goldAPIKey = "7025595e30472bd2bb1f8e25c045aa60";

        Unirest.setTimeouts(0, 0);
        HttpResponse<String> response = Unirest.get("https://api.metalpriceapi.com/v1/latest?api_key="
                        +goldAPIKey+"&base=USD&currencies=XAU,XAG,EUR") // XAU = Feinunze Silber //XAG = Feinunze Gold
                .asString();

        // In the example API response, that means:
        //1 USD (Base) = 0.8255334 EUR (Quote)
        //1 USD (Base) = 0.03602543 Ounce of XAG (Quote)
        //1 USD (Base) = 0.00053853 Ounce of XAU (Quote)
        //
        //You can also express the reciprocal:
        //1/0.8255334 EUR = 1.211 USD (Base) <=> €1 = $1.211
        //1/0.03602543 XAG = 27.758 USD (Base) <=> 1 Ounce of XAU (Silver) = $27.758
        //1/0.00053853 XAU = 1856.906 USD (Base) <=> 1 Ounce of XAU (Gold) = $1856.906

        String newResponse = response.getBody().toString();
        return newResponse;
    }
}
