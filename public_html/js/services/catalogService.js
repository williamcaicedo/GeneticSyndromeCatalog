/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */

var services = angular.module('geneticSyndromeCatalogAppServices');
services.factory('catalogService', ['_', function (_) {
        return {
            
            _syndromes: [
                    {
                        id: 28,
                        name: "S\u00edndrome de Carpenter",
                        synonym: " Acro-c\u00e9falo-poli-sindactilia tipo II",
                        inheritance: "Autos\u00f3mica recesiva",
                        retardation: true,
                        evolution: "El tipo de anormalidades presentes en cada paciente\n\
                determinar\u00e1n sus limitaciones, pudiendo beneficiarse del \n\
                tratamiento ortop\u00e9dico oportuno. Es importante el diagn\u00f3stico temprano\n\
                para corregir la craniosinostosis cuanto antes. Casi todos presentan defectos\n\
                en la articulaci\u00f3n del lenguaje y probemas de audici\u00f3n. No todos\n\
                presentan retardo mental. La obesidad se inicia usualemente en \n\
                la infancia.",
                        clinicalExams: "El diagn\u00f3stico se basa en el cuadro cl\u00ednico y los hallazgos radiol\u00f3gicos.\n\
                Se recomienda realizar pruebas auditivas para descartar sordera conductiva y/o neurosensorial.",
                        bibliography: ["GERSHONI-BARUCH, R. (1990). \"Carpenter Syndrome: Marked Variability of Expression\",\n\
                American Journal of Medical Genetics, Vol. 35: 236-240."],
                        features: [9, 20, 21, 69, 70, 74, 78, 79, 82, 84, 94, 99, 111, 114]
                    },
                    {
                        id: 66,
                        name: "S\u00edndrome de Saethre-Chotzen",
                        synonym: " Acro-c\u00e9falo-poli-sindactilia tipo III",
                        inheritance: "Autos\u00f3mica dominante",
                        retardation: false,
                        retardationNotes: "leve en pocos",
                        evolution: "El cuadro cl\u00ednico se presenta en la infancia y usualmente no afecta el promedio de vida.\n\
                    La apariencia facial mejora con la edad. La inteligencia usualmente es normal aunque algunos\n\
                    pacientes presentan retardo mental leve y a\u00fan no se ha aclarado si esto tiene relaci\u00f3n con el\n\
                    compromiso craneal. La lateralizaci\u00f3n de la entidad produce asimetr\u00eda facial y plagiocefalia\n\
                    estando el lado izquierdo comprometido con m\u00e1s frecuencia.",
                        clinicalExams: "El diagn\u00f3stico se basa en el cuadro cl\u00ednico y radiol\u00f3gico. Se recomiendan RX de cr\u00e1neo, cara\n\
                    clav\u00edculas, manos y pies.",
                        bibliography: ["BIANCHI, E. et al. (1985). \" A Family with Saethre-Chotzen Syndrome\", American Journal of\n\
                    Medical Genetics, Vol. 22: 649-658.", "FRIEDMAN, J. M. et al. (1977). \"Saethre-Chotzen Syndrome: A broad\n\
                    and variable pattern of skeletal malformations\", Journal of Pediatrics, Vol. 91, No. 6, p\u00e1gs. 929-933"],
                        features: [9, 13, 18, 19, 25, 46, 59, 62, 69, 74, 75, 79, 82]
                    },
                    {
                        id: 24,
                        name: "S\u00edndrome de Gorlin",
                        synonym: " S\u00edndrome de carcinoma nevoide de c\u00e9lulas basales",
                        inheritance: "Autos\u00f3mica dominante",
                        retardation: true,
                        retardationNotes: "",
                        evolution: "Las caracter\u00edsticas aparecen en la infancia y se acent\u00faan en la adolescencia.\n\
                    Los nevus pueden malignizarse especialmente en la segunda d\u00e9cada de la vida.\n\
                    Las anomal\u00edas dentales pueden ser de forma y posici\u00f3n o presentarse como quistes y tumores\n\
                    mandibulares y dentales. Pueden aparecer tumores en ri\u00f1\u00f3n, ovarios, meduloblastoma, etc.,\n\
                    y de su detecci\u00f3n temprana y adecuado manejo depende el pron\u00f3stico.",
                        clinicalExams: "El diagn\u00f3stico se basa en el cuadro cl\u00ednico y radiol\u00f3gico. Es importante hacer un\n\
                    seguimiento cercano a estos pacientes en busca de la aparici\u00f3n de quistes, tumores o\n\
                    malignizaci\u00f3n de los nevus.",
                        bibliography: ["FERRIER, P. E. and HINRICHS, W. L. (1987). \"Basal-Cell Carcinoma Syndrome\", American\n\
                    Journal of Diseases of Children, Vol. 113: 538-545.", "GORLIN, R. J. et al. (1990).\n\
                    \"Syndromes of the Head and Neck\", Third Edition, Oxford University Press, p\u00e1gs. 372-380."],
                        features: [11, 41, 48, 56, 62, 86, 114]
                    },
                    {
                        id: 114,
                        name: "Osteodistrofia hereditaria de Albright",
                        synonym: "Pseudo-hipoparatiroidismo",
                        inheritance: "Dominante ligada a X",
                        retardation: true,
                        retardationNotes: "",
                        evolution: "Existe marcada variaci\u00f3n fenot\u00edpica. La hipocalemia es aparente en la ni\u00f1ez\n\
                    y las convulsiones son el s\u00edntoma m\u00e1s frecuente, manifest\u00e1ndose m\u00e1s en per\u00edodos de mayor\n\
                    utilizaci\u00f3n de calcio como son la adolescencia y los embarazos. Puede requerirse manejo\n\
                    con vitamina D. Se han descrito dos tipos en esta entidad, los cuales se pueden diferenciar\n\
                    por su respuesta a la paratohormona: el tipo I se caracteriza por disminuci\u00f3n en la excreci\u00f3n\n\
                    urinaria de AMPc y en el tipo II su excreci\u00f3n es normal.",
                        clinicalExams: "El diagn\u00f3stico se basa en el cuadro cl\u00ednico y oruebas bioqu\u00edmicas que muestran las alteraciones\n\
                        metab\u00f3licas (hipocalcemia o hiperfosfemia variables). Radiol\u00f3gicamente se observa\n\
                        calcificaciones en tejidos blandos.",
                        bibliography: ["DIGEORGE, A. M. (1975). \"Albright syndrome: Is it coming of age?\", The Journal of\n\
                        Pediatrics, Vol. 87, No. 6, p\u00e1gs. 1018-1020. ", "FITCH, N. (1982). \"Albright's Hereditary\n\
                        Osteodystrophy: A Review\", American Journal of Medical Genetics, Vol. 11: 11-29."],
                        features: [14, 37, 40, 56, 61, 69, 77, 103, 111, 114, 115]
                    },
                    {
                        id: 17,
                        name: "Displasia Facio-Aur\u00edculo-Vertebral",
                        synonym: "S\u00edndrome de Goldenhar",
                        inheritance: "Presentaci\u00f3n espor\u00e1dica",
                        retardation: false,
                        retardationNotes: "presente en pocos",
                        evolution: "El diagn\u00f3stico se hace desde el nacimiento y usualmente est\u00e1n comprometidas las estructuras\n\
                    que se desarrollan a partir del 1o. y 2o. arcos branquiales. Al parecer la severidad del desorden\n\
                    est\u00e1 dada por el nivel al cual desciende el techo de la cavidad timp\u00e1nica y de si este est\u00e1 o no\n\
                    por debajo del nivel de la fosa craneal media. Usualmente est\u00e1 indicada cirug\u00eda pl\u00e1stica.\n\
                    Se ha visto retardo mental asociado cuando hay anomal\u00edas oculares serias como microftalmos.\n\
                    Con frecuencia se encuentran en los ojos quistes dermoides epibulares uni o bilaterales.",
                        clinicalExams: "El diagn\u00f3stico es cl\u00ednico y radiol\u00f3gico. Se sugiere realizar tomograf\u00eda computarizada para\n\
                    evaluar los huesos del o\u00eddo medio como parte del estudio de audici\u00f3n.",
                        bibliography: ["FEINGOLD, M. and BAUM, J. \"Goldenhar's Syndrome\", Am j Dis Child, Vol. 132: 136-138. ",
                            "GORLIN, R. J. et al. (1990). \"Syndromes of the Head and Neck\", Third Edition, Oxford\n\
                    University Press, p\u00e1gs. 641-646."],
                        features: [4, 18, 31, 32, 45, 46, 51, 59, 67]
                    },
                    {
                        id: 70,
                        name: "S\u00edndrome de Treacher-Collins",
                        synonym: "Disostosis mand\u00edbulo-facial",
                        inheritance: "Autos\u00f3mica dominante",
                        retardation: false,
                        retardationNotes: "",
                        evolution: "El diagn\u00f3stico puede hacerse desde el nacimiento. Es importante detectar tempranamente la sordera\n\
                    e iniciar cuanto antes terapias de lenguaje. El pron\u00f3stico en general es bueno, pero en ocasiones\n\
                    pueden presentarse complicaciones respiratorias severas. Los tratamientos de ortodoncia y las cirug\u00edas\n\
                    pl\u00e1stica y otorrinolaringol\u00f3gica mejoran notablemente su calidad de vida.",
                        clinicalExams: "El diagn\u00f3stico es cl\u00ednico. dseben realizarse pruebas auditivas buscando sordera. Se recomienda\n\
                    investigar antecedentes de ingesti\u00f3n de derivados de la vitamina A, durante el embarazo, en el \n\
                    diagn\u00f3stico diferencial.",
                        bibliography: ["SULIK, K. K. et al. (1987). \"Mandibulofacial Dysostosis (Treacher Collins Syndrome): A New \n\
                    Proposal fot its Pathogenesis\", American Journal of Medical Genetics, Vol. 27: 359-372"],
                        features: [4, 12, 22, 32, 45, 46, 49, 51, 54, 59]
                    },
                    {
                        id: 47,
                        name: "Amioplasia Cong\u00e9nita",
                        synonym: "Artrogriposis m\u00faltiple cong\u00e9nita",
                        inheritance: "Presentaci\u00f3n espor\u00e1dica",
                        retardation: false,
                        retardationNotes: "",
                        evolution: "Se diagnostica al nacimiento. Usualmente cursan con inteligencia normal y responden bien a los\n\
                    tratamientos quir\u00fargicos y ortop\u00e9dicos. Aquellos pacientes con malformaciones gastrointestinales\n\
                    como gastrosquisis y atresia intestinal tienen mayor mortalidad por complicaciones en el per\u00edodo\n\
                    neonatal. Se desconoce la cusa de esta entidad, sin embargo se cree que se puede tratar de un proceso\n\
                    de disrupci\u00f3n vascular qu eocurre despu\u00e9s de que el desarrollo embriol\u00f3gico se ha completado.",
                        clinicalExams: "El diagn\u00f3stico es cl\u00ednico. Cuando se presenta solo en hombres en una familia o es m\u00e1s leve\n\
                    en mujeres, deben descartarse aquellas artogriposis ligadas a X.",
                        bibliography: ["COLLINS, D. L. et al. (1986). \"Multiple Intestinal Atresia and Amyoplasia Congenita in \n\
                    Four Unrelated Infats: A New Association\", Journal of Pediatric Surgery, Vol 21, No. 4,\n\
                    p\u00e1gs. 331-333.",
                            "REID, C. O. M. V. et al. (1986). \"Association of Amyloplasia with Gastroschisis, Bowel Atresia,\n\
                    and Defects of the Muscular Layer of the Trunk\", American Journal of Medical Genetics, Vol.\n\
                    24: 701-710."],
                        features: [14, 47, 83, 84, 88, 104]
                    },
                    {
                        id: 96,
                        name: "S\u00edndrome de Hurler",
                        synonym: "Mucoliposacaridosis tipo I",
                        inheritance: "Autos\u00f3mica recesiva",
                        retardation: true,
                        retardationNotes: "",
                        evolution: "El cuadro cl\u00ednico s\u00f3lo es evidente alrededor de los 2 a\u00f1os de edad, cuando adem\u00e1s de iniciarse\n\
                    los cambios en cara se presenta limitaci\u00f3n en movimiento de caderas, deterioro mental y aumento en\n\
                    la frecuencia de infecciones respiratorias, las cuales pueden llevar a la muerte, asociadas a \n\
                    complicaciones cardiacas.",
                        clinicalExams: "El diagn\u00f3stico se basa en el cuadro cl\u00ednico, radiol\u00f3gico (disostosis m\u00faltiple) y los hallazgos de \n\
                    laboratorio. La entidad se presenta por d\u00e9ficit de alpha-L-Iduronidasa, lo cual se puede medir en \n\
                    cultivo de fibroblastos y leucocitos. En orina se presenta aumento en la excreci\u00f3n de glucosaminoglicanos,\n\
                    predominando dermat\u00e1n sulfato y hepar\u00e1n sulfato. Se utilizan pruebas diagn\u00f3sticas como el Test de Azul\n\
                    de Toluidina. El estudio histopatol\u00f3gico muestra ac\u00familo de mucopolisac\u00e1ridos en tejidos y en el\n\
                    coraz\u00f3n se observan cambios de fibroelastosis endoc\u00e1rdica. Se recomienda un estudio electro y\n\
                    ecocardiogr\u00e1fico.",
                        bibliography: ["ROUBICEK, M. et al. (1985). \"The Clinical Spectrum of alpha-L-Iduronidase Deficiency\",\n\
                    American Journal of Medical Genetics, Vol. 20: 471-481.",
                            "STEPHAN, M. J. et al. (1989). \"Mucopolysaccharidosis I Presenting With Endocardial Fibroelastosis\n\
                    of Infancy\". American Journal of Diseases of Children, Vol. 143: 782-784."],
                        features: [8, 11, 17, 21, 36, 40, 66, 83, 91, 94, 95, 96, 114, 115]
                    },
                    {
                        id: 1,
                        name: "Displasia Campom\u00e9lica",
                        synonym: "Enanismo campom\u00e9lico",
                        inheritance: "Autos\u00f3mica recesiva",
                        retardation: true,
                        retardationNotes: "",
                        evolution: "Se dio el t\u00e9rmino \"campom\u00e9lico\" queriendo significar \"extremidades arqueadas\", siendo esta la\n\
                    caracter\u00edstica m\u00e1s importante de la entidad. La mayor\u00eda de los pacientes mueren de insuficiencia\n\
                    respiratoria enn el per\u00edodo neonatal o en infancia temprana por infecci\u00f3n respiratoria debida a \n\
                    broncoaspiraci\u00f3n. Aquellos que sobreviven presentan falla en el crecimiento, dificultades para la\n\
                    alimentaci\u00f3n y evidencia de alteraci\u00f3n severa en el Sistema Nervioso Central. En los hombres (46XY)\n\
                    es frecuente encontrar un fenotipo femenino por disgenesia gonadal. Usualmente las extremidades superiores\n\
                    no est\u00e1n arqueadas pero s\u00ed pueden estar ligeramente acortadas. Casi todos los pacientes han muerto\n\
                    antes de los 10 meses de edad, aunque se ha descrito un paciente de 17 a\u00f1os. Todos los que han sobrevivido\n\
                    presentan retardo mental y sordera.",
                        clinicalExams: "El diagn\u00f3stico es cl\u00ednico y radiol\u00f3gico. Se encuentra falta de osificaci\u00f3n de las ep\u00edfisis proximales\n\
                    de tibia, f\u00e9mur y astr\u00e1galo; ausencia de mineralizaci\u00f3n del estern\u00f3n. En pacientes con fenotipo femenino\n\
                    es obligatorio realizar cariotipo para descartar un genotipo masculinoo con disgenesia gonada, lo cual\n\
                    cual ocurre en el 50% de los casos.",
                        bibliography: ["HALL, B. D. and SPRANGE, J. W. (1980). \"Campomelic Dysplasia\", Am J Dis Child, Vol. 134: 285-289.",
                            "HOUSTON, C. S. et al. (1983). \"The Campomelic Syndrome\", American Journal of Medical Genetics, Vol.. 13: 3-28."],
                        features: [6, 8, 11, 13, 40, 47, 49, 57, 59, 62, 65, 66, 67, 72, 80, 82, 114, 115]
                    },
                    {
                        id: 2,
                        name: "S\u00edndrome de Russell-Silver",
                        synonym: "S\u00edndrome de Silver-Russell",
                        inheritance: "Presentaci\u00f3n espor\u00e1dica",
                        retardation: false,
                        retardationNotes: "leve en el 35%",
                        evolution: "La baja estatura se presenta desde antes del nacimiento y se mantiene a trav\u00e9s de la ni\u00f1ez, alcanzando\n\
                    una estatura promedio en la edad adulta de 149 cm para los hombres y 138 cm para las mujeres. La asimetr\u00eda\n\
                    m\u00fasculo-esquel\u00e9tica puede comprometer solo la cabeza, el tronco o las extremidades y ocasionalmente ser\n\
                    total, acompa\u00f1\u00e1ndose de pobre desarrollo muscular y de la motricidad gruesa. Hay aumento de sudoraci\u00f3n\n\
                    en la infancia. La hipoglicemia se presenta entre los 10 meses y 3 a\u00f1os, despu\u00e9s de peridos cortos de\n\
                    ayuno. El tratamiento es sintom\u00e1tico.",
                        clinicalExams: "El diagn\u00f3stico es cl\u00ednico y radiol\u00f3gico. Los RX muestran cierre tard\u00edo de la fontanela anterior\n\
                    y la edad \u00f3sea est\u00e1 retrasada con relaci\u00f3n a la edad cronol\u00f3gica y al desarrollo sexual. Puede encontrarse\n\
                    el h\u00famero y la falange media del 5o. dedo acortados. En algunos casos se han encontrado niveles elevados\n\
                    de gonadatropinas urinarias y en otros hay deficiencia de hormona de crecimiento. Se recomienda realizar\n\
                    evaluaciones peri\u00f3dicas para descartar la presencia de tumores renales o adrenales.",
                        bibliography: ["CASSIDY, S. B. et al. (1986). \"Russell-Silver Syndrome and Hypopituitarism\", Am J Dis Child, Vol. 140:\n\
                    155-159.",
                            "SaaL, H. M. et al-. (1985). \"Reevaluation of Russell-Silver syndrome\", The Journal of Pediatrics,\n\
                    Vol. 107: 733-737."],
                        features: [10, 11, 15, 24, 47, 74, 86, 93, 103, 113, 115]
                    },
                    {
                        id: 83,
                        name: "S\u00edndrome de Smith-Lemli-Opitz",
                        synonym: "S\u00edndrome RSH",
                        inheritance: "Autosómica recesiva",
                        retardation: true,
                        retardationNotes: "",
                        evolution: "Se ha descrito disminución en los movimientos fetales y usualmente bajo peso y presentación de nalgas al nacer.\n\
                    Desde el principio se aprecia la facies característica con narinas antevertidas y la sindactilia del 2do y 3er dedos de los pies\n\
                    e hipospadias y criptorquidia en hombres. Se presentan dificultades en la alimentación, falla en el crecimiento, vómito y \n\
                    comportamiento irritable en el periodo neonatal. Hay una mayor susceptibilidad a infecciones, especialmente respiratorias, las cuales\n\
                    usualmente determinan la sobrevida. La mortalidad neonatal en el primer año es alta. Pocos pacientes llegan a la edad adulta. La\n\
                    entidad es mucho más frecuente en hombres. Se ha descrito un tipo II más severo, con múltiples anomalías viscerales y frecuente\n\
                    mortalidad neonatal.",
                        clinicalExams: "El diagnóstico se basa en el cuadro clínico. Se ha sugerido que el gen se encuentra en el extremo terminal\n\
                    del brazo largo del cromosoma 7. El diagnóstico en mujeres puede ser muy difícil.",
                        bibliography: ["CURRY, C. J. R. et al. (1987). \"Smith-Lemli-Opitz Syndrome-type II\" American Journal of Medical Genetics,\n\
                    Vol. 26:45-57.",
                            "CHERSTVOY, E. D. et al. (1984). \"The Smith-Lemli-opitz Syndrome\", Virchows Archiv A, Vol. 404: 413-425."],
                        features: [7, 21, 27, 25, 47, 57, 79, 82, 99, 100, 114, 115]
                    },
                    {
                        id: 120,
                        name: "Displasia Metatrópica",
                        synonym: "Enanismo metatrópico de Maroteaux",
                        inheritance: "Autosómica recesiva (la mayoría no-letal, se han descrito casos de herencia autosómica dominante no letal y otros\n\
                    de herencia autosómica recesiva letal)",
                        retardation: false,
                        retardationNotes: "",
                        evolution: "Al nacer se encuentra un niño con facies normal, extremidades cortas y un tronco alargado y angosto. Estas\n\
                    características van cambiando en la medida en que se acentúa la displasia ósea, lo cual llevó a darle el nombre de metatrópica\n\
                    (del griego \"metatropos\": apariencia cambiante). Las alteraciones vertebrales (aniso y platispondilia) y la cifoescoliosis\n\
                    secundaria son progresivas llevando a un acortamiento y deformidad del tórax, lo que puede observarse desde la niñez temprana.\n\
                    La severidad de la alteración torácica puede llevar a muerte temprana por problemas respiratorios. La hipoplasia del odontoides\n\
                    y la inestabilidad atlanto-axial en las vértebras cervicales puede tener serias consecuencias neurológicas (cuadriplegia). El\n\
                    desarrollo mental es normal. La talla adulta puede estar entre 110 y 120 cm en los casos severos. La mayoría de los pacientes\n\
                    sobreviven hasta la edad adulta y su principal complicación es la escoliosis progresiva.",
                        clinicalExams: "El diagnóstico se basa en el cuadro clínico y los hallazgos radiológicos.",
                        bibliography: ["BECK, M. et al (1983). \"Heterogeneity of Metatropic Dysplasia\", Eur. J. Pediatr., Vol. 140: 231-237.",
                            "JENKINS, P. et al. (1970). \"Metatropic dwarfism\", Br. J. Radiol., Vol 43: 561.565."],
                        features: [62, 65, 66, 67, 72, 83, 115]
                    }

                

                ],
            getAllSyndromes: function () {
                return this._syndromes;
            },
            
            getSyndromeById: function (sid) {
                return _.where(this._syndromes, {id: sid})[0];
            },
            
            getAllFeatures: function () {
                return this._features;
            },
            
            getFeatureById: function (fid) {
                return _.where(this._features, {id: fid})[0]; 
            },
            _features: [
                    {id: 1,
                        name: "Hipotonicidad"
                    },
                    {id: 2,
                        name: "Hipertonicidad"
                    },
                    {id: 3,
                        name: "Ataxia"
                    },
                    {id: 4,
                        name: "Sordera"
                    },
                    {id: 5,
                        name: "Encefalocele"
                    },
                    {id: 6,
                        name: "Hidrocefalia"
                    },
                    {id: 7,
                        name: "Microcefalia"
                    },
                    {id: 8,
                        name: "Macrocr\u00e1nea"
                    },
                    {id: 9,
                        name: "Craniosinostosis y/o braquicefalia"
                    },
                    {id: 10,
                        name: "Cierre tard\u00edo de fontanelas"
                    },
                    {id: 11,
                        name: "Abombamiento frontal, frente y/o arcos supraorbitarios"
                    },
                    {id: 12,
                        name: "Anomal\u00edas en el patr\u00f3n de cuero cabelludo y vello facial (incluye cabello ensortijado, proyecci\u00f3n a mejillas, etc.)"
                    },
                    {id: 13,
                        name: "Facies plana"
                    },
                    {id: 14,
                        name: "Facies redonda"
                    },
                    {id: 15,
                        name: "Facies triangular"
                    },
                    {id: 16,
                        name: "Facies en m\u00e1scara"
                    },
                    {id: 17,
                        name: "Facies grosera"
                    },
                    {id: 18,
                        name: "Asimetr\u00eda facial"
                    },
                    {id: 19,
                        name: "Hipertelorismo o hipotelorismo"
                    },
                    {id: 20,
                        name: "Distopia cantorum"
                    },
                    {id: 21,
                        name: "Pliegue epic\u00e1ntico"
                    },
                    {id: 22,
                        name: "Desviaci\u00f3n de fisuras palpebrales"
                    },
                    {id: 23,
                        name: "Sinofris"
                    },
                    {id: 24,
                        name: "Proptosis y ojos prominentes"
                    },
                    {id: 25,
                        name: "Ptosis, blefarofimosis o anquiloblefaron"
                    },
                    {id: 26,
                        name: "Defectos en ductus lacrimales"
                    },
                    {id: 27,
                        name: "Estrabismo"
                    },
                    {id: 28,
                        name: "Nistagmus"
                    },
                    {id: 29,
                        name: "Miop\u00eda"
                    },
                    {id: 30,
                        name: "Escleras azules"
                    },
                    {id: 31,
                        name: "Microftalmia"
                    },
                    {id: 32,
                        name: "Coloboma o una de sus variantes"
                    },
                    {id: 33,
                        name: "Anomal\u00edas del iris"
                    },
                    {id: 34,
                        name: "Glaucoma"
                    },
                    {id: 35,
                        name: "Anomal\u00edas del tama\u00f1o o la forma de la c\u00f3rnea"
                    },
                    {id: 36,
                        name: "Opacidad corneana"
                    },
                    {id: 37,
                        name: "Cataratas y/o luxaci\u00f3n de cristalino"
                    },
                    {id: 38,
                        name: "Anomal\u00edas de pigmentaci\u00f3n retiniana"
                    },
                    {id: 39,
                        name: "Desprendimiento de retina"
                    },
                    {id: 40,
                        name: "Puente nasal deprimido"
                    },
                    {id: 41,
                        name: "Puente nasal o nariz prominente"
                    },
                    {id: 42,
                        name: "Nariz peque\u00f1a"
                    },
                    {id: 43,
                        name: "Hipoplasia de alas nasales o nariz en \"pico de loro\""
                    },
                    {id: 44,
                        name: "Atresia de coanas"
                    },
                    {id: 45,
                        name: "Hipoplasia malar o mediofacial"
                    },
                    {id: 46,
                        name: "Hipoplasia maxilar"
                    },
                    {id: 47,
                        name: "Micrognatia e hipoplasia mandibular"
                    },
                    {id: 48,
                        name: "Prognatismo"
                    },
                    {id: 49,
                        name: "Labio leporino y/o paladar hendido y/o \u00favula b\u00edfida"
                    },
                    {id: 50,
                        name: "Filtro anormal"
                    },
                    {id: 51,
                        name: "Micro o macrostom\u00eda"
                    },
                    {id: 52,
                        name: "Lengua hendida o irregular en forma y/o posici\u00f3n"
                    },
                    {id: 53,
                        name: "Macroglosia o microglosia"
                    },
                    {id: 54,
                        name: "Anomal\u00edas en la laringe"
                    },
                    {id: 55,
                        name: "Anodoncia o hipodoncia"
                    },
                    {id: 56,
                        name: "Otras anomal\u00edas dentales"
                    },
                    {id: 57,
                        name: "Oidos de implantaci\u00f3n baja o rotados"
                    },
                    {id: 58,
                        name: "Pabellones auriculares grandes"
                    },
                    {id: 59,
                        name: "Malformaci\u00f3n auricular incluyendo ap\u00e9ndices pre-auriculares"
                    },
                    {id: 60,
                        name: "Cuello redundante"
                    },
                    {id: 61,
                        name: "Cuello corto"
                    },
                    {id: 62,
                        name: "Hipoplasia u otras anomal\u00edas de clav\u00edculas, costillas, omoplato"
                    },
                    {id: 63,
                        name: "Pectus excavatum o carinatum"
                    },
                    {id: 64,
                        name: "Hipoplasia o ausencia del pectoral mayor"
                    },
                    {id: 65,
                        name: "Caja tor\u00e1cica peque\u00f1a o anormal"
                    },
                    {id: 66,
                        name: "Escoliosis y/o c\u00edfosis y/o lordosis"
                    },
                    {id: 67,
                        name: "Otros defectos vertebrales"
                    },
                    {id: 68,
                        name: "Aracnodactilia y/o manos y/o pies grandes"
                    },
                    {id: 69,
                        name: "Braquidactilia y/o manos y/o pies peque\u00f1os"
                    },
                    {id: 70,
                        name: "Camptodactilia"
                    },
                    {id: 71,
                        name: "Fracturas"
                    },
                    {id: 72,
                        name: "Extremidades cortas"
                    },
                    {id: 73,
                        name: "Reducci\u00f3n de extremidades"
                    },
                    {id: 74,
                        name: "Clinodactilia"
                    },
                    {id: 75,
                        name: "Dedos gruesos y/o falange distal anormal en forma o tama\u00f1o"
                    },
                    {id: 76,
                        name: "Anomal\u00edas del pulgar radio o grueso artejo hallux valgus"
                    },
                    {id: 77,
                        name: "Hipoplasia o agenesia metacarp\u00edana o fal\u00e1ngica"
                    },
                    {id: 78,
                        name: "Polidactilia"
                    },
                    {id: 79,
                        name: "Sindactilia"
                    },
                    {id: 80,
                        name: "Displasia patelar o de tibia encurvamiento de huesos largos"
                    },
                    {id: 81,
                        name: "Hipoplasia ungueal"
                    },
                    {id: 82,
                        name: "Transtornos en dermatoglifos o pliegues de ﬂexi\u00f3n hoyuelos"
                    },
                    {id: 83,
                        name: "Contracturas articulares o motilidad articular disminuida"
                    },
                    {id: 84,
                        name: "Hiperelasticidad o luxaciones articulares"
                    },
                    {id: 85,
                        name: "Pie equino varo"
                    },
                    {id: 86,
                        name: "Pigmentaci\u00f3n anormal en piel"
                    },
                    {id: 87,
                        name: "Piel gruesa o icti\u00f3tica o redundante"
                    },
                    {id: 88,
                        name: "Hemangiomas o telangiectasias equ\u00edmosis f\u00edstulas A-V v\u00e1rices"
                    },
                    {id: 89,
                        name: "Dermatitis fotosensitiva. eczema o eritema fragilidad capilar y/o de piel"
                    },
                    {id: 90,
                        name: "Alopecia"
                    },
                    {id: 91,
                        name: "Hirsut\u00edsmo"
                    },
                    {id: 92,
                        name: "Otras anomal\u00edas del cabello"
                    },
                    {id: 93,
                        name: "Anomal\u00edas de sudoraci\u00f3n"
                    },
                    {id: 94,
                        name: "Cardiopat\u00edas"
                    },
                    {id: 95,
                        name: "Hernias onfalocele o defectos de la pared abdominal _"
                    },
                    {id: 96,
                        name: "Hepatomegalia hepatoesplenomegal\u00eda o malformaciones hep\u00e1ticas o spl\u00e9nicas"
                    },
                    {id: 97,
                        name: "F\u00edstula traqueoesof\u00e1gica o atresia"
                    },
                    {id: 98,
                        name: "Malformaci\u00f3n o disfunci\u00f3n renal o de v\u00edas urinarias"
                    },
                    {id: 99,
                        name: "Anomal\u00eda genital incluyendo criptorquidia"
                    },
                    {id: 100,
                        name: "Anomal\u00edas vaginales"
                    },
                    {id: 101,
                        name: "Defectos anorectales"
                    },
                    {id: 102,
                        name: "H\u00edpogonadismo"
                    },
                    {id: 103,
                        name: "Otros transtornos endocrinol\u00f3gicos"
                    },
                    {id: 104,
                        name: "Lipoatrofia y/o mioatrofia"
                    },
                    {id: 105,
                        name: "Inmunodeficiencia"
                    },
                    {id: 106,
                        name: "Anemia"
                    },
                    {id: 107,
                        name: "Trombocitopenia pancitopenia"
                    },
                    {id: 108,
                        name: "Leucocitosis policitemia"
                    },
                    {id: 109,
                        name: "Malignidad linforeticular"
                    },
                    {id: 110,
                        name: "Otras malignidades"
                    },
                    {id: 111,
                        name: "Obesidad"
                    },
                    {id: 112,
                        name: "Macrosom\u00eda, sobrecrecimiento"
                    },
                    {id: 113,
                        name: "Asimetr\u00eda corporal"
                    },
                    {id: 114,
                        name: "Retardo mental"
                    },
                    {id: 115,
                        name: "Baja talla retardo en el crecimiento"
                    },
                    {id: 116,
                        name: "Crecimiento acelerado o talla alta"
                    },
                    {id: 117,
                        name: "Atroﬁa o hipoplasia cerebelar"
                    },
                    {id: 118,
                        name: "Miotonia"
                    },
                    {id: 119,
                        name: "Quistes branquiales"
                    },
                    {id: 120,
                        name: "Tronco corto"
                    }

                ]
        };
    }]);

