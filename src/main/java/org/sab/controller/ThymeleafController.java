package org.sab.controller;

import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;

import static org.springframework.web.bind.annotation.RequestMethod.GET;

@Controller
@RequestMapping("/")
public class ThymeleafController {

    @RequestMapping(value={"/","/index.html","/error",},method = GET)
    public String returnLibHomePage(){
        return "index";
    }

    @RequestMapping("/tutorials_spring.html")
    public String returnSpringTutorials(){return "tutorials_spring";}

    @RequestMapping("/tutorials_utilproj.html")
    public String returnUtilityAppsTutorials(){return "tutorials_utilproj";}
}
