import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardActions from '@mui/material/CardActions';
import CardHeader from '@mui/material/CardHeader';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import Avatar from '@mui/material/Avatar';
import IconButton from '@mui/material/IconButton';
import MoreVertIcon from '@mui/icons-material/MoreVert';
import Grid from '@mui/material/Grid';
import ComponentSection from './ComponentSection';

export default function CardsShowcase() {
  return (
    <ComponentSection
      title="Cards"
      description="Cards use elevation={1} at rest, background.paper, borderRadius 4px, and padding via theme.spacing(3) or spacing(4)."
    >
      <Grid container spacing={4}>
        {/* Basic Card */}
        <Grid size={{ xs: 12, sm: 6, md: 4 }}>
          <Card>
            <CardContent sx={{ p: 3 }}>
              <Typography variant="h5" sx={{ mb: 1 }}>
                Basic Card
              </Typography>
              <Typography variant="body2" color="text.secondary">
                A simple card with elevation 1 (default). Uses theme spacing and typography tokens.
              </Typography>
            </CardContent>
            <CardActions>
              <Button size="small">Learn More</Button>
            </CardActions>
          </Card>
        </Grid>

        {/* Outlined Card */}
        <Grid size={{ xs: 12, sm: 6, md: 4 }}>
          <Card variant="outlined">
            <CardContent sx={{ p: 3 }}>
              <Typography variant="overline" color="text.secondary">
                Outlined
              </Typography>
              <Typography variant="h5" sx={{ mb: 1 }}>
                Outlined Card
              </Typography>
              <Typography variant="body2" color="text.secondary">
                Uses variant="outlined" with the Other/Outlined Border token for the border.
              </Typography>
            </CardContent>
            <CardActions>
              <Button size="small">Action</Button>
            </CardActions>
          </Card>
        </Grid>

        {/* Card with Header */}
        <Grid size={{ xs: 12, sm: 6, md: 4 }}>
          <Card>
            <CardHeader
              avatar={<Avatar sx={{ bgcolor: 'primary.main' }}>R</Avatar>}
              action={
                <IconButton>
                  <MoreVertIcon />
                </IconButton>
              }
              title="Card Header"
              subheader="April 9, 2026"
            />
            <CardContent>
              <Typography variant="body2" color="text.secondary">
                A card with CardHeader including avatar, title, subheader, and action icon.
              </Typography>
            </CardContent>
          </Card>
        </Grid>

        {/* Card with Media */}
        <Grid size={{ xs: 12, sm: 6, md: 4 }}>
          <Card>
            <CardMedia
              sx={{ height: 140, bgcolor: 'primary.light' }}
              title="Placeholder media"
            />
            <CardContent>
              <Typography variant="h5" sx={{ mb: 1 }}>
                Card with Media
              </Typography>
              <Typography variant="body2" color="text.secondary">
                CardMedia area using primary.light as a placeholder background.
              </Typography>
            </CardContent>
            <CardActions>
              <Button size="small">Share</Button>
              <Button size="small">Learn More</Button>
            </CardActions>
          </Card>
        </Grid>

        {/* Elevated Card */}
        <Grid size={{ xs: 12, sm: 6, md: 4 }}>
          <Card elevation={8}>
            <CardContent sx={{ p: 4 }}>
              <Typography variant="h5" sx={{ mb: 1 }}>
                Elevation 8
              </Typography>
              <Typography variant="body2" color="text.secondary">
                Higher elevation for popover-like cards. Typically used for menus and floating panels.
              </Typography>
            </CardContent>
          </Card>
        </Grid>

        {/* Interactive Card */}
        <Grid size={{ xs: 12, sm: 6, md: 4 }}>
          <Card
            sx={{
              cursor: 'pointer',
              transition: 'box-shadow 0.2s',
              '&:hover': { boxShadow: 4 },
            }}
          >
            <CardContent sx={{ p: 3 }}>
              <Box sx={{ display: 'flex', alignItems: 'center', gap: 2, mb: 2 }}>
                <Avatar sx={{ bgcolor: 'success.main' }}>+</Avatar>
                <Typography variant="h5">Interactive</Typography>
              </Box>
              <Typography variant="body2" color="text.secondary">
                Hover to see elevation transition from 1 to 4. Great for clickable list items.
              </Typography>
            </CardContent>
          </Card>
        </Grid>
      </Grid>
    </ComponentSection>
  );
}
