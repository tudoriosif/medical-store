package com.tdapp.reactspringapp.DTOs;
import lombok.Data;

@Data
public class ProdusDTO {
    private Long id;
    private String numeProdus;
    private Double pretProdus;
    private String imagineProdus;
    private Long cantitateProdus;
    private String descriereProdus;

}
