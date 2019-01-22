const Telegraf = require('telegraf')
const Markup = require('telegraf/markup')
const config = require('./config');
const strings = require('./strings');
const options = require('./options');

const bot = new Telegraf(config.botToken);

//MAIN MENU
bot.start((ctx) => ctx.reply(strings.HI_MSG, Markup
    .keyboard([[options.OPTION1, options.OPTION2, options.OPTION3], [options.OPTION4, options.OPTION5, options.OPTION6], [options.OPTION7, options.OPTION8, options.OPTION9], [options.OPTION10, options.OPTION11, options.OPTION12], [options.OPTION13, options.OPTION14]])
    .resize()
    .extra()))

bot.on('sticker', (ctx) => ctx.reply('👍'))

//ACC MENU
bot.hears(options.OPTION1, (ctx) => ctx.reply(strings.CONCERN, Markup
    .keyboard([[options.ACC_OPT1, options.ACC_OPT2], [options.ACC_OPT3, options.ACC_OPT4], [options.ACC_OPT5, options.ACC_OPT6], [options.ACC_OPT7, options.ACC_OPT8],[options.RETURN_TO_MAIN]])
    .resize()
    .extra()))

//ACC ANSWERS
bot.hears(options.ACC_OPT1, (ctx) => ctx.reply(strings.FIRST_ACC))
bot.hears(options.ACC_OPT2, (ctx) => ctx.reply(strings.ANOTHER_ACC))
bot.hears(options.ACC_OPT4, (ctx) => ctx.reply(strings.ALT_METHOD))
bot.hears(options.ACC_OPT5, (ctx) => ctx.reply(strings.HOW_MUCH_EOS))
bot.hears(options.ACC_OPT6, (ctx) => ctx.reply(strings.CPU))
bot.hears(options.ACC_OPT7, (ctx) => ctx.reply(strings.NET))
bot.hears(options.ACC_OPT8, (ctx) => ctx.reply(strings.RAM))

//ACC ERR MENU
bot.hears(options.ACC_OPT3, (ctx)=> ctx.reply(strings.ERROR_NEW_ACC, Markup
    .keyboard([[options.NEW_ACC_ERR_OP1, options.NEW_ACC_ERR_OP2],[options.RETURN_TO_ACC]])
    .resize()
    .extra()))

//ACC ERR ANSWERS
bot.hears(options.NEW_ACC_ERR_OP1, (ctx) => ctx.reply(strings.DURING_AVAILABILITY))
bot.hears(options.NEW_ACC_ERR_OP2, (ctx) => ctx.reply(strings.EOSIO_ASSERT))

//SECURITY MENU
bot.hears(options.OPTION2, (ctx) => ctx.reply(strings.CONCERN, Markup
    .keyboard([[options.SECURITY_OPT1, options.SECURITY_OPT2], [options.SECURITY_OPT3, options.SECURITY_OPT4],[options.RETURN_TO_MAIN]])
    .resize()
    .extra()))

//SECURITY ANSWERS
bot.hears(options.SECURITY_OPT1, (ctx) => ctx.reply(strings.SIMPLEOS_SAFE))
bot.hears(options.SECURITY_OPT2, (ctx) => ctx.reply(strings.ENDORSED))
bot.hears(options.SECURITY_OPT3, (ctx) => ctx.reply(strings.ENDORSED))
bot.hears(options.SECURITY_OPT4, (ctx) => ctx.reply(strings.EOS_LINK))

//STAKE MENU
bot.hears(options.OPTION3, (ctx) => ctx.reply(strings.CONCERN, Markup
    .keyboard([[options.STAKE_OPT1, options.STAKE_OPT2], [options.STAKE_OPT3, options.SECURITY_OPT4],[options.STAKE_OPT5, options.STAKE_OPT6],[options.STAKE_OPT7, options.RETURN_TO_MAIN]])
    .resize()
    .extra()))

//STAKE ANSWERS
bot.hears(options.STAKE_OPT1, (ctx) => ctx.reply(strings.STUCK))
bot.hears(options.STAKE_OPT2, (ctx) => ctx.reply(strings.HOW_STAKE))
bot.hears(options.STAKE_OPT3, (ctx) => ctx.reply(strings.WHY_STAKE))
bot.hears(options.STAKE_OPT4, (ctx) => ctx.reply(strings.CPU_NET_RATE))
bot.hears(options.STAKE_OPT5, (ctx) => ctx.reply(strings.WHY_UNSTAKE))
bot.hears(options.STAKE_OPT6, (ctx) => ctx.reply(strings.UNSTAKE_100))
bot.hears(options.STAKE_OPT7, (ctx) => ctx.reply(strings.LEAVE_1_EOS))

//TRANSFERS MENU
bot.hears(options.OPTION4, (ctx) => ctx.reply(strings.CONCERN, Markup
    .keyboard([[options.TRANS_OPT1, options.TRANS_OPT2], [options.TRANS_OPT3, options.TRANS_OPT4],[options.RETURN_TO_MAIN]])
    .resize()
    .extra()))

//TRANSFERS ANSWERS
bot.hears(options.TRANS_OPT1, (ctx) => ctx.reply(strings.EOS_TO_EXCHANGE))
bot.hears(options.TRANS_OPT2, (ctx) => ctx.reply(strings.EXCHANGE_TO_EOS))
bot.hears(options.TRANS_OPT3, (ctx) => ctx.reply(strings.ADDRESS))
bot.hears(options.TRANS_OPT4, (ctx) => ctx.reply(strings.AIRDROP))

//PIN AND PASSWORD MENU
bot.hears(options.OPTION5, (ctx) => ctx.reply(strings.CONCERN, Markup
    .keyboard([[options.PIN_PSWD_OP1, options.PIN_PSWD_OP2], [options.PIN_PSWD_OP3, options.PIN_PSWD_OP4],[options.PIN_PSWD_OP5, options.RETURN_TO_MAIN]])
    .resize()
    .extra()))

//PIN AND PASSWORD ANSWERS
bot.hears(options.PIN_PSWD_OP1, (ctx) => ctx.reply(strings.WHAT_PIN))
bot.hears(options.PIN_PSWD_OP2, (ctx) => ctx.reply(strings.FORGOT_PIN))
bot.hears(options.PIN_PSWD_OP3, (ctx) => ctx.reply(strings.SET_PIN))
bot.hears(options.PIN_PSWD_OP4, (ctx) => ctx.reply(strings.WHAT_PASSWORD))
bot.hears(options.PIN_PSWD_OP5, (ctx) => ctx.reply(strings.FORGOT_PASSWORD))

//KEYS MENU
bot.hears(options.OPTION6, (ctx) => ctx.reply(strings.CONCERN, Markup
    .keyboard([[options.KEYS_OPT1, options.KEYS_OPT2], [options.KEYS_OPT3, options.KEYS_OPT4],[options.RETURN_TO_MAIN]])
    .resize()
    .extra()))

//KEYS ANSWERS
bot.hears(options.KEYS_OPT1, (ctx) => ctx.reply(strings.OWNER_PRIVATE))
bot.hears(options.KEYS_OPT2, (ctx) => ctx.reply(strings.ANOTHER_KEY))
bot.hears(options.KEYS_OPT3, (ctx) => ctx.reply(strings.CHANGE_NAME))
bot.hears(options.KEYS_OPT4, (ctx) => ctx.reply(strings.MORE_WALLETS))

//TROUBLESHOOTING MENU
bot.hears(options.OPTION7, (ctx) => ctx.reply(strings.CONCERN, Markup
    .keyboard([[options.TROUBLE_OPT1, options.TROUBLE_OPT2], [options.TROUBLE_OPT3, options.RETURN_TO_MAIN]])
    .resize()
    .extra()))

//TROUBLESHOOTING ANSWERS
bot.hears(options.TROUBLE_OPT1, (ctx) => ctx.reply(strings.SPINNING))
bot.hears(options.TROUBLE_OPT2, (ctx) => ctx.reply(strings.EXCEED))
bot.hears(options.TROUBLE_OPT3, (ctx) => ctx.reply(strings.NOTHING))

//REFERENDUM MENU
bot.hears(options.OPTION8, (ctx) => ctx.reply(strings.CONCERN, Markup
    .keyboard([[options.REF_OPT1, options.REF_OPT2], [options.REF_OPT3, options.RETURN_TO_MAIN]])
    .resize()
    .extra()))

//REFERENDUM ANSWERS
bot.hears(options.REF_OPT1, (ctx) => ctx.reply(strings.VOTING))
bot.hears(options.REF_OPT2, (ctx) => ctx.reply(strings.APPROVED))
bot.hears(options.REF_OPT3, (ctx) => ctx.reply(strings.CREATE))

//ROADMAP MENU
bot.hears(options.OPTION9, (ctx) => ctx.reply(strings.CONCERN, Markup
    .keyboard([[options.ROADMAP_OPT1, options.ROADMAP_OPT2], [options.RETURN_TO_MAIN]])
    .resize()
    .extra()))

//ROADMAP ANSWERS
bot.hears(options.ROADMAP_OPT1, (ctx) => ctx.reply(strings.TWO_FA))
bot.hears(options.ROADMAP_OPT2, (ctx) => ctx.reply(strings.ROADMAP))

//AIRDROPS MENU
bot.hears(options.OPTION10, (ctx) => ctx.reply(strings.CONCERN, Markup
    .keyboard([[options.AIRDROP_OP1, options.AIRDROP_OP2],[options.AIRDROP_OP3, options.AIRDROP_OP4], [options.RETURN_TO_MAIN]])
    .resize()
    .extra()))

//AIRDROPS ANSWERS
bot.hears(options.AIRDROP_OP1, (ctx) => ctx.reply(strings.BALANCE))
bot.hears(options.AIRDROP_OP2, (ctx) => ctx.reply(strings.NO_AIRDROPS))
bot.hears(options.AIRDROP_OP3, (ctx) => ctx.reply(strings.TOKEN_VALUE))
bot.hears(options.AIRDROP_OP4, (ctx) => ctx.reply(strings.TRANSFER))

//UPDATES MENU
bot.hears(options.OPTION11, (ctx) => ctx.reply(strings.CONCERN, Markup
    .keyboard([[options.UPDATE_OP1, options.UPDATE_OP2],[options.UPDATE_OP3, options.RETURN_TO_MAIN]])
    .resize()
    .extra()))

//UPDATES ANSWERS
bot.hears(options.UPDATE_OP1, (ctx) => ctx.reply(strings.NEW_VERSION))
bot.hears(options.UPDATE_OP2, (ctx) => ctx.reply(strings.UPDATE_BUTTON))
bot.hears(options.UPDATE_OP3, (ctx) => ctx.reply(strings.HOW_UPDATE))

//WHO WE ARE MENU
bot.hears(options.OPTION12, (ctx) => ctx.reply(strings.CONCERN, Markup
    .keyboard([[options.WWA_OPT1, options.WWA_OPT2],[options.RETURN_TO_MAIN]])
    .resize()
    .extra()))

//WHO WE ARE ANSWERS
bot.hears(options.WWA_OPT1, (ctx) => ctx.reply(strings.WHO))
bot.hears(options.WWA_OPT2, (ctx) => ctx.reply(strings.REASONS))

//SISTER CHAIN MENU
bot.hears(options.OPTION13, (ctx) => ctx.reply(strings.CONCERN, Markup
    .keyboard([[options.SIS_OPT1, options.SIS_OPT2], [options.SIS_OPT3, options.SIS_OPT4], [options.RETURN_TO_MAIN]])
    .resize()
    .extra()))

//SISTER CHAIN ANSWERS
bot.hears(options.SIS_OPT1, (ctx) => ctx.reply(strings.WORBLI))
bot.hears(options.SIS_OPT2, (ctx) => ctx.reply(strings.BOS))
bot.hears(options.SIS_OPT3, (ctx) => ctx.reply(strings.JUNGLE))
bot.hears(options.SIS_OPT4, (ctx) => ctx.reply(strings.TELOS))

//RETURN BUTTONS
bot.hears(options.RETURN_TO_MAIN, (ctx) => ctx.reply(strings.HI_MSG, Markup
    .keyboard([[options.OPTION1, options.OPTION2, options.OPTION3], [options.OPTION4, options.OPTION5, options.OPTION6], [options.OPTION7, options.OPTION8, options.OPTION9], [options.OPTION10, options.OPTION11, options.OPTION12], [options.OPTION13, options.OPTION14]])
    .resize()
    .extra()))
bot.hears(options.RETURN_TO_ACC, (ctx) => ctx.reply(strings.CONCERN, Markup
    .keyboard([[options.ACC_OPT1, options.ACC_OPT2], [options.ACC_OPT3, options.ACC_OPT4], [options.ACC_OPT5, options.ACC_OPT6], [options.ACC_OPT7, options.ACC_OPT8],[options.RETURN_TO_MAIN]])
    .resize()
    .extra()))


bot.startPolling()