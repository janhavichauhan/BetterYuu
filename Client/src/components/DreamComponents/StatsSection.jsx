import styles from '../../style/components/DreamComponents/StatsSection.module.scss';

export default function StatsSection() {
  // sample series for last 7 nights
  const danger = [60, 72, 80, 65, 78, 92, 95];
  const medium = [35, 40, 55, 52, 49, 50, 48];
  const good = [10, 25, 30, 22, 18, 20, 28];

  const maxY = 100;
  const pointsToPolyline = (arr) => {
    const w = 320; // viewBox width
    const h = 160; // viewBox height
    const step = w / (arr.length - 1);
    return arr
      .map((v, i) => {
        const x = i * step;
        const y = h - (v / maxY) * h;
        return `${x},${y}`;
      })
      .join(' ');
  };

  return (
    <section className={styles.section}>
      <div className={styles.headerRow}>
        <h3>Dream Analysis</h3>
        <span className={styles.caption}>Last 30 days</span>
      </div>
      <div className={styles.grid}>
        <div className={styles.card}>
          <div className={styles.cardHeader}>Intensity (Line Chart)</div>
          <div className={styles.lineChart}>
            <svg viewBox="0 0 320 160" preserveAspectRatio="none" className={styles.svg}>
              {/* grid */}
              <g className={styles.gridLines}>
                {[0, 25, 50, 75, 100].map((v, i) => (
                  <line key={i} x1="0" x2="320" y1={160 - (v/100)*160} y2={160 - (v/100)*160} />
                ))}
              </g>
              {/* series */}
              <polyline className={`${styles.line} ${styles.danger}`} points={pointsToPolyline(danger)} />
              <polyline className={`${styles.line} ${styles.medium}`} points={pointsToPolyline(medium)} />
              <polyline className={`${styles.line} ${styles.good}`} points={pointsToPolyline(good)} />
            </svg>
          </div>
          <div className={styles.legend}>
            <span><i className={`${styles.dot} ${styles.danger}`} />Dangerous</span>
            <span><i className={`${styles.dot} ${styles.medium}`} />Medium</span>
            <span><i className={`${styles.dot} ${styles.good}`} />Good</span>
          </div>
        </div>

        <div className={styles.card}>
          <div className={styles.cardHeader}>Dream Types</div>
          <div className={styles.pieWrap}>
            <svg viewBox="0 0 36 36" className={styles.pie} aria-hidden>
              <circle className={styles.sliceGood} cx="18" cy="18" r="16" />
              <circle className={styles.sliceMedium} cx="18" cy="18" r="16" strokeDasharray="50 50" strokeDashoffset="-20" />
              <circle className={styles.sliceDanger} cx="18" cy="18" r="16" strokeDasharray="20 80" strokeDashoffset="-70" />
            </svg>
          </div>
          <div className={styles.legend}>
            <span><i className={`${styles.dot} ${styles.danger}`} />Dangerous 30%</span>
            <span><i className={`${styles.dot} ${styles.medium}`} />Medium 50%</span>
            <span><i className={`${styles.dot} ${styles.good}`} />Good 20%</span>
          </div>
        </div>

        <div className={styles.cardCta}>
          <div>
            <h4>Talk to AI Assistant</h4>
            <p>Get insights and personalized tips from your dreams.</p>
          </div>
          <a className={styles.cta} href="/ai-analyzer">Analyze my dream</a>
        </div>
      </div>
    </section>
  );
}


