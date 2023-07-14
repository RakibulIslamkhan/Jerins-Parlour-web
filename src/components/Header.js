"use client";
import * as React from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import Menu from "@mui/material/Menu";
import MenuIcon from "@mui/icons-material/Menu";
import Container from "@mui/material/Container";
import Avatar from "@mui/material/Avatar";
import Button from "@mui/material/Button";
import Tooltip from "@mui/material/Tooltip";
import MenuItem from "@mui/material/MenuItem";
import AdbIcon from "@mui/icons-material/Adb";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { AuthContext } from "@/context/userContext";
import { useRouter } from "next/navigation";
import Error from "./Error";
import { useMediaQuery, useTheme } from "@mui/material";

const pages = ["Our Portfolio", "Our Team", "Contact Us"];
const settings = ["Dashboard"];

function ResponsiveAppBar() {
  const [anchorElNav, setAnchorElNav] = useState(null);
  const [anchorElUser, setAnchorElUser] = useState(null);
  const [open, setOpen] = useState(false);
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('sm'));
  const { user, logOutUser, error, setError } = React.useContext(AuthContext);
  const handleOpenNavMenu = (event) => {
    setAnchorElNav(event.currentTarget);
  };
  const handleOpenUserMenu = (event) => {
    setAnchorElUser(event.currentTarget);
  };
  const handleLogOut = () => {
    logOutUser()
      .then(() => {})
      .catch((error) => setError(error));
    setAnchorElUser(null);
  };
  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };

  const handleCloseUserMenu = () => {
    setAnchorElUser(null);
  };

  return (
    <AppBar position="static" sx={{ bgcolor: "#FFF8F5", color: "#000", boxShadow:'none' }}>
      {error && <Error open={open} error={error} setOpen={setOpen} />}
      <Container maxWidth="lg">
        <Toolbar disableGutters sx={{ justifyContent: "space-between" }}>
          <Box sx={{ display: "flex", alignItems: "center" }}>
            <Link href="/">
              <Image src={"logoTwo.svg"} width={128} height={48} alt="logo"/>
            </Link>
          </Box>

          <Box sx={{ flexGrow: 1, display: { xs: "flex", md: "none" }, justifyContent:{xs:'flex-end'} }}>
            <IconButton
              size="large"
              aria-label="account of current user"
              aria-controls="menu-appbar"
              aria-haspopup="true"
              onClick={handleOpenNavMenu}
              color="inherit"
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
                // width: isMobile ? '100%' : undefined,
                display: { xs: "block", md: "none" }, 
                '& .MuiMenu-paper': {
                  left:{xs:"0px !important",},
                  width:{xs:'100%'},
                  maxWidth:{xs:'100% !important'},
                  boxShadow:{xs:'none'} // Customize menu border radius
                },// Set 100% width on mobile view
              }}
            >
              {pages.map((page, index) => (
                <MenuItem key={index} onClick={handleCloseNavMenu} sx={{justifyContent:'center'}}>
                  <Typography textAlign="center" color="#000">
                    {page}
                  </Typography>
                </MenuItem>
              ))}
              {user?.email ? (
                <Box sx={{ alignItems: "center", display:'flex', justifyContent:'center' }}>
                  <IconButton onClick={handleOpenUserMenu} sx={{ p: 0 }}>
                    {user.photoURL ? <Avatar alt="User" src={user?.photoURL} /> : <Avatar alt="User" src={`https://robohash.org/${user.email}`} />}
                  </IconButton>
                  <Typography sx={{ ml: 2 }}>{user?.displayName}</Typography>
                </Box>
              ) : (
                  <Link
                    href="/login"
                    style={{ color: "#fff", textDecoration: "none" }}
                  >
                <Button variant="contained" sx={{ width: "100%" }}>
                    Login
                </Button>
                  </Link>
              )}
            </Menu>
          </Box>
          <Box sx={{ display: "flex", alignItems: "center" }}>
            <Box sx={{ flexGrow: 1, display: { xs: "none", md: "flex" } }}>
              <Button sx={{ my: 2, color: "#000", display: "block", mr: 1.5 }}>
                <Link href="/">Home</Link>
              </Button>
              {pages.map((page, index) => (
                <Button
                  key={index}
                  onClick={handleCloseNavMenu}
                  sx={{ my: 2, color: "#000", display: "block", mr: 1.5 }}
                >
                  <Link href={`/${page.replace(" ", "-")}`}>
                    {page.toLocaleLowerCase()}
                  </Link>
                </Button>
              ))}
            </Box>

            <Box sx={{ flexGrow: 0, }}>
              {/* <Tooltip> */}
              {user?.email ? (
                <Box sx={{ display: {xs:'none', md:"flex"}, alignItems: "center" }}>
                  <IconButton onClick={handleOpenUserMenu} sx={{ p: 0 }}>
                    {user.photoURL ? <Avatar alt="User" src={user?.photoURL} /> : <Avatar alt="User" src={`https://robohash.org/${user.email}`} />}
                  </IconButton>
                  <Typography sx={{ ml: 2 }}>{user?.displayName}</Typography>
                </Box>
              ) : (
                  <Link
                    href="/login"
                    style={{ color: "#fff", textDecoration: "none" }}
                  >
                <Button variant="contained" sx={{ width: "120px" ,display: {xs:'none', md:"flex"},}}>
                    Login
                </Button>
                  </Link>
              )}
              {/* </Tooltip> */}
              <Menu
                sx={{ mt: "45px",}}
                id="menu-appbar"
                anchorEl={anchorElUser}
                anchorOrigin={{
                  vertical: "top",
                  horizontal: "right",
                }}
                keepMounted
                transformOrigin={{
                  vertical: "top",
                  horizontal: "right",
                }}
                open={Boolean(anchorElUser)}
                onClose={handleCloseUserMenu}
              >
                {settings.map((setting, index) => (
                  <>
                    <MenuItem key={index} onClick={handleCloseUserMenu}>
                      <Link href={`/${setting.toLocaleLowerCase()}`}>
                        <Typography textAlign="center">{setting}</Typography>
                      </Link>
                    </MenuItem>
                  </>
                ))}
                <MenuItem onClick={handleLogOut}>Logout</MenuItem>
              </Menu>
            </Box>
          </Box>
        </Toolbar>
      </Container>
    </AppBar>
  );
}
export default ResponsiveAppBar;
