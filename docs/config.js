// src/config.js

// 1️⃣ En‐tête CSV (première ligne de DUMMY.csv)
export const CSV_HEADER =
  `Id;Name;JapName;Shirt;ShirtNational;Commentary;Country;Country2;Height;Weight;Age;Foot;PlayingStyle;POS;GK;CB;LB;RB;DMF;CMF;LMF;RMF;AMF;LWF;RWF;SS;CF;OffensiveAwareness;BallControl;Dribbling;TightPossession;LowPass;LoftedPass;Finishing;Heading;PlaceKicking;Curl;Speed;Acceleration;KickingPower;Jump;PhysicalContact;Balance;Stamina;DefensiveAwareness;BallWinning;Aggression;GKAwareness;GKCatching;GKClearing;GKReflexes;GKReach;WeakFootUsage;WeakFootAcc;Form;InjuryResistance;Reputation;PlayingAttitude;Trickster;MazingRun;SpeedingBullet;IncisiveRun;LongBallExpert;EarlyCross;LongRanger;ScissorsFeint;DoubleTouch;FlipFlap;MarseilleTurn;Sombrero;CrossOverTurn;CutBehindAndTurn;ScotchMove;StepOnSkillcontrol;HeadingSpecial;LongRangeDrive;Chipshotcontrol;LongRangeShot;KnuckleShot;DippingShots;RisingShots;AcrobaticFinishing;HeelTrick;FirstTimeShot;OneTouchPass;ThroughPassing;WeightedPass;PinpointCrossing;OutsideCurler;Rabona;NoLookPass;LowLoftedPass;GKLowPunt;GKHighPunt;LongThrow;GKLongThrow;PenaltySpecialist;GKPenaltySaver;Gamesmanship;ManMarking;TrackBack;Interception;AcrobaticClear;Captaincy;SuperSub;FightingSpirit;Celebration1;Celebration2;DribblingHunching;DribblingArmMove.;RunningHunching;RunningArmMovement;CornerKicks;FreeKicks;PenaltyKick;DribbleMotion;YouthClub;OwnerClub;ContractUntil;LoanUntil;MarketValue;NationalCaps;Legend;Hand;WinnerGoldenBall;EditName;EditBasics;EditPosition;EditPositions;EditAbilities;EditPlayerSkills;EditPlayingStyle;EditCOMPlayingStyles;EditMovements;Edit1;Edit2;Edit3;Edit4;Edit5;Edit6;Edit7;Value1;Value2;Value3;Value2020_1;Value2020_2;Appearance;ListBoots;ListGloves;InEditFile;OverallStats;NeckLength;NeckSize;ShoulderHeight;ShoulderWidth;ChestMeasurement;WaistSize;ArmSize;ThighSize;CalfSize;LegLength;ArmLength;SkinColour;HeadLength;HeadWidth;HeadDepth;FaceHeight;FaceSize;UpperEyelidType;BottomEyelidType;EyeHeight;HorizontalEyePosition;IrisColour;PupilSize;UpperEyelidHt.(Inner);UpperEyelidWd.(Inner);UpperEyelidHt.(Outer);UpperEyelidWd.(Outer);InnerEyeHeight;InnerEyePosition;EyeCornerHeight;OuterEyePosition;BottomEyelidHeight;EyeDepth;Forehead;EyebrowType;EyebrowThickness;EyebrowStyle;EyebrowDensity;EyebrowColourR;EyebrowColourG;EyebrowColourB;InnerEyebrowHeight;BrowWidth;OuterEdyebrowHeight;TempleWidth;EyebrowDepth;NoseType;LaughterLines;NoseHeight;NostrilWidth;NoseWidth;NoseTipDepth;NoseDepth;UpperLipType;LowerLipType;MouthPosition;LipSize;LipWidth;MouthCornerHeight;MouthDepth;FacialHairType;FacialHairColourR;FacialHairColourG;FacialHairColourB;Thickness;CheekType;NeckLineType;Cheekbones;ChinHeight;ChinWidth;JawHeight;Jawline;ChinDepth;EarLength;EarWidth;EarAngle;Overall-Style;Overall-Length;Overall-WaveLevel;Overall-HairVariation;Font-Style;Font-Parted;Font-Hairline;Font-ForeheadWidth;Side/Back-Style;Side/Back-Cropped;HairColourR;HairColourG;HairColourB;AccessoryColour;HairColour;Accessories;Wristtaping;WristTapeColour1;WristTapeColour2;AnkleTaping;PlayerGloves;Colour;Undershorts;Sleeves;Shirttail;SockLength;Long-SleevedInners;ValueAp1;ValueAp2;ValueAp3;ValueAp4;ValueAp5;ValueAp6;ValueAp7;ValueAp8;ValueAp9;ValueAp10;ValueAp11;ValueAp12;ValueAp13;ValueAp14;ValueAp15;ValueAp16;ValueAp17;ValueAp18;ValueAp19;IdFace;Boots;Gloves;EditFace;EditHair;EditPhysique;EditStrip;ValueA`;

// 2️⃣  Liste des nationalités (code ejogc327 → libellé affiché)
export const COUNTRIES = {
  "260": "France",
  "21":  "Allemagne",
  "76":  "Brésil",
  "45":  "Espagne",
  "207": "Angleterre",
  "83":  "Italie",
  "52":  "Argentine",
  "137": "Portugal",
  "114": "Pays-Bas",
  "15":  "Belgique",
  "360": "Nigéria",
  "375": "Sénégal",
  "12":  "Algérie",
  "188": "Croatie",
  "200": "Danemark",
  "276": "Allemagne",
  "392": "Japon",
  "840": "États-Unis"
  // Ajoutez d’autres codes si nécessaire
};

// 3️⃣  Définition des postes disponibles
export const POSITIONS = [
  { code: "GK",  name: "Gardien" },
  { code: "CB",  name: "Défenseur central" },
  { code: "LB",  name: "Arrière gauche" },
  { code: "RB",  name: "Arrière droit" },
  { code: "DMF", name: "Milieu défensif" },
  { code: "CMF", name: "Milieu central" },
  { code: "LMF", name: "Milieu gauche" },
  { code: "RMF", name: "Milieu droit" },
  { code: "AMF", name: "Milieu offensif" },
  { code: "LWF", name: "Ailier gauche" },
  { code: "RWF", name: "Ailier droit" },
  { code: "SS",  name: "Soutien de pointe" },
  { code: "CF",  name: "Avant-centre" }
];

// 4️⃣  Modificateurs de statistiques par poste
export const MODIFIERS = {
  GK:  { GKAwareness: 15, GKReflexes: 12, GKCatching: 10, GKClearing: 8, GKReach: 10, Speed: -15, Acceleration: -10, Finishing: -20, OffensiveAwareness: -15 },
  CB:  { DefensiveAwareness: 10, Heading: 8, PhysicalContact: 5, Speed: -8, Finishing: -10 },
  LB:  { Speed: 6, Acceleration: 4, DefensiveAwareness: 3, Finishing: -6 },
  RB:  { Speed: 6, Acceleration: 4, DefensiveAwareness: 3, Finishing: -6 },
  DMF: { DefensiveAwareness: 8, BallWinning: 5, Speed: -2, Finishing: -5 },
  CMF: { LowPass: 5, BallControl: 4, Speed: 0, Finishing: -2 },
  LMF: { Speed: 5, Dribbling: 4, Finishing: -3 },
  RMF: { Speed: 5, Dribbling: 4, Finishing: -3 },
  AMF: { OffensiveAwareness: 8, Dribbling: 5, DefensiveAwareness: -5 },
  LWF: { Speed: 7, Dribbling: 6, DefensiveAwareness: -8 },
  RWF: { Speed: 7, Dribbling: 6, DefensiveAwareness: -8 },
  SS:  { Finishing: 8, OffensiveAwareness: 8, Speed: 5, DefensiveAwareness: -12 },
  CF:  { Finishing: 8, OffensiveAwareness: 8, Speed: 5, DefensiveAwareness: -12 }
};
