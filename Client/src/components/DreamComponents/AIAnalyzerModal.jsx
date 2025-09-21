import React, { useState } from 'react';
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

// Import the SCSS module
import styles from '../../style/components/DreamComponents/AiAnalyzerModal.module.scss';

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
export default function AIAnalyzerModal({ open, onClose }) {
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
    setDreamInput('');
    setAiOutput('');
    setIsLoading(false);
    onClose();
  };

  return (
    <Modal open={open} onClose={handleCloseModal} aria-labelledby="ai-analyzer-title">
      <Box className={styles.modal}>
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
          <Box mt={3} p={2} sx={{ borderRadius: 1, backgroundColor: '#f9f9f9' }}>
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