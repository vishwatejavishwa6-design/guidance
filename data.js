// data.js

const hobbiesData = [
    {
        hobby: "Reading & Writing",
        suggestions: [
            { career: "Author/Writer", description: "Craft compelling stories, articles, or marketing copy." },
            { career: "Journalist", description: "Report on news and events for various media." },
            { career: "Editor", description: "Refine and improve written content." },
            { career: "Content Creator", description: "Develop engaging content for digital platforms." }
        ]
    },
    {
        hobby: "Gaming",
        suggestions: [
            { career: "Game Developer", description: "Design and program video games." },
            { career: "Esports Player/Coach", description: "Compete professionally or train esports teams." },
            { career: "Game Tester", description: "Identify bugs and provide feedback on games." },
            { career: "Streamer/Content Creator (Gaming)", description: "Create and share gaming content online." }
        ]
    },
    {
        hobby: "Art & Design",
        suggestions: [
            { career: "Graphic Designer", description: "Create visual concepts for branding, websites, etc." },
            { career: "Illustrator", description: "Create original images for books, magazines, digital media." },
            { career: "Animator", description: "Bring characters and stories to life through motion." },
            { career: "Fashion Designer", description: "Design clothing and accessories." }
        ]
    },
    {
        hobby: "Sports & Fitness",
        suggestions: [
            { career: "Athlete/Coach", description: "Compete or train others in sports." },
            { career: "Sports Journalist", description: "Report on sports events and athletes." },
            { career: "Fitness Trainer", description: "Guide individuals in achieving fitness goals." },
            { career: "Sports Psychologist", description: "Help athletes improve mental performance." }
        ]
    },
    {
        hobby: "Cooking & Baking",
        suggestions: [
            { career: "Chef/Cook", description: "Prepare and cook food in various settings." },
            { career: "Baker/Pastry Chef", description: "Create delicious baked goods and desserts." },
            { career: "Food Critic/Blogger", description: "Review and write about food and restaurants." },
            { career: "Nutritionist/Dietitian", description: "Advise on diet and nutrition for health." }
        ]
    },
    {
        hobby: "Technology & Coding",
        suggestions: [
            { career: "Software Developer", description: "Build and maintain software applications." },
            { career: "Web Developer", description: "Design and develop websites." },
            { career: "Data Scientist", description: "Analyze complex data to extract insights." },
            { career: "Cybersecurity Analyst", description: "Protect computer systems and networks from threats." }
        ]
    }
];

const collegesData = [
    // Engineering Colleges
    {
        id: "iit-bombay",
        name: "IIT Bombay",
        stream: "engineering",
        location: "Mumbai, Maharashtra",
        description: "One of India\'s most prestigious engineering institutes, known for its excellent faculty and research facilities.",
        image: "iit-bombay engineering colleges.jpeg"
    },
    {
        id: "iit-delhi",
        name: "IIT Delhi",
        stream: "engineering",
        location: "New Delhi, Delhi",
        description: "Renowned for its strong academics and innovation in various engineering disciplines.",
        image: "iit-delhi Engineering college.jpeg"
    },
    {
        id: "iit-kanpur",
        name: "IIT Kanpur",
        stream: "engineering",
        location: "Kanpur, Uttar Pradesh",
        description: "A leading institute focusing on research and education in engineering, science, and technology.",
        image: "iit-kanpur engineering colleges.jpeg"
    },
    {
        id: "iit-kharagpur",
        name: "IIT Kharagpur",
        stream: "engineering",
        location: "Kharagpur, West Bengal",
        description: "The oldest and largest IIT, offering a wide range of engineering and other courses.",
        image: "iit-karghapur engineering colleges.jpeg"
    },
    {
        id: "nit-trichy",
        name: "NIT Tiruchirappalli",
        stream: "engineering",
        location: "Tiruchirappalli, Tamil Nadu",
        description: "A top-ranked NIT known for its strong placements and academic excellence.",
        image: "NIT-tiruchirappalli.jpg"
    },

    // Medical Colleges
    {
        id: "aiims-delhi",
        name: "AIIMS Delhi",
        stream: "medical",
        location: "New Delhi, Delhi",
        description: "India\'s premier medical institute, offering high-quality medical education and research.",
        image: "aiims medical college.jpeg"
    },
    {
        id: "jipmer",
        name: "JIPMER Puducherry",
        stream: "medical",
        location: "Puducherry",
        description: "A leading medical institution known for its patient care and research.",
        image: "jipmer medical college.jpeg"
    },
    {
        id: "pgimer",
        name: "PGIMER Chandigarh",
        stream: "medical",
        location: "Chandigarh",
        description: "A highly-rated institute for medical education, research, and training.",
        image: "PGIMER medical college.jpeg"
    },
    {
        id: "nimhans",
        name: "NIMHANS Bengaluru",
        stream: "medical",
        location: "Bengaluru, Karnataka",
        description: "A specialized institute for neuroscience and mental health.",
        image: "nimhans medical colleges.jpeg"
    },
    {
        id: "maulana-azad",
        name: "Maulana Azad Medical College",
        stream: "medical",
        location: "New Delhi, Delhi",
        description: "A renowned medical college affiliated with the University of Delhi.",
        image: "maulana azad college kolkata mpc.jpeg"
    },

    // Arts Colleges
    {
        id: "jnu",
        name: "JNU Delhi",
        stream: "arts",
        location: "New Delhi, Delhi",
        description: "Known for its strong focus on humanities, social sciences, and international studies.",
        image: "jnu ba courses.jpeg"
    },
    {
        id: "du-arts",
        name: "University of Delhi (Arts)",
        stream: "arts",
        location: "New Delhi, Delhi",
        description: "Offers a wide array of arts and humanities courses across its many affiliated colleges.",
        image: "university of delhi arts and humanities.jpeg"
    },
    {
        id: "lsr",
        name: "Lady Shri Ram College for Women",
        stream: "arts",
        location: "New Delhi, Delhi",
        description: "A premier college for women, offering excellent programs in humanities and social sciences.",
        image: "lsr arts and humanities.jpeg"
    },
    {
        id: "hansraj",
        name: "Hansraj College (Arts)",
        stream: "arts",
        location: "New Delhi, Delhi",
        description: "A highly sought-after college under Delhi University, offering various arts courses.",
        image: "hansraj college arts and humanities.jpeg"
    },
    {
        id: "st-stephens",
        name: "St. Stephen\'s College (Arts)",
        stream: "arts",
        location: "New Delhi, Delhi",
        description: "One of the oldest and most prestigious colleges in India, known for its strong arts programs.",
        image: "st.stephens college cec.jpeg"
    },
    // Degree Colleges
    {
        id: "loyola-chennai",
        name: "Loyola College, Chennai",
        stream: "degree",
        location: "Chennai, Tamil Nadu",
        description: "A prestigious institution offering various undergraduate and postgraduate degree courses in Arts, Science, and Commerce. Known for its academic excellence and vibrant campus life.",
        image: "loyola degree college chennai.jpg"
    },
    {
        id: "st-josephs-bengaluru",
        name: "St. Joseph's College, Bengaluru",
        stream: "degree",
        location: "Bengaluru, Karnataka",
        description: "One of the oldest and most reputed colleges in Karnataka, offering diverse degree programs. Focuses on holistic development and academic rigor.",
        image: "St. Joseph's degree College, Bengaluru.jpg"
    },
    {
        id: "presidency-kolkata",
        name: "Presidency University, Kolkata",
        stream: "degree",
        location: "Kolkata, West Bengal",
        description: "A historic institution with a strong legacy in liberal arts and sciences. Offers a wide range of undergraduate and postgraduate degree courses.",
        image: "Presidency  degree University, Kolkata.jpg"
    },
    {
        id: "fergusson-pune",
        name: "Fergusson College, Pune",
        stream: "degree",
        location: "Pune, Maharashtra",
        description: "A renowned college for arts and sciences, known for its rich history, academic environment, and notable alumni. Offers various degree programs.",
        image: "Fergusson degree College, Pune.jpg"
    },
    {
        id: "christ-bengaluru",
        name: "Christ University, Bengaluru",
        stream: "degree",
        location: "Bengaluru, Karnataka",
        description: "A deemed to be university known for its multidisciplinary approach and a wide array of undergraduate and postgraduate degree programs in various fields.",
        image: "Christ degree University, Bengaluru.jpg"
    }
];

const examsData = [
    {
        id: "jee-main",
        name: "JEE Main",
        stream: "engineering",
        description: "Joint Entrance Examination – Main, for admission to undergraduate engineering programs at NITs, IIITs, and other centrally funded technical institutions.",
        officialLink: "https://jeemain.nta.nic.in/"
    },
    {
        id: "jee-advanced",
        name: "JEE Advanced",
        stream: "engineering",
        description: "Joint Entrance Examination – Advanced, for admission to the Indian Institutes of Technology (IITs). Only candidates who clear JEE Main are eligible.",
        officialLink: "https://jeeadv.ac.in/"
    },
    {
        id: "neet-ug",
        name: "NEET (UG)",
        stream: "medical",
        description: "National Eligibility cum Entrance Test (Undergraduate), for admission to MBBS/BDS courses in medical and dental colleges nationwide.",
        officialLink: "https://neet.nta.nic.in/"
    },
    {
        id: "aiapget",
        name: "AIAPGET",
        stream: "medical",
        description: "All India Ayush Post Graduate Entrance Test, for admission to AYUSH (Ayurveda, Yoga & Naturopathy, Unani, Siddha & Homoeopathy) PG courses.",
        officialLink: "https://exams.nta.ac.in/AIAPGET/"
    },
    {
        id: "clat",
        name: "CLAT",
        stream: "law",
        description: "Common Law Admission Test, for admission to undergraduate and postgraduate law programmes offered by 22 National Law Universities in India.",
        officialLink: "https://consortiumofnlus.ac.in/"
    },
    {
        id: "lsat-india",
        name: "LSAT India",
        stream: "law",
        description: "Law School Admission Test India, accepted by many private law colleges in India for admission to their law programs.",
        officialLink: "https://www.lsatindia.in/"
    }
];

const scholarshipsData = [
    {
        id: "nsp",
        name: "National Scholarship Portal (NSP)",
        type: "central",
        description: "A one-stop solution for various scholarship schemes offered by Central Ministries and Departments.",
        link: "https://scholarships.gov.in/"
    },
    {
        id: "ugc-scholarships",
        name: "UGC Scholarships",
        type: "central",
        description: "Various scholarship schemes provided by the University Grants Commission for higher education.",
        link: "https://scholarships.gov.in/"
    },
    {
        id: "wbscc",
        name: "West Bengal Scholarship Schemes",
        type: "state-west-bengal",
        description: "Scholarships offered by the Government of West Bengal for students of the state, including SVMCM (Swami Vivekananda Merit Cum Means Scholarship Scheme).",
        link: "https://wbscc.wb.gov.in/"
    },
    {
        id: "oasis",
        name: "OASIS Scholarship (West Bengal)",
        type: "state-west-bengal",
        description: "Scholarships for SC/ST/OBC students of West Bengal.",
        link: "https://oasis.gov.in/"
    },
    {
        id: "mahadbt",
        name: "MahaDBT Scholarship (Maharashtra)",
        type: "state-maharashtra",
        description: "Maharashtra Government\'s Direct Benefit Transfer Portal for various scholarship schemes.",
        link: "https://mahadbt.maharashtra.gov.in"
    },
    {
        id: "e-scholarship-maha",
        name: "Maharashtra E-Scholarship Schemes",
        type: "state-maharashtra",
        description: "Various post-matric scholarship schemes for eligible students in Maharashtra.",
        link: "https://www.buddy4study.com/article/maharashtra-scholarship"
    }
];
