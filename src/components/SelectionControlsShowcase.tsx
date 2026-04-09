import { useState } from 'react';
import Box from '@mui/material/Box';
import Checkbox from '@mui/material/Checkbox';
import FormControlLabel from '@mui/material/FormControlLabel';
import FormGroup from '@mui/material/FormGroup';
import Radio from '@mui/material/Radio';
import RadioGroup from '@mui/material/RadioGroup';
import FormControl from '@mui/material/FormControl';
import FormLabel from '@mui/material/FormLabel';
import Switch from '@mui/material/Switch';
import Slider from '@mui/material/Slider';
import Rating from '@mui/material/Rating';
import Typography from '@mui/material/Typography';
import Stack from '@mui/material/Stack';
import ComponentSection from './ComponentSection';

export default function SelectionControlsShowcase() {
  const [rating, setRating] = useState<number | null>(3);

  return (
    <ComponentSection
      title="Selection Controls"
      description="Checkboxes, Radios, Switches, Sliders, and Ratings. All use semantic palette colors."
    >
      {/* Checkboxes */}
      <Typography variant="subtitle2" sx={{ mb: 2 }}>
        Checkboxes
      </Typography>
      <Stack direction="row" spacing={4} flexWrap="wrap" useFlexGap sx={{ mb: 4 }}>
        <FormGroup>
          <FormControlLabel control={<Checkbox defaultChecked />} label="Checked" />
          <FormControlLabel control={<Checkbox />} label="Unchecked" />
          <FormControlLabel control={<Checkbox disabled />} label="Disabled" />
          <FormControlLabel control={<Checkbox indeterminate />} label="Indeterminate" />
        </FormGroup>
        <FormGroup>
          <FormControlLabel control={<Checkbox defaultChecked color="primary" />} label="Primary" />
          <FormControlLabel control={<Checkbox defaultChecked color="error" />} label="Error" />
          <FormControlLabel control={<Checkbox defaultChecked color="warning" />} label="Warning" />
          <FormControlLabel control={<Checkbox defaultChecked color="success" />} label="Success" />
          <FormControlLabel control={<Checkbox defaultChecked color="info" />} label="Info" />
        </FormGroup>
      </Stack>

      {/* Radio Buttons */}
      <Typography variant="subtitle2" sx={{ mb: 2 }}>
        Radio Buttons
      </Typography>
      <Stack direction="row" spacing={4} flexWrap="wrap" useFlexGap sx={{ mb: 4 }}>
        <FormControl>
          <FormLabel>Plan</FormLabel>
          <RadioGroup defaultValue="pro" row>
            <FormControlLabel value="free" control={<Radio />} label="Free" />
            <FormControlLabel value="pro" control={<Radio />} label="Pro" />
            <FormControlLabel value="enterprise" control={<Radio />} label="Enterprise" />
            <FormControlLabel value="disabled" control={<Radio disabled />} label="Disabled" />
          </RadioGroup>
        </FormControl>
      </Stack>

      {/* Switches */}
      <Typography variant="subtitle2" sx={{ mb: 2 }}>
        Switches
      </Typography>
      <Stack direction="row" spacing={4} flexWrap="wrap" useFlexGap sx={{ mb: 4 }}>
        <FormGroup row>
          <FormControlLabel control={<Switch defaultChecked />} label="On" />
          <FormControlLabel control={<Switch />} label="Off" />
          <FormControlLabel control={<Switch disabled />} label="Disabled" />
          <FormControlLabel control={<Switch defaultChecked color="warning" />} label="Warning" />
          <FormControlLabel control={<Switch defaultChecked color="error" />} label="Error" />
          <FormControlLabel control={<Switch defaultChecked color="success" />} label="Success" />
        </FormGroup>
      </Stack>

      {/* Sliders */}
      <Typography variant="subtitle2" sx={{ mb: 2 }}>
        Sliders
      </Typography>
      <Box sx={{ maxWidth: 400, mb: 4, px: 1 }}>
        <Typography variant="caption" color="text.secondary">Continuous</Typography>
        <Slider defaultValue={40} />
        <Typography variant="caption" color="text.secondary">Discrete (step 10)</Typography>
        <Slider defaultValue={30} step={10} marks min={0} max={100} valueLabelDisplay="auto" />
        <Typography variant="caption" color="text.secondary">Range</Typography>
        <Slider defaultValue={[20, 60]} valueLabelDisplay="auto" />
        <Typography variant="caption" color="text.secondary">Disabled</Typography>
        <Slider defaultValue={50} disabled />
      </Box>

      {/* Rating */}
      <Typography variant="subtitle2" sx={{ mb: 2 }}>
        Rating
      </Typography>
      <Stack spacing={2}>
        <Box sx={{ display: 'flex', alignItems: 'center', gap: 2 }}>
          <Rating
            value={rating}
            onChange={(_, val) => setRating(val)}
          />
          <Typography variant="body2" color="text.secondary">
            {rating !== null ? `${rating} star${rating !== 1 ? 's' : ''}` : 'No rating'}
          </Typography>
        </Box>
        <Box sx={{ display: 'flex', alignItems: 'center', gap: 2 }}>
          <Rating value={4} readOnly size="large" />
          <Typography variant="caption" color="text.secondary">Read Only (Large)</Typography>
        </Box>
        <Box sx={{ display: 'flex', alignItems: 'center', gap: 2 }}>
          <Rating value={2} disabled size="small" />
          <Typography variant="caption" color="text.secondary">Disabled (Small)</Typography>
        </Box>
      </Stack>
    </ComponentSection>
  );
}
