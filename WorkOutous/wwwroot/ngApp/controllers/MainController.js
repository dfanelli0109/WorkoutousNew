﻿
//main controller for index

class MainController {
    constructor($http, $mainService, $state) {
        //creating a property
        this.message = "Sup!";
        this.LoginUser;
        //setting a service after dependency Injection
        this.http = $http;
        //this.LoginUser = $LoginUser;
        this.stuff;
        //example of http request 
        this.http.get("/api/values").then((res) => { this.stuff = res.data; });
        //using main service
        this.users;
        this.main = $mainService;
        //this.main.getUsers().then((res) => { this.users = res.data; });
    }
}

    class RegisterController {
        constructor($http) {
        this.message = 'register page';
    }
}


class FrontController {
    constructor($http) {
        this.message = 'front page';
    }

 
}
