import * as React from "react";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import AppBar from "@mui/material/AppBar";
import InstagramIcon from "@mui/icons-material/Instagram";
import TelegramIcon from "@mui/icons-material/Telegram";
import WhatsAppIcon from "@mui/icons-material/WhatsApp";
import YouTubeIcon from "@mui/icons-material/YouTube";
import "./App.css";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import Menu from "@mui/material/Menu";
import MenuIcon from "@mui/icons-material/Menu";
import Container from "@mui/material/Container";
import Button from "@mui/material/Button";
import Tooltip from "@mui/material/Tooltip";
import MenuItem from "@mui/material/MenuItem";
import LeaderboardIcon from "@mui/icons-material/Leaderboard";
import 'typeface-roboto'
import "@fontsource/concert-one";
import 'typeface-yeseva-one'
import Home from "./Home";
import PollList from "./PollList";
import PollPage from "./PollPage";
import PollCreate from "./PollCreate";
import Login from "./Login";



const App = () => {
  const [anchorElNav, setAnchorElNav] = React.useState(null);

  const handleOpenNavMenu = (event) => {
    setAnchorElNav(event.currentTarget);
  };

  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };

  return (
    <Router>
    <AppBar position="static" style={{ backgroundColor: "white" }}>
      <Container maxWidth="xl">
        <Toolbar disableGutters>
          <LeaderboardIcon
            style={{ color: "black" }}
            sx={{ fontSize: 40, display: { xs: "none", md: "flex" }, mr: 1 }}
          />
          <Typography
            variant="h6"
            noWrap
            component="a"
            href="/"
            sx={{
              mr: 2,
              display: { xs: "none", md: "flex" },
              fontFamily: "yeseva one",
              mt: 1,
              fontWeight: 700,
              letterSpacing: ".3rem",
              color: "black",
              textDecoration: "none",
            }}
          >
           
            <Link style={{ textDecoration: "none",color: "black", fontSize:"28px"}} to="/" className="title">
              Easy Poll
            </Link>
          </Typography>

          <Box sx={{ flexGrow: 1, display: { xs: "flex", md: "none" } }}>
            <IconButton
              size="large"
              aria-label="account of current user"
              aria-controls="menu-appbar"
              aria-haspopup="true"
              onClick={handleOpenNavMenu}
              style={{ color: "black" }}
            >
              <MenuIcon />
            </IconButton>
            <Menu
              id="menu-appbar"
              anchorEl={anchorElNav}
              anchorOrigin={{
                vertical: "bottom",
                horizontal: "left",
              }}
              keepMounted
              transformOrigin={{
                vertical: "top",
                horizontal: "left",
              }}
              open={Boolean(anchorElNav)}
              onClose={handleCloseNavMenu}
              sx={{
                display: { xs: "block", md: "none" },
              }}
            >
              <MenuItem onClick={handleCloseNavMenu}>
                <div
                  style={{ display: "block" }}
                  textAlign="center"
                  color="black"
                >
                  <Link style={{ textDecoration: "none",color: "black", fontFamily:"roboto"}} to="/PollList" className="content-name">
                    Manage Polls
                  </Link>
                </div>
              </MenuItem>
              <MenuItem onClick={handleCloseNavMenu}>
                <div
                  style={{ display: "block" }}
                  textAlign="center"
                  color="black"
                >
                  <Link style={{ textDecoration: "none",color: "black", fontFamily:"roboto"}} to="/PollPage" className="content-name">
                    Results
                  </Link>
                </div>
              </MenuItem>
              <MenuItem onClick={handleCloseNavMenu}>
                <div
                  style={{ display: "block" }}
                  textAlign="center"
                  color="black"
                >
                  <Link style={{ textDecoration: "none",color: "black", fontFamily:"roboto"}} to="/PollList" className="content-name">
                    Poll List
                  </Link>
                </div>
              </MenuItem>

              <hr />
              <Link style={{ textDecoration: "none", fontFamily:"roboto"}} to="/Login">
                <Button variant="contained" sx={{ mt: 1, ml: "24px", mb: 2 }}>
                  Log in
                </Button>
              </Link>
            </Menu>
          </Box>

          <LeaderboardIcon
            style={{ color: "black" }}
            sx={{ fontSize: 24, display: { xs: "flex", md: "none" }}}
          />

          <Typography
            noWrap
            component="a"
            href=""
            sx={{
              display: { xs: "flex", md: "none" },
              flexGrow: 1,
              fontFamily: "yeseva one",
              fontWeight: 700,
              color: "inherit",
              textDecoration: "none",
              ml:1
            }}
          >
            <Link style={{ textDecoration: "none",color: "black", fontSize:"24px" }} to="/" className="title">
              Easy Poll
            </Link>
          </Typography>
          <Box sx={{ flexGrow: 0 }}>
            <Tooltip title="Create a new poll">
              <Link style={{ textDecoration: "none",color: "blue", fontFamily:"roboto"}} to="/PollCreate">
                <Button
                  variant="outlined"
                  sx={{
                    display: { xs: "flex", md: "none" },
                    pr: "2px",
                    pl: "2px",
                  }}
                >
                  +
                </Button>
              </Link>
            </Tooltip>
          </Box>

          <Box
            sx={{ mt: 1,flexGrow: 1, display: { xs: "none", md: "inline-block" } }}
          >
            <Button sx={{ ml: 4 }} onClick={handleCloseNavMenu}>
              <Link style={{ textDecoration: "none",color: "black", fontFamily:"roboto"}} to="/PollList" className="content-name">
                Manage Polls
              </Link>
            </Button>
            <Button sx={{ ml: 2 }} onClick={handleCloseNavMenu}>
              <Link style={{ textDecoration: "none",color: "black", fontFamily:"roboto"}} to="/PollPage" className="content-name">
                Results
              </Link>
            </Button>
            <Button sx={{ ml: 2 }} onClick={handleCloseNavMenu}>
              <Link style={{ textDecoration: "none",color: "black", fontFamily:"roboto"}}to="/PollList" className="content-name">
                Poll List
              </Link>
            </Button>
            <Link style={{ textDecoration: "none",color: "white", fontFamily:"roboto"}} to="/Login">
              <Button variant="contained" sx={{ ml: 4 }}>
                Log in
              </Button>
            </Link>
          </Box>

          <Box sx={{ flexGrow: 0 }}>
            <Tooltip title="Create a new poll">
              <Link style={{ textDecoration: "none",color: "blue", fontFamily:"roboto"}} to="/PollCreate">
                <Button
                  variant="outlined"
                  sx={{mt:1,
                    display: { xs: "none", md: "inline-block" },
                    paddingRight: "16px",
                  }}
                >
                  Create +
                </Button>
              </Link>
            </Tooltip>
          </Box>
        </Toolbar>
      </Container>
    </AppBar>
    <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/PollList" element={<PollList />} />
        <Route path="/PollPage" element={<PollPage />} />
        <Route path="/PollCreate" element={<PollCreate />} />
        <Route path="/Login" element={<Login />} />
      </Routes>

      <div className="footer">
   
        <div className="icon-connection">
          <InstagramIcon sx={{ marginRight: "16px" }} />
          <TelegramIcon sx={{ marginRight: "16px" }} />
          <WhatsAppIcon sx={{ marginRight: "16px" }} />
          <YouTubeIcon sx={{ marginRight: "16px" }} />
        </div>
        <div className="information">
          <div className="us">
            <p>َAbout us</p>
            <p>Contact Us</p>
            <p>Help center</p>
          </div>
          <div className="address">
            <b>Address:</b>
            <span>
              101 Independence Avenue, S.E. Washington, D.C. 20559-6000
            </span>
            <br></br>
            <b>Telephone:</b>
            <span>(1 202) 707 3000</span>
          </div>
        </div>
      </div>
    </Router>
  );
};
export default App;
