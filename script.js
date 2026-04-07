const resumeData = {
    dev: {
        summary: "Full Stack Web Developer with a diploma in Programming & Web Development from TVTC, graduating with First Honors (GPA: 4.84/5.00). Winner of 1st Place in the Saudi Skills National Web Development Competition 2024.",
        skills: ["React.js", "JavaScript", "Tailwind CSS", "PHP","SQL & MySQL", "Git & GitHub"],
        projects: [
            {
                title: "Hope Track",
                description: "A specialized platform designed to track and support recovery journeys from substance abuse, providing tools for medical follow-up, psychological support, and secure, confidential communication with specialists.",
                tech: ["HTML", "JavaScript", "MySQL Database"]
            },
            {
                title: "Tourism Travel Platform",
                description: "A visual exploration platform showcasing Saudi Arabia’s premier tourist destinations—including religious, historical, and entertainment landmarks—through high-quality galleries and interactive maps.",
                tech: ["HTML", "Tailwind CSS", "JavaScript"]
            },
            {
                title: "Certificate Management System (Demo)",
                description: "A web-based system designed to automate and simplify certificate creation.",
                tech: ["HTML", "CSS","JavaScript","html2canvas", "jsPDF"]
            }
        ],
        achievements: [
            { title: "1st Place Winner", event: "Saudi Skills National Competition (Web Development)", year: "2024" },
            { title: "International Participant", event: "WorldSkills Asia - Taipei", year: "2025" }
        ]
    },
    it: {
        summary: "IT Specialist with extensive experience in technical support and systems administration. Skilled in troubleshooting complex technical issues and managing user accounts within government sectors.",
        skills: ["End-User Technical Support", "Windows OS Administration", "Hardware & Printer Maintenance", "Networking Basics", "Information Security", "Ticketing Systems"],
        experience: [
            {
                title: "IT Support Specialist (Tamheer)",
                company: "Makkah Municipality (Amanat Al-Asimah)",
                duration: "6 Months",
                points: [
                    "Provided advanced technical support for infrastructure and network connectivity.",
                    "Managed hardware maintenance and software deployment for municipality staff.",
                    "Ensured endpoint compliance with information security standards.",
                    "Resolved over 350 IT support tickets during the training period.",
                    "Configured and connected new devices to the internal municipality network.",
                    "Managed user accounts, passwords, and active directory access."
                ]
            }
        ],
        achievements: [
            { title: "National Award Winner", event: "Saudi Skills - Web Category", year: "2024" }
        ]
    }
};

function toggleMode(mode) {
    document.getElementById('devBtn').classList.toggle('active', mode === 'dev');
    document.getElementById('itBtn').classList.toggle('active', mode === 'it');

    const d = resumeData[mode];
    const accentColor = mode === 'dev' ? 'var(--accent-purple)' : 'var(--accent-green)';
    const isDev = mode === 'dev';

    let html = `
        <div class="section-block">
            <h2 style="color:${accentColor}"><i data-lucide="user"></i> Professional Summary</h2>
            <p style="color:var(--text-dim)">${d.summary}</p>
        </div>

        <div class="section-block">
            <h2 style="color:${accentColor}"><i data-lucide="layers"></i> Core Skills</h2>
            <div>
                ${d.skills.map(s => `<span class="badge">${s}</span>`).join('')}
            </div>
        </div>

        <div class="section-block">
            <h2 style="color:${accentColor}"><i data-lucide="${isDev ? 'layout' : 'briefcase'}"></i> ${isDev ? 'Featured Projects' : 'Professional Experience'}</h2>
            ${isDev ? 
                d.projects.map(proj => `
                    <div class="exp-item" style="border-bottom: 1px solid var(--border); padding-bottom: 15px;">
                        <h3 style="color:var(--text-main)">${proj.title}</h3>
                        <p style="color:var(--text-dim)">${proj.description}</p>
                        <div>${proj.tech.map(t => `<span class="badge" style="font-size:0.7rem">${t}</span>`).join('')}</div>
                    </div>
                `).join('') 
                :
                d.experience.map(exp => `
                    <div class="exp-item">
                        <div style="display:flex; justify-content:space-between; align-items:center">
                            <h3 style="color:var(--text-main)">${exp.title}</h3>
                            <span class="badge" style="color:${accentColor}">${exp.duration}</span>
                        </div>
                        <p style="color:var(--accent-purple); font-weight:bold; margin-top: 5px;">${exp.company}</p>
                        <ul style="color:var(--text-dim); padding-left:20px">
                            ${exp.points.map(p => `<li>${p}</li>`).join('')}
                        </ul>
                    </div>
                `).join('')
            }
        </div>

        <div class="section-block">
            <h2 style="color:${accentColor}"><i data-lucide="award"></i> Achievements & Awards</h2>
            ${d.achievements.map(a => `
                <div class="achievement-card">
                    <strong style="color:var(--text-main)">${a.title}</strong> 
                    <span style="color:var(--text-dim)">- ${a.event} (${a.year})</span>
                </div>
            `).join('')}
        </div>
    `;

    document.getElementById('contentArea').innerHTML = html;
    lucide.createIcons();
}

const themeBtn = document.getElementById('themeToggle');
themeBtn.addEventListener('click', () => {
    document.body.classList.toggle('light-theme');
    const isLight = document.body.classList.contains('light-theme');
    themeBtn.innerHTML = isLight ? '<i data-lucide="sun"></i>' : '<i data-lucide="moon"></i>';
    lucide.createIcons();
});

toggleMode('dev');