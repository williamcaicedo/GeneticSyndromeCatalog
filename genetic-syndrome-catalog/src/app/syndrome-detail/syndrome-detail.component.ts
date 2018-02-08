import { Syndrome } from '../entities/syndrome';
import { ActivatedRoute, Params } from '@angular/router';
import { SyndromeService } from '../services/syndromes.service';
import { Component, OnInit } from '@angular/core';

import 'rxjs/add/operator/switchMap';

@Component({
	selector: 'syndrome-detail',
	templateUrl: 'syndrome-detail.component.html'
})

export class SyndromeDetailComponent implements OnInit {

	syndrome: Syndrome;
	constructor(
		private syndromeService: SyndromeService, 
		private route: ActivatedRoute
	) {}

	ngOnInit() { 
		this.route.params
			.switchMap((params: Params) => this.syndromeService.getSyndromeById(+params['id']))
			.subscribe(syndrome => this.syndrome = syndrome);
	}
}