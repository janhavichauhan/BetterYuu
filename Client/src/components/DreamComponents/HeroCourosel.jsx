import styles from '../../style/components/DreamComponents/HeroCarousel.module.scss';
import { useState, useEffect } from 'react';
import { ThemeProvider, createTheme } from '@mui/material/styles';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardActions from '@mui/material/CardActions';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import { LocalizationProvider, DatePicker } from '@mui/x-date-pickers';
import { AdapterDateFns } from '@mui/x-date-pickers/AdapterDateFns';
import ProfileCard from './ProfileCard';

const cards = [
  {
    heading: 'Welcome back Nitin-N!!',
    sub: ['Ready to explore your dreams? Reflect, record & grow. Every dream is a journey.'],
    button: { text: 'Add your dream', link: '/add-dream' },
  },
  {
    heading: 'Want to view your dream?',
    sub: ['Your dream archive awaits. Unlock nightly revelations. See patterns emerge.'],
    buttons: [
      { text: 'View your dreams', link: '/your-dreams' },
      { text: 'Watch dream analysis', link: '/analysis' },
    ],
  },
  {
    heading: 'See what other people are dreaming',
    sub: ['Community dreams at a glance. Share, learn, and connect. Find inspiration in the stars.'],
    button: { text: 'To Blogs', link: '/blogs' },
  },
];

export default function HeroCarousel() {
  const [idx, setIdx] = useState(0);
  const [date, setDate] = useState(new Date());

  useEffect(() => {
    const intvl = setInterval(() => setIdx((i) => (i + 1) % cards.length), 5000);
    return () => clearInterval(intvl);
  }, []);

  const card = cards[idx];
  // MUI dark theme
  const darkTheme = createTheme({
    palette: {
      mode: 'dark',
      background: { paper: '#000' },
      text: { primary: '#fff' },
      primary: { main: '#1976d2' },
    },
  });

  return (
    <ThemeProvider theme={darkTheme}>
      <section className={styles.hero}>
        <div className={styles.leftCol}>
          <Card sx={{ backgroundColor: 'rgba(0,0,0,0.7)', mb: 3, borderRadius: 2 }}>
            <CardContent>
              <Typography variant="h4" gutterBottom sx={{ fontWeight: 'bold' }}>
                {card.heading}
              </Typography>
              {card.sub.map((s, i) => (
                <Typography key={i} variant="body1" sx={{ mb: 1 }}>
                  {s}
                </Typography>
              ))}
            </CardContent>
            <CardActions>
              {card.button ? (
                <Button href={card.button.link} variant="contained" color="primary" sx={{ textTransform: 'none' }}>
                  {card.button.text}
                </Button>
              ) : (
                card.buttons.map((btn, i) => (
                  <Button key={i} href={btn.link} variant="contained" color="primary" sx={{ textTransform: 'none', mr: 1 }}>
                    {btn.text}
                  </Button>
                ))
              )}
            </CardActions>
          </Card>
          <div className={styles.profileBox}>
            <ProfileCard />
          </div>
        </div>

        <div className={styles.rail}>
          <Card sx={{ backgroundColor: 'rgba(0,0,0,0.7)', mb: 3, p: 2 }}>
            <Typography variant="h6" gutterBottom>
              Talk to AI Assistant
            </Typography>
            <Typography variant="body2" sx={{ mb: 2 }}>
              Get insights and personalized tips from your dreams.
            </Typography>
            <Button href="/ai-analyzer" variant="outlined" color="primary" fullWidth>
              Start
            </Button>
          </Card>
          <Card sx={{ backgroundColor: 'rgba(0,0,0,0.7)', p: 2 }}>
            <LocalizationProvider dateAdapter={AdapterDateFns}>
              <DatePicker
                value={date}
                onChange={(newValue) => setDate(newValue)}
                renderInput={(params) => (
                  <TextField
                    {...params}
                    fullWidth
                    sx={{
                      input: { color: '#fff' },
                      svg: { color: '#fff' },
                      '.MuiOutlinedInput-root': {
                        '& fieldset': { borderColor: '#fff' },
                        '&:hover fieldset': { borderColor: '#aaa' },
                        '&.Mui-focused fieldset': { borderColor: '#fff' },
                      },
                    }}
                  />
                )}
              />
            </LocalizationProvider>
          </Card>
        </div>
      </section>
    </ThemeProvider>
  );
}