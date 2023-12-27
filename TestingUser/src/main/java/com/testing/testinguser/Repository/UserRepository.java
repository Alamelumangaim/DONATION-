package com.testing.testinguser.Repository;

import com.testing.testinguser.UserData.User;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import java.util.Optional;

@Repository
public interface UserRepository extends JpaRepository<User,Long> {
    User findByEmail(String email);
    Optional<User> findByEmailAndPassword(String email, String password);
    Optional<User> findUserByEmailAndPassword(String email, String password);
}
