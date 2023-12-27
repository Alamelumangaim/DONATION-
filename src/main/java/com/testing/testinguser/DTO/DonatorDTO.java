package com.testing.testinguser.DTO;

import lombok.*;
import org.springframework.cglib.core.Local;

import java.time.LocalDate;
@Getter
@Setter
@ToString
@AllArgsConstructor
@NoArgsConstructor
public class DonatorDTO {
    private Long id;
    private String Location;
    private String expirydate;
    private String fooditem;
    private int quantity;
    private String role;
    private String email;
}
