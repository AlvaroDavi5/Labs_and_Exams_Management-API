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
				sequelize: connection,
				tableName: 'labs',
				modelName: 'Labs'
			}
		)
	}

	static associate(models) {

		this.belongsTo(models.ExamLab,
			{
				constraint: true,
				foreignKey: 'lab_id',
				targetKey: 'id',
				as: 'lab'
			}
		)
	}
}


module.exports = Labs
