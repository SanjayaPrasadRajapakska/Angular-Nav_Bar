import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'navBar';

  
menuVariable: boolean=false; //default tibiya yuthu akaraya
menu_icon_variable: boolean=false; //default tibiya yuthu akaraya



openMenu(){
this.menuVariable =! this.menuVariable;
 this.menu_icon_variable =! this.menu_icon_variable;
}

onClick(){
  this.menuVariable =! this.menuVariable;
 this.menu_icon_variable =! this.menu_icon_variable;
}
}
