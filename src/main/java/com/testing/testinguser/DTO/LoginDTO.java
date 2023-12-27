package com.testing.testinguser.DTO;


import lombok.*;

@AllArgsConstructor
@NoArgsConstructor
@ToString
@Getter
@Setter
public class LoginDTO {
    private String email;
    private String password;
}