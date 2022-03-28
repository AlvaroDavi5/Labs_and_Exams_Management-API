import { Request, Response } from 'express'
import { getExamById } from "./controllers/examController"
import { getLabById } from "./controllers/labController"
import { createExamLab, getAllExamLabs, deleteExamLab } from "./controllers/examLabController"
import { httpConstants } from "../configs/httpConstants"


export async function associate(request: Request, response: Response) {
	const { method, params } = request

	try {
		const allExamLabs = await getAllExamLabs()
		let associationAlreadyExists = false

		allExamLabs.forEach(examLab => {
			if (examLab.exam_id == parseInt(params?.exam_id) && examLab.lab_id == parseInt(params?.lab_id)) {
				associationAlreadyExists = true
			}
		})
		let newExamLab = null
		let exam = null
		let lab = null
		if (!associationAlreadyExists) {
			exam = await getExamById(parseInt(params?.exam_id))
			lab = await getLabById(parseInt(params?.lab_id))

			if (!!exam && !!lab) {
				newExamLab = await createExamLab(parseInt(params?.exam_id), parseInt(params?.lab_id), false)
			}
		}

		response.status(httpConstants.status.OK)
		response.send({
			success: !!newExamLab,
			method: method,
			data: {
				exam: exam,
				lab: lab
			},
			message: !!newExamLab
				? httpConstants.messages.created("Exam-Lab association")
				: httpConstants.messages.notCreated("Exam-Lab association")
		})
	}
	catch ({ message }) {
		response.status(httpConstants.status.UNAUTHORIZED)
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
			if (examLab.exam_id == parseInt(params?.exam_id) && examLab.lab_id == parseInt(params?.lab_id)) {
				deletedAssociation = deleteExamLab(examLab)
			}
		})

		response.status(httpConstants.status.OK)
		response.send({
			success: !!deletedAssociation,
			method: method,
			data: null,
			message: !!deletedAssociation
				? httpConstants.messages.deleted("Exam-Lab association")
				: httpConstants.messages.notDeleted("Exam-Lab association")
		})
	}
	catch ({ message }) {
		response.status(httpConstants.status.UNAUTHORIZED)
		response.send({
			success: false,
			method: method,
			data: null,
			message: message
		})
	}
}
