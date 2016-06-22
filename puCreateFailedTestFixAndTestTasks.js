
//Set the various Values to the Variable values we've specified above
iimSet("TASKNAME", "Fix<SP>Again<SP>(Failed Test)") 
iimSet("TASKHOURS", "6") 
iimSet("TASKTYPE",  "Development")

iimPlay("_fPopCreateTask.iim")

iimSet("TASKNAME", "Test<SP>Again<SP>(Failed Test)") 
iimSet("TASKHOURS", "2")
iimSet("TASKTYPE",  "Test")

iimPlay("_fPopCreateTask.iim")

