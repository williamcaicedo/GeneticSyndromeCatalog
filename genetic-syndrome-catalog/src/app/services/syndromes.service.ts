import { OnInit, Injectable } from '@angular/core';
import { forEach } from '@angular/router/src/utils/collection';

import { Catalog } from '../data/catalog';
import { Syndrome } from '../entities/syndrome';
import { Feature } from '../entities/feature';
import * as _ from "lodash";

@Injectable()
export class SyndromeService {

    constructor(protected catalog: Catalog) { 
         for (let s of this.catalog.syndromes) {
            this._populateFeatures(s);
        }
    }
    syndromes: Syndrome[];

    getSyndromes(): Promise<Syndrome[]> {
        return new Promise<Syndrome[]>((resolve, reject) => {
            resolve(this.catalog.syndromes);
        })
    }
    getSyndromeById(id: Number): Promise<Syndrome> {
        return new Promise<Syndrome>((resolve, reject) => {
            let syndrome = _.find(this.catalog.syndromes, function (s: Syndrome) {
                return s.id == id;
            });
            resolve(syndrome);
        })
    }
    _populateFeatures(s: Syndrome) {
        for (let fId of s.feature_ids) {
            s.features.push(_.find(this.catalog.clinicalFeatures, function (f: Feature) {
                return f.id == fId;
            }));
        }
    }
}