import { StageSection, DayPlan } from "./components/StageSection";
import styles from "./page.module.css";

const syllabusDescription = `Two-track mastery across Linux Operating System fundamentals and ASP.NET with C#. Objectives: command-line fluency, system administration, shell scripting, networking services, and security hardening on Linux; additionally, full-stack ASP.NET Core development with C#, MVC and Razor Pages patterns, Entity Framework Core data workflows, API development, deployment, and troubleshooting. Final aim: perfect practical exam performance through hands-on labs, scenario analysis, and high-precision recall.`;

const karmaLearningStyle = `Strategic provocateur who thrives under time pressure. Enjoys dissecting opponents' weaknesses, prefers situational practice, and uses bold experimentation to internalize skills quickly. Motivated by competition, embraces high-stakes simulations, and channels confidence to dominate practical challenges.`;

const ayanokojiLearningStyle = `Hyper-observant minimalist who invests energy only where leverage is highest. Prioritizes core systems understanding, reverse-engineers exam structures, and builds silent competency through efficient, solo analysis. Prefers clean data capture, reflective review loops, and controlled emotional baseline.`;

const foundationPlans: DayPlan[] = [
  {
    day: "Day 1 – Systems Baseline",
    focus: "Map the syllabus, configure tooling, internalize Linux architecture & ASP.NET ecosystem.",
    sessions: [
      {
        duration: "2h",
        activity:
          "Blueprint the 15-day objectives, install dual environments (WSL/VM for Linux, .NET SDK + VS Code), capture exam rubrics, and set up spaced-repetition system (Anki or Obsidian)."
      },
      {
        duration: "2h",
        activity:
          "Deep read: Linux kernel vs user space, distributions, filesystem hierarchy (FHS), init systems. Build concept map linking components."
      },
      {
        duration: "2h",
        activity:
          "ASP.NET Core landscape: project types, middleware pipeline, configuration patterns. Reverse-engineer a sample template to note moving parts."
      },
      {
        duration: "2h",
        activity:
          "Reflection synthesis: document critical success factors, define daily metrics, and schedule micro-retrospective ritual."
      }
    ],
    checkpoints: [
      "Environment ready (terminal, dotnet CLI, git).",
      "Exam blueprint converted into competency matrix."
    ]
  },
  {
    day: "Day 2 – Linux Navigation Core",
    focus: "Command-line fluency, permissions, process awareness.",
    sessions: [
      {
        duration: "2h",
        activity:
          "Master navigation commands (pwd, ls, cd, find), globbing, and path logic. Create cheat sheet with mnemonic anchors."
      },
      {
        duration: "2h",
        activity:
          "Ownership and permissions lab: chmod, chown, umask, ACL basics. Build scenarios altering user roles."
      },
      {
        duration: "2h",
        activity:
          "Process management primer: ps, top, htop, nice, kill. Trace process tree of running services."
      },
      {
        duration: "2h",
        activity:
          "Micro-assessment: timed drills replicating file system tasks; log performance metrics."
      }
    ],
    checkpoints: ["Can reconfigure permissions quickly.", "Understands process states & signals."]
  },
  {
    day: "Day 3 – Shell Scripting Foundations",
    focus: "Bash essentials, variables, control flow.",
    sessions: [
      {
        duration: "2h",
        activity:
          "Syntax deep dive: shebang, variables, quoting, exit codes. Build annotated quick-reference."
      },
      {
        duration: "2h",
        activity:
          "Control structures: conditionals, loops, case statements. Craft micro-scripts for menu-driven utilities."
      },
      {
        duration: "2h",
        activity:
          "Functions, command substitution, pipelines, here documents. Compose script chaining grep, awk, sed."
      },
      {
        duration: "2h",
        activity:
          "Deliberate practice: refactor scripts for idempotency and robustness; add logging & error handling."
      }
    ],
    checkpoints: ["Comfortable writing 50-line scripts", "Understands debugging with set -x and shellcheck."]
  },
  {
    day: "Day 4 – ASP.NET Core Fundamentals",
    focus: "Project scaffolding, dependency injection, routing.",
    sessions: [
      {
        duration: "2h",
        activity:
          "Spin up fresh ASP.NET Core MVC project. Deconstruct Program.cs, Startup patterns, middleware ordering."
      },
      {
        duration: "2h",
        activity:
          "Routing & controllers: attribute vs conventional routing, model binding, validation. Implement 3 endpoints."
      },
      {
        duration: "2h",
        activity:
          "Dependency injection masterclass: scoped vs transient vs singleton, configuration options, logging providers."
      },
      {
        duration: "2h",
        activity:
          "Mini-retrospective: chart knowledge gaps, update competency matrix, create flashcards for terminology."
      }
    ],
    checkpoints: ["Can map request pipeline end-to-end.", "Comfortable injecting custom services."]
  },
  {
    day: "Day 5 – Data Layer & Git Discipline",
    focus: "Entity Framework Core, database workflows, version control hygiene.",
    sessions: [
      {
        duration: "2h",
        activity:
          "EF Core primer: DbContext, migrations, LINQ queries. Scaffold SQLite database for rapid iteration."
      },
      {
        duration: "2h",
        activity:
          "Data validation & view models: AutoMapper basics, DTO vs domain models. Implement create/read forms."
      },
      {
        duration: "2h",
        activity:
          "Git mastery sprint: branching strategy, stash, cherry-pick, reverting. Simulate exam-style version control tasks."
      },
      {
        duration: "2h",
        activity:
          "Integrate EF Core with ASP.NET project, seed data scripts, build dashboards for telemetry."
      }
    ],
    checkpoints: [
      "CRUD pipeline functional in sample app.",
      "Git workflows practiced under timed pressure."
    ]
  }
];

const applicationPlans: DayPlan[] = [
  {
    day: "Day 6 – Linux Services & Networking",
    focus: "Service management, networking stack, diagnostic utilities.",
    sessions: [
      {
        duration: "2h",
        activity:
          "Systemd practitioner drills: create units, timers, troubleshoot failed services, journalctl for forensic insight."
      },
      {
        duration: "2h",
        activity:
          "Networking toolkit: ip, ss, netstat, traceroute, dig. Map network interfaces and routing tables."
      },
      {
        duration: "2h",
        activity:
          "Practice scenario: configure and secure OpenSSH, manage key-based auth, chrooted SFTP. Stress-test with fail2ban."
      },
      {
        duration: "2h",
        activity:
          "Challenge block: timed troubleshooting of simulated network outage using log captures."
      }
    ],
    checkpoints: ["Confident in systemctl triage.", "Knows step-by-step for remote hardening."]
  },
  {
    day: "Day 7 – Web Services & Automation",
    focus: "HTTP services on Linux, advanced scripting, automation pipelines.",
    sessions: [
      {
        duration: "2h",
        activity:
          "Deploy Nginx/Apache sample site, configure virtual hosts, SSL/TLS with Let’s Encrypt dry run."
      },
      {
        duration: "2h",
        activity:
          "Bash automation: cron, at, custom logging, notifications. Write script to rotate logs & monitor disk usage."
      },
      {
        duration: "2h",
        activity:
          "Infrastructure-as-code glimpse: introduce Ansible basics, craft playbook for user provisioning."
      },
      {
        duration: "2h",
        activity:
          "Red-team simulation: sabotage configurations then recover under 15-minute constraint."
      }
    ],
    checkpoints: ["Can roll back from configuration failure quickly.", "Automation script passes shellcheck."]
  },
  {
    day: "Day 8 – ASP.NET Core APIs",
    focus: "RESTful services, middleware customization, authentication previews.",
    sessions: [
      {
        duration: "2h",
        activity:
          "Build API project: versioning, routing, swagger documentation. Implement response compression and caching."
      },
      {
        duration: "2h",
        activity:
          "Middleware lab: custom exception handling, request logging, correlation IDs."
      },
      {
        duration: "2h",
        activity:
          "Authentication overview: JWT bearer, cookie auth, ASP.NET Identity scaffolding. Prototype secure endpoints."
      },
      {
        duration: "2h",
        activity:
          "Karma-style stress drill: implement new feature with ambiguous requirements in 60 minutes, debrief missteps."
      }
    ],
    checkpoints: ["API endpoints pass Postman tests.", "Understands auth trade-offs."]
  },
  {
    day: "Day 9 – UI Layer & Razor Mastery",
    focus: "Razor Pages, MVC views, responsive design integration.",
    sessions: [
      {
        duration: "2h",
        activity:
          "Razor fundamentals: layout pages, partials, tag helpers, section management. Build adaptive dashboard."
      },
      {
        duration: "2h",
        activity:
          "Client-side enhancements: integrate minimal React component via ASP.NET, leverage bundling strategies."
      },
      {
        duration: "2h",
        activity:
          "Validation & forms: server + client validation, antiforgery tokens, TempData patterns."
      },
      {
        duration: "2h",
        activity:
          "UX review: time-boxed heuristic evaluation, refine UI copy, ensure accessibility baseline."
      }
    ],
    checkpoints: ["Views comply with MVC conventions.", "Form submissions robust & secure."]
  },
  {
    day: "Day 10 – Integration & Deployment",
    focus: "Connect Linux + ASP.NET knowledge, deployment and monitoring.",
    sessions: [
      {
        duration: "2h",
        activity:
          "Docker fundamentals: containerize ASP.NET app, multi-stage builds, environment variables."
      },
      {
        duration: "2h",
        activity:
          "Linux deployment pipeline: systemd service for Kestrel, reverse proxy via Nginx, log rotation."
      },
      {
        duration: "2h",
        activity:
          "Instrumentation: health checks, Serilog, Application Insights overview, Linux journaling integration."
      },
      {
        duration: "2h",
        activity:
          "Battle test: deploy to local VM, simulate load, gather metrics, adjust resource usage (ulimit, sysctl)."
      }
    ],
    checkpoints: ["Production-like deployment working locally.", "Monitoring dashboards configured."]
  }
];

const masteryPlans: DayPlan[] = [
  {
    day: "Day 11 – Exam Simulation I",
    focus: "Full Linux practical mock under timed conditions.",
    sessions: [
      {
        duration: "2h",
        activity:
          "Timed scenario: user management, filesystem configuration, service tweaking. Record actions with script command."
      },
      {
        duration: "2h",
        activity:
          "Post-mortem analysis: categorize errors, update SOPs, reinforce commands via spaced rehearsal."
      },
      {
        duration: "2h",
        activity:
          "Create flash labs targeting missed items; convert into automation scripts for repetition."
      },
      {
        duration: "2h",
        activity:
          "Mindset training: breathing protocols, focus drills, design confidence anchor statements."
      }
    ],
    checkpoints: ["Mock scored & logged.", "Resilience routine defined."]
  },
  {
    day: "Day 12 – Exam Simulation II",
    focus: "ASP.NET practical mock: build mini application end-to-end.",
    sessions: [
      {
        duration: "2h",
        activity:
          "Requirements intake: design architecture, sketch ER diagram, commit plan before coding."
      },
      {
        duration: "2h",
        activity:
          "Implementation sprint: controllers, EF Core integration, initial views."
      },
      {
        duration: "2h",
        activity:
          "Hardening: add validation, error handling, logging, unit micro-tests for critical services."
      },
      {
        duration: "2h",
        activity:
          "Retrospective: measure time distribution, annotate optimization opportunities, archive reusable snippets."
      }
    ],
    checkpoints: ["Application deployable on Linux environment.", "Reusable template prepared."]
  },
  {
    day: "Day 13 – Synthesis & Cross-Domain Drills",
    focus: "Blend domains; highlight correlations for quicker recall.",
    sessions: [
      {
        duration: "2h",
        activity:
          "Concept linking: create dual-brain map connecting Linux services to ASP.NET hosting needs."
      },
      {
        duration: "2h",
        activity:
          "Rapid-fire Q&A: script 100 high-yield questions, answer orally, record, and evaluate clarity."
      },
      {
        duration: "2h",
        activity:
          "Scenario pairings: given Linux constraint, articulate ASP.NET mitigation, and vice versa."
      },
      {
        duration: "2h",
        activity:
          "Update flashcards, condense summary sheets to one-page cheat decks, rehearse blind recall."
      }
    ],
    checkpoints: ["Integrated mindmap complete.", "Answer bank validated for precision."]
  },
  {
    day: "Day 14 – Precision Tune",
    focus: "Patch weaknesses, optimize speed, reinforce character traits.",
    sessions: [
      {
        duration: "2h",
        activity:
          "Targeted Linux drills on historically weak commands; escalate difficulty each pass."
      },
      {
        duration: "2h",
        activity:
          "ASP.NET refactoring lab: improve performance, caching, concurrency handling in sample project."
      },
      {
        duration: "2h",
        activity:
          "Teach-back session: record yourself explaining two complex topics; analyze delivery for gaps."
      },
      {
        duration: "2h",
        activity:
          "Psychological conditioning: visualization of exam success, plan exam-day logistics, sleep strategy."
      }
    ],
    checkpoints: ["Weak areas resolved.", "Exam-day playbook authored."]
  },
  {
    day: "Day 15 – Confidence Lock",
    focus: "Light active recall, systems check, rest calibration.",
    sessions: [
      {
        duration: "2h",
        activity:
          "Warm-up recall: 30-minute Linux drill, 30-minute ASP.NET drill, repeat once; stop at mastery threshold."
      },
      {
        duration: "2h",
        activity:
          "Review condensed notes, mental whiteboard of key workflows, quick journaling of success cues."
      },
      {
        duration: "2h",
        activity:
          "Final mock mini-scenario (90 minutes) with strict documentation; debrief and lock corrections."
      },
      {
        duration: "2h",
        activity:
          "Active recovery: light exercise, mindfulness, finalize logistics checklist, early shutdown."
      }
    ],
    checkpoints: ["Confidence ≥ 9/10 noted in log.", "Environment prepped for exam day."]
  }
];

const karmaTraits = [
  "Audacious confidence under pressure.",
  "Adaptive strategy: reconfigure tactics mid-battle.",
  "Playful competitiveness that frames obstacles as games.",
  "Instinct to exploit weaknesses through experimentation."
];

const karmaActionableSteps = [
  "Launch daily \"pressure labs\" with 30% less time than needed; reflect on improvisations that worked.",
  "Gamify errors by awarding yourself points for spotting and fixing them faster each day.",
  "Weekly sparring partner session: challenge peer or online forum with tricky scenarios you design.",
  "Adopt post-task debrief template that asks, \"Where was the weak link and how do I weaponize it next time?\""
];

const ayanokojiTraits = [
  "Cold analytical insight and pattern recognition.",
  "Energy conservation through ruthless prioritization.",
  "Precision note-taking and information compression.",
  "Calm emotional baseline, unshaken by external pressure."
];

const ayanokojiActionableSteps = [
  "Operate a leverage log: list tasks, score impact vs effort, execute only the highest leverage first.",
  "Practice silent observation by reviewing recorded sessions to spot micro-inefficiencies.",
  "Use Feynman technique nightly to compress concepts into 3-sentence explanations.",
  "Implement a neutrality ritual before intense work blocks (box breathing, posture reset, intent statement)."
];

const recommendedResources = [
  "Linux Foundation: \"Introduction to Linux\" (edX) for structured fundamentals.",
  "William Shotts – \"The Linux Command Line\" for command deep dives.",
  "OverTheWire Wargames (Bandit) for applied shell hacking practice.",
  "Microsoft Learn: \"Build web apps with ASP.NET Core\" learning path.",
  "Adam Freeman – \"Pro ASP.NET Core 8 MVC\" for comprehensive architecture coverage.",
  "Pluralsight courses by Scott Allen on ASP.NET Core and Entity Framework Core.",
  "LeetCode / HackerRank Linux shell challenges for timed drills.",
  "Anki spaced repetition decks (self-built) for command flags, ASP.NET lifecycle steps.",
  "Diátaxis documentation framework to structure your personal knowledge base."
];

export default function Page() {
  return (
    <main className={styles.main}>
      <header className={styles.hero}>
        <div>
          <span className="chip">15-Day Elite Study Accelerator</span>
          <h1>
            Master Linux & ASP.NET with <span className="accent">Karma x Ayanokoji</span> Precision
          </h1>
          <p>
            Integrate audacious execution and hyper-efficient analysis to dominate both practical exams.
            Eight-hour daily regimen calibrated for zero-to-hero acceleration.
          </p>
        </div>
        <div className={styles.heroCard}>
          <h2>Mission Stats</h2>
          <ul>
            <li>
              <strong>Duration:</strong> 15 days × 8 hours
            </li>
            <li>
              <strong>Focus:</strong> Linux OS Operations + ASP.NET with C#
            </li>
            <li>
              <strong>Outcome:</strong> Perfect practical exam score
            </li>
            <li>
              <strong>Method:</strong> Intelligence fusion of Karma&apos;s aggression and Ayanokoji&apos;s
              precision
            </li>
          </ul>
        </div>
      </header>

      <section className={styles.section}>
        <h2>Syllabus Overview</h2>
        <p>{syllabusDescription}</p>
      </section>

      <section className={styles.section}>
        <h2>Learning Style Analysis</h2>
        <div className={styles.dualGrid}>
          <article>
            <h3>Karma Akabane</h3>
            <p>{karmaLearningStyle}</p>
          </article>
          <article>
            <h3>Ayanokoji Kiyotaka</h3>
            <p>{ayanokojiLearningStyle}</p>
          </article>
        </div>
      </section>

      <StageSection
        title="Days 1-5: Foundation Building"
        subtitle="Establish deep conceptual scaffolding, pristine tooling, and deliberate study systems with clinical efficiency."
        influence="Ayanokoji Influence"
        plans={foundationPlans}
      />
      <StageSection
        title="Days 6-10: Strategic Application"
        subtitle="Stress-test knowledge through aggressive challenges, tactical drills, and adaptive problem solving."
        influence="Karma Influence"
        plans={applicationPlans}
      />
      <StageSection
        title="Days 11-15: Mastery & Refinement"
        subtitle="Fuse both personas to polish execution, reinforce composure, and lock in exam excellence."
        influence="Combined Influence"
        plans={masteryPlans}
      />

      <section className={styles.section}>
        <h2>Character Development Integration</h2>
        <div className={styles.dualGrid}>
          <article>
            <h3>Karma Akabane Traits</h3>
            <ul>
              {karmaTraits.map((trait, index) => (
                <li key={index}>{trait}</li>
              ))}
            </ul>
            <h4>Actionable Steps</h4>
            <ul>
              {karmaActionableSteps.map((step, index) => (
                <li key={index}>{step}</li>
              ))}
            </ul>
          </article>
          <article>
            <h3>Ayanokoji Kiyotaka Traits</h3>
            <ul>
              {ayanokojiTraits.map((trait, index) => (
                <li key={index}>{trait}</li>
              ))}
            </ul>
            <h4>Actionable Steps</h4>
            <ul>
              {ayanokojiActionableSteps.map((step, index) => (
                <li key={index}>{step}</li>
              ))}
            </ul>
          </article>
        </div>
      </section>

      <section className={styles.section}>
        <h2>Recommended Resources</h2>
        <ul className={styles.resourceList}>
          {recommendedResources.map((resource, index) => (
            <li key={index}>{resource}</li>
          ))}
        </ul>
      </section>
    </main>
  );
}
