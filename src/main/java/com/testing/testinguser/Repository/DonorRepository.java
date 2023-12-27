package com.testing.testinguser.Repository;

import com.testing.testinguser.UserData.Donor;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface DonorRepository extends JpaRepository<Donor,Long> {


}
