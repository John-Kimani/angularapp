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
    lastName = 'Smith';
    age = 30;
    address = {
        street: '50 Main Street',
        city: 'Boston',
        state: 'MA'
    }

    //methods
    constructor(){

    }
    showAge(){
        return this.age + 2;
    }
}