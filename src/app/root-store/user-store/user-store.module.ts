import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {EffectsModule} from '@ngrx/effects';

import {StoreModule} from '@ngrx/store';
import {UserReducer} from './reducer';
import {UserEffects} from './effects';

@NgModule({
  imports: [
    CommonModule,
    StoreModule.forFeature('user', UserReducer),
    EffectsModule.forFeature([UserEffects])
  ],
  providers: []
})
export class UserStoreModule {
}
