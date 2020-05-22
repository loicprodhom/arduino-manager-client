import {
  Card,
  CardContent,
  Typography,
  CardHeader,
  Avatar,
  CardActions,
  IconButton,
  makeStyles,
  Collapse,
} from "@material-ui/core";
import clsx from "clsx";
import ExpandMoreIcon from "@material-ui/icons/ExpandMore";
import React, { useState } from "react";
import UnknownData from "./UnknownBox/UnknownData";
import LCDBoxDataDisplay from "./LCDBoxComponents/LCDBoxDataDisplay";
import RelayBoxDataDisplay from "./RelayBoxComponents/RelayBoxDataDisplay";
import LCDBoxCommands from "./LCDBoxComponents/LCDBoxCommands";
import RelayBoxCommands from "./RelayBoxComponents/RelayBoxCommands";
import UnknownCommands from "./UnknownBox/UnknownCommands";

const useStyles = makeStyles((theme) => ({
  expand: {
    transform: "rotate(0deg)",
    marginLeft: "auto",
    transition: theme.transitions.create("transform", {
      duration: theme.transitions.duration.shortest,
    }),
  },
  expandOpen: {
    transform: "rotate(180deg)",
  },
}));

const BoxCard = (props) => {
  const box = props.box;
  const classes = useStyles();
  const [expanded, setExpanded] = useState(false);

  const handleExpandClick = () => {
    setExpanded(!expanded);
  };

  console.log(props.box);
  return (
    <Card>
      <CardHeader
        avatar={<Avatar>{`A${box.id}`}</Avatar>}
        title={`Arduino${box.id}`}
        subheader={`MAC: ${box.mac} IP: ${box.IP}`}
      />
      <CardContent>
        {box.type === "LCD" ? (
          <LCDBoxDataDisplay />
        ) : box.type === "Relay" ? (
          <RelayBoxDataDisplay />
        ) : (
          <UnknownData />
        )}
      </CardContent>
      <CardActions>
        <IconButton
          className={clsx(classes.expand, {
            [classes.expandOpen]: expanded,
          })}
          onClick={handleExpandClick}
          aria-expanded={expanded}
          aria-label="Show commands"
        >
          <ExpandMoreIcon />
        </IconButton>
      </CardActions>
      <Collapse in={expanded} timeout="auto" unmountOnExit>
        <CardContent>
          {box.type === "LCD" ? (
            <LCDBoxCommands />
          ) : box.type === "Relay" ? (
            <RelayBoxCommands />
          ) : (
            <UnknownCommands />
          )}
        </CardContent>
      </Collapse>
    </Card>
  );
};

export default BoxCard;
