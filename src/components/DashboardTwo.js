"use client";
import * as React from "react";
import { styled, useTheme } from "@mui/material/styles";
import Box from "@mui/material/Box";
import MuiDrawer from "@mui/material/Drawer";
import MuiAppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import List from "@mui/material/List";
import CssBaseline from "@mui/material/CssBaseline";
import Typography from "@mui/material/Typography";
import IconButton from "@mui/material/IconButton";
import MenuIcon from "@mui/icons-material/Menu";
import ChevronLeftIcon from "@mui/icons-material/ChevronLeft";
import ChevronRightIcon from "@mui/icons-material/ChevronRight";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import {
  RateReview,
  ShoppingBag,
  ShoppingCart,
  PersonAddAlt,
  Add
} from "@mui/icons-material";
import Link from "next/link";
import Image from "next/image";
import { AuthContext } from "@/context/userContext";
import BookBar from "./BookBar";
import ReviewBar from "./ReviewBar";
import BookListBar from "./BookListBar";
import OrderListBar from "./OrderListBar";
import AdminBar from "./AdminBar";
import AddService from "./AddService";
const drawerWidth = 240;

const openedMixin = (theme) => ({
  width: drawerWidth,
  transition: theme.transitions.create("width", {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.enteringScreen,
  }),
  overflowX: "hidden",
});

const closedMixin = (theme) => ({
  transition: theme.transitions.create("width", {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.leavingScreen,
  }),
  overflowX: "hidden",
  width: `calc(${theme.spacing(7)} + 1px)`,
  [theme.breakpoints.up("sm")]: {
    width: `calc(${theme.spacing(8)} + 1px)`,
  },
});

const DrawerHeader = styled("div")(({ theme }) => ({
  display: "flex",
  alignItems: "center",
  justifyContent: "space-between",
  padding: theme.spacing(0, 1),
  // necessary for content to be below app bar
  ...theme.mixins.toolbar,
}));

const AppBar = styled(MuiAppBar, {
  shouldForwardProp: (prop) => prop !== "open",
})(({ theme, open }) => ({
  zIndex: theme.zIndex.drawer + 1,
  boxShadow:theme.shadows[3],
  transition: theme.transitions.create(["width", "margin"], {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.leavingScreen,
  }),
  ...(open && {
    marginLeft: drawerWidth,
    width: `calc(100% - ${drawerWidth}px)`,
    transition: theme.transitions.create(["width", "margin"], {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.enteringScreen,
    }),
  }),
}));

const Drawer = styled(MuiDrawer, {
  shouldForwardProp: (prop) => prop !== "open",
})(({ theme, open }) => ({
  width: drawerWidth,
  flexShrink: 0,
  whiteSpace: "nowrap",
  boxSizing: "border-box",
  ...(open && {
    ...openedMixin(theme),
    "& .MuiDrawer-paper": openedMixin(theme),
  }),
  ...(!open && {
    ...closedMixin(theme),
    "& .MuiDrawer-paper": closedMixin(theme),
  }),
}));

function MiniDrawer() {
  const theme = useTheme();
  const [open, setOpen] = React.useState(true);
  const { user, admin } = React.useContext(AuthContext);
  const [activePage, setActivePage] = React.useState();
  React.useEffect(() => {
    if (admin) {
      setActivePage('Order List');
    } else {
      setActivePage('Book');
    }
  }, [admin]);
  const handlePageClick = (page) => {
    setActivePage(page);
  };
  const clientList = [
    {
      name: "Book",
      icon: <ShoppingCart />,
      component: <BookBar />,
    },
    {
      name: "Booking List",
      icon: <ShoppingBag />,
      component: <BookListBar />,
    },
    {
      name: "Review",
      icon: <RateReview />,
      component: <ReviewBar />,
    },
  ];
  const adminList = [
    {
      name: "Order List",
      icon: <ShoppingBag />,
      component: <OrderListBar />,
    },
    {
      name: "Add Service",
      icon: <Add/>,
      component: <AddService />,
    },
    {
      name: "Make Admin",
      icon: <PersonAddAlt />,
      component: <AdminBar />,
    },
  ];
  const handleDrawerOpen = () => {
    setOpen(true);
  };

  const handleDrawerClose = () => {
    setOpen(false);
  };

  return (
    <Box sx={{ display: "flex" }}>
      <CssBaseline />
      <AppBar position="fixed" open={open} sx={{boxShadow:'none'}}>
        <Toolbar sx={{ display: "flex", justifyContent: "space-between" }}>
          <IconButton
            color="inherit"
            aria-label="open drawer"
            onClick={handleDrawerOpen}
            edge="start"
            sx={{
              marginRight: 5,
              ...(open && { display: "none" }),
            }}
          >
            <MenuIcon />
          </IconButton>
          <Typography variant="h5" noWrap component="div">
            {activePage}
          </Typography>
          <Typography variant="body1" noWrap component="div">
            {user?.displayName}
          </Typography>
        </Toolbar>
      </AppBar>
      <Drawer variant="permanent" open={open}>
        <DrawerHeader>
          <Link href="/">
            <Image src={"logoTwo.svg"} width={128} height={48} alt="logo"/>
          </Link>
          <IconButton onClick={handleDrawerClose}>
            {theme.direction === "rtl" ? (
              <ChevronRightIcon />
            ) : (
              <ChevronLeftIcon />
            )}
          </IconButton>
        </DrawerHeader>
        <List>
          {admin ? adminList.map((page) => (
                <ListItem
                  key={page.name}
                  disablePadding
                  sx={{
                    display: "block",
                  }}
                  onClick={() => handlePageClick(page.name)}
                >
                  <ListItemButton
                    sx={{
                      minHeight: 48,
                      justifyContent: "initial",
                      px: 2.5,
                      color: activePage === page.name ? "#ff1493" : null,
                    }}
                  >
                    <ListItemIcon
                      sx={{
                        minWidth: 0,
                        mr: 3,
                        justifyContent: "center",
                        color: activePage === page.name ? "#ff1493" : null,
                      }}
                    >
                      {page.icon}
                    </ListItemIcon>
                    <ListItemText primary={page.name} />
                  </ListItemButton>
                </ListItem>
              ))
            : clientList.map((page) => (
                <ListItem
                  key={page.name}
                  disablePadding
                  sx={{
                    display: "block",
                  }}
                  onClick={() => handlePageClick(page.name)}
                >
                  <ListItemButton
                    sx={{
                      minHeight: 48,
                      justifyContent: "initial",
                      px: 2.5,
                      color: activePage === page.name ? "#ff1493" : null,
                    }}
                  >
                    <ListItemIcon
                      sx={{
                        minWidth: 0,
                        mr: 3,
                        justifyContent: "center",
                        color: activePage === page.name ? "#ff1493" : null,
                      }}
                    >
                      {page.icon}
                    </ListItemIcon>
                    <ListItemText primary={page.name} />
                  </ListItemButton>
                </ListItem>
              ))}
        </List>
      </Drawer>
      <Box sx={{ bgcolor: "#F4F7FC", height: "100%", width: "100%", pt: 10 }}>
        {activePage === "Book" && <BookBar />}
        {activePage === "Booking List" && <BookListBar />}
        {activePage === "Review" && <ReviewBar />}
        {admin && (
          <>
            {activePage === "Order List" && <OrderListBar />}
            {activePage === "Add Service" && <AddService />}
            {activePage === "Make Admin" && <AdminBar />}
          </>
        )}
      </Box>
    </Box>
  );
}
export default MiniDrawer;
