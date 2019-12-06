const vocabBuilder = require('../controllers/vocabController');

module.exports = app => {
  // GET /words
  // POST /words
  app
    .route('/words')
    .get(vocabBuilder.listAllWords)
    .post(vocabBuilder.createAWord);

  // GET /words/:wordId
  // PUT /words/:wordId
  // DELETE /words/:wordId
  app
    .route('/words/:wordId')
    .get(vocabBuilder.readAWord)
    .put(vocabBuilder.updateAWord)
    .delete(vocabBuilder.deleteAWord);
};
