package com.example.diary.controller;

import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.GetMapping;

@Controller
public class DiaryController {

    @GetMapping("/diary")
    public String home(){
        return "diaryList";
    }

    @GetMapping("/post")
    public String post(){
        return "diaryPost";
    }

    @GetMapping("/update")
    public String update(){
        return "updatePost";
    }

    @GetMapping("/veiw")
    public String veiw(){
        return "viewPost";
    }
}
