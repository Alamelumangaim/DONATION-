package com.testing.testinguser.DTO;

import lombok.*;

@AllArgsConstructor
@NoArgsConstructor
@Getter
@Setter
@ToString
public class RequestorDTO {
    private Long id;
    private String name;
    private String email;
    private String address;
    private String contact;
}
