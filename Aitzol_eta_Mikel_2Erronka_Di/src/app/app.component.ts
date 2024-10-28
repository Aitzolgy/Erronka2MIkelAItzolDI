import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { CommonModule } from '@angular/common';
import { JatetxeaService } from './service/jatetxea.service';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, HomeComponent, CommonModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'Aitzol_eta_Mikel_2Erronka_Di';

  constructor(private jatetxeaService:JatetxeaService) {
    jatetxeaService.printJatetxeak();
    jatetxeaService.asd();
}

}