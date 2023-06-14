package com.codecool.endpoint;


import com.codecool.api.CryptoAPI;
import com.codecool.api.CurrencyAPI;
import com.codecool.api.GoldAPI;
import com.codecool.api.ShareAPI;
import com.codecool.entity.Asset;
import com.codecool.repository.AssetRepository;
import com.codecool.service.AssetService;
import com.mashape.unirest.http.exceptions.UnirestException;
import org.apache.http.NameValuePair;
import org.apache.http.message.BasicNameValuePair;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.MediaType;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import com.codecool.service.APIService;

import java.io.IOException;
import java.net.URISyntaxException;
import java.util.ArrayList;
import java.util.List;

@RestController
@CrossOrigin
@RequestMapping("/")
public class AssetAceEndpoint {
    @Autowired
    private AssetService assetService;
    @Autowired
    private APIService apiService;
    @Autowired
    private CryptoAPI cryptoAPI;
    @Autowired
    private GoldAPI goldAPI;
    @Autowired
    private ShareAPI shareAPI;
    @Autowired
    private CurrencyAPI currencyAPI;
    @Autowired
    private AssetRepository assetRepository;
    @GetMapping("/bitcoin-price")
    public Object getBitcoinData() throws URISyntaxException, IOException {
        List<NameValuePair> parameters = new ArrayList<>();
        String uri = "https://pro-api.coinmarketcap.com/v1/cryptocurrency/quotes/latest";
        parameters.add(new BasicNameValuePair("slug","bitcoin"));
        parameters.add(new BasicNameValuePair("convert","EUR"));

        try {
            String result = cryptoAPI.getBTCData(uri, parameters);
            System.out.println(result);
        } catch (IOException e) {
            System.out.println("Error: cannot access content - " + e);
        } catch (URISyntaxException e) {
            System.out.println("Error: Invalid URL " + e);
        }
        return apiService.stringToJSON(cryptoAPI.getBTCData(uri, parameters));
    }

    @GetMapping("/ethereum-price")
    public Object getEthereumData() throws URISyntaxException, IOException {
        List<NameValuePair> parameters = new ArrayList<>();
        String uri = "https://pro-api.coinmarketcap.com/v1/cryptocurrency/quotes/latest";
        parameters.add(new BasicNameValuePair("slug","ethereum"));
        parameters.add(new BasicNameValuePair("convert","EUR"));

        try {
            String result = cryptoAPI.getBTCData(uri, parameters);
            System.out.println(result);
        } catch (IOException e) {
            System.out.println("Error: cannot access content - " + e);
        } catch (URISyntaxException e) {
            System.out.println("Error: Invalid URL " + e);
        }
        return apiService.stringToJSON(cryptoAPI.getBTCData(uri, parameters));
    }

    @GetMapping("/gold-price")
    public Object displayGoldPrice() throws UnirestException {
        return apiService.stringToJSON(shareAPI.getGoldData());
    }

    @GetMapping("/apple-price")
    public Object displaySharePrice() throws UnirestException, IOException {
        return apiService.stringToJSON(shareAPI.getShareData());
    }


    @GetMapping("/tesla-price")
    public Object getAllShares() throws UnirestException, IOException {
        return apiService.stringToJSON(shareAPI.getTeslaData());
    }


    @GetMapping("/euro-dollar-price")
    public Object getEuroDollarPrice() throws UnirestException, IOException {
        return apiService.stringToJSON(currencyAPI.getEuroDollarPrice());
    }

    @PostMapping(value = "/currency-add-data")
    public Object saveCurrencyAddData(@RequestBody Asset asset){
        assetRepository.save(asset);
        return ResponseEntity.ok().build();
    }

    @GetMapping("/get-all-assets")
    public List<Asset> getAllCurrencies() {
        List<Asset> assetList = assetService.getAllAssets();
        for (Asset asset : assetList) {
            System.out.println((asset.getName() + "(" + asset.getPrice() + ")"));
        }
        return assetList;
    }
}
