const examController = require("../controllers/examController.js")
const labController = require("../controllers/labController.js")
const examLabController = require("../controllers/examLabController.js")


exports.examCreate = async function(request, response) {
	const { method, body } = request

	try {
		const exam_id = await examController.createExam(body.name, body.type, body.status, true)

		response.status(201) // Created
		response.send({
			success: !!exam_id,
			method: method,
			data: {
				exam_id: exam_id
			},
			message: !!exam_id ? "Exam created successfully" : "Error to create exam"
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

exports.examRead = async function(request, response) {
	const { method, params } = request

	try {
		const exam = await examController.getExamById(params.id)
		const labs = await labController.getAllLabs()
		const examLabs = await examLabController.getAllExamLabs()
		let labList = []

		examLabs.forEach(examLab => {
			if (examLab.exam_id == exam.id) {
				labs.forEach(lab => {
					if (lab.id == examLab.lab_id) {
						labList.push(lab)
					}
				})
			}
		})

		response.status(200) // OK
		response.send({
			success: !!exam,
			method: method,
			data: {
				exam: exam,
				associated_labs: labList
			},
			message: !!exam ? "Exam finded successfully" : "Exam not found"
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

exports.examReadAll = async function(request, response) {
	const { method, query } = request

	try {
		const allExams = await examController.getAllExams()
		let exams = allExams
		if (!!query.search_term) {
			exams = exams.filter(exam => {
				return exam.name.toLowerCase().includes(query.search_term.toLowerCase())
			})
		}
		if (!!query.active_status) {
			exams = exams.filter(exam => {
				return (
					exam.status == query.active_status ||
					String(exam.status).toLowerCase() == String(query.active_status).toLowerCase()
				)
			})
		}

		response.status(200) // OK
		response.send({
			success: !!exams,
			method: method,
			data: {
				exams: exams
			},
			message: !!exams ? "Exams finded successfully" : "Exams not found"
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

exports.examUpdate = async function(request, response) {
	const { method, params, body } = request

	try {
		const exam = await examController.getExamById(params.id)
		let wasUpdated = false
		if (!!exam) {
			wasUpdated = await examController.updateExam(exam, body.name, body.type, body.status)
		}

		response.status(200) // OK
		response.send({
			success: !!wasUpdated,
			method: method,
			data: wasUpdated,
			message: !!wasUpdated ? "Exam updated successfully" : "Error to update exam"
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

exports.examDelete = async function(request, response) {
	const { method, params } = request

	try {
		const exam = await examController.getExamById(params.id)
		let wasDeleted = false
		if (!!user) {
			wasDeleted = await examController.deleteExam(exam)
		}

		response.status(200) // OK
		response.send({
			success: !!wasDeleted,
			method: method,
			data: wasDeleted,
			message: !!wasDeleted ? "Exam deleted successfully" : "Error to delete exam"
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