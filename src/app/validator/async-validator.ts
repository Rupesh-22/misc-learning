import { Injectable } from "@angular/core";
import { AbstractControl, AsyncValidator, ValidationErrors } from "@angular/forms";
import { catchError, map, Observable, of } from "rxjs";

export interface Hero {
	isAlterEgoTaken: (ego: string) => Observable<boolean>
}
