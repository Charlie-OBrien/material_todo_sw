import React from 'react';
import ReactDOM from 'react-dom';
import CssBaseline from '@material-ui/core/CssBaseline';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
//
import TaskForm from './TaskForm';
import TaskList from './TaskList';
import TodoState from './TodoState';

const useStyles = makeStyles((theme) => ({
  '@global': {
    ul: {
      margin: 0,
      padding: 0,
      listStyle: 'none',
    },
  },
  heroContent: {
    padding: theme.spacing(8, 0, 6),
  },
}));

const App = () => {
  const { todos, addTodo, deleteTodo } = TodoState([]);
  const classes = useStyles();

  return (
    <React.Fragment>
      <CssBaseline />      
        <Grid 
      container
      spacing={0}
      direction="column"
      alignItems="center"
      justify="center"
      className={classes.heroContent}>
        <Typography 
          component="h1" 
          variant="h2" 
          align="center" 
          color="textPrimary" 
          gutterBottom
        >
          TODOs
        </Typography>  
        <TaskForm
          saveTask={taskText => {
          const trimmedText = taskText.trim();

          if (trimmedText.length > 0) {
            addTodo(trimmedText);
          }
        }}
      />
      </Grid>
      <TaskList todos={todos} deleteTodo={deleteTodo} />    
    </React.Fragment>
  );
}
export default App;
const rootElement = document.getElementById('root');
ReactDOM.render(<App />, rootElement);