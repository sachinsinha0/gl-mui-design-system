import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardActionArea from '@mui/material/CardActionArea';
import Typography from '@mui/material/Typography';
import Grid from '@mui/material/Grid';
import Chip from '@mui/material/Chip';
import PaletteOutlinedIcon from '@mui/icons-material/PaletteOutlined';
import WidgetsOutlinedIcon from '@mui/icons-material/WidgetsOutlined';
import RocketLaunchOutlinedIcon from '@mui/icons-material/RocketLaunchOutlined';
import FormatSizeIcon from '@mui/icons-material/FormatSize';
import SpaceBarIcon from '@mui/icons-material/SpaceBar';
import ColorLensOutlinedIcon from '@mui/icons-material/ColorLensOutlined';
import LayersOutlinedIcon from '@mui/icons-material/LayersOutlined';
import AutoAwesomeOutlinedIcon from '@mui/icons-material/AutoAwesomeOutlined';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
import { useNavigate } from 'react-router-dom';

const FEATURE_CARDS = [
  {
    title: 'Get Started',
    subtitle: 'Designer & developer guide',
    description: 'Step-by-step setup, token reference, Figma→Code mapping — everything in plain language.',
    icon: <RocketLaunchOutlinedIcon sx={{ fontSize: 32 }} />,
    path: '/get-started',
    gradient: 'linear-gradient(135deg, #FFF8E1 0%, #FFF3E0 100%)',
    darkGradient: 'linear-gradient(135deg, #1a1a0d 0%, #1a140d 100%)',
    iconColor: 'warning.main',
  },
  {
    title: 'Foundations',
    subtitle: 'Design tokens',
    description: 'Color, typography, spacing & elevation — the visual language behind every component.',
    icon: <PaletteOutlinedIcon sx={{ fontSize: 32 }} />,
    path: '/foundations',
    gradient: 'linear-gradient(135deg, #E8F0FC 0%, #D6E4F9 100%)',
    darkGradient: 'linear-gradient(135deg, #1a2a4a 0%, #0f2044 100%)',
    iconColor: 'primary.main',
  },
  {
    title: 'Components',
    subtitle: 'UI building blocks',
    description: 'Buttons, inputs, cards, dialogs, tables — production-ready and token-compliant.',
    icon: <WidgetsOutlinedIcon sx={{ fontSize: 32 }} />,
    path: '/components',
    gradient: 'linear-gradient(135deg, #E9F8EB 0%, #D4F0D8 100%)',
    darkGradient: 'linear-gradient(135deg, #142a18 0%, #0d1f10 100%)',
    iconColor: 'success.main',
  },
];

const QUICK_LINKS = [
  { label: 'Color', icon: <ColorLensOutlinedIcon sx={{ fontSize: 18 }} />, section: 'color-palette', page: '/foundations' },
  { label: 'Typography', icon: <FormatSizeIcon sx={{ fontSize: 18 }} />, section: 'typography', page: '/foundations' },
  { label: 'Spacing', icon: <SpaceBarIcon sx={{ fontSize: 18 }} />, section: 'spacing', page: '/foundations' },
  { label: 'Buttons', icon: <AutoAwesomeOutlinedIcon sx={{ fontSize: 18 }} />, section: 'buttons', page: '/components' },
  { label: 'Cards', icon: <LayersOutlinedIcon sx={{ fontSize: 18 }} />, section: 'cards', page: '/components' },
];

export default function DashboardPage() {
  const navigate = useNavigate();

  return (
    <Box sx={{ animation: 'fadeIn 0.5s ease-out' }}>
      {/* ── Hero ──────────────────────────────────────────────────────────── */}
      <Box
        sx={(theme) => ({
          position: 'relative',
          borderRadius: 3,
          overflow: 'hidden',
          px: { xs: 4, md: 5 },
          py: { xs: 5, md: 7 },
          mb: 5,
          background:
            theme.palette.mode === 'light'
              ? 'linear-gradient(135deg, #196AE5 0%, #0F4089 40%, #0E39A9 100%)'
              : 'linear-gradient(135deg, #1a2a4a 0%, #121830 40%, #0d1225 100%)',
          color: 'common.white',
          // Decorative circles
          '&::before': {
            content: '""',
            position: 'absolute',
            top: -80,
            right: -60,
            width: 300,
            height: 300,
            borderRadius: '50%',
            background: 'rgba(255,255,255,0.06)',
            pointerEvents: 'none',
          },
          '&::after': {
            content: '""',
            position: 'absolute',
            bottom: -40,
            left: '30%',
            width: 200,
            height: 200,
            borderRadius: '50%',
            background: 'rgba(255,255,255,0.04)',
            pointerEvents: 'none',
          },
        })}
      >
        <Chip
          label="v1.0 — Olympus Tokens"
          size="small"
          sx={{
            mb: 3,
            bgcolor: 'rgba(255,255,255,0.15)',
            color: 'common.white',
            fontWeight: 500,
            backdropFilter: 'blur(8px)',
            border: '1px solid rgba(255,255,255,0.2)',
          }}
        />

        <Typography
          variant="h1"
          sx={{
            fontSize: { xs: '2rem', sm: '2.75rem', md: '3.5rem' },
            fontWeight: 700,
            lineHeight: 1.1,
            mb: 2,
            letterSpacing: '-1px',
            color: 'common.white',
            maxWidth: 700,
          }}
        >
          Great Learning
          <br />
          <Box
            component="span"
            sx={{ opacity: 0.75, fontWeight: 400 }}
          >
            MUI Design System
          </Box>
        </Typography>

        <Typography
          variant="body1"
          sx={{
            maxWidth: 520,
            lineHeight: 1.7,
            opacity: 0.85,
            fontSize: { xs: '0.9375rem', md: '1.0625rem' },
          }}
        >
          Token-based. Figma-mapped. Dark mode ready. One theme powers every
          component with pixel-perfect consistency across your entire product.
        </Typography>
      </Box>

      {/* ── Quick links ──────────────────────────────────────────────────── */}
      <Box sx={{ mb: 5 }}>
        <Typography variant="overline" color="text.secondary" sx={{ mb: 2, display: 'block' }}>
          Jump to
        </Typography>
        <Box sx={{ display: 'flex', gap: 1, flexWrap: 'wrap' }}>
          {QUICK_LINKS.map((link) => (
            <Chip
              key={link.label}
              icon={link.icon}
              label={link.label}
              variant="outlined"
              clickable
              onClick={() => navigate(`${link.page}#${link.section}`)}
              sx={{
                borderRadius: 2,
                transition: 'all 0.15s ease',
                '&:hover': {
                  bgcolor: 'primary.shades.hover',
                  borderColor: 'primary.main',
                  color: 'primary.main',
                },
              }}
            />
          ))}
        </Box>
      </Box>

      {/* ── Feature cards ────────────────────────────────────────────────── */}
      <Typography variant="overline" color="text.secondary" sx={{ mb: 2, display: 'block' }}>
        Explore
      </Typography>
      <Grid container spacing={3}>
        {FEATURE_CARDS.map((card) => (
          <Grid size={{ xs: 12, sm: 6, md: 4 }} key={card.title}>
            <Card
              elevation={0}
              sx={(theme) => ({
                borderRadius: 3,
                overflow: 'hidden',
                background:
                  theme.palette.mode === 'light' ? card.gradient : card.darkGradient,
                border: '1px solid',
                borderColor:
                  theme.palette.mode === 'light'
                    ? 'rgba(0,0,0,0.06)'
                    : 'rgba(255,255,255,0.08)',
                transition: 'transform 0.2s ease, box-shadow 0.2s ease',
                '&:hover': {
                  transform: 'translateY(-4px)',
                  boxShadow: theme.shadows[8],
                },
              })}
            >
              <CardActionArea
                onClick={() => navigate(card.path)}
                sx={{ p: { xs: 3, md: 4 }, display: 'flex', flexDirection: 'column', alignItems: 'flex-start' }}
              >
                <Box
                  sx={{
                    width: 56,
                    height: 56,
                    borderRadius: 2,
                    bgcolor: 'background.paper',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    color: card.iconColor,
                    mb: 3,
                    boxShadow: 1,
                  }}
                >
                  {card.icon}
                </Box>

                <Typography variant="overline" color="text.secondary" sx={{ mb: 0.5 }}>
                  {card.subtitle}
                </Typography>
                <Typography variant="h3" sx={{ mb: 1 }}>
                  {card.title}
                </Typography>
                <Typography variant="body2" color="text.secondary" sx={{ mb: 3, lineHeight: 1.7 }}>
                  {card.description}
                </Typography>

                <Box
                  sx={{
                    display: 'flex',
                    alignItems: 'center',
                    gap: 0.5,
                    color: 'primary.main',
                    fontWeight: 500,
                    fontSize: '0.875rem',
                  }}
                >
                  Explore
                  <ArrowForwardIcon sx={{ fontSize: 18 }} />
                </Box>
              </CardActionArea>
            </Card>
          </Grid>
        ))}
      </Grid>

      {/* ── Stats strip ──────────────────────────────────────────────────── */}
      <Box
        sx={(theme) => ({
          mt: 5,
          p: { xs: 3, md: 4 },
          borderRadius: 3,
          bgcolor: theme.palette.mode === 'light' ? 'grey.50' : 'rgba(255,255,255,0.03)',
          border: '1px solid',
          borderColor: 'divider',
          display: 'flex',
          flexWrap: 'wrap',
          gap: { xs: 3, md: 0 },
          justifyContent: 'space-around',
          textAlign: 'center',
        })}
      >
        {[
          { value: '100+', label: 'Color tokens' },
          { value: '20+', label: 'Typography variants' },
          { value: '11', label: 'Spacing scale' },
          { value: '25', label: 'Elevation levels' },
          { value: '15+', label: 'Components' },
        ].map((stat) => (
          <Box key={stat.label} sx={{ minWidth: 100 }}>
            <Typography
              variant="h3"
              color="primary.main"
              sx={{ fontWeight: 700 }}
            >
              {stat.value}
            </Typography>
            <Typography variant="caption" color="text.secondary">
              {stat.label}
            </Typography>
          </Box>
        ))}
      </Box>
    </Box>
  );
}
