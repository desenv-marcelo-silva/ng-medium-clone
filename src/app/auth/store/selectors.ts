// import { createFeatureSelector } from "@ngrx/store";
import { createSelector } from "@ngrx/store";
import { AppStateInterface } from "src/app/shared/types/appState.interface";
import { AuthStateInterface } from "../types/authState.interface";

// export const authFeatureSelector = createFeatureSelector<
//     AppStateInterface,
//     AuthStateInterface
//     >('auth');

// createFeatureSelector is deprecated
// use this form to select a feature;


export const authFeatureSelector = (
    state: AppStateInterface
): AuthStateInterface => state.auth;

export const isSubmittingSelector = createSelector(
    authFeatureSelector,
    (authState: AuthStateInterface) => authState.isSubmitting
);