import { useState } from 'react';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Snackbar from '@mui/material/Snackbar';
import Alert from '@mui/material/Alert';
import CircularProgress from '@mui/material/CircularProgress';
import LinearProgress from '@mui/material/LinearProgress';
import Skeleton from '@mui/material/Skeleton';
import Typography from '@mui/material/Typography';
import Stack from '@mui/material/Stack';
import Backdrop from '@mui/material/Backdrop';
import Badge from '@mui/material/Badge';
import Avatar from '@mui/material/Avatar';
import MailIcon from '@mui/icons-material/Mail';
import NotificationsIcon from '@mui/icons-material/Notifications';
import ComponentSection from './ComponentSection';

export default function FeedbackShowcase() {
  const [snackOpen, setSnackOpen] = useState(false);
  const [alertSnackOpen, setAlertSnackOpen] = useState(false);
  const [backdropOpen, setBackdropOpen] = useState(false);

  return (
    <ComponentSection
      title="Feedback"
      description="Snackbars, Progress indicators, Skeletons, Backdrop, and Badges."
    >
      {/* Snackbars */}
      <Typography variant="subtitle2" sx={{ mb: 2 }}>
        Snackbars
      </Typography>
      <Stack direction="row" spacing={2} sx={{ mb: 4 }}>
        <Button variant="outlined" onClick={() => setSnackOpen(true)}>
          Simple Snackbar
        </Button>
        <Button variant="outlined" onClick={() => setAlertSnackOpen(true)}>
          Alert Snackbar
        </Button>
      </Stack>
      <Snackbar
        open={snackOpen}
        autoHideDuration={3000}
        onClose={() => setSnackOpen(false)}
        message="This is a snackbar message"
        action={
          <Button color="primary" size="small" onClick={() => setSnackOpen(false)}>
            UNDO
          </Button>
        }
      />
      <Snackbar open={alertSnackOpen} autoHideDuration={3000} onClose={() => setAlertSnackOpen(false)}>
        <Alert onClose={() => setAlertSnackOpen(false)} severity="success" variant="filled">
          Operation completed successfully!
        </Alert>
      </Snackbar>

      {/* Progress — Circular */}
      <Typography variant="subtitle2" sx={{ mb: 2 }}>
        Circular Progress
      </Typography>
      <Stack direction="row" spacing={3} sx={{ alignItems: 'center', mb: 4 }}>
        <CircularProgress size={24} />
        <CircularProgress />
        <CircularProgress size={56} />
        <CircularProgress color="error" />
        <CircularProgress color="warning" />
        <CircularProgress color="success" />
        <CircularProgress variant="determinate" value={65} />
      </Stack>

      {/* Progress — Linear */}
      <Typography variant="subtitle2" sx={{ mb: 2 }}>
        Linear Progress
      </Typography>
      <Stack spacing={2} sx={{ mb: 4, maxWidth: 500 }}>
        <LinearProgress />
        <LinearProgress variant="determinate" value={45} />
        <LinearProgress variant="buffer" value={60} valueBuffer={80} />
        <LinearProgress color="success" variant="determinate" value={100} />
        <LinearProgress color="error" variant="determinate" value={30} />
      </Stack>

      {/* Skeleton */}
      <Typography variant="subtitle2" sx={{ mb: 2 }}>
        Skeletons
      </Typography>
      <Box sx={{ maxWidth: 400, mb: 4 }}>
        <Stack direction="row" spacing={2} sx={{ alignItems: 'center', mb: 2 }}>
          <Skeleton variant="circular" width={40} height={40} />
          <Box sx={{ flex: 1 }}>
            <Skeleton variant="text" sx={{ fontSize: '16px' }} />
            <Skeleton variant="text" width="60%" sx={{ fontSize: '14px' }} />
          </Box>
        </Stack>
        <Skeleton variant="rectangular" height={120} sx={{ borderRadius: 1, mb: 2 }} />
        <Skeleton variant="rounded" height={40} sx={{ borderRadius: 1 }} />
      </Box>

      {/* Badges */}
      <Typography variant="subtitle2" sx={{ mb: 2 }}>
        Badges
      </Typography>
      <Stack direction="row" spacing={4} sx={{ alignItems: 'center', mb: 4 }}>
        <Badge badgeContent={4} color="primary">
          <MailIcon color="action" />
        </Badge>
        <Badge badgeContent={12} color="error">
          <NotificationsIcon color="action" />
        </Badge>
        <Badge badgeContent={99} color="warning" max={99}>
          <MailIcon color="action" />
        </Badge>
        <Badge variant="dot" color="success">
          <MailIcon color="action" />
        </Badge>
        <Badge
          overlap="circular"
          anchorOrigin={{ vertical: 'bottom', horizontal: 'right' }}
          badgeContent={
            <Box sx={{ width: 12, height: 12, borderRadius: '50%', bgcolor: 'success.main', border: 2, borderColor: 'background.paper' }} />
          }
        >
          <Avatar sx={{ bgcolor: 'primary.main' }}>U</Avatar>
        </Badge>
      </Stack>

      {/* Backdrop */}
      <Typography variant="subtitle2" sx={{ mb: 2 }}>
        Backdrop
      </Typography>
      <Box>
        <Button variant="outlined" onClick={() => setBackdropOpen(true)}>
          Show Backdrop
        </Button>
        <Backdrop
          sx={{ color: 'common.white', zIndex: (theme) => theme.zIndex.drawer + 1 }}
          open={backdropOpen}
          onClick={() => setBackdropOpen(false)}
        >
          <CircularProgress color="inherit" />
        </Backdrop>
      </Box>
    </ComponentSection>
  );
}
