module.exports = (sequelize, DataTypes) => {
  const Album = sequelize.define('Album', {
    albumTitle: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    artist: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    releaseDate: {
      type: DataTypes.DATE,
      allowNull: false,
    },
    price: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    albumPhoto: {
      type: DataTypes.STRING,
      allowNull: true,
    }
  }, {
    charset: 'utf8',
    collate: 'utf8_general_ci',
  });
  Album.associate = (db) => {
    db.Album.hasMany(db.Song)
  };
  return Album;
}