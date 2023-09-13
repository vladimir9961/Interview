import { createFeatureSelector, createSelector } from '@ngrx/store';
import { MapState } from './map.reducer';

export const selectMapState = createFeatureSelector<MapState>('map');

export const selectPins = createSelector(
    selectMapState,
    (state: MapState) => state.pins
);


