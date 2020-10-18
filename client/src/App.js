// import React from 'react'

// export default function App() {
//     return (
// 		<div className="blocks">
// 			<div className="block block--left">
// 				<div className="block__inner">
// 					<div className="block-content">
// 					<h1 className="block__title"><span>Hey, I'm Shehryar,</span></h1>
// 					<h1 className="block__title"><span>a <em>software engineering student</em> in Waterloo, CA.</span></h1>
// 					<div className="block__cta"><a href="resume.pdf" target="_blank"><span>Download Resume</span></a></div>
// 					<div className="block__cta"><a href="mailto:sassad@uwaterloo.ca"><span>Get In Touch</span></a></div>
// 					<div className="block__social">
// 						<a href="https://github.com/ShehryarX" target="_blank" className="block__social__link">
// 						<svg>
// 							<use href="images/svg-defs.svg#github" />
// 							</svg>
// 						</a>
// 						<a href="https://www.linkedin.com/in/sassad/" target="_blank" className="block__social__link">
// 							<svg>
// 								<use href="images/svg-defs.svg#linkedin"/>
// 							</svg>
// 						</a>
// 					</div>
// 					</div>
// 				</div>
// 				<div className="block__bgi"></div>
// 			</div>
// 			<div className="block block--right">
// 				<div className="block__inner">
// 					<div className="content content--about">
// 					<div className="content__tag-wrapper">
// 						<h2 className="content__tag">About</h2>
// 					</div>
// 					<div className="content__inner">
// 						<p>Hey there! I'm an engineering student who loves to solve hard problems using my technical and communication skills.
// 						<b>I am currently looking for a Fall 2020 internship.</b></p>
// 						<p></p>
// 					<p>I have extensive experience with <em>Java</em> <em>C</em> <em>C++</em> <em>JavaScript</em> and am working to improve my <em>Python</em> every day!</p>
// 						</div>
// 					</div>
// 					<div className="content content--exp" style={{
// 						visibility:"inherit",
// 						opacity:1,
// 						transform:"matrix(1,0,0,1,0,0)"}}>
// 					<div className="content__tag-wrapper">
// 						<h2 className="content__tag">Work Experience</h2>
// 					</div>
// 					<div className="content__inner">
// 					<div className="experience">
// 							<h3 className="experience__agency"><a href="https://www.google.com">Google</a></h3>
// 							<p className="experience__time">February 2020 — May 2020</p>
// 							<p className="experience__location">Software Engineering Intern</p>
// 							<p className="experience__role">Working on Firebase!</p>
// 					</div>
// 					<div className="experience">
// 							<h3 className="experience__agency"><a href="https://www.faire.com">Faire</a></h3>
// 							<p className="experience__time">May 2019 — August 2019</p>
// 							<p className="experience__location">Software Engineering Intern</p>
// 							<p className="experience__role">Spearheaded and worked on several major features and improved overall website efficiency.</p>
// 						</div>
// 						<div className="experience">
// 							<h3 className="experience__agency"><a href="https://www.manulife.ca/for-you.html">Manulife</a></h3>
// 							<p className="experience__time">July 2018 — August 2018</p>
// 							<p className="experience__location">Software Engineering Intern</p>
// 							<p className="experience__role">Built high-visibility enterprise pipeline dashboard to monitor projects. Applied performance tuning to LDAP servers.</p>
// 						</div>
// 						<div className="experience">
// 							<h3 className="experience__agency"><a href="index.html">Neoterix Health & Fitness</a></h3>
// 							<p className="experience__time">May 2017 - September 2017</p>
// 							<p className="experience__location">Software Engineering Intern</p>
// 							<p className="experience__role">Reduced video chat latency in WebRTC. Created A/B testing mechanisms to maximize user retention.</p>
// 						</div>
// 					</div>
// 					</div>
// 					<div className="content content--projects">
// 					<div className="content__tag-wrapper">
// 						<h2 className="content__tag">PROJECTS</h2>
// 					</div>
// 					<div className="content__inner">
// 						<div className="project">
// 							<h3 className="project__title"><a href="https://github.com/ShehryarX/auxilium" target="_blank" rel="noopener noreferrer">Auxilium</a></h3>
// 							<p className="project__description">Registered micro-financing for low income populations. Winner at PennApps.</p>
// 						</div>
// 						<div className="project">
// 							<h3 className="project__title"><a href="https://github.com/ShehryarX/realm" target="_blank" rel="noopener noreferrer">Realm</a></h3>
// 							<p className="project__description">Interactive AR and Voice Powered Virtual Presentations. 1st Place AWS at HackThe6ix '19.</p>
// 						</div>
// 					<div className="project">
// 							<h3 className="project__title"><a href="index.html" target="_blank" rel="noopener noreferrer">Falcon</a></h3>
// 							<p className="project__description">A cryptocurrency trader that detects real-time triangular arbitrage opportunities.</p>
// 						</div>
// 						<div className="project">
// 							<h3 className="project__title"><a href="https://github.com/ShehryarX/firefly" target="_blank" rel="noopener noreferrer">Firefly</a></h3>
// 							<p className="project__description">A cross-platform, high performance game engine written in C++ using OpenGL.</p>
// 						</div>
// 						<div className="project">
// 							<h3 className="project__title"><a href="https://github.com/ShehryarX/vaccinaire" target="_blank" rel="noopener noreferrer">Vaccinaire</a></h3>
// 							<p className="project__description">An autonomous drone to deliver vaccines and essential medicine to remote places.</p>
// 						</div>
// 						<div className="project">
// 							<h3 className="project__title"><a href="https://github.com/ShehryarX/confluence" target="_blank" rel="noopener noreferrer">Confluence</a></h3>
// 							<p className="project__description">A software to distribute large computational tasks over a lot of computers.</p>
// 						</div>
// 						<div className="project">
// 							<h3 className="project__title"><a href="https://devpost.com/ShehryarX" target="_blank" rel="noopener noreferrer">Hackathons</a></h3>
// 							<p className="project__description">I build really cool stuff at hackathons, from apps to holograms.</p>
// 						</div>
// 					</div>
// 					</div>
// 					<div className="content content--projects">
// 					<div className="content__tag-wrapper">
// 						<h2 className="content__tag">AWARDS</h2>
// 					</div>
// 					<div className="content__inner">
// 						<div className="project">
// 							<h3 className="project__title"><a href="index.html"target="_blank" rel="noopener noreferrer">Waterloo Engineering Competition</a></h3>
// 							<p className="project__description">Placed third for building a genetic AI that plays <a href="https://www.fltron.com/">Tron</a> </p>.
// 						</div>
// 						<div className="project">
// 							<h3 className="project__title"><a href="index.html"target="_blank" rel="noopener noreferrer">MAX Gala</a></h3>
// 							<p className="project__description">Awarded $10,000 for contributions to my community and non-profit organizations. </p>
// 						</div>
// 						<div className="project">
// 							<h3 className="project__title"><a href="index.html"target="_blank" rel="noopener noreferrer">BMO Financial Group Undergraduate Entrance Scholarship</a></h3>
// 							<p className="project__description">Awarded from the University of Waterloo for outstanding high school academic performance and extracurricular activites. </p>
// 						</div>
// 						<div className="project">
// 							<h3 className="project__title"><a href="index.html"target="_blank" rel="noopener noreferrer">Canadian Personal Finance Conference</a></h3>
// 							<p className="project__description">Pitched <a href="https://devpost.com/software/nomics"> Nomics </a> at <a href="https://hackinggood.devpost.com/">Hacking Good Toronto</a> and ended up as a finalist. Moved on to the CPFC where I placed second nationally.
// 							</p>
// 						</div>
// 					</div>
// 				</div>
// 			</div>
// 		</div>
// 	</div>
//     )
// }