import { Injectable } from "@angular/core";
import { ActivatedRouteSnapshot, CanDeactivate, RouterStateSnapshot, UrlTree } from "@angular/router";
import { Observable } from "rxjs";
import { NoneComponent } from "../encaptulation/none/none.component";

export interface IDeactivateComponent {
	canExit: () => Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree;
}

@Injectable({
	providedIn: "root"
})


export class CanDeActive implements CanDeactivate<IDeactivateComponent> {

	constructor() {
		console.log('consss');
	}

	canDeactivate(component: IDeactivateComponent,
		route: ActivatedRouteSnapshot,
		state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
			return window.confirm('Are you sure?');
	}
}