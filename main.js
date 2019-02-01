//Telegraf
const Telegraf = require('telegraf');
const Markup = require('telegraf/markup');
const session = require('telegraf/session');

//INCLUDES
const config = require('./config');
const strings = require('./strings');
const options = require('./options');

//BOT
const bot = new Telegraf(config.telegram.botToken);
//bot.use(Telegraf.log())

//Mongodb
const MongoClient = require('mongodb').MongoClient;
const client = new MongoClient(config.mongodb.db_url, {useNewUrlParser: true});
let feedbacks;
let flag;

client.connect(function (err) {
    console.log("Connected successfully to server");

    const db = client.db(config.mongodb.db_name);
    feedbacks = db.collection("feedbacks");

});

//MAIN MENU
bot.start((ctx) => ctx.reply(strings.HI_MSG, Markup
    .keyboard([[options.OPTION1, options.OPTION2, options.OPTION3], [options.OPTION4, options.OPTION5, options.OPTION6], [options.OPTION7, options.OPTION8, options.OPTION9], [options.OPTION10, options.OPTION11, options.OPTION12, options.OPTION13]])
    .resize()
    .extra()));

//ACC MENU
bot.hears(options.OPTION1, (ctx) => ctx.reply(strings.CONCERN, Markup
    .keyboard([[options.ACC_OPT1, options.ACC_OPT2], [options.ACC_OPT3, options.ACC_OPT4], [options.ACC_OPT5, options.ACC_OPT6], [options.ACC_OPT7, options.ACC_OPT8],[options.RETURN_TO_MAIN]])
    .resize()
    .extra()));

//ACC ANSWERS
bot.hears(options.ACC_OPT1, (ctx) => ctx.reply(strings.FIRST_ACC + strings.SATISFACTION, Markup
    .keyboard([['Yes', 'No']])
    .resize()
    .extra()));
bot.hears(options.ACC_OPT2, (ctx) => ctx.reply(strings.ANOTHER_ACC + strings.SATISFACTION, Markup
    .keyboard([['Yes', 'No']])
    .resize()
    .extra()));
bot.hears(options.ACC_OPT4, (ctx) => ctx.reply(strings.ALT_METHOD + strings.SATISFACTION, Markup
    .keyboard([['Yes', 'No']])
    .resize()
    .extra()));
bot.hears(options.ACC_OPT5, (ctx) => ctx.reply(strings.HOW_MUCH_EOS + strings.SATISFACTION, Markup
    .keyboard([['Yes', 'No']])
    .resize()
    .extra()));
bot.hears(options.ACC_OPT6, (ctx) => ctx.reply(strings.CPU + strings.SATISFACTION, Markup
    .keyboard([['Yes', 'No']])
    .resize()
    .extra()));
bot.hears(options.ACC_OPT7, (ctx) => ctx.reply(strings.NET + strings.SATISFACTION, Markup
    .keyboard([['Yes', 'No']])
    .resize()
    .extra()));
bot.hears(options.ACC_OPT8, (ctx) => ctx.reply(strings.NET + strings.SATISFACTION, Markup
    .keyboard([['Yes', 'No']])
    .resize()
    .extra()));

//ACC ERR MENU
bot.hears(options.ACC_OPT3, (ctx)=> ctx.reply(strings.ERROR_NEW_ACC, Markup
    .keyboard([[options.NEW_ACC_ERR_OP1, options.NEW_ACC_ERR_OP2],[options.RETURN_TO_ACC]])
    .resize()
    .extra()));

//ACC ERR ANSWERS
bot.hears(options.NEW_ACC_ERR_OP1, (ctx) => ctx.reply(strings.DURING_AVAILABILITY + strings.SATISFACTION, Markup
    .keyboard([['Yes', 'No']])
    .resize()
    .extra()));
bot.hears(options.NEW_ACC_ERR_OP2, (ctx) => ctx.reply(strings.EOSIO_ASSERT + strings.SATISFACTION, Markup
    .keyboard([['Yes', 'No']])
    .resize()
    .extra()));

//SECURITY MENU
bot.hears(options.OPTION2, (ctx) => ctx.reply(strings.CONCERN, Markup
    .keyboard([[options.SECURITY_OPT1, options.SECURITY_OPT2], [options.SECURITY_OPT3, options.SECURITY_OPT4],[options.RETURN_TO_MAIN]])
    .resize()
    .extra()));

//SECURITY ANSWERS
bot.hears(options.SECURITY_OPT1, (ctx) => ctx.reply(strings.SIMPLEOS_SAFE + strings.SATISFACTION, Markup
    .keyboard([['Yes', 'No']])
    .resize()
    .extra()));
bot.hears(options.SECURITY_OPT2, (ctx) => ctx.reply(strings.ENDORSED + strings.SATISFACTION, Markup
    .keyboard([['Yes', 'No']])
    .resize()
    .extra()));
bot.hears(options.SECURITY_OPT3, (ctx) => ctx.reply(strings.ENDORSED + strings.SATISFACTION, Markup
    .keyboard([['Yes', 'No']])
    .resize()
    .extra()));
bot.hears(options.SECURITY_OPT4, (ctx) => ctx.reply(strings.EOS_LINK + strings.SATISFACTION, Markup
    .keyboard([['Yes', 'No']])
    .resize()
    .extra()));

//STAKE MENU
bot.hears(options.OPTION3, (ctx) => ctx.reply(strings.CONCERN, Markup
    .keyboard([[options.STAKE_OPT1, options.STAKE_OPT2], [options.STAKE_OPT3, options.SECURITY_OPT4],[options.STAKE_OPT5, options.STAKE_OPT6],[options.STAKE_OPT7, options.RETURN_TO_MAIN]])
    .resize()
    .extra()));

//STAKE ANSWERS
bot.hears(options.STAKE_OPT1, (ctx) => ctx.reply(strings.STUCK + strings.SATISFACTION, Markup
    .keyboard([['Yes', 'No']])
    .resize()
    .extra()));
bot.hears(options.STAKE_OPT2, (ctx) => ctx.reply(strings.HOW_STAKE + strings.SATISFACTION, Markup
    .keyboard([['Yes', 'No']])
    .resize()
    .extra()));
bot.hears(options.STAKE_OPT3, (ctx) => ctx.reply(strings.WHY_STAKE + strings.SATISFACTION, Markup
    .keyboard([['Yes', 'No']])
    .resize()
    .extra()));
bot.hears(options.STAKE_OPT4, (ctx) => ctx.reply(strings.CPU_NET_RATE + strings.SATISFACTION, Markup
    .keyboard([['Yes', 'No']])
    .resize()
    .extra()));
bot.hears(options.STAKE_OPT5, (ctx) => ctx.reply(strings.WHY_UNSTAKE + strings.SATISFACTION, Markup
    .keyboard([['Yes', 'No']])
    .resize()
    .extra()));
bot.hears(options.STAKE_OPT6, (ctx) => ctx.reply(strings.UNSTAKE_100 + strings.SATISFACTION, Markup
    .keyboard([['Yes', 'No']])
    .resize()
    .extra()));
bot.hears(options.STAKE_OPT7, (ctx) => ctx.reply(strings.LEAVE_1_EOS + strings.SATISFACTION, Markup
    .keyboard([['Yes', 'No']])
    .resize()
    .extra()));

//TRANSFERS MENU
bot.hears(options.OPTION4, (ctx) => ctx.reply(strings.CONCERN, Markup
    .keyboard([[options.TRANS_OPT1, options.TRANS_OPT2], [options.TRANS_OPT3, options.TRANS_OPT4],[options.RETURN_TO_MAIN]])
    .resize()
    .extra()));

//TRANSFERS ANSWERS
bot.hears(options.TRANS_OPT1, (ctx) => ctx.reply(strings.EOS_TO_EXCHANGE + strings.SATISFACTION, Markup
    .keyboard([['Yes', 'No']])
    .resize()
    .extra()));
bot.hears(options.TRANS_OPT2, (ctx) => ctx.reply(strings.EXCHANGE_TO_EOS + strings.SATISFACTION, Markup
    .keyboard([['Yes', 'No']])
    .resize()
    .extra()));
bot.hears(options.TRANS_OPT3, (ctx) => ctx.reply(strings.ADDRESS + strings.SATISFACTION, Markup
    .keyboard([['Yes', 'No']])
    .resize()
    .extra()));
bot.hears(options.TRANS_OPT4, (ctx) => ctx.reply(strings.AIRDROP + strings.SATISFACTION, Markup
    .keyboard([['Yes', 'No']])
    .resize()
    .extra()));

//PIN AND PASSWORD MENU
bot.hears(options.OPTION5, (ctx) => ctx.reply(strings.CONCERN, Markup
    .keyboard([[options.PIN_PSWD_OP1, options.PIN_PSWD_OP2], [options.PIN_PSWD_OP3, options.PIN_PSWD_OP4],[options.PIN_PSWD_OP5, options.RETURN_TO_MAIN]])
    .resize()
    .extra()));

//PIN AND PASSWORD ANSWERS
bot.hears(options.PIN_PSWD_OP1, (ctx) => ctx.reply(strings.WHAT_PIN + strings.SATISFACTION, Markup
    .keyboard([['Yes', 'No']])
    .resize()
    .extra()));
bot.hears(options.PIN_PSWD_OP2, (ctx) => ctx.reply(strings.FORGOT_PIN + strings.SATISFACTION, Markup
    .keyboard([['Yes', 'No']])
    .resize()
    .extra()));
bot.hears(options.PIN_PSWD_OP3, (ctx) => ctx.reply(strings.SET_PIN + strings.SATISFACTION, Markup
    .keyboard([['Yes', 'No']])
    .resize()
    .extra()));
bot.hears(options.PIN_PSWD_OP4, (ctx) => ctx.reply(strings.WHAT_PASSWORD + strings.SATISFACTION, Markup
    .keyboard([['Yes', 'No']])
    .resize()
    .extra()));
bot.hears(options.PIN_PSWD_OP5, (ctx) => ctx.reply(strings.FORGOT_PASSWORD + strings.SATISFACTION, Markup
    .keyboard([['Yes', 'No']])
    .resize()
    .extra()));

//KEYS MENU
bot.hears(options.OPTION6, (ctx) => ctx.reply(strings.CONCERN, Markup
    .keyboard([[options.KEYS_OPT1, options.KEYS_OPT2], [options.KEYS_OPT3, options.KEYS_OPT4],[options.RETURN_TO_MAIN]])
    .resize()
    .extra()));

//KEYS ANSWERS
bot.hears(options.KEYS_OPT1, (ctx) => ctx.reply(strings.OWNER_PRIVATE + strings.SATISFACTION, Markup
    .keyboard([['Yes', 'No']])
    .resize()
    .extra()));
bot.hears(options.KEYS_OPT2, (ctx) => ctx.reply(strings.ANOTHER_KEY + strings.SATISFACTION, Markup
    .keyboard([['Yes', 'No']])
    .resize()
    .extra()));
bot.hears(options.KEYS_OPT3, (ctx) => ctx.reply(strings.CHANGE_NAME + strings.SATISFACTION, Markup
    .keyboard([['Yes', 'No']])
    .resize()
    .extra()));
bot.hears(options.KEYS_OPT4, (ctx) => ctx.reply(strings.MORE_WALLETS + strings.SATISFACTION, Markup
    .keyboard([['Yes', 'No']])
    .resize()
    .extra()));

//TROUBLESHOOTING MENU
bot.hears(options.OPTION7, (ctx) => ctx.reply(strings.CONCERN, Markup
    .keyboard([[options.TROUBLE_OPT1, options.TROUBLE_OPT2], [options.TROUBLE_OPT3, options.RETURN_TO_MAIN]])
    .resize()
    .extra()));

//TROUBLESHOOTING ANSWERS
bot.hears(options.TROUBLE_OPT1, (ctx) => ctx.reply(strings.SPINNING + strings.SATISFACTION, Markup
    .keyboard([['Yes', 'No']])
    .resize()
    .extra()));
bot.hears(options.TROUBLE_OPT2, (ctx) => ctx.reply(strings.EXCEED + strings.SATISFACTION, Markup
    .keyboard([['Yes', 'No']])
    .resize()
    .extra()));
bot.hears(options.TROUBLE_OPT3, (ctx) => ctx.reply(strings.NOTHING + strings.SATISFACTION, Markup
    .keyboard([['Yes', 'No']])
    .resize()
    .extra()));

//REFERENDUM MENU
bot.hears(options.OPTION8, (ctx) => ctx.reply(strings.CONCERN, Markup
    .keyboard([[options.REF_OPT1, options.REF_OPT2], [options.REF_OPT3, options.RETURN_TO_MAIN]])
    .resize()
    .extra()));

//REFERENDUM ANSWERS
bot.hears(options.REF_OPT1, (ctx) => ctx.reply(strings.VOTING + strings.SATISFACTION, Markup
    .keyboard([['Yes', 'No']])
    .resize()
    .extra()));
bot.hears(options.REF_OPT2, (ctx) => ctx.reply(strings.APPROVED + strings.SATISFACTION, Markup
    .keyboard([['Yes', 'No']])
    .resize()
    .extra()));
bot.hears(options.REF_OPT3, (ctx) => ctx.reply(strings.CREATE + strings.SATISFACTION, Markup
    .keyboard([['Yes', 'No']])
    .resize()
    .extra()));

//ROADMAP MENU
bot.hears(options.OPTION9, (ctx) => ctx.reply(strings.CONCERN, Markup
    .keyboard([[options.ROADMAP_OPT1, options.ROADMAP_OPT2], [options.RETURN_TO_MAIN]])
    .resize()
    .extra()));

//ROADMAP ANSWERS
bot.hears(options.ROADMAP_OPT1, (ctx) => ctx.reply(strings.TWO_FA + strings.SATISFACTION, Markup
    .keyboard([['Yes', 'No']])
    .resize()
    .extra()));
bot.hears(options.ROADMAP_OPT2, (ctx) => ctx.reply(strings.ROADMAP + strings.SATISFACTION, Markup
    .keyboard([['Yes', 'No']])
    .resize()
    .extra()));

//AIRDROPS MENU
bot.hears(options.OPTION10, (ctx) => ctx.reply(strings.CONCERN, Markup
    .keyboard([[options.AIRDROP_OP1, options.AIRDROP_OP2],[options.AIRDROP_OP3, options.AIRDROP_OP4], [options.RETURN_TO_MAIN]])
    .resize()
    .extra()));

//AIRDROPS ANSWERS
bot.hears(options.AIRDROP_OP1, (ctx) => ctx.reply(strings.BALANCE + strings.SATISFACTION, Markup
    .keyboard([['Yes', 'No']])
    .resize()
    .extra()));
bot.hears(options.AIRDROP_OP2, (ctx) => ctx.reply(strings.NO_AIRDROPS + strings.SATISFACTION, Markup
    .keyboard([['Yes', 'No']])
    .resize()
    .extra()));
bot.hears(options.AIRDROP_OP3, (ctx) => ctx.reply(strings.TOKEN_VALUE + strings.SATISFACTION, Markup
    .keyboard([['Yes', 'No']])
    .resize()
    .extra()));
bot.hears(options.AIRDROP_OP4, (ctx) => ctx.reply(strings.TRANSFER + strings.SATISFACTION, Markup
    .keyboard([['Yes', 'No']])
    .resize()
    .extra()));

//UPDATES MENU
bot.hears(options.OPTION11, (ctx) => ctx.reply(strings.CONCERN, Markup
    .keyboard([[options.UPDATE_OP1, options.UPDATE_OP2],[options.UPDATE_OP3, options.RETURN_TO_MAIN]])
    .resize()
    .extra()));

//UPDATES ANSWERS
bot.hears(options.UPDATE_OP1, (ctx) => ctx.reply(strings.NEW_VERSION + strings.SATISFACTION, Markup
    .keyboard([['Yes', 'No']])
    .resize()
    .extra()));
bot.hears(options.UPDATE_OP2, (ctx) => ctx.reply(strings.UPDATE_BUTTON + strings.SATISFACTION, Markup
    .keyboard([['Yes', 'No']])
    .resize()
    .extra()));
bot.hears(options.UPDATE_OP3, (ctx) => ctx.reply(strings.HOW_UPDATE + strings.SATISFACTION, Markup
    .keyboard([['Yes', 'No']])
    .resize()
    .extra()));

//WHO WE ARE MENU
bot.hears(options.OPTION12, (ctx) => ctx.reply(strings.CONCERN, Markup
    .keyboard([[options.WWA_OPT1, options.WWA_OPT2],[options.RETURN_TO_MAIN]])
    .resize()
    .extra()));

//WHO WE ARE ANSWERS
bot.hears(options.WWA_OPT1, (ctx) => ctx.reply(strings.WHO + strings.SATISFACTION, Markup
    .keyboard([['Yes', 'No']])
    .resize()
    .extra()));
bot.hears(options.WWA_OPT2, (ctx) => ctx.reply(strings.REASONS + strings.SATISFACTION, Markup
    .keyboard([['Yes', 'No']])
    .resize()
    .extra()));

//SISTER CHAIN MENU
bot.hears(options.OPTION13, (ctx) => ctx.reply(strings.CONCERN, Markup
    .keyboard([[options.SIS_OPT1, options.SIS_OPT2], [options.SIS_OPT3, options.SIS_OPT4], [options.RETURN_TO_MAIN]])
    .resize()
    .extra()));

//SISTER CHAIN ANSWERS
bot.hears(options.SIS_OPT1, (ctx) => ctx.reply(strings.WORBLI + strings.SATISFACTION, Markup
    .keyboard([['Yes', 'No']])
    .resize()
    .extra()));
bot.hears(options.SIS_OPT2, (ctx) => ctx.reply(strings.BOS + strings.SATISFACTION, Markup
    .keyboard([['Yes', 'No']])
    .resize()
    .extra()));
bot.hears(options.SIS_OPT3, (ctx) => ctx.reply(strings.JUNGLE + strings.SATISFACTION, Markup
    .keyboard([['Yes', 'No']])
    .resize()
    .extra()));
bot.hears(options.SIS_OPT4, (ctx) => ctx.reply(strings.TELOS + strings.SATISFACTION, Markup
    .keyboard([['Yes', 'No']])
    .resize()
    .extra()));

//RETURN BUTTONS
bot.hears(options.RETURN_TO_MAIN, (ctx) => ctx.reply(strings.HI_MSG, Markup
    .keyboard([[options.OPTION1, options.OPTION2, options.OPTION3], [options.OPTION4, options.OPTION5, options.OPTION6], [options.OPTION7, options.OPTION8, options.OPTION9], [options.OPTION10, options.OPTION11, options.OPTION12, options.OPTION13]])
    .resize()
    .extra()));
bot.hears(options.RETURN_TO_ACC, (ctx) => ctx.reply(strings.CONCERN, Markup
    .keyboard([[options.ACC_OPT1, options.ACC_OPT2], [options.ACC_OPT3, options.ACC_OPT4], [options.ACC_OPT5, options.ACC_OPT6], [options.ACC_OPT7, options.ACC_OPT8],[options.RETURN_TO_MAIN]])
    .resize()
    .extra()));

//FEEDBACK
bot.hears("Yes", (ctx) => {
    var date = new Date(Date.now()).toLocaleString();
    feedbacks.insertOne({name: ctx.from.username, userid: ctx.from.id, date: date, rate: 1});
    return ctx.reply(strings.YES + strings.START, Markup.removeKeyboard().extra());
})

bot.hears("No", (ctx) => {
    flag = false;
    let date = new Date(Date.now()).toLocaleString();
    feedbacks.insertOne({name: ctx.from.username, userid: ctx.from.id, date: date, rate: 0});
    ctx.reply(strings.ASK, Markup.removeKeyboard().extra());
    bot.on('text', (ctx) => {
      if(flag)
      {
        return
      } 
      else { 
        let question = "Username: " + ctx.form.username +  "\nUserId: " + ctx.from.id + "\nQuestion: " + ctx.message.text;
        bot.telegram.sendMessage(config.support.chatId, question);
        flag = true;
        return ctx.reply(strings.SUPPORT + strings.START);
      }
    });
})

//REPLY COMMAND
bot.command("reply", (ctx) => {
  let split = ctx.message.text.split(" ");
  if(isNaN(split[1]) || split.length < 3)
  {
    ctx.reply("Usage: /reply {userId} message");
  }
  else{
    let reply = ctx.message.text.substr(6 + split[1].length + 2);
    return bot.telegram.sendMessage(split[1], "Support Team: " + reply + strings.SATISFACTION, Markup
    .keyboard([['Yes', 'No']])
    .resize()
    .extra());
  }
})

bot.startPolling();