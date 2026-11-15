/**
 * Automated Schema.org & Structured Data Validator
 * Parte do Ultimate JavaScript Automation Toolkit - ViewWay Select
 */

const fs = require('fs');

function getSchemaToolInfo() {
    return {
        name: "Schema Validator",
        version: "1.0.0",
        description: "Validação automatizada de marcações Schema.org e dados estruturados JSON-LD para SEO."
    };
}

console.log("📐 [ViewWay] Módulo Schema Validator carregado com sucesso!");
module.exports = { getSchemaToolInfo };
