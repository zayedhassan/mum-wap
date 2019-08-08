package models;

import java.util.ArrayList;
import java.util.List;

public class BeerModel {
    public List<String> getBrands(String c) {
        List<String> result = new ArrayList<>();

        if (c == null || c.trim().isEmpty())
            return result;

        if (c.equals("amber")) {
            result.add("Jack Amber");
            result.add("Red Moose");
        } else {
            result.add("Jail Pale Ale");
            result.add("Gout Stout");
        }

        return result;
    }
}
