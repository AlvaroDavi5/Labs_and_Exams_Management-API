import { Request, Response } from 'express'
import { getExamById } from "../controllers/examController"
import { getLabById } from "../controllers/labController"
import { createExamLab, getAllExamLabs, deleteExamLab } from "../controllers/examLabController"


export async function associate(request: Request, response: Response) {
	const { method, params } = request

	try {
		const allExamLabs = await getAllExamLabs()
		let associationAlreadyExists = false

		allExamLabs.forEach(examLab => {
			if (examLab.exam_id == parseInt(params.exam_id) && examLab.lab_id == parseInt(params.lab_id)) {
				associationAlreadyExists = true
			}
		})
		let newExamLab = null
		let exam = null
		let lab = null
		if (!associationAlreadyExists) {
			exam = await getExamById(parseInt(params.exam_id))
			lab = await getLabById(parseInt(params.lab_id))

			if (!!exam && !!lab) {
				newExamLab = await createExamLab(parseInt(params.exam_id), parseInt(params.lab_id), false)
			}
		}

		response.status(200) // OK
		response.send({
			success: !!newExamLab,
			method: method,
			data: {
				exam: exam,
				lab: lab
			},
			message: !!newExamLab ? "Exam-Lab association created" : "Error to create Exam-Lab association"
		})
	}
	catch ({ message }) {
		response.status(401) // Unauthorized
		response.send({
			success: false,
			method: method,
			data: null,
			message: message
		})
	}
}

export async function dissociate(request: Request, response: Response) {
	const { method, params } = request

	try {
		const allExamLabs = await getAllExamLabs()
		let deletedAssociation = null

		allExamLabs.forEach(examLab => {
			if (examLab.exam_id == parseInt(params.exam_id) && examLab.lab_id == parseInt(params.lab_id)) {
				deletedAssociation = deleteExamLab(examLab)
			}
		})

		response.status(200) // OK
		response.send({
			success: !!deletedAssociation,
			method: method,
			data: null,
			message: !!deletedAssociation ? "Exam-Lab association deleted" : "Error to delete Exam-Lab association"
		})
	}
	catch ({ message }) {
		response.status(401) // Unauthorized
		response.send({
			success: false,
			method: method,
			data: null,
			message: message
		})
	}
}
