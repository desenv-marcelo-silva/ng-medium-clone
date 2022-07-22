import { Injectable } from '@angular/core';

import { createEffect, Actions, ofType } from '@ngrx/effects';
import { of } from 'rxjs';
import { switchMap, map, catchError } from 'rxjs/operators';

import { AuthService } from 'src/app/auth/services/auth.service';
import { CurrentUserInterface } from 'src/app/shared/types/currentUser.interface';
import { PersistanceService } from 'src/app/shared/services/persistance.service';
import { 
  getCurrentUserAction, 
  getCurrentUserFailureAction, 
  getCurrentUserSuccessAction 
} from 'src/app/auth/store/actions/getCurrentUser.action';

@Injectable()
export class GetCurrentUserEffect {
  constructor(
    private actions$: Actions,
    private readonly authService: AuthService,
    private readonly persistanceService: PersistanceService
  ) {}

  getCurrentUser$ = createEffect(() =>
    this.actions$.pipe(
      ofType(getCurrentUserAction),
      switchMap(() => {
        const token = this.persistanceService.get('currentUserToken');
        if (!token) {
          return of(getCurrentUserFailureAction())
        }
        return this.authService.getCurrentUser().pipe(
          map((currentUser: CurrentUserInterface) => {
            return getCurrentUserSuccessAction({ currentUser });
          }),

          catchError(() => {
            return of(
              getCurrentUserFailureAction()
            );
          })
        );
      })
    )
  );
}
