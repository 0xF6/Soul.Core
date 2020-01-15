namespace Soul.Core.Rex
{
    public class RegexBase
    {
        public class PreProc
        {
            /// <summary>
            /// Include all Assembly     - (mgU)
            /// </summary>
            public const string IncludeAssembly = "(^#(include\\s)(<[a-zA-Z].*\\.dll>))";

            /// <summary>
            /// Include all Soul Header  - (mgU)
            /// </summary>
            public const string IncludeSoulHeader = "(^#(include\\s)(['][a-zA-Z].*\\.sh[']|[\"][a-zA-Z].*\\.sh[\"]))";

            /// <summary>
            /// Setting Soul Assembly    - (Umg)
            /// </summary>
            public const string PragmaSet = "(^#(pragma\\s)(lock\\s(\".*\")|metta\\s(\".*\")|key\\s(\".*\")))";
        }

        public class Word
        {
            /// <summary>
            /// [there] - (none)
            /// </summary>
            public const string Bracket = "(?<=\\[)[^\\[\\]]+(?=\\])";
        }

        public const string MultiLine = "(?m)";
        //x public const string REX_BRECKET_SQAER_MULTILINE = "(?<=\\[)[^\\[\\]]+(?=\\])";
        //x public const string REX_BRECKET_SQARE_ONLYLINE_ARRAY = "\\[([^,\\]]+),([^,\\]]+)\\]";
    }
}