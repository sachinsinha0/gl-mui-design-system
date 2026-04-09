import Alert from '@mui/material/Alert';
import AlertTitle from '@mui/material/AlertTitle';
import Stack from '@mui/material/Stack';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import ComponentSection from './ComponentSection';

const SEVERITIES = ['error', 'warning', 'info', 'success'] as const;

export default function AlertsShowcase() {
  return (
    <ComponentSection
      title="Alerts"
      description="Title uses alertTitle (16px/500), body uses body2 (14px/400). Light backgrounds use the Shades/190p tokens."
    >
      {/* Standard */}
      <Typography variant="subtitle2" sx={{ mb: 2 }}>
        Standard
      </Typography>
      <Stack spacing={2} sx={{ mb: 4 }}>
        {SEVERITIES.map((severity) => (
          <Alert key={severity} severity={severity}>
            This is a {severity} alert — check it out!
          </Alert>
        ))}
      </Stack>

      {/* With Title */}
      <Typography variant="subtitle2" sx={{ mb: 2 }}>
        With Title
      </Typography>
      <Stack spacing={2} sx={{ mb: 4 }}>
        {SEVERITIES.map((severity) => (
          <Alert key={severity} severity={severity}>
            <AlertTitle sx={{ textTransform: 'capitalize' }}>{severity}</AlertTitle>
            This is a {severity} alert with a descriptive title and body text.
          </Alert>
        ))}
      </Stack>

      {/* Outlined */}
      <Typography variant="subtitle2" sx={{ mb: 2 }}>
        Outlined
      </Typography>
      <Stack spacing={2} sx={{ mb: 4 }}>
        {SEVERITIES.map((severity) => (
          <Alert key={severity} severity={severity} variant="outlined">
            This is an outlined {severity} alert.
          </Alert>
        ))}
      </Stack>

      {/* Filled */}
      <Typography variant="subtitle2" sx={{ mb: 2 }}>
        Filled
      </Typography>
      <Stack spacing={2} sx={{ mb: 4 }}>
        {SEVERITIES.map((severity) => (
          <Alert key={severity} severity={severity} variant="filled">
            This is a filled {severity} alert.
          </Alert>
        ))}
      </Stack>

      {/* With Action */}
      <Typography variant="subtitle2" sx={{ mb: 2 }}>
        With Action
      </Typography>
      <Stack spacing={2}>
        <Alert
          severity="warning"
          action={
            <Button color="inherit" size="small">
              UNDO
            </Button>
          }
        >
          This alert has an action button.
        </Alert>
        <Alert severity="info" onClose={() => {}}>
          This alert is closable.
        </Alert>
      </Stack>
    </ComponentSection>
  );
}
