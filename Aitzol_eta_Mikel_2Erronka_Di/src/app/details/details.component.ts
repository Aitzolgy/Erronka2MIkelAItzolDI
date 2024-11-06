import { Component, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ActivatedRoute, RouterModule,RouterOutlet } from '@angular/router';
import { JatetxeaService } from '../service/jatetxea.service';
import * as L from 'leaflet';

@Component({
  selector: 'app-details',
  standalone: true,
  imports: [RouterOutlet, CommonModule, RouterModule],
  templateUrl: './details.component.html',
  styleUrl: './details.component.css'
})
export class DetailsComponent {

  constructor(private route: ActivatedRoute, private jatetxeaService: JatetxeaService) { }



  private jatetxeId!: string;
  private map: any;

  ngOnInit(): void {
    this.jatetxeId = String(this.route.snapshot.paramMap.get('id'));
    //id berrezkuratu

  }

  get jatetxea() {
    return this.jatetxeaService.filterByName(this.jatetxeId);
  }

  ngAfterViewInit(): void {
    // Inicializa el mapa
    this.initMap();
  }

  private initMap(): void {
    // Inicializa el mapa en el elemento con ID 'map' usando las coordenadas de jatetxea.
    this.map = L.map('map').setView([Number(this.jatetxea.latwgs84), Number(this.jatetxea.lonwgs84)], 15);
    // Añadir el mosaico de OpenStreetMap
    L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
      maxZoom: 19,
      attribution: '© Aitzol eta Mikel'
    }).addTo(this.map);
    // Añade un marcador en las coordenadas de jatetxea con un popup que muestra su nombre.
    L.marker([Number(this.jatetxea.latwgs84), Number(this.jatetxea.lonwgs84)]).addTo(this.map)
      .bindPopup(this.jatetxea.documentName) // Añade un popup con el nombre del jatetxea.
      .openPopup(); // Abre el popup automáticamente.
  }




}
