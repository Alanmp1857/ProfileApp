import { Component } from "@angular/core";

@Component({
  selector: "app-card",
  standalone: true,
  imports: [],
  templateUrl: "./card.component.html",
  styleUrl: "./card.component.css",
})
export class CardComponent {
  name = "Alan Mathew Panicker";

  description =
    "Highly motivated and adaptable graduate with a strong academic background and a passion for continuous learning. Seeking opportunities to apply theoretical knowledge in practical settings, while contributing to the growth of an innovative organization.";

  location = "Bangalore, India";

  companyName = "ITC Infotech";

  role = "Associate IT Consultant";

  openImage() {
    alert("This is a profile image of Alan");
  }
}
