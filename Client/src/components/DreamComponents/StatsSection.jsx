import React, { useState } from 'react';
import { 
  Button,
} from '@mui/material';
import AIAnalyzerModal from './Ai_dream_analyzer';

// All styling is now included directly in a style block.
// The original SASS file has been replaced to meet the single-file requirement.
const styles = `
  .section {
    padding: 2rem;
    max-width: 900px;
    margin: 0 auto;
  }
  
  .headerRow {
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-bottom: 2rem;
    color: #4CAF50;
  }

  .headerRow h3 {
    margin: 0;
    font-weight: 600;
  }

  .headerRow .caption {
    font-size: 0.875rem;
    color: #777;
  }

  .grid {
    display: grid;
    gap: 1.5rem;
    grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  }

  .card {
    background: #fff;
    border-radius: 12px;
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.05);
    padding: 1.5rem;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
  }

  .cardHeader {
    font-weight: 600;
    font-size: 1.125rem;
    margin-bottom: 1rem;
    color: #555;
  }

  .lineChart {
    width: 100%;
    height: 160px;
    position: relative;
    overflow: visible;
  }

  .svg {
    width: 100%;
    height: 100%;
  }

  .gridLines line {
    stroke: #e0e0e0;
    stroke-width: 1;
  }

  .line {
    fill: none;
    stroke-width: 2.5;
    stroke-linecap: round;
    stroke-linejoin: round;
    transition: stroke-dashoffset 0.5s ease-in-out;
  }

  .line.danger { stroke: #e57373; }
  .line.medium { stroke: #ffb74d; }
  .line.good { stroke: #81c784; }

  .legend {
    display: flex;
    justify-content: space-around;
    align-items: center;
    margin-top: 1rem;
    flex-wrap: wrap;
    font-size: 0.875rem;
    color: #555;
  }

  .legend span {
    display: flex;
    align-items: center;
    margin: 0.25rem 0.5rem;
  }

  .dot {
    width: 10px;
    height: 10px;
    border-radius: 50%;
    margin-right: 0.5rem;
  }

  .dot.danger { background-color: #e57373; }
  .dot.medium { background-color: #ffb74d; }
  .dot.good { background-color: #81c784; }

  .pieWrap {
    width: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    height: 160px;
  }

  .pie {
    width: 150px;
    height: 150px;
    transform: rotate(-90deg);
  }

  .pie circle {
    fill: transparent;
    stroke-width: 36;
  }

  .sliceGood { stroke: #81c784; }
  .sliceMedium { stroke: #ffb74d; }
  .sliceDanger { stroke: #e57373; }

  .cardCta {
    background: linear-gradient(135deg, #4CAF50, #81C784);
    color: white;
    padding: 1.5rem;
    border-radius: 12px;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    text-align: center;
  }

  .cardCta h4 {
    margin: 0 0 0.5rem 0;
    font-weight: 600;
  }

  .cardCta p {
    margin: 0 0 1rem 0;
    font-size: 0.875rem;
  }

  .cta {
    background: #fff;
    color: #4CAF50;
    border-radius: 20px;
    padding: 0.5rem 1.5rem;
    font-weight: 600;
    transition: transform 0.2s;
  }

  .cta:hover {
    transform: translateY(-2px);
    background: #f0f0f0;
  }
`;

// --- Main App Component ---
export default function App() {
  const [isAiModalOpen, setIsAiModalOpen] = useState(false);
  
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
    <>
      <style>{styles}</style>
      <section className="section">
        <div className="headerRow">
          <h3>Dream Analysis</h3>
          <span className="caption">Last 30 days</span>
        </div>
        <div className="grid">
          <div className="card">
            <div className="cardHeader">Intensity (Line Chart)</div>
            <div className="lineChart">
              <svg viewBox="0 0 320 160" preserveAspectRatio="none" className="svg">
                {/* grid */}
                <g className="gridLines">
                  {[0, 25, 50, 75, 100].map((v, i) => (
                    <line key={i} x1="0" x2="320" y1={160 - (v/100)*160} y2={160 - (v/100)*160} />
                  ))}
                </g>
                {/* series */}
                <polyline className="line danger" points={pointsToPolyline(danger)} />
                <polyline className="line medium" points={pointsToPolyline(medium)} />
                <polyline className="line good" points={pointsToPolyline(good)} />
              </svg>
            </div>
            <div className="legend">
              <span><i className="dot danger" />Dangerous</span>
              <span><i className="dot medium" />Medium</span>
              <span><i className="dot good" />Good</span>
            </div>
          </div>

          <div className="card">
            <div className="cardHeader">Dream Types</div>
            <div className="pieWrap">
              <svg viewBox="0 0 36 36" className="pie" aria-hidden>
                <circle className="sliceGood" cx="18" cy="18" r="16" />
                <circle className="sliceMedium" cx="18" cy="18" r="16" strokeDasharray="50 50" strokeDashoffset="-20" />
                <circle className="sliceDanger" cx="18" cy="18" r="16" strokeDasharray="20 80" strokeDashoffset="-70" />
              </svg>
            </div>
            <div className="legend">
              <span><i className="dot danger" />Dangerous 30%</span>
              <span><i className="dot medium" />Medium 50%</span>
              <span><i className="dot good" />Good 20%</span>
            </div>
          </div>

          {/* CTA Card updated with click handler */}
          <div className="cardCta">
            <div>
              <h4>Talk to AI Assistant</h4>
              <p>Get insights and personalized tips from your dreams.</p>
            </div>
            {/* Change <a> to <button> and add onClick handler */}
            <Button 
              variant="contained" 
              className="cta" 
              onClick={() => setIsAiModalOpen(true)}
            >
              Analyze my dream
            </Button>
          </div>
        </div>

        {/* The AI Analyzer Modal */}
        <AIAnalyzerModal
          open={isAiModalOpen}
          onClose={() => setIsAiModalOpen(false)}
        />
      </section>
    </>
  );
}
