package com.example.diary.controller;

import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.GetMapping;

@Controller
public class MemberController {

    @GetMapping({"/", "/login"})
    public String home(){
        return "login";
    }

    @GetMapping("/join")
    public String join(){
        return "join";
    }

}
