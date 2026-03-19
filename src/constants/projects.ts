import { Skill } from './skills';

export interface Project {
  slug: string;
  title: { th: string; en: string };
  description: { th: string; en: string };
  longDescription: { th: string; en: string };
  techStack: Skill[];
  features: { th: string[]; en: string[] };
  impact: { th: string[]; en: string[] };
  challenges: { th: string; en: string };
  solutions: { th: string; en: string };
  link?: string;
  github?: string;
  featured?: boolean;
  systemDesign?: boolean;
  image?: string;
}

export const projects: Project[] = [
  {
    slug: 'fleetlink',
    title: { th: 'Fleetlink — ระบบบริหารจัดการยานพาหนะ', en: 'Fleetlink — Fleet Management Platform' },
    description: {
      th: 'แพลตฟอร์มจัดการยานพาหนะประสิทธิภาพสูง รองรับรถมากกว่า 50,000 คัน พร้อมระบบติดตามแบบ Real-time',
      en: 'High-performance fleet management platform supporting 50,000+ vehicles with real-time tracking.'
    },
    longDescription: {
      th: 'ระบบ Fleet Management ขนาดใหญ่ที่รองรับการอัปเดต location ปริมาณสูงจากรถหลายหมื่นคันพร้อมกัน โดยใช้ Go ในการประมวลผลข้อมูลเพื่อลด latency และออกแบบ database indexing สำหรับข้อมูลแบบ time-series โดยเฉพาะ',
      en: 'Large-scale Fleet Management system handling high-frequency location updates from tens of thousands of vehicles. Powered by Go for low-latency processing and optimized with custom indexing for time-series data.'
    },
    techStack: [
      { name: 'React', icon: 'Atom' },
      { name: 'Laravel', icon: 'Globe' },
      { name: 'Go', icon: 'Cpu' },
      { name: 'MySQL', icon: 'Database' },
      { name: 'MongoDB', icon: 'Database' }
    ],
    features: {
      th: [
        'ติดตามตำแหน่งและสถานะรถแบบ Real-time บน Dashboard',
        'รองรับการรับข้อมูลพิกัดปริมาณมหาศาลพร้อมกัน',
        'ระบบแจ้งเตือนอัจฉริยะตามเงื่อนไขทางธุรกิจ',
        'รายงานสรุปการใช้งานรถและการเดินทาง'
      ],
      en: [
        'Real-time vehicle tracking and status monitoring on Dashboard.',
        'Scalable ingestion layer for massive concurrent GPS data.',
        'Intelligent alerting system based on business logic.',
        'Comprehensive vehicle usage and trip reporting.'
      ]
    },
    impact: {
      th: [
        'รองรับยานพาหนะในระบบมากกว่า 50,000 คัน',
        'ลด Latency ในการประมวลผลข้อมูลด้วยภาษา Go',
        'ช่วยให้ผู้ประกอบการบริหารรถได้อย่างมีประสิทธิภาพขึ้น'
      ],
      en: [
        'Supports over 50,000 vehicles within the ecosystem.',
        'Significantly reduced data processing latency using Go.',
        'Empowered fleet owners with actionable real-time insights.'
      ]
    },
    challenges: {
      th: 'การจัดการความถี่สูงของข้อมูลพิกัด (High Throughput) ที่เข้ามาพร้อมกันจำนวนมาก และการทำ Query ข้อมูลย้อนหลังให้รวดเร็ว',
      en: 'Handling high-throughput concurrent location updates and ensuring rapid historical data retrieval.'
    },
    solutions: {
      th: 'ใช้ Go (Gin/Fiber) ในการรับข้อมูลเพื่อประสิทธิภาพสูงสุด และทำ Database Indexing สำหรับข้อมูล Time-series',
      en: 'Leveraged Go (Gin/Fiber) for maximum ingestion performance and implemented specialized time-series indexing.'
    },
    featured: true,
    systemDesign: true,
    image: "/portfolio/projects/fleetlink.png",
    link: "https://fleetlink.cipcloud.net/"
  },
  {
    slug: 'terminus',
    title: { th: 'TERMINUS — ระบบวิเคราะห์และบริหาร Fleet', en: 'TERMINUS — Fleet Analysis & Management' },
    description: {
      th: 'ระบบวิเคราะห์ข้อมูลเชิงลึกสำหรับการบริหารรถขนส่ง เน้นการประมวลผล log และรายงานเชิงธุรกิจ',
      en: 'Deep data analytics platform for fleet management, focusing on log processing and business reporting.'
    },
    longDescription: {
      th: 'ระบบที่ต่อยอดจาก Fleet Management พื้นฐาน โดยเน้นไปที่การวิเคราะห์ข้อมูลการใช้งานรถ การทำรายงานเชิงลึก และ dashboard เพื่อช่วยในการตัดสินใจทางธุรกิจ ออกแบบด้วย architecture แบบ modular เพื่อความยืดหยุ่น',
      en: 'An advanced analytics system extending basic fleet management. Focused on vehicle usage analysis, in-depth reporting, and business intelligence dashboards. Built with a modular architecture for maximum flexibility.'
    },
    techStack: [
      { name: 'React', icon: 'Atom' },
      { name: 'Laravel', icon: 'Globe' },
      { name: 'Go', icon: 'Cpu' },
      { name: 'MySQL', icon: 'Database' },
      { name: 'MongoDB', icon: 'Database' }
    ],
    features: {
      th: [
        'ระบบวิเคราะห์พฤติกรรมการขับขี่และการใช้งานรถ',
        'Backend service สำหรับประมวลผล log ข้อมูลมหาศาล',
        'Business Dashboard สำหรับสรุปสถิติสำคัญ',
        'ระบบ Modular รองรับการเพิ่ม Feature ในอนาคต'
      ],
      en: [
        'Driving behavior and vehicle usage analytics.',
        'High-performance backend services for log data processing.',
        'Business dashboards for strategic KPI monitoring.',
        'Modular architecture ready for future feature expansions.'
      ]
    },
    impact: {
      th: [
        'ช่วยลดต้นทุนการดำเนินงานผ่านการวิเคราะห์ข้อมูล',
        'ระบบมีความยืดหยุ่นสูง รองรับการขยายตัวของธุรกิจ',
        'เพิ่มความแม่นยำในการทำรายงานสรุปประจำเดือน'
      ],
      en: [
        'Reduced operational costs through data-driven insights.',
        'Highly flexible system supporting business scaling.',
        'Improved accuracy and speed of monthly reporting cycles.'
      ]
    },
    challenges: {
      th: 'การประมวลผลข้อมูล Log ขนาดใหญ่เพื่อเปลี่ยนเป็น Insight ที่ใช้งานได้จริง',
      en: 'Processing massive log data volumes into actionable business insights.'
    },
    solutions: {
      th: 'ออกแบบระบบให้ประมวลผลแบบ Background Task และใช้ NoSQL (MongoDB) สำหรับเก็บข้อมูล Log',
      en: 'Implemented background task processing and utilized MongoDB for efficient log storage.'
    },
    image: "/portfolio/projects/terminus.png",
    link: "https://app-v2.terminusfleet.com/"
  },
  {
    slug: 'diamond',
    title: { th: 'DIAMOND — ระบบเว็บไซต์และคำนวณวัสดุ/ราคา', en: 'DIAMOND — Pricing & Inventory Platform' },
    description: {
      th: 'เว็บไซต์องค์กรขนาดใหญ่สำหรับแสดงสินค้าและบริการ พร้อมระบบคำนวณวัสดุตามพื้นที่ใช้งาน',
      en: 'Enterprise-grade product showcase and inventory platform with intelligent area-based material calculators.'
    },
    longDescription: {
      th: 'แพลตฟอร์มที่ช่วยให้ลูกค้าสามารถเลือกดูวัสดุก่อสร้าง และคำนวณปริมาณที่ต้องใช้ได้ทันที โดยเน้นไปที่ SEO เพื่อการเข้าถึงข้อมูล และ Performance เพื่อประสบการณ์การใช้งานที่ดีที่สุด',
      en: 'A platform enabling customers to browse construction materials and calculate required quantities instantly. Focused on SEO for maximum reach and Performance for superior user experience.'
    },
    techStack: [
      { name: 'Vue.js', icon: 'Code2' },
      { name: 'Node.js', icon: 'Server' },
      { name: 'MySQL', icon: 'Database' }
    ],
    features: {
      th: [
        'ระบบ Catalog สินค้าขนาดใหญ่ (Roof, Artificial Wood, etc.)',
        'Logic การคำนวณวัสดุอัตโนมัติตามพื้นที่และประเภท',
        'โครงสร้าง Frontend ที่รองรับการขยาย Content มหาศาล',
        'การทำ SEO Optimization ในระดับโครงสร้าง'
      ],
      en: [
        'Large-scale product catalog (Roof, Artificial Wood, etc.).',
        'Automated material calculation logic based on area and type.',
        'Scalable frontend architecture for massive content updates.',
        'Deep SEO optimization at the structural level.'
      ]
    },
    impact: {
      th: [
        'เพิ่มยอดการเข้าถึงเว็บไซต์ผ่านผลการค้นหา (SEO)',
        'ลดความผิดพลาดในการคำนวณวัสดุของลูกค้า',
        'รองรับสินค้าและหมวดหมู่ที่หลากหลายได้อย่างลื่นไหล'
      ],
      en: [
        'Significantly boosted organic traffic through SEO.',
        'Reduced customer material calculation errors.',
        'Seamlessly handles diverse products and complex categories.'
      ]
    },
    challenges: {
      th: 'การทำ SEO ให้มีประสิทธิภาพสูงสุด และการจัดการ Content จำนวนมากให้คงความเร็ว',
      en: 'Achieving peak SEO efficiency while maintaining site speed with massive content.'
    },
    solutions: {
      th: 'ใช้ Vue.js ร่วมกับการทำ Optimize Performance และโครงสร้าง HTML ที่ถูกต้องตามหลัก SEO',
      en: 'Leveraged Vue.js with performance optimizations and semantic HTML for superior SEO ranking.'
    },
    image: "/portfolio/projects/diamond.png",
    link: "https://www.dbp.co.th/th"
  },
  {
    slug: 'cloudtime-passenger',
    title: { th: 'Cloudtime Passenger — ระบบบันทึกเวลาเข้างาน', en: 'Cloudtime Passenger — Attendance System' },
    description: {
      th: 'ระบบตรวจสอบและบันทึกเวลาเข้า-ออกงานของพนักงาน พร้อม Dashboard สำหรับฝ่าย HR',
      en: 'Employee attendance tracking and check-in/out system with comprehensive HR dashboards.'
    },
    longDescription: {
      th: 'แอปพลิเคชันที่ช่วยให้องค์กรสามารถติดตามเวลาทำงานของพนักงานได้อย่างแม่นยำ โดยมี API สำหรับประมวลผลข้อมูล และ Dashboard สำหรับตรวจสอบสถิติแบบรายบุคคลและรายแผนก',
      en: 'A professional application enabling organizations to track employee working hours accurately. Features robust APIs for data processing and detailed management dashboards.'
    },
    techStack: [
      { name: 'React', icon: 'Atom' },
      { name: 'Laravel', icon: 'Globe' },
      { name: 'Go', icon: 'Cpu' },
      { name: 'MySQL', icon: 'Database' },
      { name: 'MongoDB', icon: 'Database' }
    ],
    features: {
      th: [
        'ระบบ Check-in/out ติดตามเวลาการทำงาน',
        'API ประมวลผลและจัดเก็บข้อมูลพนักงาน',
        'HR Dashboard สำหรับวิเคราะห์สถิติเวลาเข้างาน',
        'ระบบแจ้งเตือนและส่งรายงานอัตโนมัติ'
      ],
      en: [
        'Secure check-in/out tracking system.',
        'Robust APIs for employee data storage and processing.',
        'HR Dashboard for detailed attendance analytics.',
        'Automated notification and reporting system.'
      ]
    },
    impact: {
      th: [
        'เพิ่มความโปร่งใสในการตรวจสอบเวลาทำงาน',
        'ลดภาระงานเอกสารของฝ่าย HR',
        'สรุปข้อมูลรายเดือนได้รวดเร็วและแม่นยำ'
      ],
      en: [
        'Enhanced transparency in working hour audits.',
        'Significantly reduced HR administrative tasks.',
        'Accelerated monthly payroll and attendance reports.'
      ]
    },
    challenges: {
      th: 'การรักษาความถูกต้องของข้อมูลเวลาและการเชื่อมต่อที่อาจไม่เสถียร',
      en: 'Ensuring data integrity and handling inconsistent connectivity.'
    },
    solutions: {
      th: 'ออกแบบระบบให้มี Caching และการ Re-sync ข้อมูลอัตโนมัติเมื่อกลับมาออนไลน์',
      en: 'Designed with local caching and automated background re-syncing upon connectivity recovery.'
    },
    image: "/portfolio/projects/cloudtime.png",
    link: "https://passenger.cloudtime.cloud/auth/login"
  }
];
