import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Chip from '@mui/material/Chip';
import Stack from '@mui/material/Stack';
import ColorLensOutlinedIcon from '@mui/icons-material/ColorLensOutlined';
import FormatSizeOutlinedIcon from '@mui/icons-material/FormatSizeOutlined';
import SpaceBarOutlinedIcon from '@mui/icons-material/SpaceBarOutlined';
import ColorPaletteShowcase from '../components/ColorPaletteShowcase';
import TypographyShowcase from '../components/TypographyShowcase';
import SpacingShowcase from '../components/SpacingShowcase';

const SECTIONS = [
  { label: 'Color', id: 'color-palette', icon: <ColorLensOutlinedIcon sx={{ fontSize: 16 }} /> },
  { label: 'Typography', id: 'typography', icon: <FormatSizeOutlinedIcon sx={{ fontSize: 16 }} /> },
  { label: 'Spacing', id: 'spacing', icon: <SpaceBarOutlinedIcon sx={{ fontSize: 16 }} /> },
];

export default function FoundationsPage() {
  const scrollTo = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth', block: 'start' });
  };

  return (
    <Box sx={{ animation: 'fadeIn 0.5s ease-out' }}>
      {/* Page header */}
      <Box
        sx={(theme) => ({
          borderRadius: 3,
          px: { xs: 3, md: 4 },
          py: { xs: 4, md: 5 },
          mb: 5,
          background:
            theme.palette.mode === 'light'
              ? 'linear-gradient(135deg, #F3E5F5 0%, #E8F0FC 50%, #E9F8EB 100%)'
              : 'linear-gradient(135deg, #1a1225 0%, #121830 50%, #0d1f10 100%)',
          border: '1px solid',
          borderColor: theme.palette.mode === 'light' ? 'rgba(0,0,0,0.04)' : 'rgba(255,255,255,0.06)',
        })}
      >
        <Typography
          variant="overline"
          color="text.secondary"
          sx={{ mb: 1, display: 'block' }}
        >
          Design Tokens
        </Typography>
        <Typography
          variant="h1"
          sx={{
            fontSize: { xs: '1.75rem', md: '2.5rem' },
            fontWeight: 700,
            letterSpacing: '-0.5px',
            mb: 1.5,
          }}
        >
          Foundations
        </Typography>
        <Typography variant="body1" color="text.secondary" sx={{ maxWidth: 560, lineHeight: 1.7 }}>
          The visual language that powers every component — color, type, spacing, and elevation.
          Every token maps 1:1 to a Figma variable.
        </Typography>
      </Box>

      {/* Section nav */}
      <Stack
        direction="row"
        spacing={1}
        sx={{
          mb: 5,
          position: 'sticky',
          top: 0,
          zIndex: 10,
          bgcolor: 'background.default',
          py: 1.5,
          mx: -1,
          px: 1,
        }}
      >
        {SECTIONS.map((section) => (
          <Chip
            key={section.id}
            icon={section.icon}
            label={section.label}
            variant="outlined"
            size="small"
            onClick={() => scrollTo(section.id)}
            clickable
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
      </Stack>

      <ColorPaletteShowcase />
      <TypographyShowcase />
      <SpacingShowcase />
    </Box>
  );
}
