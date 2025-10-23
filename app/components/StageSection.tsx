import styles from "./StageSection.module.css";

export type StudySession = {
  duration: string;
  activity: string;
};

export type DayPlan = {
  day: string;
  focus: string;
  sessions: StudySession[];
  checkpoints: string[];
};

type StageSectionProps = {
  title: string;
  subtitle: string;
  influence: string;
  plans: DayPlan[];
};

export function StageSection({ title, subtitle, influence, plans }: StageSectionProps) {
  return (
    <section className={styles.stage}>
      <div className={styles.stageHeader}>
        <div>
          <p className="chip">{influence}</p>
          <h2>{title}</h2>
        </div>
        <p>{subtitle}</p>
      </div>
      <div className={styles.planGrid}>
        {plans.map((plan) => (
          <article key={plan.day} className={styles.planCard}>
            <header>
              <h3>{plan.day}</h3>
              <p>{plan.focus}</p>
            </header>
            <ul className={styles.sessionList}>
              {plan.sessions.map((session, index) => (
                <li key={index}>
                  <span>{session.duration}</span>
                  <p>{session.activity}</p>
                </li>
              ))}
            </ul>
            <div className={styles.checkpoints}>
              <h4>Checkpoint</h4>
              <ul>
                {plan.checkpoints.map((item, index) => (
                  <li key={index}>{item}</li>
                ))}
              </ul>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}
