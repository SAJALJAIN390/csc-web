import { FadeInUp } from "./MotionWrappers";
import Link from "next/link";

function Footer(){
    return(
        <div>
            <footer className="bg-[#06334f] pt-[4rem] pb-[2rem] text-[rgba(255,255,255,0.7)]">
                <FadeInUp className="max-w-[1400px] mx-auto px-[40px]">
                    <div className="grid grid-cols-[2fr_repeat(3,1fr)] gap-[3rem] mb-[4rem] max-[900px]:grid-cols-[1fr]">
                        <div>
                        <h3 className="text-[1.25rem] font-[700] mb-[1.5rem] text-white flex items-center">
                            <span className="text-[#008ba3] mr-[0.5rem]">
                            <img
                                src="/assets/csc_logo.png"
                                alt="CSC Logo"
                                style={{ height: '64px', width: 'auto', objectFit: 'contain', display: 'block', margin: '-12px 0' }}
                            />
                            </span> 
                            THE CORRECT STEPS
                        </h3>
                        <p className="text-[0.75rem] text-[rgba(255,255,255,0.7)] leading-[1.6] max-w-[250px]">SPECIALIZED IN PROBLEM-SOLVING ROBOTICS AND AUTOMATION FOR INDUSTRIAL AND DEFENSE SECTORS.</p>
                        </div>
                        <div>
                        <h4 className="text-[0.9rem] font-[700] mb-[1.5rem] text-white">SOLUTIONS</h4>
                        <ul className="list-none flex flex-col gap-[0.8rem]">
                            <li><Link href="#" className="text-[0.8rem] text-[rgba(255,255,255,0.7)] transition-colors duration-200 ease 
                            hover:text-[#008ba3]">Sustainable &amp; Renewable Products</Link></li>
                            <li><Link href="#" className="text-[0.8rem] text-[rgba(255,255,255,0.7)] transition-colors duration-200 ease hover:text-[#008ba3]">Origami &amp; Flexure</Link></li>
                            <li><Link href="#" className="text-[0.8rem] text-[rgba(255,255,255,0.7)] transition-colors duration-200 ease hover:text-[#008ba3]">Physics of Design</Link></li>
                            <li><Link href="#" className="text-[0.8rem] text-[rgba(255,255,255,0.7)] transition-colors duration-200 ease hover:text-[#008ba3]">3D Printing</Link></li>
                        </ul>
                        </div>
                        <div>
                        <h4 className="text-[0.9rem] font-[700] mb-[1.5rem] text-white">OUR RESEARCH</h4>
                        <ul className="list-none flex flex-col gap-[0.8rem]">
                            <li><Link href="#" className="text-[0.8rem] text-[rgba(255,255,255,0.7)] transition-colors duration-200 ease hover:text-[#008ba3]">Research Papers &amp; Patents</Link></li>
                            <li><Link href="#" className="text-[0.8rem] text-[rgba(255,255,255,0.7)] transition-colors duration-200 ease hover:text-[#008ba3]">Blogs, Articles &amp; News</Link></li>
                        </ul>
                        </div>
                        <div>
                        <h4 className="text-[0.9rem] font-[700] mb-[1.5rem] text-white">LEGAL</h4>
                        <ul className="list-none flex flex-col gap-[0.8rem]">
                            <li><Link href="#" className="text-[0.8rem] text-[rgba(255,255,255,0.7)] transition-colors duration-200 ease hover:text-[#008ba3]">Terms &amp; Conditions</Link></li>
                            <li><Link href="#" className="text-[0.8rem] text-[rgba(255,255,255,0.7)] transition-colors duration-200 ease hover:text-[#008ba3]">Refund &amp; Cancellation Policy</Link></li>
                            <li><Link href="#" className="text-[0.8rem] text-[rgba(255,255,255,0.7)] transition-colors duration-200 ease hover:text-[#008ba3]">Privacy Policy</Link></li>
                        </ul>
                        </div>
                    </div>
                    <div className="flex justify-between pt-[2rem] text-[0.75rem] border-t border-[rgba(255,255,255,0.1)] max-[600px]:flex-col max-[600px]:gap-[1rem] max-[600px]:items-center">
                        <p>© 2026 THE CORRECT STEPS. ALL RIGHTS RESERVED.</p>
                        <p><Link href="https://thecorrectsteps.com" target="_blank" className="text-[rgba(255,255,255,0.6)] transition-colors duration-300 hover:text-[#008ba3]">THECORRECTSTEPS.COM ↗</Link></p>
                    </div>
                </FadeInUp>
            </footer>
        </div>
    )
}

export default Footer;