import Exams from "../../database/models/exams"


async function createExam(name: string, type: string, status: boolean, return_id: boolean): Promise<number | boolean> {
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

async function getExamById(id: number): Promise<Exams | null> {
	try {
		const exam = await Exams.findByPk(id)

		return exam
	}
	catch ({ message }) {
		console.log(message)
		return null
	}
}

async function getAllExams(): Promise<Exams[]> {
	try {
		const exams = await Exams.findAll()

		return exams
	}
	catch ({ message }) {
		console.log(message)
		return []
	}
}

async function searchExam(name: string): Promise<boolean> {
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

async function updateExam(exam: Exams, name: string, type: string, status: boolean): Promise<boolean> {
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

async function deleteExam(exam: Exams): Promise<boolean> {
	try {
		await exam.destroy()

		return true
	}
	catch ({ message }) {
		console.log(message)
		return false
	}
}


export { createExam, getExamById, getAllExams, searchExam, updateExam, deleteExam }
