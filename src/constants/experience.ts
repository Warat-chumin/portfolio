export interface Experience {
  company: { th: string; en: string };
  role: { th: string; en: string };
  period: { th: string; en: string };
  responsibilities: { th: string[]; en: string[] };
}

export const experiences: Experience[] = [
  {
    company: { th: "FREEWILL FX", en: "FREEWILL FX" },
    role: { th: "Fullstack Developer", en: "Fullstack Developer" },
    period: { th: "2564 - ปัจจุบัน", en: "2021 - Present" },
    responsibilities: {
      th: [
        "พัฒนา Web Application สำหรับลูกค้าองค์กร รองรับผู้ใช้งานหลายพันราย",
        "พัฒนา RESTful API ด้วย Node.js และ Go รองรับ request ปริมาณสูง",
        "พัฒนา Microservices Architecture เพื่อเพิ่มความสามารถในการ scale ระบบ",
        "ปรับปรุง performance ของ API ลด response time ลง ~30%",
        "ปรับปรุง query และ indexing ของ MySQL เพื่อลดเวลาในการดึงข้อมูล",
        "ดูแลระบบ production และแก้ไข incident เพื่อให้ uptime มากกว่า 99%"
      ],
      en: [
        "Developed enterprise web applications supporting thousands of concurrent users.",
        "Built high-performance RESTful APIs using Node.js and Go to handle massive request volumes.",
        "Architected Microservices to enhance system scalability and reliability.",
        "Optimized API performance, achieving a 30% reduction in response latency.",
        "Refined MySQL queries and indexing strategies to accelerate data retrieval.",
        "Managed production environments and resolved incidents to maintain >99% uptime."
      ]
    }
  },
  {
    company: { th: "KNACX Corporation", en: "KNACX Corporation" },
    role: { th: "Software Developer", en: "Software Developer" },
    period: { th: "2563 - 2564", en: "2020 - 2021" },
    responsibilities: {
      th: [
        "พัฒนา Fullstack Application ครอบคลุม frontend, backend และ mobile integration",
        "ออกแบบระบบจัดการข้อมูลที่ปลอดภัย และปรับปรุง performance ของฐานข้อมูล",
        "ลดเวลาในการโหลดข้อมูลลง ~20-30% ด้วยการ optimize query",
        "วิเคราะห์ requirement และออกแบบ solution เพื่อลดความซ้ำซ้อนของระบบ"
      ],
      en: [
        "Engineered fullstack applications across web, mobile, and backend ecosystems.",
        "Designed secure data management architectures and improved database performance.",
        "Achieved 20-30% faster data loading through rigorous query optimization.",
        "Analyzed requirements and designed efficient solutions to minimize system complexity."
      ]
    }
  },
  {
    company: { th: "Computer Union", en: "Computer Union" },
    role: { th: "Software Developer", en: "Software Developer" },
    period: { th: "2561 - 2562", en: "2018 - 2019" },
    responsibilities: {
      th: [
        "พัฒนา Web และ Mobile Application สำหรับใช้งานภายในองค์กร",
        "ออกแบบและดูแลฐานข้อมูล รองรับหลาย module",
        "แก้ไขปัญหาทางเทคนิค และ debug ระบบ",
        "Deploy ระบบขึ้น production และดูแลการใช้งานจริง"
      ],
      en: [
        "Developed internal web and mobile applications for organizational efficiency.",
        "Designed and maintained robust database schemas supporting multiple business modules.",
        "Resolved critical technical issues and debugged complex system behaviors.",
        "Deployed production systems and monitored live usage metrics for continuous improvement."
      ]
    }
  }
];
