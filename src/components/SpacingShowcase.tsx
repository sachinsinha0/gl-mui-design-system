import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import { useTheme } from '@mui/material/styles';
import ComponentSection from './ComponentSection';

const SPACING_SCALE = [
  { index: 0, px: 0 },
  { index: 1, px: 4 },
  { index: 2, px: 8 },
  { index: 3, px: 16 },
  { index: 4, px: 24 },
  { index: 5, px: 32 },
  { index: 6, px: 40 },
  { index: 7, px: 48 },
  { index: 8, px: 64 },
  { index: 9, px: 96 },
  { index: 10, px: 128 },
];

export default function SpacingShowcase() {
  const theme = useTheme();

  return (
    <ComponentSection
      title="Spacing"
      description="A custom non-linear 4px-base spacing scale. Always use theme.spacing(n) — never hardcode pixel values. Permitted: 0, 4, 8, 16, 24, 32, 40, 48, 64, 96, 128."
    >
      <Box sx={{ display: 'flex', flexDirection: 'column', gap: 1.5 }}>
        {SPACING_SCALE.map(({ index, px }) => (
          <Box
            key={index}
            sx={{
              display: 'flex',
              alignItems: 'center',
              gap: 2,
              py: 0.5,
              borderRadius: 1,
              transition: 'background-color 0.15s ease',
              '&:hover': { bgcolor: 'action.hover' },
              px: 1,
              mx: -1,
            }}
          >
            <Typography
              variant="caption"
              sx={{
                width: 36,
                textAlign: 'right',
                fontWeight: 600,
                flexShrink: 0,
                fontFamily: 'monospace',
                color: 'primary.main',
              }}
            >
              {index}
            </Typography>

            <Box sx={{ flex: 1, position: 'relative', height: 28, display: 'flex', alignItems: 'center' }}>
              {/* Background track */}
              <Box
                sx={{
                  position: 'absolute',
                  left: 0,
                  right: 0,
                  height: 4,
                  borderRadius: 9999,
                  bgcolor: 'action.hover',
                }}
              />
              {/* Value bar */}
              <Box
                sx={{
                  width: theme.spacing(index),
                  height: 28,
                  borderRadius: 1.5,
                  bgcolor: 'primary.main',
                  opacity: index === 0 ? 0.2 : 0.85,
                  minWidth: index === 0 ? 4 : undefined,
                  position: 'relative',
                  zIndex: 1,
                  transition: 'opacity 0.15s ease',
                  '&:hover': { opacity: 1 },
                }}
              />
            </Box>

            <Typography
              variant="caption"
              color="text.secondary"
              sx={{
                width: 48,
                textAlign: 'right',
                flexShrink: 0,
                fontFamily: 'monospace',
                fontSize: '0.6875rem',
              }}
            >
              {px}px
            </Typography>
          </Box>
        ))}
      </Box>
    </ComponentSection>
  );
}
