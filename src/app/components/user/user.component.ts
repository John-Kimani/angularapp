import { Component } from "@angular/core";

@Component({
    selector: 'app-user',
    templateUrl: './user.component.html',
    // template: '<h2>John Doe<h2>'
    styleUrls: ['./user.component.css']
})

export class UserCompoenent{

    //properties
    firstName = 'John';
    lastName = 'Doe';
    age = 30;

    //methods
    constructor(){
       this.sayHello();

    }

    sayHello(){
        console.log(this.age);
        this.hasBirthday();
        console.log(this.age);
    } 
    hasBirthday(){
        this.age += 1;
    }
}