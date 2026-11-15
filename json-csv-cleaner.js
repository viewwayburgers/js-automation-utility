/**
 * Advanced JSON/CSV Converter & Cleaner Utility
 * Parte do Ultimate JavaScript Automation Toolkit - ViewWay Select
 */

const fs = require('fs');

function cleanString(str) {
    if (typeof str !== 'string') return str;
    return str
        .trim()
        .replace(/\s+/g, ' ')
        .replace(/[""]/g, '"')
        .replace(/[‘’]/g, "'");
}

function cleanDataObject(data) {
    if (Array.isArray(data)) {
        return data.map(item => cleanDataObject(item));
    } else if (data !== null && typeof data === 'object') {
        const cleaned = {};
        for (const key of Object.keys(data)) {
            cleaned[key] = cleanDataObject(data[key]);
        }
        return cleaned;
    }
    return cleanString(data);
}

console.log("🛠️ [ViewWay] JSON/CSV Cleaner inicializado com sucesso!");
module.exports = { cleanString, cleanDataObject };
