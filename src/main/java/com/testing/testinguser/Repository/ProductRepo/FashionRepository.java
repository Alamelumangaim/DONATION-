package com.testing.testinguser.Repository.ProductRepo;

import com.testing.testinguser.UserData.Product.FashionProduct;
import org.springframework.data.jpa.repository.JpaRepository;

public interface FashionRepository extends JpaRepository<FashionProduct,Long> {
}
