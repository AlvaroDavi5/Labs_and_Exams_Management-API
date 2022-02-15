const connection = require("../database/connection.js")
const Exams = require("../database/models/exams.js")


async function createExam(name, type, status, return_id) {
	Exams.init(connection)

	try {
		const exam = await Exams.create(
			{
				name: name,
				type: type,
				status: status
			}
		)

		if (return_id == true) {
			return exam.id
		}
		else {
			return true
		}
	}
	catch ({ message }) {
		console.log(message)
		return false
	}
}

async function getExamById(id) {
	Exams.init(connection)

	try {
		const exam = await Exams.findByPk(id)

		return exam
	}
	catch ({ message }) {
		console.log(message)
		return null
	}
}

async function getAllExams() {
	Exams.init(connection)

	try {
		const exams = await Exams.findAll()
		let examList = []

		if (Object.prototype.toString.call(exams) === '[object Array]') {
			return exams
		}
		else {
			examList.push(exams)
			return examList
		}
	}
	catch ({ message }) {
		console.log(message)
		return null
	}
}

async function searchExam(name) {
	Exams.init(connection)

	try {
		const exam = await Exams.findOne({
			where: {
				name: name
			}
		})

		return !!exam
	}
	catch ({ message }) {
		console.log(message)
		return false
	}
}

async function updateExam(exam, name, type, status) {
	Exams.init(connection)

	try {
		if (name) { exam.name = name }
		if (type) { exam.type = type }
		if (status === false || status === true) { exam.status = status }

		await exam.save()

		return true
	}
	catch ({ message }) {
		console.log(message)
		return false
	}
}

async function deleteExam(exam) {
	Exams.init(connection)

	try {
		await exam.destroy()

		return true
	}
	catch ({ message }) {
		console.log(message)
		return false
	}
}


module.exports = { createExam, getExamById, getAllExams, searchExam, updateExam, deleteExam }
