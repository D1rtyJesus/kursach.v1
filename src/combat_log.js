import fs from 'fs';

const logStream = fs.createWriteStream('combat_log.txt', { flags: 'a' });

export function writeLog(message) {
    const timestamp = new Date().toISOString();
    logStream.write(`[${timestamp}] ${message}\n`);
}

export function closeLog() {
    logStream.end();
}