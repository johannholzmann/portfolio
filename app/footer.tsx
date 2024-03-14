import Image from 'next/image';
import View from "@/components/views/views";

const width_icons = 50;
function Footer() {
    return (
        <footer className='mb-2'>
            <div className="flex justify-center">
                <a href="https://www.linkedin.com/in/johann-holzmann/" target="_blank" rel="noopener noreferrer">
                    <Image alt="Linkedin icon" src="/icons8-linkedin-circled-240.png" width={width_icons} height={width_icons} />
                </a>
                <a href="https://github.com/johannholzmann" target="_blank" rel="noopener noreferrer">
                    <Image alt="Github icon" src="/icons8-github-240.png" width={width_icons} height={width_icons} />
                </a>
                <a href="mailto:johannholzmann@hotmail.com" target="_blank" rel="noopener noreferrer">
                    <Image alt="Mail icon" src="/icons8-envelope-96.png" width={width_icons} height={width_icons} />
                </a>
            </div>
            <View />
            <div>
                {'Copyright © Portfolio '}
                {new Date().getFullYear()}
            </div>
        </footer>
    );
}

export default Footer;