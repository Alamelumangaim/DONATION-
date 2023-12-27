package com.testing.testinguser.Service;

import com.testing.testinguser.DTO.*;
import com.testing.testinguser.Message.LoginResponse;
import com.testing.testinguser.Repository.DonatorRepository;
import com.testing.testinguser.Repository.DonorRepository;
import com.testing.testinguser.Repository.DonorformRepository;
import com.testing.testinguser.Repository.UserRepository;
import com.testing.testinguser.UserData.Donator;
import com.testing.testinguser.UserData.Donor;
import com.testing.testinguser.UserData.Donorformdetails;
import com.testing.testinguser.UserData.User;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.mail.SimpleMailMessage;
import org.springframework.mail.javamail.JavaMailSender;
import org.springframework.stereotype.Service;
import lombok.AllArgsConstructor;
import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;
import org.springframework.stereotype.Service;

import javax.management.relation.Role;
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
//    @Autowired
//    private final JavaMailSender javaMailSender;
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

