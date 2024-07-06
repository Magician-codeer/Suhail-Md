const fs = require('fs-extra')
if (fs.existsSync('.env')) require('dotenv').config({ path: __dirname+'/.env' })


//═══════[Required Variables]════════\\
global.audio= "" ;  
global.video= "" ;
global.port =process.env.PORT
global.appUrl=process.env.APP_URL || ""                       // put your app url here,
global.email ="kennydegiant@gmail.com"
global.location="Eldoret,Kenya."


global.mongodb= process.env.MONGODB_URI || ""
global.allowJids= process.env.ALLOW_JID || "null" 
global.blockJids= process.env.BLOCK_JID || "null"
global.DATABASE_URL = process.env.DATABASE_URL || ""

global.timezone= process.env.TZ || process.env.TIME_ZONE || "EAT";
global.github=process.env.GITHUB|| "254728511744";
global.gurl  =process.env.GURL  || "kennydegiant@gmail.com";
global.website=process.env.GURL || "254728511744" ; 
global.THUMB_IMAGE = process.env.THUMB_IMAGE || process.env.IMAGE || "https://github.com/SuhailTechInfo/Suhail-Md/blob/main/lib/assets/suhail.jpg?raw=true" ; // SET LOGO FOR IMAGE 
global.caption = process.env.CAPTION || global.caption || "ᴘᴏᴡᴇʀᴇᴅ ʙʏ sᴜʜᴀɪʟ²²¹-ᴍᴅ" 


global.devs = "254728511744" // Developer Contact
global.sudo = process.env.SUDO ? process.env.SUDO.replace(/[\s+]/g, '') : "null";
global.owner= process.env.OWNER_NUMBER ? process.env.OWNER_NUMBER.replace(/[\s+]/g, '') : "254728511744";




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


global.SESSION_ID = process.env.SESSION_ID ||  "SUHAIL_18_20_07_06_ewogICJjcmVkcy5qc29uIjogIntcbiAgXCJub2lzZUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTQ0LFxuICAgICAgICAyNTEsXG4gICAgICAgIDM4LFxuICAgICAgICAxNDUsXG4gICAgICAgIDE4NyxcbiAgICAgICAgMjMsXG4gICAgICAgIDEyMixcbiAgICAgICAgMTExLFxuICAgICAgICAyMzMsXG4gICAgICAgIDEwMixcbiAgICAgICAgMjA3LFxuICAgICAgICAxNTgsXG4gICAgICAgIDE4NyxcbiAgICAgICAgMjM3LFxuICAgICAgICAxNzYsXG4gICAgICAgIDg2LFxuICAgICAgICAxNzksXG4gICAgICAgIDE1LFxuICAgICAgICAxNzIsXG4gICAgICAgIDczLFxuICAgICAgICAxMzQsXG4gICAgICAgIDc4LFxuICAgICAgICAxNTUsXG4gICAgICAgIDc4LFxuICAgICAgICAxOTAsXG4gICAgICAgIDE2MSxcbiAgICAgICAgNDYsXG4gICAgICAgIDI0NixcbiAgICAgICAgMTQwLFxuICAgICAgICAyNDUsXG4gICAgICAgIDE0NCxcbiAgICAgICAgNjVcbiAgICAgIF1cbiAgICB9LFxuICAgIFwicHVibGljXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTAzLFxuICAgICAgICAxODMsXG4gICAgICAgIDcxLFxuICAgICAgICAxNzMsXG4gICAgICAgIDExMyxcbiAgICAgICAgMjU1LFxuICAgICAgICA5OCxcbiAgICAgICAgMTQwLFxuICAgICAgICAxNjAsXG4gICAgICAgIDEyNixcbiAgICAgICAgMTgzLFxuICAgICAgICAxNzUsXG4gICAgICAgIDEyMSxcbiAgICAgICAgMTM2LFxuICAgICAgICAxNDIsXG4gICAgICAgIDIyMixcbiAgICAgICAgNSxcbiAgICAgICAgMTYxLFxuICAgICAgICAxNDEsXG4gICAgICAgIDIxOSxcbiAgICAgICAgMyxcbiAgICAgICAgNDQsXG4gICAgICAgIDEyLFxuICAgICAgICAxNjUsXG4gICAgICAgIDIxLFxuICAgICAgICAyMjQsXG4gICAgICAgIDMzLFxuICAgICAgICAxNjksXG4gICAgICAgIDcsXG4gICAgICAgIDU1LFxuICAgICAgICAxNTQsXG4gICAgICAgIDI4XG4gICAgICBdXG4gICAgfVxuICB9LFxuICBcInBhaXJpbmdFcGhlbWVyYWxLZXlQYWlyXCI6IHtcbiAgICBcInByaXZhdGVcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICA4MCxcbiAgICAgICAgMTAzLFxuICAgICAgICAxNjEsXG4gICAgICAgIDQ3LFxuICAgICAgICAxNDAsXG4gICAgICAgIDIyNCxcbiAgICAgICAgMTU4LFxuICAgICAgICAxNzcsXG4gICAgICAgIDEyMyxcbiAgICAgICAgMTE1LFxuICAgICAgICAxOTMsXG4gICAgICAgIDg0LFxuICAgICAgICAxMzgsXG4gICAgICAgIDc0LFxuICAgICAgICA5MCxcbiAgICAgICAgODUsXG4gICAgICAgIDEzLFxuICAgICAgICA1NixcbiAgICAgICAgMjIwLFxuICAgICAgICAzNyxcbiAgICAgICAgMTIsXG4gICAgICAgIDIyMixcbiAgICAgICAgMjMzLFxuICAgICAgICAxNTgsXG4gICAgICAgIDE1LFxuICAgICAgICAxOTMsXG4gICAgICAgIDE2OCxcbiAgICAgICAgMjQ2LFxuICAgICAgICAxNCxcbiAgICAgICAgNDEsXG4gICAgICAgIDIzNSxcbiAgICAgICAgMTIxXG4gICAgICBdXG4gICAgfSxcbiAgICBcInB1YmxpY1wiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDIxNyxcbiAgICAgICAgMjI5LFxuICAgICAgICAzLFxuICAgICAgICAyMDUsXG4gICAgICAgIDEzLFxuICAgICAgICAyMzcsXG4gICAgICAgIDc5LFxuICAgICAgICAxOCxcbiAgICAgICAgMTYzLFxuICAgICAgICAyNTAsXG4gICAgICAgIDMwLFxuICAgICAgICA0NCxcbiAgICAgICAgMjM3LFxuICAgICAgICAzLFxuICAgICAgICA1NixcbiAgICAgICAgMjIwLFxuICAgICAgICAyMzAsXG4gICAgICAgIDI1MixcbiAgICAgICAgMTgwLFxuICAgICAgICAzOSxcbiAgICAgICAgMTY4LFxuICAgICAgICA1NSxcbiAgICAgICAgMTQ3LFxuICAgICAgICAyNDQsXG4gICAgICAgIDE4MCxcbiAgICAgICAgNjcsXG4gICAgICAgIDI1MyxcbiAgICAgICAgNzksXG4gICAgICAgIDIwNixcbiAgICAgICAgMTI5LFxuICAgICAgICAyMDcsXG4gICAgICAgIDk5XG4gICAgICBdXG4gICAgfVxuICB9LFxuICBcInNpZ25lZElkZW50aXR5S2V5XCI6IHtcbiAgICBcInByaXZhdGVcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICA1NixcbiAgICAgICAgMTE1LFxuICAgICAgICA5MyxcbiAgICAgICAgMjAyLFxuICAgICAgICAyMjUsXG4gICAgICAgIDE3MixcbiAgICAgICAgMTIzLFxuICAgICAgICA4MyxcbiAgICAgICAgMTcwLFxuICAgICAgICAxMjYsXG4gICAgICAgIDE5OSxcbiAgICAgICAgMTIwLFxuICAgICAgICA0NyxcbiAgICAgICAgOTYsXG4gICAgICAgIDMsXG4gICAgICAgIDYwLFxuICAgICAgICAxNjMsXG4gICAgICAgIDU1LFxuICAgICAgICAxMTgsXG4gICAgICAgIDEwLFxuICAgICAgICAxMjAsXG4gICAgICAgIDMzLFxuICAgICAgICA0MCxcbiAgICAgICAgMjUwLFxuICAgICAgICAyNDQsXG4gICAgICAgIDg2LFxuICAgICAgICAzMyxcbiAgICAgICAgMzUsXG4gICAgICAgIDg4LFxuICAgICAgICA0MixcbiAgICAgICAgMTc3LFxuICAgICAgICAxMDRcbiAgICAgIF1cbiAgICB9LFxuICAgIFwicHVibGljXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMyxcbiAgICAgICAgNTksXG4gICAgICAgIDE4NixcbiAgICAgICAgMTcyLFxuICAgICAgICAwLFxuICAgICAgICA5LFxuICAgICAgICA3NyxcbiAgICAgICAgMjA3LFxuICAgICAgICA2MixcbiAgICAgICAgMTQyLFxuICAgICAgICAxLFxuICAgICAgICAxMTAsXG4gICAgICAgIDI0OSxcbiAgICAgICAgMTM5LFxuICAgICAgICAyMjEsXG4gICAgICAgIDEwMSxcbiAgICAgICAgMTExLFxuICAgICAgICAxMDcsXG4gICAgICAgIDgxLFxuICAgICAgICA0MyxcbiAgICAgICAgMTk4LFxuICAgICAgICAxMzgsXG4gICAgICAgIDIwOSxcbiAgICAgICAgNixcbiAgICAgICAgMTE0LFxuICAgICAgICAxNjQsXG4gICAgICAgIDIyOCxcbiAgICAgICAgNjksXG4gICAgICAgIDE5NCxcbiAgICAgICAgMTI4LFxuICAgICAgICAzNCxcbiAgICAgICAgOTFcbiAgICAgIF1cbiAgICB9XG4gIH0sXG4gIFwic2lnbmVkUHJlS2V5XCI6IHtcbiAgICBcImtleVBhaXJcIjoge1xuICAgICAgXCJwcml2YXRlXCI6IHtcbiAgICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgICAgMTEyLFxuICAgICAgICAgIDE5NixcbiAgICAgICAgICAxLFxuICAgICAgICAgIDE3MSxcbiAgICAgICAgICAyMjEsXG4gICAgICAgICAgNzQsXG4gICAgICAgICAgOTUsXG4gICAgICAgICAgMjgsXG4gICAgICAgICAgMjI4LFxuICAgICAgICAgIDg2LFxuICAgICAgICAgIDE2NSxcbiAgICAgICAgICAxMTMsXG4gICAgICAgICAgMjE2LFxuICAgICAgICAgIDkzLFxuICAgICAgICAgIDIxMSxcbiAgICAgICAgICAxOTEsXG4gICAgICAgICAgMTYsXG4gICAgICAgICAgOTMsXG4gICAgICAgICAgMTE0LFxuICAgICAgICAgIDIzNyxcbiAgICAgICAgICAzNyxcbiAgICAgICAgICAxNTksXG4gICAgICAgICAgMTg1LFxuICAgICAgICAgIDE4NCxcbiAgICAgICAgICAyNTMsXG4gICAgICAgICAgODgsXG4gICAgICAgICAgMTkwLFxuICAgICAgICAgIDE4OCxcbiAgICAgICAgICAxNzgsXG4gICAgICAgICAgNTUsXG4gICAgICAgICAgMTY2LFxuICAgICAgICAgIDc0XG4gICAgICAgIF1cbiAgICAgIH0sXG4gICAgICBcInB1YmxpY1wiOiB7XG4gICAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgICBcImRhdGFcIjogW1xuICAgICAgICAgIDE2MSxcbiAgICAgICAgICAyMyxcbiAgICAgICAgICA0NixcbiAgICAgICAgICAyMDksXG4gICAgICAgICAgMTU4LFxuICAgICAgICAgIDIwNSxcbiAgICAgICAgICAxMjUsXG4gICAgICAgICAgMTEzLFxuICAgICAgICAgIDE4NixcbiAgICAgICAgICAxNzMsXG4gICAgICAgICAgNDMsXG4gICAgICAgICAgMTU3LFxuICAgICAgICAgIDIzOSxcbiAgICAgICAgICAxNjgsXG4gICAgICAgICAgMjMxLFxuICAgICAgICAgIDQ2LFxuICAgICAgICAgIDI1LFxuICAgICAgICAgIDIzMCxcbiAgICAgICAgICA5MSxcbiAgICAgICAgICAxODAsXG4gICAgICAgICAgMjQ0LFxuICAgICAgICAgIDk2LFxuICAgICAgICAgIDIsXG4gICAgICAgICAgMTIxLFxuICAgICAgICAgIDIwMixcbiAgICAgICAgICAxNzcsXG4gICAgICAgICAgMTQsXG4gICAgICAgICAgMTc4LFxuICAgICAgICAgIDEwMCxcbiAgICAgICAgICAxMzgsXG4gICAgICAgICAgMjQ2LFxuICAgICAgICAgIDE0XG4gICAgICAgIF1cbiAgICAgIH1cbiAgICB9LFxuICAgIFwic2lnbmF0dXJlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMjQxLFxuICAgICAgICAxMDgsXG4gICAgICAgIDE3NSxcbiAgICAgICAgODEsXG4gICAgICAgIDM3LFxuICAgICAgICAyMDQsXG4gICAgICAgIDE1NixcbiAgICAgICAgMTEyLFxuICAgICAgICAyMDEsXG4gICAgICAgIDEwMSxcbiAgICAgICAgMjEsXG4gICAgICAgIDEsXG4gICAgICAgIDgxLFxuICAgICAgICA5LFxuICAgICAgICAyNDYsXG4gICAgICAgIDU4LFxuICAgICAgICAyMDgsXG4gICAgICAgIDI0NixcbiAgICAgICAgMjQzLFxuICAgICAgICAyNDAsXG4gICAgICAgIDI5LFxuICAgICAgICAxMjgsXG4gICAgICAgIDE2MyxcbiAgICAgICAgMjI0LFxuICAgICAgICAxMDUsXG4gICAgICAgIDgxLFxuICAgICAgICA1OCxcbiAgICAgICAgMTc0LFxuICAgICAgICA5OCxcbiAgICAgICAgNDIsXG4gICAgICAgIDE5NSxcbiAgICAgICAgMTg2LFxuICAgICAgICAyMyxcbiAgICAgICAgMjA2LFxuICAgICAgICAxMSxcbiAgICAgICAgMTQwLFxuICAgICAgICA3LFxuICAgICAgICAxMjQsXG4gICAgICAgIDIzMSxcbiAgICAgICAgNzUsXG4gICAgICAgIDYwLFxuICAgICAgICAyNDYsXG4gICAgICAgIDI1NSxcbiAgICAgICAgMTMzLFxuICAgICAgICAyOCxcbiAgICAgICAgMjQ1LFxuICAgICAgICAyMjgsXG4gICAgICAgIDQ2LFxuICAgICAgICAxMzAsXG4gICAgICAgIDIyNCxcbiAgICAgICAgNDEsXG4gICAgICAgIDIxOCxcbiAgICAgICAgMTQyLFxuICAgICAgICAxMCxcbiAgICAgICAgMTAzLFxuICAgICAgICA2OSxcbiAgICAgICAgMTgxLFxuICAgICAgICAxOTcsXG4gICAgICAgIDIwLFxuICAgICAgICAxMjYsXG4gICAgICAgIDE5MCxcbiAgICAgICAgMjE5LFxuICAgICAgICAyOCxcbiAgICAgICAgMTM1XG4gICAgICBdXG4gICAgfSxcbiAgICBcImtleUlkXCI6IDFcbiAgfSxcbiAgXCJyZWdpc3RyYXRpb25JZFwiOiAxNjcsXG4gIFwiYWR2U2VjcmV0S2V5XCI6IFwiUjcwMzQwVkl6RlUxd2ErWHBWZjlkWnlIaEd1T293UHJ1ejZKRlhOY3prUT1cIixcbiAgXCJwcm9jZXNzZWRIaXN0b3J5TWVzc2FnZXNcIjogW1xuICAgIHtcbiAgICAgIFwia2V5XCI6IHtcbiAgICAgICAgXCJyZW1vdGVKaWRcIjogXCIyNTQ3Mjg1MTE3NDRAcy53aGF0c2FwcC5uZXRcIixcbiAgICAgICAgXCJmcm9tTWVcIjogdHJ1ZSxcbiAgICAgICAgXCJpZFwiOiBcIkMzNjYxMTQ3REQ1ODVENkUwOUU1MUJGMDlGRDEyQUIyXCJcbiAgICAgIH0sXG4gICAgICBcIm1lc3NhZ2VUaW1lc3RhbXBcIjogMTcyMDI5MDAzM1xuICAgIH1cbiAgXSxcbiAgXCJuZXh0UHJlS2V5SWRcIjogMzEsXG4gIFwiZmlyc3RVbnVwbG9hZGVkUHJlS2V5SWRcIjogMzEsXG4gIFwiYWNjb3VudFN5bmNDb3VudGVyXCI6IDAsXG4gIFwiYWNjb3VudFNldHRpbmdzXCI6IHtcbiAgICBcInVuYXJjaGl2ZUNoYXRzXCI6IGZhbHNlXG4gIH0sXG4gIFwiZGV2aWNlSWRcIjogXCJkN1JpTjE1VVJCaXZnT3dQODlsMXlRXCIsXG4gIFwicGhvbmVJZFwiOiBcIjRiNjJlNTcwLThiZTktNGZhMi04ZGNjLTAwMGQxMzRlN2Q1NFwiLFxuICBcImlkZW50aXR5SWRcIjoge1xuICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgIFwiZGF0YVwiOiBbXG4gICAgICA1OSxcbiAgICAgIDgsXG4gICAgICAxMTUsXG4gICAgICAxNDEsXG4gICAgICAxMDMsXG4gICAgICA3MCxcbiAgICAgIDIyNCxcbiAgICAgIDIxNCxcbiAgICAgIDExNixcbiAgICAgIDIyMSxcbiAgICAgIDgwLFxuICAgICAgNTAsXG4gICAgICAxMDcsXG4gICAgICAxMjksXG4gICAgICA4OCxcbiAgICAgIDg3LFxuICAgICAgOTksXG4gICAgICAxMTQsXG4gICAgICAxNjUsXG4gICAgICAxODdcbiAgICBdXG4gIH0sXG4gIFwicmVnaXN0ZXJlZFwiOiB0cnVlLFxuICBcImJhY2t1cFRva2VuXCI6IHtcbiAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICBcImRhdGFcIjogW1xuICAgICAgMTYxLFxuICAgICAgNDgsXG4gICAgICA5OSxcbiAgICAgIDIzNixcbiAgICAgIDEzNyxcbiAgICAgIDkzLFxuICAgICAgMTAsXG4gICAgICAxOTYsXG4gICAgICAzOCxcbiAgICAgIDczLFxuICAgICAgODIsXG4gICAgICAyMzksXG4gICAgICAyMDQsXG4gICAgICAyMDUsXG4gICAgICAxNjQsXG4gICAgICAxMjEsXG4gICAgICAyNixcbiAgICAgIDIyMCxcbiAgICAgIDIyLFxuICAgICAgMjI1XG4gICAgXVxuICB9LFxuICBcInJlZ2lzdHJhdGlvblwiOiB7fSxcbiAgXCJwYWlyaW5nQ29kZVwiOiBcIkxCTjFNUjhGXCIsXG4gIFwibWVcIjoge1xuICAgIFwiaWRcIjogXCIyNTQ3Mjg1MTE3NDQ6MTZAcy53aGF0c2FwcC5uZXRcIixcbiAgICBcImxpZFwiOiBcIjg2MjAwNDEzMDg1OTAwOjE2QGxpZFwiXG4gIH0sXG4gIFwiYWNjb3VudFwiOiB7XG4gICAgXCJkZXRhaWxzXCI6IFwiQ1B2Y3BMWUhFT2VWcHJRR0dBSWdBQ2dBXCIsXG4gICAgXCJhY2NvdW50U2lnbmF0dXJlS2V5XCI6IFwiU21HTGFTMlhXVUw1VUdPdGx5ZHBLZ09HekFSL0g2RHhUOEhxcjd0QnlTTT1cIixcbiAgICBcImFjY291bnRTaWduYXR1cmVcIjogXCJyZ2pPWmlFeEhlazZyUWFQQy9uVUtjTmRmR1MvaEtnQVYyV3BzS2pRVEIyMHZSOUZQNXRiblJlaEV2bFY2NUFZQ3F6ejhVV3RpWVFhVUZDU0twcDFDZz09XCIsXG4gICAgXCJkZXZpY2VTaWduYXR1cmVcIjogXCJmVzNYcGdTQWlORTFsN04rYlpNczg4VmhTNUMxOXd2VWNIb1Vab0R3SE9yY3lUdFdNMURRd3FPa0NLLzM2SXJUcE83bzIzVlI5bm5INUM0WXlTZWZpZz09XCJcbiAgfSxcbiAgXCJzaWduYWxJZGVudGl0aWVzXCI6IFtcbiAgICB7XG4gICAgICBcImlkZW50aWZpZXJcIjoge1xuICAgICAgICBcIm5hbWVcIjogXCIyNTQ3Mjg1MTE3NDQ6MTZAcy53aGF0c2FwcC5uZXRcIixcbiAgICAgICAgXCJkZXZpY2VJZFwiOiAwXG4gICAgICB9LFxuICAgICAgXCJpZGVudGlmaWVyS2V5XCI6IHtcbiAgICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgICAgNSxcbiAgICAgICAgICA3NCxcbiAgICAgICAgICA5NyxcbiAgICAgICAgICAxMzksXG4gICAgICAgICAgMTA1LFxuICAgICAgICAgIDQ1LFxuICAgICAgICAgIDE1MSxcbiAgICAgICAgICA4OSxcbiAgICAgICAgICA2NixcbiAgICAgICAgICAyNDksXG4gICAgICAgICAgODAsXG4gICAgICAgICAgOTksXG4gICAgICAgICAgMTczLFxuICAgICAgICAgIDE1MSxcbiAgICAgICAgICAzOSxcbiAgICAgICAgICAxMDUsXG4gICAgICAgICAgNDIsXG4gICAgICAgICAgMyxcbiAgICAgICAgICAxMzQsXG4gICAgICAgICAgMjA0LFxuICAgICAgICAgIDQsXG4gICAgICAgICAgMTI3LFxuICAgICAgICAgIDMxLFxuICAgICAgICAgIDE2MCxcbiAgICAgICAgICAyNDEsXG4gICAgICAgICAgNzksXG4gICAgICAgICAgMTkzLFxuICAgICAgICAgIDIzNCxcbiAgICAgICAgICAxNzUsXG4gICAgICAgICAgMTg3LFxuICAgICAgICAgIDY1LFxuICAgICAgICAgIDIwMSxcbiAgICAgICAgICAzNVxuICAgICAgICBdXG4gICAgICB9XG4gICAgfVxuICBdLFxuICBcInBsYXRmb3JtXCI6IFwiYW5kcm9pZFwiLFxuICBcImxhc3RBY2NvdW50U3luY1RpbWVzdGFtcFwiOiAxNzIwMjkwMDI4LFxuICBcIm15QXBwU3RhdGVLZXlJZFwiOiBcIkFBQUFBSVl5XCJcbn0iLAogICJhcHAtc3RhdGUtc3luYy1rZXktQUFBQUFJWXkuanNvbiI6ICJ7XCJrZXlEYXRhXCI6XCJjU0M4cklMUHBaVlprbHpYZXNZQ294VVh2Z3A2TlB6U1hvS205eXFtcjVrPVwiLFwiZmluZ2VycHJpbnRcIjp7XCJyYXdJZFwiOjE5OTI4OTYxMjEsXCJjdXJyZW50SW5kZXhcIjoxLFwiZGV2aWNlSW5kZXhlc1wiOlswLDFdfSxcInRpbWVzdGFtcFwiOlwiMFwifSIKfQ=="  // PUT your SESSION_ID 


module.exports = {

  menu: process.env.MENU || "", /**  Available @MENU @Schemes 1: Aztec_Md, 2: A17_Md, 3: Suhail-Md Default ---------- If Not Choose then it Randomely Pic One Of Them Each time **/

  HANDLERS: process.env.PREFIX  || ".",
  BRANCH  : process.env.BRANCH  || "main",
  VERSION : process.env.VERSION || "1.3.8",
  caption : global.caption || "" , // ```『 ᴘᴏᴡᴇʀᴇᴅ ʙʏ sᴜʜᴀɪʟ²²¹-ᴍᴅ 』```", //*『sᴜʙsᴄʀɪʙᴇ • sᴜʜᴀɪʟ ᴛᴇᴄʜ』*\n youtube.com/@suhailtechinfo0"),
 
  author : process.env.PACK_AUTHER|| "",
  packname: process.env.PACK_NAME || "",
  botname : process.env.BOT_NAME  || "Kenbeast_MD",
  ownername:process.env.OWNER_NAME||"Kenbeast",


  errorChat : process.env.ERROR_CHAT || "",
  KOYEB_API : process.env.KOYEB_API  || "false",

  REMOVE_BG_KEY : process.env.REMOVE_BG_KEY  || "",
  OPENAI_API_KEY: process.env.OPENAI_API_KEY || "",
  HEROKU_API_KEY: process.env.HEROKU_API_KEY || "",
  HEROKU_APP_NAME:process.env.HEROKU_APP_NAME|| "",
  antilink_values:process.env.ANTILINK_VALUES|| "all",
  HEROKU: process.env.HEROKU_APP_NAME && process.env.HEROKU_API_KEY,


  WORKTYPE: process.env.WORKTYPE || process.env.MODE|| "public",
  LANG: ( process.env.THEME ||  "Kenbeast"  ).toUpperCase(),



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
