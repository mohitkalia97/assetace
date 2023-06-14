package com.codecool.service;



import com.google.gson.JsonParser;

import org.springframework.stereotype.Component;
import org.springframework.stereotype.Service;



@Service
@Component
public class APIService {
    public APIService() {
    }

    public Object stringToJSON(String jsonString)  {
        return JsonParser.parseString(jsonString);
    }
}
