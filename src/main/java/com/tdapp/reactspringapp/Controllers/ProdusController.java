package com.tdapp.reactspringapp.Controllers;

import com.tdapp.reactspringapp.DTOs.ProdusDTO;
import com.tdapp.reactspringapp.Services.ProdusService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/")
public class ProdusController {
    private final ProdusService produsService;

    @Autowired
    public ProdusController(ProdusService produsService) {this.produsService=produsService;}
    //show all products
    @GetMapping("/dashboard/shop/process")
    public List<ProdusDTO> getAllProducts() {
    return produsService.getAllProducts();
  }
    //read product by id
    @GetMapping("/dashboard/shop/process/{idProdus}")
    public ProdusDTO getProductbyId(@PathVariable("idProdus") Long idProdus){
        return produsService.getProductbyId(idProdus);
    }

     //add product
    @PostMapping("/dashboard/shop/create/process")
    public ProdusDTO createProduct(@RequestBody ProdusDTO produsDTO) {
        return produsService.createProduct(produsDTO);
    }


    //update product
   @PutMapping("/dashboard/shop/update/process/{idProdus}")
    public ProdusDTO updateProduct(@RequestBody ProdusDTO produsDTO,@PathVariable("idProdus") Long idProdus){
        produsService.updateProduct(produsDTO,idProdus);
        return produsService.updateProduct(produsDTO,idProdus);
    }

   //delete product
   @DeleteMapping("/dashboard/shop/delete/process/{idProdus}")
    public void deleteProduct(@PathVariable("idProdus") Long idProdus){
        produsService.deleteProduct(idProdus);
    }

    @DeleteMapping("/dashboard/shop/delete/process/byName/{numeProdus}")
    public Long deleteProduct(@PathVariable("numeProdus") String numeProdus) {
        return produsService.deleteProduct(numeProdus);
    }

}
