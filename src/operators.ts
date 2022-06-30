import { iOperators } from "./types";

export const operators:iOperators[] = [
  {
      "name": "kartuHalo",
      "operator": "Telkomsel",
      "code": [11],
      "validationConfig": {
        "maxLength" : 13,
        "minLength": 8
    }
  },
  {
      "name": "simPATI",
      "operator": "Telkomsel",
      "code": [12,13,21],
      "validationConfig": {
        "maxLength" : 13,
        "minLength": 8
    }
  },
  {
      "name": "LOOP",
      "operator": "Telkomsel",
      "code": [22],
      "validationConfig": {
        "maxLength" : 13,
        "minLength": 8
    }
  },
  {
      "name": "KARTU As",
      "operator": "Telkomsel",
      "code": [21,23,52,53],
      "validationConfig": {
        "maxLength" : 13,
        "minLength": 8
    }
  },
  {
      "name": "by.U / Kartu As",
      "operator": "Telkomsel",
      "code": [51],
      "validationConfig": {
        "maxLength" : 13,
        "minLength": 8
    }
  },
  {
      "name": "IndosatM2",
      "operator": "Indosat Ooredoo",
      "code": [14],
      "validationConfig": {
        "maxLength" : 13,
        "minLength": 8
    }
  },
  {
      "name": "Matrix",
      "operator": "Indosat Ooredoo",
      "code": [55],
      "validationConfig": {
        "maxLength" : 13,
        "minLength": 8
    }
  },
  {
      "name": "Mentari",
      "operator": "Indosat Ooredoo",
      "code": [58],
      "validationConfig": {
        "maxLength" : 13,
        "minLength": 8
    }
  },
  {
      "name": "Mentari/Matrix",
      "operator": "Indosat Ooredoo",
      "code": [15,16],
      "validationConfig": {
        "maxLength" : 13,
        "minLength": 8
    }
  },
  {
      "name": "IM3",
      "operator": "Indosat Ooredoo",
      "code": [56,57],
      "validationConfig": {
        "maxLength" : 13,
        "minLength": 8
    }
  },
  {
      "name": "XL",
      "operator": "XL Axiata",
      "code": [17,18,19,59,77,78,79],
      "validationConfig": {
        "maxLength" : 13,
        "minLength": 8
    }
  },
  {
      "name": "Axis",
      "operator": "XL Axiata",
      "code": [31,32,33,38],
      "validationConfig": {
        "maxLength" : 13,
        "minLength": 8
    }
  },
  {
      "name": "3",
      "operator": "3",
      "code": [95,96,97,98,99],
      "validationConfig": {
          "maxLength" : 13,
          "minLength": 8
      }
  },
  {
      "name": "Smartfren",
      "operator": "Smartfren",
      "code": [81,82,83,84,85,86,87,88,89],
      "validationConfig": {
        "maxLength" : 13,
        "minLength": 8
    }
  },
  {
      "name": "Net1",
      "operator": "Net1",
      "code": [27, 28],
      "validationConfig": {
        "maxLength" : 13,
        "minLength": 8
    }
  },
  {
      "name": "ByRU",
      "operator": "ByRU",
      "code": [68],
      "validationConfig": {
        "maxLength" : 13,
        "minLength": 8
    }
  },
];