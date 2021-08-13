import { motion } from "framer-motion"

function Contact() {
    return (
        <motion.div className='about' animate={{ opacity: 1}} initial={ {opacity: 0}} transition={{ ease: "easeOut", duration: 2 }}>
            
            <h2 className='contact-title'>Contact Me</h2>
            <div>
                <p className='contact-me-p'>Reach out to me which whichever method you prefer below!</p>
                    <ul className='contact-me-list d-flex justify-content-around'>
                        <li><a href="mailto:brettfleming015@gmail.com" target='_blank'>brettfleming015@gmail.com</a></li>
                        <li>651.764.9441</li>
                        <li><a href="https://linkedin.com/in/brettfleming15" target='_blank'>linkedin</a></li>
                        <li><a href="https://github.com/brettfleming" target='_blank'>GitHub</a></li>
                    </ul>
            </div>
        </motion.div>
    )
    
}


export default Contact;