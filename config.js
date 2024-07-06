const fs = require('fs-extra')
if (fs.existsSync('.env')) require('dotenv').config({ path: __dirname+'/.env' })


//═══════[Required Variables]════════\\
global.audio= "" ;  
global.video= "" ;
global.port =process.env.PORT
global.appUrl=process.env.APP_URL || ""                       // put your app url here,
global.email ="saimsamsun789@gmail.com"
global.location="Lahore,Pakistan."


global.mongodb= process.env.MONGODB_URI || ""
global.allowJids= process.env.ALLOW_JID || "null" 
global.blockJids= process.env.BLOCK_JID || "null"
global.DATABASE_URL = process.env.DATABASE_URL || ""

global.timezone= process.env.TZ || process.env.TIME_ZONE || "Asia/Karachi";
global.github=process.env.GITHUB|| "https://github.com/SuhailTechInfo/Suhail-Md";
global.gurl  =process.env.GURL  || "https://whatsapp.com/channel/0029Va9thusJP20yWxQ6N643";
global.website=process.env.GURL || "https://whatsapp.com/channel/0029Va9thusJP20yWxQ6N643" ; 
global.THUMB_IMAGE = process.env.THUMB_IMAGE || process.env.IMAGE || "https://github.com/SuhailTechInfo/Suhail-Md/blob/main/lib/assets/suhail.jpg?raw=true" ; // SET LOGO FOR IMAGE 
global.caption = process.env.CAPTION || global.caption || "ᴘᴏᴡᴇʀᴇᴅ ʙʏ sᴜʜᴀɪʟ²²¹-ᴍᴅ" 


global.devs = "923184474176" // Developer Contact
global.sudo = process.env.SUDO ? process.env.SUDO.replace(/[\s+]/g, '') : "null";
global.owner= process.env.OWNER_NUMBER ? process.env.OWNER_NUMBER.replace(/[\s+]/g, '') : "923184474176";




//========================= [ BOT SETTINGS ] ======8===================\\
global.style = process.env.STYLE   || Math.floor(Math.random()*6) || '0'  // put '1' to "5" here to check bot styles
global.flush = process.env.FLUSH   || "false"; // Make it "true" if bot not responed
global.gdbye = process.env.GOODBYE || process.env.CAN_GOODBYE || "false"; 
global.wlcm  = process.env.WELCOME || process.env.CAN_WELCOME || "false";  // Make it "false" for disable WELCOME 

global.warncount = process.env.WARN_COUNT || 3
global.disablepm = process.env.DISABLE_PM || "false"
global.disablegroup = process.env.DISABLE_GROUPS || "false", // disable bot in groups when public mode

global.MsgsInLog = process.env.MSGS_IN_LOG|| "false" // "true"  to see messages , "log" to show logs , "false" to hide logs messages
global.userImages= process.env.USER_IMAGES || "text" // "text" // set Image/video urls here
global.waPresence= process.env.WAPRESENCE ||  "null" ; // 'unavailable' | 'available' | 'composing' | 'recording' | 'paused'


//========================= [ AUTO READ MSGS & CMDS ] =========================\\
global.readcmds = process.env.READ_COMMAND || "false"
global.readmessage = process.env.READ_MESSAGE || "false"
global.readmessagefrom = process.env.READ_MESSAGE_FROM || "null,923xxxxxxxx";


//========================= [ AUTO SAVE & READ STATUS ] =========================\\
global.read_status = process.env.AUTO_READ_STATUS || "false"
global.save_status = process.env.AUTO_SAVE_STATUS || "false"
global.save_status_from =  process.env.SAVE_STATUS_FROM  || "null,923xxxxxxxx";
global.read_status_from =  process.env.READ_STATUS_FROM  ||  "923184474176,923xxxxxxxx";

global.api_smd = "https://api-smd.onrender.com" //  || "https://api-smd-1.vercel.app" // expires
global.scan = "https://suhail-md-vtsf.onrender.com";


global.SESSION_ID = process.env.SESSION_ID ||  "SUHAIL_09_56_07_06_ewogICJjcmVkcy5qc29uIjogIntcbiAgXCJub2lzZUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTQ0LFxuICAgICAgICAxODgsXG4gICAgICAgIDI0OSxcbiAgICAgICAgMjM2LFxuICAgICAgICAxMzgsXG4gICAgICAgIDEyNCxcbiAgICAgICAgMjE2LFxuICAgICAgICAxMjIsXG4gICAgICAgIDI0MyxcbiAgICAgICAgMjI3LFxuICAgICAgICAyNTQsXG4gICAgICAgIDEwMyxcbiAgICAgICAgMTksXG4gICAgICAgIDE1NyxcbiAgICAgICAgNSxcbiAgICAgICAgMzMsXG4gICAgICAgIDgwLFxuICAgICAgICAxMjYsXG4gICAgICAgIDE5MixcbiAgICAgICAgNzMsXG4gICAgICAgIDIzOSxcbiAgICAgICAgMTQzLFxuICAgICAgICAyNTQsXG4gICAgICAgIDIzNSxcbiAgICAgICAgMTk2LFxuICAgICAgICA5MixcbiAgICAgICAgMjE0LFxuICAgICAgICAxNTcsXG4gICAgICAgIDExOCxcbiAgICAgICAgNjUsXG4gICAgICAgIDE1LFxuICAgICAgICAxMTBcbiAgICAgIF1cbiAgICB9LFxuICAgIFwicHVibGljXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTQ3LFxuICAgICAgICA4OCxcbiAgICAgICAgNixcbiAgICAgICAgMTg3LFxuICAgICAgICA3NyxcbiAgICAgICAgNDIsXG4gICAgICAgIDI1MCxcbiAgICAgICAgMjUzLFxuICAgICAgICAyNDEsXG4gICAgICAgIDE2NSxcbiAgICAgICAgNzIsXG4gICAgICAgIDQ1LFxuICAgICAgICAyNTIsXG4gICAgICAgIDE5OSxcbiAgICAgICAgMjUyLFxuICAgICAgICAxMzUsXG4gICAgICAgIDIzNixcbiAgICAgICAgMjUsXG4gICAgICAgIDE1NCxcbiAgICAgICAgMjQ1LFxuICAgICAgICAxOTYsXG4gICAgICAgIDEzMCxcbiAgICAgICAgMjM0LFxuICAgICAgICAxNjEsXG4gICAgICAgIDg3LFxuICAgICAgICAxNTQsXG4gICAgICAgIDYwLFxuICAgICAgICA2NSxcbiAgICAgICAgNzMsXG4gICAgICAgIDI0NixcbiAgICAgICAgOTEsXG4gICAgICAgIDQ4XG4gICAgICBdXG4gICAgfVxuICB9LFxuICBcInBhaXJpbmdFcGhlbWVyYWxLZXlQYWlyXCI6IHtcbiAgICBcInByaXZhdGVcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICA5NixcbiAgICAgICAgNjgsXG4gICAgICAgIDE3NSxcbiAgICAgICAgMTA5LFxuICAgICAgICAxMCxcbiAgICAgICAgMTUzLFxuICAgICAgICAxMzYsXG4gICAgICAgIDI1MSxcbiAgICAgICAgMTE0LFxuICAgICAgICA0MyxcbiAgICAgICAgMjUyLFxuICAgICAgICA2OSxcbiAgICAgICAgMTA4LFxuICAgICAgICAxMTksXG4gICAgICAgIDEwOCxcbiAgICAgICAgODIsXG4gICAgICAgIDIsXG4gICAgICAgIDIyNSxcbiAgICAgICAgMTQsXG4gICAgICAgIDIzMixcbiAgICAgICAgNDAsXG4gICAgICAgIDI2LFxuICAgICAgICA4NixcbiAgICAgICAgMTU5LFxuICAgICAgICAxOSxcbiAgICAgICAgMTY4LFxuICAgICAgICAxNzksXG4gICAgICAgIDE2MCxcbiAgICAgICAgMjQ5LFxuICAgICAgICAxNzMsXG4gICAgICAgIDQ1LFxuICAgICAgICA4M1xuICAgICAgXVxuICAgIH0sXG4gICAgXCJwdWJsaWNcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAyMDQsXG4gICAgICAgIDI1MixcbiAgICAgICAgMTIxLFxuICAgICAgICAxMzEsXG4gICAgICAgIDc4LFxuICAgICAgICA5OCxcbiAgICAgICAgMjUwLFxuICAgICAgICA2NSxcbiAgICAgICAgMjIwLFxuICAgICAgICAxNjksXG4gICAgICAgIDQ5LFxuICAgICAgICAxNjUsXG4gICAgICAgIDE3MSxcbiAgICAgICAgMTM0LFxuICAgICAgICA1OSxcbiAgICAgICAgMTY2LFxuICAgICAgICAyMzgsXG4gICAgICAgIDEyNyxcbiAgICAgICAgMTEyLFxuICAgICAgICAxMzAsXG4gICAgICAgIDE0NSxcbiAgICAgICAgMjA2LFxuICAgICAgICAyMyxcbiAgICAgICAgMTMwLFxuICAgICAgICAxMDcsXG4gICAgICAgIDI0OCxcbiAgICAgICAgNzAsXG4gICAgICAgIDExNCxcbiAgICAgICAgMTgxLFxuICAgICAgICAxNjIsXG4gICAgICAgIDE4OCxcbiAgICAgICAgMTA3XG4gICAgICBdXG4gICAgfVxuICB9LFxuICBcInNpZ25lZElkZW50aXR5S2V5XCI6IHtcbiAgICBcInByaXZhdGVcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAxNjgsXG4gICAgICAgIDgwLFxuICAgICAgICAxOCxcbiAgICAgICAgMTgwLFxuICAgICAgICA4OSxcbiAgICAgICAgMzEsXG4gICAgICAgIDI0NixcbiAgICAgICAgMTIxLFxuICAgICAgICA1NixcbiAgICAgICAgMjMsXG4gICAgICAgIDE4NSxcbiAgICAgICAgMTUzLFxuICAgICAgICAyNDYsXG4gICAgICAgIDE2LFxuICAgICAgICA2MyxcbiAgICAgICAgMzMsXG4gICAgICAgIDk0LFxuICAgICAgICAxNDIsXG4gICAgICAgIDE2LFxuICAgICAgICA1NixcbiAgICAgICAgNTksXG4gICAgICAgIDQzLFxuICAgICAgICAyNyxcbiAgICAgICAgMTYxLFxuICAgICAgICAxMTMsXG4gICAgICAgIDUzLFxuICAgICAgICAxMTgsXG4gICAgICAgIDIxNyxcbiAgICAgICAgNzksXG4gICAgICAgIDE4NixcbiAgICAgICAgMTE4LFxuICAgICAgICA5N1xuICAgICAgXVxuICAgIH0sXG4gICAgXCJwdWJsaWNcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAyNDYsXG4gICAgICAgIDEsXG4gICAgICAgIDM5LFxuICAgICAgICA1MixcbiAgICAgICAgMjAsXG4gICAgICAgIDE5MCxcbiAgICAgICAgMzUsXG4gICAgICAgIDE1MyxcbiAgICAgICAgMTQ0LFxuICAgICAgICAxNTMsXG4gICAgICAgIDExNCxcbiAgICAgICAgMTcsXG4gICAgICAgIDIyNCxcbiAgICAgICAgNjIsXG4gICAgICAgIDExNixcbiAgICAgICAgOTksXG4gICAgICAgIDEzNCxcbiAgICAgICAgMTU2LFxuICAgICAgICA4NyxcbiAgICAgICAgMjA4LFxuICAgICAgICAxMjAsXG4gICAgICAgIDE1MyxcbiAgICAgICAgMjUzLFxuICAgICAgICAxMTQsXG4gICAgICAgIDI0OCxcbiAgICAgICAgMTEwLFxuICAgICAgICAyMDcsXG4gICAgICAgIDIxOCxcbiAgICAgICAgMTEyLFxuICAgICAgICAxMjksXG4gICAgICAgIDEyNCxcbiAgICAgICAgNVxuICAgICAgXVxuICAgIH1cbiAgfSxcbiAgXCJzaWduZWRQcmVLZXlcIjoge1xuICAgIFwia2V5UGFpclwiOiB7XG4gICAgICBcInByaXZhdGVcIjoge1xuICAgICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgICAxMjAsXG4gICAgICAgICAgMTkwLFxuICAgICAgICAgIDIwNSxcbiAgICAgICAgICAzLFxuICAgICAgICAgIDIsXG4gICAgICAgICAgMTA3LFxuICAgICAgICAgIDk0LFxuICAgICAgICAgIDEyOCxcbiAgICAgICAgICAxMjYsXG4gICAgICAgICAgMTkxLFxuICAgICAgICAgIDE2NyxcbiAgICAgICAgICA4MyxcbiAgICAgICAgICA4OSxcbiAgICAgICAgICA5MSxcbiAgICAgICAgICA2NSxcbiAgICAgICAgICAxMixcbiAgICAgICAgICA4NyxcbiAgICAgICAgICAzLFxuICAgICAgICAgIDE1LFxuICAgICAgICAgIDkwLFxuICAgICAgICAgIDE4MyxcbiAgICAgICAgICAxNzUsXG4gICAgICAgICAgMTU1LFxuICAgICAgICAgIDEyNSxcbiAgICAgICAgICAyMzcsXG4gICAgICAgICAgMTk2LFxuICAgICAgICAgIDgwLFxuICAgICAgICAgIDg3LFxuICAgICAgICAgIDE2NSxcbiAgICAgICAgICAxNDksXG4gICAgICAgICAgMjYsXG4gICAgICAgICAgNzBcbiAgICAgICAgXVxuICAgICAgfSxcbiAgICAgIFwicHVibGljXCI6IHtcbiAgICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgICAgMzYsXG4gICAgICAgICAgMTA0LFxuICAgICAgICAgIDE2NyxcbiAgICAgICAgICAyLFxuICAgICAgICAgIDE0MSxcbiAgICAgICAgICAxODgsXG4gICAgICAgICAgMjQzLFxuICAgICAgICAgIDU2LFxuICAgICAgICAgIDEzNyxcbiAgICAgICAgICAxNTUsXG4gICAgICAgICAgNDEsXG4gICAgICAgICAgMjAzLFxuICAgICAgICAgIDIwNSxcbiAgICAgICAgICAxMDYsXG4gICAgICAgICAgNDcsXG4gICAgICAgICAgODIsXG4gICAgICAgICAgOTYsXG4gICAgICAgICAgMTYsXG4gICAgICAgICAgMTI0LFxuICAgICAgICAgIDk3LFxuICAgICAgICAgIDExNyxcbiAgICAgICAgICAxNzgsXG4gICAgICAgICAgMTcwLFxuICAgICAgICAgIDE5NyxcbiAgICAgICAgICAyMzMsXG4gICAgICAgICAgMjI0LFxuICAgICAgICAgIDEyMyxcbiAgICAgICAgICA1MSxcbiAgICAgICAgICAxNTMsXG4gICAgICAgICAgMTc4LFxuICAgICAgICAgIDIyMyxcbiAgICAgICAgICA0N1xuICAgICAgICBdXG4gICAgICB9XG4gICAgfSxcbiAgICBcInNpZ25hdHVyZVwiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDIyNixcbiAgICAgICAgMTMwLFxuICAgICAgICAxNjIsXG4gICAgICAgIDIyNyxcbiAgICAgICAgMjAwLFxuICAgICAgICAxODUsXG4gICAgICAgIDE1OSxcbiAgICAgICAgOTIsXG4gICAgICAgIDExMixcbiAgICAgICAgMTMsXG4gICAgICAgIDE5MSxcbiAgICAgICAgNjksXG4gICAgICAgIDYzLFxuICAgICAgICA0MSxcbiAgICAgICAgNzcsXG4gICAgICAgIDE2NCxcbiAgICAgICAgNDEsXG4gICAgICAgIDg0LFxuICAgICAgICAyMjEsXG4gICAgICAgIDE2MixcbiAgICAgICAgMjUyLFxuICAgICAgICAxODAsXG4gICAgICAgIDQ4LFxuICAgICAgICA4OSxcbiAgICAgICAgMTA5LFxuICAgICAgICAxNzIsXG4gICAgICAgIDQ1LFxuICAgICAgICAxOTcsXG4gICAgICAgIDIyNCxcbiAgICAgICAgODMsXG4gICAgICAgIDE4NCxcbiAgICAgICAgMTI2LFxuICAgICAgICA2NCxcbiAgICAgICAgNTQsXG4gICAgICAgIDE5OSxcbiAgICAgICAgMjI5LFxuICAgICAgICAxMjAsXG4gICAgICAgIDE4NCxcbiAgICAgICAgNjMsXG4gICAgICAgIDE5OCxcbiAgICAgICAgOTUsXG4gICAgICAgIDQyLFxuICAgICAgICAyMjksXG4gICAgICAgIDMzLFxuICAgICAgICAwLFxuICAgICAgICAyNyxcbiAgICAgICAgNzQsXG4gICAgICAgIDQ4LFxuICAgICAgICAyNDgsXG4gICAgICAgIDc1LFxuICAgICAgICAyMTMsXG4gICAgICAgIDE1NyxcbiAgICAgICAgMTYsXG4gICAgICAgIDE1NixcbiAgICAgICAgMTU3LFxuICAgICAgICAxMDYsXG4gICAgICAgIDksXG4gICAgICAgIDExNSxcbiAgICAgICAgMTExLFxuICAgICAgICAxNDMsXG4gICAgICAgIDE1MSxcbiAgICAgICAgMjE0LFxuICAgICAgICAxMixcbiAgICAgICAgMTMwXG4gICAgICBdXG4gICAgfSxcbiAgICBcImtleUlkXCI6IDFcbiAgfSxcbiAgXCJyZWdpc3RyYXRpb25JZFwiOiAxNjcsXG4gIFwiYWR2U2VjcmV0S2V5XCI6IFwiTG5ZOVZKWUFsZ0tEcmVmK2p0Mm5wanU5WlNZWisrdTVXNWt1bStOMnpYdz1cIixcbiAgXCJwcm9jZXNzZWRIaXN0b3J5TWVzc2FnZXNcIjogW1xuICAgIHtcbiAgICAgIFwia2V5XCI6IHtcbiAgICAgICAgXCJyZW1vdGVKaWRcIjogXCIyNTQ3Mjg1MTE3NDRAcy53aGF0c2FwcC5uZXRcIixcbiAgICAgICAgXCJmcm9tTWVcIjogdHJ1ZSxcbiAgICAgICAgXCJpZFwiOiBcIkI4NkVGMzQ1QTk2MDI5NUVGODYzMzkyQTY1RDBDNDREXCJcbiAgICAgIH0sXG4gICAgICBcIm1lc3NhZ2VUaW1lc3RhbXBcIjogMTcyMDI1OTc2M1xuICAgIH1cbiAgXSxcbiAgXCJuZXh0UHJlS2V5SWRcIjogMzEsXG4gIFwiZmlyc3RVbnVwbG9hZGVkUHJlS2V5SWRcIjogMzEsXG4gIFwiYWNjb3VudFN5bmNDb3VudGVyXCI6IDAsXG4gIFwiYWNjb3VudFNldHRpbmdzXCI6IHtcbiAgICBcInVuYXJjaGl2ZUNoYXRzXCI6IGZhbHNlXG4gIH0sXG4gIFwiZGV2aWNlSWRcIjogXCJrM2pBbDZTWVJhMkY3MmtsdGJGZHBRXCIsXG4gIFwicGhvbmVJZFwiOiBcIjg1Y2UxOGYzLWNmYjYtNGYzOS05MDUzLTNlNzM3NzNjMzJhMlwiLFxuICBcImlkZW50aXR5SWRcIjoge1xuICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgIFwiZGF0YVwiOiBbXG4gICAgICAxNjcsXG4gICAgICA1MCxcbiAgICAgIDIzMCxcbiAgICAgIDI0OSxcbiAgICAgIDUwLFxuICAgICAgMTY4LFxuICAgICAgMTkyLFxuICAgICAgMjI4LFxuICAgICAgMTMzLFxuICAgICAgMjE1LFxuICAgICAgMTg2LFxuICAgICAgMTg3LFxuICAgICAgMTcxLFxuICAgICAgNTEsXG4gICAgICAxNzAsXG4gICAgICA3NyxcbiAgICAgIDYyLFxuICAgICAgMTIxLFxuICAgICAgMTM2LFxuICAgICAgMjhcbiAgICBdXG4gIH0sXG4gIFwicmVnaXN0ZXJlZFwiOiB0cnVlLFxuICBcImJhY2t1cFRva2VuXCI6IHtcbiAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICBcImRhdGFcIjogW1xuICAgICAgMTgwLFxuICAgICAgMTczLFxuICAgICAgOSxcbiAgICAgIDQ1LFxuICAgICAgMTYzLFxuICAgICAgMTM2LFxuICAgICAgMTkwLFxuICAgICAgMTQ4LFxuICAgICAgMjU0LFxuICAgICAgMTMyLFxuICAgICAgMjUxLFxuICAgICAgMjUyLFxuICAgICAgMjE4LFxuICAgICAgOTQsXG4gICAgICA4NSxcbiAgICAgIDc5LFxuICAgICAgMTQzLFxuICAgICAgMTI1LFxuICAgICAgNzQsXG4gICAgICA2MlxuICAgIF1cbiAgfSxcbiAgXCJyZWdpc3RyYXRpb25cIjoge30sXG4gIFwicGFpcmluZ0NvZGVcIjogXCJSVjRBQTdNQlwiLFxuICBcIm1lXCI6IHtcbiAgICBcImlkXCI6IFwiMjU0NzI4NTExNzQ0OjE0QHMud2hhdHNhcHAubmV0XCIsXG4gICAgXCJsaWRcIjogXCI4NjIwMDQxMzA4NTkwMDoxNEBsaWRcIlxuICB9LFxuICBcImFjY291bnRcIjoge1xuICAgIFwiZGV0YWlsc1wiOiBcIkNQcmNwTFlIRUttcHBMUUdHQUlnQUNnQVwiLFxuICAgIFwiYWNjb3VudFNpZ25hdHVyZUtleVwiOiBcIlNtR0xhUzJYV1VMNVVHT3RseWRwS2dPR3pBUi9INkR4VDhIcXI3dEJ5U009XCIsXG4gICAgXCJhY2NvdW50U2lnbmF0dXJlXCI6IFwiYlJwSXNScmNjdlpPNlFOM0ZTR3lvb0NZS0U1TDh6U2tVVXZCWlNNckRPYmovb242RlkzMG5GOHBKZ241cks5VnpnYVlHakxPdXlMTFg2QTh0c1dvQUE9PVwiLFxuICAgIFwiZGV2aWNlU2lnbmF0dXJlXCI6IFwiVHNReHJkSzBLS1NUa3FTaGV1T1VVUEtDZjZwWWc4b2V5cnkxWmNzWTQ3VVF2b0RmMGxoUXp3ZitDU01WVm1tbmRyeHJRa0Y1Y3VKSnRLdXZRT1kvZ1E9PVwiXG4gIH0sXG4gIFwic2lnbmFsSWRlbnRpdGllc1wiOiBbXG4gICAge1xuICAgICAgXCJpZGVudGlmaWVyXCI6IHtcbiAgICAgICAgXCJuYW1lXCI6IFwiMjU0NzI4NTExNzQ0OjE0QHMud2hhdHNhcHAubmV0XCIsXG4gICAgICAgIFwiZGV2aWNlSWRcIjogMFxuICAgICAgfSxcbiAgICAgIFwiaWRlbnRpZmllcktleVwiOiB7XG4gICAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgICBcImRhdGFcIjogW1xuICAgICAgICAgIDUsXG4gICAgICAgICAgNzQsXG4gICAgICAgICAgOTcsXG4gICAgICAgICAgMTM5LFxuICAgICAgICAgIDEwNSxcbiAgICAgICAgICA0NSxcbiAgICAgICAgICAxNTEsXG4gICAgICAgICAgODksXG4gICAgICAgICAgNjYsXG4gICAgICAgICAgMjQ5LFxuICAgICAgICAgIDgwLFxuICAgICAgICAgIDk5LFxuICAgICAgICAgIDE3MyxcbiAgICAgICAgICAxNTEsXG4gICAgICAgICAgMzksXG4gICAgICAgICAgMTA1LFxuICAgICAgICAgIDQyLFxuICAgICAgICAgIDMsXG4gICAgICAgICAgMTM0LFxuICAgICAgICAgIDIwNCxcbiAgICAgICAgICA0LFxuICAgICAgICAgIDEyNyxcbiAgICAgICAgICAzMSxcbiAgICAgICAgICAxNjAsXG4gICAgICAgICAgMjQxLFxuICAgICAgICAgIDc5LFxuICAgICAgICAgIDE5MyxcbiAgICAgICAgICAyMzQsXG4gICAgICAgICAgMTc1LFxuICAgICAgICAgIDE4NyxcbiAgICAgICAgICA2NSxcbiAgICAgICAgICAyMDEsXG4gICAgICAgICAgMzVcbiAgICAgICAgXVxuICAgICAgfVxuICAgIH1cbiAgXSxcbiAgXCJwbGF0Zm9ybVwiOiBcImFuZHJvaWRcIixcbiAgXCJsYXN0QWNjb3VudFN5bmNUaW1lc3RhbXBcIjogMTcyMDI1OTc1OCxcbiAgXCJteUFwcFN0YXRlS2V5SWRcIjogXCJBQUFBQUlZeVwiXG59IiwKICAiYXBwLXN0YXRlLXN5bmMta2V5LUFBQUFBSVl5Lmpzb24iOiAie1wia2V5RGF0YVwiOlwiY1NDOHJJTFBwWlZaa2x6WGVzWUNveFVYdmdwNk5QelNYb0ttOXlxbXI1az1cIixcImZpbmdlcnByaW50XCI6e1wicmF3SWRcIjoxOTkyODk2MTIxLFwiY3VycmVudEluZGV4XCI6MSxcImRldmljZUluZGV4ZXNcIjpbMCwxXX0sXCJ0aW1lc3RhbXBcIjpcIjBcIn0iCn0="  // PUT your SESSION_ID 


module.exports = {

  menu: process.env.MENU || "", /**  Available @MENU @Schemes 1: Aztec_Md, 2: A17_Md, 3: Suhail-Md Default ---------- If Not Choose then it Randomely Pic One Of Them Each time **/

  HANDLERS: process.env.PREFIX  || ".",
  BRANCH  : process.env.BRANCH  || "main",
  VERSION : process.env.VERSION || "1.3.8",
  caption : global.caption || "" , // ```『 ᴘᴏᴡᴇʀᴇᴅ ʙʏ sᴜʜᴀɪʟ²²¹-ᴍᴅ 』```", //*『sᴜʙsᴄʀɪʙᴇ • sᴜʜᴀɪʟ ᴛᴇᴄʜ』*\n youtube.com/@suhailtechinfo0"),
 
  author : process.env.PACK_AUTHER|| "",
  packname: process.env.PACK_NAME || "",
  botname : process.env.BOT_NAME  || "sᴜʜᴀɪʟ-ᴍᴅ",
  ownername:process.env.OWNER_NAME|| "Suhail",


  errorChat : process.env.ERROR_CHAT || "",
  KOYEB_API : process.env.KOYEB_API  || "false",

  REMOVE_BG_KEY : process.env.REMOVE_BG_KEY  || "",
  OPENAI_API_KEY: process.env.OPENAI_API_KEY || "",
  HEROKU_API_KEY: process.env.HEROKU_API_KEY || "",
  HEROKU_APP_NAME:process.env.HEROKU_APP_NAME|| "",
  antilink_values:process.env.ANTILINK_VALUES|| "all",
  HEROKU: process.env.HEROKU_APP_NAME && process.env.HEROKU_API_KEY,


  WORKTYPE: process.env.WORKTYPE || process.env.MODE|| "private",
  LANG: ( process.env.THEME ||  "SUHAIL"  ).toUpperCase(),



};



global.ELEVENLAB_API_KEY = process.env.ELEVENLAB_API_KEY || "";
global.aitts_Voice_Id = process.env.AITTS_ID|| "37";





















global.rank = "updated"
global.isMongodb = false; 
let file = require.resolve(__filename)
fs.watchFile(file, () => { fs.unwatchFile(file);console.log(`Update'${__filename}'`);delete require.cache[file];	require(file); })
 

// ========================= [ Disables in V.1.2.8 ] ===============================\\  
  //style : process.env.STYLE || "2",  // put '1' & "2" here to check bot styles
  //readmessage:process.env.READ_MESSAGE|| "false",
  //warncount: process.env.WARN_COUNT || 3,
  //userImages:process.env.USER_IMAGES|| "text",  // SET IMAGE AND VIDEO URL FOR BOT MENUS 
  //disablepm: process.env.DISABLE_PM || "false",
  //MsgsInLog: process.env.MSGS_IN_LOG|| "false", // "true"  to see messages , "log" to open logs , "false" to hide logs messages
  //readcmds:process.env.READ_COMMANDS|| "false", 
  //alwaysonline:process.env.WAPRESENCE|| "unavailable", // 'unavailable' | 'online' | 'composing' | 'recording' | 'paused'
  //read_status: process.env.AUTO_READ_STATUS || "false",
  //save_status: process.env.AUTO_SAVE_STATUS || "false",
  //aitts_Voice_Id : process.env.AITTS_ID || "37",
  //ELEVENLAB_API_KEY: process.env.ELEVENLAB_API_KEY  || "",
