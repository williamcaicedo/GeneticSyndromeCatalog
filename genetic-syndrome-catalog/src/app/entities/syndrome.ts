import { Feature } from "./feature";

export interface Syndrome {


    id: Number,
    name: string,
    synonym: string,
    inheritance: string,
    retardation: boolean,
    retardationNotes: string,
    evolution: string,
    clinicalExams: string,
    bibliography: string[],
    feature_ids: number[],
    features: Feature[],
    gene_locus: string,
    site: string,
    genetic_anomaly: string,
    omim: string,

}