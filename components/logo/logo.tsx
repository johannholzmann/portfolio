"use client";

import { useTheme } from "next-themes"
import Image from 'next/image'
import { useEffect, useState } from "react";

export default function Logo({ height, width }: { height: number, width: number }) {
    const [lightLogo, setLightLogo] = useState<boolean>(true);
    const { theme } = useTheme();
    const logoWidth = width ? width : 72;
    const logoHeight = height ? height : 16;

    useEffect(() => {
        setLightLogo(theme === "light");
    }, [theme]);

    return (
        <span>
            <Image src={lightLogo ? "/logo_dark.png" : "/logo_light.png"} alt="Vercel Logo" width={logoWidth} height={logoHeight} />
        </span>
    )
}