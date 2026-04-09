import { useState } from 'react';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Dialog from '@mui/material/Dialog';
import DialogTitle from '@mui/material/DialogTitle';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogActions from '@mui/material/DialogActions';
import TextField from '@mui/material/TextField';
import Typography from '@mui/material/Typography';
import Stack from '@mui/material/Stack';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import Tooltip from '@mui/material/Tooltip';
import IconButton from '@mui/material/IconButton';
import InfoIcon from '@mui/icons-material/Info';
import HelpIcon from '@mui/icons-material/Help';
import MoreVertIcon from '@mui/icons-material/MoreVert';
import Popover from '@mui/material/Popover';
import ComponentSection from './ComponentSection';

export default function DialogsShowcase() {
  const [alertOpen, setAlertOpen] = useState(false);
  const [formOpen, setFormOpen] = useState(false);
  const [menuAnchor, setMenuAnchor] = useState<null | HTMLElement>(null);
  const [popoverAnchor, setPopoverAnchor] = useState<null | HTMLElement>(null);

  return (
    <ComponentSection
      title="Dialogs, Menus & Overlays"
      description="Dialogs use elevation 24, backdrop uses Other/Backdrop Overlay. Menus use elevation 8. Tooltips use tooltip typography (10px/500)."
    >
      {/* Dialogs */}
      <Typography variant="subtitle2" sx={{ mb: 2 }}>
        Dialogs
      </Typography>
      <Stack direction="row" spacing={2} sx={{ mb: 4 }}>
        <Button variant="outlined" onClick={() => setAlertOpen(true)}>
          Alert Dialog
        </Button>
        <Button variant="outlined" onClick={() => setFormOpen(true)}>
          Form Dialog
        </Button>
      </Stack>

      {/* Alert Dialog */}
      <Dialog open={alertOpen} onClose={() => setAlertOpen(false)}>
        <DialogTitle>Discard changes?</DialogTitle>
        <DialogContent>
          <DialogContentText>
            You have unsaved changes. Are you sure you want to discard them? This action cannot be undone.
          </DialogContentText>
        </DialogContent>
        <DialogActions>
          <Button onClick={() => setAlertOpen(false)}>Cancel</Button>
          <Button onClick={() => setAlertOpen(false)} color="error" variant="contained">
            Discard
          </Button>
        </DialogActions>
      </Dialog>

      {/* Form Dialog */}
      <Dialog open={formOpen} onClose={() => setFormOpen(false)} maxWidth="sm" fullWidth>
        <DialogTitle>Create new project</DialogTitle>
        <DialogContent>
          <DialogContentText sx={{ mb: 3 }}>
            Enter the details for your new project below.
          </DialogContentText>
          <Stack spacing={3}>
            <TextField autoFocus label="Project Name" fullWidth variant="outlined" />
            <TextField label="Description" fullWidth variant="outlined" multiline rows={3} />
          </Stack>
        </DialogContent>
        <DialogActions>
          <Button onClick={() => setFormOpen(false)}>Cancel</Button>
          <Button onClick={() => setFormOpen(false)} variant="contained">
            Create
          </Button>
        </DialogActions>
      </Dialog>

      {/* Menus */}
      <Typography variant="subtitle2" sx={{ mb: 2 }}>
        Menus
      </Typography>
      <Stack direction="row" spacing={2} sx={{ mb: 4 }}>
        <Button
          variant="outlined"
          onClick={(e) => setMenuAnchor(e.currentTarget)}
        >
          Open Menu
        </Button>
        <IconButton onClick={(e) => setMenuAnchor(e.currentTarget)}>
          <MoreVertIcon />
        </IconButton>
      </Stack>
      <Menu
        anchorEl={menuAnchor}
        open={Boolean(menuAnchor)}
        onClose={() => setMenuAnchor(null)}
      >
        <MenuItem onClick={() => setMenuAnchor(null)}>Profile</MenuItem>
        <MenuItem onClick={() => setMenuAnchor(null)}>My Account</MenuItem>
        <MenuItem onClick={() => setMenuAnchor(null)}>Logout</MenuItem>
      </Menu>

      {/* Tooltips */}
      <Typography variant="subtitle2" sx={{ mb: 2 }}>
        Tooltips
      </Typography>
      <Stack direction="row" spacing={2} sx={{ mb: 4 }}>
        <Tooltip title="Info tooltip" placement="top">
          <IconButton><InfoIcon /></IconButton>
        </Tooltip>
        <Tooltip title="Help tooltip" placement="right">
          <IconButton><HelpIcon /></IconButton>
        </Tooltip>
        <Tooltip title="This is a longer tooltip with more descriptive text" placement="bottom">
          <Button variant="text">Hover me</Button>
        </Tooltip>
        <Tooltip title="Arrow tooltip" arrow>
          <Button variant="outlined" size="small">Arrow</Button>
        </Tooltip>
      </Stack>

      {/* Popover */}
      <Typography variant="subtitle2" sx={{ mb: 2 }}>
        Popover
      </Typography>
      <Box>
        <Button variant="outlined" onClick={(e) => setPopoverAnchor(e.currentTarget)}>
          Open Popover
        </Button>
        <Popover
          open={Boolean(popoverAnchor)}
          anchorEl={popoverAnchor}
          onClose={() => setPopoverAnchor(null)}
          anchorOrigin={{ vertical: 'bottom', horizontal: 'left' }}
        >
          <Box sx={{ p: 3 }}>
            <Typography variant="subtitle2" sx={{ mb: 1 }}>Popover Content</Typography>
            <Typography variant="body2" color="text.secondary">
              Popovers use elevation 8 by default.
            </Typography>
          </Box>
        </Popover>
      </Box>
    </ComponentSection>
  );
}
