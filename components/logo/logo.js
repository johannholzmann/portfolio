import { useTheme } from "next-themes"

import Image from 'next/image'

export default function Logo({height, width}) {
    const { theme } = useTheme();
    const wid = width ? width : 72;
    const hei = height ? height : 16;
    if (theme === "light") {
        return (
            <span>
                <Image src="/logo_dark.png" alt="Vercel Logo" width={wid} height={hei} />
            </span>
        )
    }

    return (
        <span>
            <Image src="/logo_light.png" alt="Vercel Logo" width={wid} height={hei} />
        </span>
    );
}