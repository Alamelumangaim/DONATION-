package com.testing.testinguser.UserData;

import jakarta.persistence.*;
import lombok.*;

import java.time.LocalDate;
import java.time.LocalDateTime;
@Getter
@Setter
@AllArgsConstructor
@NoArgsConstructor
@ToString
@Entity
public class Donator {
    @Id
    @GeneratedValue(strategy = GenerationType.SEQUENCE)
    @Column(length = 45)
    private Long id;
    private String Location;
    private String expirydate;
    private String fooditem;
    private int quantity;
    private String role;
    private String email;
}
