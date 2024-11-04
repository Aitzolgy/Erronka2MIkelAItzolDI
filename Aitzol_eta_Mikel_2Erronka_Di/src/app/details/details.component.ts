import {Component, inject} from '@angular/core';
import {CommonModule} from '@angular/common';
import {ActivatedRoute, RouterModule} from '@angular/router';
import { JatetxeaService } from '../service/jatetxea.service';
import { RouterOutlet } from '@angular/router';


@Component({
  selector: 'app-details',
  standalone: true,
  imports: [RouterOutlet, CommonModule,RouterModule],
  templateUrl: './details.component.html',
  styleUrl: './details.component.css'
})
export class DetailsComponent {

  constructor(    private route: ActivatedRoute,    private jatetxeaService : JatetxeaService) {}

  private jatetxeId!: string;

  ngOnInit(): void {
  this.jatetxeId = String(this.route.snapshot.paramMap.get('id'));

  }

  get jatetxea() {
    return this.jatetxeaService.filterByName(this.jatetxeId);
  }


}
