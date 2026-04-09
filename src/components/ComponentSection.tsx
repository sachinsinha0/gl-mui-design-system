import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import type { ReactNode } from 'react';

interface ComponentSectionProps {
  title: string;
  description?: string;
  children: ReactNode;
}

export default function ComponentSection({ title, description, children }: ComponentSectionProps) {
  return (
    <Box
      sx={{ mb: 8, scrollMarginTop: 60 }}
      id={title.toLowerCase().replace(/[\s,&]+/g, '-')}
    >
      {/* Section header */}
      <Box sx={{ mb: 4 }}>
        <Typography
          variant="h3"
          sx={{
            fontWeight: 700,
            letterSpacing: '-0.3px',
            mb: description ? 1 : 0,
          }}
        >
          {title}
        </Typography>
        {description && (
          <Typography
            variant="body2"
            color="text.secondary"
            sx={{ maxWidth: 600, lineHeight: 1.7 }}
          >
            {description}
          </Typography>
        )}
      </Box>

      {/* Content */}
      <Box
        sx={(theme) => ({
          p: { xs: 3, md: 4 },
          borderRadius: 3,
          bgcolor: theme.palette.mode === 'light' ? 'background.paper' : 'rgba(255,255,255,0.02)',
          border: '1px solid',
          borderColor: 'divider',
        })}
      >
        {children}
      </Box>
    </Box>
  );
}
