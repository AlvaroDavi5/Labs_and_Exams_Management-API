const labController = require("../controllers/labController.js")
const examController = require("../controllers/examController.js")
const examLabController = require("../controllers/examLabController.js")


exports.labCreate = async function(request, response) {
	const { method, body } = request

	try {
		const lab_id = await labController.createLab(body.name, body.address, body.status, true)

		response.status(201) // Created
		response.send({
			success: !!lab_id,
			method: method,
			data: {
				lab_id: lab_id
			},
			message: !!lab_id ? "Lab created successfully" : "Error to create lab"
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

exports.labRead = async function(request, response) {
	const { method, params } = request

	try {
		const lab = await labController.getLabById(parseInt(params.id))
		const exams = await examController.getAllExams()
		const examLabs = await examLabController.getAllExamLabs()
		let examList = []

		examLabs.forEach(examLab => {
			if (parseInt(examLab.lab_id) == parseInt(lab.id)) {
				exams.forEach(exam => {
					if (parseInt(exam.id) == parseInt(examLab.exam_id)) {
						examList.push(exam)
					}
				})
			}
		})

		response.status(200) // OK
		response.send({
			success: !!lab,
			method: method,
			data: {
				lab: lab,
				associated_exams: examList
			},
			message: !!lab ? "Lab finded successfully" : "Lab not found"
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

exports.labReadAll = async function(request, response) {
	const { method, query } = request

	try {
		const allLabs = await labController.getAllLabs()
		let labs = allLabs
		if (!!query.search_term) {
			labs = labs.filter(lab => {
				return lab.name.toLowerCase().includes(query.search_term.toLowerCase())
			})
		}
		if (!!query.active_status) {
			labs = labs.filter(lab => {
				return (
					lab.status == query.active_status ||
					String(lab.status).toLowerCase() == String(query.active_status).toLowerCase()
				)
			})
		}

		response.status(200) // OK
		response.send({
			success: !!labs,
			method: method,
			data: {
				labs: labs
			},
			message: !!labs ? "Labs finded successfully" : "Labs not found"
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

exports.labUpdate = async function(request, response) {
	const { method, params, body } = request

	try {
		const lab = await labController.getLabById(parseInt(params.id))
		let wasUpdated = false
		if (!!lab) {
			wasUpdated = await labController.updateLab(lab, body.name, body.address, body.status)
		}

		response.status(200) // OK
		response.send({
			success: !!wasUpdated,
			method: method,
			data: wasUpdated,
			message: !!wasUpdated ? "Lab updated successfully" : "Error to update lab"
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

exports.labDelete = async function(request, response) {
	const { method, params } = request

	try {
		const lab = await labController.getLabById(parseInt(params.id))
		let wasDeleted = false
		if (!!user) {
			wasDeleted = await labController.deleteLab(lab)
		}

		response.status(200) // OK
		response.send({
			success: !!wasDeleted,
			method: method,
			data: wasDeleted,
			message: !!wasDeleted ? "Lab deleted successfully" : "Error to delete lab"
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
