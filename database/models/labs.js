const { Model, DataTypes } = require('sequelize')


class Labs extends Model {
	static init(connection) {
		super.init(
			{
				name: DataTypes.STRING(150),
				address: DataTypes.STRING(255),
				status: DataTypes.BOOLEAN
			},
			{
				sequelize: connection
			}
		)
	}
}


module.exports = Labs
