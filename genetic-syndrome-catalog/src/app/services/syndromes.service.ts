import { OnInit } from '@angular/core';
import { forEach } from '@angular/router/src/utils/collection';

import { Catalog } from '../data/catalog';
import { Syndrome } from '../entities/syndrome';
import { Feature } from '../entities/feature';
import * as _ from "lodash";


export class SyndromeService implements OnInit {

    constructor(protected catalog: Catalog) { }
    syndromes: Syndrome[];
    ngOnInit() {

        for (let s of this.catalog.syndromes) {
            for (let fId of s.feature_ids) {
                s.features.push(_.find(this.catalog.clinicalFeatures, function (f: Feature) {
                    return f.id = fId;
                }));
            }
        }
    }


    getSyndromes(): Promise<Syndrome[]> {
        return new Promise<Syndrome[]>((resolve, reject) => {
            resolve(this.catalog.syndromes);
        })
    }
}