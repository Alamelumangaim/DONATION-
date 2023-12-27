package com.testing.testinguser.DTO;

import lombok.*;

@Getter
@Setter
@ToString
@AllArgsConstructor
@NoArgsConstructor
public class DonorDTO {
    private Long id;
    private String organizationname;
    private String recipientname;
    private String address;
    private String requirements;
}
