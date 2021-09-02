import React from 'react';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemSecondaryAction from '@material-ui/core/ListItemSecondaryAction';
import ListItemText from '@material-ui/core/ListItemText';
import Checkbox from '@material-ui/core/Checkbox';
import IconButton from '@material-ui/core/IconButton';
import DeleteIcon from '@material-ui/icons/Delete';
import Tooltip from '@material-ui/core/Tooltip';
import { Typography } from '@material-ui/core';

const TaskList = ({ todos, deleteTodo }) => (
  <React.Fragment>
          <Typography 
          component="h3" 
          variant="h4" 
          align="center" 
          color="textPrimary" 
          gutterBottom
        >
          Tasks
        </Typography>
        <Typography 
          
          variant="subtitle1" 
          align="center" 
          color="secondary" 
          gutterBottom
        >
          To Do
        </Typography>    
  <List> 
    {todos.map((todo, index) => (
      <ListItem key={index.toString()} dense button>
        <Checkbox tabIndex={-1} disableRipple />
        <ListItemText primary={todo} />
        <ListItemSecondaryAction>
          <Tooltip
            title="Delete"
          >
          <IconButton
            aria-label="Delete"
            onClick={() => {
              deleteTodo(index);
            }}
          >
            <DeleteIcon />
          </IconButton>
          </Tooltip>
        </ListItemSecondaryAction>
      </ListItem>
    ))}
  </List>
  </React.Fragment>
);

export default TaskList;
