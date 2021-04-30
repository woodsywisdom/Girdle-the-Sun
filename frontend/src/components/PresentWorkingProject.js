  
import React from 'react';
import { useSelector } from 'react-redux';

import { Box } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';

import TagNotes from './TagNotes';


const useStyles = makeStyles(theme => ({
  corkboard: {
    flexDirection: 'row',
  }
}));

const CorkBoard = () => {
  const classes = useStyles();
  const pinnedTags = useSelector(state => state.ui.pinnedTags);


  return (
    <>
      <Box className={classes.corkboard} display='flex'>
        {pinnedTags.map((tag, index) => <TagNotes key={index} position={index} tag={tag} />)}
      </Box>
      <CampaignForm open={formOpen} />
      <Container className={classes.campaignsContainer}>
        <Typography className={classes.yourCampaignsHeader} variant='h4'>
          Your Campaigns
          <Button className={classes.addButton} variant='contained' onClick={handleClick}>
            <AddIcon />
          </Button>

        </Typography>
        <Grid container spacing={3} >
          {campaigns ? Object.values(campaigns).map(campaign => {
            return (
              <CampaignCard
                key={campaign.id}
                campaign={campaign}
              />
            );
          }) : <></>}
        </Grid>
        {/* <List>
            <ListItem>
              <ListItemText>
                <Typography variant='button'>{title}</Typography>
              </ListItemText>
            </ListItem>
            <ListItem>
              <ListItemText>
                <Typography variant='caption'>{description}</Typography>
              </ListItemText>
            </ListItem>
          </List>
          <CardActions className={classes.cardActions}>
            <Button onClick={handleDelete}>
              <DeleteIcon />
            </Button>
          </CardActions>
        </Card>
      </Grid> */}
      </Container>
    </>
  );
}

export default CorkBoard;

//tbr