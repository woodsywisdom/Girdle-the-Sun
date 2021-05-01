import React from 'react';
import { useDispatch } from 'react-redux';

import { Grid, Button, Card, Typography, List, ListItem, ListItemText, CardActions } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import DeleteIcon from '@material-ui/icons/Delete';

import { deleteCampaign } from '../../store/campaigns';


const useStyles = makeStyles(theme => ({
  toolbar: {
    height: "6vh",
    justifyContent: "space-between",
    alignItems: 'center',
  },
  appBar: {
    height: "6vh",
    zIndex: theme.zIndex.drawer + 1,
  },
  logoButton: {
    cursor: 'pointer',
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
      <Dialog open={tagToEdit.id} onClose={closeForm} >
        <Card >
          <CardContent display="flex" flexDirections="column" alignItems="center" >

            <Typography className={classes.title} variant='h5'>Edit Tag - {tagToEdit.name}</Typography>
            {/* <TextField
              defaultValue={tagToEdit.name}
              value={newName}
              onChange={changeName}
              label='New Tag Name' /> */}
            <Select
              defaultValue={tagToEdit.category_id}
              value={newCategoryId}
              onChange={changeId}
            >
              {/* <option value={tagToEdit.category_id}>{currentCategory.name}</option> */}
              {categories.map(category => <option key={category.id} value={category.id}>{category.name}</option>)}
            </Select>

          </CardContent>
          <CardActions>
            <Button onClick={handleSave} >Save</Button>
            <Button onClick={closeForm}>Cancel</Button>
          </CardActions>
        </Card>
      </Dialog>
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

export default CampaignCard;


//tbr