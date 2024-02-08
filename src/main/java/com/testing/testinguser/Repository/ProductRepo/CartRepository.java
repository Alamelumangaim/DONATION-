package com.testing.testinguser.Repository.ProductRepo;

import com.testing.testinguser.UserData.Product.Cart;
import org.springframework.data.jpa.repository.JpaRepository;

public interface CartRepository extends JpaRepository<Cart,Long> {
}
