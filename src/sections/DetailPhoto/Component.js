import React, { useEffect } from "react";
import useStyles from "./styles";
import moment from "moment";

import { Grid } from "@material-ui/core";

import Image from "material-ui-image";

import { Container, Typography, Dialog } from "@material-ui/core";

// import { useHistory } from "react-router-dom";

function DetailPhoto({ photoProps, isVisible, onClose, animalType }) {
  // const history = useHistory();
  const classes = useStyles();
  useEffect(() => {}, []);
  // console.log(photoProps);

  return (
    <Container className={classes.root}>
      <Dialog open={isVisible} onClose={onClose} fullWidth>
        <Image
          src={
            "https://the-next-project.my.id/storage/uploaded_images/" +
            animalType +
            "/" +
            photoProps.images
          }
          cover
        />
        <Grid container style={{ marginLeft: "10px", overflow: "hidden" }}>
          <Grid item xs={12}>
            <Typography>Image Title : {photoProps.image_title} </Typography>
          </Grid>
          <Grid item xs={12}>
            <Typography>Description : {photoProps.description}</Typography>
          </Grid>
          <Grid item xs={12}>
            <Typography>
              Contributor Name : {photoProps.contributor_name}
            </Typography>
          </Grid>
          <Grid item xs={12}>
            <Typography>
              Upload Date : {moment(photoProps.uploadDate).format("LLL")}
            </Typography>
          </Grid>
        </Grid>
      </Dialog>
    </Container>
  );
}

export default DetailPhoto;
