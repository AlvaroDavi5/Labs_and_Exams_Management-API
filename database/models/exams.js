const { Model, DataTypes } = require('sequelize')


class Exams extends Model {
	static init(connection) {
		super.init({
			name: DataTypes.STRING(150),
			type: DataTypes.STRING(50),
			status: DataTypes.BOOLEAN
		},
		{ sequelize: connection }
		)
	}
}


module.exports = Exams
