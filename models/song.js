module.exports = (sequelize, DataTypes) => {
  const Song = sequelize.define('Song', {
    musicTitle: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    genre: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    src: {
      type: DataTypes.STRING,
      allowNull: false,
    }
  }, {
    charset: 'utf8',
    collate: 'utf8_general_ci',
  });
  Song.associate = (db) => {
    db.Song.belongsTo(db.Album);
  };
  return Song;
}