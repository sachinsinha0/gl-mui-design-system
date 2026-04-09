import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import Typography from '@mui/material/Typography';
import InputAdornment from '@mui/material/InputAdornment';
import SearchIcon from '@mui/icons-material/Search';
import VisibilityIcon from '@mui/icons-material/Visibility';
import IconButton from '@mui/material/IconButton';
import MenuItem from '@mui/material/MenuItem';
import ComponentSection from './ComponentSection';

export default function TextFieldsShowcase() {
  return (
    <ComponentSection
      title="Text Fields"
      description="Outlined, Filled, and Standard variants. Label uses inputLabel (12px/400), input uses inputText (16px/400), helper uses helperText (12px/400)."
    >
      {/* Outlined */}
      <Typography variant="subtitle2" sx={{ mb: 2 }}>
        Outlined
      </Typography>
      <Box sx={{ display: 'flex', gap: 3, flexWrap: 'wrap', mb: 4 }}>
        <TextField label="Default" variant="outlined" />
        <TextField label="With Value" variant="outlined" defaultValue="Hello Olympus" />
        <TextField label="Error" variant="outlined" error helperText="Something went wrong" />
        <TextField label="Disabled" variant="outlined" disabled defaultValue="Disabled" />
        <TextField label="Required" variant="outlined" required />
      </Box>

      {/* Filled */}
      <Typography variant="subtitle2" sx={{ mb: 2 }}>
        Filled
      </Typography>
      <Box sx={{ display: 'flex', gap: 3, flexWrap: 'wrap', mb: 4 }}>
        <TextField label="Default" variant="filled" />
        <TextField label="With Value" variant="filled" defaultValue="Hello Olympus" />
        <TextField label="Error" variant="filled" error helperText="Required field" />
        <TextField label="Disabled" variant="filled" disabled defaultValue="Disabled" />
      </Box>

      {/* Standard */}
      <Typography variant="subtitle2" sx={{ mb: 2 }}>
        Standard
      </Typography>
      <Box sx={{ display: 'flex', gap: 3, flexWrap: 'wrap', mb: 4 }}>
        <TextField label="Default" variant="standard" />
        <TextField label="With Value" variant="standard" defaultValue="Hello Olympus" />
        <TextField label="Error" variant="standard" error helperText="Invalid input" />
        <TextField label="Disabled" variant="standard" disabled />
      </Box>

      {/* With adornments */}
      <Typography variant="subtitle2" sx={{ mb: 2 }}>
        With Adornments
      </Typography>
      <Box sx={{ display: 'flex', gap: 3, flexWrap: 'wrap', mb: 4 }}>
        <TextField
          label="Search"
          variant="outlined"
          slotProps={{
            input: {
              startAdornment: (
                <InputAdornment position="start">
                  <SearchIcon />
                </InputAdornment>
              ),
            },
          }}
        />
        <TextField
          label="Password"
          variant="outlined"
          type="password"
          defaultValue="password123"
          slotProps={{
            input: {
              endAdornment: (
                <InputAdornment position="end">
                  <IconButton edge="end">
                    <VisibilityIcon />
                  </IconButton>
                </InputAdornment>
              ),
            },
          }}
        />
        <TextField
          label="Amount"
          variant="outlined"
          slotProps={{
            input: {
              startAdornment: <InputAdornment position="start">$</InputAdornment>,
            },
          }}
        />
      </Box>

      {/* Sizes & Multiline */}
      <Typography variant="subtitle2" sx={{ mb: 2 }}>
        Sizes & Multiline
      </Typography>
      <Box sx={{ display: 'flex', gap: 3, flexWrap: 'wrap', mb: 4, alignItems: 'flex-start' }}>
        <TextField label="Small" variant="outlined" size="small" />
        <TextField label="Medium" variant="outlined" size="medium" />
        <TextField
          label="Multiline"
          variant="outlined"
          multiline
          rows={3}
          defaultValue="This is a multiline text field for longer content entry."
        />
      </Box>

      {/* Select */}
      <Typography variant="subtitle2" sx={{ mb: 2 }}>
        Select
      </Typography>
      <Box sx={{ display: 'flex', gap: 3, flexWrap: 'wrap' }}>
        <TextField label="Role" variant="outlined" select defaultValue="editor" sx={{ minWidth: 200 }}>
          <MenuItem value="viewer">Viewer</MenuItem>
          <MenuItem value="editor">Editor</MenuItem>
          <MenuItem value="admin">Admin</MenuItem>
        </TextField>
        <TextField label="Status" variant="filled" select defaultValue="active" sx={{ minWidth: 200 }}>
          <MenuItem value="active">Active</MenuItem>
          <MenuItem value="inactive">Inactive</MenuItem>
          <MenuItem value="pending">Pending</MenuItem>
        </TextField>
      </Box>
    </ComponentSection>
  );
}
