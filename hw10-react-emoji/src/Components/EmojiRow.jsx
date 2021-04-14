import React from 'react';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import Divider from '@material-ui/core/Divider';
import './EmojiRow.css'

export default function EmojiRow(props) {
  return (
    <>
      <ListItem button>
        <ListItemIcon>
          <img src={`//cdn.jsdelivr.net/emojione/assets/png/${props.symbol.codePointAt(0).toString(16)}.png`} alt="" />
        </ListItemIcon>
        <ListItemText primary={props.title} />
      </ListItem>
      <Divider />
    </>
  )
}
