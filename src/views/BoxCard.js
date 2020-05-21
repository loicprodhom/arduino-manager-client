import { Card, CardContent, Typography } from "@material-ui/core";
import React from "react";

const BoxCard = (props) => {
  const box = props.box;
  console.log("Rendering:");
  console.log(props.box);
  return (
    <Card>
      <CardContent>
        <Typography variant="h6">{box.mac}</Typography>
        <Typography variant="h6">@{box.IP}</Typography>
      </CardContent>
    </Card>
  );
};

export default BoxCard;
