import i18n from "i18next";
import { initReactI18next } from "react-i18next"; 
import en from "./locale/en.json"; 
import ar from "./locale/ar.json"; 

i18n.use(initReactI18next).init({
  resources: {
    en: {
      translation: {
        heroTitle: "Coding Made Fun for Kids!",
        heroText: "We teach children aged 7-14 the fundamentals of coding in an engaging and playful way.",
        getStarted: "Get Started",
        home: "Home",
        about: "About",
        services: "Services",
        contact: "Contact",
        ContactUs:"Contact Us",
        login: "Login",
        signup: "Sign Up",
        heroTitle: "Coding Made Fun for Kids!",
        heroText: "We teach children aged 7-14 the fundamentals of coding in an engaging and playful way.",
        getStarted: "Get Started",
        schoolActivities: "School Activities",
        codingWorkshop: "Coding Workshop",
        codingWorkshopDesc: "Learn the basics of programming in a fun way.",
        programmingContest: "Programming Contest",
        programmingContestDesc: "Participate in challenges and win prizes.",
        programmingGame: "Programming Game",
        programmingGameDesc: "Learn coding through interactive games.",
        ourServices: "Our Services",
        academicPrograms: "1. Academic Programs",
        academicProgramsDesc:           "Supporting students to achieve academic excellence \n" +
        "through outstanding educational programs. \n" +
        "Providing tutoring sessions to improve student \n" +
        "performance in core subjects.",
        coCurricularActivities: "2. Co-Curricular Activities",
        coCurricularActivitiesDesc:  "Organizing various sports activities, including football, \n" +
          "basketball, and athletics. \n" +
          "Supporting artistic talents through music, art, and theater clubs. \n" +
          "Encouraging students to participate in national competitions \n" +
          "such as debates and science fairs.",
        educationalTechnology: "3. Educational Technology",
        educationalTechnologyDesc:  "Equipping classrooms with the latest technological \n" +
        "teaching tools. \n" +
        "Providing an online platform for communication between \n" +
        "students, parents, and teachers. \n" +
        "Facilitating access to digital learning resources to \n" +
        "assist students in their studies.",
        teamsPageTitle: "Our Team",
        meetOurTeam: "Meet Our Team",
        webDeveloper: "Web Developer",
        
        sabaName: "Saba Alhrishat",
        sabaBio: "AI coach specializing in Software Engineering, working with robots and passionate about training children.",
        
        shireenName: "Shireen Ramadan",
        shireenBio: "Shireen is an experienced developer with a passion for creating beautiful websites.",

        buthenaName: "Buthena Abdullah",
        buthenaBio: "Buthena is an experienced developer with a passion for creating beautiful websites.",

        tamaraName: "Tamar Mehdawi",
        tamaraBio: "Tamara is an experienced developer with a passion for creating beautiful websites.",
        home: 'Home',
        about: 'About Us',
        example: 'Activity',
        aboutUsHeader: 'About Us',
        staffTeam: "Our staff team",
        role: "Role",
        teams:"Teams",
        linkedin: "LinkedIn",
        vision: {
          title: "Our Vision",
          description1: "At Orange Coding School, we envision a world<br/> where coding education is accessible, innovative,<br/> and empowering. Our goal is to equip learners<br/> with the skills to create, problem-solve,<br/> and lead in the digital age.",
          description2: "Bridging the gap between education and<br/> industry to shape the future of technology."
        }
        ,
        missionTitle: "Our Mission",
        missionDescription: "We are dedicated to providing the best coding education for students and preparing them for a successful future.",
        missions: [
          "Provide high-quality coding education for all ages.",
          "Prepare students for future careers in technology.",
          "Make programming fun, engaging, and accessible.",
          "Develop problem-solving and critical thinking skills.",
          "Create a supportive and inclusive learning environment.",
          "Help students build real-world projects and portfolios.",
          "Encourage creativity and innovation in coding.",
          "Offer hands-on experience with modern technologies.",
          "Teach collaboration and teamwork through coding challenges.",
          "Empower students with skills for lifelong success."
        ],
        Service:"Services",
        schoolHistory: "School History",
        foundingVisionTitle: "1. Founding Vision",
       "foundingVisionText": "Our coding school was established with a clear mission: to equip students with cutting-edge programming skills and prepare them for a technology-driven world. Recognizing the increasing demand for skilled developers, we set out to create a learning environment that is both engaging and industry-focused.",
        earlyBeginningsTitle: "2. Early Beginnings",
"earlyBeginningsText": "The idea for the school was born out of a passion for technology and education. Initially, it started as a small initiative offering coding workshops and mentorship programs. These early efforts helped us understand the challenges students face when learning to code and shaped our innovative teaching methodologies.",
        lookingAheadTitle: "3. Looking Ahead",
 "lookingAheadText" : "As we continue to grow, our goal is to expand globally, introduce AI-powered learning assistants, and establish a research center for emerging technologies. Our vision is to empower the next generation of tech leaders and innovators.",

 partnersSection: {
  title: "Our Trusted Partners",
  text: "We are proud to collaborate with top companies to support our students and provide the best learning experience."
}    



        
      }
      
    },
    ar: {
      translation: {
        heroTitle: "البرمجة أصبحت ممتعه للأطفال!",
        heroText: "نحن نعلم الأطفال الذين تتراوح أعمارهم بين 7-14 أساسيات البرمجة بطريقة ممتعة ومسلية.",
        getStarted: "ابدأ الآن",
        home: "الرئيسية",
        about: "من نحن",
        services: "خدماتنا",
        contact: "اتصل بنا",
        login: "تسجيل الدخول",
        signup: "اشتراك",
        heroTitle: "البرمجة أصبحت ممتعه للأطفال!",
        heroText: "نحن نعلم الأطفال الذين تتراوح أعمارهم بين 7-14 أساسيات البرمجة بطريقة ممتعة ومسلية.",
        getStarted: "ابدأ الآن",
        schoolActivities: "أنشطة المدرسة",
        codingWorkshop: "ورشة البرمجة",
        ContactUs:"للتواصل معنا",
        codingWorkshopDesc: "تعلم أساسيات البرمجة بطريقة ممتعة.",
        programmingContest: "مسابقة البرمجة",
        programmingContestDesc: "شارك في التحديات واربح الجوائز.",
        programmingGame: "لعبة البرمجة",
        programmingGameDesc: "تعلم البرمجة من خلال الألعاب التفاعلية.",
        ourServices: "خدماتنا",
        academicPrograms: "١. البرامج الأكاديمية",
        academicProgramsDesc: "دعم الطلاب لتحقيق التميز الأكاديمي \n" +
          "من خلال برامج تعليمية متميزة. \n" +
          "توفير جلسات دراسية لتحسين أداء الطلاب \n" +
          "في المواد الأساسية.",
        coCurricularActivities: "٢. الأنشطة اللاصفية",
        coCurricularActivitiesDesc:  "تنظيم أنشطة رياضية متنوعة، بما في ذلك كرة القدم، \n" +
        "كرة السلة، وألعاب القوى. \n" +
        "دعم المواهب الفنية من خلال نوادي الموسيقى والفنون والمسرح. \n" +
        "تشجيع الطلاب على المشاركة في المسابقات الوطنية \n" +
        "مثل المناظرات والمعارض العلمية.",
        educationalTechnology: "٣. التكنولوجيا التعليمية",
        educationalTechnologyDesc: "تجهيز الفصول الدراسية بأحدث أدوات \n" +
        "التدريس التكنولوجية. \n" +
        "توفير منصة إلكترونية للتواصل بين الطلاب، \n" +
        "أولياء الأمور، والمعلمين. \n" +
        "تسهيل الوصول إلى الموارد التعليمية الرقمية \n" +
        "لمساعدة الطلاب في دراستهم.",
        teamsPageTitle: "فريقنا",
        meetOurTeam: "تعرف على فريقنا",
        webDeveloper: "مطور ويب",
        
        sabaName: "صبا الهريشات",
        sabaBio: "مدربة ذكاء اصطناعي متخصصة في هندسة البرمجيات، تعمل مع الروبوتات وتحب تدريب الأطفال.",
        
        shireenName: "شيرين رمضان",
        shireenBio: "شيرين مطورة ذات خبرة ولديها شغف بإنشاء مواقع ويب جميلة.",

        buthenaName: "بثينة عبد الله",
        buthenaBio: "بتينة مطورة ذات خبرة ولديها شغف بإنشاء مواقع ويب جميلة.",

        tamaraName: " تمارا مهداوي",
        tamaraBio: "تمارا مطورة ذات خبرة ولديها شغف بإنشاء مواقع ويب جميلة.",
        home: 'الرئيسية',
        about: 'معلومات عنا',
        example: 'انشطتنا',
        aboutUsHeader: 'معلومات عنا',
        staffTeam: "فريق العمل",
        role: "الدور",
        teams:"فريقنا",
        Service:"خدماتنا",
        linkedin: "لينكد إن",
        vision: {
          title: "رؤيتنا",
          description1: "في مدرسة Orange Coding نتخيل عالماً<br/> يكون فيه تعليم البرمجة متاحاً، مبتكراً،<br/> وممكناً. هدفنا هو تزويد المتعلمين<br/> بالمهارات اللازمة للخلق، حل المشكلات،<br/> والقيادة في العصر الرقمي.",
          description2: "جسر الفجوة بين التعليم والصناعة<br/> لصياغة مستقبل التكنولوجيا."
        },
        missionTitle: "مهمتنا",
        missionDescription: "نحن ملتزمون بتقديم أفضل تعليم للبرمجة للطلاب وإعدادهم لمستقبل ناجح.",
        missions: [
          "توفير تعليم عالي الجودة في البرمجة لجميع الأعمار.",
          "إعداد الطلاب لمهن المستقبل في مجال التكنولوجيا.",
          "جعل البرمجة ممتعة وجذابة وسهلة الوصول.",
          "تنمية مهارات حل المشكلات والتفكير النقدي.",
          "خلق بيئة تعليمية داعمة وشاملة.",
          "مساعدة الطلاب على بناء مشاريع حقيقية ومحافظ أعمال.",
          "تشجيع الإبداع والابتكار في البرمجة.",
          "تقديم تجربة عملية مع التقنيات الحديثة.",
          "تعليم التعاون والعمل الجماعي من خلال تحديات البرمجة.",
          "تمكين الطلاب بالمهارات اللازمة للنجاح مدى الحياة."
        ],
        schoolHistory: "تاريخ المدرسة",
        foundingVisionTitle: "١رؤية التأسي",
        foundingVisionText:
          "تم تأسيس مدرستنا للبرمجة بمهمة واضحة: تزويد الطلاب بمهارات البرمجة المتقدمة وإعدادهم لعالم يعتمد بشكل متزايد على التكنولوجيا. نظرًا للطلب المتزايد على المطورين المهرة، سعينا إلى إنشاء بيئة تعليمية تفاعلية تركز على احتياجات السوق.",
        earlyBeginningsTitle: " البدايات المبكرة",
        earlyBeginningsText:
          "وُلدت فكرة المدرسة من شغف بالتكنولوجيا والتعليم. في البداية، بدأت كمبادرة صغيرة تقدم ورش عمل ودورات تدريبية. ساعدتنا هذه الجهود الأولية على فهم التحديات التي يواجهها الطلاب عند تعلم البرمجة، مما أدى إلى تطوير أساليب تدريس مبتكرة.",
        lookingAheadTitle: " التطلع إلى المستقبل",
        lookingAheadText:
          "مع استمرارنا في النمو، فإن هدفنا هو التوسع عالميًا، وإدخال مساعدين تعليميين مدعومين بالذكاء الاصطناعي، وإنشاء مركز بحثي للتقنيات الناشئة. رؤيتنا هي تمكين الجيل القادم من القادة والمبتكرين في مجال التكنولوجيا.",
            
        partnersSection: {
    title: "شركاؤنا الموثوقون",
    text: "نحن فخورون بالتعاون مع أفضل الشركات لدعم طلابنا وتوفير أفضل تجربة تعليمية."
  }
      
      }
    }
  },
  lng: "en",
  fallbackLng: "en",
  interpolation: { escapeValue: false }
});

export default i18n;
