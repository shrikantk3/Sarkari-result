import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title:string = 'Sarkari-result';
  name:any='Sarkari Result';
  isNavShow:boolean=true;
  cityList=['Mumbai', 'Kolkata', "Channai", "Gujrat", "Bangalore", "pune"]



  nameChange(){
    this.name = "KOlkata";
    this.isNavShow = false;
  }
  assignValue(value:string){
    this.name = value;
  }
}
