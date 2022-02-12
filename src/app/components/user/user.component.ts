import { Component } from "@angular/core";

@Component({
    selector: 'app-user',
    templateUrl: './user.component.html',
    // template: '<h2>John Doe<h2>'
    styleUrls: ['./user.component.css']
})

export class UserCompoenent{

    //properties
    firstName:string;
    lastName: string;
    age: number;
    address;

    foo:any;
    hasKids:boolean;
    numberArray: number[];
    stringArray: string[];
    mixedArray: any[];
    myTupple: [string, number, boolean];
    unusable:void;
    u: undefined;
    n: null;

    //methods
    constructor(){
        this.firstName = 'John';
        this.lastName = 'Doe';
        this.age = 30;
        this.address = {
            street: '50 Main Street',
            city: 'Boston',
            state: 'MA'
        }
        this.foo = true;
        this.hasKids = true;
        this.numberArray = [1,2,3];
        this.stringArray = ['John', 'Jim'];
        this.mixedArray = [ 'John', 5 , true];
        this.myTupple = [ 'Heloo', 1, true];
        this,this.unusable = undefined;
        this.n = null;
        this.u = undefined;
        console.log(this.addNumbers(2, 3));
    }
    showAge(){
        return this.age + 2;
    }

    addNumbers(num1: number, num2: number):number{
        return num1 + num2;
    }
}