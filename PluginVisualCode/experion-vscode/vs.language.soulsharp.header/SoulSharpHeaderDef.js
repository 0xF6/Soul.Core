// =========================================================================//==============================================================//
//                                                                          //                                                              //         
// Source="app\plugins\vs.language.soulsharp.header\SoulSharpHeaderDef.js"  //             Copyright © Of Fire Twins Wesp 2015              //
// Author= {"Callada", "Another"}                                           //                                                              //
// Project="Soul.Language"                                                  //                  Alise Wesp & Yuuki Wesp                     //
// Version File="1.0"                                                       //                                                              //
// =========================================================================//==============================================================//
'use strict';
define(["require", "exports"], function (require, exports) {
    exports.language = {
        displayName: 'soulh',
        name: 'Soul Header',
        defaultToken: 'SH',
        // used in the editor to insert comments (ctrl+/ or shift+alt+A)
        lineComment: '\\ ',
        blockCommentStart: '\\*',
        blockCommentEnd: '*\\',
        // the default separators except `@`
        wordDefinition: /(-?\d*\.\d\w*)|([^\`\~\!\#\$\%\^\&\*\(\)\-\=\+\[\{\]\}\\\|\;\:\'\"\,\.\<\>\/\?\s]+)/g,
        autoClosingPairs: [
            ['"', '"'],
            ['\'', '\''],
            ['{', '}'],
            ['[', ']'],
            ['(', ')']
        ],
        brackets: [
            { open: '{', close: '}', token: 'delimiter.curly' },
            { open: '[', close: ']', token: 'delimiter.square' },
            { open: '(', close: ')', token: 'delimiter.parenthesis' },
            { open: '<', close: '>', token: 'delimiter.angle' }
        ],
        editorOptions: { tabSize: 4, insertSpaces: true },
        keywords: [
            'extern', 'alias', 'using', 'bool', 'byte', 'short', 'int', 
            'object', 'string', 'assembly',
			'this', 'base', 'new', 'void',
			'gate', 'const', 'if', 'else',
            'while', 'for', 'break',
            'return', 'lock', 'yield',
			'namespace', 'class',
            'field',  'method', 'public', 'protected',
            'internal', 'private', 'static', 'struct',
			'get', 'set', 'add', 'remove',
			'true', 'false', 'interface', 'enum',
            'null', 'async', 'await', 
            'lux', 'aix', 'cad', 'element', 'codec', 'unity',
            'catalisator'
        ],
        namespaceFollows: [
            'namespace', 'using',
        ],
        parenFollows: [
            'if', 'for', 'while'
        ],
        operators: [
            '=', '??', '||', '&&', '|', '^', '&', '==', '!=', '<=', '>=', '<<',
            '+', '-', '*', '/', '!', '~', '++', '--', '+=',
            '-=', '*=', '/=', '|=', '^=', '<<=', '>>=', '>>', '=>'
        ],
        symbols: /[=><!~?:&|+\-*\/\^%]+/,
        // escape sequences
        escapes: /\\(?:[abfnrtv\\"']|x[0-9A-Fa-f]{1,4}|u[0-9A-Fa-f]{4}|U[0-9A-Fa-f]{8})/,
        // The main tokenizer for our languages
        tokenizer: {
            root: [
                // identifiers and keywords
                [/\@?[a-zA-Z_]\w*/, { cases: {
                            '@namespaceFollows': { token: 'keyword.$0', next: '@namespace' },
                            '@keywords': { token: 'keyword.$0', next: '@qualified' },
                            '@default': { token: 'identifier', next: '@qualified' }
                        }
                    }],
                // whitespace
                { include: '@whitespace' },
                // delimiters and operators
                [/}/, { cases: {
                            '$S2==interpolatedstring': { token: 'string.quote', bracket: '@close', next: '@pop' },
                            '@default': '@brackets' } }],
                [/[{}()\[\]]/, '@brackets'],
                [/[<>](?!@symbols)/, '@brackets'],
                [/@symbols/, { cases: { '@operators': 'delimiter', '@default': '' } }],
                // literal string
                [/\@"/, { token: 'string.quote', bracket: '@open', next: '@litstring' }],
                // interpolated string
                [/\$"/, { token: 'string.quote', bracket: '@open', next: '@interpolatedstring' }],
                // numbers
                [/\d*\.\d+([eE][\-+]?\d+)?[fFdD]?/, 'number.float'],
                [/0[xX][0-9a-fA-F]+/, 'number.hex'],
                [/\d+/, 'number'],
                // delimiter: after number because of .\d floats
                [/[;,.]/, 'delimiter'],
                // strings
                [/"([^"\\]|\\.)*$/, 'string.invalid'],
                [/"/, { token: 'string.quote', bracket: '@open', next: '@string' }],
                // characters
                [/'[^\\']'/, 'string'],
                [/(')(@escapes)(')/, ['string', 'string.escape', 'string']],
                [/'/, 'string.invalid'],
				// annotation
				[/#\s*[a-zA-Z_\$][\w\$]*/, 'annotation']
            ],
            qualified: [
                [/[a-zA-Z_][\w]*/, { cases: { '@keywords': { token: 'keyword.$0' },
                            '@default': 'identifier' }
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
            comment: [
                [/[^\/*]+/, 'comment'],
                // [/\/\*/,    'comment', '@push' ],    // no nested comments :-(
                ['\\*/', 'comment', '@pop'],
                [/[\/*]/, 'comment']
            ],
            string: [
                [/[^\\"]+/, 'string'],
                [/@escapes/, 'string.escape'],
                [/\\./, 'string.escape.invalid'],
                [/"/, { token: 'string.quote', bracket: '@close', next: '@pop' }]
            ],
            litstring: [
                [/[^"]+/, 'string'],
                [/""/, 'string.escape'],
                [/"/, { token: 'string.quote', bracket: '@close', next: '@pop' }]
            ],
            interpolatedstring: [
                [/[^\\"{]+/, 'string'],
                [/@escapes/, 'string.escape'],
                [/\\./, 'string.escape.invalid'],
                [/{{/, 'string.escape'],
                [/}}/, 'string.escape'],
                [/{/, { token: 'string.quote', bracket: '@open', next: 'root.interpolatedstring' }],
                [/"/, { token: 'string.quote', bracket: '@close', next: '@pop' }]
            ],
            whitespace: [
                [/^[ \t\v\f]*\w.*$/, 'namespace.cpp'],
                [/[ \t\v\f\r\n]+/, ''],
                [/\/\*/, 'comment', '@comment'],
                [/\/\/.*$/, 'comment'],
            ],
        },
    };
});
