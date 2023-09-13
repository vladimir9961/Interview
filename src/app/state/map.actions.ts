import { createAction, props } from '@ngrx/store';

export const LoadPins = createAction('[Map] Load Pins');
export const LoadPinsSuccess = createAction('[Map] Load Pins Success', props<{ pins: any[] }>());

