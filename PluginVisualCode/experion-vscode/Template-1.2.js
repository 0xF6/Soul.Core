// =========================================================================//==============================================================//
//                                                                          //                                                              //         
// Source="app\plugins\vs.language.soulsharp\template.js"                   //             Copyright © Of Fire Twins Wesp 2015              //
// Author= {"Callada", "Another"}                                           //                                                              //
// Project="Soul.Language"                                                  //                  Alise Wesp & Yuuki Wesp                     //
// Version File="1.2"                                                       //                                                              //
// =========================================================================//==============================================================//
'use strict';
define(["require", "exports"], function (require, exports) {
    exports.language = {
        displayName:        ' ',
        name:               ' ',
        defaultToken:       ' ',
        lineComment:        '\\ ',
        blockCommentStart:  '\\*',
        blockCommentEnd:    '*\\',
        wordDefinition:     /(-?\d*\.\d\w*)|([^\`\~\!\#\$\%\^\&\*\(\)\-\=\+\[\{\]\}\\\|\;\:\'\"\,\.\<\>\/\?\s]+)/g,
        autoClosingPairs: [
            ['"', '"'],
            ['\'', '\''],
            ['{', '}'],
            ['[', ']'],
            ['(', ')']
        ],
        keywords: [
            ' '
        ],
        aligments: [
            ' '
        ],
        preprocs: [
            ' '
        ],
        codecs: [
            ' '
        ],
        gates: [
            ' '
        ],
        namespaceFollows: [
            ' '
        ],
        operators: [
            '=', '??', '||', '&&', '|', '^', '&', '==', '!=', '<=', '>=', '<<',
            '+', '-', '*', '/', '!', '~', '++', '--', '+=',
            '-=', '*=', '/=', '|=', '^=', '<<=', '>>=', '>>', '=>'
        ],
        // we include these common regular expressions
        symbols: /[=><!~?:&|+\-*\^%;\.,\/]+/,
        escapes: /\\(?:[abfnrtv\\"']|x[0-9A-Fa-f]{1,4}|u[0-9A-Fa-f]{4}|U[0-9A-Fa-f]{8})/,
        integersuffix: /[uU]?[yslnLI]?/,
        floatsuffix: /[fFmM]?/,
        // The main tokenizer for our languages
        tokenizer: {
            root: [
                // identifiers and keywords
                [/\@?[a-zA-Z_]\w*/, {
                    cases: {
                        '@namespaceFollows' : { token: 'keyword.$0', next: '@namespace' },
                        '@keywords'         : { token: 'keyword.$0', next: '@qualified' },
                        '@aligments'        : { token: 'soul.aligment', next: '@qualified' },
                        '@preprocs'         : { token: 'soul.preproc', next: '@qualified' },
                        '@codecs'           : { token: 'soul.codec', next: '@qualified' },
                        '@gates'            : { token: 'soul.gate', next: '@qualified' },
                        '@default'          : { token: 'identifier', next: '@qualified' },
                    }
                }],
                { include: '@whitespace' },
                [/<.*>/, 'annotation'],
                [/^#(if|else|endif|include|pragma|connect)/, 'soul.preproc'],
                [/[{}()\[\]]/, '@brackets'],
                [/[<>](?!@symbols)/, '@brackets'],
                [/@symbols/, 'delimiter'],
                [/\d*\d+[eE]([\-+]?\d+)?(@floatsuffix)/, 'number.float'],
                [/\d*\.\d+([eE][\-+]?\d+)?(@floatsuffix)/, 'number.float'],
                [/0x[0-9a-fA-F]+LF/, 'number.float'],
                [/0x[0-9a-fA-F]+(@integersuffix)/, 'number.hex'],
                [/0b[0-1]+(@integersuffix)/, 'number.bin'],
                [/\d+(@integersuffix)/, 'number'],
                [/[;,.]/, 'delimiter'],
                [/"([^"\\]|\\.)*$/, 'string.invalid'],
                [/"""/, 'string', '@string."""'],
                [/"/, 'string', '@string."'],
                [/\@"/, { token: 'string.quote', bracket: '@open', next: '@litstring' }],
                [/'[^\\']'B?/, 'string'],
                [/(')(@escapes)(')/, ['string', 'string.escape', 'string']],
                [/'/, 'string.invalid'],
                [/@symbols/, { cases: { '@operators': 'delimiter', '@default': '' } }]
            ],
            qualified: [
                 [/[a-zA-Z_][\w]*/,
				 {
				     cases: {
				         '@keywords': { token: 'keyword.$0' },
				         '@aligments': { token: 'soul.aligment' },
				         '@preprocs': { token: 'soul.preproc' },
				         '@codecs': { token: 'soul.codec' },
				         '@gates': { token: 'soul.gate' },
				         '@default': 'identifier'
				     }
				 }],
                [/\./, 'delimiter'],
                ['', '', '@pop'],
            ],
            namespace: [
                { include: '@whitespace' },
                [/[A-Z]\w*/, 'namespace'],
                [/[\.=]/, 'delimiter'],
                ['', '', '@pop'],
            ],
            whitespace: [
                [/[ \t\r\n]+/, ''],
                [/\(\*/, 'comment', '@comment'],
                [/\/\/.*$/, 'comment'],
            ],
            comment: [
                [/[^\*]+/, 'comment'],
                [/\*\)/, 'comment', '@pop'],
                [/\*/, 'comment']
            ],
            string: [
                [/[^\\"]+/, 'string'],
                [/@escapes/, 'string.escape'],
                [/\\./, 'string.escape.invalid'],
                [/("""|"B?)/, {
                    cases: {
                        '$#==$S2': { token: 'string', next: '@pop' },
                        '@default': 'string'
                    }
                }]
            ],
            litstring: [
                [/[^"]+/, 'string'],
                [/""/, 'string.escape'],
                [/"/, { token: 'string.quote', bracket: '@close', next: '@pop' }]
            ],
        },
    };
});