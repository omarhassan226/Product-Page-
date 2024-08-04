import React, { useState } from "react";
import {
    Box,
    Button,
    Typography,
    IconButton,
    Paper
} from "@mui/material";
import RemoveIcon from "@mui/icons-material/Remove";
import AddIcon from "@mui/icons-material/Add";
import { styled } from "@mui/system";
import { colors } from "../../../../../colors/colors";
import KeyFeatures from "./components/KeyFeatures";
import './style.css';

const Header = styled(Box)({
    position: "relative",
    padding: "20px",
    backgroundColor: colors.fairos,
    color: "white",
    textAlign: "center",
    overflow: "hidden",
    '&:hover': { animation: "fire 1s linear infinite" },
    "& h1": {
        position: "relative",
        zIndex: 2,
        margin: 0
    }
});

const Content = styled(Box)({
    padding: "20px"
});

const LastSection = () => {
    const [quantity, setQuantity] = useState(1);

    const handleIncrement = () => {
        setQuantity(quantity + 1);
    };

    const handleDecrement = () => {
        if (quantity > 0) setQuantity(quantity - 1);
    };

    return (
        <>
            <Header className="header slide-in-left3" sx={{ marginBottom: "10px", borderRadius: "10px", position: 'relative', cursor: 'pointer', boxShadow: '0px 4px 8px rgba(0, 0, 0, 0.3)' }}>
                <img width={40} className="fire" src="fire10.png" alt="" />
                <img width={60} className="fire1" src="fire10.png" alt="" style={{ position: 'absolute', left: '0', bottom: '0' }} />
                <img width={60} className="fire2" src="fire10.png" alt="" style={{ position: 'absolute', right: '0', bottom: '0' }} />
                <Typography variant="h6" sx={{ zIndex: 50 }}>Get 20% OFF Mega Sale</Typography>
            </Header>
            <Box
                sx={{
                    backgroundColor: "white",
                    borderRadius: 5,
                    boxShadow: 3,
                    display: "flex",
                    flexDirection: "column",
                    marginTop: '15px'
                }}
                className="slide-in-left"
            >
                <Content>
                    <Typography variant="h6" gutterBottom>
                        Finalize your order
                    </Typography>
                    <Box
                        component="img"
                        src="summer6.avif"
                        alt="T-shirt"
                        sx={{ width: "100%", cursor: 'pointer' }}
                    />
                    <Typography variant="body1">Selected size: <span style={{ fontWeight: 'bold' }}>L (Large)</span> </Typography>
                    <Typography variant="body1" component="label" htmlFor="quantity">
                        Quantity
                    </Typography>
                    <Box
                        sx={{
                            display: "flex",
                            justifyContent: "space-between",
                            alignItems: "center",
                        }}
                    >
                        <Paper
                            component="form"
                            sx={{ display: "flex", alignItems: "center", width: 100 }}
                        >
                            <IconButton onClick={handleDecrement}>
                                <RemoveIcon />
                            </IconButton>
                            <Box
                                sx={{ textAlign: "center", width: 50 }}
                            >{quantity}</Box>
                            <IconButton onClick={handleIncrement}>
                                <AddIcon />
                            </IconButton>
                        </Paper>
                        <Typography variant="body2">Stock: <span style={{ color: colors.green, fontWeight: 'bold' }}>30</span> </Typography>
                    </Box>
                    <Typography
                        sx={{
                            display: "flex",
                            justifyContent: "space-between",
                            alignItems: "center"
                        }}
                    >
                        <span style={{ fontSize: "20px" }}>Total Price:</span>{" "}
                        <span style={{ fontWeight: "bold", fontSize: "24px" }}>100$</span>
                    </Typography>
                    <Button
                        variant="contained"
                        color="primary"
                        fullWidth
                        sx={{
                            mt: 1,
                            backgroundColor: colors.green,
                            "&:hover": { backgroundColor: colors.darkBlue }
                        }}
                    >
                        Buy now
                    </Button>
                    <Button
                        variant="outlined"
                        color="primary"
                        fullWidth
                        sx={{
                            mt: 1,
                            border: `1px solid ${colors.green}`,
                            borderRadius: "5px",
                            color: colors.green,
                            backgroundColor: "white",
                            "&:hover": {
                                borderColor: "transparent",
                                backgroundColor: colors.darkBlue,
                                color: colors.white
                            }
                        }}
                    >
                        Add to Bag
                    </Button>
                </Content>
            </Box>
            <Box className="slide-in-left">
            <KeyFeatures  />
            </Box>
        </>
    );
};

export default LastSection;
