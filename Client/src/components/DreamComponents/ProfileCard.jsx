import { Card, CardContent, Typography, Avatar, Stack, Box, Chip, Grid } from '@mui/material';

export default function ProfileCard() {
  return (
    <Card
      sx={{
        backgroundColor: 'rgba(0,0,0,0.6)',
        backdropFilter: 'blur(5px)',
        borderRadius: 3,
        p: 4, // slightly more padding
        width: '100%',
        maxWidth: "800", // maximum width
        mx: 'auto',
      }}
    >
      {/* Header Row */}
      <Stack direction="row" justifyContent="space-between" alignItems="center" mb={4}>
        <Typography variant="h5" sx={{ fontWeight: 'bold', color: '#fff' }}>
          My Profile
        </Typography>
        <Chip
          label="Pro"
          color="primary"
          size="medium"
          sx={{ fontWeight: 'bold', fontSize: '0.875rem', backgroundColor: 'rgba(255,215,0,0.8)', color: '#000' }}
        />
      </Stack>

      {/* User Row */}
      <Stack direction="row" spacing={4} alignItems="center" mb={4}>
        <Avatar
          src="https://i.pravatar.cc/140?img=68"
          alt="User avatar"
          sx={{ width: 72, height: 72, border: '2px solid #fff' }} // bigger avatar
        />
        <Box>
          <Typography variant="h6" sx={{ fontWeight: 'bold', fontSize: '1.25rem', color: '#fff' }}>
            Janhavi
          </Typography>
          <Typography variant="body1" sx={{ fontSize: '1rem', color: 'rgba(255,255,255,0.8)' }}>
            Dreamer
          </Typography>
        </Box>
      </Stack>

      {/* KPIs */}
      <Grid container spacing={4}>
        <Grid item xs={4}>
          <Box textAlign="center">
            <Typography variant="body1" sx={{ fontSize: '1rem', color: 'rgba(255,255,255,0.7)' }}>
              Dreams added
            </Typography>
            <Typography variant="h5" sx={{ fontWeight: 'bold', fontSize: '1.5rem', color: '#fff' }}>
              42
            </Typography>
          </Box>
        </Grid>
        <Grid item xs={4}>
          <Box textAlign="center">
            <Typography variant="body1" sx={{ fontSize: '1rem', color: 'rgba(255,255,255,0.7)' }}>
              Dream analysis
            </Typography>
            <Typography variant="h5" sx={{ fontWeight: 'bold', fontSize: '1.5rem', color: '#fff' }}>
              18
            </Typography>
          </Box>
        </Grid>
        <Grid item xs={4}>
          <Box textAlign="center">
            <Typography variant="body1" sx={{ fontSize: '1rem', color: 'rgba(255,255,255,0.7)' }}>
              Blogs
            </Typography>
            <Typography variant="h5" sx={{ fontWeight: 'bold', fontSize: '1.5rem', color: '#fff' }}>
              7
            </Typography>
          </Box>
        </Grid>
      </Grid>
    </Card>
  );
}
