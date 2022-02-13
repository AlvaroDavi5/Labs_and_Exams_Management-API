const index = require("./index")
const exams = require("./exams.js")
const labs = require("./labs.js")
const examLab = require("./exam_lab.js")


module.exports = function(app){

	// sample:
	// http://localhost:3000/lab/:id?search_term=technology&active_status=true

	// --- exams ---
	app.get("/exams", exams.examReadAll) // get all exams, get exams filtered by search_term
	app.post("/exams", exams.examCreate) // create exam with JSON body and return id
	app.get("/exam/:id", exams.examRead) // get exam by id
	app.put("/exam/:id", exams.examUpdate) // update exam by id
	app.delete("/exam/:id", exams.examDelete) // delete exam by id

	// --- labs ---
	app.get("/labs", labs.labReadAll) // get all labs, get labs filtered by search_term
	app.post("/labs", labs.labCreate) // create lab with JSON body and return id
	app.get("/lab/:id", labs.labRead) // get lab by id
	app.put("/lab/:id", labs.labUpdate) // update lab by id
	app.delete("/lab/:id", labs.labDelete) // delete lab by id

	// --- exam_lab ---
	app.put("/association/exam/:exam_id/lab/:lab_id", examLab.associate) // associate exam with lab
	app.delete("/association/exam/:exam_id/lab/:lab_id", examLab.dissociate) // dissociate exam with lab

	// --- index ---
	app.get("/", index.info) // return index data (API info)
}
