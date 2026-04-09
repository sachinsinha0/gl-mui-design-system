import { useState } from 'react';
import { Outlet, useNavigate, useLocation } from 'react-router-dom';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import IconButton from '@mui/material/IconButton';
import Tooltip from '@mui/material/Tooltip';
import Drawer from '@mui/material/Drawer';
import MenuIcon from '@mui/icons-material/Menu';
import CloseIcon from '@mui/icons-material/Close';
import HomeOutlinedIcon from '@mui/icons-material/HomeOutlined';
import RocketLaunchOutlinedIcon from '@mui/icons-material/RocketLaunchOutlined';
import PaletteOutlinedIcon from '@mui/icons-material/PaletteOutlined';
import WidgetsOutlinedIcon from '@mui/icons-material/WidgetsOutlined';
import Brightness4Icon from '@mui/icons-material/Brightness4';
import Brightness7Icon from '@mui/icons-material/Brightness7';
import { useThemeMode } from '../theme';

const COLLAPSED_WIDTH = 80;
const EXPANDED_WIDTH = 260;
const TRANSITION = 'width 0.25s cubic-bezier(0.4, 0, 0.2, 1), min-width 0.25s cubic-bezier(0.4, 0, 0.2, 1)';

const NAV_ITEMS = [
  { label: 'Home', path: '/', icon: <HomeOutlinedIcon /> },
  { label: 'Get Started', path: '/get-started', icon: <RocketLaunchOutlinedIcon /> },
  { label: 'Foundations', path: '/foundations', icon: <PaletteOutlinedIcon /> },
  { label: 'Components', path: '/components', icon: <WidgetsOutlinedIcon /> },
];

// ─── Collapsed nav item ─────────────────────────────────────────────────────
function NavItemCollapsed({
  icon,
  label,
  active,
  onClick,
}: {
  icon: React.ReactNode;
  label: string;
  active: boolean;
  onClick: () => void;
}) {
  return (
    <Tooltip title={label} placement="right" arrow>
      <Box
        onClick={onClick}
        sx={{
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          cursor: 'pointer',
          py: 0.5,
          gap: '2px',
          width: '100%',
        }}
      >
        <Box
          sx={(theme) => ({
            width: 52,
            height: 32,
            borderRadius: 9999,
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            bgcolor: active
              ? theme.palette.mode === 'light'
                ? 'primary.main'
                : 'primary.shades.select'
              : 'transparent',
            color: active
              ? theme.palette.mode === 'light'
                ? 'common.white'
                : 'primary.main'
              : 'action.active',
            transition: 'all 0.15s ease',
            '&:hover': {
              bgcolor: active
                ? theme.palette.mode === 'light'
                  ? 'primary.dark'
                  : 'primary.shades.select'
                : 'action.hover',
            },
          })}
        >
          {icon}
        </Box>
        <Typography
          variant="caption"
          sx={{
            fontSize: '0.625rem',
            fontWeight: active ? 600 : 400,
            color: active ? 'primary.main' : 'text.secondary',
            textAlign: 'center',
            lineHeight: 1.3,
            letterSpacing: '0.02em',
          }}
        >
          {label}
        </Typography>
      </Box>
    </Tooltip>
  );
}

// ─── Expanded nav item ──────────────────────────────────────────────────────
function NavItemExpanded({
  icon,
  label,
  active,
  onClick,
}: {
  icon: React.ReactNode;
  label: string;
  active: boolean;
  onClick: () => void;
}) {
  return (
    <Box
      onClick={onClick}
      sx={(theme) => ({
        display: 'flex',
        alignItems: 'center',
        gap: 2,
        px: 2,
        height: 44,
        borderRadius: 2,
        cursor: 'pointer',
        bgcolor: active
          ? theme.palette.mode === 'light'
            ? 'primary.main'
            : 'primary.shades.select'
          : 'transparent',
        color: active
          ? theme.palette.mode === 'light'
            ? 'common.white'
            : 'primary.main'
          : 'text.primary',
        transition: 'all 0.15s ease',
        '&:hover': {
          bgcolor: active
            ? theme.palette.mode === 'light'
              ? 'primary.dark'
              : 'primary.shades.select'
            : 'action.hover',
        },
        mx: 1.5,
      })}
    >
      <Box
        sx={{
          color: active ? 'inherit' : 'action.active',
          display: 'flex',
          flexShrink: 0,
        }}
      >
        {icon}
      </Box>
      <Typography
        variant="body2"
        sx={{
          fontWeight: active ? 600 : 400,
          whiteSpace: 'nowrap',
          overflow: 'hidden',
          textOverflow: 'ellipsis',
          flex: 1,
        }}
      >
        {label}
      </Typography>
    </Box>
  );
}

export default function DashboardLayout() {
  const [collapsed, setCollapsed] = useState(true);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [hovered, setHovered] = useState(false);
  const { mode, toggleTheme } = useThemeMode();
  const navigate = useNavigate();
  const location = useLocation();

  const isActive = (path: string) => location.pathname === path;
  const sidebarWidth = collapsed ? COLLAPSED_WIDTH : EXPANDED_WIDTH;

  const renderNavItems = () =>
    NAV_ITEMS.map((item) =>
      collapsed ? (
        <NavItemCollapsed
          key={item.path}
          icon={item.icon}
          label={item.label}
          active={isActive(item.path)}
          onClick={() => { navigate(item.path); setMobileOpen(false); }}
        />
      ) : (
        <NavItemExpanded
          key={item.path}
          icon={item.icon}
          label={item.label}
          active={isActive(item.path)}
          onClick={() => { navigate(item.path); setMobileOpen(false); }}
        />
      ),
    );

  const sidebarContent = (
    <Box
      sx={{
        display: 'flex',
        flexDirection: 'column',
        height: '100%',
        bgcolor: 'background.paper',
        overflow: 'hidden',
      }}
    >
      {/* Header */}
      <Box
        sx={{
          height: 64,
          display: 'flex',
          alignItems: 'center',
          justifyContent: collapsed ? 'center' : 'flex-start',
          px: collapsed ? 0 : 2,
          position: 'relative',
          flexShrink: 0,
        }}
      >
        {/* GL logo when collapsed + not hovered */}
        {collapsed && (
          <Box
            sx={{
              position: 'absolute',
              inset: 0,
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              opacity: hovered ? 0 : 1,
              transition: 'opacity 0.2s ease',
              pointerEvents: hovered ? 'none' : 'auto',
            }}
          >
            <Box
              sx={{
                width: 36,
                height: 36,
                borderRadius: 2,
                bgcolor: 'primary.main',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
              }}
            >
              <Typography sx={{ color: 'common.white', fontWeight: 700, fontSize: '0.875rem', letterSpacing: '-0.02em' }}>
                GL
              </Typography>
            </Box>
          </Box>
        )}

        {/* Hamburger */}
        <Box
          sx={{
            opacity: collapsed ? (hovered ? 1 : 0) : 1,
            transition: 'opacity 0.2s ease',
            display: 'flex',
            ...(collapsed && !hovered && { pointerEvents: 'none' }),
          }}
        >
          <IconButton
            onClick={() => setCollapsed((prev) => !prev)}
            size="small"
            sx={{ color: 'text.secondary' }}
          >
            {collapsed ? <MenuIcon /> : <CloseIcon fontSize="small" />}
          </IconButton>
        </Box>

        {/* Brand when expanded */}
        {!collapsed && (
          <Box sx={{ ml: 1.5, display: 'flex', alignItems: 'center', gap: 1.5 }}>
            <Box
              sx={{
                width: 32,
                height: 32,
                borderRadius: 1.5,
                bgcolor: 'primary.main',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                flexShrink: 0,
              }}
            >
              <Typography sx={{ color: 'common.white', fontWeight: 700, fontSize: '0.75rem' }}>
                GL
              </Typography>
            </Box>
            <Box>
              <Typography variant="subtitle2" sx={{ fontWeight: 700, lineHeight: 1.2, fontSize: '0.8125rem' }}>
                Great Learning
              </Typography>
              <Typography variant="caption" color="text.secondary" sx={{ fontSize: '0.625rem', lineHeight: 1 }}>
                Design System
              </Typography>
            </Box>
          </Box>
        )}
      </Box>

      {/* Nav items */}
      <Box
        sx={{
          flex: 1,
          display: 'flex',
          flexDirection: 'column',
          gap: collapsed ? 0.5 : 0.25,
          pt: 2,
          alignItems: collapsed ? 'center' : 'stretch',
          overflowY: 'auto',
          overflowX: 'hidden',
        }}
      >
        {renderNavItems()}
      </Box>

      {/* Footer */}
      <Box
        sx={{
          display: 'flex',
          flexDirection: 'column',
          alignItems: collapsed ? 'center' : 'stretch',
          pb: 2,
          pt: 1.5,
          borderTop: 1,
          borderColor: 'divider',
        }}
      >
        {collapsed ? (
          <Tooltip title={mode === 'dark' ? 'Light mode' : 'Dark mode'} placement="right" arrow>
            <IconButton onClick={toggleTheme} size="small" sx={{ color: 'text.secondary' }}>
              {mode === 'dark' ? <Brightness7Icon fontSize="small" /> : <Brightness4Icon fontSize="small" />}
            </IconButton>
          </Tooltip>
        ) : (
          <Box
            onClick={toggleTheme}
            sx={{
              display: 'flex',
              alignItems: 'center',
              gap: 2,
              px: 2,
              height: 40,
              borderRadius: 2,
              cursor: 'pointer',
              color: 'text.secondary',
              mx: 1.5,
              transition: 'all 0.15s ease',
              '&:hover': { bgcolor: 'action.hover', color: 'text.primary' },
            }}
          >
            <Box sx={{ display: 'flex' }}>
              {mode === 'dark' ? <Brightness7Icon fontSize="small" /> : <Brightness4Icon fontSize="small" />}
            </Box>
            <Typography variant="body2" sx={{ fontSize: '0.8125rem' }}>
              {mode === 'dark' ? 'Light mode' : 'Dark mode'}
            </Typography>
          </Box>
        )}
      </Box>
    </Box>
  );

  return (
    <Box sx={{ display: 'flex', minHeight: '100vh' }}>
      {/* Desktop Sidebar */}
      <Box
        onMouseEnter={() => setHovered(true)}
        onMouseLeave={() => setHovered(false)}
        sx={{
          display: { xs: 'none', md: 'block' },
          width: sidebarWidth,
          minWidth: sidebarWidth,
          transition: TRANSITION,
          flexShrink: 0,
        }}
      >
        <Box
          sx={{
            position: 'fixed',
            top: 0,
            left: 0,
            bottom: 0,
            width: sidebarWidth,
            transition: TRANSITION,
            borderRight: 1,
            borderColor: 'divider',
            bgcolor: 'background.paper',
            zIndex: (theme) => theme.zIndex.drawer,
            overflowX: 'hidden',
          }}
        >
          {sidebarContent}
        </Box>
      </Box>

      {/* Mobile Drawer */}
      <Drawer
        variant="temporary"
        open={mobileOpen}
        onClose={() => setMobileOpen(false)}
        ModalProps={{ keepMounted: true }}
        sx={{
          display: { xs: 'block', md: 'none' },
          '& .MuiDrawer-paper': { boxSizing: 'border-box', width: EXPANDED_WIDTH },
        }}
      >
        {sidebarContent}
      </Drawer>

      {/* Mobile top bar */}
      <Box
        sx={{
          display: { xs: 'flex', md: 'none' },
          position: 'fixed',
          top: 0,
          left: 0,
          right: 0,
          height: 56,
          bgcolor: 'background.paper',
          borderBottom: 1,
          borderColor: 'divider',
          alignItems: 'center',
          px: 1.5,
          zIndex: (theme) => theme.zIndex.appBar,
          backdropFilter: 'blur(12px)',
        }}
      >
        <IconButton onClick={() => setMobileOpen(true)} size="small">
          <MenuIcon />
        </IconButton>
        <Box sx={{ ml: 1.5, display: 'flex', alignItems: 'center', gap: 1 }}>
          <Box
            sx={{
              width: 28,
              height: 28,
              borderRadius: 1,
              bgcolor: 'primary.main',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
            }}
          >
            <Typography sx={{ color: 'common.white', fontWeight: 700, fontSize: '0.6875rem' }}>
              GL
            </Typography>
          </Box>
          <Typography variant="subtitle2" sx={{ fontWeight: 700, fontSize: '0.875rem' }}>
            Great Learning
          </Typography>
        </Box>
      </Box>

      {/* Main Content */}
      <Box
        component="main"
        sx={{
          flexGrow: 1,
          bgcolor: 'background.default',
          minHeight: '100vh',
        }}
      >
        <Box sx={{ display: { xs: 'block', md: 'none' }, height: 56 }} />
        <Box sx={{ p: { xs: 3, md: 5 }, maxWidth: 1200, mx: 'auto' }}>
          <Outlet />
        </Box>
      </Box>
    </Box>
  );
}
