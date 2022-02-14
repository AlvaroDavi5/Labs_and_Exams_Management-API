const examController = require("../controllers/examController.js")
const labController = require("../controllers/labController.js")
const examLabController = require("../controllers/examLabController.js")


exports.associate = async function(request, response) {
	const { method, params } = request

	try {
		const allExamLabs = await examLabController.getAllExamLabs()
		let associationAlreadyExists = false

		allExamLabs.forEach(examLab => {
			if (parseInt(examLab.exam_id) == parseInt(params.exam_id) && parseInt(examLab.lab_id) == parseInt(params.lab_id)) {
				associationAlreadyExists = true
			}
		})
		if (!associationAlreadyExists) {
			const exam = await examController.getExamById(parseInt(params.exam_id))
			const lab = await labController.getLabById(parseInt(params.lab_id))
			let newExamLab = null

			if (!!exam && !!lab) {
				newExamLab = await examLabController.createExamLab(parseInt(params.exam_id), parseInt(params.lab_id), false)
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

exports.dissociate = async function(request, response) {
	const { method, params } = request

	try {
		const allExamLabs = await examLabController.getAllExamLabs()
		let deletedAssociation = false

		allExamLabs.forEach(examLab => {
			if (parseInt(examLab.exam_id) == parseInt(params.exam_id) && parseInt(examLab.lab_id) == parseInt(params.lab_id)) {
				deletedAssociation = examLabController.deleteExamLab(examLab)
			}
		})

		response.status(200) // OK
		response.send({
			success: deletedAssociation,
			method: method,
			data: null,
			message: deletedAssociation ? "Exam-Lab association deleted" : "Error to delete Exam-Lab association"
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
