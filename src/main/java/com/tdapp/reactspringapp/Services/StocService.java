package com.tdapp.reactspringapp.Services;

import com.tdapp.reactspringapp.Entities.Stoc;
import com.tdapp.reactspringapp.Repositories.StocRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;
import java.util.ArrayList;
import java.util.List;

@Service
public class StocService {
    private final StocRepository stocRepository;

    @Autowired
    public StocService(StocRepository stocRepository)
    { this.stocRepository=stocRepository;
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
    public void addItems(Stoc stoc){
        stocRepository.setCantitate(stoc.getProdus().getCantitateProdus()- stoc.getCantitate(),stoc.getProdus().getId());
        stocRepository.save(stoc);

    }
    @Transactional
    //stergere element in stoc
    //se face update si la cantitatea produsului din tabelul produs
    public void removeByProdusId(Long produsId,Long stocId){
        Stoc stoc=stocRepository.cantitateaStoc(produsId,stocId);
        stocRepository.setCantitate(stoc.getProdus().getCantitateProdus()+ stoc.getCantitate(),stoc.getProdus().getId());
        stocRepository.removeByProdusId(produsId,stocId);

    }
}
