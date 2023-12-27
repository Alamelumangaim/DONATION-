package com.testing.testinguser.Message;

import lombok.*;

@NoArgsConstructor
@AllArgsConstructor
@ToString
@Getter
@Setter
public class LoginResponse {
    private String message;
    private Boolean status;
}

