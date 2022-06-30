import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }
  image1 = 'https://images.pexels.com/photos/861443/pexels-photo-861443.jpeg?cs=srgb&dl=pexels-alex-andrews-861443.jpg&fm=jpg';
  image2 = 'https://images.pexels.com/photos/33044/sunflower-sun-summer-yellow.jpg?cs=srgb&dl=pexels-pixabay-33044.jpg&fm=jpg';
  image3 = 'https://images.pexels.com/photos/386025/pexels-photo-386025.jpeg?cs=srgb&dl=pexels-nubia-navarro-%28nubikini%29-386025.jpg&fm=jpg';
  image4 = 'https://images.pexels.com/photos/1428547/pexels-photo-1428547.jpeg?cs=srgb&dl=pexels-jmtphotography-1428547.jpg&fm=jpg';
}
