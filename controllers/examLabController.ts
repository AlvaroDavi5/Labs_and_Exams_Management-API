import ExamLab from "../database/models/exam_lab"


async function createExamLab(exam_id: number, lab_id: number, return_id: boolean): Promise<number | boolean> {
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
		console.log(message)
		return false
	}
}

async function getExamLabById(id: number): Promise<ExamLab | null> {
	try {
		const examLab = await ExamLab.findByPk(id)

		return examLab
	}
	catch ({ message }) {
		console.log(message)
		return null
	}
}

async function getAllExamLabs(): Promise<ExamLab[]> {
	try {
		const examLabs = await ExamLab.findAll()

		return examLabs
	}
	catch ({ message }) {
		console.log(message)
		return []
	}
}

async function updateExamLab(exam_lab: ExamLab, exam_id: number, lab_id: number): Promise<boolean> {
	try {
		if (exam_id) { exam_lab.exam_id = exam_id }
		if (lab_id) { exam_lab.lab_id = lab_id }

		await exam_lab.save()

		return true
	}
	catch ({ message }) {
		console.log(message)
		return false
	}
}

async function deleteExamLab(exam_lab: ExamLab): Promise<boolean> {
	try {
		await exam_lab.destroy()

		return true
	}
	catch ({ message }) {
		console.log(message)
		return false
	}
}


export { createExamLab, getExamLabById, getAllExamLabs, updateExamLab, deleteExamLab }
