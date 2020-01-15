namespace Soul.Core.Types
{
    using System.Xml.Linq;

    public enum SoulError
    {
        //! ================= [ Waiting for a symbol ]
        SS1000, // Waiting for a symbol <

        SS1001, // Waiting for a symbol >
        SS1002, // Waiting for a symbol "
        SS1003, // Waiting for a symbol '
        SS1004, // Waiting for a symbol (
        SS1005, // Waiting for a symbol )
        SS1006, // Waiting for a symbol [
        SS1007, // Waiting for a symbol ]
        SS1008, // Waiting for a symbol {
        SS1009, // Waiting for a symbol }
        SS1010, // Waiting for a symbol ,
        SS1011, // Waiting for a symbol .
        SS1012, // Waiting for a symbol &
        SS1013, // Waiting for a symbol *
        SS1014, // Waiting for a symbol ^
        SS1015, // Waiting for a symbol :
        SS1016, // Waiting for a symbol ;
        SS1017, // Waiting for a symbol $
        SS1018, // Waiting for a symbol !
        SS1019, // Waiting for a symbol =
        SS1020, // Waiting for a symbol |
        SS1021, // Waiting for a symbol -
        SS1022, // Waiting for a symbol +
        SS1023, // Waiting for a symbol %
        SS1024, // Waiting for a symbol ~
        SS1025, // Waiting for a symbol @

        //! ================= [ Expected keyword ]
        SS1200, // Expected keyword void

        SS1201, // Expected keyword if
        SS1202, // Expected keyword else
        SS1203, // Expected keyword null
        SS1204, // Expected keyword alias
        SS1205, // Expected keyword key
        SS1206, // Expected keyword assembly
        SS1207, // Expected keyword name
        SS1208, // Expected keyword brige
        SS1209, // Expected keyword extern
        SS1210, // Expected keyword this
        SS1211, // Expected keyword base
        SS1212, // Expected keyword break
        SS1213, // Expected keyword for
        SS1214, // Expected keyword while
        SS1215, // Expected keyword class
        SS1216, // Expected keyword namespace
        SS1217, // Expected keyword new
        SS1218, // Expected keyword using
        SS1219, // Expected keyword return
        SS1220, // Expected keyword event

        //! ================= [ Expected key aligment ]
        SS1500, // Expected key aligment lux

        SS1501, // Expected key aligment aix
        SS1502, // Expected key aligment cad
        SS1503, // Expected key aligment element
        SS1600, // lock
        SS1601, // key
        SS1602, // meta
        SS1700, // catalisator
        SS1701, // unity
        SS1702, // await
        SS1703, // async
        SS1800, // int
        SS1801, // string
        SS1802, // gate
        SS1803, // object
        SS1804, // ulong
        SS1805, // short

        //! ================= [ Expected key modifier ]
        SS2000, // Expected key modifier event

        SS2001, // Expected key modifier protected
        SS2002, // Expected key modifier public
        SS2003, // Expected key modifier private
        SS2004, // Expected key modifier internal

        //! ================= [ ect ]
        SS2510,

        SS2511,
        SS2512,
        SS2513,
        SS2514,
        SS2515,
        SS2516,
        SS2517,
        SS2518,
        SS2520,
    }

    public static class Error
    {
        public static string ConvertToString(this SoulError soul)
        {
            // JP - Japan
            // RU - Russian
            // EN - English
            return XDocument.Load($"libSoul-1.5-[{System.Globalization.RegionInfo.CurrentRegion.TwoLetterISORegionName}].xml").Element("SoulLibrary").Element(soul.ToString()).Attribute("value").Value;
        }
    }
}