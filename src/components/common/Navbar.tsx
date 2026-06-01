import Image from 'next/image';
import Link from 'next/link'
import companylogo from '../../../public/weblogoheader.webp'
import ButtonTyp1 from '../theme/ButtonTyp1';
import Container from './Container';

export default function Navbar() {
    return (
        <header className="border-b">
            <Container>
                <nav >
                    <div className="mx-auto max-w-7xl py-5 flex items-center justify-between">
                        <Link className='' href='/'>
                            <Image className='h-10 w-auto' src={companylogo} alt="Logo" loading="eager" />
                        </Link>

                        <div className="flex gap-6">
                            <Link href="/solutions">Solutions</Link>
                            <Link href="/about">About</Link>
                            <Link href="/blogs">Blogs</Link>
                        </div>

                        <div className="">
                            <ButtonTyp1 text='Contact Us' link='/contact' />
                        </div>
                    </div>
                </nav>

            </Container>

        </header>
    );
}