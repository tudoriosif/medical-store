package com.tdapp.reactspringapp.Services;

import com.tdapp.reactspringapp.DTOs.ProdusDTO;
import com.tdapp.reactspringapp.Entities.Produs;
import com.tdapp.reactspringapp.Repositories.ProdusRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.ArrayList;
import java.util.List;

@Service
public class ProdusService {

    private final ProdusRepository produsRepository;

    @Autowired
    public ProdusService(ProdusRepository produsRepository){
        this.produsRepository = produsRepository;
    }
    // Afisare produse
    public List<ProdusDTO> getAllProducts(){
      List<Produs> produse= (List<Produs>) produsRepository.findAll();
      List<ProdusDTO> produsDTOList=new ArrayList<>();

      for (Produs produs : produse) {
          ProdusDTO produsDTO=new ProdusDTO();

          produsDTO.setId(produs.getId());
          produsDTO.setNumeProdus(produs.getNumeProdus());
          produsDTO.setPretProdus(produs.getPretProdus());
          produsDTO.setImagineProdus(produs.getImagineProdus());
          produsDTO.setCantitateProdus(produs.getCantitateProdus());
          produsDTO.setDescriereProdus(produs.getDescriereProdus());

          produsDTOList.add(produsDTO);

      }
      return produsDTOList;
    }
    // CRUD
    // Creare Produs
    public ProdusDTO createProduct(ProdusDTO produsDTO) {
        List<Produs> produse =  (List<Produs>) produsRepository.findAll();
        for(Produs produs : produse) {
            if(produs.getNumeProdus().equals(produsDTO.getNumeProdus())){
                ProdusDTO produsDTO1 = new ProdusDTO();
                produsDTO1.setId(produs.getId());
                produsDTO1.setNumeProdus(produs.getNumeProdus());
                produsDTO1.setPretProdus(produs.getPretProdus());
                produsDTO1.setImagineProdus(produs.getImagineProdus());
                produsDTO1.setCantitateProdus(produs.getCantitateProdus());
                produsDTO1.setDescriereProdus(produs.getDescriereProdus());
                return produsDTO1;

            }
        }
        Produs produs = new Produs();
        produs.setNumeProdus(produsDTO.getNumeProdus());
        produs.setPretProdus(produsDTO.getPretProdus());
        produs.setImagineProdus(produsDTO.getImagineProdus());
        produs.setCantitateProdus(produsDTO.getCantitateProdus());
        produs.setDescriereProdus(produsDTO.getDescriereProdus());

        ProdusDTO produsDTO1 = new ProdusDTO();

        Produs createdProduct = produsRepository.save(produs);

        produsDTO1.setId(createdProduct.getId());
        produsDTO1.setNumeProdus(createdProduct.getNumeProdus());
        produsDTO1.setPretProdus(createdProduct.getPretProdus());
        produsDTO1.setImagineProdus(createdProduct.getImagineProdus());
        produsDTO1.setCantitateProdus(createdProduct.getCantitateProdus());
        produsDTO1.setDescriereProdus(createdProduct.getDescriereProdus());

        return produsDTO1;
    }
    // Citeste un anumit produs dupa id
    public ProdusDTO getProductbyId(Long idP){
         ProdusDTO produsDTO= new ProdusDTO();
        Produs produs=produsRepository.findById(idP).get();
        produsDTO.setId(produs.getId());
        produsDTO.setNumeProdus(produs.getNumeProdus());
        produsDTO.setPretProdus(produs.getPretProdus());
        produsDTO.setImagineProdus(produs.getImagineProdus());
        produsDTO.setCantitateProdus(produs.getCantitateProdus());
        produsDTO.setDescriereProdus(produs.getDescriereProdus());
        return produsDTO;
    }


    // Update Produs in functie de id
    public ProdusDTO updateProduct(ProdusDTO produsDTO, Long idP){
        Produs produsU = produsRepository.findById(idP).get();
      produsU.setNumeProdus(produsDTO.getNumeProdus());
      produsU.setPretProdus(produsDTO.getPretProdus());
      produsU.setImagineProdus(produsDTO.getImagineProdus());
      produsU.setCantitateProdus(produsDTO.getCantitateProdus());
      produsU.setDescriereProdus(produsDTO.getDescriereProdus());

      produsRepository.save(produsU);
      return produsDTO;
    }

    // Metoda conversie din DTO in Entitate Produs pentru relatia ManyToMany care necesita o entitate Produs
    public Produs convertDTOProdus(ProdusDTO produsDTO){
        Produs produs = new Produs();
        produs.setCantitateProdus(produsDTO.getCantitateProdus());
        produs.setNumeProdus(produsDTO.getNumeProdus());
        produs.setDescriereProdus(produsDTO.getDescriereProdus());
        produs.setImagineProdus(produsDTO.getImagineProdus());
        produs.setPretProdus(produsDTO.getPretProdus());
        produs.setId(produsDTO.getId());
        return produs;
    }

    // Stergere Produs in functie de id
    public void deleteProduct(Long idP){
        produsRepository.deleteById(idP);
    }

    // Stergere Produs dupa nume
    public Long deleteProduct(String numeProdus){
        return produsRepository.deleteByNumeProdus(numeProdus);
    }
}
