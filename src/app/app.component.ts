import { Component } from '@angular/core';
import { OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MustMatch } from './_helpers/must-match.validator';



@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  // inputValue: string;
  // filteredOptions: string[] = [];
  // options = ['Burns Bay Road', 'Downing Street', 'Wall Street', 'abc', 'def'];

  constructor() {
    // this.filteredOptions = this.options;
    // console.log(this.filteredOptions)
  }

  // onChange(value: string): void {
  //   this.filteredOptions = this.options.filter(option => option.toLowerCase().indexOf(value.toLowerCase()) !== -1);
  // }
    
   openNav() {
    document.getElementById("mySidebar").style.width = "150px";
    document.getElementById("main").style.marginLeft = "200px";
  }
  
   closeNav() {
    document.getElementById("mySidebar").style.width = "0";
    document.getElementById("main").style.marginLeft= "0";
  }
  
    
    
    
    
    ngOnInit(){

    }
    

}



