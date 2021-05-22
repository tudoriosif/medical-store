package com.tdapp.reactspringapp.Controllers;

import com.tdapp.reactspringapp.Entities.Stoc;
import com.tdapp.reactspringapp.Services.StocService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/")
public class StocController {
    private final StocService stocService;

    @Autowired
    public StocController(StocService stocService){this.stocService=stocService;}

    @GetMapping("/dashboard/stock/items/{userId}")
    public List<Stoc> getItems(@PathVariable Long userId){return stocService.getItems(userId);}

    @PostMapping("/dashboard/stock/add")
    public void addItems(@RequestBody Stoc stoc){stocService.addItems(stoc);}

    @DeleteMapping("/dashboard/stock/delete/{produsId}/{stocId}")
    public void removeByProdusId(@PathVariable Long produsId,@PathVariable Long stocId){
        stocService.removeByProdusId(produsId,stocId);
    }
}
