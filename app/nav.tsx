import Link from 'next/link';

const Navbar = () => {
    return (
        <nav>
            <div className="logo">
                <h1>Grooming Genie</h1>
            </div>

            <div className="links">
                <Link href="/">Home</Link>
                <Link href="/about">About</Link>
                <Link href="https://github.com/Shakeb100/GroomingGenie">GitHub</Link>
            </div>
        </nav>
    );
}

export default Navbar;