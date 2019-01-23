// Dependencies
const Marked = require( 'marked' );
const ReactDOMServer = require( 'react-dom/server' );
const Babel = require( '@babel/core' );
const Prism = require( 'prismjs' );
const PrismLanguage = require( 'prismjs/components/');

/**
 * Transform ES6 or JSX into CommonJS.
 * @param {string} code - Code to transpile
 * 
 * @returns {string} - CommonJS string output
 */
const TransformCode = ( code ) => {
	return Babel.transform( code, {
		presets: [ '@babel/preset-react', '@babel/preset-env' ],
	}).code;
}

/**
 * 
 * @param {string} html 
 * @param {string} react 
 */
const FormatHTML = ( html, react ) => {
	PrismLanguage( [ 'jsx' ] );

	let HTMLOutput = "";

	HTMLOutput += `<div class="code-example-html">${ Prism.highlight( html, Prism.languages.html, 'html') }</div>`
	HTMLOutput += `<div class="code-example-react">${ Prism.highlight( react, Prism.languages.jsx, 'jsx') }</div>`
	HTMLOutput += `${ html }`
	
	return HTMLOutput;
}



/**
 * 
 * @param {string} react 
 */
const RenderHTML = ( react ) => {
	// Parse React code to commonJS
	let commonJS = TransformCode( react );
	// Extract HTML from common react code
	let html = ReactDOMServer.renderToStaticMarkup( eval( commonJS ) );
	// Add styling and escaping to HTML
	return FormatHTML( html, react );
}

/**
 * Given a markdown file with the code keyword 'example', 
 * return the first entry with said example
 * 
 * @param {string} markdown 
 * 
 * @returns {string} 
 */
const RenderExample = ( markdown ) => {
	const MarkdownRenderer = new Marked.Renderer();
	const codeSnippets = [];

	MarkdownRenderer.code = ( code, languages ) => {
		if( languages.includes( 'example' ) ){
			codeSnippets.push( code );
		}
	}

	// Run Marked so that we populate the array
	Marked( markdown, { renderer: MarkdownRenderer });

	// Return first code snippet example
	return codeSnippets[ 0 ];
}

/**
 * 
 */
const RenderMarkdownCode = ( markdown ) => {
    const MarkdownRenderer = new Marked.Renderer();
    
    MarkdownRenderer.code = ( code, languages ) => {
        if( languages.includes( 'example' ) ){
			//@TODO Append token `import React from 'react';` to example
			
            return RenderHTML( code )
		}
		else {
            return `<code>${ code }</code>`;
		}
	}
    
    return Marked( markdown, { renderer: MarkdownRenderer, breaks: true } );
}

module.exports.Render = RenderMarkdownCode;
module.exports.RenderExample = RenderExample;