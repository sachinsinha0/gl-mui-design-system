import { useState } from 'react';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Card from '@mui/material/Card';
import Grid from '@mui/material/Grid';
import Chip from '@mui/material/Chip';
import Divider from '@mui/material/Divider';
import Alert from '@mui/material/Alert';
import AlertTitle from '@mui/material/AlertTitle';
import Collapse from '@mui/material/Collapse';
import IconButton from '@mui/material/IconButton';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import ScreenshotMonitorOutlinedIcon from '@mui/icons-material/ScreenshotMonitorOutlined';
import CodeOutlinedIcon from '@mui/icons-material/CodeOutlined';
import SendOutlinedIcon from '@mui/icons-material/SendOutlined';
import LockOutlinedIcon from '@mui/icons-material/LockOutlined';
import PaletteOutlinedIcon from '@mui/icons-material/PaletteOutlined';
import TextFieldsOutlinedIcon from '@mui/icons-material/TextFieldsOutlined';
import LibraryBooksOutlinedIcon from '@mui/icons-material/LibraryBooksOutlined';
import SearchOutlinedIcon from '@mui/icons-material/SearchOutlined';
import LinkOutlinedIcon from '@mui/icons-material/LinkOutlined';
import FileDownloadOutlinedIcon from '@mui/icons-material/FileDownloadOutlined';
import designMirrorLogo from '../../design-mirror-logo.svg';
import mirrorLinkLogo from '../../mirror-link-logo.svg';

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

const MIRROR_LINK_FEATURES = [
  {
    icon: <PaletteOutlinedIcon sx={{ fontSize: 22, color: 'primary.main' }} />,
    title: 'Color token scanning',
    description: 'Detects fills and strokes not bound to color variables or paint styles in your design system.',
  },
  {
    icon: <TextFieldsOutlinedIcon sx={{ fontSize: 22, color: 'success.main' }} />,
    title: 'Text style detection',
    description: 'Finds unlinked typography and suggests matching text styles from your library.',
  },
  {
    icon: <LibraryBooksOutlinedIcon sx={{ fontSize: 22, color: 'warning.main' }} />,
    title: 'Multi-library support',
    description: 'Connect multiple design system libraries. Just paste the Figma URL — names are extracted automatically.',
  },
  {
    icon: <SearchOutlinedIcon sx={{ fontSize: 22, color: 'secondary.main' }} />,
    title: 'Smart matching',
    description: 'Uses CIELAB color distance and font weight scoring with confidence levels: Exact, High, Medium, Low.',
  },
  {
    icon: <LinkOutlinedIcon sx={{ fontSize: 22, color: 'info.main' }} />,
    title: 'Bulk linking',
    description: 'Select matched tokens and link them all to your design system in one click.',
  },
  {
    icon: <FileDownloadOutlinedIcon sx={{ fontSize: 22, color: 'error.main' }} />,
    title: 'CSV export',
    description: 'Export scan results as a CSV report for team review and tracking.',
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
  const [designMirrorOpen, setDesignMirrorOpen] = useState(false);
  const [mirrorLinkOpen, setMirrorLinkOpen] = useState(false);

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

      {/* ================================================================ */}
      {/* Design Mirror */}
      {/* ================================================================ */}
      <Card
        elevation={0}
        sx={{
          borderRadius: 3,
          border: '1px solid',
          borderColor: 'divider',
          overflow: 'hidden',
          mb: 3,
        }}
      >
        {/* Tool header — always visible, clickable */}
        <Box
          onClick={() => setDesignMirrorOpen(!designMirrorOpen)}
          sx={(theme) => ({
            px: { xs: 3, md: 4 },
            py: { xs: 2.5, md: 3 },
            background:
              theme.palette.mode === 'light'
                ? 'linear-gradient(135deg, rgba(25,106,229,0.04) 0%, rgba(25,106,229,0.01) 100%)'
                : 'linear-gradient(135deg, rgba(25,106,229,0.08) 0%, rgba(25,106,229,0.02) 100%)',
            cursor: 'pointer',
            userSelect: 'none',
            '&:hover': { bgcolor: theme.palette.mode === 'light' ? 'rgba(25,106,229,0.06)' : 'rgba(25,106,229,0.10)' },
            transition: 'background-color 0.15s ease',
          })}
        >
          <Box sx={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
            <Box sx={{ display: 'flex', alignItems: 'center', gap: 2 }}>
              <Box
                sx={{
                  width: 48,
                  height: 48,
                  borderRadius: 2.5,
                  bgcolor: 'common.white',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  p: 0.75,
                  boxShadow: '0 1px 3px rgba(0,0,0,0.1)',
                }}
              >
                <Box
                  component="img"
                  src={designMirrorLogo}
                  alt="Design Mirror"
                  sx={{ width: 32, height: 32 }}
                />
              </Box>
              <Box>
                <Box sx={{ display: 'flex', alignItems: 'center', gap: 1.5, mb: 0.25 }}>
                  <Typography variant="h3" sx={{ fontWeight: 700, fontSize: { xs: '1.1rem', md: '1.25rem' } }}>
                    Design Mirror
                  </Typography>
                  <Chip
                    label="v1.4.0"
                    size="small"
                    color="primary"
                    variant="outlined"
                    sx={{ height: 20, fontSize: '0.625rem' }}
                  />
                  <Chip
                    label="macOS"
                    size="small"
                    variant="outlined"
                    sx={{ height: 20, fontSize: '0.625rem' }}
                  />
                </Box>
                <Typography variant="body2" color="text.secondary" sx={{ fontSize: '0.8125rem' }}>
                  Capture web pages and push them to Figma — native macOS app
                </Typography>
              </Box>
            </Box>
            <IconButton
              size="small"
              aria-label={designMirrorOpen ? 'Collapse Design Mirror' : 'Expand Design Mirror'}
              sx={{
                transform: designMirrorOpen ? 'rotate(180deg)' : 'rotate(0deg)',
                transition: 'transform 0.25s ease',
                ml: 1,
              }}
            >
              <ExpandMoreIcon />
            </IconButton>
          </Box>
        </Box>

        {/* Tool content — collapsible */}
        <Collapse in={designMirrorOpen}>
          <Divider />
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
                  sx={{ display: 'flex', gap: 2, mb: 2.5, '&:last-child': { mb: 0 } }}
                >
                  <Box
                    sx={{
                      width: 28, height: 28, borderRadius: '50%', bgcolor: 'primary.main', color: 'common.white',
                      display: 'flex', alignItems: 'center', justifyContent: 'center',
                      fontSize: '0.75rem', fontWeight: 700, flexShrink: 0, mt: 0.25,
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
        </Collapse>
      </Card>

      {/* ================================================================ */}
      {/* Mirror Link */}
      {/* ================================================================ */}
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
        {/* Tool header — always visible, clickable */}
        <Box
          onClick={() => setMirrorLinkOpen(!mirrorLinkOpen)}
          sx={(theme) => ({
            px: { xs: 3, md: 4 },
            py: { xs: 2.5, md: 3 },
            background:
              theme.palette.mode === 'light'
                ? 'linear-gradient(135deg, rgba(91,172,255,0.06) 0%, rgba(16,67,201,0.03) 100%)'
                : 'linear-gradient(135deg, rgba(91,172,255,0.10) 0%, rgba(16,67,201,0.04) 100%)',
            cursor: 'pointer',
            userSelect: 'none',
            '&:hover': { bgcolor: theme.palette.mode === 'light' ? 'rgba(91,172,255,0.10)' : 'rgba(91,172,255,0.14)' },
            transition: 'background-color 0.15s ease',
          })}
        >
          <Box sx={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
            <Box sx={{ display: 'flex', alignItems: 'center', gap: 2 }}>
              <Box
                sx={{
                  width: 48,
                  height: 48,
                  borderRadius: 2.5,
                  bgcolor: 'common.white',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  p: 0.75,
                  boxShadow: '0 1px 3px rgba(0,0,0,0.1)',
                }}
              >
                <Box
                  component="img"
                  src={mirrorLinkLogo}
                  alt="Mirror Link"
                  sx={{ width: 32, height: 32 }}
                />
              </Box>
              <Box>
                <Box sx={{ display: 'flex', alignItems: 'center', gap: 1.5, mb: 0.25 }}>
                  <Typography variant="h3" sx={{ fontWeight: 700, fontSize: { xs: '1.1rem', md: '1.25rem' } }}>
                    Mirror Link
                  </Typography>
                  <Chip
                    label="v0.1"
                    size="small"
                    color="primary"
                    variant="outlined"
                    sx={{ height: 20, fontSize: '0.625rem' }}
                  />
                  <Chip
                    label="Figma Plugin"
                    size="small"
                    variant="outlined"
                    sx={{ height: 20, fontSize: '0.625rem' }}
                  />
                </Box>
                <Typography variant="body2" color="text.secondary" sx={{ fontSize: '0.8125rem' }}>
                  Detect and relink broken design tokens to your design system — Figma plugin
                </Typography>
              </Box>
            </Box>
            <IconButton
              size="small"
              aria-label={mirrorLinkOpen ? 'Collapse Mirror Link' : 'Expand Mirror Link'}
              sx={{
                transform: mirrorLinkOpen ? 'rotate(180deg)' : 'rotate(0deg)',
                transition: 'transform 0.25s ease',
                ml: 1,
              }}
            >
              <ExpandMoreIcon />
            </IconButton>
          </Box>
        </Box>

        {/* Tool content — collapsible */}
        <Collapse in={mirrorLinkOpen}>
          <Divider />
          <Box sx={{ px: { xs: 3, md: 4 }, py: { xs: 3, md: 4 } }}>
            {/* How it works */}
            <Typography variant="overline" color="text.secondary" sx={{ mb: 2.5, display: 'block' }}>
              How it works
            </Typography>
            <Typography variant="body2" color="text.secondary" sx={{ mb: 3, lineHeight: 1.7 }}>
              When designs are imported into Figma — via Design Mirror, copy-paste, or any other method — design tokens
              often get broken. Colors show as raw hex values instead of linked variables, and text appears as raw font specs
              instead of linked text styles. Mirror Link scans your designs, finds these broken connections, and helps you
              relink them to your design system.
            </Typography>

            {/* Features grid */}
            <Typography variant="overline" color="text.secondary" sx={{ mb: 2.5, display: 'block' }}>
              Features
            </Typography>
            <Grid container spacing={2} sx={{ mb: 4 }}>
              {MIRROR_LINK_FEATURES.map((feature) => (
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

            {/* Install */}
            <Typography variant="overline" color="text.secondary" sx={{ mb: 2.5, display: 'block' }}>
              Install from Figma
            </Typography>
            <Box sx={{ mb: 4 }}>
              {[
                { step: '1', title: 'Install the plugin', desc: 'Search for "Mirror Link" in Figma\'s plugin browser (Plugins > Search), or visit the Figma Community page and click Install.' },
                { step: '2', title: 'Generate a Figma API token', desc: 'Go to figma.com/settings, scroll to Personal Access Tokens, and generate a new token. This is needed to fetch text styles from your library.' },
                { step: '3', title: 'Add your design system library', desc: 'Open the plugin, go to Settings, and paste the Figma URL of your design system library. The library name is extracted automatically.' },
                { step: '4', title: 'Scan your page', desc: 'Click Scan to detect all unlinked colors and text styles. Review the results — each match shows a confidence level.' },
                { step: '5', title: 'Link tokens', desc: 'Select the tokens you want to link, confirm, and they\'re reconnected to your design system. For text styles, use Select to highlight nodes on canvas, then apply the style from Figma\'s Design panel.' },
              ].map((item) => (
                <Box
                  key={item.step}
                  sx={{ display: 'flex', gap: 2, mb: 2.5, '&:last-child': { mb: 0 } }}
                >
                  <Box
                    sx={{
                      width: 28, height: 28, borderRadius: '50%', bgcolor: 'primary.main', color: 'common.white',
                      display: 'flex', alignItems: 'center', justifyContent: 'center',
                      fontSize: '0.75rem', fontWeight: 700, flexShrink: 0, mt: 0.25,
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

            {/* Works with Design Mirror */}
            <Typography variant="overline" color="text.secondary" sx={{ mb: 2, display: 'block' }}>
              Works with Design Mirror
            </Typography>
            <Typography variant="body2" color="text.secondary" sx={{ mb: 2, lineHeight: 1.7 }}>
              Mirror Link is designed to pair with Design Mirror. The typical workflow:
            </Typography>
            <Box sx={{ mb: 4 }}>
              {[
                { step: '1', text: 'Use Design Mirror to capture a web page and push it into Figma' },
                { step: '2', text: 'Open Mirror Link — it auto-detects the import and starts scanning' },
                { step: '3', text: 'Review matched tokens and link them back to your design system' },
              ].map((item) => (
                <Box key={item.step} sx={{ display: 'flex', gap: 2, mb: 1.5, '&:last-child': { mb: 0 } }}>
                  <Typography variant="body2" sx={{ fontWeight: 700, color: 'primary.main', flexShrink: 0 }}>
                    {item.step}.
                  </Typography>
                  <Typography variant="body2" color="text.secondary" sx={{ lineHeight: 1.7 }}>
                    {item.text}
                  </Typography>
                </Box>
              ))}
            </Box>

            <Box sx={{ mt: 4 }}>
              <Alert severity="info" variant="outlined" sx={{ borderRadius: 2 }}>
                <AlertTitle>Works with any design system</AlertTitle>
                <Typography variant="body2" color="text.secondary">
                  Mirror Link is not tied to any specific design system. It works with Material Design, Tailwind,
                  custom token libraries, or any design system published as a Figma library. Just paste your library URL
                  in Settings.
                </Typography>
              </Alert>
            </Box>
          </Box>
        </Collapse>
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
