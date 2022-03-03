import { Options, Dialect } from 'sequelize/types'


export interface DatabaseConfig {
	database: string | undefined,
	username: string | undefined,
	password: string | undefined,
	host: string | undefined,
	charset?: string | undefined,
	dialect: Dialect | undefined,
	dialectOptions?: {
		ssl: {
			rejectUnauthorized: boolean
		}
	},
	port: number | undefined,
	define?: {
		underscored: boolean,
		timestamps: boolean,
		freezeTableName: boolean
	},
	options?: Options | undefined
}
