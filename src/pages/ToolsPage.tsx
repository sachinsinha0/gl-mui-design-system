import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Card from '@mui/material/Card';
import Grid from '@mui/material/Grid';
import Chip from '@mui/material/Chip';
import Divider from '@mui/material/Divider';
import Alert from '@mui/material/Alert';
import AlertTitle from '@mui/material/AlertTitle';
import ScreenshotMonitorOutlinedIcon from '@mui/icons-material/ScreenshotMonitorOutlined';
import CodeOutlinedIcon from '@mui/icons-material/CodeOutlined';
import SendOutlinedIcon from '@mui/icons-material/SendOutlined';
import LockOutlinedIcon from '@mui/icons-material/LockOutlined';
import designMirrorLogo from '../../design-mirror-logo.svg';

const DESIGN_MIRROR_FEATURES = [
  {
    icon: <ScreenshotMonitorOutlinedIcon sx={{ fontSize: 22, color: 'primary.main' }} />,
    title: 'URL capture',
    description: 'Capture any web page — localhost dev servers or live sites — with pixel-perfect accuracy.',
  },
  {
    icon: <SendOutlinedIcon sx={{ fontSize: 22, color: 'success.main' }} />,
    title: 'Auto-paste to Figma',
    description: 'Send captures directly into a specific Figma file and node. No manual copy-paste needed.',
  },
  {
    icon: <CodeOutlinedIcon sx={{ fontSize: 22, color: 'warning.main' }} />,
    title: 'HTML to Figma',
    description: 'Paste raw HTML code or upload .html files and push them as designs into your Figma file.',
  },
  {
    icon: <LockOutlinedIcon sx={{ fontSize: 22, color: 'info.main' }} />,
    title: 'Google Auth',
    description: 'Sign in with Google to track usage and prepare for future team features.',
  },
];


function CodeBlock({ children }: { children: string }) {
  return (
    <Box
      component="pre"
      sx={{
        bgcolor: (theme) => (theme.palette.mode === 'light' ? '#1e1e2e' : '#111118'),
        color: '#e0e0e0',
        borderRadius: 2,
        px: 2.5,
        py: 2,
        fontSize: '0.8125rem',
        fontFamily: '"SF Mono", "Fira Code", "Consolas", monospace',
        lineHeight: 1.8,
        overflow: 'auto',
        border: '1px solid',
        borderColor: 'rgba(255,255,255,0.06)',
        position: 'relative',
      }}
    >
      <Box
        component="code"
        sx={{ whiteSpace: 'pre-wrap', wordBreak: 'break-all' }}
      >
        {children}
      </Box>
    </Box>
  );
}

export default function ToolsPage() {
  return (
    <Box sx={{ animation: 'fadeIn 0.5s ease-out' }}>
      {/* Header */}
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

      {/* Design Mirror */}
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
                component="img"
                src={designMirrorLogo}
                alt="Design Mirror"
                sx={{
                  width: 56,
                  height: 56,
                  borderRadius: 3,
                }}
              />
              <Box>
                <Box sx={{ display: 'flex', alignItems: 'center', gap: 1.5, mb: 0.5 }}>
                  <Typography variant="h3" sx={{ fontWeight: 700 }}>
                    Design Mirror
                  </Typography>
                  <Chip
                    label="v1.2"
                    size="small"
                    color="primary"
                    variant="outlined"
                    sx={{ height: 22, fontSize: '0.6875rem' }}
                  />
                  <Chip
                    label="macOS"
                    size="small"
                    variant="outlined"
                    sx={{ height: 22, fontSize: '0.6875rem' }}
                  />
                </Box>
                <Typography variant="body2" color="text.secondary">
                  Capture web pages and push them to Figma — native macOS app
                </Typography>
              </Box>
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

          {/* Install via Homebrew */}
          <Typography variant="overline" color="text.secondary" sx={{ mb: 2.5, display: 'block' }}>
            Install via Homebrew
          </Typography>
          <Typography variant="body2" color="text.secondary" sx={{ mb: 2, lineHeight: 1.7 }}>
            Design Mirror is distributed via Homebrew. If you don't have Homebrew installed, open Terminal and run this first:
          </Typography>
          <CodeBlock>{`/bin/bash -c "$(curl -fsSL https://raw.githubusercontent.com/Homebrew/install/HEAD/install.sh)"`}</CodeBlock>
          <Typography variant="body2" color="text.secondary" sx={{ mt: 2.5, mb: 2, lineHeight: 1.7 }}>
            Then install Design Mirror:
          </Typography>
          <CodeBlock>{`brew tap sachinsinha0/design-mirror\nbrew install --cask design-mirror`}</CodeBlock>

          <Box sx={{ mt: 3, mb: 4 }}>
            {[
              { step: '1', title: 'Install via Homebrew', desc: 'Run the commands above in your terminal. The app will be installed to /Applications automatically.' },
              { step: '2', title: 'Open the app', desc: 'Launch Design Mirror from Applications. Sign in with your Google account on first launch.' },
              { step: '3', title: 'Connect to Figma', desc: 'The app connects to Figma automatically via MCP. Authorize when prompted in your browser.' },
              { step: '4', title: 'Start capturing', desc: 'Enter a URL or paste HTML, choose Clipboard or Figma File as destination, and capture.' },
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

          <Divider sx={{ mb: 4 }} />

          {/* Update */}
          <Typography variant="overline" color="text.secondary" sx={{ mb: 2, display: 'block' }}>
            Update to latest version
          </Typography>
          <CodeBlock>{`brew update\nbrew upgrade --cask design-mirror`}</CodeBlock>

          <Divider sx={{ my: 4 }} />

          {/* Uninstall */}
          <Typography variant="overline" color="text.secondary" sx={{ mb: 2, display: 'block' }}>
            Uninstall
          </Typography>
          <CodeBlock>{`brew uninstall --cask design-mirror`}</CodeBlock>

          <Box sx={{ mt: 4 }}>
            <Alert severity="info" variant="outlined" sx={{ borderRadius: 2 }}>
              <AlertTitle>System requirements</AlertTitle>
              <Typography variant="body2" color="text.secondary">
                macOS 12 (Monterey) or later. Apple Silicon and Intel Macs supported. Google Chrome (or Edge/Brave) required for the capture feature. Node.js is bundled — no separate install needed.
              </Typography>
            </Alert>
          </Box>
        </Box>
      </Card>

      {/* More tools coming soon */}
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
