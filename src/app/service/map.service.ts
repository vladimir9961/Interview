// pins.service.ts
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
    providedIn: 'root'
})
export class MapService {
    private apiUrl = 'https://app.smartapartmentdata.com/List/json/listItems.aspx?listID=8229830&token=CCD50CA98D57F37DDE772CF00EB91649E683996A&receipt=undefined';

    constructor(private http: HttpClient) { }

    getPins(): Observable<any[]> {
        return this.http.get<any[]>(this.apiUrl)
    }
}
