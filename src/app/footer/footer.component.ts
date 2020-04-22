import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.css']
})
export class FooterComponent implements OnInit {
  vox: number;
  constructor() { }

  ngOnInit(): void {
  }
  ngshow(){
    this.vox = 8
    if ( this.vox == 10)
    return false;
  }
}
