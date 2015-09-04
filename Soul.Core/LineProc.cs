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

namespace Soul.Core
{
    public class LineProc
    {
        public bool isMethod;
        public bool isPreProcIncludeAssembly;
        public bool isPreProcIncludeSoulHeader;
        public bool isPreProcPragmaLock;
        public bool isPreProcPragmaKey;
        public bool isPreProcPragmaMetta;
        // is Include Assembly
        public string Assembly;
        // is Include Soul Header
        public string SoulHeader;
        // is lock
        public string DataLock;
        // is Key
        public string KeyCode;
        // is Metta
        public string Metta;
        public string Version;
        // is Method
        public string BodyMethod;
        public string TypeMethod;
        public string[] ModificationMethod;
    }
}
