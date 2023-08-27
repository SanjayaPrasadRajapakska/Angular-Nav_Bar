import { Component } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent {
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
