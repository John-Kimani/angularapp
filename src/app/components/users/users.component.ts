import { Component, OnInit } from '@angular/core';
import { User } from '../../models/User';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css']
})
export class UsersComponent implements OnInit {

  users!: User[];

  showExtended: boolean = true;
  loaded: boolean = false;
  enableAdd: boolean = false;


  constructor() { }

  ngOnInit(): void {


      this.users = [
        {
          firstName: 'John',
          lastName: 'Doe',
          age: 30,
          address:{
              street: '50 Main st',
              city: 'Boston',
              state: 'MA',
          },
          image: "https://www.istockphoto.com/photo/excited-woman-wearing-rainbow-cardigan-gm1327495437-411841849?utm_source=unsplash&utm_medium=affiliate&utm_campaign=srp_photos_top&utm_content=https%3A%2F%2Funsplash.com%2Fs%2Fphotos%2Fpeople&utm_term=people%3A%3A%3A"
      },
      {
        firstName: 'Kevin',
        lastName: 'Johnson',
        age: 34,
        address:{
            street: '20 School st',
            city: 'Lynn',
            state: 'MA',
        },
        
    },
    {
      firstName: 'Karen',
      lastName: 'Williams',
      age: 26,
      address:{
          street: '55 Mill st',
          city: 'Miami',
          state: 'FL',
      },
      
  },
];

    this.loaded = true;
    this.showExtended = true;

    this.addUser(            {
      firstName: 'John',
      lastName: 'Kimani',

  });
  }
  addUser(user: User){
    this.users.push(user);
  }

}
