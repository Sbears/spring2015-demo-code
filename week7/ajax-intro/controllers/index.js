// Helper for an in-memory counter that will continue
// to increment as requests come in.
var counter = 0;

var indexController = {
	index: function(req, res) {
		res.render('index');
	},

  // Incoming get requests for the serverTest route
  // that will send back a message and increment our counter
  serverTest: function(req, res){
    res.send('Hello from server! You are number ' + counter);
    counter++;
  },

  // Handle form submissions by just mirroring the data
  // back to the client with an additional message from
  // the server.
  clientFormSubmit: function(req, res){
    var dataFromClient = req.body;

    // this adds an arbitrary property to the object before
    // we send it back.
    dataFromClient.serverInjected = 'Server says yup, is good!';
    
    res.send(dataFromClient);
  }
};

module.exports = indexController;
