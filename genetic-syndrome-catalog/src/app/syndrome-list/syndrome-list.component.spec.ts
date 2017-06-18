import { TestBed, inject } from '@angular/core/testing';

import { SyndromeListComponent } from './syndrome-list.component';

describe('a syndrome-list component', () => {
	let component: SyndromeListComponent;

	// register all needed dependencies
	beforeEach(() => {
		TestBed.configureTestingModule({
			providers: [
				SyndromeListComponent
			]
		});
	});

	// instantiation through framework injection
	beforeEach(inject([SyndromeListComponent], (SyndromeListComponent) => {
		component = SyndromeListComponent;
	}));

	it('should have an instance', () => {
		expect(component).toBeDefined();
	});
});