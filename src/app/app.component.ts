import { Component, OnInit } from '@angular/core';
import * as mapboxgl from 'mapbox-gl';
import { LoadPins } from './state/map.actions';
import { Store } from '@ngrx/store';
import { selectPins } from './state/map.selectors';
import { map } from 'rxjs/operators';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  map: any;
  title = 'interview';
  pins$ = this.store.select(selectPins).pipe(
    map((pinsData: any) => pinsData.records || [])
  );

  constructor(private store: Store) { }

  ngOnInit() {
    this.store.dispatch(LoadPins());
    mapboxgl!.accessToken = 'pk.eyJ1IjoiZ29sZGd1biIsImEiOiJjbG0wbmN1djIxYnVvM2RwNjBjY2ZqdTJoIn0.IRn0RbczCcxZL0RKkO2Z2g';

    this.map = new mapboxgl.Map({
      container: 'map',
      style: 'mapbox://styles/mapbox/streets-v12',
      center: [-97.309341, 32.768799],
      zoom: 10
    });

    this.pins$.subscribe((pins: any[]) => {
      console.log(pins);

      if (pins && pins.length > 0) {
        pins.forEach((pin: any) => {
          if (!isNaN(pin.geocode.Longitude) && !isNaN(pin.geocode.Latitude)) {
            const marker = new mapboxgl.Marker()
              .setLngLat([pin.geocode.Longitude, pin.geocode.Latitude])
              .setPopup(new mapboxgl.Popup().setHTML(pin.name))
              .addTo(this.map);
          }
        });
      }
    });
  }

  zoomToMarker(pin: any) {
    this.map.setZoom(15);
    this.map.panTo({
      lat: parseFloat(pin.geocode.Latitude), lng: parseFloat(pin.geocode.Longitude)
    });
  }
}
