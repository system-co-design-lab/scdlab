import { motion } from 'framer-motion';
import { Mail, Globe, GraduationCap } from 'lucide-react';
import Hero from '@/components/Hero';
import SectionHeader from '@/components/SectionHeader';
import professorImage from '@/components/assets/professor.jpg';
import professorImg from '../components/assets/professor.jpg';


const professor = {
  name: 'Aman Sinha (辛艾曼), PhD ',
  title: 'Principal Investigator',
  department: '',
  image: professorImg,
  email: '',
  // website: '',
  bio: 'Aman Sinha is an Assistant Professor of the Institute of Integrated Circuit Design (IICD) at National Sun Yat-Sen University (NSYSU), Taiwan.',
  bio2: 'His research interests include diverse aspects of Hardware-Software System Co-Design, including Algorithmic Optimizations, Memory-Centric Computing, Reconfigurable Systems, RISC-V SoCs, Domain-Specific Accelerators, and Distributed Computing. His current research focuses on accelerating key bioinformatics and drug discovery applications to enable affordable and real-time Personalized Medicine.',
  // interests: ['Computer Architecture', 'Memory Systems', 'ML Accelerators'],
};





const People = () => {
  return (
    <div className="min-h-screen">
      <Hero showScrollIndicator={false} />

      {/* Principal Investigator Modern Layout */}
      <section className="max-w-6xl mx-auto px-4 sm:px-8 lg:px-16 py-16">
        <div className="flex flex-col md:flex-row gap-14 items-center md:items-start">
          {/* PI Photo */}
          <div className="flex-shrink-0 w-56 h-56 md:w-64 md:h-64 rounded-3xl overflow-hidden border-4 border-accent/40 shadow-2xl bg-gradient-to-br from-accent/10 to-transparent">
            <img src={professor.image} alt={professor.name} className="w-full h-full object-contain" />
          </div>
          {/* PI Info */}
          <div className="flex-1 min-w-0">
            <h2 className="text-4xl md:text-5xl font-extrabold text-foreground mb-3 tracking-tight flex flex-wrap items-center gap-3">
              {professor.name}
              <span className="text-2xl md:text-3xl font-semibold text-muted-foreground"></span>
            </h2>
            <div className="flex flex-wrap gap-4 items-center mb-3">
              <span className="inline-block bg-accent/20 text-accent px-4 py-2 rounded-full text-base font-semibold">{professor.title}</span>
              <span className="inline-block bg-secondary/30 text-muted-foreground px-4 py-2 rounded-full text-base font-medium">{professor.department}</span>
            </div>
            <p className="text-muted-foreground mb-6 leading-relaxed max-w-3xl text-lg">{professor.bio}</p>
            <p className="text-muted-foreground mb-6 leading-relaxed max-w-3xl text-lg">{professor.bio2}</p>
            <div className="flex flex-wrap gap-6 mb-6">
              {/* <a href={`mailto:${professor.email}`} className="inline-flex items-center gap-2 text-muted-foreground hover:text-accent transition-colors text-lg">
                <Mail className="w-5 h-5" />
                {professor.email}
              </a>
              <a href={professor.website} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 text-muted-foreground hover:text-accent transition-colors text-lg">
                <Globe className="w-5 h-5" />
                Website
              </a> */}
            </div>
            <div className="mb-4">
              {/* <h4 className="font-bold text-foreground mb-2 text-xl">Research Interests</h4> */}
              <div className="flex flex-wrap gap-3">
                {/* {professor.interests.map((interest) => (
                  <span key={interest} className="px-4 py-2 rounded-full bg-accent/10 text-accent text-base font-semibold">
                    {interest}
                  </span>
                ))} */}
              </div>
            </div>
          </div>
        </div>
        {/* Visual Bio and Experience Section - Stacked */}
        <div className="mt-12 flex flex-col gap-12">
          {/* Education */}
          <div>
            <div className="flex items-center gap-4 mb-4">
              <GraduationCap className="w-8 h-8 text-accent" />
              <h4 className="font-semibold text-2xl text-foreground">Education</h4>
            </div>
            <div className="pl-12 space-y-3 text-base">
              <div>
                <span className="font-bold italic text-xl">Ph.D. in Electrical Engineering and Computer Science</span>
                <span className="italic text-lg text-muted-foreground"> (2019–2024)</span>
              </div>
              <div className="font-medium text-lg">
                National Yang Ming <span className="">Chiao Tung</span> University (NYCU), Taiwan
              </div>
              <div className="mt-4 text-base">
                <span>Advisor: Prof. <span className="">Bo-Cheng Lai</span></span>
              </div>
              <div className="text-base">
                Dissertation: <span className="italic">Parallel and Distributed Near-Memory Computing Hardware – Software Co-Design for <span className="">Genomic</span> Big Data Analysis Pipelines</span> （基因組大數據分析管線之平行分散式近儲存運算硬體軟體協同設計）
              </div>
              <div>
                <span className="font-bold italic text-xl">M.S. in Electrical Engineering and Computer Science</span>
                <span className="italic text-lg text-muted-foreground"> (2017–2019)</span>
              </div>
              <div className="font-medium text-lg">
                National Yang Ming Chiao Tung University (NYCU), Taiwan
              </div>
               <div className="mt-4 text-base">
                <span>Advisor: Prof. Bo-Cheng Lai</span>
              </div>
              <div className="text-base">
                <span className="italic">Promoted to Direct Ph.D. Program </span>
              </div>
              <div>
                <span className="font-bold italic text-xl">B.Tech in Information & Technology</span>
                <span className="italic text-lg text-muted-foreground"> (2011–2015)</span>
              </div>
              <div className="font-medium text-lg">
                National Institute of Science & Technology , India
              </div>
            </div>
          </div>
          {/* Professional Experience */}
          <div>
            <div className="flex items-center gap-4 mb-4">
              <Mail className="w-8 h-8 text-accent" />
              <h4 className="font-semibold text-2xl text-foreground">Professional Experience</h4>
            </div>
            <ul className="space-y-3 text-base text-muted-foreground pl-12">
              <li className="font-medium">Assistant Professor, NSYSU, January, 2026 – Present</li>
              <li className="font-medium">Postdoctoral Research Fellow, NYCU, December, 2024 – January, 2026</li>
              <li className="font-medium">Project Engineer, NYCU, July, 2024 – November, 2024</li>
            </ul>
          </div>
          {/* Honors */}
          <div>
            <div className="flex items-center gap-4 mb-4">
              <span className="w-8 h-8 flex items-center justify-center rounded-full bg-accent/10 text-accent text-2xl font-bold">🏅</span>
              <h4 className="font-semibold text-2xl text-foreground">Honors</h4>
            </div>
            <div className="pl-12 space-y-6 text-base">
              <div>
                <span className="font-bold">Best Paper Award, <span className="underline">MCSoc</span></span>
                <span className="italic"> (2023)</span><br />
                <span>International Symposium on Embedded <span className="underline">Multicore</span>/Many-core Systems-on-Chip</span>
              </div>
              <div>
                <span className="font-bold">Industrial Doctoral Fellowship</span>
                <span className="italic"> (2019–2021)</span><br />
                <span>Atgenomix, Taiwan</span>
              </div>
              <div>
                <span className="font-bold">Master’s Research Fellowship</span>
                <span className="italic"> (2017–2019)</span><br />
                <span>NCTU–ITRI Joint Cooperation Project</span>
              </div>
            </div>
          </div>
          {/* Services */}
          <div>
            <div className="flex items-center gap-4 mb-4">
              <span className="w-8 h-8 flex items-center justify-center rounded-full bg-accent/10 text-accent text-2xl font-bold">🛠️</span>
              <h4 className="font-semibold text-2xl text-foreground">Services</h4>
            </div>
            <div className="pl-12 space-y-6 text-base">
              <div>
                <span className="font-bold">Program Committee Member</span>
                <span className="italic"> (2025)</span><br />
                <span>IEEE International Conference on <span className="underline decoration-accent">Omni-layer Intelligent Systems</span> (COINS)</span>
              </div>
              <div>
                <span className="font-bold">Organizing Committee Member</span>
                <span className="italic"> (2025)</span><br />
                <span>International Symposium on Embedded <span className="underline decoration-accent">Multicore</span>/Many-core Systems-on-Chip (<span className="underline decoration-accent">MCSoc</span>)</span>
              </div>
              <div>
                <span className="font-bold">Program Committee Member</span>
                <span className="italic"> (2025)</span><br />
                <span>International Joint Conference on Artificial Intelligence (IJCAI)</span>
              </div>
              
              <div>
                <span className="font-bold">Artifact Evaluation Committee Member</span>
                <span className="italic"> (2025)</span><br />
                <span>IEEE/ACM Symposium on Microarchitecture (MICRO)</span>
              </div>
              <div>
                <span className="font-bold">Program Committee Member</span>
                <span className="italic"> (2025)</span><br />
                <span>The European Conference on Artificial Intelligence (ECAI)</span>
              </div>
              <div>
                <span className="font-bold">Session Chair</span>
                <span className="italic"> (2024)</span><br />
                <span>17th International Symposium on Embedded <span className="underline decoration-accent">Multicore</span>/Many-core Systems-on-Chip (<span className="underline decoration-accent">MCSoc</span>)</span>
              </div>
            </div>
          </div>

           <div>
            <div className="flex items-center gap-4 mb-4">
              <span className="w-8 h-8 flex items-center justify-center rounded-full bg-accent/10 text-accent text-2xl font-bold">📩</span>
              <h4 className="font-semibold text-2xl text-foreground">Contact</h4>
            </div>
            <div className="pl-12 space-y-6 text-base">
              <div>
                <span className="font-bold">Email : </span>
                <span className="italic"> amansinha.sw@gmail.com</span>
        
              </div>
              <div>
                <span className="font-bold">Phone : </span>
                <span className="italic"> xyz</span>
        
              </div>
              <div>
                <span className="font-bold">Address : </span>
                <span className="italic"> xyz</span>
        
              </div>
              
            </div>
          </div>

          
            
        </div>
      </section>

      

      

      
     
    </div>
  );
};

export default People;
