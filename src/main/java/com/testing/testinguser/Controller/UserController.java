package com.testing.testinguser.Controller;

import com.testing.testinguser.DTO.*;
import com.testing.testinguser.Message.LoginResponse;
import com.testing.testinguser.Service.UserService;
import com.testing.testinguser.UserData.Donator;
import com.testing.testinguser.UserData.Donor;
import com.testing.testinguser.UserData.Donorformdetails;
import com.testing.testinguser.UserData.User;
import lombok.AllArgsConstructor;
import org.springframework.boot.context.event.ApplicationReadyEvent;
import org.springframework.context.event.EventListener;
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
//    @EventListener(ApplicationReadyEvent.class)
//    @GetMapping("getemail/{email}")
//    public void sendMail(@PathVariable("email") String email){
//        userService.sendEmail(email,"This is subject","Thank you for responding");
//    }

}
