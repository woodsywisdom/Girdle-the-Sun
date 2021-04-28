import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { Button, Card, CardActions, CardContent, Dialog, Select, Typography } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';

import { setTagToEdit } from '../../store/ui';
import { recategorizeTag } from '../../store/tags';

const useStyles = makeStyles({
  title: {
    padding: "16px",
  }
})


const TagEditForm = () => {
  const dispatch = useDispatch();
  const classes = useStyles();
  const tagToEdit = useSelector(state => state.ui.tagToEdit);
  const categories = useSelector(state => state.entities.categories)
  // const currentCategory = categories[tagToEdit.category_id - 1];
  // const [newName, setNewName] = useState(tagToEdit.name);
  const [newCategoryId, setNewCategoryId] = useState(tagToEdit.category_id);

  useEffect(() => {
    // setNewName(tagToEdit.name);
    setNewCategoryId(tagToEdit.category_id);
  }, [dispatch, tagToEdit]);

  // const changeName = (e) => {
  //   setNewName(e.currentTarget.value);
  // }

  const changeId = (e) => {
    setNewCategoryId(e.target.value);
  }

  const closeForm = (e) => {
    dispatch(setTagToEdit({}));
  }

  const handleSave = (e) => {
    dispatch(recategorizeTag(tagToEdit, newCategoryId));
    dispatch(setTagToEdit({}));
  }

  return (
    <>
      <AppBar className={classes.appBar} position='fixed' >
        <Toolbar display='flex' variant="dense" className={classes.toolbar} >
          <Box className={classes.logoButton} onClick={logoClick} >
            <Typography variant='button'>LoreKeeper</Typography>
          </Box>
          <Box>
            {currentUser.id ? (
              <>
                <Button onClick={openCampaigns} endIcon={<ExpandMoreIcon />}>
                  {currentCampaign.title ? currentCampaign.title
                    : <Typography variant='button'>Select a Campaign!</Typography>}
                </Button>
                <Menu
                  anchorEl={anchorEl}
                  keepMounted
                  onClose={closeCampaigns}
                  open={!!anchorEl}
                >
                  {campaigns ? Object.values(campaigns).map((campaign) => (
                    <MenuItem key={campaign.id} value={campaign.id} onClick={campaignClick} >
                      {campaign.title}
                    </MenuItem>
                  )) : null}
                </Menu>
              </>) : null}
          </Box>
          <Box>
            {currentUser.is_authenticated ?
              <Button variant='outlined' onClick={handleLogout}>Logout</Button>
              : <Button variant='outlined' onClick={handleLogin}>Login</Button>
            }
          </Box>
        </Toolbar>
      </AppBar>
    </>
  );
};


export default TagEditForm;

//tbr