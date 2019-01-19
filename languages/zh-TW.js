// Copyright (c) 2017-2018 dirigeants. All rights reserved. MIT license.
const { Language, util } = require('klasa');

module.exports = class extends Language {

	constructor(...args) {
		super(...args);
		this.language = {
			DEFAULT: (key) => `${key} 還沒有被翻譯成中文。`,
			DEFAULT_LANGUAGE: '預設語言',
			PREFIX_REMINDER: (prefix = `@${this.client.user.tag}`) => `這個伺服器的指令前缀${Array.isArray(prefix) ?
				`有：${prefix.map(pre => `\`${pre}\``).join(', ')}` :
				`為：\`${prefix}\``
			}`,
			SETTING_GATEWAY_EXPECTS_GUILD: '參數 <Guild> 應為 伺服器 (Guild) 或 伺服器物件 (Guild Object)。',
			SETTING_GATEWAY_VALUE_FOR_KEY_NOEXT: (data, key) => `鍵 ${key} 的值 ${data} 不存在。`,
			SETTING_GATEWAY_VALUE_FOR_KEY_ALREXT: (data, key) => `鍵 ${key} 的值 ${data} 已經存在。`,
			SETTING_GATEWAY_SPECIFY_VALUE: '你必須提供指定值以便追加或過濾。',
			SETTING_GATEWAY_KEY_NOT_ARRAY: (key) => `鍵 ${key} 不是一個陣列。`,
			SETTING_GATEWAY_KEY_NOEXT: (key) => `目前的資料模式沒有鍵 ${key}。`,
			SETTING_GATEWAY_INVALID_TYPE: '類型參數必須為 add 或 remove。',
			SETTING_GATEWAY_INVALID_FILTERED_VALUE: (piece, value) => `${piece.key} 不接受指定值：${value}`,
			RESOLVER_MULTI_TOO_FEW: (name, min = 1) => `給的 ${name} 太少了，至少要 ${min} 個。`,
			RESOLVER_INVALID_BOOL: (name) => `${name} 必須賦予 true 或 false。`,
			RESOLVER_INVALID_CHANNEL: (name) => `${name} 必須賦予一個頻道標籤，或有效的頻道 ID。`,
			RESOLVER_INVALID_CUSTOM: (name, type) => `${name} 必須為一個有效的 ${type}。`,
			RESOLVER_INVALID_DATE: (name) => `${name} 必須賦予一有效日期。`,
			RESOLVER_INVALID_DURATION: (name) => `${name} 必須賦予一有效的時長字串。`,
			RESOLVER_INVALID_EMOJI: (name) => `${name} 必須賦予一自訂的表情符號，或有效的表情符號 ID。`,
			RESOLVER_INVALID_FLOAT: (name) => `${name} 必須賦予一有效數字。`,
			RESOLVER_INVALID_GUILD: (name) => `${name} 必須賦予一有效的伺服器 ID。`,
			RESOLVER_INVALID_INT: (name) => `${name} 必須賦予一整數。`,
			RESOLVER_INVALID_LITERAL: (name) => `你所輸入的選項不符合要求: ${name}`,
			RESOLVER_INVALID_MEMBER: (name) => `${name} 必須賦予一提及字串或有效的使用者 ID。`,
			RESOLVER_INVALID_MESSAGE: (name) => `${name} 必須賦予一有效的訊息 ID。`,
			RESOLVER_INVALID_PIECE: (name, piece) => `${name} 的賦予值必須為有效的 ${piece} 名稱。`,
			RESOLVER_INVALID_REGEX_MATCH: (name, pattern) => `${name} 的賦予值必須遵循正規表達式的模式──\`${pattern}\`。`,
			RESOLVER_INVALID_ROLE: (name) => `${name} 必須賦予一成員組提及字串或成員組 ID。`,
			RESOLVER_INVALID_STRING: (name) => `${name} 必須賦予一有效字串。`,
            RESOLVER_INVALID_TIME: (name) => `${name} 必須賦予一有效的時長字串或日期字串。`,
			RESOLVER_INVALID_URL: (name) => `${name} 必須賦予一有效的 URL 網址。`,
			RESOLVER_INVALID_USER: (name) => `${name} 必須賦予一提及字串或有效的使用者 ID。`,
			RESOLVER_STRING_SUFFIX: ' 個字元',
			RESOLVER_MINMAX_EXACTLY: (name, min, suffix) => `${name} 的賦予值必須為正好 ${min}${suffix}。`,
			RESOLVER_MINMAX_BOTH: (name, min, max, suffix) => `${name} 的賦予值必須落在 ${min} 和 ${max}${suffix}之間。`,
			RESOLVER_MINMAX_MIN: (name, min, suffix) => `${name} 的賦予值必須大於 ${min}${suffix}。`,
			RESOLVER_MINMAX_MAX: (name, max, suffix) => `${name} 的賦予值必須小於 ${max}${suffix}。`,
			REACTIONHANDLER_PROMPT: '你想穿梭到哪個頁面？',
			COMMANDMESSAGE_MISSING: '輸入結尾缺少了一個以上的必要參數。',
			COMMANDMESSAGE_MISSING_REQUIRED: (name) => `${name} 是必要參數。`,
			COMMANDMESSAGE_MISSING_OPTIONALS: (possibles) => `缺少了一個必選參數：(${possibles})`,
			COMMANDMESSAGE_NOMATCH: (possibles) => `你的選項不符合要求：(${possibles})`,
			// eslint-disable-next-line max-len
			MONITOR_COMMAND_HANDLER_REPROMPT: (tag, error, time, abortOptions) => `${tag} | **${error}** | 你有 **${time}** 秒的時間，對提示訊息回覆一有效參數。輸入 **${abortOptions.join('**, **')}** 以便中止提示訊息。`,
			// eslint-disable-next-line max-len
			MONITOR_COMMAND_HANDLER_REPEATING_REPROMPT: (tag, name, time, cancelOptions) => `${tag} | **${name}** 是一個重複的參數 | 你有 **${time}** 秒的時間， 對提示訊息回覆其他的有效參數。輸入 **${cancelOptions.join('**, **')}** 以便結束提示訊息。`,
			MONITOR_COMMAND_HANDLER_ABORTED: '中止',
			MONITOR_COMMAND_HANDLER_POSSIBILITIES: ['中止', '停止'],
			MONITOR_COMMAND_HANDLER_REPEATING_POSSIBLITIES: ['取消'],
			INHIBITOR_COOLDOWN: (remaining) => `你剛剛才用過這個指令。請等 ${remaining} 秒後再試一次。`,
			INHIBITOR_DISABLED_GUILD: '此指令被這個伺服器的管理員停用了。',
			INHIBITOR_DISABLED_GLOBAL: '此指令被 BOT 持有者停用了。',
			INHIBITOR_MISSING_BOT_PERMS: (missing) => `權限不足，缺少：**${missing}**`,
			INHIBITOR_NSFW: '你只能在 NSFW 頻道使用 NSFW 指令。',
			INHIBITOR_PERMISSIONS: '你沒有權限使用這個指令。',
			INHIBITOR_REQUIRED_SETTINGS: (settings) => `此伺服器缺漏 **${settings.join(', ')}** ${settings.length !== 1 ? '等' : ''}的伺服器設定，因此無法執行該指令。`,
			INHIBITOR_RUNIN: (types) => `此指令只能在 ${types} 的頻道中使用。`,
			INHIBITOR_RUNIN_NONE: (name) => `指令 ${name} 並沒有被設定為在任何頻道中執行。`,
            COMMAND_BLACKLIST_DESCRIPTION: '讓機器人對使用者或伺服器封鎖或取消封鎖。',
			COMMAND_BLACKLIST_SUCCESS: (usersAdded, usersRemoved, guildsAdded, guildsRemoved) => [
				usersAdded.length ? `**名單已追加使用者**\n${util.codeBlock('', usersAdded.join(', '))}` : '',
				usersRemoved.length ? `**名單已移除只用者**\n${util.codeBlock('', usersRemoved.join(', '))}` : '',
				guildsAdded.length ? `**名單已加入伺服器**\n${util.codeBlock('', guildsAdded.join(', '))}` : '',
				guildsRemoved.length ? `**名單已移除伺服器**\n${util.codeBlock('', guildsRemoved.join(', '))}` : ''
			].filter(val => val !== '').join('\n'),
			COMMAND_EVAL_DESCRIPTION: '直接運行 Javascript。僅限機器人持有者使用。',
			COMMAND_EVAL_EXTENDEDHELP: [
				'eval 指令直接運行程式碼，拋出的任何錯誤都會被處理。',
				'此外還提供旗標以調整一些細項。輸入 --silent, --depth=number 或 --async 來調整輸出格式。',
				'輸入 --silent 旗標，可以隱藏輸出結果。',
				"輸入 --depth 旗標並賦予一個數字，可以調整 util.inspect 的 depth。",
				'輸入 --async 旗標，可以將程式碼包在一個 async function，然後就能隨心所欲使用 await；若你想要有回傳值，就要有關鍵詞 return 。',
				'輸入 --showHidden 旗標，可以啟用 util.inspect 的 showHidden 項目。',
				'若輸出結果太長，將會包成一個檔案；機器人沒有 ATTACH_FILES 權限的話，則會直接列在 console 中。'
			].join('\n'),
			COMMAND_EVAL_ERROR: (time, output, type) => `**錯誤**:${output}\n**型別**:${type}\n${time}`,
			COMMAND_EVAL_OUTPUT: (time, output, type) => `**輸出**:${output}\n**型別**:${type}\n${time}`,
			COMMAND_EVAL_SENDFILE: (time, type) => `輸出結果太長了... 已將之包在一個檔案內了。\n**型別**:${type}\n${time}`,
			COMMAND_EVAL_SENDCONSOLE: (time, type) => `輸出結果太長了... 已經之直接列在 console 中。\n**型別**:${type}\n${time}`,
			COMMAND_UNLOAD: (type, name) => `✅ 已卸載 ${type}: ${name}`,
			COMMAND_UNLOAD_DESCRIPTION: '卸載 klasa piece。',
			COMMAND_UNLOAD_WARN: '你不會想要卸載那個的，因為屆時你將無法再運行任何指令啟用回去。',
			COMMAND_TRANSFER_ERROR: '❌ 該檔案已傳輸完畢，或是根本從不存在。',
			COMMAND_TRANSFER_SUCCESS: (type, name) => `✅ 已成功傳輸 ${type}: ${name}.`,
			COMMAND_TRANSFER_FAILED: (type, name) => `${type}: ${name} 沒有成功傳輸至客戶端。請查看你的 Console。`,
			COMMAND_TRANSFER_DESCRIPTION: '傳輸一個 Core piece 至相對應的資料夾。',
			COMMAND_RELOAD: (type, name, time) => `✅ 已經重新載入 ${type}: ${name}。（歷時：${time}）`,
			COMMAND_RELOAD_FAILED: (type, name) => `❌ 重新載入失敗 ${type}: ${name}。請查看你的 Console。`,
			COMMAND_RELOAD_ALL: (type, time) => `✅ 已經重新載入所有的 ${type}。（歷時：${time}）`,
			COMMAND_RELOAD_EVERYTHING: (time) => `✅ 已經重新載入所有元件。（歷時：${time}）`,
			COMMAND_RELOAD_DESCRIPTION: '重新載入一個 Klasa piece，或 Klasa 保有的所有 piece。',
			COMMAND_REBOOT: '重啟中...',
			COMMAND_REBOOT_DESCRIPTION: '重啟機器人。',
			COMMAND_LOAD: (time, type, name) => `✅ 已成功載入 ${type}: ${name}。（歷時：${time}）`,
			COMMAND_LOAD_FAIL: '檔案不存在，或是在讀取你檔案時發生了一個錯誤。請查看你的 Console。',
			COMMAND_LOAD_ERROR: (type, name, error) => `❌ 載入失敗 ${type}: ${name}。 原因：${util.codeBlock('js', error)}`,
			COMMAND_LOAD_DESCRIPTION: '藉由機器人直接載入一個 Piece。',
			COMMAND_PING: 'Ping?',
			COMMAND_PING_DESCRIPTION: '對 Discord 作連線品質測試。',
			COMMAND_PINGPONG: (diff, ping) => `Pong! (往返時間：${diff}ms。Heartbeat：${ping}ms。)`,
			COMMAND_INVITE: () => [
				`邀請 ${this.client.user.username} 進入你的 Discord 伺服器：`,
				`<${this.client.invite}>`,
				util.codeBlock('', [
					'以上連結是以能夠執行目前所有指令的前提下，所需的最低權限。',
					'而我瞭解不是所有的伺服器都能夠接受這樣的權限要求，所以你可以安心地取消勾選任何的核選方塊。',
					'就算你試圖執行一個需要專門權限的指令，也會顯示訊息讓你知道。'
				].join(' ')),
				'若您發現了任何臭蟲，歡迎前往 <https://github.com/dirigeants/klasa> 提出問題。'
			],
			COMMAND_INVITE_DESCRIPTION: '顯示機器人的伺服器邀請連結。',
			COMMAND_INFO: [
				"Klasa 是一個「隨插即玩」框架，並以 Discord.js 程式庫為基礎。",
				'大部分的程式碼都是模組化的，也就是說開發者可以依據需求改造 Klasa。',
				'',
				'Klasa 的功能略述如下：',
				'• 🐇💨 快速的載入時間，歸功於 ES2017 支援 (`async`/`await`)',
				'• 🎚🎛 客戶端/伺服器/使用者的個別設定都能加入你自己的欄位。',
				'• 💬 客製化的指令系統，提供參數解析自動化，以及在機器人運行途中載入/重啟指令模組。',
				'• 👀 【Monitors】可以監視、編輯聊天訊息。（例如粗俗用語過濾器、洗版防護等等。）',
				'• ⛔ 【Inhibitors】可以根據你所設定的特定情況，防止指令的運行。（例如權限、封鎖名單等等。）',
				'• 🗄 【Providers】簡化了你所選任一資料庫操作的繁複步驟。',
				'• ✅ 【Finalizers】會在一指令執行成功之後觸發。（用以記錄、數據蒐集、妥善回覆等等。）',
				'• ➕ 【Extendables】的作用是被動地將方法、Getter/Setter、靜態屬性依附延伸既存的 Discord.js 程式庫或 klasa 類別。',
				'• 🌐 【Languages】讓你可以將機器人在地化，翻譯回覆訊息至特定語言。',
				'• ⏲ 【Tasks】可以排定工作，於未來的時間點運行。也可以不斷反覆。',
				'',
				'我們致力於提供一個 100% 可客製化的框架，希望能夠應對多種不同族群的使用者。我們勤於更新，一有空就會修正發現的程式臭蟲。',
				"如果對我們感興趣，歡迎蒞臨 https://klasa.js.org。"
			],
			COMMAND_INFO_DESCRIPTION: '提供關於本機器人的一些資訊。',
			COMMAND_HELP_DESCRIPTION: '針對一項指令顯示說明。',
			COMMAND_HELP_NO_EXTENDED: '沒有詳細說明。',
			COMMAND_HELP_DM: '📥 | 你有權限使用的指令列表，已經私訊給你了。',
			COMMAND_HELP_NODM: '❌ | 你關閉了私人訊息的接收管道，所以我沒辦法把指令列表發送給你。',
			COMMAND_HELP_USAGE: (usage) => `使用方法 :: ${usage}`,
			COMMAND_HELP_EXTENDED: '詳細說明 ::',
			COMMAND_ENABLE: (type, name) => `+ 已成功啟用 ${type}: ${name}`,
			COMMAND_ENABLE_DESCRIPTION: '重新啟用或暫時性啟用一 Command/Inhibitor/Monitor/Finalizer。狀態在重啟時恢復至預設值。',
			COMMAND_DISABLE: (type, name) => `+ 已成功停用 ${type}: ${name}`,
			COMMAND_DISABLE_DESCRIPTION: '重新停用或暫時性停用一 Command/Inhibitor/Monitor/Finalizer。狀態在重啟時恢復至預設值。',
			COMMAND_DISABLE_WARN: '你不會想要停用那個的，因為屆時你將無法再運行任何指令啟用回去。',
			COMMAND_CONF_NOKEY: '你必須指定一個鍵。',
			COMMAND_CONF_NOVALUE: '你必須賦予鍵值。',
			COMMAND_CONF_GUARDED: (name) => `${util.toTitleCase(name)} 無法停用。`,
			COMMAND_CONF_UPDATED: (key, response) => `成功更新了鍵 **${key}**：\`${response}\``,
			COMMAND_CONF_KEY_NOT_ARRAY: '此鍵的型別不是陣列。請改用「重設」動作。',
			COMMAND_CONF_GET_NOEXT: (key) => `鍵 **${key}** 看來並不存在。`,
			COMMAND_CONF_GET: (key, value) => `鍵 **${key}** 的值是：\`${value}\``,
			COMMAND_CONF_RESET: (key, response) => `鍵 **${key}** 已經重設為：\`${response}\``,
			COMMAND_CONF_NOCHANGE: (key) => `鍵 **${key}** 的值本來就是那個值了。`,
			COMMAND_CONF_SERVER_DESCRIPTION: '定義個別伺服器的設定。',
			COMMAND_CONF_SERVER: (key, list) => `**伺服器設定${key}**\n${list}`,
			COMMAND_CONF_USER_DESCRIPTION: '定義個別使用者的設定。',
			COMMAND_CONF_USER: (key, list) => `**使用者設定${key}**\n${list}`,
			COMMAND_STATS: (memUsage, uptime, users, guilds, channels, klasaVersion, discordVersion, processVersion, message) => [
				'= 統計情報 =',
				'',
				`• 記憶體使用　　:: ${memUsage} MB`,
				`• 啟動時間　　　:: ${uptime}`,
				`• 使用者　　　　:: ${users}`,
				`• 伺服器　　　　:: ${guilds}`,
				`• 頻道　　　　　:: ${channels}`,
				`• Ｋｌａｓａ　　:: v${klasaVersion}`,
				`• Ｄｉｓｃｏｒｄ:: v${discordVersion}`,
				`• Ｎｏｄｅ．ｊｓ:: ${processVersion}`,
				`• Ｓｈａｒｄ　　:: ${(message.guild ? message.guild.shardID : 0) + 1} / ${this.client.options.totalShardCount}`
			],
			COMMAND_STATS_DESCRIPTION: '提供一些關於機器人的細節和統計數據。Provides some details about the bot and stats.',
			MESSAGE_PROMPT_TIMEOUT: '提示訊息已逾時。'
		};
	}

	async init() {
		await super.init();
	}

};
