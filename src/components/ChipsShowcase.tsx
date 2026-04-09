import Box from '@mui/material/Box';
import Chip from '@mui/material/Chip';
import Typography from '@mui/material/Typography';
import Stack from '@mui/material/Stack';
import Avatar from '@mui/material/Avatar';
import FaceIcon from '@mui/icons-material/Face';
import DoneIcon from '@mui/icons-material/Done';
import ComponentSection from './ComponentSection';

const COLORS = ['default', 'primary', 'error', 'warning', 'success', 'info'] as const;

export default function ChipsShowcase() {
  return (
    <ComponentSection
      title="Chips"
      description="Chip typography is 12px/500. Pill-shaped with borderRadius: 9999. Available in filled and outlined variants."
    >
      {/* Filled */}
      <Typography variant="subtitle2" sx={{ mb: 2 }}>
        Filled
      </Typography>
      <Stack direction="row" spacing={2} flexWrap="wrap" useFlexGap sx={{ mb: 4 }}>
        {COLORS.map((color) => (
          <Chip key={color} label={color} color={color} />
        ))}
        <Chip label="Clickable" color="primary" onClick={() => {}} />
        <Chip label="Deletable" color="primary" onDelete={() => {}} />
        <Chip label="Disabled" disabled />
      </Stack>

      {/* Outlined */}
      <Typography variant="subtitle2" sx={{ mb: 2 }}>
        Outlined
      </Typography>
      <Stack direction="row" spacing={2} flexWrap="wrap" useFlexGap sx={{ mb: 4 }}>
        {COLORS.map((color) => (
          <Chip key={color} label={color} color={color} variant="outlined" />
        ))}
        <Chip label="Deletable" color="error" variant="outlined" onDelete={() => {}} />
      </Stack>

      {/* With icons & avatars */}
      <Typography variant="subtitle2" sx={{ mb: 2 }}>
        With Icons & Avatars
      </Typography>
      <Stack direction="row" spacing={2} flexWrap="wrap" useFlexGap sx={{ mb: 4 }}>
        <Chip icon={<FaceIcon />} label="With Icon" color="primary" />
        <Chip
          avatar={<Avatar>S</Avatar>}
          label="With Avatar"
          color="primary"
          variant="outlined"
        />
        <Chip
          label="Custom Delete"
          color="success"
          onDelete={() => {}}
          deleteIcon={<DoneIcon />}
        />
      </Stack>

      {/* Sizes */}
      <Typography variant="subtitle2" sx={{ mb: 2 }}>
        Sizes
      </Typography>
      <Stack direction="row" spacing={2} alignItems="center">
        <Chip label="Small" size="small" color="primary" />
        <Chip label="Medium" size="medium" color="primary" />
      </Stack>
    </ComponentSection>
  );
}
