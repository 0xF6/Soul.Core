// =========================================================================//==============================================================//
//                                                                          //                                                              //
//                                                                          //             Copyright © Of Fire Twins Wesp 2015              //
// Author= {"Callada", "Another"}                                           //                                                              //
// Project="Soul.Language"                                                  //                  Alise Wesp & Yuuki Wesp                     //
// Version File="1.0"                                                       //                                                              //
// License="root\\LICENSE", LicenseType="MIT"                               //                                                              //
// =========================================================================//==============================================================//
using Soul.Core.Build;
using System;
using System.Collections.Generic;
using System.Linq;

namespace Soul.Core.Types
{
    public enum PreProcessor : short
    {
        pInclude = 0x1,
        pPragma = 0x2,
        pLock = 0x3
    }
    public enum sType : short
    {
        @short,
        @int,
        @long,
        @string,
        @byte,
        @aix,
        @element,
        @voix,
        @class,
        @gate,
        @void,
        @ulong,
        @object,
        @event,
        @protected,
        @internal,
        @public,
        @private
    }
}
