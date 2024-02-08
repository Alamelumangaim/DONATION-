package com.testing.testinguser.Controller;

import com.testing.testinguser.DTO.*;
import com.testing.testinguser.DTO.ProductDTO.BestSellingDTO;
import com.testing.testinguser.DTO.ProductDTO.CartDTO;
import com.testing.testinguser.DTO.ProductDTO.FashionDTO;
import com.testing.testinguser.DTO.ProductDTO.TrendingProductDTO;
import com.testing.testinguser.Message.LoginResponse;
import com.testing.testinguser.Service.UserService;
import com.testing.testinguser.UserData.*;
import com.testing.testinguser.UserData.Product.BestSelling;
import com.testing.testinguser.UserData.Product.Cart;
import com.testing.testinguser.UserData.Product.FashionProduct;
import com.testing.testinguser.UserData.Product.TrendingProduct;
import lombok.AllArgsConstructor;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@AllArgsConstructor
@RequestMapping("api/v1/register")
public class UserController {
    private final UserService userService;

    @PostMapping("adduser")
    public ResponseEntity<User> saveUser(@RequestBody RegisterDTO registerDTO){
        User user = userService.saveUser( registerDTO );
        return new ResponseEntity<>( user, HttpStatus.CREATED );
    }
    @PostMapping("login")
    public ResponseEntity<?> loginUser(@RequestBody LoginDTO loginDTO){
        LoginResponse msg = userService.loginUser(loginDTO);
        return new ResponseEntity<>(msg,HttpStatus.OK);
    }
    @PostMapping("donate")
    public ResponseEntity<Donor> requestForm(@RequestBody DonorDTO donorDTO){
        Donor donor = userService.requestForm(donorDTO);
        return new ResponseEntity<>( donor,HttpStatus.CREATED );
    }
    @GetMapping("getrequests")

    public ResponseEntity<List<Donor>> getRequests(){
        List<Donor> donors = userService.getRequests();
        return new ResponseEntity<>(donors , HttpStatus.OK );
    }
    @PostMapping("donorform")
    public ResponseEntity<Donorformdetails> donorForm(@RequestBody DonorformDTO donorformDTO){
        Donorformdetails form = userService.donorForm(donorformDTO);
        return new ResponseEntity<>( form,HttpStatus.CREATED );
    }
    @GetMapping("getdonors")
    public ResponseEntity<List<Donorformdetails>> getDonors(){
        List<Donorformdetails> newdonors = userService.getDonors();
        return new ResponseEntity<>( newdonors,HttpStatus.OK );
    }
    @PostMapping("postdonate")
    public ResponseEntity<Donator> postDonate(@RequestBody DonatorDTO donatorDTO){
        Donator newdonator = userService.postDonate(donatorDTO);
        return new ResponseEntity<>( newdonator,HttpStatus.CREATED );
    }
    @GetMapping("getdonations")
    public ResponseEntity<List<Donator>> getDonations(){
        List<Donator> donors = userService.getDonations();
        return new ResponseEntity<>( donors,HttpStatus.OK );
    }
    @GetMapping("getdonationsbyid/{id}")
    public ResponseEntity<Donator> getDonationbyid(@PathVariable("id") Long id){
        Donator donator = userService.getDonationbyid(id);
        return new ResponseEntity<>( donator,HttpStatus.OK );
    }
    @PostMapping("claimrequest")
    public ResponseEntity<Requestor> getClaimRequest(@RequestBody RequestorDTO requestorDTO){
        Requestor req = userService.getClaimRequest(requestorDTO);
        return new ResponseEntity<>( req, HttpStatus.CREATED );
    }
    @PostMapping("maildonator/{email}/{name}/{contact}")
    public void sendMail(
            @PathVariable("email") String email,
            @PathVariable("name") String name,
            @PathVariable("contact") String contact
           ){
        userService.sendEmail(email,name,contact);
    }
    @PostMapping("product")
    public ResponseEntity<TrendingProduct> postproduct(@RequestBody TrendingProductDTO productDTO){
        TrendingProduct product = userService.postProduct(productDTO);
        return new ResponseEntity<>( product,HttpStatus.CREATED );
    }
    @GetMapping("getTrends")
    public ResponseEntity<List<TrendingProduct>> getTrend(){
        List<TrendingProduct> trend = userService.getTrend();
        return new ResponseEntity<>( trend,HttpStatus.OK );
    }
    @PostMapping("bestproduct")
    public ResponseEntity<BestSelling> postBestProduct(@RequestBody BestSellingDTO bestSellingDTO){
        BestSelling sell = userService.postBestProduct(bestSellingDTO);
        return new ResponseEntity<>( sell,HttpStatus.CREATED );
    }
    @GetMapping("getBest")
    public ResponseEntity<List<BestSelling>> getBest(){
        List<BestSelling> sellings = userService.getBestProduct();
        return new ResponseEntity<>( sellings,HttpStatus.OK );
    }
    @PostMapping("fashion")
    public ResponseEntity<FashionProduct> fashion(@RequestBody FashionDTO fashionDTO){
        FashionProduct fashionProduct = userService.postFashionProduct(fashionDTO);
        return new ResponseEntity<>( fashionProduct,HttpStatus.CREATED );
    }
    @GetMapping("getFashion")
    public ResponseEntity<List<FashionProduct>> getFashionProduct(){
        List<FashionProduct> fashionProducts = userService.getFashionProduct();
        return new ResponseEntity<>( fashionProducts,HttpStatus.OK );
    }
    @GetMapping("getTrend/{id}")
    public ResponseEntity<TrendingProduct> getTrendById(@PathVariable("id") Long id){
        TrendingProduct trendingProduct = userService.getTrendById(id);
        return new ResponseEntity<>( trendingProduct,HttpStatus.OK );
    }
    @PostMapping("cart")
    public ResponseEntity<Cart> postCart(@RequestBody CartDTO cartDTO){
        Cart cart = userService.postCart(cartDTO);
        return new ResponseEntity<>( cart,HttpStatus.CREATED );
    }
    @GetMapping("getCart")
    public ResponseEntity<List<Cart>> getCart(){
        List<Cart> cart = userService.getCart();
        return new ResponseEntity<>( cart,HttpStatus.OK );
    }
    @DeleteMapping("deletecart/{id}")
    public ResponseEntity<?> deleteCart(@PathVariable("id") Long id){
        userService.deleteCart(id);
        return new ResponseEntity<>( HttpStatus.OK );
    }
//    @EventListener(ApplicationReadyEvent.class)
//    @GetMapping("getemail/{email}")
//    public void sendMail(@PathVariable("email") String email){
//        userService.sendEmail(email,"This is subject","Thank you for responding");
//    }

}
