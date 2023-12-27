package com.testing.testinguser.DTO;

import lombok.*;

@Getter
@Setter
@ToString
@AllArgsConstructor
@NoArgsConstructor
public class RegisterDTO {
    private Long id;
    private String name;
    private String email;
    private String password;
}
