'use strict';

module.exports = {
	up: async (queryInterface, Sequelize) => {
		await queryInterface.bulkInsert('labs', [
			{
				id: 1,
				name: "Colégio Americano de Patologistas (CAP)",
				address: "São Paulo - SP",
				status: true
			},
			{
				id: 2,
				name: "Dasa",
				address: "SP",
				status: false
			},
			{
				id: 3,
				name: "Laboratório Santa Luzia",
				address: "Florianópolis - SC",
				status: true
			},
			{
				id: 4,
				name: "Centro de Diagnóstico Anomato-Patológico",
				address: "Joinville - SC",
				status: true
			},
			{
				id: 5,
				name: "Laboratórios Clínicos Associados",
				address: "SP, MT, MS, BA",
				status: true
			},
			{
				id: 6,
				name: "Laboratório Fleury",
				address: "São Paulo - SP",
				status: true
			},
			{
				id: 7,
				name: "Hospital Israelita Albert Einstein",
				address: "Ibirapuera - SP",
				status: true
			}
		], {})
	},

	down: async (queryInterface, Sequelize) => {
		await queryInterface.bulkDelete('labs', null, {})
	}
}
