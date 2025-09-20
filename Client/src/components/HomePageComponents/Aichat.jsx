import React, { useState, useEffect, useRef } from 'react';
import '../../style/components/HomeComponent/Aichat.scss';

// --- SVG ICONS ---
const WriteCopyIcon = () => <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M14 2H6C4.9 2 4 2.9 4 4V20C4 21.1 4.9 22 6 22H18C19.1 22 20 21.1 20 20V8L14 2ZM18 20H6V4H13V9H18V20Z" fill="#EAB308"/></svg>;
const ImageGenIcon = () => <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M21 19V5C21 3.9 20.1 3 19 3H5C3.9 3 3 3.9 3 5V19C3 20.1 3.9 21 5 21H19C20.1 21 21 20.1 21 19ZM8.5 13.5L11 16.51L14.5 12L19 18H5L8.5 13.5Z" fill="#3B82F6"/></svg>;
const CreateAvatarIcon = () => <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M12 12C14.21 12 16 10.21 16 8C16 5.79 14.21 4 12 4C9.79 4 8 5.79 8 8C8 10.21 9.79 12 12 12ZM12 14C9.33 14 4 15.33 4 18V20H20V18C20 15.33 14.67 14 12 14Z" fill="#10B981"/></svg>;
const WriteCodeIcon = () => <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M9.4 16.6L4.8 12L9.4 7.4L8 6L2 12L8 18L9.4 16.6ZM14.6 16.6L19.2 12L14.6 7.4L16 6L22 12L16 18L14.6 16.6Z" fill="#EC4899"/></svg>;
const AttachIcon = () => <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M16.5 6V17.5C16.5 19.71 14.71 21.5 12.5 21.5C10.29 21.5 8.5 19.71 8.5 17.5V5C8.5 3.62 9.62 2.5 11 2.5C12.38 2.5 13.5 3.62 13.5 5V15.5C13.5 16.05 13.05 16.5 12.5 16.5C11.95 16.5 11.5 16.05 11.5 15.5V6H10V15.5C10 16.88 11.12 18 12.5 18C13.88 18 15 16.88 15 15.5V5C15 2.79 13.21 1 11 1C8.79 1 7 2.79 7 5V17.5C7 20.54 9.46 23 12.5 23C15.54 23 18 20.54 18 17.5V6H16.5Z" fill="#6B7280"/></svg>;
const VoiceIcon = () => <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M12 14C13.66 14 15 12.66 15 11V5C15 3.34 13.66 2 12 2C10.34 2 9 3.34 9 5V11C9 12.66 10.34 14 12 14ZM10.8 4.9C10.8 4.4 11.35 4 12 4C12.65 4 13.2 4.4 13.2 4.9V11.1C13.2 11.6 12.65 12 12 12C11.35 12 10.8 11.6 10.8 11.1V4.9ZM17.3 11C17.3 14 14.76 16.1 12 16.1C9.24 16.1 6.7 14 6.7 11H5C5 14.41 7.72 17.23 11 17.72V21H13V17.72C16.28 17.23 19 14.41 19 11H17.3Z" fill="#6B7280"/></svg>;
const BrowseIcon = () => <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M3 18H21V16H3V18ZM3 13H21V11H3V13ZM3 6V8H21V6H3Z" fill="#6B7280"/></svg>;
const SendIcon = () => <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M2.01 21L23 12L2.01 3L2 10L17 12L2 14L2.01 21Z" fill="white"/></svg>;
const TutorIcon = () => <svg width="32" height="32" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" clipRule="evenodd" d="M12 2C6.47715 2 2 6.47715 2 12C2 17.5228 6.47715 22 12 22C17.5228 22 22 17.5228 22 12C22 6.47715 17.5228 2 12 2ZM11.3861 14.9545L8.93282 12.5L7.5 13.9328L11.3848 17.8177L17.5 11.7012L16.0672 10.2684L11.3861 14.9545Z" fill="#4F46E5"/></svg>;
const CloseIcon = () => <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M19 6.41L17.59 5L12 10.59L6.41 5L5 6.41L10.59 12L5 17.59L6.41 19L12 13.41L17.59 19L19 17.59L13.41 12L19 6.41Z" fill="#6B7280"/></svg>;
const LanguageIcon = () => <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M12.87 15.07L10.33 12.54L10.33 12.53C12.54 10.09 13.84 7.22 14.39 4.99L16 4.99L16 3L11 3L11 1.99L9 1.99L9 3L4 3L4 4.99L12.08 4.99C11.61 6.84 10.53 8.79 8.99 10.49L8.99 10.51C8.61 10.15 8.23 9.78 7.87 9.42L6.46 10.83C7.37 11.75 8.35 12.58 9.38 13.29L3 18.99L4.51 20.5L10.33 14.67L12.22 16.56L12.87 15.07ZM18.5 9.99C18.5 11.93 16.93 13.5 15 13.5C13.07 13.5 11.5 11.93 11.5 9.99C11.5 8.05 13.07 6.49 15 6.49C16.93 6.49 18.5 8.05 18.5 9.99Z" fill="#6B7280"/></svg>;
const NewChatIcon = () => <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M14.06 9.02L14.98 9.94L5.92 19H5V18.08L14.06 9.02ZM17.66 3C17.41 3 17.15 3.1 16.96 3.29L15.13 5.12L18.88 8.87L20.71 7.04C21.1 6.65 21.1 6.02 20.71 5.63L18.37 3.29C18.17 3.09 17.92 3 17.66 3ZM14.06 6.19L3 17.25V21H6.75L17.81 9.94L14.06 6.19Z" fill="white"/></svg>;
const CopyIcon = () => <svg width="16" height="16" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M16 1H4C2.9 1 2 1.9 2 3V17H4V3H16V1ZM19 5H8C6.9 5 6 5.9 6 7V21C6 22.1 6.9 23 8 23H19C20.1 23 21 22.1 21 21V7C21 5.9 20.1 5 19 5ZM19 21H8V7H19V21Z" fill="currentColor"/></svg>;
const MessageIcon = () => <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"></path></svg>;


// --- DATA & TRANSLATIONS ---
const languages = [
    { code: 'en', name: 'English' }, { code: 'es', name: 'Español' }, { code: 'fr', name: 'Français' },
    { code: 'de', name: 'Deutsch' }, { code: 'hi', name: 'हिन्दी' }, { code: 'ja', name: '日本語' },
];

const baseTranslations = {
    en: {
        welcomeTitle: "Welcome to Script",
        welcomeSubtitle: "Start a new conversation or select a previous one. I'm here to help you learn!",
        attach: "Attach", voiceMessage: "Voice Message", listening: "Listening...", browsePrompts: "Browse Prompts",
        footerNote: "Script may generate inaccurate information.", modelInfo: "Model: Script AI v1.3 (Gemini 2.5 Flash)",
        placeholder: "Ask me to explain something...", browsePromptsTitle: "Browse Prompts", newChat: "New Chat",
        chatHistoryTitle: "Conversations", copy: "Copy", copied: "Copied!", typing: "Typing..."
    },
    es: {
        welcomeTitle: "Bienvenido a Script",
        welcomeSubtitle: "Inicia una nueva conversación o selecciona una anterior. ¡Estoy aquí para ayudarte a aprender!",
        attach: "Adjuntar", voiceMessage: "Mensaje de voz", listening: "Escuchando...", browsePrompts: "Explorar ideas",
        footerNote: "Script puede generar información incorrecta.", modelInfo: "Modelo: Script AI v1.3 (Gemini 2.5 Flash)",
        placeholder: "Pídeme que te explique algo...", browsePromptsTitle: "Explorar Ideas", newChat: "Nuevo Chat",
        chatHistoryTitle: "Conversaciones", copy: "Copiar", copied: "¡Copiado!", typing: "Escribiendo..."
    },
    fr: {
        welcomeTitle: "Bienvenue sur Script",
        welcomeSubtitle: "Commencez une nouvelle conversation ou sélectionnez-en une précédente. Je suis là pour vous aider à apprendre!",
        attach: "Joindre", voiceMessage: "Message vocal", listening: "Écoute...", browsePrompts: "Parcourir les invites",
        footerNote: "Script peut générer des informations inexactes.", modelInfo: "Modèle: Script AI v1.3 (Gemini 2.5 Flash)",
        placeholder: "Demandez-moi d'expliquer quelque chose...", browsePromptsTitle: "Parcourir les invites", newChat: "Nouveau chat",
        chatHistoryTitle: "Conversations", copy: "Copier", copied: "Copié!", typing: "Écrit..."
    },
    de: {
        welcomeTitle: "Willkommen bei Script",
        welcomeSubtitle: "Starten Sie eine neue Unterhaltung oder wählen Sie eine frühere aus. Ich bin hier, um Ihnen beim Lernen zu helfen!",
        attach: "Anhängen", voiceMessage: "Sprachnachricht", listening: "Hören...", browsePrompts: "Prompts durchsuchen",
        footerNote: "Script kann ungenaue Informationen generieren.", modelInfo: "Modell: Script AI v1.3 (Gemini 2.5 Flash)",
        placeholder: "Bitten Sie mich, etwas zu erklären...", browsePromptsTitle: "Prompts durchsuchen", newChat: "Neuer Chat",
        chatHistoryTitle: "Gespräche", copy: "Kopieren", copied: "Kopiert!", typing: "Schreibt..."
    },
    hi: {
        welcomeTitle: "स्क्रिप्ट में आपका स्वागत है",
        welcomeSubtitle: "एक नई बातचीत शुरू करें या पिछली बातचीत चुनें। मैं आपको सीखने में मदद करने के लिए यहाँ हूँ!",
        attach: "संलग्न करें", voiceMessage: "वॉयस संदेश", listening: "सुन रहा है...", browsePrompts: "संकेत ब्राउज़ करें",
        footerNote: "स्क्रिप्ट गलत जानकारी उत्पन्न कर सकती है।", modelInfo: "मॉडल: स्क्रिप्ट एआई v1.3 (जेमिनी 2.5 फ्लैश)",
        placeholder: "मुझे कुछ समझाने के लिए कहें...", browsePromptsTitle: "संकेत ब्राउज़ करें", newChat: "नई चैट",
        chatHistoryTitle: "बातचीत", copy: "कॉपी", copied: "कॉपी किया गया!", typing: "लिख रहा है..."
    },
    ja: {
        welcomeTitle: "スクリプトへようこそ",
        welcomeSubtitle: "新しい会話を開始するか、以前の会話を選択してください。私はあなたが学ぶのを助けるためにここにいます！",
        attach: "添付", voiceMessage: "音声メッセージ", listening: "聞いています...", browsePrompts: "プロンプトを閲覧",
        footerNote: "スクリプトは不正確な情報を生成する可能性があります。", modelInfo: "モデル：スクリプトAI v1.3 (Gemini 2.5 Flash)",
        placeholder: "何か説明するように頼んでください...", browsePromptsTitle: "プロンプトを閲覧", newChat: "新しいチャット",
        chatHistoryTitle: "会話", copy: "コピー", copied: "コピーしました！", typing: "入力中..."
    },
};

const suggestionChipsData = [
    { id: 'quantum', icon: <WriteCopyIcon />, color: '#FFFBEB' },
    { id: 'python', icon: <WriteCodeIcon />, color: '#FFF1F2' },
    { id: 'relativity', icon: <ImageGenIcon />, color: '#EFF6FF' },
    { id: 'schedule', icon: <CreateAvatarIcon />, color: '#F0FDF4' },
];

const suggestionChipsTranslations = {
    en: { quantum: 'Explain quantum computing', python: 'Help me write a Python script', relativity: 'Summarize theory of relativity', schedule: 'Plan a study schedule' },
    es: { quantum: 'Explicar computación cuántica', python: 'Ayúdame a escribir un script de Python', relativity: 'Resumir la teoría de la relatividad', schedule: 'Planificar un horario de estudio' },
    fr: { quantum: 'Expliquer l\'informatique quantique', python: 'Aidez-moi à écrire un script Python', relativity: 'Résumer la théorie de la relativité', schedule: 'Planifier un programme d\'études' },
    de: { quantum: 'Quantencomputing erklären', python: 'Helfen Sie mir, ein Python-Skript zu schreiben', relativity: 'Relativitätstheorie zusammenfassen', schedule: 'Einen Lernplan erstellen' },
    hi: { quantum: 'क्वांटम कंप्यूटिंग समझाएं', python: 'पाइथन स्क्रिप्ट लिखने में मेरी मदद करें', relativity: 'सापेक्षता के सिद्धांत को सारांशित करें', schedule: 'एक अध्ययन कार्यक्रम की योजना बनाएं' },
    ja: { quantum: '量子コンピューティングを説明する', python: 'Pythonスクリプトの作成を手伝ってください', relativity: '相対性理論を要約する', schedule: '学習スケジュールを計画する' },
};

const browsePrompts = [
    "Explain the difference between supervised and unsupervised machine learning.", "How does a blockchain work?",
    "Give me a step-by-step guide to learning React.", "Create a simple workout plan for beginners.",
    "What are the main causes of climate change?", "Write a short story about a space explorer finding a new planet.",
];

export default function AiTutorChat() {
    const [prompt, setPrompt] = useState('');
    const [allChats, setAllChats] = useState([]);
    const [activeChatId, setActiveChatId] = useState(null);
    const [isLoading, setIsLoading] = useState(false);
    const [error, setError] = useState(null);
    const [attachedFile, setAttachedFile] = useState(null);
    const [isRecording, setIsRecording] = useState(false);
    const [isPromptModalOpen, setIsPromptModalOpen] = useState(false);
    const [language, setLanguage] = useState('en');
    const [uiText, setUiText] = useState(baseTranslations.en);
    const [copiedStates, setCopiedStates] = useState({});

    const chatLogRef = useRef(null);
    const fileInputRef = useRef(null);
    const recognitionRef = useRef(null);
    
    const activeChat = allChats.find(chat => chat.id === activeChatId);
    
    // --- LOCAL STORAGE & INITIALIZATION ---
    useEffect(() => {
        try {
            const savedChats = localStorage.getItem('aiTutorAllChats');
            const savedActiveId = localStorage.getItem('aiTutorActiveId');
            const savedLang = localStorage.getItem('aiTutorLanguage');

            const loadedChats = savedChats ? JSON.parse(savedChats) : [];
            setAllChats(loadedChats);

            if (savedActiveId && loadedChats.some(c => c.id === savedActiveId)) {
                setActiveChatId(savedActiveId);
            } else if (loadedChats.length > 0) {
                setActiveChatId(loadedChats[0].id);
            } else {
                handleNewChat();
            }

            if (savedLang) setLanguage(savedLang);
        } catch (error) {
            console.error("Failed to load data from local storage", error);
            handleNewChat();
        }
    }, []);

    useEffect(() => {
        try {
            // Sort chats by timestamp before saving
            const sortedChats = [...allChats].sort((a, b) => b.timestamp - a.timestamp);
            localStorage.setItem('aiTutorAllChats', JSON.stringify(sortedChats));
            if(activeChatId) localStorage.setItem('aiTutorActiveId', activeChatId);
            localStorage.setItem('aiTutorLanguage', language);
        } catch (error) {
            console.error("Failed to save data to local storage", error);
        }
    }, [allChats, activeChatId, language]);

    // --- TRANSLATION ---
    useEffect(() => {
        setUiText(baseTranslations[language] || baseTranslations.en);
    }, [language]);
    
    // --- SPEECH RECOGNITION ---
    useEffect(() => {
        const SpeechRecognition = window.SpeechRecognition || window.webkitSpeechRecognition;
        if (SpeechRecognition) {
            const recognition = new SpeechRecognition();
            recognition.lang = language;
            recognition.continuous = true;
            recognition.interimResults = true;
            recognition.onresult = (event) => {
                let finalTranscript = '';
                for (let i = event.resultIndex; i < event.results.length; ++i) {
                    if (event.results[i].isFinal) finalTranscript += event.results[i][0].transcript;
                }
                setPrompt(prev => prev + finalTranscript);
            };
            recognitionRef.current = recognition;
        }
        return () => recognitionRef.current?.stop();
    }, [language]);
    
    // --- UI HELPERS ---
    const scrollToBottom = () => chatLogRef.current?.lastElementChild?.scrollIntoView({ behavior: "smooth" });
    useEffect(scrollToBottom, [activeChat, isLoading]);
    
    useEffect(() => {
        if (!activeChat || !chatLogRef.current) return;
    
        const preElements = chatLogRef.current.querySelectorAll('.message-bubble pre');
        preElements.forEach((pre, index) => {
            const uniqueId = `${activeChatId}-code-${index}`;
            if (pre.dataset.codeId === uniqueId) return; // Avoid re-adding if already processed

            pre.dataset.codeId = uniqueId;
            let button = pre.querySelector('.copy-code-btn');
            if(!button) {
                button = document.createElement('button');
                button.className = 'copy-code-btn';
                pre.appendChild(button);
            }

            const isCopied = copiedStates[uniqueId];
            button.innerHTML = `<svg width="16" height="16" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M16 1H4C2.9 1 2 1.9 2 3V17H4V3H16V1ZM19 5H8C6.9 5 6 5.9 6 7V21C6 22.1 6.9 23 8 23H19C20.1 23 21 22.1 21 21V7C21 5.9 20.1 5 19 5ZM19 21H8V7H19V21Z" fill="currentColor"/></svg> <span>${isCopied ? uiText.copied : uiText.copy}</span>`;
            button.onclick = (e) => {
                e.stopPropagation();
                handleCopyCode(pre.querySelector('code').innerText, uniqueId, button);
            };
        });
    }, [activeChat, isLoading, copiedStates, uiText]);

    const handleCopyCode = (code, id, button) => {
        navigator.clipboard.writeText(code);
        setCopiedStates(prev => ({ ...prev, [id]: true }));
        if(button) button.querySelector('span').innerText = uiText.copied;
        setTimeout(() => {
            setCopiedStates(prev => ({ ...prev, [id]: false }));
            // Check if button still exists
            if(button && button.isConnected) {
                button.querySelector('span').innerText = uiText.copy;
            }
        }, 2000);
    };


    // --- CORE LOGIC ---
    const handleNewChat = () => {
        const newChat = { id: `chat-${Date.now()}`, title: "New Chat", messages: [], timestamp: Date.now() };
        setAllChats(prev => [newChat, ...prev.sort((a, b) => b.timestamp - a.timestamp)]);
        setActiveChatId(newChat.id);
    };

    const toBase64 = file => new Promise((resolve, reject) => {
        const reader = new FileReader();
        reader.readAsDataURL(file);
        reader.onload = () => resolve(reader.result.split(',')[1]);
        reader.onerror = error => reject(error);
    });

    const handleFileChange = async (event) => {
        const file = event.target.files[0];
        if (file && file.type.startsWith('image/')) {
            const base64 = await toBase64(file);
            setAttachedFile({ name: file.name, type: file.type, base64 });
        } else if (file) alert("Please select an image file.");
    };
    
    const handleVoiceClick = () => {
        if (isRecording) {
            recognitionRef.current?.stop();
            setIsRecording(false);
        } else {
            if (recognitionRef.current) {
                recognitionRef.current.start();
                setIsRecording(true);
            } else alert("Speech recognition is not supported in your browser.");
        }
    };

    const handleSend = async (currentPrompt) => {
        if (!currentPrompt.trim() && !attachedFile) return;

        const newUserMessage = { role: 'user', text: currentPrompt, file: attachedFile };
        
        const currentChatId = activeChatId;
        const currentTimestamp = Date.now();
        
        setAllChats(prev => {
            const updatedChats = prev.map(c => {
                if (c.id === currentChatId) {
                    const isFirstMessage = c.messages.length === 0;
                    const newTitle = isFirstMessage ? (currentPrompt.substring(0, 30) + (currentPrompt.length > 30 ? '...' : '')) : c.title;
                    return { ...c, title: newTitle, messages: [...c.messages, newUserMessage], timestamp: currentTimestamp };
                }
                return c;
            });
            return updatedChats.sort((a, b) => b.timestamp - a.timestamp);
        });

        setPrompt('');
        setAttachedFile(null);
        setIsLoading(true);
        setError(null);

        const selectedLanguageName = languages.find(l => l.code === language)?.name || 'English';
        const systemPrompt = `You are an expert AI Tutor named Script AI. Your goal is to help users learn and understand complex topics. Respond in well-formatted markdown. Your response MUST be in ${selectedLanguageName}.`;
        
        const apiKey = ""; 
        const apiUrl = `https://generativelanguage.googleapis.com/v1beta/models/gemini-2.5-flash-preview-05-20:generateContent?key=${apiKey}`;

        const requestHistory = allChats.find(c => c.id === currentChatId)?.messages.map(item => ({
            role: item.role,
            parts: [{ text: item.text }]
        })) || [];

        const userParts = [{ text: currentPrompt }];
        if (attachedFile && attachedFile.base64) {
            userParts.push({ inlineData: { mimeType: attachedFile.type, data: attachedFile.base64 } });
        }

        const payload = {
            contents: [...requestHistory, { role: 'user', parts: userParts }],
            systemInstruction: { parts: [{ text: systemPrompt }] },
        };

        try {
            const response = await fetch(apiUrl, { method: 'POST', headers: { 'Content-Type': 'application/json' }, body: JSON.stringify(payload) });
            if (!response.ok) throw new Error(`API error: ${response.statusText}`);
            const result = await response.json();
            const modelResponse = result.candidates?.[0]?.content?.parts?.[0]?.text;
            if (modelResponse) {
                setAllChats(prev => prev.map(c => c.id === currentChatId ? { ...c, messages: [...c.messages, { role: 'model', text: modelResponse }] } : c));
            } else { throw new Error("Received an empty response from the AI."); }
        } catch (err) {
            setError(err.message);
            setAllChats(prev => prev.map(c => c.id === currentChatId ? { ...c, messages: [...c.messages, { role: 'model', text: `Sorry, I ran into an error: ${err.message}` }] } : c));
        } finally {
            setIsLoading(false);
        }
    };
    
    const handleChipClick = (text) => handleSend(text);
    const handleKeyDown = (e) => { if (e.key === 'Enter' && !e.shiftKey) { e.preventDefault(); handleSend(prompt); } };
    const renderMarkdown = (text) => (window.marked ? { __html: window.marked.parse(text) } : { __html: text.replace(/\n/g, '<br/>') });

    // --- RENDER ---
    return (
        <div className="ai-chat-app">
            <script src="https://cdn.jsdelivr.net/npm/marked/marked.min.js"></script>
            {isPromptModalOpen && <PromptModal />}
            <div className="main-container">
                <aside className="history-sidebar">
                    <button className="new-chat-btn" onClick={handleNewChat}><NewChatIcon /> {uiText.newChat}</button>
                    <h2>{uiText.chatHistoryTitle}</h2>
                    <div className="history-list">
                        {allChats.map(chat => (
                            <button key={chat.id} className={`history-item ${chat.id === activeChatId ? 'active' : ''}`} onClick={() => setActiveChatId(chat.id)}>
                                <MessageIcon />
                                {chat.title}
                            </button>
                        ))}
                    </div>
                </aside>
                <div className="ai-chat-container">
                    <div className="language-selector-wrapper">
                        <LanguageIcon />
                        <select onChange={(e) => setLanguage(e.target.value)} value={language} className="language-selector">
                            {languages.map(lang => <option key={lang.code} value={lang.code}>{lang.name}</option>)}
                        </select>
                    </div>
                    <div className="chat-display-area">
                        {!activeChat || activeChat.messages.length === 0 ? (
                            <WelcomeScreen />
                        ) : (
                            <div className="chat-log" ref={chatLogRef}>
                                {activeChat.messages.map((msg, index) => (
                                    <ChatMessage key={index} msg={msg} />
                                ))}
                                {isLoading && <LoadingMessage />}
                            </div>
                        )}
                    </div>
                    <ChatInputArea />
                </div>
            </div>
        </div>
    );
    
    function ChatMessage({ msg }) {
        return (
            <div className={`chat-message ${msg.role}-message`}>
                {msg.role === 'model' && <TutorIcon />}
                <div className="message-bubble">
                   {msg.file && <img src={`data:${msg.file.type};base64,${msg.file.base64}`} alt={msg.file.name}/>}
                   <div dangerouslySetInnerHTML={renderMarkdown(msg.text)}></div>
                </div>
            </div>
        );
    }
    
    function LoadingMessage() {
        return (
            <div className="chat-message model-message">
                <TutorIcon />
                <div className="message-bubble">
                    <div className="typing-indicator">
                        {uiText.typing}
                        <span></span>
                        <span></span>
                        <span></span>
                    </div>
                </div>
            </div>
        );
    }

    function WelcomeScreen() {
        const currentSuggestionChips = suggestionChipsTranslations[language] || suggestionChipsTranslations.en;
        
        return (
            <>
                <section className="welcome-section">
                    <h1>{uiText.welcomeTitle}</h1>
                    <p>{uiText.welcomeSubtitle}</p>
                </section>
                <div className="suggestion-chips">
                    {suggestionChipsData.map((chip) => (
                        <button key={chip.id} className="chip" style={{ backgroundColor: chip.color }} onClick={() => handleChipClick(currentSuggestionChips[chip.id])}>
                            {chip.icon}<span>{currentSuggestionChips[chip.id]}</span><span className="plus-icon">+</span>
                        </button>
                    ))}
                </div>
            </>
        );
    }
    
    function PromptModal() {
        return (
            <div className="modal-overlay" onClick={() => setIsPromptModalOpen(false)}>
                <div className="modal-content" onClick={e => e.stopPropagation()}>
                    <div className="modal-header">
                        <h2>{uiText.browsePromptsTitle}</h2>
                        <button onClick={() => setIsPromptModalOpen(false)}><CloseIcon /></button>
                    </div>
                    <div className="prompt-list">
                        {browsePrompts.map((p, i) => (
                            <div key={i} className="prompt-list-item" onClick={() => { setPrompt(p); setIsPromptModalOpen(false); }}>{p}</div>
                        ))}
                    </div>
                </div>
            </div>
        );
    }

    function ChatInputArea() {
        return (
            <div className="chat-input-area">
                <div className="prompt-wrapper">
                    <textarea className="prompt-textarea" placeholder={uiText.placeholder} value={prompt} onChange={(e) => setPrompt(e.target.value)} onKeyDown={handleKeyDown} maxLength="3000"/>
                    <button className="send-button" onClick={() => handleSend(prompt)} disabled={isLoading || (!prompt.trim() && !attachedFile)}><SendIcon /></button>
                </div>

                {attachedFile && (
                    <div className="attached-file-display">
                        <span>{attachedFile.name}</span>
                        <button onClick={() => setAttachedFile(null)}><CloseIcon /></button>
                    </div>
                )}
                
                <div className="chat-actions">
                    <div className="action-buttons">
                       <input type="file" ref={fileInputRef} onChange={handleFileChange} style={{ display: 'none' }} accept="image/*" />
                       <button className="action-btn" onClick={() => fileInputRef.current.click()}><AttachIcon /> {uiText.attach}</button>
                       <button className={`action-btn ${isRecording ? 'recording' : ''}`} onClick={handleVoiceClick}><VoiceIcon /> {isRecording ? uiText.listening : uiText.voiceMessage}</button>
                       <button className="action-btn" onClick={() => setIsPromptModalOpen(true)}><BrowseIcon /> {uiText.browsePrompts}</button>
                    </div>
                    <div className="char-counter">{prompt.length}/3000</div>
                </div>
                <p className="footer-note">{uiText.footerNote} {uiText.modelInfo}</p>
            </div>
        );
    }
}

