import Box from '@mui/material/Box';
import Avatar from '@mui/material/Avatar';
import AvatarGroup from '@mui/material/AvatarGroup';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemAvatar from '@mui/material/ListItemAvatar';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import ListSubheader from '@mui/material/ListSubheader';
import Divider from '@mui/material/Divider';
import Typography from '@mui/material/Typography';
import Stack from '@mui/material/Stack';
import Paper from '@mui/material/Paper';
import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import InboxIcon from '@mui/icons-material/Inbox';
import DraftsIcon from '@mui/icons-material/Drafts';
import SendIcon from '@mui/icons-material/Send';
import StarIcon from '@mui/icons-material/Star';
import FolderIcon from '@mui/icons-material/Folder';
import ImageIcon from '@mui/icons-material/Image';
import WorkIcon from '@mui/icons-material/Work';
import BeachAccessIcon from '@mui/icons-material/BeachAccess';
import ComponentSection from './ComponentSection';

export default function DataDisplayShowcase() {
  return (
    <ComponentSection
      title="Data Display"
      description="Avatars, Lists, Dividers, and Accordions. Avatar initials use avatarInitials (20px/400). List subheader uses listSubheader (14px/500)."
    >
      {/* Avatars */}
      <Typography variant="subtitle2" sx={{ mb: 2 }}>
        Avatars
      </Typography>
      <Stack direction="row" spacing={2} alignItems="center" sx={{ mb: 2 }}>
        <Avatar sx={{ bgcolor: 'primary.main' }}>A</Avatar>
        <Avatar sx={{ bgcolor: 'error.main' }}>B</Avatar>
        <Avatar sx={{ bgcolor: 'warning.main' }}>C</Avatar>
        <Avatar sx={{ bgcolor: 'success.main' }}>D</Avatar>
        <Avatar sx={{ bgcolor: 'info.main' }}>E</Avatar>
      </Stack>
      <Stack direction="row" spacing={2} alignItems="center" sx={{ mb: 2 }}>
        <Avatar sx={{ width: 24, height: 24, fontSize: 12, bgcolor: 'primary.main' }}>S</Avatar>
        <Avatar sx={{ bgcolor: 'primary.main' }}>M</Avatar>
        <Avatar sx={{ width: 56, height: 56, bgcolor: 'primary.main' }}>L</Avatar>
      </Stack>
      <Stack direction="row" spacing={2} alignItems="center" sx={{ mb: 4 }}>
        <AvatarGroup max={4}>
          <Avatar sx={{ bgcolor: 'primary.main' }}>A</Avatar>
          <Avatar sx={{ bgcolor: 'error.main' }}>B</Avatar>
          <Avatar sx={{ bgcolor: 'warning.main' }}>C</Avatar>
          <Avatar sx={{ bgcolor: 'success.main' }}>D</Avatar>
          <Avatar sx={{ bgcolor: 'info.main' }}>E</Avatar>
        </AvatarGroup>
      </Stack>

      {/* Lists */}
      <Typography variant="subtitle2" sx={{ mb: 2 }}>
        Lists
      </Typography>
      <Box sx={{ display: 'flex', gap: 3, flexWrap: 'wrap', mb: 4 }}>
        {/* Simple list */}
        <Paper variant="outlined" sx={{ width: 280 }}>
          <List
            subheader={<ListSubheader>Navigation</ListSubheader>}
          >
            <ListItemButton selected>
              <ListItemIcon><InboxIcon /></ListItemIcon>
              <ListItemText primary="Inbox" />
            </ListItemButton>
            <ListItemButton>
              <ListItemIcon><DraftsIcon /></ListItemIcon>
              <ListItemText primary="Drafts" />
            </ListItemButton>
            <ListItemButton>
              <ListItemIcon><SendIcon /></ListItemIcon>
              <ListItemText primary="Sent" />
            </ListItemButton>
            <ListItemButton>
              <ListItemIcon><StarIcon /></ListItemIcon>
              <ListItemText primary="Starred" />
            </ListItemButton>
          </List>
        </Paper>

        {/* List with avatars */}
        <Paper variant="outlined" sx={{ width: 280 }}>
          <List subheader={<ListSubheader>Files</ListSubheader>}>
            <ListItem>
              <ListItemAvatar>
                <Avatar sx={{ bgcolor: 'primary.light' }}>
                  <ImageIcon color="primary" />
                </Avatar>
              </ListItemAvatar>
              <ListItemText primary="Photos" secondary="Jan 9, 2026" />
            </ListItem>
            <Divider variant="inset" component="li" />
            <ListItem>
              <ListItemAvatar>
                <Avatar sx={{ bgcolor: 'warning.light' }}>
                  <WorkIcon color="warning" />
                </Avatar>
              </ListItemAvatar>
              <ListItemText primary="Work" secondary="Feb 14, 2026" />
            </ListItem>
            <Divider variant="inset" component="li" />
            <ListItem>
              <ListItemAvatar>
                <Avatar sx={{ bgcolor: 'success.light' }}>
                  <BeachAccessIcon color="success" />
                </Avatar>
              </ListItemAvatar>
              <ListItemText primary="Vacation" secondary="Mar 20, 2026" />
            </ListItem>
          </List>
        </Paper>

        {/* Dense list */}
        <Paper variant="outlined" sx={{ width: 280 }}>
          <List dense subheader={<ListSubheader>Dense List</ListSubheader>}>
            {['Documents', 'Images', 'Videos', 'Audio', 'Archives'].map((item) => (
              <ListItemButton key={item}>
                <ListItemIcon><FolderIcon /></ListItemIcon>
                <ListItemText primary={item} />
              </ListItemButton>
            ))}
          </List>
        </Paper>
      </Box>

      {/* Dividers */}
      <Typography variant="subtitle2" sx={{ mb: 2 }}>
        Dividers
      </Typography>
      <Paper variant="outlined" sx={{ maxWidth: 400, mb: 4, p: 2 }}>
        <Typography variant="body2">Item above full divider</Typography>
        <Divider sx={{ my: 2 }} />
        <Typography variant="body2">Between dividers</Typography>
        <Divider sx={{ my: 2 }}>
          <Typography variant="caption" color="text.secondary">OR</Typography>
        </Divider>
        <Typography variant="body2">Below divider with text</Typography>
      </Paper>

      {/* Accordions */}
      <Typography variant="subtitle2" sx={{ mb: 2 }}>
        Accordions
      </Typography>
      <Box sx={{ maxWidth: 600 }}>
        <Accordion defaultExpanded>
          <AccordionSummary expandIcon={<ExpandMoreIcon />}>
            <Typography variant="subtitle1">What is the Olympus Design System?</Typography>
          </AccordionSummary>
          <AccordionDetails>
            <Typography variant="body2" color="text.secondary">
              Olympus MUI is a token-based design system built on Material UI. It enforces strict
              color, typography, spacing, and elevation tokens mapped 1:1 to Figma variables.
            </Typography>
          </AccordionDetails>
        </Accordion>
        <Accordion>
          <AccordionSummary expandIcon={<ExpandMoreIcon />}>
            <Typography variant="subtitle1">How do I customize the theme?</Typography>
          </AccordionSummary>
          <AccordionDetails>
            <Typography variant="body2" color="text.secondary">
              Edit the olympusTheme.ts file in src/theme/. All tokens are defined there as the
              single source of truth. Changes propagate to every component automatically.
            </Typography>
          </AccordionDetails>
        </Accordion>
        <Accordion>
          <AccordionSummary expandIcon={<ExpandMoreIcon />}>
            <Typography variant="subtitle1">Does it support dark mode?</Typography>
          </AccordionSummary>
          <AccordionDetails>
            <Typography variant="body2" color="text.secondary">
              Yes. Use the useThemeMode() hook to toggle between light and dark. All semantic tokens
              switch automatically — no manual overrides needed.
            </Typography>
          </AccordionDetails>
        </Accordion>
      </Box>
    </ComponentSection>
  );
}
