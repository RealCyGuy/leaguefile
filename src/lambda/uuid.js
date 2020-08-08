const uuid = require("uuid");

exports.handler = function(event, context, callback) {
  callback(null, {
    statusCode: 200,
    body: JSON.stringify({ uuid1: uuid.v1(), uuid4: uuid.v4() }),
  });
};
