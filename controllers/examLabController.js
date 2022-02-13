const connection = require("../database/connection.js")
const ExamLab = require("../database/models/exam_lab.js")


async function createExamLab(exam_id, lab_id, return_id) {
	ExamLab.init(connection)

	try {
		const examLab = await ExamLab.create(
			{
				exam_id: exam_id,
				lab_id: lab_id
			}
		)

		if (return_id == true) {
			return examLab.id
		}
		else {
			return true
		}
	}
	catch ({ message }) {
		return false
	}
}

async function getExamLabById(id) {
	ExamLab.init(connection)

	try {
		const examLab = await ExamLab.findByPk(id)

		return examLab
	}
	catch ({ message }) {
		return null
	}
}

async function getAllExamLabs() {
	ExamLab.init(connection)

	try {
		const examLabs = await ExamLab.findAll()

		return examLabs
	}
	catch ({ message }) {
		return null
	}
}

async function updateExamLab(exam_lab, exam_id, lab_id) {
	ExamLab.init(connection)

	try {
		if (exam_id) { exam_lab.exam_id = exam_id }
		if (lab_id) { exam_lab.lab_id = lab_id }

		await exam_lab.save()

		return true
	}
	catch ({ message }) {
		return false
	}
}

async function deleteExamLab(exam_lab) {
	ExamLab.init(connection)

	try {
		await exam_lab.destroy()

		return true
	}
	catch ({ message }) {
		return false
	}
}


module.exports = { createExamLab, getExamLabById, getAllExamLabs, updateExamLab, deleteExamLab }
