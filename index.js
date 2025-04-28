const { default: 
makeWASocket,
useMultiFileAuthState,
 } = require("@whiskeysockets/baileys");
//===================================================//
const fs = require("fs");
const P = require("pino");
const fetch = require("node-fetch");
const inquirer = require("inquirer");
const moment = require("moment-timezone");
const speed = require("performance-now");
const yts = require("yt-search");
const _ = require("lodash");
const { getBuffer, getExtension, getRandom } = require("./lib/funções");
const { banner } = require("./banner");
const hora = moment.tz("America/Sao_Paulo").format("HH:mm:ss");
const data = moment.tz("America/Sao_Paulo").format("DD/MM/YY");
//                          📍COR📍                           //
const chalk = require("chalk");
const color = (text, color) => {
return !color ? chalk.blueBright(text) : chalk.keyword(color)(text)}

//                    INÍCIO DA CONEXÃO                     //

async function connection() {
const { state, saveCreds } = await useMultiFileAuthState("./qr-code")
console.log(banner.string)
const conn = makeWASocket({
 logger: P({ level: "silent" }),
 mobile: false,
 browser: ["chrome (linux)"],
 auth: state
});

if (conn.user == null) {
let resposta = await inquirer.prompt([{
type: "input",
name: "numero",
message: "Digite seu número de telefóne: \nExemplo: 555665378264\n--->" }])
let codigo = await conn.requestPairingCode(resposta.numero)
console.log(`Seu código de conexão é: ${chalk.bold(codigo)}`)};
//===================================================//
conn.ev.on("creds.update", saveCreds)
conn.ev.on("messages.upsert", async({ messages }) => {
try {

//===================================================//
switch (comando) {

default: 
}

} catch (e) {
console.log(e)
}})

conn.ev.on("connection.update", (update) => {
let { connection, lastDisconnect } = update
fs.watchFile('./index.js', (curr, prev) => {
if (curr.mtime.getTime() !== prev.mtime.getTime()) {
console.log(color(" [🟢] A index.js ACABOU DE SER EDITADA, REINICIANDO...", "green"));
process.exit()
}
})

fs.watchFile('./package.json', (curr, prev) => {
if (curr.mtime.getTime() !== prev.mtime.getTime()) {
console.log(color(" [🔴] A package.json ACABOU DE SER EDITADA, REINICIANDO...", "red"));
process.exit()
}
})

fs.watchFile('./banner.js', (curr, prev) => {
if (curr.mtime.getTime() !== prev.mtime.getTime()) {
console.log(color("[🔵] A banner.js ACABOU DE SER EDITADA, REINICIANDO...", "blue"));
process.exit()
}
})

if (connection === "open") {
console.log(chalk.greenBright("BOT CONECTADO || FAMÍLIA ATK"))
} else if (connection === "close") {
connection()
}
if(update.isNewLogin) {
connection()
}})}
connection()
