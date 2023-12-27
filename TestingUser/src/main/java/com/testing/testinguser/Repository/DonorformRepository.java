package com.testing.testinguser.Repository;

import com.testing.testinguser.UserData.Donorformdetails;
import org.springframework.data.jpa.repository.JpaRepository;

public interface DonorformRepository extends JpaRepository<Donorformdetails,Long> {
}
