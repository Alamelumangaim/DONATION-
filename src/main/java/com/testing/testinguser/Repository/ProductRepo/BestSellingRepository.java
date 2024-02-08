package com.testing.testinguser.Repository.ProductRepo;

import com.testing.testinguser.UserData.Product.BestSelling;
import org.springframework.data.jpa.repository.JpaRepository;

public interface BestSellingRepository extends JpaRepository<BestSelling,Long> {
}
