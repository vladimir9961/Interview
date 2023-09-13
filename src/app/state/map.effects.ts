import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { map, switchMap } from 'rxjs/operators';
import { LoadPins, LoadPinsSuccess } from './map.actions';
import { MapService } from '../service/map.service';

@Injectable()
export class MapEffects {
    constructor(private actions$: Actions, private mapService: MapService) { }

    loadPins$ = createEffect(() =>
        this.actions$.pipe(
            ofType(LoadPins),
            switchMap(() => {
                return this.mapService.getPins().pipe(
                    map((pins) => {
                        console.log(pins);

                        return LoadPinsSuccess({ pins });
                    })
                );
            })
        )
    );
}
