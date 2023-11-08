module.exports = (sequelize, DataType) => {
    let model = sequelize.define('Car', {
      name: {
        type: DataType.TEXT
      },
      model: {
        type: DataType.TEXT
      },
      year: {
        type: DataType.INTEGER
      },
      capacity: {
        type: DataType.INTEGER
      },
      tax: {
        type: DataType.INTEGER
      }, liked: {
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
  