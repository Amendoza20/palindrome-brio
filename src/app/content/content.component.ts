import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-content',
  templateUrl: './content.component.html',
  styleUrls: ['./content.component.css']
})
export class ContentComponent implements OnInit {
 public text: string;
  response: string;
  constructor() {
    this.text=''; 
  }

  ngOnInit(): void {
  }
  palindromeCheck(): boolean {
    if(this.text == "") return false;
    let value = this.text.toLowerCase();
    value = value.replace(/[^a-zA-Z]/g, '');
    let reverse = value.split('').reverse().join('');
    return value == reverse;
    
  }
  submit(){
    if(this.palindromeCheck()){ 
      this.response = "Yes!"
    }
    else{ 
      this.response = "Nope."
    }
  }
}
