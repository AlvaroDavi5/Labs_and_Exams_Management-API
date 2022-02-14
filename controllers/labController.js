const connection = require("../database/connection.js")
const Labs = require("../database/models/labs.js")


/*
 * CRUD database operations
  ? Create
  ? Read
  ? Update
  ? Delete
*/
async function createLab(name, address, status, return_id) {
	Labs.init(connection)

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

async function getLabById(id) {
	Labs.init(connection)

	try {
		const lab = await Labs.findByPk(id)

		return lab
	}
	catch ({ message }) {
		console.log(message)
		return null
	}
}

async function getAllLabs() {
	Labs.init(connection)

	try {
		const labs = await Labs.findAll()
		labList = []

		if (Object.prototype.toString.call(labs) === '[object Array]') {
			return labs
		}
		else {
			labList.push(labs)
			return labList
		}
	}
	catch ({ message }) {
		console.log(message)
		return null
	}
}

async function searchLab(name) {
	Labs.init(connection)

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

async function updateLab(lab, name, address, status) {
	Labs.init(connection)

	try {
		if (name) { lab.name = name }
		if (address) { lab.address = address }
		if (status) { lab.status = status }

		await lab.save()

		return true
	}
	catch ({ message }) {
		console.log(message)
		return false
	}
}

async function deleteLab(lab) {
	Labs.init(connection)

	try {
		await lab.destroy()

		return true
	}
	catch ({ message }) {
		console.log(message)
		return false
	}
}


module.exports = { createLab, getLabById, getAllLabs, searchLab, updateLab, deleteLab }
