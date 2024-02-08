package com.testing.testinguser.Service;

import com.testing.testinguser.DTO.*;
import com.testing.testinguser.DTO.ProductDTO.BestSellingDTO;
import com.testing.testinguser.DTO.ProductDTO.CartDTO;
import com.testing.testinguser.DTO.ProductDTO.FashionDTO;
import com.testing.testinguser.DTO.ProductDTO.TrendingProductDTO;
import com.testing.testinguser.Message.LoginResponse;
import com.testing.testinguser.Repository.*;
import com.testing.testinguser.Repository.ProductRepo.BestSellingRepository;
import com.testing.testinguser.Repository.ProductRepo.CartRepository;
import com.testing.testinguser.Repository.ProductRepo.FashionRepository;
import com.testing.testinguser.Repository.ProductRepo.TrendingProductRepository;
import com.testing.testinguser.UserData.*;
import com.testing.testinguser.UserData.Product.BestSelling;
import com.testing.testinguser.UserData.Product.Cart;
import com.testing.testinguser.UserData.Product.FashionProduct;
import com.testing.testinguser.UserData.Product.TrendingProduct;
import org.springframework.mail.SimpleMailMessage;
import org.springframework.mail.javamail.JavaMailSender;
import org.springframework.stereotype.Service;
import lombok.AllArgsConstructor;
import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;

import java.util.List;
import java.util.Optional;

@Service
@AllArgsConstructor
public class UserService {
    private final UserRepository userRepository;
    private final BCryptPasswordEncoder bCryptPasswordEncoder;
    private final DonorRepository donorRepository;
    private final DonorformRepository donorformRepository;
    private final DonatorRepository donatorRepository;
    private final RequestorRepository requestorRepository;
    private final TrendingProductRepository productRepository;
    private final BestSellingRepository bestSellingRepository;
    private final FashionRepository fashionRepository;
    private final CartRepository cartRepository;
//    @Autowired
    private final JavaMailSender javaMailSender;
    public User saveUser(RegisterDTO registerDTO) {
        User user = new User(
                registerDTO.getId(),
                registerDTO.getName(),
                registerDTO.getEmail(),
//                passwordEncoder.passwordEncoder().encode(registerDTO.getPassword())
                this.bCryptPasswordEncoder.encode( registerDTO.getPassword() )

        );
        return userRepository.save( user );
    }

    public LoginResponse loginUser(LoginDTO loginDTO) {
        User user1 = userRepository.findByEmail( loginDTO.getEmail() );
        if(user1!=null){
            String password = loginDTO.getPassword();
            String encodedpassword = user1.getPassword();
            boolean isPasswordright = bCryptPasswordEncoder.matches( password,encodedpassword );
            if(isPasswordright){
                Optional<User> user = userRepository.findUserByEmailAndPassword( loginDTO.getEmail(), encodedpassword );
                System.out.println(user.isPresent());
                if(user.isPresent()){
                    return new LoginResponse("SUCCESS",true);
                }
                return new LoginResponse("FAILED",false);

            }
            else{
                return new LoginResponse("PASSWORD NOT MATCHED",false);
            }
        }
        else{
            return new LoginResponse("USER NOT FOUND",false);
        }
    }

    public Donor requestForm(DonorDTO donorDTO) {
        Donor donor = new Donor(
                donorDTO.getId(),
                donorDTO.getOrganizationname(),
                donorDTO.getRecipientname(),
                donorDTO.getAddress(),
                donorDTO.getRequirements()
        );
        return donorRepository.save(donor);
    }


    public List<Donor> getRequests() {
        return donorRepository.findAll();
    }

    public Donorformdetails donorForm(DonorformDTO donorformDTO) {
        Donorformdetails donor = new Donorformdetails(
                donorformDTO.getId(),
                donorformDTO.getName(),
                donorformDTO.getAddress(),
                donorformDTO.getContact()
        );
        return donorformRepository.save( donor );
    }

    public List<Donorformdetails> getDonors() {
        return donorformRepository.findAll();
    }

    public Donator postDonate(DonatorDTO donatorDTO) {
        Donator donator = new Donator(
                donatorDTO.getId(),
                donatorDTO.getLocation(),
                donatorDTO.getExpirydate(),
                donatorDTO.getFooditem(),
                donatorDTO.getQuantity(),
                donatorDTO.getRole(),
                donatorDTO.getEmail()
        );
        return donatorRepository.save( donator );
    }

    public List<Donator> getDonations() {
        return donatorRepository.findAll();
    }

    public Donator getDonationbyid(Long id) {
        return donatorRepository.findDonationById( id );
    }

    public Requestor getClaimRequest(RequestorDTO requestorDTO) {
        Requestor req = new Requestor(
                requestorDTO.getId(),
                requestorDTO.getName(),
                requestorDTO.getAddress(),
                requestorDTO.getEmail(),
                requestorDTO.getContact()
        );
        return requestorRepository.save(req);
    }

    public void sendEmail( String email, String name, String contact) {
        System.out.println("Sending...");
        SimpleMailMessage message = new SimpleMailMessage();
        message.setFrom( "alamelusowmi5624@gmail.com" );
        message.setTo( email );
        message.setText( name+ " has requested to claim your donation. You can contact them by the following number "+ contact );
        message.setSubject( "Requesting to claim a donation" );

        javaMailSender.send( message );
        System.out.println("Mail sent successfully");
    }

    public TrendingProduct postProduct(TrendingProductDTO productDTO) {
        TrendingProduct product = new TrendingProduct(
                productDTO.getId(),
                productDTO.getImageURL(),
                productDTO.getName(),
                productDTO.getPrice(),
                productDTO.getDescription()
        );

        return productRepository.save(product);
    }

    public List<TrendingProduct> getTrend() {
        return productRepository.findAll();
    }

    public BestSelling postBestProduct(BestSellingDTO bestSellingDTO) {
        BestSelling sell = new BestSelling(
                bestSellingDTO.getId(),
                bestSellingDTO.getName(),
                bestSellingDTO.getImageURL(),
                bestSellingDTO.getPrice()
        );
        return bestSellingRepository.save(sell);
    }

    public List<BestSelling> getBestProduct() {
        return bestSellingRepository.findAll();
    }

    public FashionProduct postFashionProduct(FashionDTO fashionDTO) {
        FashionProduct fashionProduct = new FashionProduct(
                fashionDTO.getId(),
                fashionDTO.getName(),
                fashionDTO.getImageURL(),
                fashionDTO.getPrice()
        );
        return fashionRepository.save(fashionProduct);
    }

    public List<FashionProduct> getFashionProduct() {
        return fashionRepository.findAll();
    }

    public TrendingProduct getTrendById(Long id) {
        return productRepository.findTrendById(id);
    }

    public Cart postCart(CartDTO cartDTO) {
//        cartDTO.setTotal(sumTotal(cartDTO.getPrice()) );
        Cart cart = new Cart(
                cartDTO.getId(),
                cartDTO.getProduct_name(),
                cartDTO.getPrice(),
                cartDTO.getQuantity(),
                cartDTO.getTotal()
        );

        return cartRepository.save(cart);

    }
    public List<Cart> getCart() {
        return cartRepository.findAll();
    }

    public void deleteCart(Long id) {
        cartRepository.deleteById( id );
    }



//    public void sendEmail(String email, String subject, String body){
//        SimpleMailMessage message = new SimpleMailMessage();
//                message.setFrom( "alamelusowmi5624@gmail.com" );
//                message.setTo( email );
//                message.setText( body );
//                message.setSubject( subject );
//        javaMailSender.send(message);
//        System.out.println("Mail sent successfully");
//    }
}

