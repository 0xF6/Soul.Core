namespace RC.Soul
{
    using System;

    public class Soul
    {
        public static Soul Signil
        {
            get
            {
                if (sig == null)
                    return (sig = new Soul());
                else
                    return sig;
            }
        }

        private static Soul sig;
        public UInt64 Mana;

        public virtual void Signal(int i)
        {
        }
    }

    public static class Constat
    {
        public const ulong Stone = 0x001;
        public const ulong Air = 0x002;
        public const ulong Fire = 0x003;
        public const ulong Auqa = 0x004;

        // Actions
        public const ulong Infernum = 0xe10;

        public const ulong Shear = 0xe11;
        public const ulong Splitting = 0xe12;
        public const ulong Comperss = 0xe13;

        // Direction
        public const ulong Forward = 0x2f1;

        public const ulong Back = 0x2f2;
        public const ulong Left = 0x2f3;
        public const ulong Right = 0x2f4;
        public const ulong Down = 0x2f5;
        public const ulong Up = 0x2f6;
    }
}

namespace RC.Core
{
    public class Aix
    { }

    public class CAD
    {
        public virtual void Input(CAD cstingDevice)
        { }

        public virtual void Error(CAD cstingDevice, Aix crystall)
        { }

        public virtual void Message(CAD cstingDevice, int sig)
        { }

        public void Rejection(Aix a)
        { }

        public void Cast(ulong u)
        { }

        public void Mixing(ulong u)
        { }

        public void Impuls(ulong u)
        { }
    }

    public static class Constat
    { }

    public static class Tools
    {
        public static ulong MathMana(ulong uid)
        {
            return uid;
        }

        public static ulong MathManaMix(int count, ulong mass)
        {
            return mass;
        }

        public static ulong MathManaImpuls(ulong mass)
        {
            return mass;
        }

        public static ulong MathMass(params ulong[] uid)
        {
            return uid[0];
        }
    }
}

namespace Soul.Core
{
    using RC.Core;
    using RC.Soul;
    using static RC.Soul.Constat;
    using static RC.Core.Tools;

    public class Axi_Gen02 : CAD
    {
        public Axi_Gen02() : base()
        { }

        public override void Input(CAD cstingDevice)
        {
            if (Soul.Signil.Mana >= (MathMana(Stone) + MathMana(Fire) + MathManaMix(2, MathMass(Stone, Fire)) + MathManaImpuls(MathMass(Stone, Fire))))
            {
                cstingDevice.Cast(Stone);
                cstingDevice.Cast(Fire);
                cstingDevice.Mixing(Infernum);
                cstingDevice.Impuls(Forward);
            }
            base.Input(cstingDevice);
        }

        public override void Error(CAD cstingDevice, Aix crystall)
        {
            cstingDevice.Rejection(crystall);
            base.Error(cstingDevice, crystall);
        }

        public override void Message(CAD cstingDevice, int sig)
        {
            Soul.Signil.Signal(sig);
            base.Message(cstingDevice, sig);
        }
    }
}