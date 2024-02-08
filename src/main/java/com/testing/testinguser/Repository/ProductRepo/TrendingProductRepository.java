package com.testing.testinguser.Repository.ProductRepo;

import com.testing.testinguser.UserData.Product.TrendingProduct;
import org.springframework.data.jpa.repository.JpaRepository;

public interface TrendingProductRepository extends JpaRepository<TrendingProduct,Long> {

    TrendingProduct findTrendById(Long id);

}
