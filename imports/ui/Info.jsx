import React from "react";
import { useFind, useSubscribe } from "meteor/react-meteor-data";
import { LinksCollection } from "../api/links";
import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import OpenInNewIcon from "@mui/icons-material/OpenInNew";

/**
 * Diese Komponente zeigt, wie der Data Tracker Datensätze aus
 * der MongoDB holt und aktuell hält.
 *
 * Hat nichts mit SQL zu tun.
 * @returns Komponente
 */
export const Info = () => {
  const isLoading = useSubscribe("links");
  const links = useFind(() => LinksCollection.find());

  if (isLoading()) {
    return <div>Loading...</div>;
  }

  return (
    <Grid container>
      <Grid item xs={12}>
        <Typography variant="h2">Learn Meteor!</Typography>
      </Grid>
      <Grid item xs={12}>
        <List>
          {links.map((link) => (
            <ListItem key={link._id}>
              <ListItemIcon>
                <OpenInNewIcon />
              </ListItemIcon>
              <ListItemButton href={link.url} target="_blank">
                <ListItemText primary={link.title} secondary={link.url} />
              </ListItemButton>
            </ListItem>
          ))}
        </List>
      </Grid>
    </Grid>
  );
};
