/**
 * Automated RSS & Atom Feed Generator
 * Parte do Ultimate JavaScript Automation Toolkit - ViewWay Select
 */

const fs = require('fs');

function getRssToolInfo() {
    return {
        name: "RSS Feed Generator",
        version: "1.0.0",
        description: "Geração automatizada de feeds RSS e Atom para blogs, portais e e-commerces."
    };
}

console.log("📡 [ViewWay] Módulo RSS Feed Generator carregado com sucesso!");
module.exports = { getRssToolInfo };
