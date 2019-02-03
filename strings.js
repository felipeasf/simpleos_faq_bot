module.exports = {
	HI_MSG: `Welcome to SimplEOS FAQ Bot
		What does your issue concern?`,

	CONCERN: "What does your issue concern?",

	//ACC
	FIRST_ACC: `Here goes a tutorial on how to create a new account. If it does not work, go for 		""Previous Optios"" and select ""Alternative Method"" or ""Contact Support""

				1. Click on ""Request New Account"".

				2. Sign yourself up on an exchange where you can buy EOS. If you've already signed up on one, perfect!

				3. ""Intro"" is useful for the user to understand how SimplEOS helps you creating a new account via smart contract. After reading it, go for ""Next"".

				4. Create an username with 12 digits and check its availability. Once you've chosen one, go for ""Next"". Remember that the name you've picked will be the address of your wallet. If anyone wants to send you EOS, give them your username.

				5. At this point, we recommend you to disconnect from the internet for a secure procedure. As you click on ""Generate Key Pairs"", you'll see a ""Public"" and a ""Private"" pair of keys being created.

				As the user rolls the sidebar, he'll see his private keys.
				The public keys - starts with EOS... - we'll serve you to locate your account on any block explorer (ex: bloks.io) as the username does. Usually, the username is easier to memorize =)
				The private keys - usually starts with 5...- must be safe and well kept at all times because they're the only manner to access your account, execute transactions and other important procedures.

				After you kept it all safe, go for ""Next"".

				6. SimplEOS will calculate for you the exact amount needed to create your new account and it will show you how each part will be allocated. These values can change a little bit from the screenshot, but nothing absurd.

				If you transfer more than what is needed for the moment, the difference will remain as liquid tokens on your wallet.

				7. To complete the payment step, log into the exchange of your choice and send/transfer (at minimum) the value shown by SimplEOS.
				Remember to type the exact information on the exchange fields (Recipient AND MEMO) to avoid any risk of losing your tokens. To make it easier, just click on the ""copy"" sign and paste it there.
				After you've done it, go check on a block explorer if it's possible to locate your account by typing your username. Usually it takes a few minutes.

				Obs: There's a little peculiarity with some exchanges.
				The problem is that some of them - just like Binance - does not accept MEMO's with more than 100 digits and the output of this error is ""Invalid Tag"".
				However, for all private keys to be created, the smart contract used to create an EOS account needs the 120-digit-MEMO shown by SimplEOS. It's a boring paradox.
				How did we solve this? The MEMO shown by SimplEOS is composed by 3 parts: Username-Public Owner Key-Public Active Key

				Example: testvince123-EOS......JbK1-EOS.....HjIk3

				As Binance has this limitation, you'll have to insert only part of the MEMO.
				Go to Binance (or the exchange that’s showing the same issue) and paste only the first two parts of your MEMO, ignoring the last part (delete ""-EOS.....HjIk3"").
				What you'll be doing is sending only your ""Username"" and ""Public Owner Key"" on the Memo.
				After the procedure, go check on a block explorer (ex: bloks.io) if it's possible to locate your account by typing your username.

				After completing the procedure, when you reach the ""STEP 9"" of this tutorial, insert your ""Owner Private Key"" (starts with ""5..."").
				It will be the only code able to unlock your SimplEOS and other important transactions.

				8. After certifying that your account exists, open SimplEOS and go for ""Import Existing Key"".

				9. Paste your ""Active Private Key"" generated on Step 5 of this tutorial.

				10. Create a password to access your SimplEOS wallet.

				11. Click on the box to certify that you abide by the EOS Constution.

				12. Feel free to create a PIN to lock your wallet. If you don't want it, just go for the ""Finish"" and enjoy it =)`,


	ANOTHER_ACC: `Yes. Inside the wallet look for the  ‘NEW ACCOUNT’ button on the upper right corner.

				Once you click, you will have two options: ‘Associated with this private key’ or ‘Associated with a new private key’
				‘Associated with this private key’: the new account will be associated with the same private key of the account you are using to create.
				‘Associated with new private key’: the new account will be associated with another private key.
				Follow the steps for the desired method and at the end your new account will be created and will appear in the wallet. `,


	ERROR_NEW_ACC: `What type of error message did you receive?`,


	DURING_AVAILABILITY: `Please check if the account name you are trying to create has a dot in it. Names with dots are premium names and cannot be created like that.
						Also, check if you are on an account with enough unstaked EOS to perform the action.
						If the problem persists, contact us.`,

	EOSIO_ASSERT: `This error message usually appears when the account your using to create a new one doesn't have enough EOS unstaked to execute the operation. To unstake EOS, please go for the section ""VOTE"" and search for the field ""Stake your EOS"". 
					There you'll be able to move the slide and set the percentage or type the amount of your balance you desire to leave staked.`,


	ALT_METHOD: `It's not rare to receive this error message from Binance or some other exchanges. The address "eosriosignup" keeps creating new accounts at all times besides the error message. However, SimplEOS developed an alternative method to help users create their accounts.

		Different from the main method which uses a smart contract, the Alternative Method uses another account to help creating the new account.

		It’s extremely important to understand a few things about this method:
		- The user must type an account to recover funds in case the process does not work. The first method uses a smart contract to guarantee a funds’ recovery if anything goes wrong during the execution. Unfortunately, as some exchanges are blocking addresses that interact with smart contracts, so EOS Rio team developed a method that uses a common account execute to the process. If anything goes wrong, our team will need the exchange address and memo  to give the funds back to its owner. 
		- The MEMO of the main and the alternative methods are different. If any user send funds using the wrong memo, the procedure won’t be completed.`,


	HOW_MUCH_EOS: `It takes enough EOS to guarantee CPU, NET & RAM resources for the user’s 				account.

					For CPU and NET, it takes at minimum 1 EOS and SimplEOS distributes it at the rate 50/50.

					RAM is a scarce resource whose price fluctuates with the supply-demand law.

					Currently, the necessary amount to create a new account is around ~1.5EOS. 

					Important to emphasize a few points:
					- This amount stays staked to the account and its withdrawal would make the account useless. For security reasons, SimplEOS won’t allow it to be unstaked. 
					- The “stake” strategy for the minimum necessary resources is one of the main reasons why transaction on EOS network are feeless. `,


    CPU: `CPU represents processing time, one of the blockchain resources that are allocated by means of the delegation mechanism. Each action requires a certain amount of CPU processing time, therefore if you would like to broadcast transactions to the EOS network, your account must have a sufficient allocation of CPU.

		Every account is natively rewarded with CPU after staking EOS and if spent until exhaustion, CPU recovers itself on an average of 24 hours. 

		If you receive an error message described as “Transaction exceeded the current CPU usage limit imposed on the transaction”, probably CPU came to exhaustion. You can always check your resources status on SimplEOS (section “Resources”) or by typing your account name on any block explorer ( bloks.io a good example).`,

	NET: `Network, one of a user's resources, signifies the throughput capacity of the EOS blockchain. When you delegate tokens for Network, you are securing your right to utilize a pro-rata amount of the blockchain’s capacity.

		Every account is natively rewarded with NET after staking EOS.

		You can always check your resources status on SimplEOS (section “Resources”) or by typing your account name on any block explorer ( bloks.io a good example).`,

	RAM: `Acronym for Random Access Memory. For speedy data lookup, a lot of data on EOS is stored within RAM. It is the most scarce system resource, which is why it must be purchased rather than staked for and its price fluctuates independently of EOS’ price.

		Users can buy or sell RAM through SimplEOS on the “Resources” section.

		You can always check your resources status on SimplEOS (section “Resources”) or by typing your account name on any block explorer ( bloks.io a good example).`,

	//SECURITY
	SIMPLEOS_SAFE: `SimplEOS doesn't transmit anything else but the signed transactions to the blockchain, so your keys are safely encrypted only on your own computer at all times. All data is kept locally on your computer. We don’t have access to any of your information.

		But please, as everything involving private keys, always do your own due diligence. SimplEOS doesn’t protect you if your computer is infected with some type of virus that records your screen or keylogs your keyboard..`,

	ENDORSED: `Our wallet has been recommended by eosnewyork, eosdac e.g. and several other BPs. 
		Exodus team has also been super nice and has been giving us support on the initiative:
		https://support.exodus.io/article/757-eos-claiming-your-eos-with-simpleos`,

	EXTERNAL: `The only ancillary connections are listed as below:
		- Information about BPs
		All bp.json files from the BPs websites passes through our proxy to filter and remove any malformed data. Those are the files the BPs publish when they register as block producers on the blockchain, and that contains the information about them.
		- Price RAM api 
		In order to update RAM price on EOS and build the graph price, we get that price from our custom API made by us.
		- account request API (on the alternative method)
		On the alternative method to create an account, we send the user’s information to our server to create an account. The only information sent are: eos PUBLIC keys, desired account name and the refund address and memo filled in by the user.`,

	EOS_LINK: `SimplEOS download links always come from our github`,

	//STAKE
	STUCK: `First thing is to check whether you're on SimplEOS latest version (0.7.1). If you're not on it, please update on  https://github.com/eosrio/simpleos/releases
		If you're on previous versions, that's usually an endpoint problem. It means the endpoint you are using has a high latency or that the network is congested. When you enter SimplEOS, the wallet automatically chooses the fastest endpoint to you, but sometimes this changes in the middle of the session. 
		When this happens, close and reopen the wallet. Then go to configurations panel (cog symbol on the upper right corner). There, you will see endpoint options. Just click on one that you think is better or click ‘AUTO’ (this recalculates the latencies and chooses the best endpoint for them)`,

	HOW_STAKE: `Stake /Unstake slider can be found on the “VOTE” page
			To stake your EOS, move the slider right.
			To unstake your EOS, move the slider left. 
			The user has also the option to type above the slider the EOS amount that he/she desires to leave staked.
			To confirm the action press “SET STAKE” and sign it with your password.
			After that you can see the time left to free your eos on the SEND page
			It’s important to emphasize that any stake/untake action during this period will reset the unstaking time (72 hours)`,

	WHY_STAKE: `On EOS, you have to stake EOS tokens in order to use the network resources (CPU and network bandwidth). If you plan to do a lot of transactions or actions, you will need a good amount staked, as actions consume the network resources. However, it regenerate over time (average of 24 hours).
		Besides, maintaining your EOS staked is a good way to keep your EOS tokens safe, as unstaking takes 3 days to complete.
		When you stake, your eos are allocated between CPU and network bandwidth. CPU Bandwidth is your average CPU time consumption in microseconds over the last 3 days.  The longer your transaction runs, the more CPU bandwidth it will consume. Network Bandwidth is your average consumption in bytes over the last 3 days.`,

	CPU_NET_RATE: `It’s 50/50 by now, we didn't add a custom ratio for simplicity for now. We will be adding a ratio selector soon. 
		If you desire to change that rate, EOS Tool Kit has a great solution: https://eostoolkit.io/account/create`,

	WHY_UNSTAKE: `In order to free your EOS for transfers, you have to unstake them. But please keep in mind that unstaking takes 3 days to free your EOS for transfers.`,

	UNSTAKE_100: `This is not recommended, because then you wouldn’t have resources on the network and wouldn’t be able to perform actions or transactions. Your account would be deemed useless. You would need a small amount left staked in order to perform transactions.
		EOS has this great feature of letting its users to manage their accounts through as many wallets as they desire. In order to unstake 100% of the EOS balance, the user might search for another wallet that allows this procedure, but keeping in mind its consequences at all times.`,

	LEAVE_1_EOS: `~1 EOS is the minimum we deemed safe to left staked in order to be able to perform transactions. If you want to leave less than 1 EOS staked, we recommend you use another tool.`,

	//TRANSFERS
	EOS_TO_EXCHANGE: `Yes, if the exchange is already open for deposits. Go to the exchange deposits page and there you should see a 12 character address and a memo. 
		On SimplEOS, put the 12 char address on the “Send to (account name)” field, and put the memo on the “Memo” field.`,

	EXCHANGE_TO_EOS: `Yes, if the exchange is already open to withdrawals. Go to the exchange withdrawals page and search for the field to insert your 12 characters account name as the address for transfer.`,

	ADDRESS: `It’s your 12 characters account name. On EOS, you always transfer to the account name.
		You can find it on the upper tab. Just select it and use the keyboard shortcuts to copy.
		The alternative way to do it is by typing your EOS public key on any block explorer ( bloks.io is a good example). Therefore, it will indicate to which account name your public key is linked to.`,

	AIRDROP: `Yes, on the SEND page. You’ll just need to select the token you want to transfer. But be careful when sending these tokens to exchanges. 
		Certify that the exchange is accepting deposits of that token and that it is the EOS mainnet version of the token.`,

	//PIN AND PASSWORD
	WHAT_PIN: `Your privacy pin is used to unlock the screen upon entering SimplEOS. It’s a short pin you can set when you import your private key the first time you enter the app.`,

	FORGOT_PIN: `If you updated to a new version and it asked for the pin, you must clear the local data and start fresh.
		You’ll need to reimport your private key (starts by 5…) and you’ll be able to reset your password and PIN.`,

	SET_PIN: `Go to the config panel (Cog symbol on the upper right corner) and click ‘SET PIN’`,

	WHAT_PASSWORD: `Your password is used to encrypt your private key and to sign your actions/transactions inside SimplEOS. The password should be at least 10 characters long. 
		The longer your password, the better.`,

	FORGOT_PASSWORD: `We don’t keep any of your information and as such, we can’t help you recover the password. 
		But don’t worry, you will have to ‘clear local data and logout’ on the configuration panel (cog symbol on the upper right corner), then you will be redirected to the first page to re-import your private keys and set a new password.`,

	//KEYS
	OWNER_PRIVATE: `Your owner key is like your master key. The owner key should be safeguarded and should not be used on any applications, as it can change your active key. 
		Your active key is the key that should be used in applications, as it can be changed by the owner key if you feel it has been compromised.`,

	ANOTHER_KEY: `Yes! Since version 0.6.4 of SimplEOS. 
		Click on the ‘ADD ACCOUNT’ button on the upper left corner and follow the steps.`,

	CHANGE_NAME: `Nops, the name you choose will be the account name forever on the blockchain.`,

	MORE_WALLETS: `Yes. The wallets are just interfaces to the blockchain. You can access your account using any other wallet or block explorer and see that your tokens are there. 
		Different from other previous blockchains, your tokens are associated with your EOS account name.`,

	//TROUBLESHOOTING
	SPINNING: `First, be sure you’ve updated the latest SimplEOS version. Bugs and connection issues might be solved on the new release. Here goes the link to download it: https://github.com/eosrio/simpleos/releases/tag/v0.7.1
		When this happens, that’s usually an endpoint problem. It means the endpoint you are using has a high latency or that the network is congested. When you enter SimplEOS, the wallet automatically chooses the fastest endpoint to you, but sometimes this changes in the middle of the session. If this happens, try connecting to another endpoint. 
		Go to the configurations panel (cog symbol on the upper right corner). There, you will see endpoint options. Just click on one that you think is better or click ‘AUTO’ (this recalculates the latencies and chooses the best endpoint for you)`,

	EXCEED: `First, be sure you’ve updated the latest SimplEOS version. Bugs and connection issues might be solved on the new release. Here goes the link to download it: https://github.com/eosrio/simpleos/releases/tag/v0.7.1
		The CPU resources depends on how much do you stake of your EOS ballance and on the Block Producer that is active during the measuring period. Please check on any block explorer if your consumption of CPU has come to exhaustion. If you've never used a block explorer before, here goes some examples:
		bloks.io
		eosflare.io
		You'll just need to type your account name or your public key to verify the status of your account. Usually, this error message you received is shown when CPU resources are scarce.
		The good news is: CPU recovers within time. However, it's hard to precise when because it's an average of your 3-previous-days consumption. Currently, it recovers after 24 hours. There's another solution for CPU, which requires staking more EOS. It will guarantee you more CPU and NET. If you're in a hurry and you don't want to stake more EOS, there's a website named cpuemergency.com that delegates CPU to your account for basic actions.`,

	NOTHING: `First, be sure you’ve updated the latest SimplEOS version. Bugs and connection issues might have been solved on the new release. Here goes the link to download it: https://github.com/eosrio/simpleos/releases/tag/v0.7.1
		Usually, it's an endpoint issue. Please close SimplEOS, turn off your internet e open the wallet once again. There will be a field where you'll be able to paste a different endpoint. Paste http://api.eosrio.io and connect to the internet once again. 
		After completing the procedure, try to execute your previous action. 
		If it does not work, please contact our team. FYI, some endpoints don’t allow some actions to be executed because of a quick connection interruption.`,

	//REFERENDUM
	VOTING: `Yes! Scrolling down the bar on the left of your SimplEOS’ screen, you’ll see the “Referendum” option. There, any user will be able to read the proposals, filter them if necessary and vote for it just by signing with his/her own password. `,

	APPROVED: `15% of the total tokens in circulation are needed to participate for the proposal to be accepted. 
		There then needs to be more than a 10% difference between the yes and no votes within the proposal that has to be maintained for a total of 30 consecutive days within a 120-day period for the proposal to be met.`,

	CREATE: `Anybody within the EOS network can put forward proposals for the referendum.
		SimplEOS does not offer the option to create a proposal for the moment, but some block explorers might offer this opportunity.
		Bloks has a great solution to it: https://bloks.io/vote/referendums`,

	//ROADMAP
	TWO_FA: `2FA generally means we use a server the store user data, which is not the case ;)`,

	ROADMAP: `Create Proposals on the Referendum: on the next version you will be able to create your own proposals to be voted on referendum on EOS mainnet.
		Vote through Proxys: you will be able to delegate your votes to a proxy that will vote for you. This serves for the block producer election and for votes on referedum.
		Better Integration with DAPPs: interact with your favorite DAPPs in a simple and easy way.
		Mobile Version: our devs are working tirelessly on porting SimplEOS to a mobile version to be released on the mid term future.`,

	//AIRDROPS
	BALANCE: `Yes, SimplEOS swaps the mainnet automatically for all airdrops and displays them on the wallet. But keep in mind that we are not an ERC-20 wallet. Airdrops will only appear on SimplEOS when they are deployed to the EOS mainnet.`,

	NO_AIRDROPS: `Most airdrops at the moment were ERC-20 tokens and happenned at Ethereum. Some you had to register in advance and for some you need to have at least 100 EOS. You have to check with the people doing the airdrop if it should already show on your wallet. Each project has its own policies of distribution.
		You can always also check on https://eospark.com/ if you have received the airdrop.`,

	TOKEN_VALUE: ` Yes, SimplEOS searches for the airdrops prices from different sources and displays the ones that are listed on exchanges and have a value.`,

	TRANSFER: `Yes. On the SEND page, just select the token you want to transfer. But be careful when sending these tokens to exchanges. it’s important to certify that the exchange is accepting deposits of that token and that it is the eos mainnet version of the token.`,

	//UPDATES
	NEW_VERSION: `You can always check the latest version on our github https://github.com/eosrio/simpleos/releases
		The download buttons on our website also are always linked to the latest stable version from github.`,

	UPDATE_BUTTON: `Auto-update was giving some errors due to low permission in windows so we removed that feature. We recommend users to download on the links we will publish on github/EOS Rio website. You don't lose anything by overwriting the installation.`,

	HOW_UPDATE: `Download the latest version from our website/Github, install it and it will override the older version: https://github.com/eosrio/simpleos/releases.`,

	//WHO WE ARE
	WHO: `EOS Rio is an initiative born in Rio de Janeiro, Brazil. Its purpose is to collaborate with people and businesses to create innovative solutions that positively impact society. The team is well diversified, ranging from developers to education professionals. Check more at: www.eosrio.io `,

	REASONS: `1) At EOS Rio we focus on the technical team, and ours is recognized in the community.  Participating on all major testnets efforts gave us deep understanding of the EOSIO and great experience in deploying and operating an EOS Network. EOS Rio is also the founder and key contributor to the Ghostbusters Testnet, an effort to test security approaches to EOS launch and operation that evolved to be EOS CORE, one of the key groups in launching EOS. Igor Llins e Silva, our head of technology, is on the list of EOS Acknowledgments due to its great work on the community testnets.

		2) We also create tools for the community, including other BPs (Node Governor), devs (dev playground) and users (simplEOS). 


		3) Being in Brazil adds geographical diversity to EOS network and help grow the community in all portuguese speaking countries (Brazil, Portugal, Moçambique, Angola and other countries, with 260M+ people).


		4) Our team is a mix of entrepreneurial and technical talent with a common passion for decentralization and the belief in the power of technology to change the world. We bring together a battle tested engineering team with a wide range of experiences needed to run a secure, scalable and reliable Block Producer. We also have a community driven business team to ensure that we will make the EOS ecosystem grow in Brazil, Latin America and all portuguese speaking countries.


		5) Our team is already working on decentralized applications with huge potential social impact partnering up with relevant and innovative social businesses in Brazil. Among our initiatives are partnerships with Banco Maré, a social fintech based in one of the biggest favelas of Rio, to bring financial inclusion and foster entrepreneurship aiming to revert poverties vicious cycle, and also with Polen in order to use blockchain immutability and token economics to incentivize recycling. We are also working with public and private healthcare players in order to develop a blockchain for healthcare data storage empowering citizens to access their complete medical record, having absolute control over who can access the information, including monetization options by sharing anonymized data under explicit consent, with huge impacts on accelerating innovation in healthcare.`,

	//SISTER CHAINS
	WORBLI: `WORBLI provides a massive opportunity for disruption of financial services. The network improves usability and takes us one step closer to mass adoption.
		Bridging the gap between fiat and crypto economies and unlocking access to capital in emerging markets are just two of the many possible applications.
		WORBLI will be the infrastructure for fintech dApps, providing them the necessary conditions to solve many big challenges we face nowadays, such as serving the 2.4 billion unbanked worldwide.
		Here goes a link to understand Worbli more and more: https://medium.com/eos-rio/eos-rio-joins-the-worbli-network-o-f45b65ab0ae5`,

	BOS: `BOS optimizes EOSIO for businesses serving as a “free port” in the blockchain world, enabling BTC, ETH, EOS or other certificate assets to be traded and transferred on the BOS Network.
		BOS will serve as a link to accelerate the development and evolution of IBC (Inter-Blockchain-Communication) that will benefit the entire EOSIO ecosystem.

		Here goes a link for the complete article about BOS: https://medium.com/@eosriobrazil/the-bos-core-mainnet-launches-today-but-what-is-it-ce6d6e5d37a2`,

	JUNGLE: `The Jungle TestNet was initiated by CryptoLions and has served as sandbox for many development teams and EOS Block Producers since the birth of EOSIO.
		It played a cornerstone role in the EOS launch and now as the network matures and grows it provides a reliable test environment for EOSIO based applications.

		Here goes their website: https://jungletestnet.io/`,

	TELOS: `The Telos Blockchain Network is a fork of the open source EOSIO software which was developed and released by Dan Larimer and Block.one in June 2018.
		Like EOS, Telos will be a public platform for decentralized applications with incredible scaling potential owing to its advanced technology and delegated proof-of-stake (DPOS) consensus algorithm. Furthermore, it’s being designed to provide EOS mainnet interoperability. At a very high-level, its governance structure will also be similar and Telos will have the same crucial ability to enact the “intent of Code is Law” concept to help avoid critical failures that led to incidents like the Parity wallet hack in 2017.
		Here goes a link to their Youtube channel to get more information about the sisterchain: https://www.youtube.com/channel/UC1eRSAt81jUf7zM4hsy5S5Q/videos`,

	YES: `EOS Rio team is glad for helping you out! Feel free to contact our support team if any doubt remains and help us continue funding this projects by voting for us as Block Producers :)`,

	SORRY: `Ops, sorry for that =(
		We will do our best to improve the solutions available.`,

	ASK: `\nMeanwhile, please type your question here:`,

	SUPPORT: `The support team will receive your question and will come up with an answer as soon as possible. You gonna receive the answer here! =)`,

	SATISFACTION: "\n\nWas this answer useful?",

	START: `\n\nType /start if you want to talk again!`


};