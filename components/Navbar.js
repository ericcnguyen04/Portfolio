// import Link from next
import Link from 'next/link'

export default function Navbar() {
    return (
        <nav>
            <Link href='/'>
                {/* link takes child components */}
                Home
            </Link>

            <Link href="/about">
                About me
            </Link>

            {/* outside sources use regular a tags */}
            <a 
                href=""
                target="_blank"
            >
                see my work
            </a>

        </nav>
    )
}