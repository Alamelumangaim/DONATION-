package com.testing.testinguser.DTO;

import lombok.*;

@Getter
@Setter
@NoArgsConstructor
@AllArgsConstructor
@ToString
public class DonorformDTO {
    private Long id;
    private String name;
    private String address;
    private String contact;
}
