import Image from 'next/image'

export default function Avatar() {
    let width = 1447;
    width = 350;
    return (
        <Image src="/avatar.png" alt="Avatar" width={width} height={width} className="rounded-[50%]" priority={true} quality={100} />
    );
}