import { Express } from 'express'
import { info } from "./index"
import { examCreate, examReadAll, examRead, examUpdate, examDelete } from "./exams"
import { labCreate, labReadAll, labRead, labUpdate, labDelete } from "./labs"
import { associate, dissociate } from "./exam_lab"


export default function r(app: Express){

	// sample:
	// http://localhost:3000/lab/:id?search_term=technology&active_status=true

	try {
		// --- exams ---
		app.get("/exams", examReadAll) // get all exams, get exams filtered by search_term
		app.post("/exams", examCreate) // create exam with JSON body and return id
		app.get("/exam/:id", examRead) // get exam by id
		app.put("/exam/:id", examUpdate) // update exam by id
		app.delete("/exam/:id", examDelete) // delete exam by id

		// --- labs ---
		app.get("/labs", labReadAll) // get all labs, get labs filtered by search_term
		app.post("/labs", labCreate) // create lab with JSON body and return id
		app.get("/lab/:id", labRead) // get lab by id
		app.put("/lab/:id", labUpdate) // update lab by id
		app.delete("/lab/:id", labDelete) // delete lab by id

		// --- exam_lab ---
		app.put("/association/exam/:exam_id/lab/:lab_id", associate) // associate exam with lab
		app.delete("/association/exam/:exam_id/lab/:lab_id", dissociate) // dissociate exam with lab

		// --- index ---
		app.get("/", info) // return index data (API info)

		return true
	}
	catch (error: any) {
		console.log(error.message)
		return false
	}

}
