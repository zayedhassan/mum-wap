import models.BeerModel;
import org.junit.Assert;
import org.junit.Test;

import java.util.ArrayList;
import java.util.List;

public class BeerModelTest {

    @Test
    public void getBrandsTestWithAny() {
        BeerModel beerModel = new BeerModel();
        List<String> result = beerModel.getBrands("any");
        List<String> expected = new ArrayList<>();
        expected.add("Jail Pale Ale");
        expected.add("Gout Stout");
        Assert.assertArrayEquals(expected.toArray(),result.toArray());
    }

    @Test
    public void getBrandsTestWithNull() {
        BeerModel beerModel = new BeerModel();
        List<String> result = beerModel.getBrands(null);
        Assert.assertEquals(0, result.size());
    }

    @Test
    public void getBrandsTestWithAmber() {
        BeerModel beerModel = new BeerModel();
        List<String> result = beerModel.getBrands("amber");
        List<String> expected = new ArrayList<>();
        expected.add("Jack Amber");
        expected.add("Red Moose");
        Assert.assertArrayEquals(expected.toArray(), result.toArray());
    }
}