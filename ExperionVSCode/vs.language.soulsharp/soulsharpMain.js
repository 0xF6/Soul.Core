// =========================================================================//==============================================================//
//                                                                          //                                                              //
//                                                                          //             Copyright © Of Fire Twins Wesp 2015              //
// Author= {"Callada", "Another"}                                           //                                                              //
// Project="Soul.Language"                                                  //                  Alise Wesp & Yuuki Wesp                     //
// Version File="1.0"                                                       //                                                              //
// License="root\\LICENSE", LicenseType="MIT"                               //                                                              //
// =========================================================================//==============================================================//
'use strict';
define(["require", "exports", './soulsharpDef', 'monaco'], function (require, exports, soulsharpDef, monaco) 
    {
        monaco.Modes.registerMonarchDefinition('soulsharp', soulsharpDef.language);
    });
