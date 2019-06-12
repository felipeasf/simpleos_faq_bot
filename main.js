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
var ObjectID = require('mongodb').ObjectID;
const client = new MongoClient(config.mongodb.db_url, {useNewUrlParser: true});
let feedbacks;
let blacklist;
let suggestions;
let flag = 0; //0 = ok, 1 = has question, 2 = new feature
let entryId;

client.connect(function (err) {
        console.log("Connected successfully to server");

        const db = client.db(config.mongodb.db_name);
        feedbacks = db.collection("feedbacks");
        blacklist = db.collection("blacklist");
        suggestions = db.collection("suggestions");

});

//MAIN MENU
bot.start((ctx) => { 

    var date = new Date(Date.now()).toLocaleString();

    feedbacks.insertOne({name: ctx.from.username, userid: ctx.from.id, date: date, rate: 0}, function(err,result){
        entryId = result["ops"][0]["_id"];
        });

    return ctx.reply(strings.HI_MSG, Markup
        .keyboard([[options.OPTION15, options.OPTION16, options.OPTION17],[options.OPTION1, options.OPTION2, options.OPTION3], [options.OPTION4, options.OPTION5, options.OPTION6], [options.OPTION7, options.OPTION8, options.OPTION9], [options.OPTION10, options.OPTION11, options.OPTION13, options.OPTION12]])
        .resize()
        .extra());

});

//REX MENU
bot.hears(options.OPTION15, (ctx) => ctx.reply(strings.CONCERN, Markup
        .keyboard([[options.REX_OPT1, options.REX_OPT2], [options.REX_OPT3, options.REX_OPT4], [options.REX_OPT5, options.RETURN_TO_MAIN]])
        .resize()
        .extra()));

//REX ANSWERS
bot.hears(options.REX_OPT1, async (ctx) => {
    await ctx.reply(strings.WHAT_IS_REX);
    await ctx.reply(strings.SATISFACTION, Markup.keyboard([['Yes', 'No']]).resize().extra());
})

bot.hears(options.REX_OPT2, async (ctx) => { 
    await ctx.reply(strings.REX_GAINS);
    await ctx.reply(strings.SATISFACTION, Markup.keyboard([['Yes', 'No']]).resize().extra());
})

bot.hears(options.REX_OPT3, async (ctx) => { 
    await ctx.reply(strings.LSM);
    await ctx.reply(strings.SATISFACTION, Markup.keyboard([['Yes', 'No']]).resize().extra());
})

bot.hears(options.REX_OPT4, async (ctx) => { 
    await ctx.reply(strings.REX_AIRDROPS);
    await ctx.reply(strings.SATISFACTION, Markup.keyboard([['Yes', 'No']]).resize().extra());
})

bot.hears(options.REX_OPT5, async (ctx) => { 
    await ctx.reply(strings.REX_BORROW);
    await ctx.reply(strings.SATISFACTION, Markup.keyboard([['Yes', 'No']]).resize().extra());
})

//VOTING MENU
bot.hears(options.OPTION16, (ctx) => ctx.reply(strings.CONCERN, Markup
        .keyboard([[options.VOTING_OPT1, options.VOTING_OPT2], [options.VOTING_OPT3, options.RETURN_TO_MAIN]])
        .resize()
        .extra()));

//VOTING ANSWERS
bot.hears(options.VOTING_OPT1, async (ctx) => {
    await ctx.reply(strings.VOTING_REQ);
    await ctx.reply(strings.SATISFACTION, Markup.keyboard([['Yes', 'No']]).resize().extra());
})

bot.hears(options.VOTING_OPT2, async (ctx) => { 
    await ctx.reply(strings.PROXY_MEANS);
    await ctx.reply(strings.SATISFACTION, Markup.keyboard([['Yes', 'No']]).resize().extra());
})

bot.hears(options.VOTING_OPT3, async (ctx) => { 
    await ctx.reply(strings.VOTING_DECAY);
    await ctx.reply(strings.SATISFACTION, Markup.keyboard([['Yes', 'No']]).resize().extra());
})

//CONTRACTS MENU
bot.hears(options.OPTION17, (ctx) => ctx.reply(strings.CONCERN, Markup
        .keyboard([[options.CONTRACTS_OPT1, options.CONTRACTS_OPT2], [options.CONTRACTS_OPT3, options.CONTRACTS_OPT4], [options.RETURN_TO_MAIN]])
        .resize()
        .extra()));

//CONTRACTS ANSWERS
bot.hears(options.CONTRACTS_OPT1, async (ctx) => {
    await ctx.reply(strings.WHAT_IS_CONT);
    await ctx.reply(strings.SATISFACTION, Markup.keyboard([['Yes', 'No']]).resize().extra());
})

bot.hears(options.CONTRACTS_OPT2, async (ctx) => { 
    await ctx.reply(strings.WHY_ACTION_NOK);
    await ctx.reply(strings.SATISFACTION, Markup.keyboard([['Yes', 'No']]).resize().extra());
})

bot.hears(options.CONTRACTS_OPT3, async (ctx) => { 
    await ctx.reply(strings.FIND_DAPP);
    await ctx.reply(strings.SATISFACTION, Markup.keyboard([['Yes', 'No']]).resize().extra());
})

bot.hears(options.CONTRACTS_OPT4, async (ctx) => { 
    await ctx.reply(strings.MORE_ABOUT_ACTIONS);
    await ctx.reply(strings.SATISFACTION, Markup.keyboard([['Yes', 'No']]).resize().extra());
})

//ACC MENU
bot.hears(options.OPTION1, (ctx) => ctx.reply(strings.CONCERN, Markup
        .keyboard([[options.ACC_OPT1, options.ACC_OPT2], [options.ACC_OPT3, options.ACC_OPT4], [options.ACC_OPT5, options.ACC_OPT6], [options.ACC_OPT7, options.ACC_OPT8],[options.RETURN_TO_MAIN]])
        .resize()
        .extra()));

//ACC ANSWERS
bot.hears(options.ACC_OPT1, async (ctx) => {
    await ctx.reply(strings.FIRST_ACC);
    await ctx.reply(strings.SATISFACTION, Markup.keyboard([['Yes', 'No']]).resize().extra());
})

bot.hears(options.ACC_OPT2, async (ctx) => { 
    await ctx.reply(strings.ANOTHER_ACC);
    await ctx.reply(strings.SATISFACTION, Markup.keyboard([['Yes', 'No']]).resize().extra());
})

bot.hears(options.ACC_OPT3, async (ctx) => { 
    await ctx.reply(strings.ERROR_NEW_ACC);
    await ctx.reply(strings.SATISFACTION, Markup.keyboard([['Yes', 'No']]).resize().extra());
})

bot.hears(options.ACC_OPT4, async (ctx) => { 
    await ctx.reply(strings.ALT_METHOD);
    await ctx.reply(strings.SATISFACTION, Markup.keyboard([['Yes', 'No']]).resize().extra());
})

bot.hears(options.ACC_OPT5, async (ctx) => { 
    await ctx.reply(strings.HOW_MUCH_EOS);
    await ctx.reply(strings.SATISFACTION, Markup.keyboard([['Yes', 'No']]).resize().extra());
})

bot.hears(options.ACC_OPT6, async (ctx) => { 
    await ctx.reply(strings.CPU);
    await ctx.reply(strings.SATISFACTION, Markup.keyboard([['Yes', 'No']]).resize().extra());
})

bot.hears(options.ACC_OPT7, async (ctx) => { 
    await ctx.reply(strings.NET);
    await ctx.reply(strings.SATISFACTION, Markup.keyboard([['Yes', 'No']]).resize().extra());
})

bot.hears(options.ACC_OPT8, async (ctx) => { 
    await ctx.reply(strings.RAM);
    await ctx.reply(strings.SATISFACTION, Markup.keyboard([['Yes', 'No']]).resize().extra());
})

//ACC ERR MENU
bot.hears(options.ACC_OPT3, (ctx)=> ctx.reply(strings.ERROR_NEW_ACC, Markup
        .keyboard([[options.NEW_ACC_ERR_OP1, options.NEW_ACC_ERR_OP2],[options.RETURN_TO_ACC]])
        .resize()
        .extra()));

//ACC ERR ANSWERS
bot.hears(options.NEW_ACC_ERR_OP1, async (ctx) => { 
    await ctx.reply(strings.DURING_AVAILABILITY);
    await ctx.reply(strings.SATISFACTION, Markup.keyboard([['Yes', 'No']]).resize().extra());
})

bot.hears(options.NEW_ACC_ERR_OP2, async (ctx) => { 
    await ctx.reply(strings.EOSIO_ASSERT);
    await ctx.reply(strings.SATISFACTION, Markup.keyboard([['Yes', 'No']]).resize().extra());
})

//SECURITY MENU
bot.hears(options.OPTION2, (ctx) => ctx.reply(strings.CONCERN, Markup
        .keyboard([[options.SECURITY_OPT1, options.SECURITY_OPT2], [options.SECURITY_OPT3, options.SECURITY_OPT4],[options.RETURN_TO_MAIN]])
        .resize()
        .extra()));

//SECURITY ANSWERS
bot.hears(options.SECURITY_OPT1, async (ctx) => { 
    await ctx.reply(strings.SIMPLEOS_SAFE);
    await ctx.reply(strings.SATISFACTION, Markup.keyboard([['Yes', 'No']]).resize().extra());
})

bot.hears(options.SECURITY_OPT2, async (ctx) => { 
    await ctx.reply(strings.ENDORSED);
    await ctx.reply(strings.SATISFACTION, Markup.keyboard([['Yes', 'No']]).resize().extra());
})

bot.hears(options.SECURITY_OPT3, async (ctx) => { 
    await ctx.reply(strings.EXTERNAL);
    await ctx.reply(strings.SATISFACTION, Markup.keyboard([['Yes', 'No']]).resize().extra());
})

bot.hears(options.SECURITY_OPT4, async (ctx) => { 
    await ctx.reply(strings.EOS_LINK);
    await ctx.reply(strings.SATISFACTION, Markup.keyboard([['Yes', 'No']]).resize().extra());
})

//STAKE MENU
bot.hears(options.OPTION3, (ctx) => ctx.reply(strings.CONCERN, Markup
        .keyboard([[options.STAKE_OPT1, options.STAKE_OPT2], [options.STAKE_OPT3, options.SECURITY_OPT4],[options.STAKE_OPT5, options.STAKE_OPT6],[options.STAKE_OPT7, options.RETURN_TO_MAIN]])
        .resize()
        .extra()));

//STAKE ANSWERS
bot.hears(options.STAKE_OPT1, async (ctx) => { 
    await ctx.reply(strings.STUCK);
    await ctx.reply(strings.SATISFACTION, Markup.keyboard([['Yes', 'No']]).resize().extra());
})

bot.hears(options.STAKE_OPT2, async (ctx) => { 
    await ctx.reply(strings.HOW_STAKE);
    await ctx.reply(strings.SATISFACTION, Markup.keyboard([['Yes', 'No']]).resize().extra());
})

bot.hears(options.STAKE_OPT3, async (ctx) => { 
    await ctx.reply(strings.WHY_STAKE);
    await ctx.reply(strings.SATISFACTION, Markup.keyboard([['Yes', 'No']]).resize().extra());
})

bot.hears(options.STAKE_OPT4, async (ctx) => { 
    await ctx.reply(strings.CPU_NET_RATE);
    await ctx.reply(strings.SATISFACTION, Markup.keyboard([['Yes', 'No']]).resize().extra());
})

bot.hears(options.STAKE_OPT5, async (ctx) => { 
    await ctx.reply(strings.WHY_UNSTAKE);
    await ctx.reply(strings.SATISFACTION, Markup.keyboard([['Yes', 'No']]).resize().extra());
})

bot.hears(options.STAKE_OPT6, async (ctx) => { 
    await ctx.reply(strings.UNSTAKE_100);
    await ctx.reply(strings.SATISFACTION, Markup.keyboard([['Yes', 'No']]).resize().extra());
})

bot.hears(options.STAKE_OPT7, async (ctx) => { 
    await ctx.reply(strings.LEAVE_1_EOS);
    await ctx.reply(strings.SATISFACTION, Markup.keyboard([['Yes', 'No']]).resize().extra());
})

//TRANSFERS MENU
bot.hears(options.OPTION4, (ctx) => ctx.reply(strings.CONCERN, Markup
        .keyboard([[options.TRANS_OPT1, options.TRANS_OPT2], [options.TRANS_OPT3, options.TRANS_OPT4],[options.RETURN_TO_MAIN]])
        .resize()
        .extra()));

//TRANSFERS ANSWERS
bot.hears(options.TRANS_OPT1, async (ctx) => { 
    await ctx.reply(strings.EOS_TO_EXCHANGE);
    await ctx.reply(strings.SATISFACTION, Markup.keyboard([['Yes', 'No']]).resize().extra());
})

bot.hears(options.TRANS_OPT2, async (ctx) => { 
    await ctx.reply(strings.EXCHANGE_TO_EOS);
    await ctx.reply(strings.SATISFACTION, Markup.keyboard([['Yes', 'No']]).resize().extra());
})

bot.hears(options.TRANS_OPT3, async (ctx) => { 
    await ctx.reply(strings.ADDRESS);
    await ctx.reply(strings.SATISFACTION, Markup.keyboard([['Yes', 'No']]).resize().extra());
})

bot.hears(options.TRANS_OPT4, async (ctx) => { 
    await ctx.reply(strings.AIRDROP);
    await ctx.reply(strings.SATISFACTION, Markup.keyboard([['Yes', 'No']]).resize().extra());
})

//PIN AND PASSWORD MENU
bot.hears(options.OPTION5, (ctx) => ctx.reply(strings.CONCERN, Markup
        .keyboard([[options.PIN_PSWD_OP1, options.PIN_PSWD_OP2], [options.PIN_PSWD_OP3, options.PIN_PSWD_OP4],[options.PIN_PSWD_OP5, options.PIN_PSWD_OP6], [options.RETURN_TO_MAIN]])
        .resize()
        .extra()));

//PIN AND PASSWORD ANSWERS
bot.hears(options.PIN_PSWD_OP1, async (ctx) => { 
    await ctx.reply(strings.WHAT_PIN);
    await ctx.reply(strings.SATISFACTION, Markup.keyboard([['Yes', 'No']]).resize().extra());
});

bot.hears(options.PIN_PSWD_OP2, async (ctx) => { 
    await ctx.reply(strings.FORGOT_PIN);
    await ctx.reply(strings.SATISFACTION, Markup.keyboard([['Yes', 'No']]).resize().extra());
});

bot.hears(options.PIN_PSWD_OP3, async (ctx) => { 
    await ctx.reply(strings.SET_PIN);
    await ctx.reply(strings.SATISFACTION, Markup.keyboard([['Yes', 'No']]).resize().extra());
});

bot.hears(options.PIN_PSWD_OP4, async (ctx) => { 
    await ctx.reply(strings.WHAT_PASSWORD);
    await ctx.reply(strings.SATISFACTION, Markup.keyboard([['Yes', 'No']]).resize().extra());
});

bot.hears(options.PIN_PSWD_OP5, async (ctx) => { 
    await ctx.reply(strings.FORGOT_PASSWORD);
    await ctx.reply(strings.SATISFACTION, Markup.keyboard([['Yes', 'No']]).resize().extra());
});

bot.hears(options.PIN_PSWD_OP6, async (ctx) => { 
    await ctx.reply(strings.CHANGE_PASSWORD);
    await ctx.reply(strings.SATISFACTION, Markup.keyboard([['Yes', 'No']]).resize().extra());
});

//KEYS & BACKUP MENU
bot.hears(options.OPTION6, (ctx) => ctx.reply(strings.CONCERN, Markup
        .keyboard([[options.KEYS_OPT1, options.KEYS_OPT2], [options.KEYS_OPT3, options.KEYS_OPT4],[options.KEYS_OPT5, options.KEYS_OPT6],[options.RETURN_TO_MAIN]])
        .resize()
        .extra()));

//KEYS & BACKUP ANSWERS
bot.hears(options.KEYS_OPT1, async (ctx) => { 
    await ctx.reply(strings.OWNER_PRIVATE);
    await ctx.reply(strings.SATISFACTION, Markup.keyboard([['Yes', 'No']]).resize().extra());
});

bot.hears(options.KEYS_OPT2, async (ctx) => { 
    await ctx.reply(strings.ANOTHER_KEY);
    await ctx.reply(strings.SATISFACTION, Markup.keyboard([['Yes', 'No']]).resize().extra());
});

bot.hears(options.KEYS_OPT3, async (ctx) => { 
    await ctx.reply(strings.CHANGE_NAME);
    await ctx.reply(strings.SATISFACTION, Markup.keyboard([['Yes', 'No']]).resize().extra());
});

bot.hears(options.KEYS_OPT4, async (ctx) => { 
    await ctx.reply(strings.MORE_WALLETS);
    await ctx.reply(strings.SATISFACTION, Markup.keyboard([['Yes', 'No']]).resize().extra());
});

bot.hears(options.KEYS_OPT5, async (ctx) => { 
    await ctx.reply(strings.AUTO_BACKUP);
    await ctx.reply(strings.SATISFACTION, Markup.keyboard([['Yes', 'No']]).resize().extra());
});

bot.hears(options.KEYS_OPT6, async (ctx) => { 
    await ctx.reply(strings.SHOW_KEY);
    await ctx.reply(strings.SATISFACTION, Markup.keyboard([['Yes', 'No']]).resize().extra());
});

//TROUBLESHOOTING MENU
bot.hears(options.OPTION7, (ctx) => ctx.reply(strings.CONCERN, Markup
        .keyboard([[options.TROUBLE_OPT1, options.TROUBLE_OPT2], [options.TROUBLE_OPT3, options.RETURN_TO_MAIN]])
        .resize()
        .extra()));

//TROUBLESHOOTING ANSWERS
bot.hears(options.TROUBLE_OPT1, async (ctx) => { 
    await ctx.reply(strings.SPINNING);
    await ctx.reply(strings.SATISFACTION, Markup.keyboard([['Yes', 'No']]).resize().extra());
});

bot.hears(options.TROUBLE_OPT2, async (ctx) => { 
    await ctx.reply(strings.EXCEED);
    await ctx.reply(strings.SATISFACTION, Markup.keyboard([['Yes', 'No']]).resize().extra());
});

bot.hears(options.TROUBLE_OPT3, async (ctx) => { 
    await ctx.reply(strings.NOTHING);
    await ctx.reply(strings.SATISFACTION, Markup.keyboard([['Yes', 'No']]).resize().extra());
});

//REFERENDUM MENU
bot.hears(options.OPTION8, (ctx) => ctx.reply(strings.CONCERN, Markup
        .keyboard([[options.REF_OPT1, options.REF_OPT2], [options.REF_OPT3, options.RETURN_TO_MAIN]])
        .resize()
        .extra()));

//REFERENDUM ANSWERS
bot.hears(options.REF_OPT1, async (ctx) => { 
    await ctx.reply(strings.VOTING);
    await ctx.reply(strings.SATISFACTION, Markup.keyboard([['Yes', 'No']]).resize().extra());
});

bot.hears(options.REF_OPT2, async (ctx) => { 
    await ctx.reply(strings.APPROVED);
    await ctx.reply(strings.SATISFACTION, Markup.keyboard([['Yes', 'No']]).resize().extra());
});

bot.hears(options.REF_OPT3, async (ctx) => { 
    await ctx.reply(strings.CREATE);
    await ctx.reply(strings.SATISFACTION, Markup.keyboard([['Yes', 'No']]).resize().extra());
});

//ROADMAP MENU
bot.hears(options.OPTION9, (ctx) => ctx.reply(strings.CONCERN, Markup
        .keyboard([[options.ROADMAP_OPT1, options.ROADMAP_OPT2], [options.RETURN_TO_MAIN]])
        .resize()
        .extra()));

//ROADMAP ANSWERS
bot.hears(options.ROADMAP_OPT1, async (ctx) => { 
    await ctx.reply(strings.TWO_FA);
    await ctx.reply(strings.SATISFACTION, Markup.keyboard([['Yes', 'No']]).resize().extra());
});

bot.hears(options.ROADMAP_OPT2, async (ctx) => { 
    await ctx.reply(strings.ROADMAP);
    await ctx.reply(strings.SATISFACTION, Markup.keyboard([['Yes', 'No']]).resize().extra());
});

//AIRDROPS MENU
bot.hears(options.OPTION10, (ctx) => ctx.reply(strings.CONCERN, Markup
        .keyboard([[options.AIRDROP_OP1, options.AIRDROP_OP2],[options.AIRDROP_OP3, options.AIRDROP_OP4], [options.RETURN_TO_MAIN]])
        .resize()
        .extra()));

//AIRDROPS ANSWERS
bot.hears(options.AIRDROP_OP1, async (ctx) => { 
    await ctx.reply(strings.BALANCE);
    await ctx.reply(strings.SATISFACTION, Markup.keyboard([['Yes', 'No']]).resize().extra());
});

bot.hears(options.AIRDROP_OP2, async (ctx) => { 
    await ctx.reply(strings.NO_AIRDROPS);
    await ctx.reply(strings.SATISFACTION, Markup.keyboard([['Yes', 'No']]).resize().extra());
});

bot.hears(options.AIRDROP_OP3, async (ctx) => { 
    await ctx.reply(strings.TOKEN_VALUE);
    await ctx.reply(strings.SATISFACTION, Markup.keyboard([['Yes', 'No']]).resize().extra());
});

bot.hears(options.AIRDROP_OP4, async (ctx) => { 
    await ctx.reply(strings.TRANSFER);
    await ctx.reply(strings.SATISFACTION, Markup.keyboard([['Yes', 'No']]).resize().extra());
});

//UPDATES MENU
bot.hears(options.OPTION11, (ctx) => ctx.reply(strings.CONCERN, Markup
        .keyboard([[options.UPDATE_OP1, options.UPDATE_OP2],[options.UPDATE_OP3, options.RETURN_TO_MAIN]])
        .resize()
        .extra()));

//UPDATES ANSWERS
bot.hears(options.UPDATE_OP1, async (ctx) => { 
    await ctx.reply(strings.NEW_VERSION);
    await ctx.reply(strings.SATISFACTION, Markup.keyboard([['Yes', 'No']]).resize().extra());
});

bot.hears(options.UPDATE_OP2, async (ctx) => { 
    await ctx.reply(strings.UPDATE_BUTTON);
    await ctx.reply(strings.SATISFACTION, Markup.keyboard([['Yes', 'No']]).resize().extra());
});

bot.hears(options.UPDATE_OP3, async (ctx) => { 
    await ctx.reply(strings.HOW_UPDATE);
    await ctx.reply(strings.SATISFACTION, Markup.keyboard([['Yes', 'No']]).resize().extra());
});

//WHO WE ARE MENU
// bot.hears(options.OPTION12, (ctx) => ctx.reply(strings.CONCERN, Markup
//         .keyboard([[options.WWA_OPT1, options.WWA_OPT2],[options.RETURN_TO_MAIN]])
//         .resize()
//         .extra()));

//WHO WE ARE ANSWERS
// bot.hears(options.WWA_OPT1, async (ctx) => { 
//     await ctx.reply(strings.WHO);
//     await ctx.reply(strings.SATISFACTION, Markup.keyboard([['Yes', 'No']]).resize().extra());
// });

// bot.hears(options.WWA_OPT2, async (ctx) => { 
//     await ctx.reply(strings.REASONS);
//     await ctx.reply(strings.SATISFACTION, Markup.keyboard([['Yes', 'No']]).resize().extra());
// });

//SISTER CHAIN MENU
bot.hears(options.OPTION13, (ctx) => ctx.reply(strings.CONCERN, Markup
        .keyboard([[options.SIS_OPT1, options.SIS_OPT2], [options.SIS_OPT3, options.SIS_OPT4], [options.RETURN_TO_MAIN]])
        .resize()
        .extra()));

//SISTER CHAIN ANSWERS
bot.hears(options.SIS_OPT1, async (ctx) => {
    await ctx.reply(strings.WORBLI);
    await ctx.reply(strings.SATISFACTION, Markup.keyboard([['Yes', 'No']]).resize().extra());
});

bot.hears(options.SIS_OPT2, async (ctx) => {
    await ctx.reply(strings.BOS);
    await ctx.reply(strings.SATISFACTION, Markup.keyboard([['Yes', 'No']]).resize().extra());
});

bot.hears(options.SIS_OPT3, async (ctx) => {
    await ctx.reply(strings.JUNGLE);
    await ctx.reply(strings.SATISFACTION, Markup.keyboard([['Yes', 'No']]).resize().extra());
});

bot.hears(options.SIS_OPT4, async (ctx) => {
    await ctx.reply(strings.TELOS);
    await ctx.reply(strings.SATISFACTION, Markup.keyboard([['Yes', 'No']]).resize().extra());
});

//OTHER MENU
bot.hears(options.OPTION12, (ctx) => ctx.reply(strings.CONCERN, Markup
        .keyboard([[options.OTHER_OPT1, options.OTHER_OPT2], [options.OTHER_OPT3, options.RETURN_TO_MAIN]])
        .resize()
        .extra()));

//OTHER ANSWERS
bot.hears(options.OTHER_OPT1, async (ctx) => {
    await ctx.reply(strings.WHO);
    await ctx.reply(strings.SATISFACTION, Markup.keyboard([['Yes', 'No']]).resize().extra());
});

bot.hears(options.OTHER_OPT2, async (ctx) => {
    await ctx.reply(strings.REASONS);
    await ctx.reply(strings.SATISFACTION, Markup.keyboard([['Yes', 'No']]).resize().extra());
});

bot.hears(options.OTHER_OPT3, async (ctx) => {
    await ctx.reply(strings.FEATURE, Markup.removeKeyboard().extra());
    flag = 2;
});

//RETURN BUTTONS
bot.hears(options.RETURN_TO_MAIN, (ctx) => ctx.reply(strings.HI_MSG, Markup
        .keyboard([[options.OPTION15, options.OPTION16, options.OPTION17],[options.OPTION1, options.OPTION2, options.OPTION3], [options.OPTION4, options.OPTION5, options.OPTION6], [options.OPTION7, options.OPTION8, options.OPTION9], [options.OPTION10, options.OPTION11, options.OPTION12, options.OPTION13]])
        .resize()
        .extra()));
bot.hears(options.RETURN_TO_ACC, (ctx) => ctx.reply(strings.CONCERN, Markup
        .keyboard([[options.ACC_OPT1, options.ACC_OPT2], [options.ACC_OPT3, options.ACC_OPT4], [options.ACC_OPT5, options.ACC_OPT6], [options.ACC_OPT7, options.ACC_OPT8],[options.RETURN_TO_MAIN]])
        .resize()
        .extra()));

//FEEDBACK
bot.hears("Yes", (ctx) => {
    var date = new Date(Date.now()).toLocaleString();
    feedbacks.updateOne({_id: ObjectID(entryId)}, {$set:{rate: 1}}, function(err){
        if (err) {
            console.log('Error updating object: ' + err);
        }
    });
    return ctx.reply(strings.YES + strings.START, Markup.removeKeyboard().extra());
})

bot.hears("No", (ctx) => {
    check_blacklist(ctx.from.id).then(function(notBlacklisted){
        flag = 1;
        let date = new Date(Date.now()).toLocaleString();
        feedbacks.updateOne({_id: ObjectID(entryId)}, {$set:{rate: 2}}, function(err){
            if(err) {
                console.log('Error updating object ' + err);
            }
        });
        ctx.reply(strings.SORRY + strings.ASK, Markup.removeKeyboard().extra());
    }).catch(function(blacklisted){
        return ctx.reply(strings.SORRY + strings.START, Markup.removeKeyboard().extra());
    })
})

//HELP COMMAND
bot.help((ctx) => {
    if(ctx.chat.id == config.support.chatId){
        ctx.reply(strings.HELP_ADMIN);
    }
    else{
        ctx.reply(strings.HELP);
    }

})

//blacklist COMMAND
bot.command("blacklist", (ctx) => {
    if(ctx.chat.id == config.support.chatId){
        let split = ctx.message.text.split(" ");
        if(isNaN(split[1]) || split.length < 2)
        {
            return ctx.reply("Usage: /blacklist {userid}");
        }
        else{
            blacklist.insertOne({userid: split[1]});
            return ctx.reply(split[1] + " blacklisted");
        }
    }
})

//analytics command
bot.command("stats", (ctx) => {
    if(ctx.chat.id == config.support.chatId){
        Promise.all([get_total(), get_happy(), get_unhappy()]).then(result => {
            return ctx.reply("📊 Usage report" + "\n\nTotal: " + result[0] + "\nSolved: " + result[1] + "\nUnsolved: " + result[2] + "\nNot rated: " + (result[0] - (result[1] + result[2])));
        });
    }
})

bot.on('text', (ctx) => {
    try{
        if(ctx.message.reply_to_message.from.is_bot == true){
            if(ctx.chat.id == config.support.chatId){
                let answer = ctx.message.reply_to_message.text.replace( /\n/g, " " ).split( " " );
                return bot.telegram.sendMessage(answer[5], "Support Team: " + ctx.message.text + strings.SATISFACTION + strings.TYPE_NO, Markup
                .keyboard([['Yes', 'No']])
                .resize()
                .extra());
                }
            }
    }
    catch(err){
        //do nothing
    }
    if(flag == 1)
    {
        let question = "❓New Question" + "\nUsername: " + ctx.from.username +  "\nUserId: " + ctx.from.id + "\nQuestion: " + ctx.message.text;
        bot.telegram.sendMessage(config.support.chatId, question);
        flag = 0;
    } 
    if(flag == 2)
    {
        let sugest = "❕Feature Suggestion" + "\nUsername: " + ctx.from.username +  "\nUserId: " + ctx.from.id + "\nFeature Suggestion: " + ctx.message.text;
        bot.telegram.sendMessage(config.support.chatId, sugest);

        suggestions.insertOne({name: ctx.from.username, userid: ctx.from.id, sug: ctx.message.text}, function(err){
            if (err) {
                console.log('Error updating object: ' + err);
            }
        });
        flag = 0;
        return ctx.reply(strings.SUGGESTION + strings.START, Markup.removeKeyboard().extra());
    } 
    else { 
        return;
    }
});

//check if user is blacklisted
let check_blacklist = function(userid){
    return new Promise(function(resolve, reject){
        blacklist.find({}).toArray((err, result) => {
            if(!err){
                if(result){
                    let isBlacklisted = result.filter(function(value){ return value.userid == userid; });
                    if(isBlacklisted.length == 0){
                        resolve();
                    }else{
                        reject();
                    }
                }
            }
        });
    });
}

//get total usages from database
let get_total = function(analytics){
    return new Promise(function(resolve){
        feedbacks.find({name:{$nin:config.analytics.excluded_acc}}).count((err, result) => {
            if(!err){
                resolve(result);
            }
            else{
                console.log("Error retrieving analytics data!");
            }
        });
    });
}

//get problems solved (rate = 1)
let get_happy = function(analytics){
    return new Promise(function(resolve){
        feedbacks.find({name:{$nin:config.analytics.excluded_acc}, rate:1}).count((err, result) => {
            if(!err){
                resolve(result);
            }
            else{
                console.log("Error retrieving analytics data!");
            }
        });
    });
}

//get problems solved (rate = 2)
let get_unhappy = function(analytics){
    return new Promise(function(resolve){
        feedbacks.find({name:{$nin:config.analytics.excluded_acc}, rate:2}).count((err, result) => {
            if(!err){
                resolve(result);
            }
            else{
                console.log("Error retrieving analytics data!");
            }
        });
    });
}

//get
let get_month = function(analytics){
    return new Promise(function(resolve){
        feedbacks.find({name:{$nin:config.analytics.excluded_acc}, date:{$gte:2/1/2019, $lt:2/28/2019} }).count((err, result) => {
            if(!err){
                resolve(result);
            }
            else{
                console.log("Error retrieving analytics data!");
            }
        });
    });
}



bot.startPolling();