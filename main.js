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
bot.use(Telegraf.log())
bot.use(session());

//Mongodb
const MongoClient = require('mongodb').MongoClient;
const client = new MongoClient(config.mongodb.db_url, {useNewUrlParser: true});
let feedbacks;
let user;
let flag;

client.connect(function (err) {
    console.log("Connected successfully to server");

    const db = client.db(config.mongodb.db_name);
    feedbacks = db.collection("feedbacks");

});

//MAIN MENU
bot.start((ctx) => ctx.reply(strings.HI_MSG, Markup
    .keyboard([[options.OPTION1, options.OPTION2, options.OPTION3], [options.OPTION4, options.OPTION5, options.OPTION6], [options.OPTION7, options.OPTION8, options.OPTION9], [options.OPTION10, options.OPTION11, options.OPTION12], [options.OPTION13, options.OPTION14]])
    .resize()
    .extra()));

//ACC MENU
bot.hears(options.OPTION1, (ctx) => ctx.reply(strings.CONCERN, Markup
    .keyboard([[options.ACC_OPT1, options.ACC_OPT2], [options.ACC_OPT3, options.ACC_OPT4], [options.ACC_OPT5, options.ACC_OPT6], [options.ACC_OPT7, options.ACC_OPT8],[options.RETURN_TO_MAIN]])
    .resize()
    .extra()));

//ACC ANSWERS
bot.hears(options.ACC_OPT1, (ctx) => ctx.reply(strings.FIRST_ACC + options.SATISFACTION, Markup.inlineKeyboard([
      Markup.callbackButton('Yes', 'Yes'),
      Markup.callbackButton('No', 'No')
    ]).extra()));
bot.hears(options.ACC_OPT2, (ctx) => ctx.reply(strings.ANOTHER_ACC + options.SATISFACTION, Markup.inlineKeyboard([
      Markup.callbackButton('Yes', 'Yes'),
      Markup.callbackButton('No', 'No')
    ]).extra()));
bot.hears(options.ACC_OPT4, (ctx) => ctx.reply(strings.ALT_METHOD + options.SATISFACTION, Markup.inlineKeyboard([
      Markup.callbackButton('Yes', 'Yes'),
      Markup.callbackButton('No', 'No')
    ]).extra()));
bot.hears(options.ACC_OPT5, (ctx) => ctx.reply(strings.HOW_MUCH_EOS + options.SATISFACTION, Markup.inlineKeyboard([
      Markup.callbackButton('Yes', 'Yes'),
      Markup.callbackButton('No', 'No')
    ]).extra()));
bot.hears(options.ACC_OPT6, (ctx) => ctx.reply(strings.CPU + options.SATISFACTION, Markup.inlineKeyboard([
      Markup.callbackButton('Yes', 'Yes'),
      Markup.callbackButton('No', 'No')
    ]).extra()));
bot.hears(options.ACC_OPT7, (ctx) => ctx.reply(strings.NET + options.SATISFACTION, Markup.inlineKeyboard([
      Markup.callbackButton('Yes', 'Yes'),
      Markup.callbackButton('No', 'No')
    ]).extra()));
bot.hears(options.ACC_OPT8, (ctx) => ctx.reply(strings.NET + options.SATISFACTION, Markup.inlineKeyboard([
      Markup.callbackButton('Yes', 'Yes'),
      Markup.callbackButton('No', 'No')
    ]).extra()));

//ACC ERR MENU
bot.hears(options.ACC_OPT3, (ctx)=> ctx.reply(strings.ERROR_NEW_ACC, Markup
    .keyboard([[options.NEW_ACC_ERR_OP1, options.NEW_ACC_ERR_OP2],[options.RETURN_TO_ACC]])
    .resize()
    .extra()));

//ACC ERR ANSWERS
bot.hears(options.NEW_ACC_ERR_OP1, (ctx) => ctx.reply(strings.DURING_AVAILABILITY + options.SATISFACTION, Markup.inlineKeyboard([
      Markup.callbackButton('Yes', 'Yes'),
      Markup.callbackButton('No', 'No')
    ]).extra()));
bot.hears(options.NEW_ACC_ERR_OP2, (ctx) => ctx.reply(strings.EOSIO_ASSERT + options.SATISFACTION, Markup.inlineKeyboard([
      Markup.callbackButton('Yes', 'Yes'),
      Markup.callbackButton('No', 'No')
    ]).extra()));

//SECURITY MENU
bot.hears(options.OPTION2, (ctx) => ctx.reply(strings.CONCERN, Markup
    .keyboard([[options.SECURITY_OPT1, options.SECURITY_OPT2], [options.SECURITY_OPT3, options.SECURITY_OPT4],[options.RETURN_TO_MAIN]])
    .resize()
    .extra()));

//SECURITY ANSWERS
bot.hears(options.SECURITY_OPT1, (ctx) => ctx.reply(strings.SIMPLEOS_SAFE + options.SATISFACTION, Markup.inlineKeyboard([
      Markup.callbackButton('Yes', 'Yes'),
      Markup.callbackButton('No', 'No')
    ]).extra()));
bot.hears(options.SECURITY_OPT2, (ctx) => ctx.reply(strings.ENDORSED + options.SATISFACTION, Markup.inlineKeyboard([
      Markup.callbackButton('Yes', 'Yes'),
      Markup.callbackButton('No', 'No')
    ]).extra()));
bot.hears(options.SECURITY_OPT3, (ctx) => ctx.reply(strings.ENDORSED + options.SATISFACTION, Markup.inlineKeyboard([
      Markup.callbackButton('Yes', 'Yes'),
      Markup.callbackButton('No', 'No')
    ]).extra()));
bot.hears(options.SECURITY_OPT4, (ctx) => ctx.reply(strings.EOS_LINK + options.SATISFACTION, Markup.inlineKeyboard([
      Markup.callbackButton('Yes', 'Yes'),
      Markup.callbackButton('No', 'No')
    ]).extra()));

//STAKE MENU
bot.hears(options.OPTION3, (ctx) => ctx.reply(strings.CONCERN, Markup
    .keyboard([[options.STAKE_OPT1, options.STAKE_OPT2], [options.STAKE_OPT3, options.SECURITY_OPT4],[options.STAKE_OPT5, options.STAKE_OPT6],[options.STAKE_OPT7, options.RETURN_TO_MAIN]])
    .resize()
    .extra()));

//STAKE ANSWERS
bot.hears(options.STAKE_OPT1, (ctx) => ctx.reply(strings.STUCK + options.SATISFACTION, Markup.inlineKeyboard([
      Markup.callbackButton('Yes', 'Yes'),
      Markup.callbackButton('No', 'No')
    ]).extra()));
bot.hears(options.STAKE_OPT2, (ctx) => ctx.reply(strings.HOW_STAKE + options.SATISFACTION, Markup.inlineKeyboard([
      Markup.callbackButton('Yes', 'Yes'),
      Markup.callbackButton('No', 'No')
    ]).extra()));
bot.hears(options.STAKE_OPT3, (ctx) => ctx.reply(strings.WHY_STAKE + options.SATISFACTION, Markup.inlineKeyboard([
      Markup.callbackButton('Yes', 'Yes'),
      Markup.callbackButton('No', 'No')
    ]).extra()));
bot.hears(options.STAKE_OPT4, (ctx) => ctx.reply(strings.CPU_NET_RATE + options.SATISFACTION, Markup.inlineKeyboard([
      Markup.callbackButton('Yes', 'Yes'),
      Markup.callbackButton('No', 'No')
    ]).extra()));
bot.hears(options.STAKE_OPT5, (ctx) => ctx.reply(strings.WHY_UNSTAKE + options.SATISFACTION, Markup.inlineKeyboard([
      Markup.callbackButton('Yes', 'Yes'),
      Markup.callbackButton('No', 'No')
    ]).extra()));
bot.hears(options.STAKE_OPT6, (ctx) => ctx.reply(strings.UNSTAKE_100 + options.SATISFACTION, Markup.inlineKeyboard([
      Markup.callbackButton('Yes', 'Yes'),
      Markup.callbackButton('No', 'No')
    ]).extra()));
bot.hears(options.STAKE_OPT7, (ctx) => ctx.reply(strings.LEAVE_1_EOS + options.SATISFACTION, Markup.inlineKeyboard([
      Markup.callbackButton('Yes', 'Yes'),
      Markup.callbackButton('No', 'No')
    ]).extra()));

//TRANSFERS MENU
bot.hears(options.OPTION4, (ctx) => ctx.reply(strings.CONCERN, Markup
    .keyboard([[options.TRANS_OPT1, options.TRANS_OPT2], [options.TRANS_OPT3, options.TRANS_OPT4],[options.RETURN_TO_MAIN]])
    .resize()
    .extra()));

//TRANSFERS ANSWERS
bot.hears(options.TRANS_OPT1, (ctx) => ctx.reply(strings.EOS_TO_EXCHANGE + options.SATISFACTION, Markup.inlineKeyboard([
      Markup.callbackButton('Yes', 'Yes'),
      Markup.callbackButton('No', 'No')
    ]).extra()));
bot.hears(options.TRANS_OPT2, (ctx) => ctx.reply(strings.EXCHANGE_TO_EOS + options.SATISFACTION, Markup.inlineKeyboard([
      Markup.callbackButton('Yes', 'Yes'),
      Markup.callbackButton('No', 'No')
    ]).extra()));
bot.hears(options.TRANS_OPT3, (ctx) => ctx.reply(strings.ADDRESS + options.SATISFACTION, Markup.inlineKeyboard([
      Markup.callbackButton('Yes', 'Yes'),
      Markup.callbackButton('No', 'No')
    ]).extra()));
bot.hears(options.TRANS_OPT4, (ctx) => ctx.reply(strings.AIRDROP + options.SATISFACTION, Markup.inlineKeyboard([
      Markup.callbackButton('Yes', 'Yes'),
      Markup.callbackButton('No', 'No')
    ]).extra()));

//PIN AND PASSWORD MENU
bot.hears(options.OPTION5, (ctx) => ctx.reply(strings.CONCERN, Markup
    .keyboard([[options.PIN_PSWD_OP1, options.PIN_PSWD_OP2], [options.PIN_PSWD_OP3, options.PIN_PSWD_OP4],[options.PIN_PSWD_OP5, options.RETURN_TO_MAIN]])
    .resize()
    .extra()));

//PIN AND PASSWORD ANSWERS
bot.hears(options.PIN_PSWD_OP1, (ctx) => ctx.reply(strings.WHAT_PIN + options.SATISFACTION, Markup.inlineKeyboard([
      Markup.callbackButton('Yes', 'Yes'),
      Markup.callbackButton('No', 'No')
    ]).extra()));
bot.hears(options.PIN_PSWD_OP2, (ctx) => ctx.reply(strings.FORGOT_PIN + options.SATISFACTION, Markup.inlineKeyboard([
      Markup.callbackButton('Yes', 'Yes'),
      Markup.callbackButton('No', 'No')
    ]).extra()));
bot.hears(options.PIN_PSWD_OP3, (ctx) => ctx.reply(strings.SET_PIN + options.SATISFACTION, Markup.inlineKeyboard([
      Markup.callbackButton('Yes', 'Yes'),
      Markup.callbackButton('No', 'No')
    ]).extra()));
bot.hears(options.PIN_PSWD_OP4, (ctx) => ctx.reply(strings.WHAT_PASSWORD + options.SATISFACTION, Markup.inlineKeyboard([
      Markup.callbackButton('Yes', 'Yes'),
      Markup.callbackButton('No', 'No')
    ]).extra()));
bot.hears(options.PIN_PSWD_OP5, (ctx) => ctx.reply(strings.FORGOT_PASSWORD + options.SATISFACTION, Markup.inlineKeyboard([
      Markup.callbackButton('Yes', 'Yes'),
      Markup.callbackButton('No', 'No')
    ]).extra()));

//KEYS MENU
bot.hears(options.OPTION6, (ctx) => ctx.reply(strings.CONCERN, Markup
    .keyboard([[options.KEYS_OPT1, options.KEYS_OPT2], [options.KEYS_OPT3, options.KEYS_OPT4],[options.RETURN_TO_MAIN]])
    .resize()
    .extra()));

//KEYS ANSWERS
bot.hears(options.KEYS_OPT1, (ctx) => ctx.reply(strings.OWNER_PRIVATE + options.SATISFACTION, Markup.inlineKeyboard([
      Markup.callbackButton('Yes', 'Yes'),
      Markup.callbackButton('No', 'No')
    ]).extra()));
bot.hears(options.KEYS_OPT2, (ctx) => ctx.reply(strings.ANOTHER_KEY + options.SATISFACTION, Markup.inlineKeyboard([
      Markup.callbackButton('Yes', 'Yes'),
      Markup.callbackButton('No', 'No')
    ]).extra()));
bot.hears(options.KEYS_OPT3, (ctx) => ctx.reply(strings.CHANGE_NAME + options.SATISFACTION, Markup.inlineKeyboard([
      Markup.callbackButton('Yes', 'Yes'),
      Markup.callbackButton('No', 'No')
    ]).extra()));
bot.hears(options.KEYS_OPT4, (ctx) => ctx.reply(strings.MORE_WALLETS + options.SATISFACTION, Markup.inlineKeyboard([
      Markup.callbackButton('Yes', 'Yes'),
      Markup.callbackButton('No', 'No')
    ]).extra()));

//TROUBLESHOOTING MENU
bot.hears(options.OPTION7, (ctx) => ctx.reply(strings.CONCERN, Markup
    .keyboard([[options.TROUBLE_OPT1, options.TROUBLE_OPT2], [options.TROUBLE_OPT3, options.RETURN_TO_MAIN]])
    .resize()
    .extra()));

//TROUBLESHOOTING ANSWERS
bot.hears(options.TROUBLE_OPT1, (ctx) => ctx.reply(strings.SPINNING + options.SATISFACTION, Markup.inlineKeyboard([
      Markup.callbackButton('Yes', 'Yes'),
      Markup.callbackButton('No', 'No')
    ]).extra()));
bot.hears(options.TROUBLE_OPT2, (ctx) => ctx.reply(strings.EXCEED + options.SATISFACTION, Markup.inlineKeyboard([
      Markup.callbackButton('Yes', 'Yes'),
      Markup.callbackButton('No', 'No')
    ]).extra()));
bot.hears(options.TROUBLE_OPT3, (ctx) => ctx.reply(strings.NOTHING + options.SATISFACTION, Markup.inlineKeyboard([
      Markup.callbackButton('Yes', 'Yes'),
      Markup.callbackButton('No', 'No')
    ]).extra()));

//REFERENDUM MENU
bot.hears(options.OPTION8, (ctx) => ctx.reply(strings.CONCERN, Markup
    .keyboard([[options.REF_OPT1, options.REF_OPT2], [options.REF_OPT3, options.RETURN_TO_MAIN]])
    .resize()
    .extra()));

//REFERENDUM ANSWERS
bot.hears(options.REF_OPT1, (ctx) => ctx.reply(strings.VOTING + options.SATISFACTION, Markup.inlineKeyboard([
      Markup.callbackButton('Yes', 'Yes'),
      Markup.callbackButton('No', 'No')
    ]).extra()));
bot.hears(options.REF_OPT2, (ctx) => ctx.reply(strings.APPROVED + options.SATISFACTION, Markup.inlineKeyboard([
      Markup.callbackButton('Yes', 'Yes'),
      Markup.callbackButton('No', 'No')
    ]).extra()));
bot.hears(options.REF_OPT3, (ctx) => ctx.reply(strings.CREATE + options.SATISFACTION, Markup.inlineKeyboard([
      Markup.callbackButton('Yes', 'Yes'),
      Markup.callbackButton('No', 'No')
    ]).extra()));

//ROADMAP MENU
bot.hears(options.OPTION9, (ctx) => ctx.reply(strings.CONCERN, Markup
    .keyboard([[options.ROADMAP_OPT1, options.ROADMAP_OPT2], [options.RETURN_TO_MAIN]])
    .resize()
    .extra()));

//ROADMAP ANSWERS
bot.hears(options.ROADMAP_OPT1, (ctx) => ctx.reply(strings.TWO_FA + options.SATISFACTION, Markup.inlineKeyboard([
      Markup.callbackButton('Yes', 'Yes'),
      Markup.callbackButton('No', 'No')
    ]).extra()));
bot.hears(options.ROADMAP_OPT2, (ctx) => ctx.reply(strings.ROADMAP + options.SATISFACTION, Markup.inlineKeyboard([
      Markup.callbackButton('Yes', 'Yes'),
      Markup.callbackButton('No', 'No')
    ]).extra()));

//AIRDROPS MENU
bot.hears(options.OPTION10, (ctx) => ctx.reply(strings.CONCERN, Markup
    .keyboard([[options.AIRDROP_OP1, options.AIRDROP_OP2],[options.AIRDROP_OP3, options.AIRDROP_OP4], [options.RETURN_TO_MAIN]])
    .resize()
    .extra()));

//AIRDROPS ANSWERS
bot.hears(options.AIRDROP_OP1, (ctx) => ctx.reply(strings.BALANCE + options.SATISFACTION, Markup.inlineKeyboard([
      Markup.callbackButton('Yes', 'Yes'),
      Markup.callbackButton('No', 'No')
    ]).extra()));
bot.hears(options.AIRDROP_OP2, (ctx) => ctx.reply(strings.NO_AIRDROPS + options.SATISFACTION, Markup.inlineKeyboard([
      Markup.callbackButton('Yes', 'Yes'),
      Markup.callbackButton('No', 'No')
    ]).extra()));
bot.hears(options.AIRDROP_OP3, (ctx) => ctx.reply(strings.TOKEN_VALUE + options.SATISFACTION, Markup.inlineKeyboard([
      Markup.callbackButton('Yes', 'Yes'),
      Markup.callbackButton('No', 'No')
    ]).extra()));
bot.hears(options.AIRDROP_OP4, (ctx) => ctx.reply(strings.TRANSFER + options.SATISFACTION, Markup.inlineKeyboard([
      Markup.callbackButton('Yes', 'Yes'),
      Markup.callbackButton('No', 'No')
    ]).extra()));

//UPDATES MENU
bot.hears(options.OPTION11, (ctx) => ctx.reply(strings.CONCERN, Markup
    .keyboard([[options.UPDATE_OP1, options.UPDATE_OP2],[options.UPDATE_OP3, options.RETURN_TO_MAIN]])
    .resize()
    .extra()));

//UPDATES ANSWERS
bot.hears(options.UPDATE_OP1, (ctx) => ctx.reply(strings.NEW_VERSION + options.SATISFACTION, Markup.inlineKeyboard([
      Markup.callbackButton('Yes', 'Yes'),
      Markup.callbackButton('No', 'No')
    ]).extra()));
bot.hears(options.UPDATE_OP2, (ctx) => ctx.reply(strings.UPDATE_BUTTON + options.SATISFACTION, Markup.inlineKeyboard([
      Markup.callbackButton('Yes', 'Yes'),
      Markup.callbackButton('No', 'No')
    ]).extra()));
bot.hears(options.UPDATE_OP3, (ctx) => ctx.reply(strings.HOW_UPDATE + options.SATISFACTION, Markup.inlineKeyboard([
      Markup.callbackButton('Yes', 'Yes'),
      Markup.callbackButton('No', 'No')
    ]).extra()));

//WHO WE ARE MENU
bot.hears(options.OPTION12, (ctx) => ctx.reply(strings.CONCERN, Markup
    .keyboard([[options.WWA_OPT1, options.WWA_OPT2],[options.RETURN_TO_MAIN]])
    .resize()
    .extra()));

//WHO WE ARE ANSWERS
bot.hears(options.WWA_OPT1, (ctx) => ctx.reply(strings.WHO + options.SATISFACTION, Markup.inlineKeyboard([
      Markup.callbackButton('Yes', 'Yes'),
      Markup.callbackButton('No', 'No')
    ]).extra()));
bot.hears(options.WWA_OPT2, (ctx) => ctx.reply(strings.REASONS + options.SATISFACTION, Markup.inlineKeyboard([
      Markup.callbackButton('Yes', 'Yes'),
      Markup.callbackButton('No', 'No')
    ]).extra()));

//SISTER CHAIN MENU
bot.hears(options.OPTION13, (ctx) => ctx.reply(strings.CONCERN, Markup
    .keyboard([[options.SIS_OPT1, options.SIS_OPT2], [options.SIS_OPT3, options.SIS_OPT4], [options.RETURN_TO_MAIN]])
    .resize()
    .extra()));

//SISTER CHAIN ANSWERS
bot.hears(options.SIS_OPT1, (ctx) => ctx.reply(strings.WORBLI + options.SATISFACTION, Markup.inlineKeyboard([
      Markup.callbackButton('Yes', 'Yes'),
      Markup.callbackButton('No', 'No')
    ]).extra()));
bot.hears(options.SIS_OPT2, (ctx) => ctx.reply(strings.BOS + options.SATISFACTION, Markup.inlineKeyboard([
      Markup.callbackButton('Yes', 'Yes'),
      Markup.callbackButton('No', 'No')
    ]).extra()));
bot.hears(options.SIS_OPT3, (ctx) => ctx.reply(strings.JUNGLE + options.SATISFACTION, Markup.inlineKeyboard([
      Markup.callbackButton('Yes', 'Yes'),
      Markup.callbackButton('No', 'No')
    ]).extra()));
bot.hears(options.SIS_OPT4, (ctx) => ctx.reply(strings.TELOS + options.SATISFACTION, Markup.inlineKeyboard([
      Markup.callbackButton('Yes', 'Yes'),
      Markup.callbackButton('No', 'No')
    ]).extra()));

//RETURN BUTTONS
bot.hears(options.RETURN_TO_MAIN, (ctx) => ctx.reply(strings.HI_MSG, Markup
    .keyboard([[options.OPTION1, options.OPTION2, options.OPTION3], [options.OPTION4, options.OPTION5, options.OPTION6], [options.OPTION7, options.OPTION8, options.OPTION9], [options.OPTION10, options.OPTION11, options.OPTION12], [options.OPTION13, options.OPTION14]])
    .resize()
    .extra()));
bot.hears(options.RETURN_TO_ACC, (ctx) => ctx.reply(strings.CONCERN, Markup
    .keyboard([[options.ACC_OPT1, options.ACC_OPT2], [options.ACC_OPT3, options.ACC_OPT4], [options.ACC_OPT5, options.ACC_OPT6], [options.ACC_OPT7, options.ACC_OPT8],[options.RETURN_TO_MAIN]])
    .resize()
    .extra()));

//FEEDBACK
bot.action("Yes", (ctx) => {
    var date = new Date(Date.now()).toLocaleString();
    feedbacks.insertOne({name: ctx.from.username, userid: ctx.from.id, date: date, rate: 1});
    return ctx.reply(strings.YES);
})

bot.action("No", (ctx) => {
    flag = false;
    var date = new Date(Date.now()).toLocaleString();
    user = ctx.from.id
    feedbacks.insertOne({name: ctx.from.username, userid: user, date: date, rate: 0});
    ctx.reply(strings.ASK);
    bot.on('text', (ctx) => {
      if(flag)
      {
        return
      } 
      else { 
        let question = "UserId: " + ctx.from.id + "\nQuestion: " + ctx.message.text;
        //bot.telegram.forwardMessage(config.support.chatId, user, "userId: " + ctx.message.message_id);
        bot.telegram.sendMessage(config.support.chatId, question);
        flag = true;
        return ctx.reply(strings.SUPPORT);
      }
    });
})

//REPLY COMMAND
bot.command("reply", (ctx) => {
  let split = ctx.message.text.split(" ");
  let reply = ctx.message.text.substr(6 + split[1].length + 2);
  bot.telegram.sendMessage(split[1], "Support Team: " + reply);
})

bot.startPolling();