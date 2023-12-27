package com.testing.testinguser.Repository;

import com.testing.testinguser.UserData.Donator;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface DonatorRepository extends JpaRepository<Donator,Long> {
    Donator findDonationById(Long id);
}
