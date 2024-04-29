import { Component } from "@angular/core";
import { RouterOutlet } from "@angular/router";
import { CardComponent } from "./components/card/card.component";
import { HeaderComponent } from "./components/header/header.component";
import { FooterComponent } from "./components/footer/footer.component";
import { CommonModule } from "@angular/common";

@Component({
  selector: "app-root",
  standalone: true,
  templateUrl: "./app.component.html",
  styleUrl: "./app.component.css",
  imports: [
    RouterOutlet,
    CardComponent,
    HeaderComponent,
    FooterComponent,
    CommonModule,
  ],
})
export class AppComponent {
  title: string = "profile-app";
  showProfile: boolean = false;
  colors: string[] = ["primary", "secondary", "success", "danger"];
  role: string = "Admin";
}
