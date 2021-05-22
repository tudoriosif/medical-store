package com.tdapp.reactspringapp.Controllers;

import com.tdapp.reactspringapp.DTOs.StocDTO;
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
    public StocController(StocService stocService){
        this.stocService=stocService;
    }

    @GetMapping("/dashboard/stock/items/{userId}")
    public List<Stoc> getItems(@PathVariable Long userId){
        return stocService.getItems(userId);
    }

    // Vom transmite in metoda doar id-ul produsului si a userului + cantitatea pentru asta ne vom folosi de stocDTO
    @PostMapping("/dashboard/stock/add")
    public boolean addItems(@RequestBody StocDTO stocDTO){
        return stocService.addItems(stocDTO);
    }

    @DeleteMapping("/dashboard/stock/delete/{produsId}/{stocId}")
    public boolean removeByProdusId(@PathVariable Long produsId,@PathVariable Long stocId){
        return stocService.removeByProdusId(produsId,stocId);
    }
}
