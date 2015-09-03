// =========================================================================//==============================================================//
//                                                                          //                                                              //         
// Source="app\plugins\vs.language.soulsharp.header\SoulSharpHeaderMain.js" //             Copyright © Of Fire Twins Wesp 2015              //
// Author= {"Callada", "Another"}                                           //                                                              //
// Project="Soul.Language"                                                  //                  Alise Wesp & Yuuki Wesp                     //
// Version File="1.0"                                                       //                                                              //
// =========================================================================//==============================================================//
'use strict';
define(["require", "exports", './SoulSharpHeaderDef', 'monaco'], function (require, exports, SoulSharpHeaderDef, monaco) 
    {
        monaco.Modes.registerMonarchDefinition('SoulSharpHeader', SoulSharpHeaderDef.language);
    });
