
//Specify the values to enter for the Triage Fields in TFS
iimSet("STATEVALUE",     "Approved") 
iimSet("TRIAGEVALUE",    "3<SP>*") 
iimSet("ITERATIONVALUE", "PacomUnison\\Valhalla")
iimSet("RELEASEVALUE",   "5.8.0")

iimPlay("_fPopTriageSetValues.iim")
