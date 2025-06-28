// build.js – Générateur PES 21 avec noms diversifiés, export CSV séparés, et notes globales
// Ce fichier doit être placé à la racine de votre dossier build/ après compilation

import JSZip from "jszip";
import { saveAs } from "file-saver";

// --- Configuration globale ---

// En-tête CSV (première ligne de DUMMY.csv)
const CSV_HEADER = `Id;Name;JapName;Shirt;ShirtNational;Commentary;Country;Country2;Height;Weight;Age;Foot;PlayingStyle;POS;GK;CB;LB;RB;DMF;CMF;LMF;RMF;AMF;LWF;RWF;SS;CF;OffensiveAwareness;BallControl;Dribbling;TightPossession;LowPass;LoftedPass;Finishing;Heading;PlaceKicking;Curl;Speed;Acceleration;KickingPower;Jump;PhysicalContact;Balance;Stamina;DefensiveAwareness;BallWinning;Aggression;GKAwareness;GKCatching;GKClearing;GKReflexes;GKReach;WeakFootUsage;WeakFootAcc;Form;InjuryResistance;Reputation;PlayingAttitude;Trickster;MazingRun;SpeedingBullet;IncisiveRun;LongBallExpert;EarlyCross;LongRanger;ScissorsFeint;DoubleTouch;FlipFlap;MarseilleTurn;Sombrero;CrossOverTurn;CutBehindAndTurn;ScotchMove;StepOnSkillcontrol;HeadingSpecial;LongRangeDrive;Chipshotcontrol;LongRangeShot;KnuckleShot;DippingShots;RisingShots;AcrobaticFinishing;HeelTrick;FirstTimeShot;OneTouchPass;ThroughPassing;WeightedPass;PinpointCrossing;OutsideCurler;Rabona;NoLookPass;LowLoftedPass;GKLowPunt;GKHighPunt;LongThrow;GKLongThrow;PenaltySpecialist;GKPenaltySaver;Gamesmanship;ManMarking;TrackBack;Interception;AcrobaticClear;Captaincy;SuperSub;FightingSpirit;Celebration1;Celebration2;DribblingHunching;DribblingArmMove.;RunningHunching;RunningArmMovement;CornerKicks;FreeKicks;PenaltyKick;DribbleMotion;YouthClub;OwnerClub;ContractUntil;LoanUntil;MarketValue;NationalCaps;Legend;Hand;WinnerGoldenBall;EditName;EditBasics;EditPosition;EditPositions;EditAbilities;EditPlayerSkills;EditPlayingStyle;EditCOMPlayingStyles;EditMovements;Edit1;Edit2;Edit3;Edit4;Edit5;Edit6;Edit7;Value1;Value2;Value3;Value2020_1;Value2020_2;Appearance;ListBoots;ListGloves;InEditFile;OverallStats;NeckLength;NeckSize;ShoulderHeight;ShoulderWidth;ChestMeasurement;WaistSize;ArmSize;ThighSize;CalfSize;LegLength;ArmLength;SkinColour;HeadLength;HeadWidth;HeadDepth;FaceHeight;FaceSize;UpperEyelidType;BottomEyelidType;EyeHeight;HorizontalEyePosition;IrisColour;PupilSize;UpperEyelidHt.(Inner);UpperEyelidWd.(Inner);UpperEyelidHt.(Outer);UpperEyelidWd.(Outer);InnerEyeHeight;InnerEyePosition;EyeCornerHeight;OuterEyePosition;BottomEyelidHeight;EyeDepth;Forehead;EyebrowType;EyebrowThickness;EyebrowStyle;EyebrowDensity;EyebrowColourR;EyebrowColourG;EyebrowColourB;InnerEyebrowHeight;BrowWidth;OuterEdyebrowHeight;TempleWidth;EyebrowDepth;NoseType;LaughterLines;NoseHeight;NostrilWidth;NoseWidth;NoseTipDepth;NoseDepth;UpperLipType;LowerLipType;MouthPosition;LipSize;LipWidth;MouthCornerHeight;MouthDepth;FacialHairType;FacialHairColourR;FacialHairColourG;FacialHairColourB;Thickness;CheekType;NeckLineType;Cheekbones;ChinHeight;ChinWidth;JawHeight;Jawline;ChinDepth;EarLength;EarWidth;EarAngle;Overall-Style;Overall-Length;Overall-WaveLevel;Overall-HairVariation;Font-Style;Font-Parted;Font-Hairline;Font-ForeheadWidth;Side/Back-Style;Side/Back-Cropped;HairColourR;HairColourG;HairColourB;AccessoryColour;HairColour;Accessories;Wristtaping;WristTapeColour1;WristTapeColour2;AnkleTaping;PlayerGloves;Colour;Undershorts;Sleeves;Shirttail;SockLength;Long-SleevedInners;ValueAp1;ValueAp2;ValueAp3;ValueAp4;ValueAp5;ValueAp6;ValueAp7;ValueAp8;ValueAp9;ValueAp10;ValueAp11;ValueAp12;ValueAp13;ValueAp14;ValueAp15;ValueAp16;ValueAp17;ValueAp18;ValueAp19;IdFace;Boots;Gloves;EditFace;EditHair;EditPhysique;EditStrip;ValueA`;

// Codes pays (exemple, à adapter selon votre liste)
const countries = {
  "260": "France",
  "21": "Allemagne",
  "76": "Brésil",
  "45": "Espagne",
  "207": "Angleterre",
  "83": "Italie",
  "52": "Argentine",
  "137": "Portugal",
  "114": "Pays-Bas",
  "15": "Belgique",
  "360": "Nigéria",
  "375": "Sénégal",
  "12": "Algérie",
  "100": "Bulgarie",
  "188": "Croatie",
  "200": "Danemark",
  "248": "Pays de Galles",
  "320": "Écosse",
  "276": "Allemagne",
  "392": "Japon",
  "466": "Mexique",
  "504": "Portugal",
  "528": "Suède",
  "616": "Pologne",
  "620": "Angleterre",
  "704": "Venezuela",
  "840": "États-Unis"
  // Ajoutez tous les codes nécessaires
};

// Positions et modificateurs inchangés (copier/coller depuis votre config)

// --- Import des noms de pes.xlsx ---

// Exemple de dictionnaire complet (extrait, à générer à partir de pes.xlsx)
const dictNames = {
  "France": [
    "PIERRE MARTIN","MOUSSA DIOP","MOHAMED BENALI","JULIEN LEROY","LUCAS GARNIER",
    "ALI ABDI","YAHIA OUEDRAOGO","FATIMA BOUAZIZ","KHALIL EL HASSANI","NASSER DJELLOUL",
    // + milliers de noms/prénoms
  ],
  "Allemagne": [
    "THOMAS MÜLLER","MEHMET ÖZDEMIR","JULIAN SCHMIDT","GÜLŞEN AKIN","SEBASTIAN KLEIN",
    // ...
  ],
  "Sénégal": [
    "MOUSSA DIOP","FATOU SARR","AMADOU GUEYE","KHADY FALL","SEYDOU NDIAYE",
    // ...
  ],
  // Ajoutez toutes les autres nations avec leurs listes
};

// --- Fonction de génération de nom ---

const usedNames = {};

function generateNameByNationality(nat) {
  const pool = dictNames[nat] || [];
  if (!usedNames[nat]) usedNames[nat] = new Set();
  if (pool.length === 0) return `JOUEUR_${Date.now()%100000}`;
  let candidate;
  do {
    candidate = pool[Math.floor(Math.random()*pool.length)];
  } while (usedNames[nat].has(candidate));
  usedNames[nat].add(candidate);
  return candidate.toUpperCase();
}

// --- Fonction d’export CSV séparés ---

async function exportSeparated(players) {
  const zip = new JSZip();
  players.forEach(p => {
    const safeName = p.Name.replace(/ /g,"_");
    const filename = `${p.Id}_${safeName}.csv`;
    zip.file(filename, `${CSV_HEADER}\n${p.csvLine}`);
  });
  const blob = await zip.generateAsync({ type:"blob" });
  saveAs(blob,"players_pes.zip");
}

// --- Génération des joueurs ---

// Exemple de fonction principale (à adapter selon votre UI)
function generatePlayers(settings) {
  const players = [];
  const countryCodes = settings.countryCodes; // ex: ['260','21']
  const totalCount = settings.totalPlayers; // ex: 500
  // Répartition par pays et poste
  // à implémenter selon votre logique
  // pour chaque joueur :
  //   - choisir pays
  //   - générer nom
  //   - générer autres stats
  //   - ajouter à players
  // puis
  // exportSeparated(players);
}

// --- Export pour déploiement ---

// Exposez les fonctions nécessaires
export {
  generatePlayers,
  exportSeparated,
  generateNameByNationality
};