package com.tdapp.reactspringapp.Entities;
import lombok.Data;

import javax.persistence.*;

@Entity
@Data
@Table(name="produs")
public class Produs {
    @Id
    @GeneratedValue
    @Column(name="id_produs")
    private Long id;

    @Column(name="nume_produs")
    private String numeProdus;

    @Column(name="pret_produs")
    private Long pretProdus;

    @Column(name="imagine_produs")
    private String imagineProdus;

    @Column(name="cantitate_produs")
    private Long cantitateProdus;

    @Column(name="descriere_produs")
    private String descriereProdus;

}
