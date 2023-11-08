module.exports = (sequelize, DataType) => {
    let model = sequelize.define('Person', {
      name: {
        type: DataType.TEXT
      },
      cnp: {
        type: DataType.TEXT
      },
      age: {
        type: DataType.INTEGER
      },
      cars: {
        type: DataType.INTEGER
      },
      liked: {
        type: DataType.BOOLEAN
      }
    }, {
      timestamps: true
   
    });
    /*
      Aceasta linie este comentata pentru a demonstra legatura dintre tabelul Information si tabelul Post prin id
    */
    // model.belongsTo(sequelize.models.Post, {foreignKey: 'id_post', onDelete: 'set null'});
    return model;
  };
  