// Set this assignment to true if you do want to use it.
module.exports.ACTIVATE_BOT = true;

module.exports.botScripts = [
  {
    label: 'Say Hello to Babushka!',
    prompt: "Hello, Babushka",
    handler: function () {
      return 'Privyet! What Babushka can do for you?';
    },
    isReply: true,
    isCaseSensitive: false,
    isListening: true,
  },

  {
    label: 'censorship',
    prompt: "#{name1}",
    handler: function (HRparams) {
      if (HRparams.name1 === "Fuck" || "bitch"); {
        return  "That's no way of approaching an old Babushka, try again."
      }
    },
    isReply: true,
    isCaseSensitive: false,
    isListening: true,
   }, 

   {
    label: 'Subject',
    prompt: "Babushka, I need help with #{name1}",
    handler: function (HRparams) {
      return "You might not deserve some" + HRparams.name1 + "but Babushka will help you anyway."
    },
    isReply: true,
    isCaseSensitive: false,
    isListening: true,
   }, 

   {
    label: 'Reibursement',
    prompt: 'Babushka, please expense the amount of $#{amount1 as number} to #{name1} ',
    handler: function (params) {
      if (params.amount1 > 75) {
        return "Please, send a PDF of the receipt to hr@keepingcool.com"
      }else if (params.amount1 < 75)
      return "Thank you" + params.name1 + "," + " " + "Babushka will take care of that for you."

    },
    isReply: true,
    isCaseSensitive: false,
    isListening: true,
  },

  {
    label: 'Email addresses',
    prompt: '#{name1} ',
    handler: function (params) {
      if (params.name1 === "Ken" || "Connie") {
        return "Before botheting the CEOs, consider bothering someone else";
        } else{
    
          switch (params) {
            case mike:
              return  'mike@mike.com';
            case alex:
              return  "alex@alex.com";
            case dave:
              return  "dave@dave.com";
            case mario:
              return  "mario@mario.com";
            case slava:
              return  "slava@slava.com";
            case dasha:
              return  "dasha@dasha.com";
            case pavel:
              return  "pavel@pavel.com";
              case alexis:
                return  "alexis@alexis.com";
            case phil:
              return  "phil@phil.com";
            case nick:
              return  "nick@nick.com";
          }
        }
    },
    isReply: true,
    isCaseSensitive: false,
    isListening: true,
  },
  {
    label: 'Not feeling well',
    prompt: "From zero to 10, please tell babushka how you're feeling, #{sicklevel as number}",
    handler: function (params) {
      //var sicknesslevel = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
      if (params.sicklevel > 5) {
        return "Go home! You still have 4 sick days available to you."
      }else if (params.sicklevel < 5)
      return "Babushka has some meds here at the office, please come see Julie at the lobby."
      // The goal here is to also add a way for the bot to check how many sick days the employee still had
      // need to connect with BambooHR-API

    },
    isReply: true,
    isCaseSensitive: false,
    isListening: true,
  },

  {
    label: "Birthday",
    prompt: "С днём рождения!!!! Babushka got you some gifts, tell her which one you'd prefer to receive: #{name1}, #{name2}, #{name3} ",
    handler: function (params) {
      if (params.name1) {
        return "Amazon gift card it is" 
      }else if (params.name2) {
        return "Cash it is"
      }else {
        return "You're boring even for a Babushka"
       }

      },
    isReply: true,
    isCaseSensitive: false,
    isListening: true,
  },
];
