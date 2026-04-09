import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Card from '@mui/material/Card';
import Grid from '@mui/material/Grid';
import Chip from '@mui/material/Chip';
import Stepper from '@mui/material/Stepper';
import Step from '@mui/material/Step';
import StepLabel from '@mui/material/StepLabel';
import StepContent from '@mui/material/StepContent';
import Alert from '@mui/material/Alert';
import AlertTitle from '@mui/material/AlertTitle';
import Divider from '@mui/material/Divider';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import BrushOutlinedIcon from '@mui/icons-material/BrushOutlined';
import CodeOutlinedIcon from '@mui/icons-material/CodeOutlined';
import SyncOutlinedIcon from '@mui/icons-material/SyncOutlined';
import SmartToyOutlinedIcon from '@mui/icons-material/SmartToyOutlined';
import PaletteOutlinedIcon from '@mui/icons-material/PaletteOutlined';
import FormatSizeOutlinedIcon from '@mui/icons-material/FormatSizeOutlined';
import SpaceBarOutlinedIcon from '@mui/icons-material/SpaceBarOutlined';
import LayersOutlinedIcon from '@mui/icons-material/LayersOutlined';
import CheckCircleOutlinedIcon from '@mui/icons-material/CheckCircleOutlined';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
import { useNavigate } from 'react-router-dom';

// ─── Reusable code block ────────────────────────────────────────────────────
function CodeBlock({ children }: { children: string }) {
  return (
    <Box
      component="pre"
      sx={(theme) => ({
        bgcolor: theme.palette.mode === 'light' ? 'grey.900' : 'grey.900',
        color: 'grey.100',
        p: 3,
        borderRadius: 2,
        overflow: 'auto',
        fontSize: '0.8125rem',
        lineHeight: 1.7,
        fontFamily: '"Fira Code", "SF Mono", "Cascadia Code", monospace',
        m: 0,
        border: '1px solid',
        borderColor: theme.palette.mode === 'light' ? 'grey.800' : 'rgba(255,255,255,0.08)',
      })}
    >
      {children}
    </Box>
  );
}

// ─── Info card for role-specific content ────────────────────────────────────
function RoleCard({
  icon,
  title,
  subtitle,
  gradient,
  children,
}: {
  icon: React.ReactNode;
  title: string;
  subtitle: string;
  gradient: string;
  children: React.ReactNode;
}) {
  return (
    <Card
      elevation={0}
      sx={{
        borderRadius: 3,
        border: '1px solid',
        borderColor: 'divider',
        overflow: 'hidden',
        height: '100%',
      }}
    >
      <Box sx={{ background: gradient, px: 3, py: 3 }}>
        <Box sx={{ display: 'flex', alignItems: 'center', gap: 1.5, mb: 1 }}>
          <Box
            sx={{
              width: 40,
              height: 40,
              borderRadius: 2,
              bgcolor: 'background.paper',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              boxShadow: 1,
            }}
          >
            {icon}
          </Box>
          <Box>
            <Typography variant="subtitle1" sx={{ fontWeight: 700, lineHeight: 1.2 }}>
              {title}
            </Typography>
            <Typography variant="caption" color="text.secondary">
              {subtitle}
            </Typography>
          </Box>
        </Box>
      </Box>
      <Box sx={{ p: 3 }}>{children}</Box>
    </Card>
  );
}

// ─── Token quick-ref card ───────────────────────────────────────────────────
function TokenCard({
  icon,
  title,
  description,
  onClick,
}: {
  icon: React.ReactNode;
  title: string;
  description: string;
  onClick: () => void;
}) {
  return (
    <Card
      elevation={0}
      onClick={onClick}
      sx={{
        p: 3,
        borderRadius: 2,
        border: '1px solid',
        borderColor: 'divider',
        cursor: 'pointer',
        transition: 'all 0.15s ease',
        '&:hover': {
          borderColor: 'primary.main',
          bgcolor: 'primary.shades.hover',
          transform: 'translateY(-2px)',
          boxShadow: 2,
        },
      }}
    >
      <Box sx={{ color: 'primary.main', mb: 1.5 }}>{icon}</Box>
      <Typography variant="subtitle2" sx={{ mb: 0.5 }}>{title}</Typography>
      <Typography variant="caption" color="text.secondary" sx={{ lineHeight: 1.5 }}>
        {description}
      </Typography>
      <Box sx={{ display: 'flex', alignItems: 'center', gap: 0.5, mt: 1.5, color: 'primary.main' }}>
        <Typography variant="caption" sx={{ fontWeight: 600 }}>View tokens</Typography>
        <ArrowForwardIcon sx={{ fontSize: 14 }} />
      </Box>
    </Card>
  );
}

export default function GetStartedPage() {
  const navigate = useNavigate();

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
              ? 'linear-gradient(135deg, #FFF8E1 0%, #FFF3E0 50%, #E8F0FC 100%)'
              : 'linear-gradient(135deg, #1a1a0d 0%, #1a140d 50%, #121830 100%)',
          border: '1px solid',
          borderColor: theme.palette.mode === 'light' ? 'rgba(0,0,0,0.04)' : 'rgba(255,255,255,0.06)',
        })}
      >
        <Typography variant="overline" color="text.secondary" sx={{ mb: 1, display: 'block' }}>
          Guide
        </Typography>
        <Typography
          variant="h1"
          sx={{ fontSize: { xs: '1.75rem', md: '2.5rem' }, fontWeight: 700, letterSpacing: '-0.5px', mb: 1.5 }}
        >
          Get Started
        </Typography>
        <Typography variant="body1" color="text.secondary" sx={{ maxWidth: 600, lineHeight: 1.7 }}>
          Everything you need to start using the Great Learning MUI Design System — whether you're
          designing in Figma or building in React.
        </Typography>
      </Box>

      {/* ── How it works — visual explanation ─────────────────────────── */}
      <Box sx={{ mb: 6 }}>
        <Typography variant="h3" sx={{ fontWeight: 700, mb: 1 }}>
          How the system works
        </Typography>
        <Typography variant="body2" color="text.secondary" sx={{ mb: 4, maxWidth: 500 }}>
          One design language, three layers of enforcement.
        </Typography>

        <Grid container spacing={3}>
          {[
            {
              step: '01',
              icon: <BrushOutlinedIcon sx={{ fontSize: 28, color: 'primary.main' }} />,
              title: 'Design in Figma',
              desc: 'Use the Olympus MUI library. Every color, text style, and spacing value is a named variable.',
              color: 'primary',
            },
            {
              step: '02',
              icon: <CodeOutlinedIcon sx={{ fontSize: 28, color: 'success.main' }} />,
              title: 'Build with tokens',
              desc: 'Developers install the theme package. MUI components automatically inherit all tokens.',
              color: 'success',
            },
            {
              step: '03',
              icon: <SmartToyOutlinedIcon sx={{ fontSize: 28, color: 'warning.main' }} />,
              title: 'AI enforces rules',
              desc: 'The Claude skill blocks hardcoded values. If someone writes #FF0000, it suggests error.main instead.',
              color: 'warning',
            },
          ].map((item) => (
            <Grid size={{ xs: 12, md: 4 }} key={item.step}>
              <Box
                sx={(theme) => ({
                  p: 3,
                  borderRadius: 3,
                  border: '1px solid',
                  borderColor: 'divider',
                  bgcolor: theme.palette.mode === 'light' ? 'background.paper' : 'rgba(255,255,255,0.02)',
                  height: '100%',
                  position: 'relative',
                  overflow: 'hidden',
                })}
              >
                <Typography
                  sx={{
                    position: 'absolute',
                    top: 12,
                    right: 16,
                    fontSize: '3rem',
                    fontWeight: 700,
                    opacity: 0.06,
                    lineHeight: 1,
                  }}
                >
                  {item.step}
                </Typography>
                <Box sx={{ mb: 2 }}>{item.icon}</Box>
                <Typography variant="subtitle1" sx={{ fontWeight: 700, mb: 0.5 }}>
                  {item.title}
                </Typography>
                <Typography variant="body2" color="text.secondary" sx={{ lineHeight: 1.7 }}>
                  {item.desc}
                </Typography>
              </Box>
            </Grid>
          ))}
        </Grid>
      </Box>

      <Divider sx={{ mb: 6 }} />

      {/* ── For Designers vs For Developers ────────────────────────────── */}
      <Grid container spacing={4} sx={{ mb: 6 }}>
        <Grid size={{ xs: 12, md: 6 }}>
          <RoleCard
            icon={<BrushOutlinedIcon sx={{ color: 'primary.main' }} />}
            title="For Designers"
            subtitle="Your Figma workflow stays the same"
            gradient="linear-gradient(135deg, rgba(25,106,229,0.06) 0%, rgba(25,106,229,0.02) 100%)"
          >
            <Typography variant="body2" color="text.secondary" sx={{ lineHeight: 1.8, mb: 3 }}>
              You don't need to learn code. Keep designing in Figma using the Olympus MUI library.
              This system is the <strong>bridge</strong> that ensures your designs are implemented exactly as intended.
            </Typography>

            <Typography variant="subtitle2" sx={{ mb: 1.5 }}>
              When you update tokens in Figma:
            </Typography>

            <Stepper orientation="vertical" sx={{ '& .MuiStepConnector-line': { minHeight: 16 } }}>
              {[
                'Update the token in the Olympus Figma library',
                'Tell your developer which tokens changed',
                'They update olympusTheme.ts to match',
                'All projects get the update automatically',
              ].map((label, i) => (
                <Step key={i} active>
                  <StepLabel
                    slotProps={{
                      stepIcon: {
                        sx: {
                          color: 'primary.main',
                          '&.Mui-active': { color: 'primary.main' },
                        },
                      },
                    }}
                  >
                    <Typography variant="body2">{label}</Typography>
                  </StepLabel>
                </Step>
              ))}
            </Stepper>

            <Alert severity="info" sx={{ mt: 3, borderRadius: 2 }}>
              <AlertTitle>AI protection</AlertTitle>
              <Typography variant="body2">
                The Claude AI skill automatically blocks developers from using colors, fonts, or spacing
                that don't match your Figma tokens. If someone writes <code>#FF0000</code>, the AI
                suggests <code>error.main</code> instead.
              </Typography>
            </Alert>
          </RoleCard>
        </Grid>

        <Grid size={{ xs: 12, md: 6 }}>
          <RoleCard
            icon={<CodeOutlinedIcon sx={{ color: 'success.main' }} />}
            title="For Developers"
            subtitle="Install, wrap, ship"
            gradient="linear-gradient(135deg, rgba(34,187,52,0.06) 0%, rgba(34,187,52,0.02) 100%)"
          >
            <Stepper orientation="vertical" sx={{ '& .MuiStepConnector-line': { minHeight: 12 } }}>
              <Step active>
                <StepLabel>
                  <Typography variant="subtitle2">Install the theme</Typography>
                </StepLabel>
                <StepContent>
                  <CodeBlock>npm i @sachinsinha1/olympus-theme</CodeBlock>
                </StepContent>
              </Step>

              <Step active>
                <StepLabel>
                  <Typography variant="subtitle2">Wrap your app</Typography>
                </StepLabel>
                <StepContent>
                  <CodeBlock>{`import { ThemeProvider } from '@mui/material/styles';
import { lightTheme } from '@sachinsinha1/olympus-theme';

function App() {
  return (
    <ThemeProvider theme={lightTheme}>
      {/* your app */}
    </ThemeProvider>
  );
}`}</CodeBlock>
                </StepContent>
              </Step>

              <Step active>
                <StepLabel>
                  <Typography variant="subtitle2">Install the Claude skill</Typography>
                </StepLabel>
                <StepContent>
                  <CodeBlock>npm run setup:claude</CodeBlock>
                  <Typography variant="caption" color="text.secondary" sx={{ mt: 1, display: 'block' }}>
                    Commit the generated skill file so your whole team gets AI enforcement.
                  </Typography>
                </StepContent>
              </Step>

              <Step active>
                <StepLabel>
                  <Typography variant="subtitle2">Use tokens, not values</Typography>
                </StepLabel>
                <StepContent>
                  <CodeBlock>{`// ✅ Correct — theme tokens
<Box sx={{ bgcolor: 'primary.main', p: 3 }} />
<Typography variant="h1">Heading</Typography>
<Paper elevation={2}>Content</Paper>

// ❌ Wrong — hardcoded values
<Box sx={{ bgcolor: '#196AE5', p: '16px' }} />
<p style={{ fontSize: 32 }}>Heading</p>`}</CodeBlock>
                </StepContent>
              </Step>
            </Stepper>
          </RoleCard>
        </Grid>
      </Grid>

      <Divider sx={{ mb: 6 }} />

      {/* ── Quick Token Reference ─────────────────────────────────────── */}
      <Box sx={{ mb: 6 }}>
        <Typography variant="h3" sx={{ fontWeight: 700, mb: 1 }}>
          Quick token reference
        </Typography>
        <Typography variant="body2" color="text.secondary" sx={{ mb: 4, maxWidth: 500 }}>
          The most common tokens you'll use day-to-day. For the complete list, visit Foundations.
        </Typography>

        {/* Token category cards */}
        <Grid container spacing={2} sx={{ mb: 5 }}>
          <Grid size={{ xs: 6, sm: 3 }}>
            <TokenCard
              icon={<PaletteOutlinedIcon />}
              title="Color"
              description="5 semantic palettes, grey scale, backgrounds"
              onClick={() => navigate('/foundations#color-palette')}
            />
          </Grid>
          <Grid size={{ xs: 6, sm: 3 }}>
            <TokenCard
              icon={<FormatSizeOutlinedIcon />}
              title="Typography"
              description="Inter font, 20+ variants, 3 weights"
              onClick={() => navigate('/foundations#typography')}
            />
          </Grid>
          <Grid size={{ xs: 6, sm: 3 }}>
            <TokenCard
              icon={<SpaceBarOutlinedIcon />}
              title="Spacing"
              description="Non-linear 4px base, 11 steps"
              onClick={() => navigate('/foundations#spacing')}
            />
          </Grid>
          <Grid size={{ xs: 6, sm: 3 }}>
            <TokenCard
              icon={<LayersOutlinedIcon />}
              title="Elevation"
              description="25 shadow levels, 0–24"
              onClick={() => navigate('/foundations#color-palette')}
            />
          </Grid>
        </Grid>

        {/* Color quick ref */}
        <Typography variant="overline" color="text.secondary" sx={{ mb: 2, display: 'block' }}>
          Core colors
        </Typography>
        <TableContainer
          component={Paper}
          variant="outlined"
          sx={{ borderRadius: 2, mb: 4 }}
        >
          <Table size="small">
            <TableHead>
              <TableRow sx={{ bgcolor: 'action.hover' }}>
                <TableCell>Token</TableCell>
                <TableCell>Light</TableCell>
                <TableCell>Dark</TableCell>
                <TableCell>Figma path</TableCell>
                <TableCell>Code</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {[
                { name: 'Primary', light: '#196AE5', dark: '#66BBFF', figma: 'Primary/Main', code: "palette.primary.main" },
                { name: 'Error', light: '#FF3333', dark: '#F44336', figma: 'Error/Main', code: "palette.error.main" },
                { name: 'Warning', light: '#FF9800', dark: '#FFCC80', figma: 'Warning/Main', code: "palette.warning.main" },
                { name: 'Success', light: '#22BB34', dark: '#66BB6A', figma: 'Success/Main', code: "palette.success.main" },
                { name: 'Info', light: '#196AE5', dark: '#29B6F6', figma: 'Info/Main', code: "palette.info.main" },
              ].map((row) => (
                <TableRow key={row.name} hover>
                  <TableCell>
                    <Typography variant="body2" sx={{ fontWeight: 500 }}>{row.name}</Typography>
                  </TableCell>
                  <TableCell>
                    <Box sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
                      <Box sx={{ width: 16, height: 16, borderRadius: 0.5, bgcolor: row.light, border: '1px solid', borderColor: 'divider' }} />
                      <Typography variant="caption" sx={{ fontFamily: 'monospace' }}>{row.light}</Typography>
                    </Box>
                  </TableCell>
                  <TableCell>
                    <Box sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
                      <Box sx={{ width: 16, height: 16, borderRadius: 0.5, bgcolor: row.dark, border: '1px solid', borderColor: 'divider' }} />
                      <Typography variant="caption" sx={{ fontFamily: 'monospace' }}>{row.dark}</Typography>
                    </Box>
                  </TableCell>
                  <TableCell>
                    <Typography variant="caption" color="text.secondary">{row.figma}</Typography>
                  </TableCell>
                  <TableCell>
                    <Chip
                      label={row.code}
                      size="small"
                      sx={{
                        fontFamily: 'monospace',
                        fontSize: '0.6875rem',
                        bgcolor: 'action.hover',
                        height: 24,
                      }}
                    />
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </TableContainer>

        {/* Typography quick ref */}
        <Typography variant="overline" color="text.secondary" sx={{ mb: 2, display: 'block' }}>
          Core typography
        </Typography>
        <TableContainer
          component={Paper}
          variant="outlined"
          sx={{ borderRadius: 2, mb: 4 }}
        >
          <Table size="small">
            <TableHead>
              <TableRow sx={{ bgcolor: 'action.hover' }}>
                <TableCell>Style</TableCell>
                <TableCell>Size</TableCell>
                <TableCell>Weight</TableCell>
                <TableCell>Preview</TableCell>
                <TableCell>Code</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {[
                { style: 'Headline 1', size: '32px', weight: 'SemiBold (600)', variant: 'h1' },
                { style: 'Headline 2', size: '28px', weight: 'SemiBold (600)', variant: 'h2' },
                { style: 'Headline 3', size: '24px', weight: 'SemiBold (600)', variant: 'h3' },
                { style: 'Body 1', size: '16px', weight: 'Regular (400)', variant: 'body1' },
                { style: 'Body 2', size: '14px', weight: 'Regular (400)', variant: 'body2' },
                { style: 'Caption', size: '12px', weight: 'Regular (400)', variant: 'caption' },
              ].map((row) => (
                <TableRow key={row.variant} hover>
                  <TableCell>
                    <Typography variant="body2" sx={{ fontWeight: 500 }}>{row.style}</Typography>
                  </TableCell>
                  <TableCell>
                    <Typography variant="caption" sx={{ fontFamily: 'monospace' }}>{row.size}</Typography>
                  </TableCell>
                  <TableCell>
                    <Typography variant="caption" color="text.secondary">{row.weight}</Typography>
                  </TableCell>
                  <TableCell>
                    <Typography variant={row.variant as 'h1' | 'h2' | 'h3' | 'body1' | 'body2' | 'caption'}>
                      Aa
                    </Typography>
                  </TableCell>
                  <TableCell>
                    <Chip
                      label={`variant="${row.variant}"`}
                      size="small"
                      sx={{
                        fontFamily: 'monospace',
                        fontSize: '0.6875rem',
                        bgcolor: 'action.hover',
                        height: 24,
                      }}
                    />
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </TableContainer>

        {/* Spacing quick ref */}
        <Typography variant="overline" color="text.secondary" sx={{ mb: 2, display: 'block' }}>
          Spacing scale
        </Typography>
        <Box
          sx={(theme) => ({
            display: 'flex',
            gap: 1,
            flexWrap: 'wrap',
            p: 3,
            borderRadius: 2,
            border: '1px solid',
            borderColor: 'divider',
            bgcolor: theme.palette.mode === 'light' ? 'background.paper' : 'rgba(255,255,255,0.02)',
          })}
        >
          {[
            { n: 0, px: 0 }, { n: 1, px: 4 }, { n: 2, px: 8 }, { n: 3, px: 16 },
            { n: 4, px: 24 }, { n: 5, px: 32 }, { n: 6, px: 40 }, { n: 7, px: 48 },
            { n: 8, px: 64 }, { n: 9, px: 96 }, { n: 10, px: 128 },
          ].map((s) => (
            <Box
              key={s.n}
              sx={{
                textAlign: 'center',
                p: 1.5,
                borderRadius: 1.5,
                border: '1px solid',
                borderColor: 'divider',
                minWidth: 64,
                transition: 'all 0.15s ease',
                '&:hover': { borderColor: 'primary.main', bgcolor: 'primary.shades.hover' },
              }}
            >
              <Typography variant="subtitle2" color="primary.main" sx={{ fontFamily: 'monospace', fontWeight: 700 }}>
                {s.n}
              </Typography>
              <Typography variant="caption" color="text.secondary" sx={{ fontSize: '0.625rem' }}>
                {s.px}px
              </Typography>
            </Box>
          ))}
        </Box>
      </Box>

      <Divider sx={{ mb: 6 }} />

      {/* ── Rules at a glance ─────────────────────────────────────────── */}
      <Box sx={{ mb: 6 }}>
        <Typography variant="h3" sx={{ fontWeight: 700, mb: 1 }}>
          Rules at a glance
        </Typography>
        <Typography variant="body2" color="text.secondary" sx={{ mb: 4, maxWidth: 500 }}>
          The non-negotiables — what the system enforces across every project.
        </Typography>

        <Grid container spacing={2}>
          {[
            { rule: 'Token-only colors', detail: 'No hex codes. Always theme.palette.* or sx shorthand like "primary.main".' },
            { rule: 'Inter font only', detail: 'Never set fontFamily on components. It inherits from the theme globally.' },
            { rule: 'Typography variants', detail: 'Use <Typography variant="...">. Never inline font sizes or weights.' },
            { rule: 'theme.spacing() only', detail: 'Permitted values: 0, 4, 8, 16, 24, 32, 40, 48, 64, 96, 128px.' },
            { rule: 'Elevation for shadows', detail: 'Use elevation prop or theme.shadows[n]. No custom box-shadow values.' },
            { rule: 'borderRadius: 4px base', detail: 'Default is theme.shape.borderRadius (4px). No arbitrary 8, 12, 16px.' },
            { rule: 'No secondary palette', detail: 'Olympus does not define palette.secondary. Use primary or extended palettes.' },
            { rule: 'Dark mode via tokens', detail: 'Semantic tokens auto-switch. Never check mode manually for colors.' },
          ].map((item) => (
            <Grid size={{ xs: 12, sm: 6 }} key={item.rule}>
              <Box
                sx={{
                  display: 'flex',
                  gap: 1.5,
                  p: 2,
                  borderRadius: 2,
                  border: '1px solid',
                  borderColor: 'divider',
                  height: '100%',
                  transition: 'border-color 0.15s ease',
                  '&:hover': { borderColor: 'success.main' },
                }}
              >
                <CheckCircleOutlinedIcon sx={{ color: 'success.main', fontSize: 20, mt: 0.25, flexShrink: 0 }} />
                <Box>
                  <Typography variant="subtitle2" sx={{ mb: 0.25 }}>{item.rule}</Typography>
                  <Typography variant="caption" color="text.secondary" sx={{ lineHeight: 1.6 }}>
                    {item.detail}
                  </Typography>
                </Box>
              </Box>
            </Grid>
          ))}
        </Grid>
      </Box>

      <Divider sx={{ mb: 6 }} />

      {/* ── Figma → Code mapping ──────────────────────────────────────── */}
      <Box sx={{ mb: 6 }}>
        <Typography variant="h3" sx={{ fontWeight: 700, mb: 1 }}>
          Figma → Code mapping
        </Typography>
        <Typography variant="body2" color="text.secondary" sx={{ mb: 4, maxWidth: 600 }}>
          Every token name in Figma maps directly to a code path. Designers — share the Figma
          variable path with your developer. Developers — look up the MUI access pattern.
        </Typography>

        <TableContainer component={Paper} variant="outlined" sx={{ borderRadius: 2 }}>
          <Table size="small">
            <TableHead>
              <TableRow sx={{ bgcolor: 'action.hover' }}>
                <TableCell>Figma Variable</TableCell>
                <TableCell>sx shorthand</TableCell>
                <TableCell>Full path</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {[
                { figma: 'Primary/Main', sx: "'primary.main'", full: 'theme.palette.primary.main' },
                { figma: 'Error/Main', sx: "'error.main'", full: 'theme.palette.error.main' },
                { figma: 'Text/Primary', sx: "'text.primary'", full: 'theme.palette.text.primary' },
                { figma: 'Text/Secondary', sx: "'text.secondary'", full: 'theme.palette.text.secondary' },
                { figma: 'Background/Default', sx: "'background.default'", full: 'theme.palette.background.default' },
                { figma: 'Background/Paper', sx: "'background.paper'", full: 'theme.palette.background.paper' },
                { figma: 'Other/Divider', sx: "'divider'", full: 'theme.palette.divider' },
                { figma: 'Headline 1', sx: 'variant="h1"', full: 'theme.typography.h1' },
                { figma: 'Body 1', sx: 'variant="body1"', full: 'theme.typography.body1' },
                { figma: 'Spacing/3', sx: 'p: 3', full: 'theme.spacing(3) → 16px' },
                { figma: 'Elevation/8', sx: 'elevation={8}', full: 'theme.shadows[8]' },
              ].map((row) => (
                <TableRow key={row.figma} hover>
                  <TableCell>
                    <Typography variant="body2" sx={{ fontWeight: 500 }}>{row.figma}</Typography>
                  </TableCell>
                  <TableCell>
                    <Chip
                      label={row.sx}
                      size="small"
                      sx={{ fontFamily: 'monospace', fontSize: '0.6875rem', bgcolor: 'action.hover', height: 24 }}
                    />
                  </TableCell>
                  <TableCell>
                    <Typography variant="caption" sx={{ fontFamily: 'monospace', color: 'text.secondary' }}>
                      {row.full}
                    </Typography>
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </TableContainer>
      </Box>

      {/* ── Update workflow ────────────────────────────────────────────── */}
      <Alert
        severity="info"
        variant="outlined"
        icon={<SyncOutlinedIcon />}
        sx={{ borderRadius: 2, mb: 2 }}
      >
        <AlertTitle>How token updates flow</AlertTitle>
        <Typography variant="body2" color="text.secondary">
          Designer updates Figma → Developer updates <code>olympusTheme.ts</code> → Version bump → <code>npm publish</code> → All projects run <code>npm update</code> → Every app stays in sync.
        </Typography>
      </Alert>
    </Box>
  );
}
