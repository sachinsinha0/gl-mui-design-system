import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Card from '@mui/material/Card';
import Grid from '@mui/material/Grid';
import Chip from '@mui/material/Chip';
import Button from '@mui/material/Button';
import Divider from '@mui/material/Divider';
import Alert from '@mui/material/Alert';
import AlertTitle from '@mui/material/AlertTitle';
import DesktopMacOutlinedIcon from '@mui/icons-material/DesktopMacOutlined';
import AppleIcon from '@mui/icons-material/Apple';
import GitHubIcon from '@mui/icons-material/GitHub';
import ScreenshotMonitorOutlinedIcon from '@mui/icons-material/ScreenshotMonitorOutlined';
import BrushOutlinedIcon from '@mui/icons-material/BrushOutlined';
import SpeedOutlinedIcon from '@mui/icons-material/SpeedOutlined';
import CloudOffOutlinedIcon from '@mui/icons-material/CloudOffOutlined';

const DESIGN_MIRROR_FEATURES = [
  {
    icon: <ScreenshotMonitorOutlinedIcon sx={{ fontSize: 22, color: 'primary.main' }} />,
    title: 'Full-page capture',
    description: 'Captures entire web pages including below-the-fold content with pixel-perfect accuracy.',
  },
  {
    icon: <BrushOutlinedIcon sx={{ fontSize: 22, color: 'success.main' }} />,
    title: 'Push to Figma',
    description: 'Send captures directly into your Figma file — no manual screenshots or imports needed.',
  },
  {
    icon: <SpeedOutlinedIcon sx={{ fontSize: 22, color: 'warning.main' }} />,
    title: 'Fast & lightweight',
    description: 'Native macOS app built for performance. No browser extensions or heavy dependencies.',
  },
  {
    icon: <CloudOffOutlinedIcon sx={{ fontSize: 22, color: 'info.main' }} />,
    title: 'No AI required',
    description: 'Works entirely offline — no Claude, no API keys, no cloud processing needed.',
  },
];

const DOWNLOAD_URL = 'https://github.com/sachinsinha0/design-mirror/releases/download/v1.0/Design.Mirror.dmg';
const GITHUB_URL = 'https://github.com/sachinsinha0/design-mirror';

export default function ToolsPage() {
  return (
    <Box sx={{ animation: 'fadeIn 0.5s ease-out' }}>
      {/* ── Header ────────────────────────────────────────────────────── */}
      <Box
        sx={(theme) => ({
          borderRadius: 3,
          px: { xs: 3, md: 4 },
          py: { xs: 4, md: 5 },
          mb: 5,
          background:
            theme.palette.mode === 'light'
              ? 'linear-gradient(135deg, #E8F0FC 0%, #F3E5F5 50%, #FFF8E1 100%)'
              : 'linear-gradient(135deg, #121830 0%, #1a1225 50%, #1a1a0d 100%)',
          border: '1px solid',
          borderColor: theme.palette.mode === 'light' ? 'rgba(0,0,0,0.04)' : 'rgba(255,255,255,0.06)',
        })}
      >
        <Typography variant="overline" color="text.secondary" sx={{ mb: 1, display: 'block' }}>
          Resources
        </Typography>
        <Typography
          variant="h1"
          sx={{ fontSize: { xs: '1.75rem', md: '2.5rem' }, fontWeight: 700, letterSpacing: '-0.5px', mb: 1.5 }}
        >
          Tools
        </Typography>
        <Typography variant="body1" color="text.secondary" sx={{ maxWidth: 600, lineHeight: 1.7 }}>
          Design and development tools built by the Great Learning design team to streamline
          your workflow and keep everything in sync.
        </Typography>
      </Box>

      {/* ── Design Mirror ─────────────────────────────────────────────── */}
      <Card
        elevation={0}
        sx={{
          borderRadius: 3,
          border: '1px solid',
          borderColor: 'divider',
          overflow: 'hidden',
          mb: 5,
        }}
      >
        {/* Tool header */}
        <Box
          sx={(theme) => ({
            px: { xs: 3, md: 4 },
            py: { xs: 3, md: 4 },
            background:
              theme.palette.mode === 'light'
                ? 'linear-gradient(135deg, rgba(25,106,229,0.04) 0%, rgba(25,106,229,0.01) 100%)'
                : 'linear-gradient(135deg, rgba(25,106,229,0.08) 0%, rgba(25,106,229,0.02) 100%)',
            borderBottom: '1px solid',
            borderColor: 'divider',
          })}
        >
          <Box sx={{ display: 'flex', alignItems: 'flex-start', justifyContent: 'space-between', flexWrap: 'wrap', gap: 2 }}>
            <Box sx={{ display: 'flex', alignItems: 'center', gap: 2 }}>
              <Box
                sx={{
                  width: 56,
                  height: 56,
                  borderRadius: 3,
                  bgcolor: 'primary.main',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  boxShadow: 2,
                }}
              >
                <DesktopMacOutlinedIcon sx={{ color: 'common.white', fontSize: 28 }} />
              </Box>
              <Box>
                <Box sx={{ display: 'flex', alignItems: 'center', gap: 1.5, mb: 0.5 }}>
                  <Typography variant="h3" sx={{ fontWeight: 700 }}>
                    Design Mirror
                  </Typography>
                  <Chip
                    label="v1.0"
                    size="small"
                    color="primary"
                    variant="outlined"
                    sx={{ height: 22, fontSize: '0.6875rem' }}
                  />
                </Box>
                <Typography variant="body2" color="text.secondary">
                  Capture web pages and push them to Figma — native macOS app
                </Typography>
              </Box>
            </Box>

            <Box sx={{ display: 'flex', gap: 1.5, flexWrap: 'wrap' }}>
              <Button
                variant="contained"
                size="medium"
                startIcon={<AppleIcon />}
                href={DOWNLOAD_URL}
                sx={{ textTransform: 'none', borderRadius: 2, fontWeight: 600 }}
              >
                Download for Mac
              </Button>
              <Button
                variant="outlined"
                size="medium"
                startIcon={<GitHubIcon />}
                href={GITHUB_URL}
                target="_blank"
                rel="noopener noreferrer"
                sx={{ textTransform: 'none', borderRadius: 2 }}
              >
                View Source
              </Button>
            </Box>
          </Box>
        </Box>

        {/* Tool content */}
        <Box sx={{ px: { xs: 3, md: 4 }, py: { xs: 3, md: 4 } }}>
          {/* Features grid */}
          <Typography variant="overline" color="text.secondary" sx={{ mb: 2.5, display: 'block' }}>
            Features
          </Typography>
          <Grid container spacing={2} sx={{ mb: 4 }}>
            {DESIGN_MIRROR_FEATURES.map((feature) => (
              <Grid size={{ xs: 12, sm: 6 }} key={feature.title}>
                <Box
                  sx={{
                    display: 'flex',
                    gap: 1.5,
                    p: 2.5,
                    borderRadius: 2,
                    border: '1px solid',
                    borderColor: 'divider',
                    height: '100%',
                    transition: 'border-color 0.15s ease',
                    '&:hover': { borderColor: 'primary.main' },
                  }}
                >
                  <Box sx={{ mt: 0.25, flexShrink: 0 }}>{feature.icon}</Box>
                  <Box>
                    <Typography variant="subtitle2" sx={{ mb: 0.25 }}>{feature.title}</Typography>
                    <Typography variant="caption" color="text.secondary" sx={{ lineHeight: 1.6 }}>
                      {feature.description}
                    </Typography>
                  </Box>
                </Box>
              </Grid>
            ))}
          </Grid>

          <Divider sx={{ mb: 4 }} />

          {/* How to install */}
          <Typography variant="overline" color="text.secondary" sx={{ mb: 2.5, display: 'block' }}>
            Installation
          </Typography>
          <Box sx={{ mb: 4 }}>
            {[
              { step: '1', title: 'Download the DMG', desc: 'Click "Download for Mac" above to get the latest .dmg file.' },
              { step: '2', title: 'Install the app', desc: 'Open the DMG and drag Design Mirror to your Applications folder.' },
              { step: '3', title: 'Open & allow permissions', desc: 'On first launch, macOS may ask you to allow the app. Go to System Settings > Privacy & Security to approve it.' },
              { step: '4', title: 'Connect to Figma', desc: 'Enter your Figma file URL inside the app and start capturing pages.' },
            ].map((item) => (
              <Box
                key={item.step}
                sx={{
                  display: 'flex',
                  gap: 2,
                  mb: 2.5,
                  '&:last-child': { mb: 0 },
                }}
              >
                <Box
                  sx={{
                    width: 28,
                    height: 28,
                    borderRadius: '50%',
                    bgcolor: 'primary.main',
                    color: 'common.white',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    fontSize: '0.75rem',
                    fontWeight: 700,
                    flexShrink: 0,
                    mt: 0.25,
                  }}
                >
                  {item.step}
                </Box>
                <Box>
                  <Typography variant="subtitle2">{item.title}</Typography>
                  <Typography variant="body2" color="text.secondary" sx={{ lineHeight: 1.7 }}>
                    {item.desc}
                  </Typography>
                </Box>
              </Box>
            ))}
          </Box>

          {/* System requirements */}
          <Alert severity="info" variant="outlined" sx={{ borderRadius: 2 }}>
            <AlertTitle>System requirements</AlertTitle>
            <Typography variant="body2" color="text.secondary">
              macOS 13 (Ventura) or later. Apple Silicon and Intel Macs supported.
            </Typography>
          </Alert>
        </Box>
      </Card>

      {/* ── More tools coming soon ─────────────────────────────────────── */}
      <Box
        sx={{
          textAlign: 'center',
          py: 5,
          px: 3,
          borderRadius: 3,
          border: '1px dashed',
          borderColor: 'divider',
        }}
      >
        <Typography variant="h5" sx={{ fontWeight: 600, mb: 1 }}>
          More tools coming soon
        </Typography>
        <Typography variant="body2" color="text.secondary" sx={{ maxWidth: 400, mx: 'auto' }}>
          We're building more tools to help the Great Learning design and engineering teams
          work faster. Stay tuned.
        </Typography>
      </Box>
    </Box>
  );
}
