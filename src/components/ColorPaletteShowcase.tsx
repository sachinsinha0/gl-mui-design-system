import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Grid from '@mui/material/Grid';
import { useTheme } from '@mui/material/styles';
import ComponentSection from './ComponentSection';

interface SwatchProps {
  color: string;
  label: string;
  token: string;
}

function Swatch({ color, label, token }: SwatchProps) {
  return (
    <Box
      sx={{
        bgcolor: color,
        borderRadius: 2,
        overflow: 'hidden',
        transition: 'transform 0.15s ease, box-shadow 0.15s ease',
        '&:hover': { transform: 'scale(1.02)', boxShadow: 4 },
      }}
    >
      <Box sx={{ height: 64 }} />
      <Box
        sx={{
          bgcolor: 'background.paper',
          px: 2,
          py: 1.5,
          borderTop: '1px solid',
          borderColor: 'divider',
        }}
      >
        <Typography variant="subtitle2" sx={{ fontSize: '0.8125rem' }}>{label}</Typography>
        <Typography variant="caption" color="text.secondary" sx={{ fontFamily: 'monospace', fontSize: '0.6875rem' }}>
          {token}
        </Typography>
      </Box>
    </Box>
  );
}

export default function ColorPaletteShowcase() {
  const theme = useTheme();

  const SEMANTIC_GROUPS = [
    {
      title: 'Primary',
      swatches: [
        { color: 'primary.light', label: 'Light', token: 'primary.light' },
        { color: 'primary.main', label: 'Main', token: 'primary.main' },
        { color: 'primary.dark', label: 'Dark', token: 'primary.dark' },
      ],
    },
    {
      title: 'Error',
      swatches: [
        { color: 'error.light', label: 'Light', token: 'error.light' },
        { color: 'error.main', label: 'Main', token: 'error.main' },
        { color: 'error.dark', label: 'Dark', token: 'error.dark' },
      ],
    },
    {
      title: 'Warning',
      swatches: [
        { color: 'warning.light', label: 'Light', token: 'warning.light' },
        { color: 'warning.main', label: 'Main', token: 'warning.main' },
        { color: 'warning.dark', label: 'Dark', token: 'warning.dark' },
      ],
    },
    {
      title: 'Success',
      swatches: [
        { color: 'success.light', label: 'Light', token: 'success.light' },
        { color: 'success.main', label: 'Main', token: 'success.main' },
        { color: 'success.dark', label: 'Dark', token: 'success.dark' },
      ],
    },
    {
      title: 'Info',
      swatches: [
        { color: 'info.light', label: 'Light', token: 'info.light' },
        { color: 'info.main', label: 'Main', token: 'info.main' },
        { color: 'info.dark', label: 'Dark', token: 'info.dark' },
      ],
    },
  ];

  const GREY_SHADES = [50, 100, 200, 300, 400, 500, 600, 700, 800, 900] as const;

  return (
    <ComponentSection
      title="Color Palette"
      description="All semantic colors, grey scale, text, background, and elevation tokens. Every color switches automatically between light and dark mode."
    >
      {/* Semantic groups */}
      {SEMANTIC_GROUPS.map((group) => (
        <Box key={group.title} sx={{ mb: 5 }}>
          <Typography variant="overline" color="text.secondary" sx={{ mb: 2, display: 'block' }}>
            {group.title}
          </Typography>
          <Grid container spacing={2}>
            {group.swatches.map((s) => (
              <Grid size={{ xs: 6, sm: 4 }} key={s.token}>
                <Swatch {...s} />
              </Grid>
            ))}
          </Grid>
        </Box>
      ))}

      {/* Text */}
      <Box sx={{ mb: 5 }}>
        <Typography variant="overline" color="text.secondary" sx={{ mb: 2, display: 'block' }}>
          Text
        </Typography>
        <Grid container spacing={2}>
          {[
            { label: 'Primary', token: 'text.primary', color: 'text.primary' },
            { label: 'Secondary', token: 'text.secondary', color: 'text.secondary' },
            { label: 'Disabled', token: 'text.disabled', color: 'text.disabled' },
          ].map((t) => (
            <Grid size={{ xs: 12, sm: 4 }} key={t.token}>
              <Box
                sx={{
                  p: 3,
                  borderRadius: 2,
                  border: '1px solid',
                  borderColor: 'divider',
                  textAlign: 'center',
                }}
              >
                <Typography
                  sx={{ color: t.color, fontSize: '1.5rem', fontWeight: 600, mb: 0.5 }}
                >
                  Aa
                </Typography>
                <Typography variant="caption" color="text.secondary" sx={{ fontFamily: 'monospace', fontSize: '0.6875rem' }}>
                  {t.token}
                </Typography>
              </Box>
            </Grid>
          ))}
        </Grid>
      </Box>

      {/* Background */}
      <Box sx={{ mb: 5 }}>
        <Typography variant="overline" color="text.secondary" sx={{ mb: 2, display: 'block' }}>
          Background
        </Typography>
        <Grid container spacing={2}>
          <Grid size={{ xs: 12, sm: 6 }}>
            <Box sx={{ bgcolor: 'background.default', p: 3, borderRadius: 2, border: 1, borderColor: 'divider' }}>
              <Typography variant="body2" fontWeight={500}>Default</Typography>
              <Typography variant="caption" color="text.secondary" sx={{ fontFamily: 'monospace', fontSize: '0.6875rem' }}>
                background.default
              </Typography>
            </Box>
          </Grid>
          <Grid size={{ xs: 12, sm: 6 }}>
            <Box sx={{ bgcolor: 'background.paper', p: 3, borderRadius: 2, border: 1, borderColor: 'divider' }}>
              <Typography variant="body2" fontWeight={500}>Paper</Typography>
              <Typography variant="caption" color="text.secondary" sx={{ fontFamily: 'monospace', fontSize: '0.6875rem' }}>
                background.paper
              </Typography>
            </Box>
          </Grid>
        </Grid>
      </Box>

      {/* Grey scale */}
      <Box sx={{ mb: 5 }}>
        <Typography variant="overline" color="text.secondary" sx={{ mb: 2, display: 'block' }}>
          Grey Scale
        </Typography>
        <Box sx={{ display: 'flex', borderRadius: 2, overflow: 'hidden' }}>
          {GREY_SHADES.map((shade) => (
            <Box
              key={shade}
              sx={{
                flex: 1,
                bgcolor: theme.palette.grey[shade],
                py: 3,
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                justifyContent: 'center',
                color: shade >= 500 ? 'common.white' : 'common.black',
                transition: 'flex 0.2s ease',
                cursor: 'default',
                '&:hover': { flex: 2 },
              }}
            >
              <Typography variant="caption" fontWeight={600} sx={{ fontSize: '0.625rem' }}>
                {shade}
              </Typography>
            </Box>
          ))}
        </Box>
      </Box>

      {/* Elevation */}
      <Typography variant="overline" color="text.secondary" sx={{ mb: 2, display: 'block' }}>
        Elevation
      </Typography>
      <Box sx={{ display: 'flex', gap: 3, flexWrap: 'wrap' }}>
        {[0, 1, 2, 4, 8, 16, 24].map((elev) => (
          <Box
            key={elev}
            sx={{
              width: 88,
              height: 88,
              bgcolor: 'background.paper',
              boxShadow: elev,
              borderRadius: 2,
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
              justifyContent: 'center',
              transition: 'transform 0.15s ease',
              '&:hover': { transform: 'translateY(-2px)' },
            }}
          >
            <Typography variant="h5" sx={{ fontWeight: 700 }}>{elev}</Typography>
            <Typography variant="caption" color="text.secondary" sx={{ fontSize: '0.625rem' }}>
              elevation
            </Typography>
          </Box>
        ))}
      </Box>
    </ComponentSection>
  );
}
