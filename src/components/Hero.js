import { motion } from 'framer-motion';
import { FiArrowRight } from 'react-icons/fi';
import { FaGithub, FaLinkedin, FaTwitter, FaEnvelope } from 'react-icons/fa';

export default function Hero() {
    const containerVariants = {
        hidden: { opacity: 0 },
        visible: { opacity: 1, transition: { staggerChildren: 0.2, delayChildren: 0.3 } }
    };

    const itemVariants = {
        hidden: { opacity: 0, y: 20 },
        visible: { opacity: 1, y: 0, transition: { duration: 0.8 } }
    };

    return (
        <section id="home" className="min-h-screen pt-20 px-4 sm:px-6 lg:px-8 flex items-center justify-center bg-gradient-to-br from-dark via-dark to-secondary">
            <motion.div variants={containerVariants} initial="hidden" animate="visible" className="max-w-4xl mx-auto text-center">
                <motion.h1 variants={itemVariants} className="text-5xl sm:text-6xl md:text-7xl font-bold mb-6 text-white">
                    Welcome to <span className="text-primary">NeuroLabs</span>
                </motion.h1>
                <motion.p variants={itemVariants} className="text-xl sm:text-2xl text-gray-300 mb-8 leading-relaxed">
                    Innovative solutions for modern challenges. Showcasing cutting-edge projects and expertise.
                </motion.p>
                <motion.div variants={itemVariants} className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
                    <button className="bg-primary text-dark px-8 py-3 rounded-lg font-semibold hover:bg-cyan-400 transition flex items-center justify-center gap-2">
                        View Projects <FiArrowRight />
                    </button>
                    <button className="border-2 border-primary text-primary px-8 py-3 rounded-lg font-semibold hover:bg-primary hover:text-dark transition">
                        Get In Touch
                    </button>
                </motion.div>
                <motion.div variants={itemVariants} className="flex justify-center gap-6">
                    {[
                        { icon: FaGithub, link: 'https://github.com' },
                        { icon: FaLinkedin, link: 'https://linkedin.com' },
                        { icon: FaTwitter, link: 'https://twitter.com' },
                        { icon: FaEnvelope, link: 'mailto:contact@neurolabs.io' }
                    ].map((social, index) => (
                        <a key={index} href={social.link} target="_blank" rel="noopener noreferrer" className="text-2xl text-primary hover:text-cyan-400 transition">
                            <social.icon />
                        </a>
                    ))}
                </motion.div>
            </motion.div>
        </section>
    );
}