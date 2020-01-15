namespace Soul.Core
{
    public class LineProc
    {
        public ulong Line { get; set; }
        public bool isMethod { get; set; }
        public bool isPreProcIncludeAssembly { get; set; }
        public bool isPreProcIncludeSoulHeader { get; set; }
        public bool isPreProcPragmaLock { get; set; }
        public bool isPreProcPragmaKey { get; set; }
        public bool isPreProcPragmaMeta { get; set; }
        public string Assembly { get; set; }
        public string SoulHeader { get; set; }
        public string DataLock { get; set; }
        public string KeyCode { get; set; }
        public string Meta { get; set; }
        public string Version { get; set; }
        public string BodyMethod { get; set; }
        public string TypeMethod { get; set; }
        public string[] ModificationMethod { get; set; }
    }
}