import React, { useState, useEffect } from 'react';
import { 
  Modal, 
  Box, 
  TextField, 
  Button, 
  Typography, 
  Stack, 
  CircularProgress
} from '@mui/material';
import CloseIcon from '@mui/icons-material/Close';

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

// Basic style for the Modal content Box
const modalStyle = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: 500,
  maxWidth: '90%',
  bgcolor: 'background.paper',
  boxShadow: 24,
  p: 4,
  borderRadius: 2,
  outline: 'none',
  maxHeight: '80vh',
  overflowY: 'auto',
};

// Helper function to handle fetch with exponential backoff
const retry = async (func, retries = 3, delay = 1000) => {
  try {
    return await func();
  } catch (error) {
    if (retries > 0) {
      console.warn(`Retrying in ${delay}ms...`);
      await new Promise(res => setTimeout(res, delay));
      return retry(func, retries - 1, delay * 2);
    } else {
      throw error;
    }
  }
};

/**
 * Calls the Gemini API to get a dream analysis.
 * @param {string} prompt The user's dream input.
 * @returns {Promise<string>} The generated AI analysis.
 */
const callGeminiApi = async (prompt) => {
  const apiKey = "AIzaSyAxSiHlp7E4gBingXVjPDRehYHS-YMvY6c";
  const apiUrl = `https://generativelanguage.googleapis.com/v1beta/models/gemini-2.5-flash-preview-05-20:generateContent?key=${apiKey}`;

  const systemInstruction = {
    parts: [{ text: "You are a friendly and insightful dream analyst. Provide a brief, supportive, and encouraging analysis of the user's dream. The response should be empathetic and offer a positive perspective." }]
  };
  
  const payload = {
    contents: [{
      parts: [{ text: `Analyze the following dream: "${prompt}"` }]
    }],
    systemInstruction,
  };

  try {
    const response = await retry(() => fetch(apiUrl, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(payload)
    }));

    if (!response.ok) {
      throw new Error(`API call failed with status: ${response.status}`);
    }

    const result = await response.json();
    const candidate = result.candidates?.[0];

    if (candidate && candidate.content?.parts?.[0]?.text) {
      return candidate.content.parts[0].text;
    } else {
      console.error("Unexpected API response format:", result);
      return "Sorry, I couldn't get a valid response from the API. Please try again.";
    }
  } catch (error) {
    console.error("Gemini API Error:", error);
    return "Sorry, I ran into a network or API error while analyzing your dream. Please try again later.";
  }
};

/**
 * AI Assistant Modal Component
 */
function AIAnalyzerModal({ open, onClose }) {
  const [dreamInput, setDreamInput] = useState('');
  const [aiOutput, setAiOutput] = useState('');
  const [isLoading, setIsLoading] = useState(false);

  const handleSubmit = async () => {
    if (!dreamInput.trim()) return;

    setIsLoading(true);
    setAiOutput('');
    try {
      const response = await callGeminiApi(dreamInput.trim());
      setAiOutput(response);
    } catch (error) {
      console.error("Gemini API Error:", error);
      setAiOutput("Sorry, I ran into an error while analyzing your dream. Please try again later.");
    } finally {
      setIsLoading(false);
    }
  };

  const handleCloseModal = () => {
    // Reset state when closing the modal
    setDreamInput('');
    setAiOutput('');
    setIsLoading(false);
    onClose();
  };

  return (
    <Modal open={open} onClose={handleCloseModal} aria-labelledby="ai-analyzer-title">
      <Box sx={modalStyle}>
        <Stack direction="row" justifyContent="space-between" alignItems="center" mb={2}>
          <Typography id="ai-analyzer-title" variant="h5" component="h2" color="primary">
            🔮 AI Dream Analyzer
          </Typography>
          <Button onClick={handleCloseModal} size="small" color="inherit">
              <CloseIcon />
          </Button>
        </Stack>

        <Typography variant="body2" mb={2}>
          Describe your dream below. Our AI assistant, powered by Gemini, will provide an insightful analysis.
        </Typography>

        {/* Input Area */}
        <TextField
          label="What did you dream about?"
          value={dreamInput}
          onChange={(e) => setDreamInput(e.target.value)}
          fullWidth
          multiline
          rows={4}
          variant="outlined"
          sx={{ mb: 2 }}
        />
        
        {/* Submit Button */}
        <Button 
          variant="contained" 
          color="primary"
          onClick={handleSubmit}
          disabled={isLoading || !dreamInput.trim()}
          fullWidth
        >
          {isLoading ? <CircularProgress size={24} color="inherit" /> : 'Analyze Dream'}
        </Button>

        {/* Output Area */}
        {aiOutput && (
          <Box mt={3} p={2} sx={{ border: '1px solid #e0e0e0', borderRadius: 1, backgroundColor: '#f9f9f9' }}>
            <Typography variant="h6" color="text.secondary">AI Analysis:</Typography>
            <Typography variant="body1" sx={{ whiteSpace: 'pre-wrap' }}>
              {aiOutput}
            </Typography>
          </Box>
        )}
      </Box>
    </Modal>
  );
}

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
