package com.testing.testinguser.Repository;

import com.testing.testinguser.UserData.Requestor;
import org.springframework.data.jpa.repository.JpaRepository;

public interface RequestorRepository extends JpaRepository<Requestor,Long> {
}
