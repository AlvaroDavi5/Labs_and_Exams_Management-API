import connection from "./connection"


/**
  * ?    Relations
  * @belongsTo - One-to-One, source -> target
  * @hasOne - One-to-One, target -> source
  * @hasMany - One-to-Many, target -> source
  * @belongsToMany - Many-to-Many, source -> target
**/
connection.sync({ force: true }).then(
  () => {
    console.log("Database synced") // drop all tables and recreate them
  }
)


export default connection
