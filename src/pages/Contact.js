import { motion } from "framer-motion"

function Contact() {
    return (
        <motion.div className='about' animate={{ opacity: 1}} initial={ {opacity: 0}} transition={{ ease: "easeOut", duration: 2 }}>
            
            <h2 className='contact-title'>Contact Me</h2>
            <div>
                <p className='contact-me-p'>Reach out to me which whichever method you prefer below!</p>
                    <ul className='contact-me-list d-flex justify-content-around'>
                        <li><a href="mailto:brett2133424235324@gmail.com" target='_blank'>email</a></li>
                        <li>555.555.5555</li>
                        <li><a href="https://linkedin.com/in/brettfleming15" target='_blank'>linkedin</a></li>
                        <li><a href="https://github.com/brettfleming" target='_blank'>GitHub</a></li>
                    </ul>
            </div>
        </motion.div>
    )
    
}


export default Contact;