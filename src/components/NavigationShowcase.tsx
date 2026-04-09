import { useState } from 'react';
import Box from '@mui/material/Box';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import Breadcrumbs from '@mui/material/Breadcrumbs';
import Link from '@mui/material/Link';
import Pagination from '@mui/material/Pagination';
import Typography from '@mui/material/Typography';
import Stack from '@mui/material/Stack';
import Stepper from '@mui/material/Stepper';
import Step from '@mui/material/Step';
import StepLabel from '@mui/material/StepLabel';
import BottomNavigation from '@mui/material/BottomNavigation';
import BottomNavigationAction from '@mui/material/BottomNavigationAction';
import Paper from '@mui/material/Paper';
import HomeIcon from '@mui/icons-material/Home';
import FavoriteIcon from '@mui/icons-material/Favorite';
import PersonIcon from '@mui/icons-material/Person';
import NavigateNextIcon from '@mui/icons-material/NavigateNext';
import ComponentSection from './ComponentSection';

export default function NavigationShowcase() {
  const [tabValue, setTabValue] = useState(0);
  const [bottomNav, setBottomNav] = useState(0);

  return (
    <ComponentSection
      title="Navigation"
      description="Tabs, Breadcrumbs, Pagination, Stepper, and Bottom Navigation."
    >
      {/* Tabs */}
      <Typography variant="subtitle2" sx={{ mb: 2 }}>
        Tabs
      </Typography>
      <Box sx={{ mb: 4 }}>
        <Box sx={{ borderBottom: 1, borderColor: 'divider', mb: 2 }}>
          <Tabs value={tabValue} onChange={(_, v) => setTabValue(v)}>
            <Tab label="Overview" />
            <Tab label="Analytics" />
            <Tab label="Reports" />
            <Tab label="Disabled" disabled />
          </Tabs>
        </Box>
        <Typography variant="body2" color="text.secondary" sx={{ p: 2 }}>
          Content for tab {tabValue + 1}
        </Typography>
      </Box>

      {/* Breadcrumbs */}
      <Typography variant="subtitle2" sx={{ mb: 2 }}>
        Breadcrumbs
      </Typography>
      <Stack spacing={2} sx={{ mb: 4 }}>
        <Breadcrumbs>
          <Link underline="hover" color="inherit" href="#">Home</Link>
          <Link underline="hover" color="inherit" href="#">Projects</Link>
          <Typography color="text.primary">Settings</Typography>
        </Breadcrumbs>
        <Breadcrumbs separator={<NavigateNextIcon fontSize="small" />}>
          <Link underline="hover" color="inherit" href="#">Dashboard</Link>
          <Link underline="hover" color="inherit" href="#">Users</Link>
          <Typography color="text.primary">Alice Johnson</Typography>
        </Breadcrumbs>
      </Stack>

      {/* Pagination */}
      <Typography variant="subtitle2" sx={{ mb: 2 }}>
        Pagination
      </Typography>
      <Stack spacing={2} sx={{ mb: 4 }}>
        <Pagination count={10} color="primary" />
        <Pagination count={10} variant="outlined" color="primary" />
        <Pagination count={10} shape="rounded" color="primary" />
        <Pagination count={10} size="small" color="primary" showFirstButton showLastButton />
      </Stack>

      {/* Stepper */}
      <Typography variant="subtitle2" sx={{ mb: 2 }}>
        Stepper
      </Typography>
      <Box sx={{ mb: 4 }}>
        <Stepper activeStep={1}>
          <Step completed>
            <StepLabel>Account details</StepLabel>
          </Step>
          <Step>
            <StepLabel>Preferences</StepLabel>
          </Step>
          <Step>
            <StepLabel>Review & Submit</StepLabel>
          </Step>
        </Stepper>
      </Box>

      {/* Bottom Navigation */}
      <Typography variant="subtitle2" sx={{ mb: 2 }}>
        Bottom Navigation
      </Typography>
      <Paper elevation={4} sx={{ maxWidth: 400, overflow: 'hidden' }}>
        <BottomNavigation
          value={bottomNav}
          onChange={(_, val) => setBottomNav(val)}
          showLabels
        >
          <BottomNavigationAction label="Home" icon={<HomeIcon />} />
          <BottomNavigationAction label="Favorites" icon={<FavoriteIcon />} />
          <BottomNavigationAction label="Profile" icon={<PersonIcon />} />
        </BottomNavigation>
      </Paper>
    </ComponentSection>
  );
}
