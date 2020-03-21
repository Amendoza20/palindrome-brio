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
    return this.text != '';
    
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
