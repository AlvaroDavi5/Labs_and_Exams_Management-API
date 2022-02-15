'use strict';

module.exports = {
	up: async (queryInterface, Sequelize) => {
		await queryInterface.bulkInsert('exams', [
			{
				id: 1,
				name: "exame de urina",
				type: "URO",
				status: true
			},
			{
				id: 2,
				name: "exame de fezes",
				type: "PARA",
				status: true
			},
			{
				id: 3,
				name: "exame de sangue",
				type: "HEM",
				status: true
			},
			{
				id: 4,
				name: "exame patológico",
				type: "PAT",
				status: true
			},
			{
				id: 5,
				name: "exame citopatológico",
				type: "CITO_PAT",
				status: true
			},
			{
				id: 6,
				name: "exame imunológico",
				type: "IMU",
				status: true
			},
			{
				id: 7,
				name: "exame de tireóide",
				type: "TIRE",
				status: false
			},
			{
				id: 8,
				name: "exames de raios-x",
				type: "RX",
				status: true
			},
			{
				id: 9,
				name: "exames do sistema nervoso periférico",
				type: "NERV",
				status: true
			},
			{
				id: 10,
				name: "endoscopia",
				type: "ENDO",
				status: true
			},
			{
				id: 11,
				name: "biópsia",
				type: "BIOP",
				status: true
			}
		], {})
	},

	down: async (queryInterface, Sequelize) => {
		await queryInterface.bulkDelete('exams', null, {})
	}
}
