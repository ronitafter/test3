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
    backgroundColor: "#F5F5F5",
    color: "#A862CB",
    // backgroundColor: "#b2d1f7",
    // backgroundColor: "white",
  },
  form: {
    display: "flex",
    flexWrap: "wrap",
    justifyContent: "center",
    // backgroundColor: "#b2d1f7",
    backgroundColor: "F5F5F5",
  },
  fileInput: {
    width: "97%",
    margin: "10px 0",
  },
  buttonSubmit: {
    marginBottom: 10,
    backgroundColor: "#A862CB",
    color: "white",
  },
}));
