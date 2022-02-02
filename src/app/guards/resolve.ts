import { Injectable } from "@angular/core";
import { ActivatedRouteSnapshot, Resolve, ResolveData, RouterStateSnapshot } from "@angular/router";
import { Observable } from "rxjs";

export interface ReolveData {
	name: string
}

@Injectable({
	providedIn: "root"
})

export class Resolver implements Resolve<ResolveData> {

	resolve(
		route: ActivatedRouteSnapshot,
		state: RouterStateSnapshot
	): Observable<ResolveData> | Promise<ResolveData> | ResolveData {
		let res: ResolveData = {
			name: "Resolve"
		};
		return res;
	}
}