import { Injectable } from "@angular/core";
import { createEffect, Actions, ofType } from "@ngrx/effects";
import { registerAction, registerFailureAction, registerSuccessAction } from "src/app/auth/store/actions/register.action";
import { switchMap, map, catchError } from 'rxjs/operators';
import { of } from 'rxjs';
import { AuthService } from "../../services/auth.service";
import { CurrentUserInterface } from "src/app/shared/types/currentUser.interface";

@Injectable()
export class RegisterEffect {
    constructor(
        private actions$: Actions,
        private authService: AuthService) { }

    register$ = createEffect(() =>
        this.actions$.pipe(
            ofType(registerAction),
            switchMap(({ request }) => {
                return this.authService.register(request).pipe(
                    map((currentUser: CurrentUserInterface) => {
                        return registerSuccessAction({ currentUser })
                    }),

                    catchError(() => {
                        return of(registerFailureAction())
                    })
                )
            })
        )
    );
}