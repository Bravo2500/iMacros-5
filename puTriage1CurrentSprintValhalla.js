var stateVariable= "Committed"
var triageVariable= "1<SP>-<SP>Action<SP>Curr*ent<SP>Sprint"
var iterationVariable="PacomUnison\\Valhalla\\Sprint<SP>28"
var releaseVariable="5.8.0"

//Set the various Values to the Variable values we've specified above
iimSet("STATEVALUE", stateVariable) 
iimSet("TRIAGEVALUE", triageVariable) 
iimSet("ITERATIONVALUE", iterationVariable)
iimSet("RELEASEVALUE", releaseVariable)


iimPlay("puTriageSetValues.iim")




