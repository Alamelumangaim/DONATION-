package com.testing.testinguser.UserData;

import jakarta.persistence.*;
import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

@Getter
@Setter
@AllArgsConstructor
@NoArgsConstructor
@Entity
public class Donor {
    @Id
    @GeneratedValue(strategy = GenerationType.SEQUENCE)
    @Column(nullable = false,length = 45)
    private Long id;
    @Column( length = 255)
    private String organizationname;
    @Column(length = 255)
    private String recipientname;
    @Column(length = 255)
    private String address;
    @Column(length = 255)
    private String requirements;
}
