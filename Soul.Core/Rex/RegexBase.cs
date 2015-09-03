// =========================================================================//==============================================================//
//                                                                          //                                                              //
//                                                                          //             Copyright © Of Fire Twins Wesp 2015              //
// Author= {"Callada", "Another"}                                           //                                                              //
// Project="Soul.Language"                                                  //                  Alise Wesp & Yuuki Wesp                     //
// Version File="1.0"                                                       //                                                              //
// License="root\\LICENSE", LicenseType="MIT"                               //                                                              //
// =========================================================================//==============================================================//
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Text.RegularExpressions;

namespace Soul.Core.Rex
{
    public class RegexBase
    {
        public class PreProc
        {
            public const string IncludeAssembly = "(^#(include )(<[a-zA-Z].*\\.dll>))";     // Include all Assembly
            public const string IcludeSoulHeader = "(^#(include )(['][a-zA-Z].*\\.sh[']))"; // Include all Soul Header
        }
        public const string MultiLine = "(?m)";
        //x public const string REX_BRECKET_SQAER_MULTILINE = "(?<=\\[)[^\\[\\]]+(?=\\])";
        //x public const string REX_BRECKET_SQARE_ONLYLINE_ARRAY = "\\[([^,\\]]+),([^,\\]]+)\\]";
    }
}
