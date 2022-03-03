import React, { useState, useEffect } from "react";

import { Grid, withStyles } from "@material-ui/core";
import { compose } from "recompose";
import ReactMarkdown from "react-markdown";

const useStyles = () => ({});

const TechStack = ({ classes, markdown }) => {
    const [myMarkdown, setMyMarkdown] = useState(null);

    useEffect(() => {
        const fetch = async () => {
            const file = await import(`../../blog/files/${markdown}.md`);
            const response = await fetch(file.default);
            const text = await response.text();

            setMyMarkdown({
                md: text,
            });
        };
        fetch();
    }, []);
    console.log(markdown);

    return <Grid container display="flex" justifyContent="center"></Grid>;
};

export default compose(withStyles(useStyles))(TechStack);
