import { makeStyles } from "@material-ui/core/styles";

export default makeStyles((theme) => ({
  root: {
    "& .MuiTextField-root": {
      margin: theme.spacing(1),
      backgroundColor: "white",
    },
  },
  paper: {
    padding: theme.spacing(2),
    // backgroundColor: "#e6f0fb",
    backgroundColor: "#b2d1f7",
  },
  form: {
    display: "flex",
    flexWrap: "wrap",
    justifyContent: "center",
    backgroundColor: "#b2d1f7",
  },
  fileInput: {
    width: "97%",
    margin: "10px 0",
  },
  buttonSubmit: {
    marginBottom: 10,
    backgroundColor: "#6b96c9",
  },
}));
