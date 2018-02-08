import { TestBed, inject } from '@angular/core/testing';

import { SyndromeDetailComponent } from './syndrome-detail.component';

describe('a syndrome-detail component', () => {
	let component: SyndromeDetailComponent;

	// register all needed dependencies
	beforeEach(() => {
		TestBed.configureTestingModule({
			providers: [
				SyndromeDetailComponent
			]
		});
	});

	// instantiation through framework injection
	beforeEach(inject([SyndromeDetailComponent], (SyndromeDetailComponent) => {
		component = SyndromeDetailComponent;
	}));

	it('should have an instance', () => {
		expect(component).toBeDefined();
	});
});