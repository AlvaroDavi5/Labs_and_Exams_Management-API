import { Request, Response } from 'express'
import Labs from "@root/database/models/labs"
import { createExam, getExamById, getAllExams, updateExam, deleteExam } from "./controllers/examController"
import { getAllLabs } from "./controllers/labController"
import { getAllExamLabs } from "./controllers/examLabController"
import { httpConstants } from "../configs/httpConstants"


export async function examCreate(request: Request, response: Response) {
	const { method, body } = request

	try {
		const exams = await getAllExams()
		let examAlreadyExists = false
		exams.forEach(exam => {
			if (exam.name === body?.name) {
				examAlreadyExists = true
			}
		})
		let exam_id = null
		if (!examAlreadyExists) {
			exam_id = await createExam(body?.name, body?.type, true, true)
		}

		response.status(httpConstants.status.CREATED)
		response.send({
			success: !!exam_id,
			method: method,
			data: {
				exam_id: exam_id
			},
			message: !!exam_id
				? httpConstants.messages.created("Exam")
				: httpConstants.messages.notCreated("Exam")
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

export async function examRead(request: Request, response: Response) {
	const { method, params } = request

	try {
		const exam = await getExamById(parseInt(params?.id))
		const labs = await getAllLabs()
		const examLabs = await getAllExamLabs()
		let labList: Array<Labs> = []

		examLabs.forEach(examLab => {
			if (examLab.exam_id == exam!.id) {
				labs.forEach(lab => {
					if (lab.id == examLab.lab_id) {
						labList.push(lab)
					}
				})
			}
		})

		response.status(httpConstants.status.OK)
		response.send({
			success: !!exam,
			method: method,
			data: {
				exam: exam,
				associated_labs: labList
			},
			message: !!exam
				? httpConstants.messages.found("Exam")
				: httpConstants.messages.notFound("Exam")
		})
	}
	catch ({ message }) {
		response.status(httpConstants.status.NOT_FOUND)
		response.send({
			success: false,
			method: method,
			data: null,
			message: message
		})
	}
}

export async function examReadAll(request: Request, response: Response) {
	const { method, query } = request

	try {
		const allExams = await getAllExams()
		let exams = allExams.filter(exam => {
			return exam.status == true
		})
		const activeStatus: boolean = String(query?.active_status).toLowerCase() == "true" ? true : false

		if (!!query?.search_term) {
			exams = exams.filter(exam => {
				return (exam.name.toLowerCase()).includes(new String(query?.search_term).toLowerCase())
			})
		}
		if (activeStatus) {
			exams = exams.filter(exam => {
				return exam.status == activeStatus
			})
		}

		response.status(httpConstants.status.OK)
		response.send({
			success: !!exams,
			method: method,
			data: {
				exams: exams
			},
			message: !!exams
				? httpConstants.messages.found("Exams")
				: httpConstants.messages.notFound("Exams")
		})
	}
	catch ({ message }) {
		response.status(httpConstants.status.NOT_FOUND)
		response.send({
			success: false,
			method: method,
			data: null,
			message: message
		})
	}
}

export async function examUpdate(request: Request, response: Response) {
	const { method, params, body } = request

	try {
		const exam = await getExamById(parseInt(params?.id))
		let wasUpdated = false
		if (!!exam) {
			wasUpdated = await updateExam(exam, body?.name, body?.type, body?.status)
		}

		response.status(httpConstants.status.OK)
		response.send({
			success: !!wasUpdated,
			method: method,
			data: {
				updated_exam: exam
			},
			message: !!wasUpdated
				? httpConstants.messages.updated("Exam")
				: httpConstants.messages.notUpdated("Exam")
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

export async function examDelete(request: Request, response: Response) {
	const { method, params } = request

	try {
		const exam = await getExamById(parseInt(params?.id))
		let wasDeleted = false
		if (!!exam) {
			wasDeleted = await deleteExam(exam)
		}

		response.status(httpConstants.status.OK)
		response.send({
			success: !!wasDeleted,
			method: method,
			data: {
				deleted_exam: exam
			},
			message: !!wasDeleted
				? httpConstants.messages.deleted("Exam")
				: httpConstants.messages.notDeleted("Exam")
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
