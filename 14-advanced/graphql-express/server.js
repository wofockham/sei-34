const express = require('express');
const expressGraphql = require('express-graphql');
const { buildSchema } = require('graphql');

const sounds = require('./martin.json');

// Schema
const schema = buildSchema(`
  type Query {
    sound(id: Int): SoundEffect,
    sounds(description: String): [SoundEffect]
  },
  type SoundEffect {
    sound: String,
    description: String,
    source: String,
    title: String
  }
`);

const getSound = ({ id }) => sounds[ id ];
const getSounds = ({ description }) => {
  if (description) {
    description = description.toLowerCase();
    return sounds.filter((s) => s.description.toLowerCase().includes(description));
  } else {
    return sounds;
  }
};

// Root resolver
const root = {
  sound: getSound,
  sounds: getSounds
};

const server = express();
server.use('/graphql', expressGraphql({
  schema, // schema: schema
  rootValue: root,
  graphiql: true
}));

server.listen(4000, () => console.log('http://localhost:4000/graphql'));
