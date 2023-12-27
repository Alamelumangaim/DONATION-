package com.testing.testinguser.UserData;

import jakarta.persistence.*;
import lombok.*;

@Entity
@AllArgsConstructor
@NoArgsConstructor
@Getter
@Setter
@ToString
public class Donorformdetails {
    @Id
    @GeneratedValue(strategy = GenerationType.SEQUENCE)
    @Column(length = 45,nullable = false)
    private Long id;
    private String name;
    private String address;
    private String contact;
}
