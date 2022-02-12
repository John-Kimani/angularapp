import { Component } from "@angular/core";

@Component({
    selector: 'app-user',
    templateUrl: './user.component.html',
    // template: '<h2>John Doe<h2>'
    styleUrls: ['./user.component.css']
})

export class UserCompoenent{

    //properties
    user: User;


    //methods
    constructor(){
        this.user = {
            firstName: 'John',
            lastName: 'Doe',
            age: 30,
            address:{
                street: '50 Main st',
                city: 'Boston',
                state: 'MA',
            }
        }
    }

}interface User {
    firstName: string,
    lastName: string,
    age: number,
    address: {
        street: string,
        city: string,
        state: string,
    }
}