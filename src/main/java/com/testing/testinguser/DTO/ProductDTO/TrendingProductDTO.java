package com.testing.testinguser.DTO.ProductDTO;

import lombok.*;

@Getter
@Setter
@AllArgsConstructor
@NoArgsConstructor
@ToString
public class TrendingProductDTO {
    private Long id;
    private String imageURL;
    private String name;
    private int price;
    private String description;

}
