import { useState } from 'react';
import { motion } from 'framer-motion';
import { FiMenu, FiX } from 'react-icons/fi';

export default function Navbar() {
    const [isOpen, setIsOpen] = useState(false);
    const toggleMenu = () => setIsOpen(!isOpen);

    return (
        <nav className="fixed w-full bg-dark/80 backdrop-blur-md z-50 border-b border-primary/20">
            <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex justify-between items-center h-16">
                    <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="text-2xl font-bold text-primary">
                        NeuroLabs
                    </motion.div>
                    <button onClick={toggleMenu} className="md:hidden text-primary">
                        {isOpen ? <FiX size={24} /> : <FiMenu size={24} />}
                    </button>
                    <motion.ul initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="hidden md:flex gap-8">
                        {['Home', 'Projects', 'About', 'Contact'].map((item) => (
                            <li key={item}>
                                <a href={`#${item.toLowerCase()}`} className="hover:text-primary transition">
                                    {item}
                                </a>
                            </li>
                        ))}
                    </motion.ul>
                </div>
                {isOpen && (
                    <motion.div initial={{ height: 0 }} animate={{ height: 'auto' }} exit={{ height: 0 }} className="md:hidden">
                        <ul className="flex flex-col gap-4 pb-4">
                            {['Home', 'Projects', 'About', 'Contact'].map((item) => (
                                <li key={item}>
                                    <a href={`#${item.toLowerCase()}`} className="hover:text-primary transition">
                                        {item}
                                    </a>
                                </li>
                            ))}
                        </ul>
                    </motion.div>
                )}
            </div>
        </nav>
    );
}