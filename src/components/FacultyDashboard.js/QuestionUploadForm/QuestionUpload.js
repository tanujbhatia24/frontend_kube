import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import TextField from "@material-ui/core/TextField";
import MenuItem from "@material-ui/core/MenuItem";
import { Button } from "@mui/material";
import axios from "axios"
const useStyles = makeStyles((theme) => ({
    root: {
        display: "flex",
        flexWrap: "wrap"
    },
    textField: {
        marginLeft: theme.spacing(1),
        marginRight: theme.spacing(1),
        width: "20ch"
    }
}));
const currencies = [
    {
        value: "beginner",
        label: "beginner"
    },
    {
        value: "intermediate",
        label: "intermediate"
    },

    {
        value: "advance",
        label: "advance"
    }
];

export default function QuestionUpload() {
    const classes = useStyles();
    const [value, setValue] = React.useState({});
    const [level, setLevel] = React.useState("")
    const [msg,setMsg]=React.useState("")
    const handleChange = (event) => {
        setValue((prev) => ({
            ...prev,
            [event.target.name]:event.target.value
      }))
        if (event.target.name === "tag_level") {
            setLevel(event.target.value);
      }
    };

    const handleClick = async() => {
        if (!value.question_title || !value.question || !value.tag_level || !value.skill_tag || !value.sub_tag) {
            alert("Please enter  * fields ")
            return;
        }
        let total_marks =parseInt(value.total_marks)
        let res = await axios.post("http://localhost:3000/uploadQuestion", {
            question_title: value.question_title,
            question: value.question,
            tag_level: value.tag_level,
            skill_tag: value.skill_tag,
            sub_tag: value.sub_tag,
            total_marks: total_marks
        })
        setMsg(res.data.message)
    }

    return (
        <div className={classes.root}>
            <div>
            <p style={{color:"red",fontWeight:"bold"}}>{ msg}</p>
                <TextField
                    id="standard-full-width"
                    label="Question Title"
                    style={{ margin: 8 }}
                    placeholder="Enter your Question title"
                    helperText="Ex :building static page with html"
                    fullWidth
                    required
                    onChange={handleChange}
                    name="question_title"
                    margin="normal"
                    InputLabelProps={{
                        shrink: true
                    }}
                />
                <TextField
                    label="Skill Tag"
                    id="margin-none"
                    name="skill_tag"
                    required
                    onChange={handleChange}
                    className={classes.textField}
                    helperText="Ex :HTML and CSS"
                />
                <TextField
                    label="Sub_tag"
                    id="margin-none"
                    name="sub_tag"
                    required
                    onChange={handleChange}
                    className={classes.textField}
                    helperText="ex : Flexbox in html"
                />
                <TextField
                    label="Total_marks"
                    id="margin-none"
                    name="total_marks"
                    required
                    onChange={handleChange}
                    className={classes.textField}
                    helperText="ex : 20"
                />
            </div>
            <div>
                <TextField
                    id="filled-full-width"
                    label="Problem Statement"
                    style={{ margin: 8 }}
                    placeholder="Write your question problem statement"
                    helperText="Full width!"
                    fullWidth
                    multiline
                    minRows={5}
                    required
                    name="question"
                    onChange={handleChange}
                    margin="normal"
                    InputLabelProps={{
                        shrink: true
                    }}
                    variant="filled"
                />
                <TextField
                    id="standard-select-currency"
                    select
                    label="Tag_level"
                    name="tag_level"
                    value={level}
                    required
                    onChange={handleChange}
                    className={classes.textField}
                    helperText="Please select the skill level"
                >
                    {currencies.map((option) => (
                        <MenuItem key={option.value} value={option.value}>
                            {option.label}
                        </MenuItem>
                    ))}
                </TextField>
                <TextField
                    id="filled-full-width"
                    label="Solution Upload"
                    style={{ margin: 8 }}
                    placeholder="Provide Solution here"
                    helperText="ex : you give link to github also"
                    fullWidth
                    multiline
                    minRows={3}
                    name="question"
                    onChange={handleChange}
                    margin="normal"
                    
                    InputLabelProps={{
                        shrink: true
                    }}
                    variant="filled"
                />
                <Button variant="contained" className={classes.textField} onClick={handleClick}>
                    Submit
                </Button>
            </div>
        </div>
    );
}
