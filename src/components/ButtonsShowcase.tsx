import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import IconButton from '@mui/material/IconButton';
import ButtonGroup from '@mui/material/ButtonGroup';
import ToggleButton from '@mui/material/ToggleButton';
import ToggleButtonGroup from '@mui/material/ToggleButtonGroup';
import Typography from '@mui/material/Typography';
import Stack from '@mui/material/Stack';
import DeleteIcon from '@mui/icons-material/Delete';
import SendIcon from '@mui/icons-material/Send';
import AddIcon from '@mui/icons-material/Add';
import EditIcon from '@mui/icons-material/Edit';
import FormatBoldIcon from '@mui/icons-material/FormatBold';
import FormatItalicIcon from '@mui/icons-material/FormatItalic';
import FormatUnderlinedIcon from '@mui/icons-material/FormatUnderlined';
import Fab from '@mui/material/Fab';
import { useState } from 'react';
import ComponentSection from './ComponentSection';

const COLORS = ['primary', 'error', 'warning', 'success', 'info'] as const;

export default function ButtonsShowcase() {
  const [alignment, setAlignment] = useState('bold');

  return (
    <ComponentSection
      title="Buttons"
      description="Contained, Outlined, Text variants across all semantic colors. Plus Icon Buttons, FABs, Button Groups, and Toggle Buttons."
    >
      {/* Contained */}
      <Typography variant="subtitle2" sx={{ mb: 2 }}>
        Contained
      </Typography>
      <Stack direction="row" spacing={2} flexWrap="wrap" useFlexGap sx={{ mb: 4 }}>
        {COLORS.map((color) => (
          <Button key={color} variant="contained" color={color}>
            {color}
          </Button>
        ))}
        <Button variant="contained" disabled>
          Disabled
        </Button>
        <Button variant="contained" endIcon={<SendIcon />}>
          With Icon
        </Button>
      </Stack>

      {/* Outlined */}
      <Typography variant="subtitle2" sx={{ mb: 2 }}>
        Outlined
      </Typography>
      <Stack direction="row" spacing={2} flexWrap="wrap" useFlexGap sx={{ mb: 4 }}>
        {COLORS.map((color) => (
          <Button key={color} variant="outlined" color={color}>
            {color}
          </Button>
        ))}
        <Button variant="outlined" disabled>
          Disabled
        </Button>
      </Stack>

      {/* Text */}
      <Typography variant="subtitle2" sx={{ mb: 2 }}>
        Text
      </Typography>
      <Stack direction="row" spacing={2} flexWrap="wrap" useFlexGap sx={{ mb: 4 }}>
        {COLORS.map((color) => (
          <Button key={color} variant="text" color={color}>
            {color}
          </Button>
        ))}
        <Button variant="text" disabled>
          Disabled
        </Button>
      </Stack>

      {/* Sizes */}
      <Typography variant="subtitle2" sx={{ mb: 2 }}>
        Sizes
      </Typography>
      <Stack direction="row" spacing={2} alignItems="center" sx={{ mb: 4 }}>
        <Button variant="contained" size="small">Small</Button>
        <Button variant="contained" size="medium">Medium</Button>
        <Button variant="contained" size="large">Large</Button>
      </Stack>

      {/* Icon Buttons */}
      <Typography variant="subtitle2" sx={{ mb: 2 }}>
        Icon Buttons
      </Typography>
      <Stack direction="row" spacing={2} alignItems="center" sx={{ mb: 4 }}>
        <IconButton color="primary"><EditIcon /></IconButton>
        <IconButton color="error"><DeleteIcon /></IconButton>
        <IconButton color="primary" disabled><AddIcon /></IconButton>
        <IconButton
          color="primary"
          sx={{ border: 1, borderColor: 'other.outlinedBorder' }}
        >
          <AddIcon />
        </IconButton>
      </Stack>

      {/* FABs */}
      <Typography variant="subtitle2" sx={{ mb: 2 }}>
        Floating Action Buttons
      </Typography>
      <Stack direction="row" spacing={2} alignItems="center" sx={{ mb: 4 }}>
        <Fab color="primary" size="small"><AddIcon /></Fab>
        <Fab color="primary"><AddIcon /></Fab>
        <Fab color="primary" variant="extended">
          <AddIcon sx={{ mr: 1 }} />
          Create
        </Fab>
      </Stack>

      {/* Button Groups */}
      <Typography variant="subtitle2" sx={{ mb: 2 }}>
        Button Groups
      </Typography>
      <Stack direction="row" spacing={2} flexWrap="wrap" useFlexGap sx={{ mb: 4 }}>
        <ButtonGroup variant="contained">
          <Button>One</Button>
          <Button>Two</Button>
          <Button>Three</Button>
        </ButtonGroup>
        <ButtonGroup variant="outlined">
          <Button>One</Button>
          <Button>Two</Button>
          <Button>Three</Button>
        </ButtonGroup>
        <ButtonGroup variant="text">
          <Button>One</Button>
          <Button>Two</Button>
          <Button>Three</Button>
        </ButtonGroup>
      </Stack>

      {/* Toggle Buttons */}
      <Typography variant="subtitle2" sx={{ mb: 2 }}>
        Toggle Buttons
      </Typography>
      <Box>
        <ToggleButtonGroup
          value={alignment}
          exclusive
          onChange={(_, val) => val && setAlignment(val)}
          size="small"
        >
          <ToggleButton value="bold"><FormatBoldIcon /></ToggleButton>
          <ToggleButton value="italic"><FormatItalicIcon /></ToggleButton>
          <ToggleButton value="underlined"><FormatUnderlinedIcon /></ToggleButton>
        </ToggleButtonGroup>
      </Box>
    </ComponentSection>
  );
}
