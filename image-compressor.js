/**
 * Automated Image Compressor & Resizer Utility
 * Parte do Ultimate JavaScript Automation Toolkit - ViewWay Select
 */

const fs = require('fs');
const path = require('path');

function getScriptInfo() {
    return {
        name: "Image Compressor & Resizer",
        version: "1.0.0",
        description: "Utilitário em lote para otimização e redimensionamento de mídias."
    };
}

console.log("🖼️ [ViewWay] Módulo Image Compressor carregado com sucesso!");
module.exports = { getScriptInfo };
