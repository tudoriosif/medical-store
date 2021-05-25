package com.tdapp.reactspringapp.Repositories;

import com.tdapp.reactspringapp.Entities.Produs;
import com.tdapp.reactspringapp.Entities.Stoc;
import org.springframework.data.jpa.repository.Modifying;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.CrudRepository;
import org.springframework.data.repository.query.Param;

import java.util.List;

public interface StocRepository extends CrudRepository<Stoc,Long> {
      // query pentru afisarea datelor din stoc pentru un anumit user
      @Query(value="SELECT * FROM stoc  WHERE id_user = ?1", nativeQuery = true)
      List<Stoc> findByUserId(Long userId);

      // custom query pentru a face update ca la cantitatea ramasa a produsului atunci cand adaugam
      // sau stergem un produs in/din stoc
      // Modifying - specifica ca urmeaza un update query, in loc de select query, curata automat
      // entitatile a caror valori au fost modificate
      @Modifying
      @Query(value = "UPDATE produs p SET cantitate_produs=:cantitate WHERE p.id_produs=:produsId",nativeQuery = true)
      void setCantitate(@Param("cantitate") Long cantitate,@Param("produsId") Long produsId);

      // custom query pentru stergerea din stoc
      @Modifying
      @Query(value = "DELETE FROM stoc WHERE id_produs=?1 AND id_stoc=?2",nativeQuery = true)
      void removeByProdusId(Long produsId,Long stocId);

      // query pentru a gasi cantitatea produsului din stoc pentru -> folosit la stergerea din stoc
      @Query(value = "SELECT * FROM stoc WHERE id_produs=?1 AND id_stoc=?2",nativeQuery = true)
      Stoc cantitateaStoc(Long produsId,Long stocId);
}
