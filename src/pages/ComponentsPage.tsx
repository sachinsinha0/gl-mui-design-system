import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Chip from '@mui/material/Chip';
import Stack from '@mui/material/Stack';
import ButtonsShowcase from '../components/ButtonsShowcase';
import TextFieldsShowcase from '../components/TextFieldsShowcase';
import SelectionControlsShowcase from '../components/SelectionControlsShowcase';
import ChipsShowcase from '../components/ChipsShowcase';
import CardsShowcase from '../components/CardsShowcase';
import TablesShowcase from '../components/TablesShowcase';
import AlertsShowcase from '../components/AlertsShowcase';
import DialogsShowcase from '../components/DialogsShowcase';
import NavigationShowcase from '../components/NavigationShowcase';
import FeedbackShowcase from '../components/FeedbackShowcase';
import DataDisplayShowcase from '../components/DataDisplayShowcase';

const SECTIONS = [
  'Buttons',
  'Text Fields',
  'Selection Controls',
  'Chips',
  'Cards',
  'Tables',
  'Alerts',
  'Dialogs, Menus & Overlays',
  'Navigation',
  'Feedback',
  'Data Display',
];

export default function ComponentsPage() {
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
              ? 'linear-gradient(135deg, #E8F0FC 0%, #E3F2FD 50%, #E1F5FE 100%)'
              : 'linear-gradient(135deg, #121830 0%, #0f1e3a 50%, #0d1a30 100%)',
          border: '1px solid',
          borderColor: theme.palette.mode === 'light' ? 'rgba(0,0,0,0.04)' : 'rgba(255,255,255,0.06)',
        })}
      >
        <Typography
          variant="overline"
          color="text.secondary"
          sx={{ mb: 1, display: 'block' }}
        >
          UI Building Blocks
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
          Components
        </Typography>
        <Typography variant="body1" color="text.secondary" sx={{ maxWidth: 560, lineHeight: 1.7 }}>
          Every component uses Olympus design tokens exclusively — no hardcoded values.
          Dark mode, Figma mapping, and accessibility come built in.
        </Typography>
      </Box>

      {/* Section nav — sticky */}
      <Stack
        direction="row"
        spacing={1}
        flexWrap="wrap"
        useFlexGap
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
            key={section}
            label={section}
            variant="outlined"
            size="small"
            onClick={() => scrollTo(section.toLowerCase().replace(/[\s,&]+/g, '-'))}
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

      <ButtonsShowcase />
      <TextFieldsShowcase />
      <SelectionControlsShowcase />
      <ChipsShowcase />
      <CardsShowcase />
      <TablesShowcase />
      <AlertsShowcase />
      <DialogsShowcase />
      <NavigationShowcase />
      <FeedbackShowcase />
      <DataDisplayShowcase />
    </Box>
  );
}
