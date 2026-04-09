import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import ComponentSection from './ComponentSection';

const HEADING_VARIANTS = [
  { variant: 'h1', label: 'Headline 1 — 32px / 600' },
  { variant: 'h2', label: 'Headline 2 — 28px / 600' },
  { variant: 'h3', label: 'Headline 3 — 24px / 600' },
  { variant: 'h4', label: 'Headline 4 — 20px / 600' },
  { variant: 'h5', label: 'Headline 5 — 18px / 600' },
] as const;

const BODY_VARIANTS = [
  { variant: 'subtitle1', label: 'Subtitle 1 — 16px / 500' },
  { variant: 'subtitle2', label: 'Subtitle 2 — 14px / 500' },
  { variant: 'body1', label: 'Body 1 — 16px / 400' },
  { variant: 'body2', label: 'Body 2 — 14px / 400' },
  { variant: 'caption', label: 'Caption — 12px / 400' },
  { variant: 'overline', label: 'Overline — 10px / 600' },
] as const;

export default function TypographyShowcase() {
  return (
    <ComponentSection
      title="Typography"
      description="All Olympus type styles use the Inter font family exclusively. Sizes: 10, 12, 14, 16, 18, 20, 24, 28, 32px. Weights: 400 (Regular), 500 (Medium), 600 (SemiBold)."
    >
      {/* Headings */}
      <Box sx={{ mb: 4 }}>
        {HEADING_VARIANTS.map(({ variant, label }) => (
          <Box key={variant} sx={{ mb: 2 }}>
            <Typography variant={variant}>{label}</Typography>
          </Box>
        ))}
      </Box>

      {/* Body & UI */}
      <Box sx={{ mb: 4 }}>
        {BODY_VARIANTS.map(({ variant, label }) => (
          <Box key={variant} sx={{ mb: 2 }}>
            <Typography variant={variant}>{label}</Typography>
          </Box>
        ))}
      </Box>

      {/* Button typography */}
      <Typography variant="subtitle2" sx={{ mb: 2 }}>
        Button Typography
      </Typography>
      <Box sx={{ display: 'flex', gap: 4, alignItems: 'baseline', flexWrap: 'wrap' }}>
        <Typography sx={(theme) => ({ ...theme.typography.buttonLarge })}>
          Button Large
        </Typography>
        <Typography sx={(theme) => ({ ...theme.typography.buttonMedium })}>
          Button Medium
        </Typography>
        <Typography sx={(theme) => ({ ...theme.typography.buttonSmall })}>
          Button Small
        </Typography>
      </Box>

      {/* Component typography */}
      <Typography variant="subtitle2" sx={{ mt: 4, mb: 2 }}>
        Component Typography
      </Typography>
      <Box sx={{ display: 'flex', gap: 4, alignItems: 'baseline', flexWrap: 'wrap' }}>
        <Typography sx={(theme) => ({ ...theme.typography.inputLabel })}>
          Input Label
        </Typography>
        <Typography sx={(theme) => ({ ...theme.typography.inputText })}>
          Input Text
        </Typography>
        <Typography sx={(theme) => ({ ...theme.typography.helperText })}>
          Helper Text
        </Typography>
        <Typography sx={(theme) => ({ ...theme.typography.chip })}>
          Chip
        </Typography>
        <Typography sx={(theme) => ({ ...theme.typography.tooltip })}>
          Tooltip
        </Typography>
        <Typography sx={(theme) => ({ ...theme.typography.tableHeader })}>
          Table Header
        </Typography>
        <Typography sx={(theme) => ({ ...theme.typography.badgeLabel })}>
          Badge Label
        </Typography>
      </Box>
    </ComponentSection>
  );
}
