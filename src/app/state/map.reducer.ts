import { createReducer, on } from '@ngrx/store';
import { LoadPinsSuccess } from './map.actions';

export interface Pin {
    id: string;
    name: string;
    latitude: number;
    longitude: number;
}

export interface MapState {
    pins: Pin[];
    loading: boolean;
    error: any;
}

export const initialState: MapState = {
    pins: [],
    loading: false,
    error: null,
};

export const mapReducer = createReducer(
    initialState,
    on(LoadPinsSuccess, (state, { pins }) => ({
        ...state,
        pins,
        loading: false,
        error: null,
    }))
);
