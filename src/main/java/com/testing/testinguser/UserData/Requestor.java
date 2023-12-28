package com.testing.testinguser.UserData;

import jakarta.persistence.Entity;
import jakarta.persistence.Id;
import lombok.*;

@Entity
@AllArgsConstructor
@NoArgsConstructor
@ToString
@Getter
@Setter
public class Requestor {
    @Id
    private Long id;
    private String name;
    private String address;
    private String email;
    private String contact;
}
