import Labs from "../database/models/labs"


/*
 * CRUD database operations
  ? Create
  ? Read
  ? Update
  ? Delete
*/
async function createLab(name: string, address: string, status: boolean, return_id: boolean): Promise<number | boolean> {
	try {
		const lab = await Labs.create(
			{
				name: name,
				address: address,
				status: status
			}
		)

		if (return_id == true) {
			return lab.id
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

async function getLabById(id: number): Promise<Labs | null> {
	try {
		const lab = await Labs.findByPk(id)

		return lab
	}
	catch ({ message }) {
		console.log(message)
		return null
	}
}

async function getAllLabs(): Promise<Labs[]> {
	try {
		const labs = await Labs.findAll()

		return labs
	}
	catch ({ message }) {
		console.log(message)
		return []
	}
}

async function searchLab(name: string): Promise<boolean> {
	try {
		const lab = await Labs.findOne({
			where: {
				name: name
			}
		})

		return !!lab
	}
	catch ({ message }) {
		console.log(message)
		return false
	}
}

async function updateLab(lab: Labs, name: string, address: string, status: boolean): Promise<boolean> {
	try {
		if (name) { lab.name = name }
		if (address) { lab.address = address }
		if (status === false || status === true) { lab.status = status }

		await lab.save()

		return true
	}
	catch ({ message }) {
		console.log(message)
		return false
	}
}

async function deleteLab(lab: Labs): Promise<boolean> {
	try {
		await lab.destroy()

		return true
	}
	catch ({ message }) {
		console.log(message)
		return false
	}
}


export { createLab, getLabById, getAllLabs, searchLab, updateLab, deleteLab }
