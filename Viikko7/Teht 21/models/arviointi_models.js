const db = require('../database');

const arviointi = {
  getAll: function(callback) {
    return db.query('select * from arviointi', callback);
  },
  getById: function(id, callback) {
    return db.query('select * from arviointi where idArviointi=?', [id], callback);
  },
  add: function(arviointi, callback) {
    return db.query(
      'insert into arviointi (Etunimi, Sukunimi, Osoite, Luokkatunnus) values(?,?,?,?)',
      [arviointi.Paivamaara, arviointi.Arvosana, arviointi.idOpiskelija, arviointi.idOpintojakso],
      callback
    );
  },
  delete: function(id, callback) {
    return db.query('delete from arviointi where idArviointi=?', [id], callback);
  },
  update: function(id, arviointi, callback) {
    return db.query(
      'update arviointi set Paivamaara=?,Arvosana=?,idOpiskelija=?, idOpintojakso=? where idOpiskelija=?',
      [arviointi.Paivamaara, arviointi.Arvosana, arviointi.idOpiskelija, arviointi.idOpintojakso, id],
      callback
    );
  }
};
module.exports = arviointi;
