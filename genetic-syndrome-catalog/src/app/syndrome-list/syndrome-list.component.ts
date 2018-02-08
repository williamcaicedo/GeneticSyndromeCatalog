import { SyndromeService } from '../services/syndromes.service';
import { Syndrome } from '../entities/syndrome';
import { Component, OnInit } from '@angular/core';

@Component({
	selector: 'syndrome-list',
	templateUrl: 'syndrome-list.component.html'
})

export class SyndromeListComponent implements OnInit {

	syndromes: Syndrome[];
	constructor(private syndromeService: SyndromeService) {}
	ngOnInit() { 
		this.syndromeService.getSyndromes().then(syndromes => {this.syndromes = syndromes});
	}
}