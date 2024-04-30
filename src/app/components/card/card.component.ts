import { Component } from "@angular/core";
import { FormsModule } from "@angular/forms";

@Component({
  selector: "app-card",
  standalone: true,
  imports: [FormsModule],
  templateUrl: "./card.component.html",
  styleUrl: "./card.component.css",
})
export class CardComponent {
  title: string = "";

  name: string = "Alan Mathew Panicker";

  description: string =
    "Highly motivated and adaptable graduate with a strong academic background and a passion for continuous learning. Seeking opportunities to apply theoretical knowledge in practical settings, while contributing to the growth of an innovative organization.";

  companyName: string = "ITC Infotech";

  role: string = "Associate IT Consultant";

  openImage() {
    alert("This is a profile image of Alan");
  }
}
