package com.tdapp.reactspringapp.Entities;

import lombok.Data;
import org.springframework.web.bind.annotation.GetMapping;

import javax.persistence.*;

@Entity
@Data
@Table(name = "stoc")
public class Stoc {

    @Id
    @GeneratedValue
    @Column(name = "id_stoc")
    private Long idStoc;

    //relatii unidirectionale many-to-one
    //referinta la tabelul user
    @ManyToOne
    @JoinColumn(name = "id_user")
    private User user;

    //referinta la tabelul produs
    @ManyToOne
    @JoinColumn(name = "id_produs")
    private Produs produs;

    @Column(name = "cantitate")
    private Long cantitate;

}
