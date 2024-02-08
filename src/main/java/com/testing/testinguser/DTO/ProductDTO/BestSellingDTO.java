package com.testing.testinguser.DTO.ProductDTO;

import lombok.*;

@NoArgsConstructor
@AllArgsConstructor
@Getter
@Setter
@ToString
public class BestSellingDTO {
    private Long id;
    private String name;
    private String imageURL;
    private Integer price;
}
