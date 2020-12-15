// Set this assignment to true if you do want to use it.
module.exports.ACTIVATE_BOT = false;

module.exports.botScripts = [
  // Write an interaction where one user says "I'm tired", the bot says "Wake up!"
  //
  // mychatbot> I'm tired
  // mychatbot responds "Wake up!"
  {
    label: 'Bitch',
    prompt: 'Bitch, I am tired.',
    handler: function () {
      return 'What did you just call me?';
    },
    isReply: false,
    isCaseSensitive: false,
    isListening: true,
  },
  // Write an interaction where one user asks the bot 
  // "What's the area of a circle with radius X?" where X is any number
  // The chatbot will respond to the user with the answer.
  //
  // mychatbot> mychatbot What's the area of a circle with radius 5?
  // mychatbot responds to user "The area is 78.5398...."
    {
    label: 'Area 51',
    prompt: "Peasant, what's the area of a circle with radius #{area51 as number}?",
    handler: function (params) {
      return Math.PI * params.area51 * params.area51
    },
    isListening: true,
  },
  // Write an interaction where one user asks the bot 
  // "Tell me a story with NAME1 and NAME2" where NAME1 and NAME2 is any string
  // The chatbot will respond with the answer.
  // 
  // mychatbot> mychatbot Tell me a story with Jack and Jill
  // mychatbot responds to user "Jack and Jill went up the hill to fetch a pail of water."
  {
    label: 'story time',
    prompt: "Tell me a story with #{name1} and #{name2}",
    handler: function (params) {
      return params.name1 + "played piano better";
    },
    isReply: false,
    isCaseSensitive: false,
    isListening: true,

  },
];
