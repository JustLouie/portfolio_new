import Link from "next/link";
import Image from "next/image";
import Container from "@/components/Container";
import Nav from "@/components/Nav";


const Header = () => {
    return (
        <header className=" py-5 absolute top-0 left-0 w-full z-10">
            <Container >
                <div className="flex items-center justify-between">
                    <Link href='/' className="flex items-center gap-3 group">
                        <Image src='/logo.svg' alt='logo' width={30} height={30} className="transition-transform group-hover:scale-105" />
                        <span className="text-lg font-semibold bg-gradient-to-r from-purple-100 to-indigo-500 bg-clip-text text-transparent tracking-tight">
                            George Shalamberidze
                        </span>
                    </Link>
                    <div className="flex items-center gap-6">
                        <Nav />
                        <div className="relative group">
                            <button className="flex items-center gap-2 px-3 py-1.5 text-sm font-medium text-white hover:border-gray-600 transition-colors">
                                EN
                                <svg className="w-4 h-4 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                                </svg>
                            </button>
                            <div className="absolute right-0 mt-2 w-20 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 shadow-lg">
                                <button className="w-full px-3 py-2 text-left text-sm font-medium text-white hover:from-indigo-400 hover:to-purple-200 transition-all rounded-t-lg">
                                    EN
                                </button>
                                <button className="w-full px-3 py-2 text-left text-sm font-medium text-gray-400 hover:text-white hover:bg-gray-800/50 transition-colors rounded-b-lg">
                                    GE
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </Container>
        </header>
    )
}

export default Header;