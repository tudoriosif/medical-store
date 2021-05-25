package com.tdapp.reactspringapp.Services;

import com.tdapp.reactspringapp.DTOs.ProdusDTO;
import com.tdapp.reactspringapp.DTOs.StocDTO;
import com.tdapp.reactspringapp.Entities.Produs;
import com.tdapp.reactspringapp.Entities.Stoc;
import com.tdapp.reactspringapp.Entities.User;
import com.tdapp.reactspringapp.Repositories.ProdusRepository;
import com.tdapp.reactspringapp.Repositories.StocRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;
import java.util.ArrayList;
import java.util.List;

@Service
public class StocService {
    private final StocRepository stocRepository;
    private ProdusService produsService;
    private UserService userService;

    @Autowired
    public StocService(StocRepository stocRepository)
    {
        this.stocRepository = stocRepository;
    }

    @Autowired
    public void setProdusService(ProdusService produsService){
        this.produsService = produsService;
    }

    @Autowired
    public void setUserService(UserService userService){
        this.userService = userService;
    }

    //elementele din stoc pentru un anumit user
    public List<Stoc> getItems(Long userId){
        List<Stoc> stocList=new ArrayList<>();
        stocRepository.findByUserId(userId).forEach(stocList::add);
        return stocList;
    }

    @Transactional
    //adaugare element in stoc
    //se face update si la cantitatea produsului din tabelul produs
    public boolean addItems(StocDTO stocDTO){
        // Verificam daca exista deja acest produs in stoc la acest user
        List<Stoc> stocList = (List<Stoc>) stocRepository.findAll();
        for(Stoc stoc : stocList) {
            // In cazul in care exista modificam cantitatea la produsul respectiv si adaugam cantitatea necesara la stocul deja existenta a utilizatorului
            // pentru produsul respectiv.
            if (stoc.getProdus().getId().equals(stocDTO.getIdprodus()) && stoc.getUser().getId().equals(stocDTO.getIduser())) {
                stocRepository.setCantitate(stoc.getProdus().getCantitateProdus() - stocDTO.getCantitate(), stocDTO.getIdprodus());
                stoc.setCantitate(stoc.getCantitate() + stocDTO.getCantitate());
                return false;
            }
        }

        // In cazul in care nu exista nici un produs de acest tip in stoc-ul userului
        // Vom folosi cele doua serviceuri de la User si Produs pentru a efectua relatia Many to Many
        stocRepository.setCantitate(this.produsService.getProductbyId(stocDTO.getIdprodus()).getCantitateProdus() - stocDTO.getCantitate(),stocDTO.getIdprodus());

        // Aducem produsul transmis de utilizator prin RequestBody dupa ID
        Produs produs = produsService.convertDTOProdus(produsService.getProductbyId(stocDTO.getIdprodus()));

        // Aducem userul transmis de utilizator prin RequestBody dupa ID
        User user = userService.convertDTOUser(userService.getUserById(stocDTO.getIduser()));

        // Creeam noua intrare de stoc care practic realizeaza relatia ManyToMany intre Produs si Stoc + cantitatea necesara
        Stoc stoc = new Stoc();
        stoc.setProdus(produs);
        stoc.setUser(user);
        stoc.setCantitate(stocDTO.getCantitate());
        stocRepository.save(stoc);
        return true;
    }
    @Transactional
    //stergere element in stoc
    //se face update si la cantitatea produsului din tabelul produs
    public boolean removeByProdusId(Long produsId,Long stocId){
        // Preluam din baza de date stoc-ul corespunzator produsului pe care dorim sa-l stergem
        Stoc stoc=stocRepository.cantitateaStoc(produsId,stocId);
        // Restabilim cantitatea in baza de date a produsului + cantitatea deja aflata in stoc
        stocRepository.setCantitate(stoc.getProdus().getCantitateProdus()+ stoc.getCantitate(),stoc.getProdus().getId());
        // Stergem stoc-ul din baza de date
        stocRepository.removeByProdusId(produsId,stocId);
        return true;
    }
}
