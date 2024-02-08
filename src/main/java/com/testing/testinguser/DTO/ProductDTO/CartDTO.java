package com.testing.testinguser.DTO.ProductDTO;

import lombok.*;

@AllArgsConstructor
@NoArgsConstructor
@Getter
@Setter
@ToString
public class CartDTO {
    private Long id;
    private String product_name;
    private Integer price;
    private Integer quantity;
    private Integer total;
}
