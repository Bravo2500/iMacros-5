﻿

//Set the various Values to the Variable values we've specified above
iimSet("TASKNAME", "Fix") 
iimSet("TASKHOURS", "6") 
iimSet("TASKTYPE",  "Development")

iimPlay("_fFullCreateTask.iim")


iimSet("TASKNAME", "Test") 
iimSet("TASKHOURS", "2")
iimSet("TASKTYPE",  "Test")

iimPlay("_fFullCreateTask.iim")

