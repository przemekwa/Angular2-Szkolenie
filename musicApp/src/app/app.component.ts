import { Component } from '@angular/core';

interface IMenuItem {
  label: string;
  route: Array<string | number>;
  exact?: boolean
}

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app works!';
  menuItem: IMenuItem[] = [
    {
      label: "Todo", 
      route: [""],
      exact: true
    },
    {
      label: "Spotify", 
      route: ["spotify"],
    },
    {
      label: "Contact", 
      route: ["contact"],
    }
    
  ]
}
