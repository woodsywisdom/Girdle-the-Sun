import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { Container, Grid, Typography, Button } from '@material-ui/core';
import AddIcon from '@material-ui/icons/Add';
import { makeStyles } from '@material-ui/core/styles';

import CampaignCard from './CampaignCard';
import CampaignForm from './CampaignForm';
import { loadCampaigns } from '../../store/campaigns';


const useStyles = makeStyles({
  yourCampaignsHeader: {
    padding: '40px 0px',
  },
  addButton: {
    cursor: 'pointer',
    marginLeft: '40px',
  },
  campaignsContainer: {
    paddingTop: '6vh',
  }
})

const CampaignsPage = (props) => {
  const dispatch = useDispatch();
  const userId = props.match.params.userId
  const campaigns = useSelector(state => state.entities.campaigns);
  const classes = useStyles();

  const [formOpen, setFormOpen] = useState(false);

  const handleClick = (e) => {
    e.preventDefault();
    setFormOpen(!formOpen);
  }

  const dispatch = useDispatch();
  const classes = useStyles();
  const loginOpen = useSelector(state => state.ui.loginOpen);
  const errors = useSelector(state => state.errors);
  const [username1, setUsername1] = useState('');
  const [password1, setPassword1] = useState('');
  const [username2, setUsername2] = useState('');
  const [password2, setPassword2] = useState('');
  const [confirm, setConfirm] = useState('');

  useEffect(() => {
    return () => {
      dispatch(clearLoginErrors());
      dispatch(clearSignUpErrors());
    }
  }, [dispatch]);

  const changeUsername1 = (e) => setUsername1(e.target.value);

  const changePassword1 = (e) => setPassword1(e.target.value);

  const changeUsername2 = (e) => setUsername2(e.target.value);

  const changePassword2 = (e) => setPassword2(e.target.value);

  const changeConfirm = (e) => setConfirm(e.currentTarget.value);

  const demoLogin = (e) => dispatch(login('Ian', 'password'));

  const submitLogin = (e) => dispatch(login(username1, password1));

  const submitSignUp = (e) => dispatch(signUp(username2, password2, confirm));

  const handleClose = (e) => {
    setUsername1('');
    setPassword1('');
    setUsername2('');
    setPassword2('');
    setConfirm('');
    dispatch(clearLoginErrors());
    dispatch(clearSignUpErrors());
    dispatch(closeLogin());
  }


  return (
    <>
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

export default CampaignsPage;

//tbr