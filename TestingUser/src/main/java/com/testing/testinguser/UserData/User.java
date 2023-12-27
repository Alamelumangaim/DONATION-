package com.testing.testinguser.UserData;

import jakarta.persistence.Column;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.*;
import lombok.*;

@Entity
@AllArgsConstructor
@NoArgsConstructor
@Getter
@Setter
@ToString
public class User {
    @Id
    @GeneratedValue(strategy = GenerationType.SEQUENCE)
    @Column(length = 45)
    private Long id;
    @Column(length = 255)
    private String name;
    @Column(length = 255)
    private String email;
    @Column(length = 255)
    private String password;

}
