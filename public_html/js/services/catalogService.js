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
                    inheritance: "Autos\u00f3mica recesiva",
                    retardation: true,
                    retardationNotes: "",
                    evolution: "Se ha descrito disminuci\u00f3n en los movimientos fetales y usualmente bajo peso y presentaci\u00f3n de nalgas al nacer.\n\
                    Desde el principio se aprecia la facies caracter\u00edstica con narinas antevertidas y la sindactilia del 2do y 3er dedos de los pies\n\
                    e hipospadias y criptorquidia en hombres. Se presentan dificultades en la alimentaci\u00f3n, falla en el crecimiento, v\u00f3mito y \n\
                    comportamiento irritable en el periodo neonatal. Hay una mayor susceptibilidad a infecciones, especialmente respiratorias, las cuales\n\
                    usualmente determinan la sobrevida. La mortalidad neonatal en el primer a\u00f1o es alta. Pocos pacientes llegan a la edad adulta. La\n\
                    entidad es mucho m\u00e1s frecuente en hombres. Se ha descrito un tipo II m\u00e1s severo, con m\u00faltiples anomal\u00edas viscerales y frecuente\n\
                    mortalidad neonatal.",
                    clinicalExams: "El diagn\u00f3stico se basa en el cuadro cl\u00ednico. Se ha sugerido que el gen se encuentra en el extremo terminal\n\
                    del brazo largo del cromosoma 7. El diagn\u00f3stico en mujeres puede ser muy dif\u00edcil.",
                    bibliography: ["CURRY, C. J. R. et al. (1987). \"Smith-Lemli-Opitz Syndrome-type II\" American Journal of Medical Genetics,\n\
                    Vol. 26:45-57.",
                        "CHERSTVOY, E. D. et al. (1984). \"The Smith-Lemli-opitz Syndrome\", Virchows Archiv A, Vol. 404: 413-425."],
                    features: [7, 21, 27, 25, 47, 57, 79, 82, 99, 100, 114, 115]
                },
                {
                    id: 120,
                    name: "Displasia Metatr\u00f3pica",
                    synonym: "Enanismo metatr\u00f3pico de Maroteaux",
                    inheritance: "Autos\u00f3mica recesiva (la mayor\u00eda no-letal, se han descrito casos de herencia autos\u00f3mica dominante no letal y otros\n\
                    de herencia autos\u00f3mica recesiva letal)",
                    retardation: false,
                    retardationNotes: "",
                    evolution: "Al nacer se encuentra un ni\u00f1o con facies normal, extremidades cortas y un tronco alargado y angosto. Estas\n\
                    caracter\u00edsticas van cambiando en la medida en que se acent\u00faa la displasia \u00f3sea, lo cual llev\u00f3 a darle el nombre de metatr\u00f3pica\n\
                    (del griego \"metatropos\": apariencia cambiante). Las alteraciones vertebrales (aniso y platispondilia) y la cifoescoliosis\n\
                    secundaria son progresivas llevando a un acortamiento y deformidad del t\u00f3rax, lo que puede observarse desde la ni\u00f1ez temprana.\n\
                    La severidad de la alteraci\u00f3n tor\u00e1cica puede llevar a muerte temprana por problemas respiratorios. La hipoplasia del odontoides\n\
                    y la inestabilidad atlanto-axial en las v\u00e9rtebras cervicales puede tener serias consecuencias neurol\u00f3gicas (cuadriplegia). El\n\
                    desarrollo mental es normal. La talla adulta puede estar entre 110 y 120 cm en los casos severos. La mayor\u00eda de los pacientes\n\
                    sobreviven hasta la edad adulta y su principal complicaci\u00f3n es la escoliosis progresiva.",
                    clinicalExams: "El diagn\u00f3stico se basa en el cuadro cl\u00ednico y los hallazgos radiol\u00f3gicos.",
                    bibliography: ["BECK, M. et al (1983). \"Heterogeneity of Metatropic Dysplasia\", Eur. J. Pediatr., Vol. 140: 231-237.",
                        "JENKINS, P. et al. (1970). \"Metatropic dwarfism\", Br. J. Radiol., Vol 43: 561.565."],
                    features: [62, 65, 66, 67, 72, 83, 115]
                },
                {
                    id: 50,
                    name: "S\u00edndrome de Coffin-Siris",
                    synonym: "S\u00edndrome del 5o. digito",
                    inheritance: "Presentaci\u00f3n espor\u00e1dica",
                    retardation: true,
                    retardationNotes: "",
                    evolution: "La hipoplasia de las falanges distales y las u\u00f1as de los 5os. dedos de manos y pies se observan al nacimiento. Se presenta \n\
                    leve a moderado retraso en el crecimiento con retardo en el desarrollo psico-motor, dificultades para la alimentaci\u00f3n e \n\
                    infecciones respiratorias recurrentes en la infancia. El pron\u00f3stico depende del grado de retardo mental presente en el paciente. \n\
                    Se han descrito casos con herencia autos\u00f3mica recesiva y autos\u00f3mica dominante.",
                    clinicalExams: "El diagn\u00f3stico es cl\u00ednico con ayuda radiol\u00f3gica, incluyendo hallazgos como r\u00f3tulas hipopl\u00e1sicas o ausentes, seis v\u00e9rtebras \n\
                    lumbares y retardo en la maduraci\u00f3n \u00f3sea.",
                    bibliography: ["HASPESLAGH, M. et al. (1984). \"The Coffin-Siris Syndrome: Report of a family and further delineation\", Clinical Genetics, \n\
                    Vol. 26: 374-378."],
                    features: [1, 7, 17, 77, 81, 84, 91, 114, 115]
                },
                {
                    id: 10,
                    name: "Fibrocondrog\u00e9nesis",
                    synonym: "",
                    inheritance: "Autos\u00f3mica recesiva",
                    retardation: "?",
                    retardationNotes: "",
                    evolution: "Esta es una forma letal de enanismo de extremidades cortas (tipo rizom\u00e9lico) con presentaci\u00f3n neonatal y los pacientes\n\
                    usualmente no sobrepasan este per\u00edodo",
                    clinicalExams: "El diagn\u00f3stico se basa en el cuadro cl\u00ednico, radiol\u00f3gico e histopatol\u00f3gico. Los RX muestran costillas cortas con ensanchamiento \n\
                    en forma de copa en los extremos anteriores y posteriores, los huesos largos acortados con met\u00e1fisis ensanchadas y cuerpos vertebrales aplanados. \n\
                    Los huesos il\u00edacos e isquiop\u00fabicos son peque\u00f1os y displ\u00e1sicos. El estudio histopatol\u00f3gico de cart\u00edlago es caracter\u00edstico: la placa de crecimiento \n\
                    est\u00e1 desorganizada con displasia fibrobl\u00e1stica de condrocitos que a menudo est\u00e1n agrupados. Se observan densos septums fibrosos de tejido col\u00e1geno \n\
                    extracelular.",
                    bibliography: ["BANKIER, A. et al. (1991). \"Fibrochondrogenesis in Male Twins at 24 weeks Gestation\", American Journal of Medical Genetics, \n\
                    Vol. 38: 95-98."],
                    features: [13, 24, 35, 40, 42, 49, 57, 59, 61, 62, 67, 70, 72, 74, 95, 115]
                },
                {
                    id: 7,
                    name: "Distrofia Tor\u00e1cica de Jeune",
                    synonym: "Displasia tor\u00e1cica asfixiante",
                    inheritance: "Autos\u00f3mica recesiva",
                    retardation: false,
                    retardationNotes: "",
                    evolution: "Usualmente se manifiesta desde el nacimiento y debido a la capacidad pulmonar reducida se presenta compromiso respiratorio que \n\
                    con frecuencia los lleva a la muerte en la infancia y al parecer es responsable de los casos de retardo mental, debido a la hipoxia. \n\
                    Frecuentemente se presenta enfermedad renal progresiva (nefritis cr\u00f3nica) de aparici\u00f3n en la ni\u00f1ez tard\u00eda cursando con insuficiencia \n\
                    renal despu\u00e9s de dos a\u00f1os de su iniciaci\u00f3n. En quienes llegan a la edad adulta, la talla final probablemente estar\u00e1 debajo del 3er. \n\
                    percentil.",
                    clinicalExams: "El diagn\u00f3stico es cl\u00ednico, radiol\u00f3gico e histopatol\u00f3gico. La biopsia costo-condral muestra anormal ac\u00famulo de l\u00edpidos, los pulmones\n\
                   se observan hipopl\u00e1sicos con reducci\u00f3n en el n\u00famero de alv\u00e9olos y en los ri\u00f1ones se encuentra displasia tubular qu\u00edstica y/o esclerosis \n\
                   glomerular. RX muestran hipoplasia de los huesos il\u00edacos e isquiop\u00fabicos.",
                    bibliography: ["OBERKLAID, F. et al. (1977). \"Asphyxiating thoracic dysplasia\", Archives of Disease in Childhood, Vol. 52: 758-765."],
                    features: [62, 65, 72, 78, 98, 115, ]
                },
                {
                    id: 8,
                    name: "S\u00edndrome  de Robinow",
                    synonym: "S\u00edndrome de la cara fetal",
                    inheritance: "Autos\u00f3mica dominante y autos\u00f3mica recesiva",
                    retardation: false,
                    retardationNotes: "",
                    evolution: "Cerca del 10% de los pacientes mueren en la infancia temprana. El desarrollo general es normal en la mayor\u00eda, aunque se ha descrito \n\
                    retardo en el desarrollo psico-motor y retardo mental en el 18% de los pacientes. La estatura final puede ser normal o ligeramente baja. \n\
                    En los hombres usualmente se presenta infertilidad.",
                    clinicalExams: "El diagn\u00f3stico es cl\u00ednico y radiol\u00f3gico. Los RX muestran hipoplasia distal del c\u00fabito con luxaci\u00f3n de la cabeza del radio, hipoplasia \n\
                    de la falange distal del 5o. dedo en manos, falanges terminales b\u00edfidas en manos o pies, hemi-v\u00e9rtebras tor\u00e1cicas y costillas fusionadas \n\
                    o ausentes.",
                    bibliography: ["BUTLER, M. G. and WADLINGTON, W. B. (1987). \"Robinow Syndrome: Report of two patients and review of literature\", Clinical Genetics,\n\
         Vol. 31:77-85."],
                    features: [8, 11, 13, 19, 42, 47, 50, 56, 67, 69, 72, 99, 115]
                },
                {
                    id: 84,
                    name: "S\u00edndrome  de Fanconi-Pancitopenia",
                    synonym: "Anemia de Fanconi",
                    inheritance: "Autos\u00f3mica recesiva",
                    retardation: true,
                    retardationNotes: "",
                    evolution: "La enfermedad se debe a una falla del DNA en la super\u00f3xido dismutasa. En la mayor\u00eda de los casos se observa bajo peso y baja estatura desde \n\
                    el nacimiento acompa\u00f1ados de pigmentaci\u00f3n anormal de la piel. Debe vigilarse cuidadosamente al paciente por el riesgo de desarrollar leucemias \n\
                    y otras enfermedades malignas. El compromiso renal determina frecuentemente el pron\u00f3stico de esta entidad. Algunos pacientes responden a \n\
                    terapia con andr\u00f3genos y otros pueden beneficiarse de trasplante de m\u00e9dula \u00f3sea.",
                    clinicalExams: "El estudio cromos\u00f3mico muestra fragilidad e intercambio de crom\u00e1tides, cromosomas tric\u00e9ntricos y endo-replicaciones. Se han dise\u00f1ado tests \n\
                     con Mitomycin C y con Diepoxybutane para demostrar la ruptura cromos\u00f3mica excesiva en cultivo celular a temprana edad. El estudio hematol\u00f3gico \n\
                     muestra pancitopenia con trombocitopenia. Los RX muestran las anomal\u00edas esquel\u00e9ticas descritas.",
                    bibliography: ["MACDOUGALL, L. G. et al. (1990). \"Fanconi Anemia in Black African Children\", American Journal of Medical Genetics,\n\
         Vol. 36:408-413."],
                    features: [7, 76, 76, 86, 98, 107, 114, 115]
                },
                {
                    id: 60,
                    name: "Gangliosidosis Generalizada Tipo I",
                    synonym: "S\u00edndrome de Caffey Pseudo-hurler",
                    inheritance: "Autos\u00f3mica recesiva",
                    retardation: true,
                    retardationNotes: "",
                    evolution: "Desde el nacimiento se observa retardo en el desarrollo psicomotor. El beb\u00e9 es hipot\u00f3nico, inapetente, con pobre succi\u00f3n e inadecuada ganancia \n\
                    de peso. Las caracter\u00edsticas f\u00edsicas se van haciendo evidentes con la edad, simulando un s\u00edndrome de Hurler en muchos casos. El deterioro cerebral\n\
                    ocurre r\u00e1pidamente despu\u00e9s del primer a\u00f1o llegando a presentar convulsiones t\u00f3nicod\u00f3nicas, ceguera, rigidez de descerebraci\u00f3n y finalmente la \n\
                    muerte que ocurre casi invariablemente antes de los dos a\u00f1os de edad.",
                    clinicalExams: "El defecto b\u00e1sico se ha demostrado a nivel molecular como una deficiencia de la enzima lisosomal beta-galactosidasa, la cual se puede medir \n\
                     en leucocitos perif\u00e9ricos o en cultivo de fibroblastos. El estudio patol\u00f3gico muestra histiocitos espumosos en h\u00edgado y bazo, neuronas edematizadas \n\
                     y vacuolas en el epitelio glomerular. Radiol\u00f3gicamente se encuentra excesiva formaci\u00f3n \u00f3sea peri-ostal en huesos largos, manifest\u00e1ndose inicialmente \n\
                     en di\u00e1fisis y posteriormente como disostosis m\u00faltiple.",
                    bibliography: ["SPRANGER, J. W. et al. (1974). \"Bone Dysplasias\", W. B. Saunders Company,Philadelphia, p\u00e1gs. 171-174.",
                        "STANBURY, J. B. et al. (1983). \"The Metabolic Basis of Inherited Disease\", Fifth Edition, McGraw-Hill, Inc., p\u00e1gs. 950-957."],
                    features: [1, 2, 11, 17, 38, 40, 50, 53, 83, 91, 96, 114, 115]
                },
                {
                    id: 21,
                    name: "S\u00edndrome de Incontinencia Pigmenti",
                    synonym: "S\u00edndrome de Block-Sulzberger",
                    inheritance: "Dominante Ligada a X",
                    retardation: true,
                    retardationNotes: "",
                    evolution: "Esta entidad es letal en los hombres afectados. Al parecer la mitad de los casos en mujeres se debe a mutaciones nuevas. Al nacer se observan \n\
                    lesiones bulosas que se transforman en verrucosas dejando vetas y lesiones atr\u00f3ficas residuales en extremidades y especialmente en tronco. Esto \n\
                    se acompa\u00f1a de un n\u00famero variable de otras lesiones ectod\u00e9rmicas extradermatol\u00f3gicas y de la localizaci\u00f3n de \u00e9stas depender\u00e1 el grado de incapacidad\n\
                    del paciente. Pueden presentarse convulsiones por compromiso del Sistema Nervioso Central y existe frecuente complicaci\u00f3n por infecciones \n\
                    especialmente de la piel. La tercera parte de los pacientes presentan retardo mental.",
                    clinicalExams: "El diagn\u00f3stico se basa en el cuadro cl\u00ednico. El estudio histopatol\u00f3gico muestra infiltraci\u00f3n polim\u00f3rfica peri-vascular con eosin\u00f3filos y \n\
                    liquenificaci\u00f3n y degeneraci\u00f3n de la capa de c\u00e9lulas basales.",
                    bibliography: ["CARNEY, R. G. (1976). \"Incontinentia Pigmenti, a World Statistical Analysis\", Arch Dermatol, Vol. 112: 535-542.",
                        "SOMMER, A. and LIU, P. H. (1984). \"Incontinentia Pigmenti in a father and his daughter\", Am J Med Gen, Vol. 17: 655-659."],
                    features: [2, 7, 27, 30, 37, 39, 55, 66, 67, 86, 90, 113]
                },
                {
                    id: 113,
                    name: "S\u00edndrome Cerebro-Costo-Mandibular",
                    synonym: "S\u00edndrome de la costilla falsa",
                    inheritance: "Autos\u00f3mica Dominante y autos\u00f3mica recesiva",
                    retardation: true,
                    retardationNotes: "",
                    evolution: "El diagn\u00f3stico temprano de este desorden puede mejorar el pron\u00f3stico. Todos los pacientes con \"Secuencia de Robin\" deben ser investigados buscando\n\
                    anomal\u00edas costo-vertebrales. Muchos pacientes mueren por falla respiratoria en per\u00edodo neonatal y otros en el primer a\u00f1o de vida. En aquellos que \n\
                    sobreviven se encuentran frecuentemente dificultades para la alimentaci\u00f3n y en el desarrollo del lenguaje. En el 50% de los casos se ha observado\n\
                    retardo mental, el cual usualmente es leve o lim\u00edtrofe. El defecto de \"costilla falsa\" evoluciona a pseudo-artrosis con el tiempo.",
                    clinicalExams: "El diagn\u00f3stico es cl\u00ednico y radiol\u00f3gico. Los RX muestran anomal\u00edas vertebrales, costales e hipoplasia mandibular.",
                    bibliography: ["HENNEKAM, R. C. M. et al. (1985). \"The cerebro-costo-mandibular syndrome: Third report of familial occurrence\", Clinical Genetics, \n\
                        Vol. 28: 118-121",
                        "TACHIBANA, K. et al. (1980). \"Cerebro-Costo-Mandibular Syndrome\", Human Genetics, Vol. 54: 283-286."],
                    features: [47, 49, 52, 62, 65, 114, 115]
                },
                {
                    id: 31,
                    name: "Asociaci\u00f3n de Vater",
                    synonym: "Asociaci\u00f3n de Vacterl",
                    inheritance: "Presentaci\u00f3n espor\u00e1dica",
                    retardation: false,
                    retardationNotes: "",
                    evolution: "Se considera esta asociaci\u00f3n cuando existen 3 o m\u00e1s de las alteraciones descritas. En el 85% de los casos se han descrito \n\
                    malformaciones tr\u00e1queoesof\u00e1gicas (usualmente atresia esof\u00e1gica y f\u00edstula distal). Cerca del 60% de estos pacientes cursan con\n\
                    cardiopat\u00eda y el 66% con anomal\u00edas renales, el 60% con defectos ano-rectales y alteraciones vertebrales o radiales. Se han \n\
                    descrito tambi\u00e9n anomal\u00edas vasculares y/o arteriales asociadas. Usualmente sobrevive el 75% de los pacientes y el pron\u00f3stico\n\
                    depende de las malformaciones presentes en cada caso.",
                    clinicalExams: "El diagn\u00f3stico es cl\u00ednico con ayuda radiol\u00f3gica. Se recomienda RX de columna, t\u00f3rax, miembros superiores, estudio de v\u00edas \n\
                    digestivas altas y bajas, electro y ecocardiograma, ecograf\u00eda renal y/o urograf\u00eda.",
                    bibliography: ["WEAVER, D. D et al. 1986). \"The VATER Association\", Am J Dis Children, Vol. 140: 225-229."],
                    features: [67, 76, 78, 79, 94, 97, 98, 101]
                },
                {
                    id: 68,
                    name: "S\u00edndrome de Aarskog",
                    synonym: "Displasia facio-d\u00edgito-g\u00e9nital",
                    inheritance: "Recesiva ligada a X o Autos\u00f3mica dominante influenciada por el sexo",
                    retardation: false,
                    retardationNotes: "",
                    evolution: "Es una entidad caracter\u00edstica de los hombres pero algunas mujeres portadoras del gen pueden presentar leves manifestaciones \n\
                    cl\u00ednicas. El d\u00e9ficit de crecimiento puede notarse desde el nacimiento o a los 2 \u00f3 3 a\u00f1os de edad, quedando la mayor\u00eda con talla\n\
                    debajo del 3er. percentil. La integraci\u00f3n social es usualmente buena y tienden a tener una personalidad agradable. La fertilidad\n\
                    masculina puede estar disminuida, especialmente si cursan con criptorquidia. Algunos pacientes presentan retardo mental leve o \n\
                    lim\u00edtrofe (39%).",
                    clinicalExams: "El diagn\u00f3stico es cl\u00ednico. A los RX se puede encontrar hipoplasia de la la. v\u00e9rtebra cervical, la cual puede cursar con \n\
                    subluxaci\u00f3n o fusi\u00f3n de las primeras v\u00e9rtebras cervicales. Puede haber retardo en la maduraci\u00f3n \u00f3sea.",
                    bibliography: ["BERMAN, P. et al. (1975). \"The inheritance of the Aarskog facial-digital-genital syndrome\", The Journal of Pediatrics, \n\
                    Vol. 86, No. 6:885-891.",
                        "BERRY, C. et al. (1980). \"Aarskog's syndrome\", Archives of Disease in Childhood, Vol. 55: 706-710.,"],
                    features: [14, 19, 22, 25, 42, 46, 50, 55, 63, 69, 74, 82, 95, 99, 115]
                },
                {
                    id: 12,
                    name: "Displasia Ectod\u00e9rmica Tipo Rapp-Hodgkin",
                    synonym: "Displasia Ectod\u00e9rmica hipohidr\u00f3tica tipo autos\u00f3mica dominante",
                    inheritance: "Autos\u00f3mica dominante (no se descarta la autos\u00f3mica dominante ligada a X).",
                    retardation: false,
                    retardationNotes: "",
                    evolution: "Labilidad para presentar hipertermia en la infancia temprana. La principal complicaci\u00f3n es la otitis media cr\u00f3nica, posiblemente \n\
                    secundaria al paladar hendido. Pueden presentar conjuntivitis purulentas debido a aplasia de los conductos lacrimales. Usualmente \n\
                    requieren tratamiento de ortodoncia.",
                    clinicalExams: "El diagn\u00f3stico es cl\u00ednico. En las palmas de las manos y plantas de los pies hay disminuci\u00f3n del n\u00famero de poros sudor\u00edparos. En\n\
                    biopsia de piel se encuentra disminuci\u00f3n de fol\u00edculos pilosos y de gl\u00e1ndulas sudor\u00edparas.",
                    bibliography: ["SCHROEDER, H. W. and SYBERT, V. P. (1987). \"Rapp-Hodgkin ectodermal dysplasia\", The Journal of Pediatrics, Vol. 110: 72-75."],
                    features: [11, 40, 46, 49, 51, 55, 81, 92, 93, 99, 115]
                },
                {
                    id: 26,
                    name: "Displasia Ectod\u00e9rmica Hipohidr\u00f3tica",
                    synonym: "S\u00edndrome de Christ-Siemens-Touraine",
                    inheritance: "Recesiva ligada a X",
                    retardation: false,
                    retardationNotes: "algunos, leve",
                    evolution: "Por deficiencia de las gl\u00e1ndulas sudor\u00edparas exocrinas hay dificultad para regular la temperatura y la hiperpirexia puede llevar \n\
                    a da\u00f1o neurol\u00f3gico y retardo mental secundario. El diagn\u00f3stico se hace despu\u00e9s del 1o. \u00f3 2o. a\u00f1o de vida por consecutivos per\u00edodos \n\
                    de fiebre elevada y alteraciones en la aparici\u00f3n de la dentadura de leche. Por escasez de gl\u00e1ndulas en las mucosas pueden aparecer \n\
                    complicaciones como rinitis purulenta, otitis media e infecciones pulmonares. Usualmente requieren manejo odontol\u00f3gico. El cuadro se \n\
                    presenta usualmente en hombres y las mujeres heterocigotas pueden manifestar un fenotipo variado",
                    clinicalExams: "El diagn\u00f3stico es cl\u00ednico sobre la tr\u00edada de hipohidrosis, hipodoncia e hipotricosis. Hay disminuci\u00f3n en el n\u00famero de poros \n\
                    sudor\u00edparos y la biopsia de piel muestra disminuci\u00f3n del n\u00famero de gl\u00e1ndulas sudor\u00edparas. Los RX dentales confirman la hipo o \n\
                    anodoncia.",
                    bibliography: ["FAMILUSI, J. B. et al. (1975). \"Hereditary anhidrotic ectodermal dysplasia\", Archives of Disease in Childhood, \n\
        Vol. 50: 642-647."],
                    features: [11, 40, 42, 43, 55, 86, 90, 92, 93]
                },
                {
                    id: 107,
                    name: "S\u00edndrome Oto-palato Digital Tipo I",
                    synonym: "S\u00edndrome de Taybi",
                    inheritance: "Dominante ligada a X",
                    retardation: true,
                    retardationNotes: "leve",
                    evolution: "La talla final usualmente est\u00e1 debajo del percentil 10. Se presentan problemas de lenguaje debidos al d\u00e9ficit auditivo.\n\
                    Las mujeres presentan variable expresi\u00f3n del fenotipo desde leve a completo.",
                    clinicalExams: "El diagn\u00f3stico es cl\u00ednico y radiol\u00f3gico. Se observa adem\u00e1s engrosamiento de hueso frontal y base del cr\u00e1neo con una\n\
                    excesiva angulaci\u00f3n naso-basal. Los huesos faciales son hipopl\u00e1sicos y los senos para-nasales y mastoideos est\u00e1n pobremente \n\
                    neumatizados. Se recomienda realizar audiometr\u00eda.",
                    bibliography: ["GORLIN, R. J. et al. (1990). \"Syndromes of the Head and Neck\", Third Edition, Oxford University Press, p\u00e1gs. 686-690."],
                    features: [4, 11, 19, 42, 49, 55, 63, 65, 75, 77, 114, 115]
                },
                {
                    id: 94,
                    name: "S\u00edndrome Oto-palato Digital Tipo II",
                    synonym: "",
                    inheritance: "Dominante ligada a X",
                    retardation: true,
                    retardationNotes: "",
                    evolution: "Al parecer la alteraci\u00f3n primaria es un defecto en la osificaci\u00f3n intra-membranosa. La mayor\u00eda de los pacientes mueren \n\
                    antes de los 5 meses de edad por problemas respiratorios y de los sobrevivientes el 60% presentan d\u00e9ficit mental.",
                    clinicalExams: "El diagn\u00f3stico es cl\u00ednico y radiol\u00f3gico. Se encuentra encurvamiento de h\u00famero, radio, c\u00fabito, f\u00e9mur y tibia. El peron\u00e9\n\
                    puede estar peque\u00f1o o ausente. Las alteraciones esquel\u00e9ticas son m\u00e1s severas que las descritas en el s\u00edndrome OPD Tipo I. \n\
                    Se recomienda audiometr\u00eda.",
                    bibliography: ["GORLIN, R. J. et al. (1990). \"Syndromes of the Head and Neck\", Third Edition, Oxford University Press, p\u00e1gs. 690-691.",
                        "OGATA, T. et al. (1990).\"Oto-palato-digital Syndrome, type II\", American Journal of Medical Genetics, Vol. 36: 226-231"],
                    features: [4, 10, 19, 22, 40, 47, 49, 57, 74, 77, 78, 79, 84, 115]
                },
                {
                    id: 42,
                    name: "S\u00edndrome de U\u00f1a-Rotula",
                    synonym: "Osteo-onico-displasia hereditaria",
                    inheritance: "Autos\u00f3mica dominante",
                    retardation: false,
                    retardationNotes: "",
                    evolution: "Puede haber osteo-artritis de codo y rodilla, lo cual limitar\u00e1 su funci\u00f3n. Debe vigilarse la aparici\u00f3n de escoliosis. \n\
                    La albuminuria es la manifestaci\u00f3n m\u00e1s temprana de compromiso renal. La falla renal es rara antes de la cuarta d\u00e9cada de\n\
                    la vida.",
                    clinicalExams: "El diagn\u00f3stico es cl\u00ednico y radiol\u00f3gico. A los RX se encuentran adem\u00e1s de las alteraciones descritas: clav\u00edculas \n\
                    prominentes en el extremo externo con hipoplasia de la esc\u00e1pula, crecimiento de los huesos il\u00edacos en su porci\u00f3n \n\
                    medio-posterior en forma de \"cuernos\", escoliosis e hipoplasia del c\u00f3ndilo lateral femoral. La biopsia renal \n\
                    muestra engrosamiento hialino de la membrana basal glomerular.",
                    bibliography: ["BENNETT, W. M. et al. (1973). \"The Nephropathy of the Nail-Patella Syndrome\", American Journal of Medical Genetics, \n\
                    Vol.54: 304-319. ",
                        "LOOMER, R. L. (1989). \"Shoulder Girdle Dysplasia Associated With Nai Patella Syndrome\", Clin Orthop, Vol. 238: 112-116."],
                    features: [62, 76, 80, 81, 83, 98]
                },
                {
                    id: 18,
                    name: "S\u00edndrome de Melnick-Fraser",
                    synonym: "S\u00edndrome branquio-oto-renal",
                    inheritance: "Autos\u00f3mica dominante",
                    retardation: false,
                    retardationNotes: "",
                    evolution: "Aunque las f\u00edstulas pre-auriculares y los quistes branquiales pueden ser evidentes desde el nacimiento, la mayor\u00eda de los \n\
                    pacientes se diagnostican m\u00e1s tarde, por problemas en el desarrollo del lenguaje, secundarios al d\u00e9ficit auditivo. Las\n\
                    anomal\u00edas renales son variables en morfolog\u00eda y severidad, yendo desde severa hipoplasia renal y/o secuencia de Potter \n\
                    hasta pelvis renal b\u00edfida o simple duplicaci\u00f3n del sistema colector. En una misma familia se encuentra gran variabilidad \n\
                    de la expresi\u00f3n y en algunos casos falta de penetrancia del gen.",
                    clinicalExams: "El diagn\u00f3stico es cl\u00ednico. Se recomienda realizar urograf\u00eda excretora y evaluaci\u00f3n audiol\u00f3gica a todos los casos en los \n\
                    cuales se sospeche esta entidad y a sus familiares. Puede requerirse TAC para valorar los huesecillos del o\u00eddo.",
                    bibliography: ["HEIMLER, A. and LIEBER, E (1986). \"Branchio-Oto-Renal Syndrome: Reduced Penetrance and Variable Expressivity in Four \n\
                    Generations of a Large Kindred\", American Journal of Medical Genetics, Vol. 25: 15-27."],
                    features: [4, 26, 59, 98, 119]
                },
                {
                    id: 119,
                    name: "Displasia Diastr\u00f3fica",
                    synonym: "S\u00edndrome de enanismo Diastr\u00f3fico",
                    inheritance: "Autos\u00f3mica recesiva",
                    retardation: false,
                    retardationNotes: "",
                    evolution: "El t\u00e9rmino diastr\u00f3fico se refiere a la caracter\u00edstica \"encorvada o torcida\" que da la apariencia del individuo. La talla baja\n\
                    es evidente al nacer. Muchos pacientes mueren en el per\u00edodo neonatal debido a insuficiencia respiratoria (por debilidad \n\
                    cartiIaginosa que produce estenosis traqueal), o en la infancia por bronconeumon\u00eda aspirativa. Son t\u00edpicos: la posici\u00f3n de \n\
                    \"AutoStop\" del primer dedo de las manos y el pabell\u00f3n auricular con una tumefacci\u00f3n qu\u00edstica, dando apariencia de \"coliflor\".\n\
                    Se ha descrito un tipo letal de esta entidad, asociado a cardiopat\u00eda cong\u00e9nita y luxaci\u00f3n de v\u00e9rtebras cervicales. Quienes \n\
                    llegan a la edad adulta presentan una talla final entre 100 y 140 cm y usualmente gozan de buena salud.",
                    clinicalExams: "El diagn\u00f3stico es cl\u00ednico y radiol\u00f3gico. Los RX muestran mineralizaci\u00f3n tard\u00eda de las ep\u00edfisis y acortamiento mesom\u00e9lico \n\
                    de las extremidades. El estudio histopatol\u00f3gico de cart\u00edlago muestra cambios focales con muerte de condrocitos y con posterior\n\
                    formaci\u00f3n qu\u00edstica y osificaci\u00f3n intra-cartilaginosa.",
                    bibliography: ["GUSTAVSON, K. et al. (1985). \"Lethal and non-lethal diastrophic dysplasia\", Clinical Genetics, Vol. 28: 321-334.",
                        "HORTON, W. A. et al. (1978). \"The phenotypic variability of diastrophic dysplasia\", The Journal of Pediatrics, Vol. 93, No. 4:609-613."],
                    features: [47, 49, 59, 66, 72, 77, 83, 84, 85, 115]
                },
                {
                    id: 32,
                    name: "S\u00edndrome de Larsen ",
                    synonym: "S\u00edndrome de luxaciones cog\u00e9nitas m\u00faltiples",
                    inheritance: "Autos\u00f3mica dominante",
                    retardation: false,
                    retardationNotes: "",
                    evolution: "El cuadro cl\u00ednico es evidente desde el nacimiento. Algunos mueren en per\u00edodo neonatal por dificultad respiratoria debido a \n\
                    laxitud de la tr\u00e1quea. Con adecuado manejo en la infancia las luxaciones articulares pueden mejorar, sin embargo pueden \n\
                    presentarse deformidades secundarias a osteo-artritis y cifoescoliosis progresiva. Se recomienda manejo ortop\u00e9dico temprano.",
                    clinicalExams: "El diagn\u00f3stico es cl\u00ednico y radiol\u00f3gico. Los RX muestran retardo en la maduraci\u00f3n \u00f3sea.",
                    bibliography: ["LATTA, R. J. et al. (1971). \"Larsen's syndrome: A skeletal dysplasia with multiple joint dislocations and unusual \n\
        facies\" , the Journal of Pediatrics, Vol. 78, No. 2: 291-298.",
                        "SPRANGER, J. W. et al. (1974). \"Bone Dysplasias\", W. B. Saunders Company, p\u00e1gs. 239-246."],
                    features: [11, 13, 19, 40, 49, 84, 85, 94]
                },
                {
                    id: 20,
                    name: "Homocistinuria",
                    synonym: "Deficiencia de Beta-Sintetasa de Cistationina",
                    inheritance: "Autos\u00f3mica recesiva",
                    retardation: true,
                    retardationNotes: "Variable",
                    evolution: "La alteraci\u00f3n b\u00e1sica es un defecto en el metabolismo de la metionina, encontr\u00e1ndose varias enzimas comprometidas en su \n\
        fisiopatogenia, siendo la m\u00e1s frecuente la deficiencia de beta-sintetasa de cistationina. Su apariencia al nacer es normal en la \n\
        mayor\u00eda de los casos. Sin tratamiento (retirar metionina de la dieta o dar suplemento de vitamina B6) o en aquellos que no responden \n\
        al mismo, se encuentra retardo en el desarrollo psicomotor, retardo mental de grado variable (desde inteligencia normal hasta retardo \n\
        severo). Las complicaciones m\u00e1s comunes incluyen luxaci\u00f3n de cristalino, convulsiones, osteoporosis, aterosclerosis temprana y episodios \n\
        tromboemb\u00f3licos, siendo estos \u00faltimos los que llevan al paciente a la muerte, en la mayor\u00eda de los casos. Se han definido claramente\n\
        dos grupos de pacientes, seg\u00fan si responden (menor incidencia de retardo mental, convulsiones y luxaci\u00f3n de cristalino) o no al \n\
        tratamiento con vitamina B6. Se ha recomendado el uso de Acido Acetil Salic\u00edlico y Dipiridamol para prevenir los eventos trombo-emb\u00f3licos.",
                    clinicalExams: "En el plasma se encuentran niveles elevados de Homocistina y Metionina y niveles bajos de Cistina. La prueba de \n\
                    Nitroprusiato de Sodio es positiva en orina (recordar que ingesta baja de Metionina o suministro de grandes cantidades\n\
                    de Piridoxina y Acido F\u00f3lico pueden dar falsos negativos).",
                    bibliography: ["MUDD, S. H. et al. (1985). \"The Natural History of Homocystinura Due to Cystathionine B-Synthase Deficiency\", \n\
        American Journal of Human Genetics, Vol. 37: 1-31. "],
                    features: [29, 37, 63, 66, 68, 94, 114, 116]
                },
                {
                    id: 36,
                    name: "S\u00edndrome de Holt-Oram ",
                    synonym: "Displasia atrio-digital",
                    inheritance: "Autos\u00f3mica dominante",
                    retardation: false,
                    retardationNotes: "",
                    evolution: "El defecto de la extremidad superior es usualmente unilateral (lado izquierdo m\u00e1s frecuentemente comprometido). \n\
                    Las anomal\u00edas esquel\u00e9ticas incluyen un amplio espectro que va desde defectos menores como limitaci\u00f3n para la \n\
                    oposici\u00f3n del pulgar hasta focomelia. Las anomal\u00edas cardiacas tambi\u00e9n pueden manifestarse de m\u00faltiples formas,\n\
                    siendo las m\u00e1s frecuentes los defectos del septum atrial y ventricular. De la severidad de estas alteraciones \n\
                    depender\u00e1 el pron\u00f3stico.",
                    clinicalExams: "El diagn\u00f3stico es cl\u00ednico y radiol\u00f3gico. Se recomienda evaluaci\u00f3n cardiaca a los familiares, pues se ha\n\
                    observado expresividad variable de la entidad.",
                    bibliography: ["GLAUSER, T. A. et al. (1989). \"Holt-Oram syndrome associated with the hypoplastic left heart syndrome\", \n\
        Clinical Genetics, Vol. 36:69-72.",
                        "SMITH, A. T. and TAYLOR, G. J. (1979). \"Holt-Oram syndrome\", The Journal of Pediatrics, Vol. 95, No. 4: 538-543."],
                    features: [62, 67, 73, 76, 94]
                },
                {
                    id: 33,
                    name: "S\u00edndrome de Opitz ",
                    synonym: "S\u00edndrome G",
                    inheritance: "Autos\u00f3mica dominante",
                    retardation: true,
                    retardationNotes: "Algunos, leve",
                    evolution: "El cuadro cl\u00ednico es aparente desde el nacimiento. La mayor\u00eda son hombres y el diagn\u00f3stico es m\u00e1s dif\u00edcil en \n\
                    mujeres. Algunos ni\u00f1os presentan estridor respiratorio y llanto ronco. En la mayor\u00eda de los casos hay alteraci\u00f3n \n\
                    en la motilidad esof\u00e1gica y en el mecanismo de degluci\u00f3n, asociados a frecuentes episodios de bronco-aspiraci\u00f3n \n\
                    por reflujo gastro-esof\u00e1gico. Muchos requieren alimentaci\u00f3n mediante yeyunostom\u00eda hasta el a\u00f1o de edad. Con adecuado\n\
                    tratamiento el desarrollo de los ni\u00f1os es casi normal. En algunos pacientes se han encontrado alteraciones orales \n\
                    como hendiduras, micrognatia y paladar alto. Algunos presentan retardo mental leve (38%).",
                    clinicalExams: "El diagn\u00f3stico es cl\u00ednico y radiol\u00f3gico. Se recomienda estudio de motilidad y reflujo gastro-esof\u00e1gico.",
                    bibliography: ["BROOKS, J. K. et al. (1992). \"Opitz (BBB/G) Syndrome: Oral Manifestations\", American Journal of Medical Genetics,\n\
         Vol. 43:595-601.",
                        "WILSON, G. N. and OLIVER, W. (1988). \"Further delineation of the G syndrome: a manageable genetic cause of infantile dysphagia\",\n\
        Journal of Medical Genetics, Vol. 25: 157-163."],
                    features: [19, 40, 57, 95, 99, 99, 99, 114]
                },
                {
                    id: 16,
                    name: "S\u00edndrome Oculo-Dento-Digital ",
                    synonym: "Displasia oculo-dento-\u00f3sea",
                    inheritance: "Autos\u00f3mica dominante",
                    retardation: false,
                    retardationNotes: "",
                    evolution: "Aunque muchas de las caracter\u00edsticas f\u00edsicas son evidentes al nacimiento, la mayor\u00eda de los casos se diagnostican m\u00e1s\n\
                    tarde, cuando se han hecho evidentes las anomal\u00edas dentales. La calidad de vida se ve afectada por el grado de \n\
                    compromiso ocular. El manejo debe incluir adem\u00e1s la correcci\u00f3n de la sindactilia y tratamiento odontol\u00f3gico.",
                    clinicalExams: "El diagn\u00f3stico es cl\u00ednico y radiol\u00f3gico. Es importante un adecuado y oportuno manejo de las alteraciones oculares, \n\
                ya que pueden presentarse glaucoma y ceguera secundaria. Se recomienda evaluaci\u00f3n auditiva.",
                    bibliography: ["GORLIN, R. J. et al. (1963). \"Oculodentodigital dysplasia\", The Joumal of Pediatrics, Vol. 63, No. 1: 69-75.",
                        "PATTON, M. A. and LAURENCE, K. M. (1985). \"Three new cases of oculodentodigital (ODD) syndrome: development of the facial phenotype\",\n\
         Journal of Medical Genetics, Vol. 22: 386-389."],
                    features: [4, 12, 19, 21, 31, 34, 35, 37, 43, 55, 56, 70, 77, 79]
                },
                {
                    id: 34,
                    name: "Secuencia de Poland ",
                    synonym: "Anomal\u00eda de Poland",
                    inheritance: "Autos\u00f3mica dominante",
                    retardation: false,
                    retardationNotes: "",
                    evolution: "La mayor\u00eda de los casos son de presentaci\u00f3n espor\u00e1dica y se cree es secundario a disrupci\u00f3n vascular por inadecuado flujo\n\
                    sangu\u00edneo en la subclavia y las arterias vertebrales embrionarias. Del sitio y grado de la obstrucci\u00f3n depender\u00e1 la \n\
                    severidad de las anomal\u00edas resultantes, yendo desde leve acortamiento del miembro superior (en el 70% de los casos el \n\
                    defecto est\u00e1 al lado derecho), braquidactilia y sindactilia, hasta agenesia de mano. En t\u00f3rax puede haber disminuci\u00f3n o \n\
                    falta de tejido mamario y/o pezones. Aunque la mayor\u00eda son de presentaci\u00f3n espor\u00e1dica, en los casos familiares se ha descrito\n\
                    herencia autos\u00f3mica dominante.",
                    clinicalExams: "El diagn\u00f3stico es cl\u00ednico y radiol\u00f3gico. Se recomienda realizar ecograf\u00eda renal y/o urograf\u00eda.",
                    bibliography: ["BOUWES, J. N. et al. (1986). \"Subclavian Artery Supply Disruption Sequence: Hypothesis of Vascular Etiology for Poland, \n\
        Klippel-Feil, and Moebius Anomalies\", American Journal of Medical Genetics, Vol. 23: 903-918.",
                        "COBBEN, J. M. et al. (1989). \"Poland Anomaly in Mother and Daughter\", American Journal of Medical Genetics, Vol. 33: 519-521."],
                    features: [62, 64, 67, 69, 73, 77, 79, 98]
                },
                {
                    id: 97,
                    name: "S\u00edndrome de Ataxia-Telangiectasia ",
                    synonym: "S\u00edndrome de Louis-Bar",
                    inheritance: "Autos\u00f3mica recesiva",
                    retardation: true,
                    retardationNotes: "Algunos",
                    evolution: "Estos pacientes cursan con retardo en el desarrollo psicomotor y las manifestaciones neurol\u00f3gicas como la ataxia e hipoton\u00eda\n\
                    se hacen evidentes cuando el ni\u00f1o empieza a caminar. El curso de la entidad es progresivo, apareciendo disartria, coreo-atetosis,\n\
                    nistagmus de fijaci\u00f3n, temblor intencional y debilidad muscular marcada que los lleva a silla de ruedas en la infancia tard\u00eda.\n\
                    Las telangiectasias aparecen entre los 2 y 8 a\u00f1os de edad. Entre las complicaciones m\u00e1s frecuentes est\u00e1n: envejecimiento temprano, \n\
                    alteraciones endocrinol\u00f3gicas como intolerancia a la glucosa e hipogonadismo, disfunci\u00f3n hep\u00e1tica, infecciones recurrentes y una \n\
                    gran propensi\u00f3n para desarrollar c\u00e1nceres. La inmunodeficiencia compromete tanto el sistema celular como el humoral. La mayor\u00eda de \n\
                    los pacientes mueren antes de llegar a la edad adulta, por complicaciones respiratorias o c\u00e1ncer.",
                    clinicalExams: "Se encuentran niveles bajos de inmunoglobulinas, especialmente IgA, IgE y subclase 2 de IgG, d\u00e9ficit de la inmunidad \n\
                    celular, alfa-fetoprote\u00edna s\u00e9rica y ant\u00edgeno carcino-embrionario elevados. El timo es de apariencia fetal inmadura. El \n\
                    cariotipo muestra fragilidad cromos\u00f3mica aumentada.",
                    bibliography: ["WALDMANN, T. A. et al. (1983). \"Ataxia-Telangiectasia: A Multisystem Hereditary Disease with Immunodeficiency, \n\
        Impaired Organ Maturation, X-Ray Hypersensitivity, and High Incidence of Neoplasia\", Annals of Internal Medicine, \n\
        Vol. 99, No. 3:367-379"],
                    features: [3, 88, 105, 109, 114, 115]
                },
                {
                    id: 38,
                    name: "S\u00edndrome de Sturge-Weber",
                    synonym: "Angiomatosis encefalo-facial",
                    inheritance: "Presentaci\u00f3n espor\u00e1dica",
                    retardation: true,
                    retardationNotes: "Algunos",
                    evolution: "El hemangioma facial es evidente al nacer y usualmente no aumenta de tama\u00f1o. Los hemangiomas de lepto-meninges son \n\
                    predominantemente venosos y responsables de algunas de las principales complicaciones: la epilepsia con convulsiones \n\
                    focales, que puede llegar a ser de dif\u00edcil manejo y el da\u00f1o cerebral (atrofia, calcificaciones, etc.) con secuelas\n\
                    neurol\u00f3gicas importantes (hemiparesia o hemipleg\u00eda, hemianopsia). M\u00e1s de la mitad de los pacientes presentan retardo\n\
                    mental.",
                    clinicalExams: "Se recomienda un completo estudio neuro-radiol\u00f3gico, as\u00ed como evaluaci\u00f3n oftalmol\u00f3gica. Los RX simples de cr\u00e1neo\n\
                    muestran calcificaciones en la infancia tard\u00eda o en la pubertad.",
                    bibliography: ["CHUGANI, H. T. et al. (1989). \"Sturge-Weber syndrome: A Study of cerebral glucose utilization with positron \n\
        emission tomography\", The Journal of Pediatrics, Vol. 114, No. 2: 244-253.",
                        "ENJOLRAS, O. et al.(1985). \"Facial Port-Wine Stains and Sturge-Weber Syndrome\", Pediatrics, Vol. 76, No. 1: 48-51."],
                    features: [34, 88, 114]
                },
                {
                    id: 124,
                    name: "S\u00edndrome de Hallermann-Streiff",
                    synonym: "S\u00edndrome oculo-mandibulo-facial",
                    inheritance: "Presentaci\u00f3n espor\u00e1dica (algunos Autos\u00f3mica dominante)",
                    retardation: false,
                    retardationNotes: "Presente en pocos",
                    evolution: "Las caracter\u00edsticas faciales son evidentes al nacimiento. Las principales complicaciones (dificultad respiratoria,\n\
                    infecciones pulmonares tempranas, apnea obstructiva durante el sue\u00f1o y riesgo anest\u00e9sico incrementado) se deben a \n\
                    la estrechez de las v\u00edas a\u00e9reas superiores, lo cual se relaciona con la configuraci\u00f3n craneo-facial del paciente. La\n\
                    talla final en mujeres est\u00e1 alrededor de 152 cm y en hombres puede ser 2 a 5 cm m\u00e1s alta. Se han descrito \n\
                    hipogenitalismo e hipopituitarismo en algunos pacientes. El 15% presentan alg\u00fan grado de retardo mental.",
                    clinicalExams: "El diagn\u00f3stico es cl\u00ednico y radiol\u00f3gico. Se recomienda oportuna evaluaci\u00f3n y seguimiento visual para evitar\n\
                    complicaciones que lleven a la ceguera.",
                    bibliography: ["COHEN, M. M. Jr. (1991). \"Hallermann-Streiff Syndrome: A Review\", American Joumal of Medical Genetics, \n\
        Vol. 41: 40-499."],
                    features: [10, 11, 31, 37, 42, 43, 45, 46, 47, 51, 55, 92, 115]
                },
                {
                    id: 92,
                    name: "S\u00edndrome de Pfeiffer",
                    synonym: "Acro-c\u00e9falo-sindactilia tipo V",
                    inheritance: "Autos\u00f3mica dominante",
                    retardation: false,
                    retardationNotes: "Presente en pocos",
                    evolution: "Se ha visto que en la mayor\u00eda de los casos la apariencia craneofacial mejora con la edad y esto depende de la \n\
                    severidad de la craniosinostosis. La mayor\u00eda de los pacientes cursan con inteligencia normal. La sindactilia \n\
                    usualmente es susceptible de correcci\u00f3n quir\u00fargica. Frecuentemente hay variabilidad en la expresi\u00f3n del gen\n\
                    dentro de una misma familia.",
                    clinicalExams: "El diagn\u00f3stico es cl\u00ednico y radiol\u00f3gico. Se recomienda realizar evaluaci\u00f3n completa a los familiares del \n\
                    paciente, buscando casos de expresi\u00f3n parcial.",
                    bibliography: ["BARAITSER, M. et al. (1980). \"Pitfalls of genetic counselling in Pfeiffer's syndrome\", Journal of \n\
        Medical Genetics, Vol. 17: 250-256",
                        "VANEK, J. and LOSAN, F. (1982). \"Pfeiffer's type of acrocephalo-syndactyly in two families\", Journal of Medical Genetics,\n\
        Vol. 19:289-292."],
                    features: [9, 11, 19, 22, 42, 75, 76, 79]
                },
                {
                    id: 91,
                    name: "S\u00edndrome de Apert",
                    synonym: "Acro-c\u00e9falo-sindactil\u00eda tipo I",
                    inheritance: "Autos\u00f3mica dominante",
                    retardation: true,
                    retardationNotes: "Grado Variable",
                    evolution: "El pron\u00f3stico est\u00e1 dado por el grado de retardo mental y el adecuado y oportuno manejo de la craniosinostosis.\n\
                    La mayor\u00eda de los pacientes presentan retardo mental y al parecer las anomal\u00edas del Sistema Nervioso Central \n\
                    asociadas (hidrocefalia, ventriculomegalia no-progresiva, malformaciones de cuerpo calloso y/o estructuras l\u00edmbicas,\n\
                    megalencefalia, anomal\u00edas de las circunvoluciones, encefalocele, hipoplasia de sustancia blanca y heterotop\u00eda de\n\
                    materia gris) son las responsables de \u00e9ste en la mayor\u00eda de los casos.",
                    clinicalExams: "El diagn\u00f3stico es cl\u00ednico y radiol\u00f3gico. Se recomienda evaluaci\u00f3n neuro-radiol\u00f3gica temprana, incluyendo \n\
                    tomograf\u00eda cerebral computarizada e idealmente estudio con resonancia nuclear magn\u00e9tica.",
                    bibliography: ["COHEN, M. M. and KREIBORG, S. (1990). \"The Central Nervous System in the Apert Syndrome\", American Journal \n\
        of Medical Genetics, Vol. 35: 3645.",
                        "PATTON, M. A. et al. (1988). \"Intellectual development in Apert's syndrome: a long term follow up of 29 patients\", Journal\n\
         of Medical Genetics, Vol. 25: 164-167."],
                    features: [9, 11, 13, 19, 22, 27, 42, 46, 48, 49, 79, 114]
                },
                {
                    id: 128,
                    name: "S\u00edndrome de Klippel-Feil",
                    synonym: "Anomal\u00eda o Secuencia de Klippel-Feil",
                    inheritance: "Presentaci\u00f3n espor\u00e1dica",
                    retardation: false,
                    retardationNotes: "",
                    evolution: "Las caracter\u00edsticas cl\u00ednicas son evidentes al nacimiento. Entre las principales complicaciones est\u00e1 el d\u00e9ficit \n\
                    neurol\u00f3gico (transitorio o permanente), incluyendo cuadripleg\u00eda despu\u00e9s de un trauma leve o a\u00fan la muerte s\u00fabita\n\
                    por secci\u00f3n de la m\u00e9dula espinal. Se han descrito tambi\u00e9n accidentes cerebro-vasculares por oclusi\u00f3n de las \n\
                    arterias vertebrales. En todos estos pacientes, la causa m\u00e1s probable del d\u00e9ficit neurol\u00f3gico es la compresi\u00f3n \n\
                    directa de la m\u00e9dula espinal secundaria a hipermovilidad por encima o por debajo del segmento vertebral fusionado. \n\
                    Otras anomal\u00edas asociadas descritas en la literatura son: sordera, par\u00e1lisis de algunos m\u00fasculos oculares, \n\
                    cardiopat\u00edas, cifosis, asimetr\u00eda facial, paladar hendido y/o anomal\u00edas renales. El s\u00edndrome de Wildervanck \n\
                    (s\u00edndrome cervico-oculoac\u00fastico) es una variante de esta entidad, incluyendo adem\u00e1s de las anomal\u00edas cervicales \n\
                    del s\u00edndrome de Klippel-Feil, sordera y par\u00e1lisis de los m\u00fasculos abductores oculares (s\u00edndrome de Duane). Se ha \n\
                    propuesto entre las etiolog\u00edas: infecciones intra-uterinas, alteraciones de temperatura y/o alteraciones vasculares \n\
                    que impidan la adecuada segmentaci\u00f3n de los somitas mesod\u00e9rmicos entre las semanas 3 y 17 de la vida intrauterina. \n\
                    Se han descrito algunos casos de herencia autos\u00f3mica dominante.",
                    clinicalExams: "El diagn\u00f3stico es cl\u00ednico y radiol\u00f3gico. Se recomienda evaluaci\u00f3n auditiva y una concienzuda determinaci\u00f3n del \n\
                    riesgo da\u00f1o neurol\u00f3gico, para escoger oportunamente el tipo intervenci\u00f3n quir\u00fargica que necesite.",
                    bibliography: ["HALL, J. E. et al. (1990). \"Instability of the Cervical Spine and Neurological Involvement in Klippel-Feil \n\
        Syndrome\", The Journal of Bone and Joint Surgery, Vol. 72-A, No. 3: 460-462.",
                        "NAGIB, M. G. et al. (1984). \"Identification and management of high-risk patients with Klippel-Feil syndrome\", Journal of \n\
        Neurosurg., Vol. 61: 523-530."],
                    features: [61, 67, 83, 92]
                },
                {
                    id: 22,
                    name: "S\u00edndrome de Beals",
                    synonym: "S\u00edndrome de Aracnodactilia contractural de Beals",
                    inheritance: "Autos\u00f3mica dominante",
                    retardation: false,
                    retardationNotes: "",
                    evolution: "Es t\u00edpica la deformidad auricular por el h\u00e9lix \"arrugado\". Las contracturas articulares tienden a mejorar \n\
                    espont\u00e1neamente con el tiempo, especialmente las de rodillas. La escoliosis usualmente es progresiva. Es \n\
                    importante el adecuado manejo ortop\u00e9dico. Algunos autores consideran que estos pacientes no deben considerarse \n\
                    como una entidad aislada sino que son parte del S\u00edndrome de Marf\u00e1n.",
                    clinicalExams: "El diagn\u00f3stico es cl\u00ednico. Se recomienda evaluaci\u00f3n oftalmol\u00f3gica y cardiol\u00f3gica.",
                    bibliography: ["BEIGHTON, P. et al. (1988). \"International Nosology of Heritable  Disorders of Connective Tissue, Berlin, \n\
        1986\", American Journal of Medical Genetics, Vol. 29: 581-594."],
                    features: [31, 32, 47, 59, 61, 66, 68, 70, 83, 94]
                },
                {
                    id: 19,
                    name: "S\u00edndrome de Townes",
                    synonym: "S\u00edndrome de ano-mano-auricular, S\u00edndrome de Townes-Brocks",
                    inheritance: "Autos\u00f3mica dominante",
                    retardation: false,
                    retardationNotes: "",
                    evolution: "Las anomal\u00edas del pulgar van desde hipoplasia hasta duplicaci\u00f3n o digitalizaci\u00f3n del mismo. Las anomal\u00edas anales\n\
                    se manifiestan como ano imperforado en el hombre y localizaci\u00f3n anterior del ano en la mujer. Se ha descrito\n\
                    amplia variabilidad en la expresi\u00f3n del gen. Muchas de las caracter\u00edsticas de este s\u00edndrome pueden coincidir con\n\
                    las descritas en la asociaci\u00f3n de VATER y/o en VACTERL. Se han descrito casos con d\u00e9ficit mental, aunque se cree\n\
                    que algunos de estos casos pueden deberse a inadecuado e inoportuno manejo del d\u00e9ficit auditivo.",
                    clinicalExams: "El diagn\u00f3stico es cl\u00ednico y radiol\u00f3gico. RX muestran alteraciones metacarpianas y metatarsianas incluyendo\n\
                    fusiones \u00f3seas. Se recomienda evaluaci\u00f3n auditiva y renal en el paciente y sus familiares.",
                    bibliography: ["CAMERON, T. H. (1991). \"Townes-Brocks Syndrome in Two Mentally Retarded Youngsters\", American Journal of\n\
        Medical Genetics, Vol. 41: 14."],
                    features: [4, 59, 59, 76, 98, 101]
                },
                {
                    id: 30,
                    name: "S\u00edndrome de Grebe",
                    synonym: "Condrodisplasia de Grebe, Acondrogen\u00e9sis tipo Grebe",
                    inheritance: "Autos\u00f3mica recesiva",
                    retardation: false,
                    retardationNotes: "",
                    evolution: "Muchos son mortinatos o fallecen en la infancia, sin embargo, a diferencia de otras entidades letales, se ha\n\
                    reportado sobrevida de muchos pacientes. El tronco y la cabeza son normales con las cuatro extremidades muy \n\
                    cortas y dedos tan peque\u00f1os que en manos dan la apariencia de pies.",
                    clinicalExams: "El diagn\u00f3stico es cl\u00ednico y radiol\u00f3gico. El acortamiento de las cuatro extremidades es predominantemente\n\
                    acrom\u00e9lico con hipoplasia o ausencia de huesos largos, siendo m\u00e1s severa la alteraci\u00f3n de miembros inferiores.",
                    bibliography: ["JONES, K. L. (1988). \"Smith's Recognizable Patterns of Human Malformations, Fourth Edition, W. B. \n\
        Saunders Company\", p\u00e1gs.258-259."],
                    features: [69, 73, 78, 115]
                },
                {
                    id: 11,
                    name: "Acondrogen\u00e9sis Tipo II",
                    synonym: "Acondrogen\u00e9sis tipo langer-Saldino, Hipocondrog\u00e9nesis",
                    inheritance: "Autos\u00f3mica recesiva",
                    retardation: "?",
                    retardationNotes: "",
                    evolution: "Se cree que el defecto b\u00e1sico est\u00e1 en el Col\u00e1geno tipo II (Col LAI). La mayor\u00eda son mortinatos o mueren pocos \n\
                    d\u00edas despu\u00e9s del nacimiento. Usualmente hay poli-hidramnios. Muchos consideran como Hipocondrog\u00e9nesis a los\n\
                    pacientes con manifestaciones m\u00e1s leves de la entidad.",
                    clinicalExams: "El diagn\u00f3stico es cl\u00ednico y radiol\u00f3gico. A los RX el cr\u00e1neo tiene osificaci\u00f3n normal, los huesos largos\n\
                    presentan constricci\u00f3n diafisial y las costillas son lisas, a diferencia del tipo I. El estudio histopatol\u00f3gico \n\
                    muestra degeneraci\u00f3n del cart\u00edlago epifisial.",
                    bibliography: ["BOROCHOWITZ, Z. et al. (1986). \"Achondrogenesis Il-hypochondrogenesis\", American Journal of Medical\n\
        Genetics, Vol. 24: 273-288.",
                        "GODFREY, M. et al. (1988). \"Type Il Achondrogenesis-Hypochondrogenesis: Evidence for a Molecular Defect of Type II \n\
        Collagen\", Memories of 20th Clinical Genetics Conference on Heritable Disorders of Connective Tissue and Skeletal \n\
        Dysplasias, March of Dimes, Baltimore, July 10-13, 1988, p\u00e1g. 19."],
                    features: [8, 40, 47, 49, 72, 115]
                },
                {
                    id: 9,
                    name: "S\u00edndrome de Well-Marchensani",
                    synonym: "Sindrome de Braquidactilia y esferofaquia ",
                    inheritance: "Autos\u00f3mica recesiva",
                    retardation: false,
                    retardationNotes: "",
                    evolution: "En la mayor\u00eda de los casos el diagn\u00f3stico se hace en la ni\u00f1ez, cuando son evidentes los problemas oculares. \n\
                    El cristalino es esf\u00e9rico y peque\u00f1o, present\u00e1ndose luxaci\u00f3n del mismo en cerca del 50% de los casos. La \n\
                    principal complicaci\u00f3n es la ceguera por glaucoma. Se han descrito casos con herencia autos\u00f3mica dominante.",
                    clinicalExams: "El diagn\u00f3stico es cl\u00ednico. Se recomienda evaluaci\u00f3n a los familiares, pues se han descrito manifestaciones\n\
                    menores en los heterocigotos.",
                    bibliography: ["JONES, K. L (1988). \"Smith's Recognizable Patterns of Human Malformations\", Fourth Edition, W. B. \n\
        Saunders Company, p\u00e1g. 397."],
                    features: [29, 34, 35, 37, 46, 56, 69, 94, 115]
                },
                {
                    id: 43,
                    name: "S\u00edndrome de Ehlers-Danlos",
                    synonym: "Sindrome de cutis hiperel\u00e1stica ",
                    inheritance: "Variable seg\u00fan el tipo (autos\u00f3mica  dominante I, II, III, IVb, VIII, XI; Autos\u00f3mica recesiva: IVa, VI, VII,\n\
         y X: recesiva ligada a X: V y IX",
                    retardation: false,
                    retardationNotes: "",
                    evolution: "Es frecuente la ruptura prematura de membranas. Es t\u00edpica la piel hiperel\u00e1stica con textura suave y aterciopelada,\n\
                    facilidad para hacer sangrados, abrasiones de piel y cicatrices con traumas leves. Se han descrito 11 tipos \n\
                    cl\u00ednicos: I: Grave; II: Moderado; III: Hipermovible; IV: Vascular; V: Ligado a X; VI: Ocular escoli\u00f3tico; VII:\n\
                    Artrocalasia m\u00faltiple cong\u00e9nita; VIII: con Periodontitis; IX: S\u00edndrome del cuerno occipital; X: Defecto fibronectivo; \n\
                    XI: Inestabilidad articular familiar. El 75% de los casos corresponde a los tipos I y II.",
                    clinicalExams: "El diagn\u00f3stico es cl\u00ednico. En algunos tipos puede confirmarse el diagn\u00f3stico mediante an\u00e1lisis enzim\u00e1tico o\n\
                    molecular. No se conoce el defecto b\u00e1sico en los tipos l, II, III, VIII y XI; el tipo IV se debe a deficiencia en \n\
                    Col\u00e1geno tipo III; el tipo V se debe a deficiencia de la enzima lisil oxidasa, el tipo VI se debe a deficiencia de \n\
                    lisil hidroxilasa; el tipo VII a deficiencia en procol\u00e1geno peptidasa; el tipo IX a deficiencia en transporte del \n\
                    cobre y el tipo X a deficiencia de fibronectina. La biopsia de piel muestra aumento en el n\u00famero de fibras el\u00e1sticas.",
                    bibliography: ["BEIGHTON, P. et al. (1988). \"International Nosology of Heritable Disorders of Connective Tissue, Berlin 1986\", \n\
        American Journal of Medical Genetics, Vol. 29: 581-594.",
                        "HARTSFIELD, J. K. and KOUSSEFF, B. (1990). \"Phenotypic Overlap of Ehlers-Danlos Syndrome Types IV and VÐI\", American Journal \n\
        of Medical Genetics, Vol. 37: 465470."],
                    features: [84, 88, 89, 94]
                },
                {
                    id: 4,
                    name: "S\u00edndrome de Costilla Corta-Polidactilia, Tipo No-Majewski",
                    synonym: "Sindrome de Costilla Corta-Polidactilia, tipo Saldino-Noonan ",
                    inheritance: "Autos\u00f3mica recesiva",
                    retardation: "?",
                    retardationNotes: "",
                    evolution: "Todos mueren en las primeras horas de vida por insuficiencia respiratoria secundaria a hipoplasia pulmonar. Algunos \n\
                    pueden ser mortinatos. Usualmente hay apariencia hidr\u00f3pica con abdomen protuberante. Algunos presentan malformaciones  \n\
                    m\u00faltiples de internos. La polidactilia usualmente es post-axial, aunque puede no estar presente y no hay labio ni paladar \n\
                    hendido, a diferencia del tipo Majewski.",
                    clinicalExams: "El diagn\u00f3stico es cl\u00ednico y radiol\u00f3gico. En huesos largos tubulares son t\u00edpicas las met\u00e1fisis irregulares con pelvis\n\
                    \u00f3sea peque\u00f1a y techos acetabulares aplanados.",
                    bibliography: ["SPRANGER, J. W. et al. (1974). \"Short Rib-Polydactyly Syndrome, Saldino-Noonan Type\" in Bone Dysplasias, W. B. \n\
        Saunders Company, p\u00e1gs. 53-54."],
                    features: [62, 65, 72, 78, 79, 94, 99, 101, 115]
                },
                {
                    id: 88,
                    name: "Osteog\u00e9nesis Imperfecta",
                    synonym: "Enfermedad del hueso fr\u00e1gil",
                    inheritance: "Variable seg\u00fan el tipo (autos\u00f3mica  dominante I, y IV; Autos\u00f3mica recesiva: II y III",
                    retardation: false,
                    retardationNotes: "",
                    evolution: "Ocurre por un defecto en la bios\u00edntesis del col\u00e1geno tipo I, lo cual produce osteopenia y favorece la presentaci\u00f3n de\n\
                        fracturas recurrentes. Pueden presentarse alteraciones dentales (dentinog\u00e9nesis imperfecta) y sordera prematura \n\
                        asociadas. La severidad cl\u00ednica var\u00eda ampliamente desde mortinatos a sordera o la aparici\u00f3n tard\u00eda de fracturas en\n\
                        la vida adulta. Se han descrito cuatro tipos b\u00e1sicos: I: Leve osteopenia con fracturas recurrentes, escleras azules\n\
                        y sordera presenil; II: Se caracteriza por enanismo evidente al nacer y severa deformidad \u00f3sea que usualmente lleva \n\
                        a la muerte en el per\u00edodo neonatal; III: Deformidades progresivas, severo retardo en el crecimiento, dentinog\u00e9nesis\n\
                        imperfecta y escleras-blancas; IV: Fragilidad y deformidad \u00f3sea variables, escleras blancas y pueden no presentarse \n\
                        fracturas en la ni\u00f1ez.",
                    clinicalExams: "El diagn\u00f3stico es cl\u00ednico y radiol\u00f3gico. RX muestran d\u00e9ficit en la mineralizaci\u00f3n de cr\u00e1neo con presencia de huesos \n\
                    wormianos, evidencia de fracturas de huesos largos, platispondilia y deformidades costales. Mediante cultivo de fibroblastos\n\
                     de piel se puede analizar el col\u00e1geno y buscar el defecto a nivel molecular. En algunos casos la fosfatasa alcalina s\u00e9rica \n\
                     puede estar elevada y puede haber hipercalciuria.",
                    bibliography: ["BYERS, P. H. et al. (1988). \"Perinatal Lethal Osteogenesis Imperfecta (01 Type II): A Biochemically Heterogeneous\n\
        Disorder Usually Due to New Mutations in the Genes for Type I Collagen\", American Journal of Human Genetics, Vol. 42: 237-248.",
                        "WHYTE, M. P. (1990). \"Heritable Metabolic and Dysplastic Bone Diseases\", Endocrinology and Metabolism Clinics of North America, \n\
        Vol. 19, No. 1: 133-173."],
                    features: [4, 30, 56, 63, 66, 67, 71, 72, 84, 95, 115]
                },
                {
                    id: 5,
                    name: "S\u00edndrome de Costilla Corta-Polidactilia, Tipo Majewski",
                    synonym: "Sindrome de Majewski",
                    inheritance: "Autos\u00f3mica recesiva",
                    retardation: "?",
                    retardationNotes: "",
                    evolution: "Usualmente hay poli-hidramnios en el embarazo. La mayor\u00eda son mortinatos o fallecen en el per\u00edodo neonatal por insuficiencia\n\
                    respiratoria. Usualmente hay hipoplasia de ep\u00edglotis, laringe y pulmones. Se ha descrito displasia renal. La polidactilia \n\
                    puede ser pre-axial, axial o post-axial y es m\u00e1s severa que en el tipo no-Majewski, donde es solamente post-axial",
                    clinicalExams: "El diagn\u00f3stico es cl\u00ednico y radiol\u00f3gico. Las tibias est\u00e1n arqueadas y muy acortadas.",
                    bibliography: ["HENNEKAM, R. C. M. (1991). \"Short Rib Syndrome\", American Journal of Medical Genetics, Vol. 40: 230-233.",
                        "MOTEGI, T. et al. (1979). \"Short Rib-Polydactyly Syndrome, Majewski Type, in Two Male Siblings\", Human Genetics, Vol. 49:269-275."],
                    features: [49, 54, 57, 59, 62, 65, 69, 72, 77, 78, 79, 99, 115]
                },
                {
                    id: 74,
                    name: "S\u00edndrome de Rubinstein-Taybi",
                    synonym: "Sindrome del pulgar y grueso artejo anchos",
                    inheritance: "presentaci\u00f3n espor\u00e1dica",
                    retardation: true,
                    retardationNotes: "",
                    evolution: "Muy pocas veces se hace el diagn\u00f3stico al nacer. Se ha descrito dificultad y/o infecciones respiratorias en la infancia \n\
                    acompa\u00f1adas de dificultades para la alimentaci\u00f3n. Se cree que alrededor de uno de cada 300 ni\u00f1os de las instituciones de \n\
                    retardo mental tienen este s\u00edndrome. Se han descrito casos con herencia autos\u00f3mica dominante y autos\u00f3mica recesiva.",
                    clinicalExams: "El diagn\u00f3stico es cl\u00ednico. Se recomienda realizar evaluaci\u00f3n dermatogl\u00edfica donde se espera encontrar anormalidades \n\
                    especialmente en \u00e1rea tenar y a nivel de la primera \u00e1rea interdigital. RX muestran retardo en la maduraci\u00f3n \u00f3sea.",
                    bibliography: ["GIROUX, J. and MILLER, J. R. (1967). \"Dermatoglyphics of the Broad Thumb and Great Toe Syndrome\", Amer J Dis Child,\n\
         Vol. 113: 207-209.",
                        "RUBINSTEIN, J. H., HENNEKAM, R. C. M., STEVENS, C. A. and others (1990). Supplement Number 6 on \"Rubinstein-Taybi Syndrome\",\n\
         American Journal of Medical Genetics, p\u00e1gs. 2-83."],
                    features: [7, 22, 43, 46, 57, 69, 75, 75, 82, 114, 115]
                },
                {
                    id: 77,
                    name: "S\u00edndrome de blefarofimosis",
                    synonym: "Sindrome de blefarofimosis, ptosis y pliegue epic\u00e1ntico invertido",
                    inheritance: "Autos\u00f3mica dominante",
                    retardation: false,
                    retardationNotes: "",
                    evolution: "El cuadro cl\u00ednico es evidente al nacimiento. Estos pacientes se benefician mucho de la cirug\u00eda pl\u00e1stica tanto por razones\n\
                     est\u00e9ticas como oftalmol\u00f3gicas, ya que en casos no corregidos se puede presentar un d\u00e9ficit visual importante. Se han\n\
                      descrito dos tipos: I: asociado con infertilidad de las mujeres afectadas y penetrancia completa del gen, y II: \n\
                      transmitido por hombres y mujeres y asociado con penetrancia incompleta del gen.",
                    clinicalExams: "El diagn\u00f3stico es cl\u00ednico. Se recomienda evaluar a los familiares, debido a la no-penetrancia del gen o a la m\u00ednima\n\
                    expresi\u00f3n del mismo, en muchos casos.",
                    bibliography: ["TEMPLE, I. K. and BARAITSER, M. (1989). \"Pitfalls in counselling of the blepharophimosis, ptosis, epicanthus \n\
        inversus syndrome (BPES)\", Journal of Medical Genetics, Vol. 26: 517-519.",
                        "ZLOTOGORA, J. et al. (1983). \"The Blepharophimosis, Ptosis and Epicanthus Inversus Syndrome: Delineation of Two Types\", \n\
        American Journal of Human Genetics, Vol. 35: 1.020-1.027"],
                    features: [1, 20, 21, 25, 27, 40, 59, 102]
                },
                {
                    id: 78,
                    name: "S\u00edndrome de Schwartz-Jampel",
                    synonym: "Distrofia osteo-condro-muscular",
                    inheritance: "Autos\u00f3mica recesiva",
                    retardation: false,
                    retardationNotes: "Algunos",
                    evolution: "El cuadro cl\u00ednico aparece antes de los 30 meses de edad y ocasionalmente es evidente desde el nacimiento. Es t\u00edpica \n\
                    la falta de expresi\u00f3n facial con blefarofimosis y microstom\u00eda. Hay mioton\u00eda progresiva, hipertrofia muscular, pobre \n\
                    desarrollo del tejido subcut\u00e1neo, postura y marcha r\u00edgidas por limitaci\u00f3n en la motilidad articular. El desarrollo \n\
                    motor y el crecimiento son lentos, pero la mayor\u00eda (75%) presentan un desarrollo mental normal, aunque se han descrito \n\
                    algunos casos severos con d\u00e9ficit mental. Presentan riesgo elevado para la anestesia.",
                    clinicalExams: "El diagn\u00f3stico es cl\u00ednico. Se recomienda realizar electromiograma que muestra actividad continua en reposo, alta \n\
                    frecuencia y bajo voltaje con descargas miot\u00f3nicas (esta actividad no desaparece mediante curarizaci\u00f3n, en muchos \n\
                    casos). La biopsia muscular muestra cambios distr\u00f3ficos leves o puede ser normal.",
                    bibliography: ["CAO, A. et al. (1978). \"Schwartz-Jampel Syndrome\", Journal of Neurological Science, Vol. 35: 175-187.",
                        "FARRELL, S. A. et al. (1987). \"Neonatal Manifestations of Schwartz-Jampel Syndrome\", American Journal of Medical Genetics,\n\
        Vol. 27: 799-805."],
                    features: [12, 13, 25, 35, 37, 51, 57, 63, 67, 83, 85, 115, 118]
                },
                {
                    id: 72,
                    name: "S\u00edndrome de Sotos",
                    synonym: "Gigantismo cerebral",
                    inheritance: "presentaci\u00f3n espor\u00e1dica",
                    retardation: true,
                    retardationNotes: "Grado variable",
                    evolution: "A nacer son grandes para su edad gestacional. Presentan retardo en el desarrollo psico-motor y del lenguaje, a pesar\n\
                    de que su crecimiento, su maduraci\u00f3n esquel\u00e9tica y la erupci\u00f3n dental est\u00e1n acelerados en la infancia. La estatura \n\
                    final, en la edad adulta, est\u00e1 dentro del rango normal. Algunos pacientes presentan anomal\u00edas urogenitales, \n\
                    cardiopat\u00edas, movimientos incoordinados y/o hipoton\u00eda. Se han descrito casos con herencia autos\u00f3mica dominante y \n\
                    autos\u00f3mica recesiva.",
                    clinicalExams: "El diagn\u00f3stico es cl\u00ednico y radiol\u00f3gico. RX muestran edad \u00f3sea avanzada. Se recomienda evaluaci\u00f3n cardiol\u00f3gica\n\
                    y urol\u00f3gica en los pacientes sospechosos.",
                    bibliography: ["KANEKO, H. et al. (1987). \"Congenital Heart Defects in Sotos Sequence\", American Journal of Medical Genetics, \n\
        Vol. 26: 569-576. ",
                        "WINSHIP, I. M. (1985). \"Sotos Syndrome - autosomal dominant inheritance substantiated\", Clinical Genetics, Vol. 28: 243-246."],
                    features: [8, 19, 22, 48, 68, 103, 110, 112, 114]
                },
                {
                    id: 53,
                    name: "Acondroplasia",
                    synonym: "Condrodistrofia fetal",
                    inheritance: "Autos\u00f3mica dominante",
                    retardation: false,
                    retardationNotes: "",
                    evolution: "Usualmente hay leve retardo en el desarrollo motor. El tronco es de tama\u00f1o normal y la cabeza es desproporcionadamente \n\
                    grande, la cara tosca. La talla final est\u00e1 entre 124-131 cm. Pueden presentarse complicaciones neurol\u00f3gicas por el \n\
                    foramen magnum peque\u00f1o y estrechez del canal medular, pudiendo ser la causa de muerte en la infancia. Cuando ocurre \n\
                    hidrocefalia puede haber retardo mental secundario. Algunos pacientes presentan alteraciones cardiovasculares en la edad \n\
                    adulta. Debido a que la mayor\u00eda no se reproducen ocurre una alta tasa de mutaciones nuevas (90%).",
                    clinicalExams: "El diagn\u00f3stico es cl\u00ednico y   RX muestran acortamiento rizom\u00e9lico de extremidades con aparente aumento del di\u00e1metro \n\
                    y la densidad de los huesos largos; columna vertebral muestra disminuci\u00f3n de la distancia inter-pedicular y del di\u00e1metro\n\
                     antero-posterior; la pelvis es ancha y corta.",
                    bibliography: ["HECHT, J. T. et al. (1987). \"Mortality in Achondroplasia\", American Journal of Human Genetics, Vol. 41: 454-464.",
                        "TACHDJIAN (1990). \"Pediatric Orthopedics\", Second Edition, W. B. Saunders Company, Vol. 2, p\u00e1gs. 720-729."],
                    features: [1, 8, 11, 40, 45, 66, 67, 72, 115]
                },
                {
                    id: 46,
                    name: "S\u00edndrome de X-Fr\u00e1gil",
                    synonym: "S\u00edndrome de martin-bell",
                    inheritance: "recesiva ligada a X",
                    retardation: true,
                    retardationNotes: "",
                    evolution: "Es la forma m\u00e1s com\u00fan de retardo mental hereditario y la segunda causa de retardo mental por alteraciones cromos\u00f3micas \n\
                    (despu\u00e9s del S\u00edndrome de Down). Esta entidad puede representar hasta el 10% de los pacientes en instituciones de retardo\n\
                    mental. En la infancia temprana pueden ser hipot\u00f3nicos. El grado de d\u00e9ficit mental es variable (lo presentan alrededor \n\
                    del 80% de los hombres y el 35% de las mujeres portadoras). La mayor\u00eda presentan problemas de atenci\u00f3n e hiperactividad y\n\
                    se han descrito con frecuencia autismo, movimientos estereotipados de las manos y/o alteraciones de conducta. A\u00fan existe\n\
                    controversia sobre el beneficio de la administraci\u00f3n de \u00e1cido f\u00f3lico y estimulantes del Sistema Nervioso Central. Algunos\n\
                    recomiendan investigar este s\u00edndrome en todos los individuos con d\u00e9ficit mental de etiolog\u00eda desconocida.",
                    clinicalExams: "El diagn\u00f3stico es cl\u00ednico y de laboratorio. Se encuentra usualmente fragilidad del extremo distal del brazo largo del \n\
                    cromosoma X (Xq27.3). Se debe solicitar la t\u00e9cnica de cariotipo espec\u00edfica para esta entidad. El estudio citogen\u00e9tico \n\
                    solamente detecta el 50% de las portadoras obligadas, por lo cual se han desarrollado ya pruebas moleculares para detecci\u00f3n\n\
                    intrag\u00e9nica del S\u00edndrome de X-fr\u00e1gil.",
                    bibliography: ["CHUDLEY, A. E. and HAGERMAN, R. J. (1987). \"Fragile X Syndrome\", The Journal of Pediatrics, Vol. 110, No. 6: 821-831.",
                        "VERKERK, A. J. M. H. et al. (1992). \"Intragenic Probe Used for in Fragile X Families\", American Journal of Medical Genetics,\n\
         Special Issue: X-Linked Mental Retardation 5, Vol. 43: 192-196."],
                    features: [48, 58, 99, 114]
                },
                {
                    id: 3,
                    name: "S\u00edndrome de Rothmund-Thomson",
                    synonym: "Poiquilodermia cong\u00e9nita",
                    inheritance: "autos\u00f3mica recesiva",
                    retardation: false,
                    retardationNotes: "algunos",
                    evolution: "Las alteraciones de piel usualmente son evidentes en el primer a\u00f1o de Vida. Cerca de la mitad de los pacientes desarrollan \n\
                    cataratas juveniles. Las complicaciones principales son secundarias a la fotosensibilidad de la piel, incluyendo malignizaci\u00f3n\n\
                    en algunos casos. Ocasionalmente se presentan anomal\u00edas esquel\u00e9ticas (antebrazo y mano) asociadas. Se han descrito algunos\n\
                    casos con retardo en el desarrollo y retardo mental. Aunque se ha descrito herencia autos\u00f3mica recesiva, a\u00fan no se sabe \n\
                    porqu\u00e9 es m\u00e1s frecuente en mujeres.",
                    clinicalExams: "El diagn\u00f3stico es cl\u00ednico y radiol\u00f3gico. RX muestran cambios osteopor\u00f3ticos. Se ha encontrado deficiencia de la \n\
                    hormona de crecimiento en estos pacientes.",
                    bibliography: ["KAUFMANN, S. et al. (1986). \"Growth Hormone Deficiency in the Rothmund-Thomson Syndrome\", American Journal \n\
        of Medical Genetics, Vol. 23: 861-868.",
                        "STARR, D. G. et al. (1985). \"Non-dermatological complications and genetic aspects of the Rothmund-Thomson syndrome\", \n\
        Clinical Genetics, Vol. 27: 102-104."],
                    features: [35, 37, 55, 56, 86, 88, 89, 90, 102, 115]
                },
                {
                    id: 61,
                    name: "S\u00edndrome de Zellweger",
                    synonym: "S\u00edndrome cerebro-hepato-renal",
                    inheritance: "autos\u00f3mica recesiva",
                    retardation: true,
                    retardationNotes: "",
                    evolution: "La enfermedad se caracteriza por ausencia de peroxisomas y alteraci\u00f3n del metabolismo mitocondrial. Usualmente es \n\
                    fatal y la mayor\u00eda mueren por alteraciones respiratorias en el per\u00edodo neonatal o antes de los seis meses de edad. \n\
                    Se ha encontrado severos defectos neurol\u00f3gicos (macro y micropatol\u00f3gicos) probablemente secundarios a defectos en la\n\
                    migraci\u00f3n neuronal. Muchos pacientes presentan convulsiones. Se ha propuesto tratamiento con l\u00edpidos orales, \n\
                    suplencia de sales biliares y esteroides adrenales.",
                    clinicalExams: "El diagn\u00f3stico es cl\u00ednico y de laboratorio. El laboratorio de estos pacientes reporta: niveles elevados de \u00e1cidos\n\
                    grasos de cadena muy larga, en cultivo de tejidos y en l\u00edquidos corporales; hipoglicemia, hierro s\u00e9rico elevado, \n\
                    siderosis, acidemia hiperpipec\u00f3lica, dep\u00f3sito de gluc\u00f3geno cerebral y hep\u00e1tico, dep\u00f3sito cerebral de l\u00edpidos \n\
                    sudanofilicos, \u00e1cidos biliares anormales, aciduria dicarbox\u00edlica e hipocarnitinemia.",
                    bibliography: ["MOSER, A. E. et al. ( 1984). \"The Cerebrohepatorenal (Zellweger) Syndrome\", The New England Journal of\n\
        Medicine, Vol. 310, No. 18:1.141-1.146.",
                        "WILSON, G. N. et al. (1986). \"Zellweger Syndrome: Diagnostic Assays, Syndrome Delineation, and Potential Therapy\", \n\
        American Journal of Medical Genetics, Vol. 24: 69-82."],
                    features: [1, 13, 21, 34, 36, 37, 47, 59, 60, 83, 94, 96, 98, 114, 115]
                },
                {
                    id: 101,
                    name: "S\u00edndrome de Williams",
                    synonym: "Hipercalcemia idiop\u00e1tica con estenosis a\u00f3rtica supravalvular",
                    inheritance: "Presentaci\u00f3n espor\u00e1dica",
                    retardation: true,
                    retardationNotes: "",
                    evolution: "En la infancia se presentan problemas para la alimentaci\u00f3n, estre\u00f1imiento y v\u00f3mitos. Hay retardo en el desarrollo\n\
                    psicomotor, irritabilidad y problemas de aprendizaje con d\u00e9ficit mental de grado variable (se han descrito casos \n\
                    con inteligencia normal). La facies t\u00edpica (\"cara de duende\") puede no ser evidente al nacer pero llega a ser \n\
                    caracter\u00edstica con el tiempo. La mayor\u00eda desarrollan alteraciones cardiovasculares, siendo la estenosis a\u00f3rtica \n\
                    supra-valvular la m\u00e1s importante. La mitad de los pacientes hacen contracturas articulares progresivas. En los \n\
                    adultos con frecuencia se presentan hipertensi\u00f3n, problemas gastrointestinales y urinarios.",
                    clinicalExams: "El diagn\u00f3stico es cl\u00ednico. Se recomienda evaluaci\u00f3n cardiol\u00f3gica, neurol\u00f3gica y oftalmol\u00f3gica. Aunque la \n\
                    mayor\u00eda de los pacientes presentan s\u00edntomas de hipercalcemia, \u00e9sta s\u00f3lo se ha documentado en la infancia y no\n\
                    en todos los pacientes.",
                    bibliography: ["GREENBERG, F. and Others. (1990). Supplement Number 6 on \"Williams Syndrome\", American Journal of Medical \n\
        Genetics, p\u00e1gs.84-131.",
                        "MORRIS, C. A. et al. (1988). \"Natural history of Williams Syndrome: Physical characteristics\", The Journal of Pediatrics,\n\
         Vol. 113, No. 2, p\u00e1gs. 318-326"],
                    features: [7, 21, 33, 40, 50, 55, 76, 81, 94, 95, 99, 103, 114, 115]
                },
                {
                    id: 111,
                    name: "S\u00edndrome de Ruvalcaba",
                    synonym: "S\u00edndrome de Osteodistrofia y retardo mental",
                    inheritance: "Autos\u00f3mica dominante",
                    retardation: true,
                    retardationNotes: "",
                    evolution: "Al nacer se encuentra retardo de crecimiento intra-uterino con post-natal retardo en el crecimiento y desarrollo.\n\
                    A pesar del retardo mental se ha descrito una personalidad agradable. Usualmente hay retraso en el desarrollo \n\
                    puberal. Se han descrito anormalidades genito-urinarias y cardiacas asociadas. Se ha encontrado expresi\u00f3n variable\n\
                    del gen con p\u00e9rdida de la penetrancia en algunas familias.",
                    clinicalExams: "El diagn\u00f3stico es cl\u00ednico y radiol\u00f3gico. Se recomienda evaluaci\u00f3n renal en todos los pacientes. RX muestran\n\
                    huesos metacarpianos cortos y displasia esp\u00f3ndilo-epifisiaria.",
                    bibliography: ["BIALER, M. G. et al. (1989). \"Apparent Ruvalcaba Syndrome With Genitourinary Abnormalities\" American Journal \n\
        of Medical Genetics, Vol. 33: 314-317."],
                    features: [7, 22, 43, 43, 51, 63, 66, 67, 69, 72, 74, 77, 99, 114, 115]
                },
                {
                    id: 108,
                    name: "S\u00edndrome de Mietens",
                    synonym: "S\u00edndrome de retardo mental tipo Mietens-Weber",
                    inheritance: "Autos\u00f3mica recesiva",
                    retardation: true,
                    retardationNotes: "",
                    evolution: "Usualmente presentan retardo en el crecimiento m\u00e1s marcado que el retardo mental. Sus principales limitaciones est\u00e1n\n\
                    a nivel visual y en su motilidad articular. En ocasiones ocurren complicaciones vasculares serias como ruptura de \n\
                    aneurisma cerebral. Se ha descrito un caso con inteligencia normal.",
                    clinicalExams: "El diagn\u00f3stico es cl\u00ednico y radiol\u00f3gico. En RX se ha descrito acortamiento de c\u00fabito y radio, ausencia de las\n\
                    ep\u00edfisis del radio con luxaci\u00f3n de la cabeza del mismo. Se ha descrito ausencia unilateral del peron\u00e9.",
                    bibliography: ["GORLIN, R. J. et al. (1990). \"Syndromes of the Head and Neck\", Third Edition, Oxford University Press, \n\
        p\u00e1gs. 907-908."],
                    features: [27, 28, 36, 43, 76, 83, 114, 115]
                },
                {
                    id: 86,
                    name: "S\u00edndrome de Sjogren-Larsson",
                    synonym: "S\u00edndrome de oligofrenia, ictiosis y diplej\u00eda esp\u00e1tica",
                    inheritance: "Autos\u00f3mica recesiva",
                    retardation: true,
                    retardationNotes: "",
                    evolution: "Las alteraciones de piel se observan principalmente en la porci\u00f3n distal del tronco y las extremidades inferiores,\n\
                    desde temprana infancia, aumentando en los primeros a\u00f1os de vida y luego se estabilizan. El compromiso neurol\u00f3gico \n\
                    usualmente es de miembros inferiores. Se ha descrito fotofobia y en algunos casos convulsiones. Se ha sugerido que\n\
                     esta enfermedad puede deberse a un defecto en el metabolismo de los \u00e1cidos grasos esenciales.",
                    clinicalExams: "El diagn\u00f3stico es cl\u00ednico. El electroencefalograma muestra actividad parox\u00edstica lenta. En el fondo de ojo se \n\
                    encuentra un moteado fino puntiforme alrededor de la m\u00e1cula.",
                    bibliography: ["JONES, K. L. (1988). \"Smith's Recognizable Patterns of Human Malformations\", Fourth Edition, W. B. Saunders\n\
         Company, p\u00e1g. 162."],
                    features: [2, 38, 87, 114, 115]
                },
                {
                    id: 106,
                    name: "Asociaci\u00f3n de Charge",
                    synonym: "",
                    inheritance: "Presentaci\u00f3n espor\u00e1dica",
                    retardation: true,
                    retardationNotes: "",
                    evolution: "El nombre CHARGE recoge las primeras letras de los \u00f3rganos comprometidos (en ingl\u00e9s): Colobomas, Heart (cardiopat\u00edas),\n\
                    Atresia de coanas, Retardo en el crecimiento, Genitales an\u00f3malos, Ears (anomal\u00edas auriculares y/o sordera). No se \n\
                    conoce la causa de estas alteraciones pero se cree que ocurren por detenci\u00f3n del desarrollo entre los d\u00edas 35 y 45 \n\
                    despu\u00e9s de la concepci\u00f3n. Muchos de estos ni\u00f1os presentan retardo de crecimiento intra-uterino y mueren en el per\u00edodo \n\
                    neonatal. Otros presentan dificultades para la alimentaci\u00f3n y presentan retardo en el desarrollo motor. El pron\u00f3stico \n\
                    depende de la severidad de las alteraciones y de su manejo.",
                    clinicalExams: "El diagn\u00f3stico es cl\u00ednico y radiol\u00f3gico. Existe superposici\u00f3n con algunas alteraciones descritas en la asociaci\u00f3n \n\
                    de VATER, algunos s\u00edndromes y/o alteraciones cromos\u00f3micas, lo cual debe considerarse siempre en el diagn\u00f3stico diferencial.\n\
                    Se han descrito casos con fenotipo femenino y cariotipo masculino, lo cual justifica a\u00fan m\u00e1s el estudio cromos\u00f3mico.",
                    bibliography: ["KUSHNICK, T. et al. (1992). \"Agonadism in a 46,XY Patient with CHARGE Association\", American Journal of Medical \n\
        Genetics, Vol 42: 96-99."],
                    features: [4, 32, 44, 59, 94, 99, 102, 114, 115]
                },
                {
                    id: 117,
                    name: "S\u00edndrome de Marshall",
                    synonym: "S\u00edndrome de sordera, miop\u00eda, cataratas y nariz en silla de montar",
                    inheritance: "Autos\u00f3mica dominante",
                    retardation: false,
                    retardationNotes: "",
                    evolution: "Aunque puede haber resoluci\u00f3n espont\u00e1nea de las cataratas, las principales complicaciones son usualmente oculares, \n\
                    pudiendo presentarse glaucoma y/o desprendimiento de retina. Ocasionalmente puede cursar con Secuencia de Robin, lo\n\
                    cual hace m\u00e1s dif\u00edcil diferenciar esta entidad del S\u00edndrome de Stick1er (encontr\u00e1ndose en este \u00faltimo un habitus \n\
                    marfanoide sin sordera). Ocasionalmente hay retardo mental.",
                    clinicalExams: "El diagn\u00f3stico es cl\u00ednico y radiol\u00f3gico. Los RX muestran calcificaciones men\u00edngeas y anormalidades esp\u00f3ndilo-\n\
                    epifisiales. Se recomienda evaluaci\u00f3n auditiva.",
                    bibliography: ["STRATTON, R. F. et al. (1991). \"Marshall Syndrome\", American Journal of Medical Genetics, Vol. 41: 35-38."],
                    features: [4, 29, 37, 40, 56, 67, 115]
                },
                {
                    id: 75,
                    name: "S\u00edndrome de Seckel",
                    synonym: "Enanismo con cabeza de p\u00e1jaro",
                    inheritance: "Autos\u00f3mica recesiva",
                    retardation: true,
                    retardationNotes: "",
                    evolution: "Al nacer hay severo retardo de crecimiento pero el desarrollo motor posterior puede ser cercano al normal. Usualmente\n\
                    presentan pobre desarrollo articular, lo cual favorece luxaciones de cadera y/o codo. Se ha descrito un tipo II, \n\
                    designado corno Pseudo-Seckel y que se caracteriza por acortamiento de extremidades, mientras en el S\u00edndrome de Seckel \n\
                    el enanismo es proporcionado. La talla final estar\u00e1 entre 90 y 105 cm y los pacientes pueden tener sobrevida larga.",
                    clinicalExams: "El diagn\u00f3stico es cl\u00ednico y radiol\u00f3gico. Se ha descrito pancitopenia en algunos casos. RX muestran maduraci\u00f3n \n\
                    disarm\u00f3nica del esqueleto y ep\u00edfisis c\u00f3nicas.",
                    bibliography: ["SHEBIB, S. et al. (1991). \"Osteodysplastic Variant of Primordial Dwarfism\", American Journal of Medical \n\
        Genetics, Vol. 40: 146-150."],
                    features: [7, 22, 41, 47, 57, 59, 62, 74, 76, 77, 99, 114, 115]
                },
                {
                    id: 73,
                    name: "S\u00edndrome de Cohen",
                    synonym: "S\u00edndrome de hipoton\u00eda, obesidad e incisivos prominentes",
                    inheritance: "Autos\u00f3mica recesiva",
                    retardation: true,
                    retardationNotes: "",
                    evolution: "La mayor\u00eda de los casos se diagnostican solamente en la ni\u00f1ez tard\u00eda o en la adolescencia. La hipoton\u00eda persiste \n\
                    despu\u00e9s de la lactancia y en esta etapa ya es evidente la obesidad. Aunque se debe sospechar esta entidad en los \n\
                    pacientes con retardo mental, obesidad y respiraci\u00f3n bucal, estas caracter\u00edsticas solas no sustentan el diagn\u00f3stico.\n\
                    Frecuentemente hay cubitus valgus, leve sindactilia en manos y \u00e9stas son angostas con dedos delgados.",
                    clinicalExams: "El diagn\u00f3stico es cl\u00ednico. Se recomienda realizar evaluaci\u00f3n oftalmol\u00f3gica y electro-retinograma. Se ha descrito \n\
                    leucopenia asintom\u00e1tica y/o alteraciones cromos\u00f3micas en algunos pacientes.",
                    bibliography: ["KONDO, I. et al. (1990). \"The Cohen Syndrome: Does Mottled Retina Separate a Finnish and a Jewish Type?\", \n\
        American Journal of Medical Genetics, Vol. 37: 109-113.",
                        "FRYNS, J. P. et al. (1990). \"Cohen Syndrome and De Novo Reciprocal Transloction t(5;7) (q33.1; p15.1)\", American Journal \n\
        of Medical Genetics, Vol. 37: 546-547."],
                    features: [1, 7, 22, 38, 41, 46, 47, 50, 56, 58, 84, 99, 111, 114, 115]
                },
                {
                    id: 65,
                    name: "Displasia Espondilo Epifisiaria Cong\u00e9nita",
                    synonym: "",
                    inheritance: "Autos\u00f3mica dominante",
                    retardation: false,
                    retardationNotes: "",
                    evolution: "El cuadro cl\u00ednico es evidente al nacimiento y presentan retraso en la iniciaci\u00f3n de la marcha debido a la hipoton\u00eda y \n\
                    las alteraciones esquel\u00e9ticas. Usualmente hay disminuci\u00f3n en la motilidad articular de codos, rodillas y caderas con \n\
                    rigidez principalmente matutina. Una de las complicaciones m\u00e1s graves es la luxaci\u00f3n atlanto-axial por hipoplasia del \n\
                    odontoides. Se recomienda cuidadosa evaluaci\u00f3n oftalmol\u00f3gica para prevenir el desprendimiento de retina. Manos y pies \n\
                    son de tama\u00f1o normal. La talla final del adulto est\u00e1 entre 84 y 128 cm. Se considera que en esta entidad hay un defecto \n\
                    en la s\u00edntesis del Col\u00e1geno 2A1.",
                    clinicalExams: "El diagn\u00f3stico es cl\u00ednico y radiol\u00f3gico. RX muestran retraso en la mineralizaci\u00f3n de ep\u00edfisis y aplanamiento de \n\
                    las mismas.",
                    bibliography: ["SPRANGER, J. W. et al. (1974). \"Bone Dysplasias\", W. B. Saunders Company, p\u00e1gs. 95-101."],
                    features: [1, 13, 29, 39, 45, 49, 63, 66, 67, 115, 120]
                },
                {
                    id: 63,
                    name: "S\u00edndrome de Johanson-Blizzard",
                    synonym: "S\u00edndrome de hipoplasia de alas nasales, hipotiroidismo, insuficiencia pancre\u00e1tica y sordera",
                    inheritance: "Autos\u00f3mica recesiva",
                    retardation: true,
                    retardationNotes: "la mayor\u00eda",
                    evolution: "En reci\u00e9n nacidos es frecuente la hipoton\u00eda y usualmente presentan bajo peso para su edad gestacional. Muchos mueren en\n\
                    el per\u00edodo neonatal. La facies es caracter\u00edstica y puede reconocerse desde el nacimiento. Es t\u00edpica la nariz en forma de \n\
                    \"pico de loro\" y con frecuencia hay defecto en la l\u00ednea media del cuero cabelludo, con patr\u00f3n anormal de implantaci\u00f3n del \n\
                    cabello. Se ha descrito mal absorci\u00f3n intestinal por insuficiencia pancre\u00e1tica, en todos los pacientes y hasta el momento  \n\
                    no hay evidencia de que esta alteraci\u00f3n sea progresiva. Aunque el retardo en el crecimiento ocurre en casi todos los  \n\
                    pacientes, el compromiso mental es variado y se ha descrito unos pocos pacientes con inteligencia normal.",
                    clinicalExams: "El diagn\u00f3stico es cl\u00ednico y de laboratorio. La biopsia pancre\u00e1tica muestra el grado de compromiso de este \u00f3rgano, con \n\
                    reemplazo graso del tejido acinar, en los casos avanzados.",
                    bibliography: ["GERSHONI-BARUCH, R. et al. (1990). \"Johanson-Blizzard Syndrome: Clinical Spectrum and Further Delineation of the Syndrome\" \n\
        American Journal of Medical Genetics, Vol. 35: 546-551.",
                        "GOULD, N. S. et al. (1989). \"Johanson-Blizzard Syndrome: Clinical and Pathological Findings in 2 Sibs\", American Journal of Medical \n\
        Genetics, Vol. 33: 194-199."],
                    features: [1, 4, 7, 26, 43, 55, 92, 100, 101, 103, 114, 115]
                },
                {
                    id: 59,
                    name: "S\u00edndrome de Mulibrey Nanism",
                    synonym: "S\u00edndrome de Perheentupa",
                    inheritance: "Autos\u00f3mica recesiva",
                    retardation: false,
                    retardationNotes: "",
                    evolution: "La sigla MULIBREY corresponde a las palabras inglesas de los \u00f3rganos m\u00e1s comprometidos: MUscle (Debilidad muscular), Llver \n\
                    (Hepatomegalia), BRain (Dilataci\u00f3n ventricular cerebral), EYe (Pigmento amarillo en fondo de ojo). Las extremidades son \n\
                    usualmente cortas con manos y pies relativamente grandes. El engrosamiento y adherencia del pericardio aparecen en la \n\
                    infancia o en la ni\u00f1ez tard\u00eda y pueden producir hepatomegalia por falla cardiaca secundaria a la pericarditis constrictiva.\n\
                    Algunos mueren en la ni\u00f1ez por el compromiso cardiaco, sin embargo la mayor\u00eda llegan a la vida adulta sin incapacidades\n\
                    mayores.",
                    clinicalExams: "El diagn\u00f3stico es cl\u00ednico y radiol\u00f3gico. RX de cr\u00e1neo muestran dolicocefalia con silla turca en forma de J y TAC \n\
                    cerebral muestra dilataci\u00f3n ventricular; usualmente hay displasia fibrosa de la tibia.",
                    bibliography: ["GORLIN, R. J. et al. (1990). \"Syndromes of the Head and Neck\", Third Edition, Oxford University Press, p\u00e1gs. 321-322."],
                    features: [1, 11, 15, 38, 68, 72, 80, 94, 96, 115]
                },
                {
                    id: 56,
                    name: "S\u00edndrome de Marinesco-Sjogren",
                    synonym: "Degeneraci\u00f3n cerebro-lenticular",
                    inheritance: "Autos\u00f3mica recesiva",
                    retardation: true,
                    retardationNotes: "",
                    evolution: "El retardo psico-motor, las cataratas bilaterales y la ataxia cerebelar usualmente son evidentes desde el primer a\u00f1o de vida. \n\
                    Pueden presentarse disartria e hipogonadismo hipogonadotr\u00f3pico. Se cree que esta entidad puede ser una enfermedad de dep\u00f3sito \n\
                    causada por un d\u00e9ficit enzim\u00e1tico a\u00fan no definido (conclusiones basadas en hallazgos de microscop\u00eda electr\u00f3nica).",
                    clinicalExams: "El diagn\u00f3stico es cl\u00ednico e histo-patol\u00f3gico. Biopsia muscular muestra degeneraci\u00f3n grasa con aumento de vacuolas y en \n\
                    Sistema Nervioso Central se encuentra degeneraci\u00f3n de la corteza cerebelar. Microscop\u00eda electr\u00f3nica de fibroblastos de piel \n\
                    muestra grandes lisosomas con numerosos cuerpos de inclusi\u00f3n.",
                    bibliography: ["ROSENBERG, R. N. (1986). \"Neurogenetics\", Raven Press, New York, P\u00e1g. 134"],
                    features: [1, 3, 7, 28, 37, 114, 115, 117]
                },
                {
                    id: 54,
                    name: "S\u00edndrome Cerebro-\u00d3culo-Facio-Esqu\u00e9letico (COFS)",
                    synonym: "Artrogriposis neurog\u00e9nica o S\u00edndrome de Pena-Shokeir Tipo II",
                    inheritance: "Autos\u00f3mica recesiva",
                    retardation: true,
                    retardationNotes: "",
                    evolution: "Esta entidad usualmente se reconoce al nacer y el peso puede ser normal en este momento pero posteriormente hay retardo \n\
                    severo en el crecimiento y deterioro neurol\u00f3gico por desmielinizaci\u00f3n progresiva del Sistema Nervioso Central. La mayor\u00eda\n\
                    mueren antes de los cinco a\u00f1os de edad. En muchos casos no est\u00e1 claro si el defecto primario es neurol\u00f3gico y esto lleva \n\
                    a alteraci\u00f3n del desarrollo muscular (el cual puede empezar a\u00fan en el per\u00edodo embrionario o fetal) o se trata de una \n\
                    distrofia muscular cong\u00e9nita.",
                    clinicalExams: "El diagn\u00f3stico es cl\u00ednico, radiol\u00f3gico y patol\u00f3gico. En Sistema Nervioso Central se encuentra disminuci\u00f3n de sustancia\n\
                    blanca, hipoplasia o agenesia de cuerpo calloso, hipoplasia cerebelar y calcificaci\u00f3n intra-craneal. RX muestran osteoporosis,\n\
                    sin embargo \u00e9sta puede no estar presente al nacimiento.",
                    bibliography: ["GERSHONI-BARUCH, R. et al. (1991). \"Cerebro-Oculo-Facio-Skeletal Syndrome: Further Delineation\", American Journal of \n\
        Medical Genetics, Vol. 41: 74-77."],
                    features: [1, 7, 25, 28, 31, 37, 41, 47, 83, 91, 98, 114, 117]
                },
                {
                    id: 71,
                    name: "S\u00edndrome de Weaver",
                    synonym: "S\u00edndrome de sobrecrecimiento con acelerada maduraci\u00f3n esquel\u00e9tica, camptodactilia y cara inusual",
                    inheritance: "Presentaci\u00f3n espor\u00e1dica",
                    retardation: true,
                    retardationNotes: "",
                    evolution: "Estos ni\u00f1os son grandes al nacer y contin\u00faan con crecimiento acelerado en la infancia con retardo en el desarrollo psicomotor. \n\
                    Pueden presentar hipoton\u00eda o leve hiperton\u00eda. Puede presentarse inestabilidad atlanto-axial que requiere adecuado manejo \n\
                    ortop\u00e9dico preventivo. Se han descrito algunos casos sin sobrecrecimiento o con presentaci\u00f3n post-natal del mismo (iniciaci\u00f3n\n\
                    varios meses despu\u00e9s). Esta entidad es tres veces m\u00e1s frecuente en hombres que en mujeres. Se han descrito casos que sugieren \n\
                    herencia autos\u00f3mica dominante limitada por el sexo, recesiva ligada a X y autos\u00f3mica recesiva.",
                    clinicalExams: "El diagn\u00f3stico es cl\u00ednico y radiol\u00f3gico. RX muestran acelerada maduraci\u00f3n \u00f3sea. Los huesos del carpo muestran m\u00e1s avanzada\n\
                    osificaci\u00f3n que las falanges (lo contrario ocurre en el S\u00edndrome de Marshall-Smith); usualmente hay marcado ensanchamiento \n\
                    distal del f\u00e9mur.",
                    bibliography: ["KONDO, l. et al. (1991). \"Weaver Syndrome in Two Japanese Children\", American Journal of Medical Genetics, \n\
        Vol. 41: 221-224."],
                    features: [2, 19, 21, 22, 47, 50, 70, 75, 83, 85, 95, 112, 114, 116]
                },
                {
                    id: 52,
                    name: "S\u00edndrome de Marshall-Smith",
                    synonym: "S\u00edndrome de acelerada maduraci\u00f3n esquel\u00e9tica y cara inusual",
                    inheritance: "Presentaci\u00f3n espor\u00e1dica",
                    retardation: true,
                    retardationNotes: "",
                    evolution: "La maduraci\u00f3n \u00f3sea acelerada puede ser de iniciaci\u00f3n prenatal. Usualmente hay peso bajo para la talla. La mayor\u00eda mueren\n\
                    antes del segundo a\u00f1o de vida por problemas respiratorios. Usualmente presentan estridor respiratorio asociado a glosoptosis\n\
                    y/o laringomalacia. Del manejo agresivo de las complicaciones respiratorias depender\u00e1 el pron\u00f3stico.",
                    clinicalExams: "El diagn\u00f3stico es cl\u00ednico y radiol\u00f3gico. RX muestran maduraci\u00f3n esquel\u00e9tica acelerada. En manos las falanges proximales \n\
                    e intermedias est\u00e1n ensanchadas con adelgazamiento y acortamiento de las falanges distales. Las falanges muestran mayor edad \n\
                    \u00f3sea que los huesos del carpo (lo contrario ocurre en el S\u00edndrome de Weaver).",
                    bibliography: ["GORLIN, R. J. et al. (1990). \"Syndromes of the Head and Neck\", Third Edition, Oxford University Press, p\u00e1gs. 340-342."],
                    features: [1, 8, 11, 24, 30, 40, 75, 91, 95, 114, 116]
                },
                {
                    id: 51,
                    name: "S\u00edndrome FG",
                    synonym: "S\u00edndrome de Opitz-Kaveggia",
                    inheritance: "Recesiva ligada a X",
                    retardation: true,
                    retardationNotes: "",
                    evolution: "Pueden nacer con talla baja o ser normal con posterior retardo en el crecimiento. La mayor\u00eda mueren en las primeras semanas \n\
                    de vida o antes de los dos a\u00f1os de edad. Casi todos presentan severo estre\u00f1imiento en la infancia. Pueden presentar \n\
                    convulsiones y/o cardiopat\u00eda cong\u00e9nita. En la tercera parte de los casos se puede detectar las portadoras por presentar \n\
                    algunas  manifestaciones cl\u00ednicas de la entidad, aunque ninguna presenta retardo mental.",
                    clinicalExams: "El diagn\u00f3stico es cl\u00ednico. Se recomienda evaluaci\u00f3n neuroradiol\u00f3gica (25% presentan agenesia de cuerpo calloso).",
                    bibliography: ["OPITZ, J. M. et al. (1988). \"FG Syndrome Update 1988\", American Journal of Medical Genetics, Vol. 30: 309-328."],
                    features: [1, 8, 9, 11, 19, 21, 83, 99, 101, 114, 115]
                },
                {
                    id: 49,
                    name: "S\u00edndrome de Shprintzen",
                    synonym: "S\u00edndrome velo-cardio-facial",
                    inheritance: "Autos\u00f3mica dominante",
                    retardation: true,
                    retardationNotes: "",
                    evolution: "Cerca de la mitad de los pacientes presentan apneas obstructivas durante el sue\u00f1o, en el per\u00edodo neonatal. En la infancia y \n\
                    la ni\u00f1ez usualmente se presentan hipoton\u00eda y alteraciones de las v\u00edas respiratorias altas. Se observa retardo leve en el\n\
                    desarro110 psico-motor y del lenguaje. Todos presentan problemas de aprendizaje, aunque no todos presentan retardo mental.\n\
                    Usualmente hay una voz hipernasal (se cree que por hipoplasia de adenoides). Se ha descrito la anomal\u00eda de Di-George \n\
                    (hipoplasia t\u00edmica y de para-tiroides con cardiopat\u00eda) asociada a este s\u00edndrome. Algunos presentan episodios de broncoespasmo\n\
                    severo. Son t\u00edpicos los dedos de las manos delgados con falanges distales en forma de punta.",
                    clinicalExams: "El diagn\u00f3stico es cl\u00ednico. Se recomienda evaluaci\u00f3n cardiol\u00f3gica y auditiva a todos los pacientes.",
                    bibliography: ["JEDELE, K. B. et al. (1992). \"Velo-Cardio-Facial Syndrome Associated With Tetralogy of Fallot\", Pediatrics, Vol. 89,\n\
         No. 5: 915-919."],
                    features: [1, 4, 7, 41, 45, 49, 59, 84, 94, 114, 115]
                },
                {
                    id: 44,
                    name: "S\u00edndrome Trico-Dento-\u00d3seo",
                    synonym: "Amelog\u00e9nesis imperfecta, taurodontia y osteoesclerosis",
                    inheritance: "Autos\u00f3mica dominante",
                    retardation: false,
                    retardationNotes: "",
                    evolution: "Se ha descrito variable expresividad en la misma familia. El cabello con la edad tiende a alisarse en algunos casos. La \n\
                    principal complicaci\u00f3n es odontol\u00f3gica por deterioro de los dientes Con decoloraci\u00f3n y formaci\u00f3n de abscesos, llegando a \n\
                    la ca\u00edda de los mismos entre la segunda y tercera d\u00e9cadas de la vida. Las manifestaciones \u00f3seas usualmente dan poca o ninguna \n\
                    sintomatolog\u00eda. Se ha descrito una displasia trico-dental sin  compromiso \u00f3seo y tambi\u00e9n con herencia autos\u00f3mica dominante.",
                    clinicalExams: "El diagn\u00f3stico es cl\u00ednico y radiol\u00f3gico. RX muestran densidad \u00f3sea aumentada que se observa especialmente en placas\n\
                    laterales de cr\u00e1neo. Los niveles de fosfatasa \u00e1cida s\u00e9rica est\u00e1n elevados.",
                    bibliography: ["ETESON, D. J. and CLARK, R. D. (1988). \"A New Autosomal Dominant Trico-Dental Dysplasia\" , in Memories of 20th Clinical\n\
         Genetics Conference, March of Dimes, Baltimore, July 10-13, 1988, p\u00e1g. 17.",
                        "GORLIN, R. J. et al. (1990). \"Syndromes of the Head and Neck\", Third Edition, Oxford University Press, p\u00e1gs. 861-862."],
                    features: [11, 12, 56, 81]
                },
                {
                    id: 25,
                    name: "Melanosis Neurocut\u00e1nea",
                    synonym: "Secuencia de melanosis neurocut\u00e1nea",
                    inheritance: "Presentaci\u00f3n espor\u00e1dica",
                    retardation: true,
                    retardationNotes: "",
                    evolution: "Algunos pacientes son mortinatos. La alteraci\u00f3n cut\u00e1nea es evidente al nacimiento y posteriormente aparecen s\u00edntomas de la\n\
                    alteraci\u00f3n en Sistema Nervioso Central (melanosis progresiva de la pia-aracnoides), los cuales van desde convulsiones hasta\n\
                    deterioro mental progresivo llevando a la muerte antes de los dos a\u00f1os de edad, en la mayor\u00eda de los casos. Con frecuencia \n\
                    hay malignizaci\u00f3n de los melanomas, por lo cual se recomienda vigilancia permanente de las lesiones.",
                    clinicalExams: "El diagn\u00f3stico es cl\u00ednico. Se recomienda evaluaci\u00f3n y seguimiento neurol\u00f3gico en todos los pacientes.",
                    bibliography: ["JONES, K. L (1988). \"Smith's Recognizable Patterns of Human Malformations\", Fourth Edition, W. B. Saunders Company, \n\
        p\u00e1gs. 444-445."],
                    features: [86, 110, 114]
                },
                {
                    id: 40,
                    name: "S\u00edndrome de Scheie",
                    synonym: "Mucopolisacaridosis IS (MPS IS)",
                    inheritance: "Autos\u00f3mica recesiva",
                    retardation: false,
                    retardationNotes: "",
                    evolution: "Se considera que esta entidad es una variante al\u00e9lica del S\u00edndrome de Hurler y se debe a deficiencia de Alpha-1 iduronidasa.\n\
                    La iniciaci\u00f3n del cuadro cl\u00ednico es mucho m\u00e1s tard\u00eda que en otras mucopolisacaridosis (MPS I H), m\u00e1s leve y con mayor y mejor \n\
                    sobrevida. Algunos desarrollan sordera. Pueden presentarse complicaciones secundarias al estrechamiento del t\u00fanel del carpo.\n\
                    La estatura final puede ser normal.",
                    clinicalExams: "El diagn\u00f3stico es cl\u00ednico, radiol\u00f3gico y de laboratorio. Los RX muestran displasia de la cabeza femoral y los huesos del \n\
                    carpo son peque\u00f1os. Pueden presentarse quistes \u00f3seos. En orina se encuentra excreci\u00f3n aumentada de Dermat\u00e1n Sulfato y Hepar\u00e1n\n\
                    Sulfato. El d\u00e9ficit enzim\u00e1tico se confirma por an\u00e1lisis en cultivo de fibroblastos.",
                    bibliography: ["McKUSICK, V. A. and NEUFELD, E F. (1983). \"The Mucopolysaccharide Storage Diseases\" in The Metabolic Basis of Inherited \n\
        Disease, Flfth Edition, by Stanbury, J. B. et al. McGraw-Hill, p\u00e1gs. 751-777.",
                        "THOMPSON, J. N. and NOWAKOWSKI, R. W. (1991). \"Enzymatic Diagnosis of Selected Mucopolysaccharidoses\" in Techniques in Diagnostic \n\
        Human Biochemical Genetics by Hommes, F. A, Wiley-Liss, p\u00e1gs. 567-586."],
                    features: [4, 36, 38, 48, 61, 83, 91, 94, 95]
                },
                {
                    id: 35,
                    name: "S\u00edndrome de Child",
                    synonym: "S\u00edndrome de ictiosis, hemidisplasia y extremidades defectuosas",
                    inheritance: "Presentaci\u00f3n espor\u00e1dica",
                    retardation: true,
                    retardationNotes: "",
                    evolution: "Muchos son mortinatos, mueren en el per\u00edodo neonatal o en la infancia temprana. La alteraci\u00f3n de piel puede estar presente \n\
                    al nacimiento o aparecer en las primeras semanas de vida con compromiso de nuevas \u00e1reas a\u00fan varios a\u00f1os m\u00e1s tarde. Requieren \n\
                    manejo dermatol\u00f3gico y ortop\u00e9dico. Se han descrito casos con herencia autos\u00f3mica recesiva.",
                    clinicalExams: "El diagn\u00f3stico es cl\u00ednico y radiol\u00f3gico. Se recomienda evaluaci\u00f3n cardiol\u00f3gica. RX muestran compromiso esquel\u00e9tico variado\n\
                    y asim\u00e9trico, incluyendo cara, tronco, columna vertebral y extremidades.",
                    bibliography: ["BANKIER, A. et al. (1991). \"P.O.S.S.U.M.\", Version 3.0, C.P. Export Pty. Ltd., Melbourne. Syndrome Number 3457.",
                        "JONES, K. L. (1988). \"Smith's Recognizable Patterns of Human Malformations\", Fourth Edition, W. B. Saunders Company, p\u00e1gs. 266-267."],
                    features: [73, 83, 89, 90, 94, 98, 114]
                },
                {
                    id: 130,
                    name: "S\u00edndrome de Prune Belly",
                    synonym: "Secuencia de obstrucci\u00f3n uretral",
                    inheritance: "Presentaci\u00f3n espor\u00e1dica",
                    retardation: false,
                    retardationNotes: "",
                    evolution: "Se dio este nombre por la apariencia de la pared abdominal a una \"pasa seca\". Se cree que el evento patog\u00e9nico primario es \n\
                    la sobre-distensi\u00f3n abdominal fetal que en muchos casos se produce por obstrucci\u00f3n uretral, la cual lleva a distensi\u00f3n vesical\n\
                    y \u00e9sta a su vez comprime, adelgaza y produce atrofia por presi\u00f3n sobre los m\u00fasculos de la pared abdominal; el descenso \n\
                    testicular puede estar bloqueado por la distensi\u00f3n de la vejiga; y, por compresi\u00f3n de vasos il\u00edacos puede haber anomal\u00edas de \n\
                    miembros inferiores. Se ha propuesto una hip\u00f3tesis alternativa referente al origen embrionario de este s\u00edndrome, sugiri\u00e9ndose \n\
                    un defecto primario del desarrollo mesod\u00e9rmico, que afecta la formaci\u00f3n de los m\u00fasculos abdominales, la pared de la vejiga y \n\
                    los ur\u00e9teres. En otros casos se puede presentar este patr\u00f3n de anomal\u00edas sin compromiso del tracto urinario, asoci\u00e1ndose \n\
                    entonces a entidades que producen ascitis fetal, masas o visceromegalias. Con frecuencia se encuentra hipoplasia pulmonar y pie \n\
                    equino-varo en muchos de estos pacientes, aunque pueden presentarse otras anomal\u00edas asociadas. Muchos son mortinatos o mueren en\n\
                    el per\u00edodo neonatal por insuficiencia respiratoria o falla renal. El pron\u00f3stico depende usualmente de la severidad del da\u00f1o\n\
                    renal",
                    clinicalExams: "El diagn\u00f3stico es cl\u00ednico y radiol\u00f3gico. Se recomienda completa evaluaci\u00f3n urol\u00f3gica. Esta entidad puede formar parte de \n\
                    otros s\u00edndromes m\u00e1s complejos y en estos casos el estudio y manejo debe ser el de la entidad espec\u00edfica (ej.: S\u00edndrome de \n\
                    Turner, S\u00edndrome de Beckwith-Wiedemann, etc.).",
                    bibliography: ["BURTON, B. and DILLARD, R. G. (1984). \"Prune Belly Syndrome\", American Journal of Medical Genetics, \n\
        Vol. 17: 669-972.",
                        "NAKAYAMA, D. K. et al. (1984). \"The Pathogenesis of Prune Belly\", Am J Dis Child, Vol. 38: 834-836."],
                    features: [95, 98, 99]
                },
                {
                    id: 80,
                    name: "Displasia Ectod\u00e9rmica Tipo Hay-Wells",
                    synonym: "S\u00edndrome de AEC (\"Ankyloblefaron-Ectodermal Dysplasia-Clefting\")",
                    inheritance: "Autos\u00f3mica dominante",
                    retardation: false,
                    retardationNotes: "",
                    evolution: "El cuadro cl\u00ednico es evidente al nacer. En cara hay cejas y pesta\u00f1as escasas y los p\u00e1rpados fusionados requieren correcci\u00f3n \n\
                    quir\u00fargica temprana para evitar lesi\u00f3n de los ojos que usualmente son normales. Con frecuencia hay complicaciones en piel y \n\
                    cuero cabelludo (infecciones, granulomas cr\u00f3nicos, etc.) y pueden hacer hipertermia de dif\u00edcil manejo por el d\u00e9ficit de \n\
                    sudoraci\u00f3n.",
                    clinicalExams: "El diagn\u00f3stico es cl\u00ednico. Debe evaluarse la permeabilidad de los conductos lacrimales. Se recomienda evaluaci\u00f3n \n\
                    cromos\u00f3mica cuando se encuentren anomal\u00edas viscerales asociadas.",
                    bibliography: ["WEISS, A. H. et al. (1992). \"Ankyloblepharon Filiforme Adnatum\", American Journal of Medical Genetics,\n\
        Vol. 42: 369-373."],
                    features: [14, 25, 46, 49, 55, 81, 86, 90, 93]
                },
                {
                    id: 126,
                    name: "S\u00edndrome de Aase",
                    synonym: "Anemia de Diamond-Blackfan",
                    inheritance: "Autos\u00f3mica recesiva",
                    retardation: false,
                    retardationNotes: "",
                    evolution: "Usualmente ocurre retardo en el crecimiento, post-natal. Las anomal\u00edas de las extremidades son evidentes al nacimiento\n\
                    y es t\u00edpica la digitalizaci\u00f3n del pulgar (con 3 falanges). La anemia es variable en severidad, puede manifestarse \n\
                    tempranamente (primer a\u00f1o de vida) y casi siempre mejora con la edad. La mayor\u00eda responden bien a la terapia con \n\
                    prednisona. Se han descrito casos con herencia autos\u00f3mica dominante y muchos han sido de presentaci\u00f3n espor\u00e1dica.",
                    clinicalExams: "El diagn\u00f3stico es cl\u00ednico, radiol\u00f3gico y de laboratorio. RX muestran leve hipoplasia radial distal y variadas \n\
                    anomal\u00edas del primer metacarpiano y las falanges del pulgar. Estudio hematol\u00f3gico confirma anemia hipopl\u00e1stica con \n\
                    variable leucopenia",
                    bibliography: ["HURST, J. A. et al. (1991). \"Autosomal Dominant Transmission of Congenital Erythroid Hypoplastic Anemia with \n\
        Radial Abnormalities\", American Journal of Medical Genetics, Vol. 40: 482-484."],
                    features: [76, 94, 96, 106, 115]
                },
                {
                    id: 93,
                    name: "S\u00edndrome de Miller",
                    synonym: "S\u00edndrome de disostosis acrofacial post-axial",
                    inheritance: "Autos\u00f3mica recesiva",
                    retardation: false,
                    retardationNotes: "",
                    evolution: "La cara es similar a la descrita en el S\u00edndrome de Treacher Collins, pero se diferencia por el compromiso de extremidades.\n\
                    Pueden presentar sordera conductiva, cardiopat\u00edas, anomal\u00edas genito-urinarias y/o pezones supernumerarios. Ocasionalmente \n\
                    hay retardo mental. Usualmente requieren m\u00faltiples cirug\u00edas pl\u00e1sticas para mejorar su apariencia. Se han descrito casos con \n\
                    herencia autos\u00f3mica dominante.",
                    clinicalExams: "El diagn\u00f3stico es cl\u00ednico y radiol\u00f3gico. C\u00fabito y radio en algunos casos est\u00e1n acortados y con sinostosis.",
                    bibliography: ["HAUSS-ALBERT, H. and PASSARGE, E. (1988). \"Postaxial Acrofacial Dysostosis Syndrome\", American Journal of Medical \n\
        Genetics, Vol. 31: 701-703."],
                    features: [22, 32, 45, 47, 49, 59, 73, 76, 77, 79]
                },
                {
                    id: 125,
                    name: "Progeria",
                    synonym: "S\u00edndrome de Hutchinson-Gilford",
                    inheritance: "Autos\u00f3mica recesiva",
                    retardation: false,
                    retardationNotes: "",
                    evolution: "Los s\u00edntomas aparecen desde el primer a\u00f1o de vida con falla en el crecimiento. Posteriormente aparecen signos de \n\
                    envejecimiento prematuro y acelerado en cuero cabelludo y piel. La cara da una apariencia de \"pico de p\u00e1jaro\" por \n\
                    la nariz delgada y la micrognatia. La mayor\u00eda mueren entre la segunda y la tercera d\u00e9cadas de la vida. Muchos casos \n\
                    son de presentaci\u00f3n espor\u00e1dica.",
                    clinicalExams: "El diagn\u00f3stico es cl\u00ednico, radiol\u00f3gico y patol\u00f3gico. Los RX muestran osteoporosis y degeneraci\u00f3n esquel\u00e9tica\n\
                    con reabsorci\u00f3n \u00f3sea progresiva, m\u00e1s evidente en clav\u00edculas y en falanges distales. Los vasos sangu\u00edneos est\u00e1n \n\
                    ateroescler\u00f3ticos y calcificados. Hay hipercolesterolemia leve a moderada.",
                    bibliography: ["TREVAS MACIEL, A. (1988). \"Evidence for Autosomal Recessive Inheritance of Progeria (Hutchinson Gilford)\", \n\
        American Journal of Medical Genetics, Vol. 31: 483-487.",
                        "PARKASH, H. et al. (1990). \"Hutchinson-Gilford Progeria: Familial Occurrence\", American Journal of Medical Genetics, \n\
        Vol. 36: 431-433"],
                    features: [47, 65, 81, 83, 90, 104, 115]
                },
                {
                    id: 127,
                    name: "S\u00edndrome de Werner",
                    synonym: "",
                    inheritance: "Autos\u00f3mica recesiva",
                    retardation: false,
                    retardationNotes: "",
                    evolution: "Aunque la mayor\u00eda de los s\u00edntomas empiezan en adultos j\u00f3venes, ya en la ni\u00f1ez tard\u00eda se ha observado disminuci\u00f3n \n\
                    en la velocidad de crecimiento, dando la talla final alrededor de los 13 a\u00f1os. Alrededor de los 20 a\u00f1os ocurre \n\
                    encanecimiento y la apariencia senil es evidente entre los 30 y 40 a\u00f1os. La mayor\u00eda mueren antes de los 45 a\u00f1os.\n\
                    Unos pocos presentan alg\u00fan grado de retardo mental.",
                    clinicalExams: "El diagn\u00f3stico es cl\u00ednico, radiol\u00f3gico y de laboratorio. RX muestran osteoporosis. Cultivo de fibroblastos \n\
                    muestra disminuci\u00f3n en la velocidad de divisi\u00f3n celular y aumento en el n\u00famero de rupturas y re-arreglos cromos\u00f3micos.\n\
                    Patolog\u00eda muestra prematuros cambios ateroescler\u00f3ticos con calcificaci\u00f3n vascular y de tejido sub-cut\u00e1neo.",
                    bibliography: ["GORLIN, R. J. et al. (1990).\"Syndromes of the Head and Neck\", Third Edition, Oxford University Press, \n\
        p\u00e1gs. 485-487.",
                        "JONES, K. L. (1988). \"Smith's Recognizable Patterns of Human Malformations\", Fourth Edition, W. B. Saunders Company, \n\
        p\u00e1gs. 120-121 "],
                    features: [37, 38, 54, 56, 90, 92, 102, 104, 115]
                },
                {
                    id: 13,
                    name: "Displasia Fronto-Metafisiaria",
                    synonym: "",
                    inheritance: "Dominante ligada a X",
                    retardation: false,
                    retardationNotes: "",
                    evolution: "Usualmente los primeros hallazgos se hacen en cara. Pueden presentarse cefaleas, tinitus, sordera y diplopia, al \n\
                    parecer por sobrecrecimiento \u00f3seo del foramen magnum. Pueden ocurrir manifestaciones neurol\u00f3gicas por compresi\u00f3n \n\
                    espinal a nivel atlanto-occipital. Con frecuencia presentan complicaciones por obstrucci\u00f3n de la v\u00eda a\u00e9rea o por \n\
                    anomal\u00edas urinarias.",
                    clinicalExams: "El diagn\u00f3stico es cl\u00ednico y radiol\u00f3gico. RX muestran hiperostosis frontal, foramen magnum agrandado, pobre \n\
                    desarrollo de los senos para-nasales, luxaci\u00f3n de cabezas radiales, ep\u00edfisis de cabezas femorales peque\u00f1as, coxa \n\
                    vaiga y en huesos largos las di\u00e1fisis muestran densidad aumentada con pobre moldeamiento de las met\u00e1fisis.",
                    bibliography: ["GORLIN, R. J. et al. (1990). \"Syndromes of the Head and Neck\", Third Edition, Oxford University Press, \n\
        p\u00e1gs. 235-237.",
                        "SPRANGER, J. W. et al. (1974). \"Bone Dysplasias\", W. B. Saunders Company, p\u00e1gs. 321-322."],
                    features: [4, 11, 17, 41, 47, 55, 68, 74, 83]
                },
                {
                    id: 122,
                    name: "Braquidactilia Tipo E",
                    synonym: "Braquimesofalangia",
                    inheritance: "Autos\u00f3mica dominante",
                    retardation: false,
                    retardationNotes: "",
                    evolution: "La talla baja puede ser evidente al nacimiento y el crecimiento post-natal es lento con una talla final leve a \n\
                    moderadamente baja. Se han propuesto 3 tipos diferentes: El: con compromiso del cuarto metacarpiano o metatarsiano; \n\
                    E2: con compromiso variable de metacarpianos y acortamiento de las falanges distales primera y tercera o de las\n\
                    falanges intermedias segunda y quinta; y, E3: sin acortamiento de falanges.",
                    clinicalExams: "El diagn\u00f3stico es cl\u00ednico y radiol\u00f3gico. RX muestran ep\u00edfisis c\u00f3nicas en las falanges de las manos.",
                    bibliography: ["McKUSICK, V. A. (1988). \"Mendelian Inheritance in Man\", Eighth Edition, The Johns Hopkins University Press,\n\
        p\u00e1g. 111."],
                    features: [69, 69, 72, 77, 115]
                },
                {
                    id: 121,
                    name: "Acondrog\u00e9nesis Tipo IA y IB",
                    synonym: "Acondrog\u00e9nesis tipo parenti-Franccaro",
                    inheritance: "Autos\u00f3mica recesiva",
                    retardation: "?",
                    retardationNotes: "",
                    evolution: "La mayor\u00eda son mortinatos o mueren en el per\u00edodo neonatal, casi siempre en las primeras horas de vida. Usualmente hay\n\
                    prematurez (alrededor de 30 semanas de gestaci\u00f3n) con polihidramnios y es frecuente la hidropes\u00eda fetal. Se cree que se\n\
                    debe a un defecto del Col\u00e1geno tipo II.",
                    clinicalExams: "El diagn\u00f3stico es cl\u00ednico y radiol\u00f3gico. En el tipo IA hay osificaci\u00f3n deficiente en cr\u00e1neo y ausente en cuerpos \n\
                    vertebrales, sacro, pubis y hueso il\u00edaco; costillas delgadas y fracturadas y micromelia severa. En el tipo IB no hay \n\
                    fracturas costales, hay alguna osificaci\u00f3n de cr\u00e1neo y las met\u00e1fisis son irregulares. La biopsia de hueso y cart\u00edlago \n\
                    ayuda a diferenciar los dos tipos.",
                    bibliography: ["GORLIN, R. J. et al. (1990). \"Syndromes of the Head and Neck\", Third Edition, Oxford University Press, \n\
        p\u00e1gs. 167-171.",
                        "JONES, K. L. (1988). \"Smith's Recognizable Patterns of Human Malformations\", Fourth Edition, W. B. Saunders Company, \n\
        p\u00e1gs. 278-279. "],
                    features: [8, 40, 47, 61, 65, 72, 115]
                },
                {
                    id: 116,
                    name: "S\u00edndrome de Leopard",
                    synonym: "lentiginosis cardiomiop\u00e1tica progresiva",
                    inheritance: "Autos\u00f3mica dominante",
                    retardation: false,
                    retardationNotes: "Algunos, leve",
                    evolution: "El nombre LEOPARD corresponde a un acr\u00f3nimo que resume las anomal\u00edas m\u00faltiples (en palabras inglesas) de la entidad:\n\
                    Lentigines (Ef\u00e9lides m\u00faltiples), EKG (Electrocardiograma anormal), Ocular (Hipertelorismo), Pulmonar (Estenosis), \n\
                    Anormalidades genitales, Retardo en el crecimiento y Deafnes (Sordera neurosensorial). Las lesiones de piel pueden\n\
                    ser cong\u00e9nitas o aparecer pronto despu\u00e9s del nacimiento, aumentando en n\u00famero con la edad. Se encuentran en cualquier\n\
                    parte de la piel, incluyendo axilas, genitales, palmas de las manos y plantas de los pies. No se presentan en mucosas.\n\
                    Existe amplia variabilidad en la expresi\u00f3n familiar. Algunos presentan retardo mental leve (30%).",
                    clinicalExams: "El diagn\u00f3stico es cl\u00ednico. Se recomienda evaluaci\u00f3n cardiol\u00f3gica y audiol\u00f3gica a todos los pacientes. La biopsia de\n\
                    piel ayuda a confirmar el diagn\u00f3stico de lentigo o ef\u00e9lide (diferente a las pecas, que son m\u00e1s claras y se relacionan \n\
                    con exposici\u00f3n al sol).",
                    bibliography: ["GORLIN, R. J. et al. (1990). \"Syndromes of the Head and Neck\", Third Edition, Oxford University Press, \n\
        p\u00e1gs. 461-463."],
                    features: [4, 19, 63, 86, 94, 99, 99, 115]
                },
                {
                    id: 67,
                    name: "S\u00edndrome de Noonan",
                    synonym: "S\u00edndrome Pseudo-Turner",
                    inheritance: "Autos\u00f3mica dominante",
                    retardation: true,
                    retardationNotes: "En algunos, leve",
                    evolution: "El cuadro cl\u00ednico es similar al del S\u00edndrome de Turner (45,XO), pero sin la anomal\u00eda cromos\u00f3mica y present\u00e1ndose en \n\
                    hombres. La mayor\u00eda de las caracter\u00edsticas cl\u00ednicas parecen explicarse por una displasia de los vasos linf\u00e1ticos, la \n\
                    cual lleva a edema, el cual a su vez afecta la migraci\u00f3n de los tejidos durante el desarrollo embrionario. Al nacer \n\
                    puede observarse marcado edema y piel redundante en la nuca, caracter\u00edsticas que van desapareciendo con el tiempo. \n\
                    Usualmente la calidad de vida es normal, excepto cuando ocurre cardiopat\u00eda (50%). Algunos pueden presentar retardo \n\
                    mental leve y/o infertilidad (especialmente masculina). La apariencia es cambiante a trav\u00e9s de los a\u00f1os, haciendo que\n\
                    en adultos las manifestaciones lleguen a ser muy leves a menos de que el paciente tenga compromiso card\u00edaco u otro \n\
                    problema m\u00e9dicamente importante. Esta es una entidad relativamente frecuente (1 de cada 1.000 a 2.500 nacidos vivos).\n\
                    Algunos casos son espor\u00e1dicos. En los casos de herencia autos\u00f3mica dominante se ha encontrado expresividad variable del\n\
                    gen, haciendo muchas veces dif\u00edcil la detecci\u00f3n de los portadores. En algunos pacientes se ha encontrado neurofibromatosis\n\
                    concomitante y la relaci\u00f3n entre las dos entidades a\u00fan no es clara.",
                    clinicalExams: "El diagn\u00f3stico es cl\u00ednico. En ni\u00f1as se recomienda descartar una monosom\u00eda X mediante estudio cromos\u00f3mico.",
                    bibliography: ["ALLANSON, J. E. et al. (1985). \"Noonan Syndrome: The Changing Phenotype\", American Journal of Medical Genetics, \n\
        Vol. 21: 507-514.",
                        "WITT, D. R. et al. (1987). \"Lymphedema in Noonan Syndrome: Clues to Pathogenesis.and Prenatal Diagnosis and Review of the \n\
        Literature\", American Journal of Medical Genetics, Vol. 27: 841-856."],
                    features: [19, 21, 22, 25, 27, 28, 29, 35, 57, 59, 61, 63, 94, 99, 114, 115]
                },
                {
                    id: 58,
                    name: "Displasia Tanatof\u00f3rica",
                    synonym: "Enanismo tanatof\u00f3rico",
                    inheritance: "Autos\u00f3mica recesiva",
                    retardation: true,
                    retardationNotes: "",
                    evolution: "El nombre de este s\u00edndrome significa \"enanismo que lleva a la muerte\" (tanato: muerte; foria: direcci\u00f3n o tendencia).\n\
                    Esta entidad se caracteriza por disrupci\u00f3n de las placas de crecimiento \u00f3seas. El diagn\u00f3stico puede hacerse por \n\
                    ecograf\u00eda prenatal o al nacimiento. Es frecuente el poli-hidramnios. La mayor\u00eda mueren a las pocas horas de nacidos, \n\
                    aunque se han descrito unos pocos casos con sobrevida de varios meses con ayuda ventilatoria y derivaci\u00f3n ventr\u00edculo-\n\
                    peritoneal para su hidrocefalia. Muchos casos son espor\u00e1dicos y a\u00fan no se ha aclarado si \u00e9stos corresponden a mutaciones\n\
                    nuevas de herencia autos\u00f3mica dominante.",
                    clinicalExams: "El diagn\u00f3stico es cl\u00ednico y radiol\u00f3gico. A los RX los huesos tubulares son cortos y no mineralizados, ensanchados en \n\
                    las met\u00e1fisis y con picos.",
                    bibliography: ["ELEJALDE, B. R. and DE ELEJALDE, M. M. (1985). \"Thanatophoric Dysplasia: Fetal Manifestations and Prenatal Diagnosis\",\n\
        American Journal of Medical Gnetics, Vol. 22: 669:683",
                        "McDONALD, I. M. et al. (1989). \"Growth and Development in Thanatophoric Dysplasia\", American Journal of Medical Genetics, \n\
        Vol. 33: 508-512."],
                    features: [1, 8, 10, 11, 24, 40, 62, 65, 67, 72, 115]
                },
                {
                    id: 37,
                    name: "S\u00edndrome de Sanfilippo",
                    synonym: "Mucopolisacaridosis III",
                    inheritance: "Autos\u00f3mica recesiva",
                    retardation: true,
                    retardationNotes: "",
                    evolution: "Esta es una enfermedad de dep\u00f3sito lisosomal por d\u00e9ficit enzim\u00e1tico. Se han descrito 4 tipos seg\u00fan la enzima lisosomal \n\
                    deficiente (A: Sulfaminidasa de Hepar\u00e1n Sulfato; B: N-acetilalpha-D-Glucosaminidasa; C: Acetil Coenzima A: \n\
                    alphaglucosaminidasa-N-acetiltransferasa; D: N-acetilglucosamina6-Sulfato Sulfatasa). Aunque el desarrollo inicial es\n\
                    aparentemente normal, cursan con deterioro mental progresivo y algunas manifestaciones som\u00e1ticas dadas por el dep\u00f3sito \n\
                    de Hepar\u00e1n Sulfato por los mucopolisac\u00e1ridos incompletamente degradados. Tambi\u00e9n se observan cambios en el comportamiento,\n\
                    llegando a la demencia, y la mayor\u00eda mueren entre la primera y la segunda d\u00e9cada de la vida. El tipo A parece ser el m\u00e1s \n\
                    severo y con iniciaci\u00f3n de s\u00edntomas y muerte m\u00e1s temprana, el tipo D parece ser el m\u00e1s leve, seguido del tipo B y el tipo \n\
                    C presenta una evoluci\u00f3n intermedia. ",
                    clinicalExams: "El diagn\u00f3stico es cl\u00ednico, radiol\u00f3gico y de laboratorio. Los RX muestran disostosis m\u00faltiple. Hay excreci\u00f3n aumentada \n\
                    de Hepar\u00e1n Sulfato en orina. En los tipos A, B y C tambi\u00e9n hay excreci\u00f3n urinaria de Kerat\u00e1n Sulfato. La confirmaci\u00f3n \n\
                    diagn\u00f3stica se hace mediante medici\u00f3n enzim\u00e1tica en cultivo de linfocitos y/o fibroblastos.",
                    bibliography: ["KAPLAN, P. and WOLFE, L. S. (1987). \"Sanfilippo syndrome type D\", The Journal of Pediatrics, Vol. 110, \n\
        No. 2: 267-271",
                        "VAN SCHROJENSTEIN-DE VALK, H. M. J. and VAN DE KAMP, J. J. P. (1987). \"Follow-up on Seven Adult Patients With Mild Sanfllippo \n\
        B-Disease\", American Journal of Medical Genetics, Vol. 28: 125-129."],
                    features: [8, 17, 23, 67, 83, 96, 114]
                },
                {
                    id: 62,
                    name: "S\u00edndrome de Stickler",
                    synonym: "Artro-oftalmopat\u00eda hereditaria progresiva",
                    inheritance: "Autos\u00f3mica dominante",
                    retardation: false,
                    retardationNotes: "",
                    evolution: "Esta entidad usualmente no afecta el promedio de vida, aunque s\u00ed la calidad de la misma, debido a la progresi\u00f3n de los \n\
                    cambios articulares y visuales. Con frecuencia se presenta artritis prematura y progresiva que en el caso de las caderas \n\
                    puede requerir reemplazo temprano. Es frecuente la coxa-valga. Las alteraciones oculares pueden llevar a la p\u00e9rdida de la \n\
                    visi\u00f3n, a pesar de un oportuno manejo oftalmol\u00f3gico. Se han descrito complicaciones cardiacas (prolapso de v\u00e1lvula mitral)\n\
                    en muchos. En algunos casos a los hallazgos cl\u00ednicos se asocia la Secuencia de Robin (S\u00edndrome de Pierre-Robin). En algunos\n\
                    pocos pacientes se ha descrito retardo mental.",
                    clinicalExams: "El diagn\u00f3stico es cl\u00ednico y radiol\u00f3gico. Los RX muestran m\u00faltiples alteraciones de osificaci\u00f3n epifisial. Se recomienda \n\
                    evaluaciones oftalmol\u00f3gicas peri\u00f3dicas y evaluaci\u00f3n cardiol\u00f3gica.",
                    bibliography: ["LIBERFARB, R. M. et al. (1981). \"The Wagner-Sticler syndrome: A study of 22 families\", The Journal of Pediatrics, \n\
        Vol. 99, No. 3: 394-399.",
                        "TEMPLE, I. K. (1989). \"Stickler's syndrome\", Journal of Medical Genetics, Vol. 26: 119-126."],
                    features: [1, 4, 13, 21, 29, 37, 39, 40, 47, 49, 56, 67, 68, 84, 116]
                },
                {
                    id: 105,
                    name: "S\u00edndrome de Cornelia de Lange",
                    synonym: "S\u00edndrome de Lange-S\u00edndrome de Brachmann de Lange",
                    inheritance: "",
                    retardation: true,
                    retardationNotes: "",
                    evolution: "Al nacimiento se encuentra retardo de crecimiento intrauterino y contin\u00faa debajo del percentil 3 para la edad. En cara \n\
                    son t\u00edpicos los labios delgados con comisuras dirigidas hacia abajo y la nariz peque\u00f1a con orificios amplios y dirigidos\n\
                    hacia adelante. Usualmente presentan dificultades en la alimentaci\u00f3n, siendo la broncoaspiraci\u00f3n y las infecciones \n\
                    respiratorias la causa de muerte en etapas tempranas, en muchos casos. El retardo mental usualmente es severo y se han\n\
                    descrito conductas autistas, incluyendo tendencias auto-destructivas. Algunos presentan convulsiones, cardiopat\u00edas y/o \n\
                    malformaciones gastro-intestinales. Se han descrito casos de herencia autos\u00f3mica dominante v autos\u00f3mica recesiva.",
                    clinicalExams: "El diagn\u00f3stico es cl\u00ednico y radiol\u00f3gico. Se recomienda realizar cariotipo, para descartar anomal\u00edas cromos\u00f3micas \n\
                    descritas en algunos pacientes (translocaciones Robertsonianas balanceadas, cromosomas en anillo, etc.).",
                    bibliography: [" HAWLEY, P. P. et al. (1985). \"Sixty-Four Patients With Brachmann-de Lange Syndrome: A Survey\", American \n\
        Journal of Medical Genetics, Vol. 20: 453-459.",
                        "OPITZ, J. M. (1985). \"The Brachmann-de Lange Syndrome\", American Journal of Medical Genetics, Vol. 22: 89-102."],
                    features: [2, 7, 23, 42, 47, 50, 73, 74, 91, 99, 114, 115]
                },
                {
                    id: 64,
                    name: "S\u00edndrome de Marfan",
                    synonym: "Dolicostenomelia",
                    inheritance: "Autos\u00f3mica dominante",
                    retardation: false,
                    retardationNotes: "",
                    evolution: "Esta entidad est\u00e1 clasificada como una de las alteraciones hereditarias del tejido conectivo. Se cree que el defecto \n\
                    ocurre por mutaciones en los genes de las fibras mayores del col\u00e1geno. Las manifestaciones cl\u00ednicas son variables, a\u00fan \n\
                    dentro de la misma familia. Seg\u00fan la severidad del cuadro cl\u00ednico, el diagn\u00f3stico puede hacerse en la infancia o m\u00e1s \n\
                    tarde. Las complicaciones vasculares (incluyendo ruptura de aneurisma disecante de la aorta) pueden presentarse en \n\
                    cualquier momento desde la vida intra-uterina hasta la edad adulta y es la principal causa de muerte entre estos \n\
                    pacientes. Del manejo interdisciplinario adecuado y oportuno de las complicaciones (esquel\u00e9ticas, oculares, vasculares,\n\
                    etc.) depender\u00e1 la calidad de vida de estos pacientes. El promedio de vida es de 45 a\u00f1os.",
                    clinicalExams: "El diagn\u00f3stico es cl\u00ednico y radiol\u00f3gico. Se recomienda un riguroso control cardiol\u00f3gico (incluyendo ecocardiograf\u00eda)\n\
                    y evaluaciones oftalmol\u00f3gicas frecuentes.",
                    bibliography: ["BEIGHTON, P. et al. (1988). \"International Nosology of Heritable Disorders of Connective Tissue, Berlin, 1986\",\n\
        American Journal of Medical Genetics, Vol. 29: 581-594.",
                        "PYERITZ, R. E. and McKUSICK, V. A. (1979). \"The Marfan Syndrome: Diagnosis and Management\", The New England Journal of Medicine, \n\
        Vol. 300, No. 14: 772-777."],
                    features: [1, 29, 37, 39, 63, 66, 68, 84, 94, 95, 116]
                },
                {
                    id: 104,
                    name: "S\u00edndrome de Angelman",
                    synonym: "S\u00edndrome del t\u00edtere feliz (\"Happy Puppet\")",
                    inheritance: "Presentaci\u00f3n espor\u00e1dica",
                    retardation: true,
                    retardationNotes: "",
                    evolution: "Desde temprana infancia hay retardo en el desarrollo psicomotor. La cara muestra una aparente \"disposici\u00f3n feliz\" y \n\
                    frecuentemente se asocia a episodios de risa no provocada. La mayor\u00eda de los pacientes presentan convulsiones y \n\
                    retardo mental severo. Son t\u00edpicos los movimientos at\u00e1xicos incoordinados de extremidades superiores y de la marcha \n\
                    con aumento del pol\u00edgono de sustentaci\u00f3n. En algunos pacientes se ha reportado la presencia de una deleci\u00f3n en el \n\
                    brazo largo del cromosoma 15, transmitida por la madre. Se ha sugerido herencia autos\u00f3mica recesiva en algunos casos\n\
                    familiares.",
                    clinicalExams: "El diagn\u00f3stico es cl\u00ednico. Se recomienda realizar estudio cromos\u00f3mico y molecular si est\u00e1 disponible (buscando del\n\
                    15q11q13). El electroencefalograma es anormal.",
                    bibliography: ["ROBB, S. A. et al. (1989). \"The 'happy puppet' syndrome of Angelman: review of the clinical features\", \n\
        Archives of Disease in Childhood, Vol. 64: 83-86.",
                        "WILLIAMS, C. A. et al. (1990). \"Maternal Origin of 15q11-13 Deletions in Angelman Syndrome Suggests a Role for Genomic\n\
         Imprinting\", American Journal of Medical Genetics, Vol. 35: 350-353."],
                    features: [1, 3, 7, 33, 46, 48, 51, 114, 115]
                },
                {
                    id: 90,
                    name: "S\u00edndrome de Meckel-Gruber",
                    synonym: "Disencefalia esplacno-qu\u00edstica",
                    inheritance: "Autos\u00f3mica recesiva",
                    retardation: true,
                    retardationNotes: "",
                    evolution: "El cuadro cl\u00ednico es evidente al nacimiento. La mayor\u00eda de los pacientes mueren a las pocas horas de vida o son \n\
                    mortinatos. Se han descrito caracter\u00edsticas faciales sugestivas de la secuencia de Potter. Algunos autores sugieren \n\
                    que algunas de las caracter\u00edsticas cl\u00ednicas como labio y/o paladar hendido, microcefalia, polidactilia y sindactilia \n\
                    pueden estar presentes en los familiares heterozigotos.",
                    clinicalExams: "El diagn\u00f3stico es cl\u00ednico, radiol\u00f3gico y patol\u00f3gico. Se recomienda realizar estudio neuro-radiol\u00f3gico cerebral y \n\
                    ecograf\u00eda abdominal, incluyendo evaluaci\u00f3n renal, hep\u00e1tica y espl\u00e9nica. Se recomienda realizar cariotipo para descartar \n\
                    cromosomopat\u00edas que cursan con anomal\u00edas cong\u00e9nitas m\u00faltiples. En el estudio histopatol\u00f3gico se encuentra displasia \n\
                    qu\u00edstica en ri\u00f1\u00f3n y en h\u00edgado se aprecian cambios fibr\u00f3ticos con proliferaci\u00f3n y dilataci\u00f3n de conductos biliares.",
                    bibliography: ["MOERMAN, Ph. et al. (1982). \"The Meckel Syndrome. Pathological and Cytogenetic Observations in Eight Cases\", \n\
        Human Genetics, Vol. 62: 240-245.",
                        "SALONEN, R. (1984). \"The Meckel Syndrome: Clinicopathological Findings in 67 Patients\", American Journal of \n\
        Medical Genetics, Vol. 18: 671689."],
                    features: [5, 7, 31, 49, 59, 61, 78, 96, 98, 99, 99, 115]
                },
                {
                    id: 6,
                    name: "Displasia Condroectod\u00e9rmica",
                    synonym: "S\u00edndrome de Ellis-van Creveld",
                    inheritance: "Autos\u00f3mica recesiva",
                    retardation: false,
                    retardationNotes: "",
                    evolution: "El cuadro cl\u00ednico es evidente al nacimiento, acompa\u00f1ado de un frenillo en labio superior, en la mayor\u00eda de los casos.\n\
                    Muchos pacientes mueren en la infancia por complicaciones cardiorespiratorias, siendo finalmente la severidad del \n\
                    defecto cardiaco cong\u00e9nito (presente en cerca del 60% de los casos) la principal determinante de la sobrevida. En \n\
                    algunos casos se ha descrito anomal\u00edas cerebrales asociadas y retardo mental leve. Es t\u00edpico el genu-valgum.",
                    clinicalExams: "El diagn\u00f3stico es cl\u00ednico y radiol\u00f3gico. Con frecuencia se encuentra un 50. hueso en la fila distal de los huesos \n\
                    del carpo y un variado patr\u00f3n de fusi\u00f3n de los mismos.",
                    bibliography: ["OLIVEIRA DA SILVA, E. et al. (1980). \"Ellis-van Creveld syndrome: report of 15 cases in an inbred kindred\", \n\
        Journal of Medical Genetics, Vol. 17: 349-356.",
                        "TAYLOR G. A. et al. (1984). \"Polycarpaly and Other Abnormalities of the Wrist in Chondroectodermal Dysplasia: The \n\
        Ellis-van Creveld Syndrome\", Radiology, Vol. 151: 393-396."],
                    features: [55, 65, 72, 78, 81, 94, 115]
                },
                {
                    id: 45,
                    name: "S\u00edndrome de Klippel-Trenaunay-Weber",
                    synonym: "S\u00edndrome de angio-osteo-hipertrofia",
                    inheritance: "Presentaci\u00f3n espor\u00e1dica",
                    retardation: true,
                    retardationNotes: "Pocos, grado variable",
                    evolution: "Al nacer puede haber hipertrofia unilateral o aparecer m\u00e1s tarde. La mayor\u00eda de los pacientes presentan hemangiomas \n\
                    cut\u00e1neos en cualquier parte del cuerpo incluyendo cara. Se ha descrito compromiso hemangiomatoso visceral de tractos \n\
                    urinario y gastrointestinal. En ocasiones se observa al nacer edema en la extremidad comprometida o aparece \n\
                    posteriormente en la pubertad o en la edad adulta. En la mayor\u00eda de los casos una sola extremidad est\u00e1 afectada y la\n\
                    venograf\u00eda revela usualmente obstrucci\u00f3n venosa popl\u00edtea (51%), seguida por compromiso popl\u00edteo y femoral (29%), \n\
                    cursando todos casi invariablemente con dilataciones varicosas. La elongaci\u00f3n \u00f3sea es una caracter\u00edstica constante \n\
                    secundaria a la hipertensi\u00f3n venosa. Cuando el manejo quir\u00fargico se realiza en la ni\u00f1ez (en los casos indicados), \n\
                    puede evitarse o disminuirse la asimetr\u00eda de extremidades. Los aneurismas arterio-venosos deben ser corregidos \n\
                    quir\u00fargicamente.",
                    clinicalExams: "El diagn\u00f3stico es cl\u00ednico y radiol\u00f3gico. Se recomienda realizar venograf\u00eda a todo ni\u00f1o o adulto con una \n\
                    extremidad m\u00e1s grande que la otra.",
                    bibliography: ["SERVELLE, M. (1985). \"Klippel and Tr\u00e9naunay's Syndrome, 768 Operated Cases\", Ann. surg., Vol. 201, \n\
        No. 3: 365-373."],
                    features: [86, 88, 113]
                },
                {
                    id: 89,
                    name: "S\u00edndrome de Maroteaux-Lamy",
                    synonym: "Mucopolisacaridosis Tipo VI (MPS VI)",
                    inheritance: "Autos\u00f3mica recesiva",
                    retardation: false,
                    retardationNotes: "",
                    evolution: "La enfermedad se debe a una deficiencia de la enzima N-acetilgalactosamina-4-Sulfatasa (Aril-sulfatasa B) \n\
                    en todos los tejidos. Los cambios esquel\u00e9ticos son similares a los observados en el S\u00edndrome de Hurler, \n\
                    aunque m\u00e1s leves, con opacidad corneal, hepato-esplenomegalia y sin retardo mental. Entre las principales \n\
                    complicaciones est\u00e1n las infecciones respiratorias y la limitaci\u00f3n progresiva en la motilidad articular. \n\
                    La mayor\u00eda sobreviven hasta la segunda o tercera d\u00e9cada de la vida.",
                    clinicalExams: "El diagn\u00f3stico es cl\u00ednico, radiol\u00f3gico y de laboratorio. En orina se encuentra excreci\u00f3n de Dermat\u00e1n \n\
                    Sulfato. El diagn\u00f3stico se confirma mediante medici\u00f3n enzim\u00e1tica en cultivo de tejidos. En extendido de \n\
                    sangre perif\u00e9rica los neutr\u00f3filos muestran granulaci\u00f3n excesiva. Los RX muestran disostosis m\u00faltiple y \n\
                    anormalidades metafisiarias y epifisiarias.",
                    bibliography: ["STUMPF, D. A. et al. (1973). \"Mucopolysaccharidosis Type VI (Maroteaux-Lamy Syndrome)\", Am J Dis \n\
        Child, Vol. 126: 747-755"],
                    features: [4, 17, 36, 40, 53, 65, 66, 83, 87, 94, 95, 96, 115]
                },
                {
                    id: 85,
                    name: "S\u00edndrome de Bloom",
                    synonym: "Eritema telangiect\u00e1sico Cong\u00e9nito",
                    inheritance: "Autos\u00f3mica recesiva",
                    retardation: true,
                    retardationNotes: "Algunos, leve",
                    evolution: "La entidad cursa con retardo en el crecimiento, proporcionado, eritema facial en forma de mariposa y eritema en \u00e1reas de exposici\u00f3n al sol, \n\
            inmunodeficiencia y predisposici\u00f3n a neoplasias linforeticulares. La mayor\u00eda de los casos descritos han ocurrido entre Jud\u00edos Ashkenazim, sin embargo \n\
            tambi\u00e9n se ha reportado m\u00faltiples pacientes no jud\u00edos. La mayor\u00eda mueren j\u00f3venes (antes de los 20 a\u00f1os) debido a c\u00e1ncer y/o infecciones. \n\
            La leucemia es m\u00e1s frecuente en la tercera d\u00e9cada de la vida y las neoplasias gastrointestinales en la cuarta. No siempre hay retardo mental. \n\
            Los hombres con esta entidad son inf\u00e9rtiles.",
                    clinicalExams: " El diagn\u00f3stico es cl\u00ednico y de laboratorio. En cultivo celular (de linfocitos o fibroblastos) se encuentra fragilidad \n\
            cromos\u00f3mica aumentada y variadas anomal\u00edas estructurales, as\u00ed como frecuente intercambio de crom\u00e1tides hermanas. ",
                    bibliography: ["GERMAN, J. and PASSARGE, E. (1989). \"Bloom's Syndrome. XII. Report from the Registry for 1987\", Clinical Genetics, Vol. 35:5769."],
                    features: [7, 45, 58, 78, 79, 87, 88, 89, 91, 105, 109, 114, 115]
                },
                {
                    id: 55,
                    name: "S\u00edndrome de Lowe",
                    synonym: "S\u00edndrome oculo-cerebro-renal",
                    inheritance: "Recesiva ligada a X",
                    retardation: true,
                    retardationNotes: "",
                    evolution: "El retardo en el desarrollo psico-motor y en el crecimiento son evidentes desde muy temprana infancia, asociado a problemas para \n\
        la alimentaci\u00f3n, alteraciones visuales y anomal\u00edas en la funci\u00f3n renal. Todos los pacientes son del sexo masculino y las mujeres portadoras \n\
        pueden presentar opacidades en cristalino y/o cataratas. Pueden presentarse convulsiones. Se cree que la enfermedad se debe a un defecto en el \n\
        metabolismo mitocondrial. Aunque algunos pacientes han llegado a la edad adulta, la mayor\u00eda mueren en la infancia por insuficiencia renal \n\
        cr\u00f3nica.",
                    clinicalExams: "El diagn\u00f3stico es cl\u00ednico, radiol\u00f3gico y de laboratorio. Los RX muestran un grado variado de osteoporosis. Entre las \n\
        anormalidades bioqu\u00edmicas reportadas est\u00e1n: Acidosis metab\u00f3lica, proteinuria, aminoaciduria, aciduria org\u00e1nica, glucosuria y producci\u00f3n \n\
        renal deficiente de amonio. Se recomienda evaluaci\u00f3n oftalmol\u00f3gica a posibles portadoras.",
                    bibliography: ["MORAES, C. T. et al. (1991). \"Mitochondrial DNA Deletion in a Girl With Manifestations of Kearns-Sayre and Lowe Syndromes\", \n\
        American Journal of Medical Genetics, Vol. 41: 301-305.", "RICHARDS, W. et al. (1965). \"The Oculo-Cerebro-Renal Syndrome of Lowe \", \n\
        Amer J Dis Child, Vol. 109: 185-203."],
                    features: [1, 11, 34, 37, 71, 83, 98, 99, 114, 115]
                },
                {
                    id: 14,
                    name: "S\u00edndrome de Crouzon",
                    synonym: "Disostosis craneo-facial",
                    inheritance: "Autos\u00f3mica dominante",
                    retardation: false,
                    retardationNotes: "",
                    evolution: "La deficiencia en el crecimiento del tercio medio de la cara y la mayor\u00eda de las manifestaciones cl\u00ednicas son secundarias a la fusi\u00f3n prematura de determinadas suturas craneales (coronal, lambdoidea y sagital). La ausencia de alteraciones en los dedos de las manos y de los pies ayuda al diagn\u00f3stico diferencial con otras alteraciones. La severidad de la craneosinostosis, as\u00ed como la edad de iniciaci\u00f3n es variable y en algunos casos puede presentarse hidrocefalia, atrofia \u00f3ptica y/o retardo mental secundario al da\u00f1o cerebral. El manejo quir\u00fargico es interdisciplinario (cirujano pl\u00e1stico, neurocirujano, ortodoncista, oftalm\u00f3logo) y las indicaciones son neurol\u00f3gicas y est\u00e9ticas. Alrededor del 50% de los casos son mutaciones nuevas.",
                    clinicalExams: "El diagn\u00f3stico es cl\u00ednico y radiol\u00f3gico. Se recomienda evaluaci\u00f3n completa de los sistemas visual y auditivo.",
                    bibliography: ["DODGE, H. W. et al. (1959). \"Craniofacial Dysostosis: Crouzon's Disease\", Pediatrics, January 1959: 98-106.",
                        "TURVEY, T. A. et al. (1979). \"Multidisciplinary management of Crouzon syndrome\", JADA, Vol. 99: 205-209."],
                    features: [4, 9, 11, 19, 24, 27, 46, 48]
                },
                {
                    id: 29,
                    name: "S\u00edndrome de Bardet-Biedl",
                    synonym: "S\u00edndrome de laurence-Moon-Biedl",
                    inheritance: "Autos\u00f3mica recesiva",
                    retardation: true,
                    retardationNotes: "",
                    evolution: "Al nacimiento puede presentarse elevado peso para su edad gestacional y la obesidad es evidente con frecuencia desde el a\u00f1o de edad. El d\u00e9ficit visual se presenta entre la segunda y tercera d\u00e9cadas de la vida y la mayor\u00eda de los pacientes est\u00e1n ciegos antes de los 30 a\u00f1os. Algunos presentan sordera, diabetes mellitus, hipertensi\u00f3n y se ha descrito en muchos pacientes compromiso renal y de v\u00edas urinarias con progresi\u00f3n hacia falla renal y muerte. Se ha encontrado que algunas mujeres con esta entidad no presentan necesariamente retardo mental, polidactilia y/o hipogonadismo.",
                    clinicalExams: "El diagn\u00f3stico es cl\u00ednico. Se recomienda evaluaci\u00f3n oftalmol\u00f3gica (incluyendo electro-retinograma), auditiva, renal y endocrinol\u00f3gica.",
                    bibliography: ["GREEN, J. S. et al. (1989). \"The cardinal manifestations of Bardet-Biedl Syndrome, a form of Laurence-Moon-Biedl Syndrome\", The New England Journal of Medicine, Vol. 321: 1.002-1.009.",
                        "JACOBSON, S. G. et al. (1990). \"Patterns of Rod and Cone Dysfunction in Bardet-Biedl Syndrome\", American Journal of Ophthalmology, Vol. 109: 676688. "],
                    features: [38, 78, 79, 99, 102, 111, 114]
                },
                {
                    id: 79,
                    name: "S\u00edndrome de Dubowitz",
                    synonym: "",
                    inheritance: "Autos\u00f3mica recesiva",
                    retardation: true,
                    retardationNotes: "algunos",
                    evolution: "Casi todos presentan retardo de crecimiento intra-uterino con baja estatura post-natal y retardo en la maduraci\u00f3n \u00f3sea. En cara son t\u00edpicas las fisuras palpebrales cortas (la apariencia es similar a la descrita en los pacientes con S\u00edndrome de Alcohol Fetal). En la infancia se presentan con frecuencia dificultades en la alimentaci\u00f3n, diarreas, infecciones de o\u00eddos, caries dentales e hiperactividad. No todos presentan retardo mental. En algunos casos se ha descrito la aparici\u00f3n de anemia apl\u00e1stica y/o malignidades linfo-reticulares. Se ha descrito un tipo 2, con anomal\u00edas ano-rectales, craniosinostosis y talla normal.",
                    clinicalExams: "El diagn\u00f3stico es cl\u00ednico. Se recomienda evaluaci\u00f3n hematol\u00f3gica peri\u00f3dica.",
                    bibliography: ["DE LOS COBOS-VILLASE\u00d1OR, L. F. (1988). \"S\u00edndrome de Dubowitz. Presentaci\u00f3n de un caso\", Bol Med Hosp Infant Mex, Vol. 45,No. 8: 543-545.",
                        "WINTER, R. M. (1986). \"Dubowitz syndrome\", Journal of Medical Genetics, Vol. 23: 11-13."],
                    features: [7, 20, 25, 25, 59, 74, 89, 92, 115]
                },
                {
                    id: 99,
                    name: "S\u00edndrome de Hunter",
                    synonym: "Mucopolisacaridosis Tipo 2 (MPS 2)",
                    inheritance: "Recesiva ligada a X",
                    retardation: true,
                    retardationNotes: "",
                    evolution: "Esta es una enfermedad de dep\u00f3sito y se debe a deficiencia de la enzima lisosomal Iduronato 2-sulfatasa. \n\
        La entidad se presenta en hombres y se ha descrito gran variabilidad intrafamiliar en la severidad de los s\u00edntomas. A diferencia del S\u00edndrome de Hurler, no se presenta opacidad cornea), la cifosis es m\u00e1s leve y la iniciaci\u00f3n de los s\u00edntomas es m\u00e1s gradual. El cuadro se inicia usualmente entre el primero y el cuarto a\u00f1o de edad. Se ha descrito un tipo leve (puede cursar con inteligencia normal y sobrevida y un tipo juvenil, severo, llevando a la muerte entre los 4 y 14 a\u00f1os.",
                    clinicalExams: "El diagn\u00f3stico es cl\u00ednico, radiol\u00f3gico y de laboratorio. RX muestran disostosis m\u00faltiple. En orina hay excreci\u00f3n aumentada de Dermat\u00e1n Sulfato y Hepar\u00e1n Sulfato. El diagn\u00f3stico se confirma por medici\u00f3n enzim\u00e1tica en cultivo de tejidos. Se ha propuesto la detecci\u00f3n de mujeres portadoras mediante an\u00e1lisis enzim\u00e1tico de la ra\u00edz del cabello.",
                    bibliography: ["NWOKORO, N. and NEUFELD, E. F. (1979).\"Detection of Hunter Heterozygotes by Enzymatic Analysis of Hair Roots\", \n\
am Journal of Human Genetics, Vol. 31: 4249.", "McKUSlCK, V. A. and NEUFELD, E. F. (1983).\"The mucopolysaccharide storage diseases\"\n\
in The Metabolic Basis of Inherited Disease by Stanbury, J. B. et al, Fifth Edition, McGraw Hili, p\u00e1gs. 761-764."

                    ],
                    features: [2, 4, 8, 17, 83, 91, 95, 96, 114, 115]
                },
                {
                    id: 69,
                    name: "Disostosis Acrofacial de Nager",
                    synonym: "Disostosis mand\u00edbulo-facial con anomal\u00edas de extremidades",
                    inheritance: "Presentaci\u00f3n espor\u00e1dica",
                    retardation: false,
                    retardationNotes: "",
                    evolution: "La secuencia de Robin forma parte de este s\u00edndrome y es la responsable de las dificultades en la alimentaci\u00f3n y complicaciones de la v\u00eda a\u00e9rea (incluyendo muerte por asfixia). El cuadro cl\u00ednico es similar al descrito en el S\u00edndrome de TreacherCollins (Disostosis mand\u00edbulo-facial) pero con anomal\u00edas en extremidades superiores y diferente mecanismo de herencia. Usualmente las extremidades inferiores son normales. Aunque la mayor\u00eda de los casos son espor\u00e1dicos, se han descrito casos con herencia autos\u00f3mica recesiva y algunos con herencia autos\u00f3mica dominante.",
                    clinicalExams: "El diagn\u00f3stico es cl\u00ednico y radiol\u00f3gico. Se recomienda evaluaci\u00f3n auditiva.",
                    bibliography: ["HECHT, J. T. et al. \"Brief Clinical Report: The Nager Syndrome\", American Journal of Medical Genetics, Vol. 27: 965-969.",
                        "LE MERRER, M. et al.(1989). \"Acrofacial Dysostoses\", American Journal of Medical Genetics, Vol. 33: 318-322."],
                    features: [4, 22, 32, 45, 47, 49, 59, 76]
                },
                {
                    id: 82,
                    name: "S\u00edndrome de Ectrodactilia, Displasia Ectod\u00e9rmica y Hendiduras",
                    synonym: "S\u00edndrome EEC",
                    inheritance: "Autos\u00f3mica dominante",
                    retardation: false,
                    retardationNotes: "algunos",
                    evolution: "El diagn\u00f3stico puede hacerse al nacimiento. Puede haber dificultades en la regulaci\u00f3n de la temperatura por la disminuci\u00f3n de la sudoraci\u00f3n. Pueden presentarse complicaciones (inflamaci\u00f3n, infecci\u00f3n) por la estenosis de los orificios de los conductos lacrimales. Se requiere usualmente manejo por un equipo interdisciplinario (cirujano pl\u00e1stico, odont\u00f3logo, ortodoncista, otorrinolaring\u00f3logo, oftalm\u00f3logo, ortopedista, dermat\u00f3logo) y del \u00e9xito del mismo depender\u00e1 la calidad de vida del paciente. Algunos presentan retardo mental y/o alteraciones de v\u00edas urinarias. Muchos casos son de presentaci\u00f3n espor\u00e1dica, aunque en muchas familias se ha encontrado herencia autos\u00f3mica dominante con penetrancia incompleta del gen y expresividad variable.",
                    clinicalExams: "El diagn\u00f3stico es cl\u00ednico, radiol\u00f3gico e histopatol\u00f3gico. Las biopsias de piel muestran ausencia de gl\u00e1ndulas seb\u00e1ceas con distribuci\u00f3n irregular de los poros sudor\u00edparos.",
                    bibliography: ["LONDON, R. et al. (1985). \"Urinary Tract Involvement in EEC Syndrome\", \n\
Am J Dis Child, Vol. 139: 1.191-1.193. ", "PRIES, C. et al. (1974). \"The EEC Syndrome\", Am J Dis Child, Vol. 127: 840-844."],
                    features: [4, 25, 26, 45, 46, 49, 55, 56, 73, 79, 86]
                },
                {
                    id: 118,
                    name: "S\u00edndrome Trico-Rino-Fal\u00e1ngico Tipo I",
                    synonym: "",
                    inheritance: "Autos\u00f3mica dominante",
                    retardation: false,
                    retardationNotes: "",
                    evolution: "El cuadro cl\u00ednico es m\u00e1s leve (sin retardo mental ni exostosis m\u00faltiple) que el observado en el tipo II (S\u00edndrome de LangerGiedion) y se cree que esto se debe a que en esta entidad ocurre una deleci\u00f3n cromos\u00f3mica m\u00e1s peque\u00f1a, responsable de las manifestaciones cl\u00ednicas descritas. En cara es t\u00edpica la nariz con punta ancha y globosa, en forma de pera y con las alas nasales recogidas hacia atr\u00e1s. Con frecuencia presentan infecciones respiratorias. Se han descrito algunos casos con herencia autos\u00f3mica recesiva.",
                    clinicalExams: "El diagn\u00f3stico es cl\u00ednico y radiol\u00f3gico. RX muestran huesos tubulares con ep\u00edfisis c\u00f3nicas y los dedos de las manos presentan desviaciones de las articulaciones inter-fal\u00e1ngicas proximales. En algunos casos se ha encontrado una peque\u00f1a deleci\u00f3n en el brazo largo del cromosoma 8 (Del 8q24.12), por lo cual se recomienda realizar cariotipo con bandeo de alta resoluci\u00f3n.",
                    bibliography: ["BUHLER, E. M. et al. (1987). \"A final word on the tricho-rhino-phalangeal syndromes\", \n\
Clinical Genetics, Vol. 31: 273-275.", "BUHLER, E. M. and MALIK, N. J. (1984). \"The Tricho-Rhino-Phalangeal Syndrome(s): Chromosome 8 Long Arm Deletion\", American Journal of Medical Genetics, Vol. 19: 113-119."],
                    features: [43, 47, 50, 58, 77, 92, 115]
                },
                {
                    id: 57,
                    name: "S\u00edndrome de Langer-Giedion",
                    synonym: "S\u00edndrome Trico-Rino-Fal\u00e1ngico Tipo II",
                    inheritance: "Presentaci\u00f3n espor\u00e1dica",
                    retardation: true,
                    retardationNotes: "",
                    evolution: "Las alteraciones faciales pueden ser evidentes al nacimiento (nariz en forma de pera, con punta ancha y globosa) y las radiol\u00f3gicas (exostosis) aparecen m\u00e1s tarde (alrededor de los 3 a\u00f1os de edad). Se observa retardo en el desarrollo psico-motor y con frecuencia presentan infecciones respiratorias que pueden ser la causa de muerte temprana en algunos casos. Con frecuencia presentan fracturas \u00f3seas y/o contracturas articulares. En caderas puede encontrarse cambios similares a los de la enfermedad de Perthes.",
                    clinicalExams: "El diagn\u00f3stico es cl\u00ednico, radiol\u00f3gico y de laboratorio. Los RX muestran exostosis m\u00faltiple con ep\u00edfisis c\u00f3nicas en huesos largos. En muchos pacientes se ha encontrado deleci\u00f3n en el brazo largo del cromosoma 8 (8q24.11-q24.13) por lo cual se recomienda realizar siempre cariotipo con bandeo de alta resoluci\u00f3n.",
                    bibliography: ["OKUNO, T. et al. (1987). \"Langer-Giedion syndrome with del 8 (q24.13-q24.22)\", \n\
Clinical Genetics, Vol. 32: 40-45.", "TURLEAU, C. et al. (1982). \"Langer-Giedion Syndrome With and Without del 8q\", Human Genetics, Vol. 62: 183-187. "],
                    features: [1, 4, 7, 41, 43, 50, 58, 66, 67, 79, 84, 86, 87, 114, 115]
                },
                {
                    id: 41,
                    name: "S\u00edndrome de Trombocitopenia-Aplasia Radial",
                    synonym: "S\u00edndrome TAR",
                    inheritance: "Autos\u00f3mica recesiva",
                    retardation: false,
                    retardationNotes: "",
                    evolution: "El cuadro cl\u00ednico es evidente al nacimiento. Usualmente el dedo pulgar est\u00e1 presente y esto ayuda en el diagn\u00f3stico diferencial. Adem\u00e1s de las alteraciones de extremidades superiores, con frecuencia hay alteraciones variadas de las extremidades inferiores con deformidades esquel\u00e9ticas progresivas. Pueden presentarse adem\u00e1s otras caracter\u00edsticas asociadas como: micrognatia, espina b\u00edfida, anomal\u00edas renales, baja estatura, anemia, granulocitosis leucemoide, eosinofilia y alergia o intolerancia a la leche de vaca. Del 7 al 10% de los pacientes presentan retardo mental (se cree secundario al da\u00f1o en SNC por hemorragias). La principal complicaci\u00f3n y causa de muerte del 40% de los pacientes en la infancia temprana son las hemorragias (precipitadas usualmente por episodios virales, incluyendo infecciones gastrointestinales) y, entre \u00e9stos, las m\u00e1s graves son las del Sistema Nervioso Central. Con la edad disminuye la severidad de las manifestaciones hematol\u00f3gicas y usualmente no causan problemas en la vida adulta.",
                    clinicalExams: "El diagn\u00f3stico es cl\u00ednico, radiol\u00f3gico y de laboratorio. Se recomienda estudio de m\u00e9dula \u00f3sea para confirmar la ausencia o disminuci\u00f3n de los megacariocitos.",
                    bibliography: ["HALL, J. G. (1987). \"Thrombocytopenia and absent radius (TAR) syndrome\", Journal of Medical Genetics, Vol. 24: 79-83.",
                        "SCHOENECKER, P. L. et al. (1984). \"Dysplasia of the Knee Associated with the Syndrome of Thrombocytopenia and Absent Radius\", The Journal of Bone and Joint Surgery, Vol. 66A, No. 3: 421-427."],
                    features: [76, 94, 107]
                },
                {
                    id: 123,
                    name: "S\u00edndrome de Morquio",
                    synonym: "Mucopolisacaridosis Tipo IV (MPS IV)",
                    inheritance: "Autos\u00f3mica recesiva",
                    retardation: false,
                    retardationNotes: "",
                    evolution: "La enfermedad se debe a deficiencia de las enzimas lisosomales: N-acetilgalactosamina-6-sulfatasa (MPS IV tipo A) o Bethagalactosidasa (MPS IV tipo B). El cuadro cl\u00ednico y el d\u00e9ficit de crecimiento se hacen evidentes entre el a\u00f1o y medio y los cuatro a\u00f1os de edad. La severidad del cuadro est\u00e1 dada por la actividad enzim\u00e1tica residual. El promedio de vida es de 20 a\u00f1os para las formas severas y 40 para las formas leves. Entre las principales complicaciones est\u00e1n: infecciones respiratorias frecuentes, alteraciones vertebrales como platispondilia e inestabilidad atlanto-axial con hipoplasia de odontoides y degeneraci\u00f3n progresiva de las caderas o enfermedad de LeggPerthes. Es t\u00edpico el genu-valgum. La inteligencia es normal.",
                    clinicalExams: "El diagn\u00f3stico es cl\u00ednico, radiol\u00f3gico y de laboratorio. Se recomienda an\u00e1lisis de glicosaminoglicanos urinarios, encontr\u00e1ndose excreci\u00f3n aumentada de Keratan sulfato en los tipos A, B y C (en este \u00faltimo tipo no se conoce a\u00fan el d\u00e9ficit enzim\u00e1tico espec\u00edfico) y excreci\u00f3n aumentada de Condroitin-6-Sulfato en el tipo A. La comprobaci\u00f3n del d\u00e9ficit enzim\u00e1tico espec\u00edfico se hace en cultivo de fibroblastos. Los RX muestran disostosis m\u00faltiple.",
                    bibliography: ["DEMBURE, P. P. and ROESEL, R. A. (1991). \"Screening for Mucopolysac-charidoses by Analysis of Urinary Glycosaminoglycans\" \n\
in \"Techniques in Diagnostic Human Biochemical Genetics\" by FRITS A. HOMMES, Wiley-Liss, Inc., p\u00e1gs. 77-86.",
                        "GIJSBERTUS, T. J. et al. (1983). \"Morquio B Syndrome: \n\
A Primary Defect in B-Galactosidase\", American Journal of Medical Genetics, Vol. 16: 261-275."],
                    features: [17, 36, 42, 61, 63, 66, 83, 84, 84, 94, 95, 96, 115, 120]
                },
                {
                    id: 98,
                    name: "S\u00edndrome de Desanctis-Cacchione",
                    synonym: "S\u00edndrome de idiocia Xerod\u00e9rmica",
                    inheritance: "Autos\u00f3mica recesiva",
                    retardation: true,
                    retardationNotes: "",
                    evolution: "Este es quiz\u00e1s el tipo m\u00e1s severo de Xeroderma Pigmentosa (Grupo A), con el nivel m\u00e1s bajo de reparaci\u00f3n del DNA. Los pacientes presentan crecimiento y desarrollo lento con severo deterioro neurol\u00f3gico progresivo que se inicia alrededor de los dos a\u00f1os de edad. Algunos pueden presentar convulsiones. El pron\u00f3stico es pobre y la sobrevida corta debido al deterioro del Sistema Nervioso Central y la aparici\u00f3n de c\u00e1nceres oculares y/o cut\u00e1neos.",
                    clinicalExams: "El diagn\u00f3stico es cl\u00ednico y de laboratorio. Se encuentra hipersensibilidad celular a la radiaci\u00f3n ultravioleta, evidente al hacer el test de reparaci\u00f3n del DNA.",
                    bibliography: ["KRAEMER, K. H. et al. (1987). \"Xeroderma Pigmentosum: Cutaneous, Ocular and Neurologic Abnormalities in 830 Published Cases\", Arch Dermatol, Vol. 123: 241-250."],
                    features: [3, 4, 7, 89, 102, 110, 114, 115, 117]
                },
                {
                    id: 23,
                    name: "Xeroderma Pigmentosa",
                    synonym: "Xeroderma o pil de pergamino",
                    inheritance: "Autos\u00f3mica recesiva",
                    retardation: false,
                    retardationNotes: "",
                    evolution: "Esta entidad se caracteriza por una hipersensibilidad celular a la radiaci\u00f3n ultravioleta y defectos en la reparaci\u00f3n del DNA (se han establecido 10 grupos: Al y una variante, seg\u00fan la severidad del defecto) Los pacientes desarrollan alteraciones cut\u00e1neas y oculares incluyendo neoplasias, inducidas por el sol. Las manifestaciones cut\u00e1neas se inician entre el primer y segundo a\u00f1o de vida en la mayor\u00eda de los casos. Entre quienes desarrollan neoplasias de piel (45% de todos los pacientes), la edad media de aparici\u00f3n del primer tumor es a los 8 a\u00f1os de edad. Con frecuencia ocurren complicaciones oculares como ectropion, neoplasias, fotofobia, conjuntivitis y opacidad corneal que pueden llevar hasta la ceguera. El 18% de los pacientes presentan complicaciones neurol\u00f3gicas, incluyendo retardo en el desarrollo psico-motor, deterioro mental progresivo, microcefalia, hipo o arreflexia y sordera. El 30% de los pacientes mueren antes de los 40 a\u00f1os de edad.",
                    clinicalExams: "El diagn\u00f3stico es cl\u00ednico y de laboratorio. Se recomienda realizar el test de reparaci\u00f3n del DNA en cultivo de fibroblastos.",
                    bibliography: ["KRAEMER, K. H. et al. (1987). \"Xeroderma Pigmentosum: Cutaneous, Ocular and Neurologic Abnormalities in 830 Published Cases\", Arch Dermatol, Vol. 123: 241-250."],
                    features: [36, 86, 89, 110]
                },
                {
                    id: 76,
                    name: "S\u00edndrome de Coffin-Lowry",
                    synonym: "S\u00edndrome facio-digital con retardo mental",
                    inheritance: "Semi-dominante ligada a X",
                    retardation: true,
                    retardationNotes: "",
                    evolution: "El tama\u00f1o al nacer usualmente es normal y la talla baja es evidente en la temprana infancia, dando una talla final en la edad adulta por debajo del percentil 3. Las caracter\u00edsticas faciales aparecen alrededor del segundo a\u00f1o de vida y el aspecto brusco aumenta con el tiempo. Las manifestaciones cl\u00ednicas y el retardo mental son leves en mujeres (20% de ellas no presentan retardo mental). Se recomienda manejo ortop\u00e9dico temprano por el car\u00e1cter progresivo de las alteraciones esquel\u00e9ticas. No se ha descartado un mecanismo de herencia autos\u00f3mico dominante limitado por el sexo.",
                    clinicalExams: "El diagn\u00f3stico es cl\u00ednico y radiol\u00f3gico. En los pacientes sospechosos se recomienda realizar cariotipo para X-fr\u00e1gil, al hacer el estudio de diagn\u00f3stico diferencial.",
                    bibliography: ["WILSON, W.G. and KELLY, E. (1981). \"Clinical Report: Early Recognition of the Coffin-Lowry Syndrome\",\n\
        American Journal of Medical Genetics, Vol. 8: 215-220", "YOUNG, I. D. (1988). \"The Coffin-Lowry syndrome\", Journal of Medical Genetics, Vol. 25: 344-348."],
                    features: [1, 17, 19, 22, 46, 51, 55, 58, 63, 66, 67, 75, 114, 115]
                },
                {
                    id: 110,
                    name: "Acrodisostosis",
                    synonym: "S\u00edndrome de maroteaux-malamut",
                    inheritance: "Presentaci\u00f3n espor\u00e1dica",
                    retardation: true,
                    retardationNotes: "",
                    evolution: "El diagn\u00f3stico puede hacerse al nacer o a trav\u00e9s del primer a\u00f1o de vida y las deformidades progresan lentamente durante el per\u00edodo de crecimiento. Con el paso de los a\u00f1os hay compromiso articular que lleva a restricci\u00f3n progresiva del movimiento de manos, pies y en ocasiones de columna vertebral. La talla final est\u00e1 alrededor del tercer percentil.",
                    clinicalExams: "El diagn\u00f3stico es cl\u00ednico y radiol\u00f3gico. A los RX se encuentra disostosis perif\u00e9rica con un t\u00edpico punteado epifisial y avanzada maduraci\u00f3n \u00f3sea.",
                    bibliography: ["ROBINOW, M. et al. (1971). \"Acrodysostosis\", American Journal of Disease of Children, Vol. 121: 195-203.",
                        "VILJOEN, D. and BEIGHTON, P. (1991). \"Epiphyseal Stippling in Acrodysostosis\", American Journal of Medical Genetics, Vol. 38: 43-45."
                    ],
                    features: [40, 42, 46, 48, 69, 72, 76, 114, 115]
                },
                {
                    id: 109,
                    name: "S\u00edndrome de Cockayne",
                    synonym: "Enanismo con astrofia retiniana y sordera ",
                    inheritance: "Autos\u00f3mica recesiva",
                    retardation: true,
                    retardationNotes: "",
                    evolution: "El retardo en el desarrollo psico-motor empieza a ser evidente en la infancia tard\u00eda, aunque se han descrito algunos casos cuyo deterioro se inici\u00f3 alrededor de los 6 meses de edad. Existe una tendencia clara al envejecimiento temprano y en cultivo de tejidos se ha demostrado gran sensibilidad a la irradiaci\u00f3n ultravioleta con inhibici\u00f3n de la s\u00edntesis de RNA. Algunos pacientes sobreviven hasta la pubertad o la adultez temprana.",
                    clinicalExams: "El diagn\u00f3stico es cl\u00ednico, radiol\u00f3gico e histopatol\u00f3gico. Se recomienda estudiar el efecto de la luz ultravioleta en cultivo de fibroblastos. En la autopsia se encuentra en el cerebro hallazgos compatibles con leucodistrofia y un patr\u00f3n tigroide de desmielinizaci\u00f3n con atrofia de sustancia blanca y calcificaciones cerebrales y cerebelosas.",
                    bibliography: ["MACDONALD, W. B. et al. (190). \"Cockayne's Syndrome\", Pediatrics, Vol. 25: 997-1.007.",
                        "PATTON, M. A. et al. (1989). \"Early onset Cockayne's syndrome\", Journal of Medical Genetics, Vol. 26: 154-159."],
                    features: [4, 36, 37, 38, 67, 68, 83, 89, 96, 99, 104, 114, 115]
                },
                {
                    id: 15,
                    name: "S\u00edndrome de Waardenburg",
                    synonym: "Displasia inter-oculo-irido-dermato-auditiva",
                    inheritance: "Autos\u00f3mica dominante",
                    retardation: false,
                    retardationNotes: "",
                    evolution: "Es una entidad que usualmente no pone en peligro la vida y el pron\u00f3stico est\u00e1 dado por la severidad de la sordera, siendo \u00e9sta la principal complicaci\u00f3n de este s\u00edndrome. La expresividad del gen es variable encontr\u00e1ndose con frecuencia individuos que muestran una sola de las caracter\u00edsticas diagn\u00f3sticas. Se ha descrito un tipo II del s\u00edndrome de Waardenburg, caracterizado por ausencia de distopia cantorum y presencia de enfermedad de Hirschsprung.",
                    clinicalExams: "El diagn\u00f3stico es cl\u00ednico. Se recomienda evaluaci\u00f3n auditiva al paciente y a sus familiares.",
                    bibliography: ["HAGEMAN, M. J. and DELLEMAN, J. W. (1977). \"Heterogeneity in Waardenburg Syndrome\", American Journal of Medical Genetics, Vol. 29: 468-485.",
                        "MEIRE, F. et al. (1987). \"Waardenburg Syndrome, Hirschsprung Megacolon, and Marcun Gunn Ptosis\", American Journal of Medical Genetics, Vol. 27: 683686."],
                    features: [4, 20, 23, 33, 41, 43, 86, 92]
                },
                {
                    id: 102,
                    name: "Neurofibromatosis",
                    synonym: "Enfermedad de Von Recklinghausen",
                    inheritance: "Autos\u00f3mica dominante",
                    retardation: false,
                    retardationNotes: "",
                    evolution: "Las manifestaciones cl\u00ednicas var\u00edan ampliamente desde alteraciones dermatol\u00f3gicas leves hasta severas deformidades con d\u00e9ficit neurol\u00f3gico importante y/o tumores malignos. Los neurofibromas d\u00e9rmicos usualmente aparecen alrededor de la pubertad y contin\u00faan creciendo a trav\u00e9s de la vida. Entre las principales complicaciones est\u00e1n: convulsiones, macrocefalia, hemihipertrofia, alteraciones esquel\u00e9ticas como pseudo-artrosis de la tibia, escoliosis y todas aquellas asociadas a lesiones producidas por los tumores. El pron\u00f3stico depender\u00e1 del grado y del sitio comprometido. Algunos pacientes presentan retardo mental leve y problemas de aprendizaje. Se ha descrito un tipo II asociado a neurofibromas ac\u00fasticos bilaterales. La mitad de los casos del tipo I son mutaciones nuevas.",
                    clinicalExams: "El diagn\u00f3stico es cl\u00ednico, radiol\u00f3gico e histopatol\u00f3gico. Se recomienda evaluaci\u00f3n visual y auditiva, as\u00ed como controles radiol\u00f3gicos frecuentes para detectar en forma temprana la aparici\u00f3n de malignidades.",
                    bibliography: ["BRITISH NEUROFIBROMATOSIS ASSOCIATION (1987). \"Neuroflbromatosis\", The Lancet, March 21: 60-664.",
                        "MULVIHILL, J. J. et al. (1990). \"Neurofibromatosis 1 (Recklinghausen Disease) and Neurofibromatosis 2 (Bilateral Acoustic Neurofibromatosis)\", Annals of Internal Medicine, Vol. 113, No. 1:39-52."],
                    features: [8, 33, 86, 110, 113]
                },
                {
                    id: 39,
                    name: "S\u00edndrome de Beckwith-Wiedemann",
                    synonym: "S\u00edndrome de onfalocele-macroglosia y gigantismo",
                    inheritance: "Autos\u00f3mica dominante",
                    retardation: true,
                    retardationNotes: "",
                    evolution: "Al nacer son ni\u00f1os grandes para su edad gestacional. La policitemia y la hipoglicemia son frecuentes en el per\u00edodo neonatal. La macroglosia puede favorecer episodios de dificultad respiratoria. Seg\u00fan algunos autores, puede ocurrir variable expresividad dentro de una misma familia, haciendo dif\u00edcil el diagn\u00f3stico retrospectivo de los casos leves, debido a que con la edad se vuelven menos notorias las caracter\u00edsticas cl\u00ednicas. Es frecuente la visceromegalia y entre las complicaciones m\u00e1s frecuentes est\u00e1n las neoplasias abdominales.",
                    clinicalExams: "El diagn\u00f3stico es cl\u00ednico, radiol\u00f3gico y de laboratorio. El cariotipo muestra duplicaci\u00f3n parcial en el cromosoma 11 (11p15) en algunos de los pacientes. Se recomienda ecograf\u00edas abdominales frecuentes para descartar malignidades. Los cambios patol\u00f3gicos esperados incluyen citomegalia adreno-cortical e hipertrofia o displasia de tejidos en p\u00e1ncreas, ri\u00f1\u00f3n, h\u00edgado y otros \u00f3rganos.",
                    bibliography: ["HENRY, I. et al. (1989). \"Molecular definition of the 11p-15.5 region involved in Beckwith-Widemann syndrome and probably in predisposition to adrenocortical carcinoma\", Human Genetics, Vol. 81: 273-277.",
                        "NIIKAWA, N. et al. (1986). \"The Wiedemann-Beckwith Syndrome\", American Journal of Medical Genetics, Vol. 24: 41-55."],
                    features: [53, 59, 95, 98, 99, 103, 108, 112, 113, 114]
                },
                {
                    id: 112,
                    name: "S\u00edndrome de Roberts",
                    synonym: "S\u00edndrome de pseudo-talidomida-SC Focomelia",
                    inheritance: "Autos\u00f3mica recesiva",
                    retardation: true,
                    retardationNotes: "",
                    evolution: "Al nacer presentan un peso bajo para su edad gestacional y posteriormente presentan dificultades en su desarrollo. La mayor\u00eda mueren en el per\u00edodo peri-natal. Se han descrito hallazgos asociados como malformaciones cardiacas, renales y genitales. Algunos autores consideran que el t\u00e9rmino \"Pseudotalidomida o SC-Focomelia\" debe usarse para las variantes m\u00e1s leves del s\u00edndrome y que cursan con mayor sobre-vida.",
                    clinicalExams: "El diagn\u00f3stico es cl\u00ednico, radiol\u00f3gico y de laboratorio. Se ha encontrado en el estudio citogen\u00e9tico un reducido crecimiento celular y una acentuada y prematura separaci\u00f3n de las crom\u00e1tides a nivel de los centr\u00f3meros, evidente al hacer el bandeo C.",
                    bibliography: ["ROMKE, C. et al. (1987). \"Roberts syndrome and SC Phocomelia. A single genetic entity\", Clinical Genetics, Vol. 31: 170-177.",
                        "WALDENMAIER, C. et al. (1978). \"The Robert's Syndrome\", Human Genetics, Vol. 40: 345-349."],
                    features: [7, 19, 47, 49, 59, 73, 76, 79, 83, 88, 114, 115]
                },
                {
                    id: 95,
                    name: "Disostosis Cleido-Craneal",
                    synonym: "Enfermedad de Marie-Sainton",
                    inheritance: "Autos\u00f3mica dominante",
                    retardation: false,
                    retardationNotes: "",
                    evolution: "La entidad se caracteriza por amplia variabilidad en la expresi\u00f3n del gen. Usualmente no pone en peligro la vida, aunque pueden presentarse alteraciones respiratorias en la infancia, debido a la estrechez de la caja tor\u00e1cica. Un adecuado manejo odontol\u00f3gico ayuda a disminuir las complicaciones dentales. En las mujeres embarazadas est\u00e1 indicado el parto por ces\u00e1rea debido a la pobre osificaci\u00f3n de los huesos isquio-p\u00fabicos. La talla final en adultos est\u00e1 alrededor de 168 cm en hombres y 148 en mujeres.",
                    clinicalExams: "El diagn\u00f3stico es cl\u00ednico y radiol\u00f3gico. RX muestran una falla generalizada en la osificaci\u00f3n de la l\u00ednea media, incluyendo en cr\u00e1neo (a nivel de las suturas y con presencia de m\u00faltiples huesos wormianos), en cara, columna (espina b\u00edfida oculta) y pelvis. Se recomienda evaluaci\u00f3n auditiva para descartar sordera conductiva.",
                    bibliography: ["JENSEN, B. L. (1990). \"Somatic Development in Cleidocranial Dysplasia\", American Journal of Medical Genetics, Vol. 35: 69-74.",
                        "KALLIALA, E. et al. (1962). \"Cleidocranial Dysostosis\", Oral Roentgenology, Vol. 15, No. 7: 808-822."],
                    features: [11, 19, 40, 45, 55, 56, 62, 62, 65, 77, 115]
                },
                {
                    id: 81,
                    name: "S\u00edndrome de Freeman-Sheldon",
                    synonym: "Displasia Cr\u00e1neo-carpo-tarsal o S\u00edndrome de la cara silbante",
                    inheritance: "Autos\u00f3mica dominante",
                    retardation: false,
                    retardationNotes: "",
                    evolution: "Al parecer las alteraciones faciales (incluyendo labios en posici\u00f3n de Silbar) y esquel\u00e9ticas son secundarias a un tono muscular anormal, con hiperton\u00eda desde la vida intra-uterina; aunque no se ha podido aclarar si el defecto primario est\u00e1 a nivel neurol\u00f3gico o muscular. Aunque las caracter\u00edsticas cl\u00ednicas son evidentes al nacimiento, el diagn\u00f3stico se hace alrededor del primer a\u00f1o de vida, en la mayor\u00eda de los casos. Usualmente presentan dificultades en la alimentaci\u00f3n y problemas respiratorios, siendo \u00e9stos la principal causa de muerte en la infancia temprana. Son t\u00edpicas las l\u00edneas faciales en forma de H marcadas sobre el ment\u00f3n y la desviaci\u00f3n ulnar de los dedos de las manos. Algunos pacientes presentan alg\u00fan grado de retardo mental. Se han descrito algunos casos con herencia autos\u00f3mica recesiva.",
                    clinicalExams: "El diagn\u00f3stico es cl\u00ednico, radiol\u00f3gico y de laboratorio. Se recomienda realizar electromiograma y biopsia muscular, cuando es posible.",
                    bibliography: ["DALLAPICCOLA, B. et al. (1989). \"Autosomal Recessive Form of Whistling Face Syndrome in Sibs\", American Joumal of Medical 33:542-544.",
                        "OCONNELL, D. J. and HALL, C. M. (1977). \"Cranio-Carpo-Tarsal Dysplasia\", Radiology, Vol. 123: 719-722."],
                    features: [2, 16, 19, 21, 25, 27, 42, 50, 51, 53, 57, 83, 85, 95]
                },
                {
                    id: 87,
                    name: "Mucolipidosis Tipo II",
                    synonym: "Enfermedad de c\u00e9lula I (C\u00e9lulas de inclusi\u00f3n) o S\u00edndrome de Leroy",
                    inheritance: "Autos\u00f3mica recesiva",
                    retardation: true,
                    retardationNotes: "",
                    evolution: "La entidad se presenta por un d\u00e9ficit de la enzima lisosomal N-acetilglucosamina-1-fosfotransferasa. E cuadro cl\u00ednico es similar al de los pacientes con Pseudo-Hurler. Los signos y s\u00edntomas aparecen en forma temprana y son progresivos, siendo ya evidente el retardo en el desarrollo psico-motor a los 6 meses de edad. Son frecuentes las infecciones respiratorias y la otitis media. Las complicaciones cardiovasculares (cardiomegalia y valvulopat\u00eda a\u00f3rtica) son la principal causa de muerte entre los 5 y 7 a\u00f1os de vida. Con frecuencia hay alteraciones oculares (opacidad corneal, megalocornea, glaucoma).",
                    clinicalExams: "El diagn\u00f3stico es cl\u00ednico, radiol\u00f3gico y de laboratorio. Los RX muestran cambios tempranos de una severa disostosis m\u00faltiple. Histopatolog\u00eda reporta inclusiones granulares citoplasm\u00e1ticas. El diagn\u00f3stico se confirma por la medici\u00f3n de la actividad enzim\u00e1tica, la cual est\u00e1 disminuida en los cultivos celulares y puede estar aumentada en suero. A diferencia del Pseudo-Hurler, no hay excesiva excreci\u00f3n urinaria de mucopolisac\u00e1ridos.",
                    bibliography: ["PAZZAGLIA, U. E. et al. (1989). \"Mucolipidosis II: correlation between radiological features and histopatology of the bones\", Pediatr Radiol, Vol. 19: 406-413."],
                    features: [11, 17, 21, 36, 40, 50, 66, 83, 87, 88, 96, 114, 115]
                },
                {
                    id: 48,
                    name: "S\u00edndrome de Prader-Willi",
                    synonym: "S\u00edndrome de prader-Labhart-Willi o S\u00edndrome HHO (Hipogonadismo y Obesidad)",
                    inheritance: "Presentaci\u00f3n espor\u00e1dica",
                    retardation: true,
                    retardationNotes: "la mayor\u00eda",
                    evolution: "Aunque esta entidad puede reconocerse desde el nacimiento, el diagn\u00f3stico se hace alrededor de los 7 a\u00f1os, en la mayor\u00eda de los casos. Hay dificultad en la alimentaci\u00f3n debido a una pobre succi\u00f3n y retardo en el desarrollo psico-motor. La hipoton\u00eda mejora con la edad, desapareciendo a los pocos meses o al final del segundo a\u00f1o de vida. Al desaparecer la hipoton\u00eda usualmente se inicia la obesidad favorecida por un apetito voraz. Entre las principales complicaciones de la obesidad est\u00e1n: somnolencia, diabetes mellitus, hipoventilaci\u00f3n, corpulmonale y falla ventricular derecha, que usualmente lleva a la muerte antes de la cuarta d\u00e9cada de la vida. Se describe en muchos casos problemas de comportamiento y desadaptaci\u00f3n social. La talla final en adultos fluct\u00faa entre 147 y 160 cm.",
                    clinicalExams: "El diagn\u00f3stico es cl\u00ednico. Se recomienda realizar cariotipo con bandeo de alta resoluci\u00f3n, buscando una deleci\u00f3n en el brazo largo del cromosoma 15 (del 15q11-13), descrita en el 50% de los casos y que usualmente es de origen paterno.",
                    bibliography: ["BURKE, C. M. et al. (1987). \"Familial Prader-Willi Syndrome\", Arch Intern Med, Vol. 147: 673-675.",
                        "CASSIDY, S. B. (1992). \"Conference Report: First International Scientific Workshop on Prader-Willi Syndrome and Other Chromosorne 15q Deletion Disorders\", American Journal of Medical Genetics, Vol. 42: 220-230."],
                    features: [1, 27, 59, 66, 69, 99, 99, 102, 111, 114, 115]
                },
                {
                    id: 27,
                    name: "S\u00edndrome Oral-Facial-Digital Tipo I (OFD I)",
                    synonym: "Displasia linguo-facialis",
                    inheritance: "Dominante ligada a X",
                    retardation: true,
                    retardationNotes: "Algunos",
                    evolution: "Esta entidad se ha descrito siempre en mujeres, pues es letal en fetos hombres. El cuadro cl\u00ednico es evidente desde el nacimiento. Son caracter\u00edsticos m\u00faltiples frenillos en la cavidad oral. Ocasionalmente puede haber polidactilia, pero \u00e9sta es m\u00e1s caracter\u00edstica del S\u00edndrome OFD II. Se han descrito alteraciones en el Sistema Nervioso Central y cerca del 50% de los pacientes cursan con retardo mental. Alrededor de la tercera parte mueren en la infancia temprana.",
                    clinicalExams: "El diagn\u00f3stico es cl\u00ednico y radiol\u00f3gico. A los RX es caracter\u00edstico el patr\u00f3n reticular irregular de huesos tubulares de manos y falanges de los pies (esto ayuda en el diagn\u00f3stico diferencial con OFD ll).",
                    bibliography: ["ANNEREN, G. et al. (1984). \"Oro-facio-digital syndromes I and II: radiological methods for diagnosis and the clinical variations\", Clinical Genetics, Vol. 26: 178-186."],
                    features: [20, 43, 49, 52, 52, 56, 69, 74, 78, 79, 114]
                },
                {
                    id: 100,
                    name: "S\u00edndrome de Goltz",
                    synonym: "Hipoplasia d\u00e9rmica focal",
                    inheritance: "Dominante ligada a X",
                    retardation: false,
                    retardationNotes: "",
                    evolution: "Casi todos los pacientes son del sexo femenino, pues, al parecer la entidad es letal para los hombres. Con frecuencia se encuentran \u00e1reas lineales de piel delgada y herniaciones localizadas de grasa sub-cut\u00e1nea a trav\u00e9s de la dermis. Pueden presentar dificultades en el crecimiento, prurito en las \u00e1reas de piel comprometida y algunos cursan con d\u00e9ficit mental. El pron\u00f3stico depende de la severidad del compromiso esquel\u00e9tico (en muchos casos hay asimetr\u00eda de cr\u00e1neo, tronco y extremidades, hipoplasia o ausencia de dedos, etc.), oftalmol\u00f3gico y odontol\u00f3gico.",
                    clinicalExams: "El diagn\u00f3stico es cl\u00ednico, radiol\u00f3gico e histopatol\u00f3gico. Las lesiones de piel muestran marcada disminuci\u00f3n del col\u00e1geno d\u00e9rmico. Los RX muestran osteopat\u00eda estriada con finas l\u00edneas densas longitudinales en huesos largos.",
                    bibliography: ["WECHSLER, M. A. et al. (1988). \"Variable Expression in Focal Dermal Hypoplasia\", American Journal of Diseases of Children, Vol. 142: 297-300"],
                    features: [27, 32, 33, 55, 79, 81, 86, 88, 90, 113]
                },
                {
                    id: 129,
                    name: "Secuencia de Robin",
                    synonym: "S\u00edndrome de Pierre-Robin",
                    inheritance: "Presentaci\u00f3n espor\u00e1dica",
                    retardation: false,
                    retardationNotes: "",
                    evolution: "Esta entidad se puede presentar en forma aislada o ser parte de otro s\u00edndrome m\u00e1s complejo. La compresi\u00f3n mec\u00e1nica de la mand\u00edbula limita su adecuado desarrollo (micrognatia) y empuja la lengua hacia atr\u00e1s y hacia arriba impidiendo el cierre del paladar. El paladar hendido (blando y duro) es central y sim\u00e9trico, en forma de U invertida. Con un manejo oportuno y adecuado, el pron\u00f3stico es bueno (muchos casos requieren fijaci\u00f3n de la lengua al ment\u00f3n) y el maxilar inferior puede llegar a desarrollarse normalmente. Entre las principales complicaciones est\u00e1n: dificultades en la alimentaci\u00f3n, episodios de dificultad respiratoria con apnea y cianosis que pueden llevar a la muerte temprana o dejar un d\u00e9ficit mental. Puede presentarse sordera conductiva asociada. Se ha descrito un tipo especial de esta entidad asociado a oligodactilia y/o aplasia o agenesia de falanges distales en pies y arritmia cardiaca con herencia autos\u00f3mica dominante.",
                    clinicalExams: "El diagn\u00f3stico es cl\u00ednico. Se recomienda evaluaci\u00f3n auditiva y descartar otras entidades asociadas como el S\u00edndrome de Stickler, entre otras.",
                    bibliography: ["ROBINOW, M. et al. (1986). \"Robin Sequence and Oligodactyly in Mother and Son\", American Journal of Medical Genetics, Vol. 25: 293-297.",
                        "STOLL, C. et al. (1992). \"Ventricular Extrasystoles With Syncopal Episodes, Perodactyly, and Robin Sequence in Three Generations\", American Journal of Medical Genetics, Vol. 42: 480-486."],
                    features: [47, 49, 52]
                },
                {
                    id: 103,
                    name: "S\u00edndrome de Rieger ",
                    synonym: "S\u00edndrome de hipodoncia y goniodisgenesis",
                    inheritance: "Autos\u00f3mica dominante",
                    retardation: false,
                    retardationNotes: "",
                    evolution: "Se cree que el defecto b\u00e1sico es una falla en el desarrollo de los tejidos derivados del ectodermo de la cresta neural, en el tercer trimestre del embarazo. En general la calidad de vida es buena y el pron\u00f3stico depende de la severidad de las alteraciones visuales y dentales y de su adecuado manejo. Puede haber completa o parcial hipoplasia bilateral del estroma del iris con adhesiones cong\u00e9nitas del mismo y anomal\u00edas de las estructuras angulares, lo cual puede cursar con opacidades corneales, luxaci\u00f3n del cristalino, etc. La presi\u00f3n intraocular se aumenta como resultado de las adhesiones del iris y una de las principales complicaciones es el glaucoma (50% de los pacientes lo desarrollan), que puede llevar a un d\u00e9ficit visual importante. Muchos presentan frenillos linguales hiperpl\u00e1sicos que requieren resecci\u00f3n quir\u00fargica. Es caracter\u00edstico de esta entidad el labio inferior prominente con labio superior aparentemente retra\u00eddo. Cuando solo se presentan los hallazgos oculares la entidad se conoce como \"Anomal\u00eda de Rieger\". Se ha encontrado esta entidad en algunos pacientes con anomal\u00edas cromos\u00f3micas estructurales o asociada a otras alteraciones sist\u00e9micas (el hallazgo m\u00e1s frecuente es un defecto en la involuci\u00f3n de la piel peri-umbilical).",
                    clinicalExams: "El diagn\u00f3stico es cl\u00ednico y radiol\u00f3gico. Se recomienda estudio radiol\u00f3gico dental y realizaci\u00f3n de cariotipo en los pacientes sospechosos de una anomal\u00eda cromos\u00f3mica.",
                    bibliography: ["BROOKS, J. K. et al. (1989). \"The Rieger anomaly concomitant with multiple dental, craniofacial, and somatic midline anomalies and short stature\", Oral Surg Oral Med Oral Pathol, Vol. 68: 717-724.",
                        "DRUM, M. A. et al. (1985). \"Oral manifestations of the Rieger syndrome: report of case\", JADA, Vol. 110: 343-346."],
                    features: [19, 33, 34, 41, 46, 55, 99]
                },
                {
                    id: 115,
                    name: "S\u00edndrome de Mohr",
                    synonym: "S\u00edndrome oral-facial-digital tipo II (OFD II)",
                    inheritance: "Autos\u00f3mica recesiva",
                    retardation: false,
                    retardationNotes: "",
                    evolution: "Esta es una entidad menos frecuente que el S\u00edndrome OFD tipo I, pero de mejor pron\u00f3stico que \u00e9ste. El cuadro cl\u00ednico se reconoce al nacer. El manejo incluye un equipo interdisciplinario (cirujano pl\u00e1stico, otorrino-laring\u00f3logo, odont\u00f3logo, terapista del lenguaje) y de su adecuado manejo depender\u00e1 su calidad de vida. En la infancia pueden presentarse infecciones respiratorias que en algunos casos pueden llevarlos a la muerte. Muy pocos casos presentan retardo mental y ocasionalmente hay alteraciones del Sistema Nervioso-Central. Se han descrito casos con herencia recesiva ligada a X y muy leve expresi\u00f3n del gen en las mujeres portadoras.",
                    clinicalExams: "El diagn\u00f3stico es cl\u00ednico y radiol\u00f3gico. Se recomienda evaluaci\u00f3n auditiva. Los RX pueden mostrar duplicaci\u00f3n del primer metatarsiano o bifurcaci\u00f3n del mismo o de los huesos cuneiformes.",
                    bibliography: ["ANNEREN, G. et al. (1984). \"Oro-facio-digital syndromes I and II: radiological methods for diagnosis and the clinical variations\", Clinical Genetics, Vol. 26: 178-186.",
                        "REARDON, W. et al. (1989). \"Central nervous system malformations in Mohr's syndrome\", Journal of Medical Genetics, Vol. 26: 659-663."],
                    features: [4, 20, 40, 46, 47, 49, 52, 55, 56, 74, 76, 78, 115]
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
            getSyndromeNames: function () {
                return _.pluck(this._syndromes, 'name');
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
                    name: "Hernias onfalocele o defectos de la pared abdominal"
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

