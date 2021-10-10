import React, { useState, useEffect } from 'react';
import Box from '@mui/material/Box';
import {TextField, IconButton} from '@mui/material/';
import { makeStyles } from '@mui/styles';
import QRCode from 'qrcode.react';
import SendIcon from '@mui/icons-material/Send';

const useStyles = makeStyles({
  container: {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    padding: 10,
    // color: (props) => props.color,
  },
  input: {
    display: 'flex',
    justifyContent: 'center',
  },
  textFeild: {
    margin: "10px !important",
    width: '-webkit-fill-available'
  }
});
function MainContent(props) {
    const classes = useStyles(props);
    const [QRCodeData, setQRCodeData] = useState('');
    const [inputUrl, setInputUrl] = useState('')
    
    const updateInputUrl = (event) => {
        setInputUrl(event.target.value)
        if(event.target.value === ''){
            setQRCodeData('')
        }
    }
    const handleClick = () => {
        setQRCodeData(inputUrl)
    }
console.log(QRCodeData)
    return (
        <Box className={classes.container}>
            <Box className={classes.input}>
                <TextField
                    className={classes.textFeild}
                    required
                    variant="outlined"
                    id="outlined-required"
                    label="URL"
                    value={inputUrl}
                    onChange={updateInputUrl}
                    />
                    <IconButton
                        color="primary"
                        onClick={handleClick}
                        variant="contained"
                        >
                        <SendIcon />
                    </IconButton>
                </Box>
                {QRCodeData && <Box className={classes.qrcodeContainer}>
                    <QRCode value={QRCodeData} size={148} level={'M'} />
                </Box>}
        </Box>
    );
}

export default MainContent;
