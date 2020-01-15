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