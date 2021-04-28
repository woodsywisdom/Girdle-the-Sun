  
import React, { useState } from 'react';
import { connect } from 'react-redux';
import { submitQuestion } from '../actions/question_actions';


const useStyles = makeStyles({
  formContainer: {
    display: 'flex',
    flexDirection: 'column',
    margin: '16px',
  },
  loginContainer: {
    alignItems: 'center',
    display: 'flex',
    flexDirection: 'column',
    padding: '16px 0px',
  },
  signUpContainer: {
    alignItems: 'center',
    display: 'flex',
    flexDirection: 'column',
    padding: '16px 0px',
  },
  inputField: {
    margin: '8px 20px',
  },
  errorList: {
    color: 'red',
  }
})

const Form = () => {
  const [ name, setName ] = useSate('');
  const [ text, setText ] = useState('');
  const [ repo, setRepo ] = useState('');
  const [ live, setLive ] = useState('');

  return (
    <>
      <input type='text' placeholder='name' onChange={() => setName()}>{name}</input>
      <input type='text' placeholder='text' onChange={() => setText()}>{text}</input>
      <input type='text' placeholder='repo' onChange={() => setRepo()}>{repo}</input>
      <input type='text' placeholder='live' onChange={() => setLive()}>{live}</input>
    </>
  )
}

const mdp = dispatch => ({
  submitQuestion: question => dispatch(submitQuestion(question))
})

export default connect(null, mdp)(Form);

//tbr