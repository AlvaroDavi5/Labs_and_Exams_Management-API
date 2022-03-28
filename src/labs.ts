import { Request, Response } from 'express'
import Exams from "@root/database/models/exams"
import { getAllExams } from "./controllers/examController"
import { createLab, getLabById, getAllLabs, updateLab, deleteLab } from "./controllers/labController"
import { getAllExamLabs } from "./controllers/examLabController"
import { httpConstants } from "../configs/httpConstants"


export async function labCreate(request: Request, response: Response) {
	const { method, body } = request

	try {
		const labs = await getAllLabs()
		let labAlreadyExists = false
		labs.forEach(lab => {
			if (lab.name === body?.name) {
				labAlreadyExists = true
			}
		})
		let lab_id = null
		if (!labAlreadyExists) {
			lab_id = await createLab(body?.name, body?.address, true, true)
		}

		response.status(httpConstants.status.CREATED)
		response.send({
			success: !!lab_id,
			method: method,
			data: {
				lab_id: lab_id
			},
			message: !!lab_id
				? httpConstants.messages.created("Lab")
				: httpConstants.messages.notCreated("Lab")
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

export async function labRead(request: Request, response: Response) {
	const { method, params } = request

	try {
		const lab = await getLabById(parseInt(params?.id))
		const exams = await getAllExams()
		const examLabs = await getAllExamLabs()
		let examList: Array<Exams> = []

		examLabs.forEach(examLab => {
			if (examLab.lab_id == lab!.id) {
				exams.forEach(exam => {
					if (exam.id == examLab.exam_id) {
						examList.push(exam)
					}
				})
			}
		})

		response.status(httpConstants.status.OK) // OK
		response.send({
			success: !!lab,
			method: method,
			data: {
				lab: lab,
				associated_exams: examList
			},
			message: !!lab
				? httpConstants.messages.found("Lab")
				: httpConstants.messages.notFound("Lab")
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

export async function labReadAll(request: Request, response: Response) {
	const { method, query } = request

	try {
		const allLabs = await getAllLabs()
		let labs = allLabs.filter(lab => {
			return lab.status == true
		})
		const activeStatus: boolean = String(query?.active_status).toLowerCase() == "true" ? true : false

		if (!!query?.search_term) {
			labs = labs.filter(lab => {
				return (lab.name.toLowerCase()).includes(new String(query?.search_term).toLowerCase())
			})
		}
		if (activeStatus) {
			labs = labs.filter(lab => {
				return lab.status == activeStatus
			})
		}

		response.status(httpConstants.status.OK)
		response.send({
			success: !!labs,
			method: method,
			data: {
				labs: labs
			},
			message: !!labs
				? httpConstants.messages.found("Labs")
				: httpConstants.messages.notFound("Labs")
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

export async function labUpdate(request: Request, response: Response) {
	const { method, params, body } = request

	try {
		const lab = await getLabById(parseInt(params?.id))
		let wasUpdated = false
		if (!!lab) {
			wasUpdated = await updateLab(lab, body?.name, body?.address, body?.status)
		}

		response.status(httpConstants.status.OK)
		response.send({
			success: !!wasUpdated,
			method: method,
			data: {
				deleted_lab: lab
			},
			message: !!wasUpdated
				? httpConstants.messages.updated("Lab")
				: httpConstants.messages.notUpdated("Lab")
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

export async function labDelete(request: Request, response: Response) {
	const { method, params } = request

	try {
		const lab = await getLabById(parseInt(params?.id))
		let wasDeleted = false
		if (!!lab) {
			wasDeleted = await deleteLab(lab)
		}

		response.status(httpConstants.status.OK)
		response.send({
			success: !!wasDeleted,
			method: method,
			data: {
				updated_lab: lab
			},
			message: !!wasDeleted
				? httpConstants.messages.deleted("Lab")
				: httpConstants.messages.notDeleted("Lab")
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
