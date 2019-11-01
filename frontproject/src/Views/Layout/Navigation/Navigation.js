import React,{ useState }  from 'react';
import clsx from 'clsx';
import {makeStyles, useTheme} from '@material-ui/core/styles';
import Drawer from '@material-ui/core/Drawer';
import CssBaseline from '@material-ui/core/CssBaseline';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import List from '@material-ui/core/List';
import Typography from '@material-ui/core/Typography';
import Divider from '@material-ui/core/Divider';
import Collapse from '@material-ui/core/Collapse'
import ExpandLess from '@material-ui/icons/ExpandLess'
import ExpandMore from '@material-ui/icons/ExpandMore'
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import ChevronLeftIcon from '@material-ui/icons/ChevronLeft';
import ChevronRightIcon from '@material-ui/icons/ChevronRight';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import InboxIcon from '@material-ui/icons/MoveToInbox';
import MailIcon from '@material-ui/icons/Mail';
import './NavigationTop.css';
import Icon from "@material-ui/core/Icon";
import News from "@material-ui/core/SvgIcon/SvgIcon";
import {NavLink,Link} from "react-router-dom";

const drawerWidth = 280;
const itemMenu = [

    {
        to: '/For-sale',
        name: 'For sale',
        subMenu: true,
    },

    {
        to: '/Virtual-Reality',
        name: 'Virtual Reality',
        subMenu: true
    },
    {
        to: '/Bespoke-page',
        name: 'Bespoke Page '
    },
    {
        to: '/Market-Trend',
        name: 'Market Trend',
        subMenu: true,
    },
    {
        to: '/contact-us',
        name: 'Contact Us'
    },
    {
        to: '/about-us',
        name: 'About Us'
    }

];
const Menu=[
    {
        "name": "For sale",
        "url": "/For-sale",
        "children": [
            {
                "name": "Child31",
                "url": "/child31"
            },
            {
                "name": "Child32",
                "url": "/child32"
            },
            {
                "name": "Child32",
                "url": "/child32"
            }
        ]
    },
    {
        "name": "Virtual Reality",
        "url": "/Virtual-Reality"
    },
    {
        "name": "Bespoke page",
        "url": "/Bespoke-page"
    },
    {
        "name": "Market Trend",
        "children": [
            {
                "name": "Child41",
                "url": "/child41"
            },
            {
                "name": "Child42",
                "url": "/child42"
            }
        ]
    },
    {
        "name": "Contact Us",
        "url": "/contact-us"
    },
    {
        "name": "About Us",
        "url": "/about-us"
    },
]
const useStyles = makeStyles(theme => ({
    root: {
        display: 'flex',
        marginBottom: '60px'
    },
    appBar: {
        transition: theme.transitions.create(['margin', 'width'], {
            easing: theme.transitions.easing.sharp,
            duration: theme.transitions.duration.leavingScreen,
        }),
    },
    appBarShift: {
        width: `calc(100% - ${drawerWidth}px)`,
        marginLeft: drawerWidth,
        transition: theme.transitions.create(['margin', 'width'], {
            easing: theme.transitions.easing.easeOut,
            duration: theme.transitions.duration.enteringScreen,
        }),
    },
    menuButton: {
        marginRight: theme.spacing(2),
        [theme.breakpoints.up("md")]: {
            display: "none"
        }
    },
    hide: {
        display: 'none',
    },
    drawer: {
        [theme.breakpoints.up("md")]: {
            width: drawerWidth,
            flexShrink: 0,

        }
    },
    drawerPaper: {
        width: drawerWidth,
        color: '#212121'

    },
    drawerHeader: {
        display: 'flex',
        alignItems: 'center',
        padding: theme.spacing(0, 1),
        ...theme.mixins.toolbar,
        justifyContent: 'flex-end',

    },
    content: {
        flexGrow: 1,
        padding: theme.spacing(3)
    },
    contentShift: {
        transition: theme.transitions.create('margin', {
            easing: theme.transitions.easing.easeOut,
            duration: theme.transitions.duration.enteringScreen,
        }),
        marginLeft: 0,
    },
}));

export default function PersistentDrawerLeft() {
    const [state, setState] = useState(0);
    const classes = useStyles();
    const theme = useTheme();

    const [open, setOpen] = React.useState(false);
    const handleDrawerOpen = () => {
        setOpen(true);
    };

    const handleDrawerClose = () => {
        setOpen(false);
    };
    const handleClick =( item )=> {
        setState( prevState => (
            { [ item ]: !prevState[ item ] }
        ) )
    };
   const handler=(children)=> {
   return children.map((subOption)=>{
       if ( !subOption.children ) {
           return(
               <div key={ subOption.name }>
                   <ListItem
                       button
                       key={ subOption.name }>
                       <Link
                           to={ subOption.url }
                           onClick={handleDrawerClose}
                           className={ classes.links }>
                           <ListItemText
                               inset
                               primary={ subOption.name }
                           />
                       </Link>
                   </ListItem>
               </div>
           )
       }
       return (

           <div key={ subOption.name }>
               <ListItem
                   button
                   onClick={ () => handleClick(subOption.name ) }>
                   <ListItemText
                       inset

                       primary={ subOption.name } />
                   { state[ subOption.name ] ?
                       <ExpandLess /> :
                       <ExpandMore />
                   }
               </ListItem>
               <Collapse
                   in={ state[ subOption.name ] }
                   onClick={handleDrawerClose}
                   timeout="auto"
                   unmountOnExit
               >
                   {handler( subOption.children ) }
               </Collapse>
           </div>
       )
   })
   };
    return (
        <div className={classes.root}>

        <CssBaseline/>

        <AppBar

    className={clsx(classes.appBar, {
        [classes.appBarShift]: open,
    })}
>
<div className="d-flex ">
        <div className="mr-auto logo ml-3">
            <h3>ENTRALON</h3>
            <h6>International Real Estate Agency</h6>
        {/*<img src={"./logo1.png"} style={{height:"50px",width:"50px"}}/>*/}
        </div>
        <div className="p-2 ml-auto headerRight">
        <button className="btn btn-outline-info btn-rounded text-white Login ">Login</button>
        <button className="btn btn-outline-info btn-rounded text-white ">Sign Up</button>

    </div>
    </div>
    <Toolbar>
    <IconButton
    color="inherit"
    aria-label="open drawer"
    onClick={handleDrawerOpen}
    edge="start"
    className={clsx(classes.menuButton, open && classes.hide)}
>
<MenuIcon/>
    </IconButton>

    <nav className="navbar  navbar-expand-lg navbar-dark">
        {/*<NavLink className="navbar-brand" to={"/"}>ENTRANOL</NavLink>*/}

        <div className="collapse navbar-collapse" id="navbarText">
        <ul className="navbar-nav mr-auto">
            <li className="nav-item dropdown mega-dropdown mr-2" >
                <h6 className="nav-link" id="navbarDropdownMenuLink2" data-toggle="dropdown"
                   aria-haspopup="true" aria-expanded="false">For Sale
                    <i className="fa fa-angle-down ml-1"></i>

                </h6>
                <div className="dropdown-menu mega-menu v-2 z-depth-1 darken-4 py-5 px-3"
                     aria-labelledby="navbarDropdownMenuLink2">
                    <div className="row">
                        <div className="col-md-3 col-xl-3 sub-menu">
                            <h6 className="sub-title font-weight-bold white-text  text-center">Properties For Sales
                                Countreis </h6>
                            <ul className="list-unstyled">
                                <div className="row animated zoomIn delay-05s">
                                    <div className="col-md-6">
                                        <li className="">
                                            <a className="menu-item pl-0 text-center">
                                                <p className="text-center">UK property for sale</p>
                                            </a>

                                        </li>
                                    </div>
                                    <div className="col-md-6">
                                        <li className="">
                                            <a className="menu-item pl-0 text-center" href="#!">

                                                <p className="text-center">Portugal property for sale </p>
                                            </a>

                                        </li>
                                    </div>
                                    <div className="col-md-6">
                                        <li className="">
                                            <a className="menu-item pl-0 text-center" href="#!">

                                                <p className="text-center">Spain property for sale </p>
                                            </a>

                                        </li>
                                    </div>
                                    <div className="col-md-6">
                                        <li className="">
                                            <a className="menu-item pl-0 text-center" href="#!">

                                                <p className="text-center">Cyprus property for sale</p>
                                            </a>

                                        </li>
                                    </div>
                                    <div className="col-md-6">
                                        <li className="">
                                            <a className="menu-item pl-0 text-center" href="#!">

                                                <p className="text-center">Turkey property for sale</p>
                                            </a>

                                        </li>
                                    </div>
                                    <div className="col-md-6">
                                        <li className="">
                                            <a className="menu-item pl-0 text-center" href="#!">

                                                <p className="text-center">Greece property for sale </p>
                                            </a>

                                        </li>
                                    </div>
                                    <div className="col-md-6">
                                        <li className="">
                                            <a className="menu-item pl-0 text-center" href="#!">

                                                <p className="text-center">United Arab Emirates property for sale </p>
                                            </a>

                                        </li>
                                    </div>
                                </div>

                            </ul>
                        </div>
                        <div className="col-md-3 col-xl-3 sub-menu">
                            <h6 className="sub-title  font-weight-bold white-text text-center">Best Properties </h6>
                            <ul className="list-unstyled">
                                <div className="row animated zoomIn delay-05s">
                                    <div className="col-md-6">
                                        <li className="">
                                            <a className="menu-item pl-0 text-center">
                                                <p className="text-center">the UK</p>
                                            </a>

                                        </li>
                                    </div>
                                    <div className="col-md-6">
                                        <li className="">
                                            <a className="menu-item pl-0 text-center" href="#!">

                                                <p className="text-center">the Spain </p>
                                            </a>

                                        </li>
                                    </div>
                                    <div className="col-md-6">
                                        <li className="">
                                            <a className="menu-item pl-0 text-center" href="#!">

                                                <p className="text-center">the Portugal </p>
                                            </a>

                                        </li>
                                    </div>
                                    <div className="col-md-6">
                                        <li className="">
                                            <a className="menu-item pl-0 text-center" href="#!">

                                                <p className="text-center">the Cyprus </p>
                                            </a>

                                        </li>
                                    </div>
                                    <div className="col-md-6">
                                        <li className="">
                                            <a className="menu-item pl-0 text-center" href="#!">

                                                <p className="text-center">the Greece </p>
                                            </a>

                                        </li>
                                    </div>
                                    <div className="col-md-6">
                                    <li className="">
                                        <a className="menu-item pl-0 text-center" href="#!">

                                            <p className="text-center">the United Arab Emirates </p>
                                        </a>

                                    </li>
                                </div>
                                    <div className="col-md-6">
                                        <li className="">
                                            <a className="menu-item pl-0 text-center" href="#!">

                                                <p className="text-center">the Turkey </p>
                                            </a>

                                        </li>
                                    </div>
                                </div>

                            </ul>
                        </div>
                        <div className="col-md-3 col-xl-3 sub-menu">
                            <h6 className="sub-title  font-weight-bold white-text text-center">Properties
                                Countryeis </h6>
                            <ul className="list-unstyled">
                                <div className="row animated zoomIn delay-05s">
                                   <img src={"./image/imageMenu/slide3.jpg"} style={{width:"500px"}}/>
                                </div>

                            </ul>
                        </div>

                    </div>
                </div>
            </li>
            <li className="nav-item dropdown mega-dropdown mr-2" >
                <h6 className="nav-link" id="navbarDropdownMenuLink2" data-toggle="dropdown"
                    aria-haspopup="true" aria-expanded="false">Virtual Reality
                    <i className="fa fa-angle-down ml-1"></i>

                </h6>
                <div className="dropdown-menu mega-menu v-2 z-depth-1 darken-4 py-5 px-3"
                     aria-labelledby="navbarDropdownMenuLink2">
                    <div className="row">
                        <div className="col-md-3 col-xl-3 sub-menu">
                            <h6 className="sub-title font-weight-bold white-text  text-center">Properties For Sales
                                Countreis </h6>
                            <ul className="list-unstyled">
                                <div className="row animated zoomIn delay-05s">
                                    <div className="col-md-6">
                                        <li className="">
                                            <a className="menu-item pl-0 text-center">
                                                <p className="text-center">uk</p>
                                            </a>

                                        </li>
                                    </div>
                                    <div className="col-md-6">
                                        <li className="">
                                            <a className="menu-item pl-0 text-center" href="#!">

                                                <p className="text-center">For Sales UK </p>
                                            </a>

                                        </li>
                                    </div>
                                    <div className="col-md-6">
                                        <li className="">
                                            <a className="menu-item pl-0 text-center" href="#!">

                                                <p className="text-center">For Sales UK </p>
                                            </a>

                                        </li>
                                    </div>
                                    <div className="col-md-6">
                                        <li className="">
                                            <a className="menu-item pl-0 text-center" href="#!">

                                                <p className="text-center">For Sales UK </p>
                                            </a>

                                        </li>
                                    </div>
                                    <div className="col-md-6">
                                        <li className="">
                                            <a className="menu-item pl-0 text-center" href="#!">

                                                <p className="text-center">For Sales UK 5</p>
                                            </a>

                                        </li>
                                    </div>
                                    <div className="col-md-6">
                                        <li className="">
                                            <a className="menu-item pl-0 text-center" href="#!">

                                                <p className="text-center">For Sales UK </p>
                                            </a>

                                        </li>
                                    </div>
                                    <div className="col-md-6">
                                        <li className="">
                                            <a className="menu-item pl-0 text-center" href="#!">

                                                <p className="text-center">For Sales UK </p>
                                            </a>

                                        </li>
                                    </div>
                                </div>

                            </ul>
                        </div>
                        <div className="col-md-3 col-xl-3 sub-menu">
                            <h6 className="sub-title  font-weight-bold white-text text-center">Best Properties </h6>
                            <ul className="list-unstyled">
                                <div className="row animated zoomIn delay-05s">
                                    <div className="col-md-12">
                                        <li className="">
                                            <a className="menu-item pl-0 text-center">
                                                <p className="text-center">For Sales UK</p>
                                            </a>

                                        </li>
                                    </div>
                                    <div className="col-md-12">
                                        <li className="">
                                            <a className="menu-item pl-0 text-center" href="#!">

                                                <p className="text-center">For Sales UK </p>
                                            </a>

                                        </li>
                                    </div>
                                    <div className="col-md-12">
                                        <li className="">
                                            <a className="menu-item pl-0 text-center" href="#!">

                                                <p className="text-center">For Sales UK </p>
                                            </a>

                                        </li>
                                    </div>
                                    <div className="col-md-12">
                                        <li className="">
                                            <a className="menu-item pl-0 text-center" href="#!">

                                                <p className="text-center">For Sales UK </p>
                                            </a>

                                        </li>
                                    </div>
                                </div>

                            </ul>
                        </div>
                        <div className="col-md-3 col-xl-3 sub-menu">
                            <h6 className="sub-title  font-weight-bold white-text text-center">Properties
                                Countryeis </h6>
                            <ul className="list-unstyled">
                                <div className="row animated zoomIn delay-05s">
                                    <div className="col-md-12">
                                        <li className="">
                                            <a className="menu-item pl-0 text-center">
                                                <p className="text-center">For Sales UK</p>
                                            </a>

                                        </li>
                                    </div>
                                    <div className="col-md-12">
                                        <li className="">
                                            <a className="menu-item pl-0 text-center" href="#!">

                                                <p className="text-center">For Sales UK </p>
                                            </a>

                                        </li>
                                    </div>
                                    <div className="col-md-12">
                                        <li className="">
                                            <a className="menu-item pl-0 text-center" href="#!">

                                                <p className="text-center">For Sales UK </p>
                                            </a>

                                        </li>
                                    </div>
                                    <div className="col-md-12">
                                        <li className="">
                                            <a className="menu-item pl-0 text-center" href="#!">

                                                <p className="text-center">For Sales UK </p>
                                            </a>

                                        </li>
                                    </div>
                                </div>

                            </ul>
                        </div>

                    </div>
                </div>
            </li>
            <li className="nav-item dropdown mega-dropdown mr-2" >
                <h6 className="nav-link" id="navbarDropdownMenuLink2" data-toggle="dropdown"
                    aria-haspopup="true" aria-expanded="false">Bespoke Page
                    <i className="fa fa-angle-down ml-1"></i>

                </h6>
                <div className="dropdown-menu mega-menu v-2 z-depth-1 darken-4 py-5 px-3"
                     aria-labelledby="navbarDropdownMenuLink2">
                    <div className="row">
                        <div className="col-md-3 col-xl-3 sub-menu">
                            <h6 className="sub-title font-weight-bold white-text  text-center">Properties For Sales
                                Countreis </h6>
                            <ul className="list-unstyled">
                                <div className="row animated zoomIn delay-05s">
                                    <div className="col-md-6">
                                        <li className="">
                                            <a className="menu-item pl-0 text-center">
                                                <p className="text-center">uk</p>
                                            </a>

                                        </li>
                                    </div>
                                    <div className="col-md-6">
                                        <li className="">
                                            <a className="menu-item pl-0 text-center" href="#!">

                                                <p className="text-center">For Sales UK </p>
                                            </a>

                                        </li>
                                    </div>
                                    <div className="col-md-6">
                                        <li className="">
                                            <a className="menu-item pl-0 text-center" href="#!">

                                                <p className="text-center">For Sales UK </p>
                                            </a>

                                        </li>
                                    </div>
                                    <div className="col-md-6">
                                        <li className="">
                                            <a className="menu-item pl-0 text-center" href="#!">

                                                <p className="text-center">For Sales UK </p>
                                            </a>

                                        </li>
                                    </div>
                                    <div className="col-md-6">
                                        <li className="">
                                            <a className="menu-item pl-0 text-center" href="#!">

                                                <p className="text-center">For Sales UK 5</p>
                                            </a>

                                        </li>
                                    </div>
                                    <div className="col-md-6">
                                        <li className="">
                                            <a className="menu-item pl-0 text-center" href="#!">

                                                <p className="text-center">For Sales UK </p>
                                            </a>

                                        </li>
                                    </div>
                                    <div className="col-md-6">
                                        <li className="">
                                            <a className="menu-item pl-0 text-center" href="#!">

                                                <p className="text-center">For Sales UK </p>
                                            </a>

                                        </li>
                                    </div>
                                </div>

                            </ul>
                        </div>
                        <div className="col-md-3 col-xl-3 sub-menu">
                            <h6 className="sub-title  font-weight-bold white-text text-center">Best Properties </h6>
                            <ul className="list-unstyled">
                                <div className="row animated zoomIn delay-05s">
                                    <div className="col-md-12">
                                        <li className="">
                                            <a className="menu-item pl-0 text-center">
                                                <p className="text-center">For Sales UK</p>
                                            </a>

                                        </li>
                                    </div>
                                    <div className="col-md-12">
                                        <li className="">
                                            <a className="menu-item pl-0 text-center" href="#!">

                                                <p className="text-center">For Sales UK </p>
                                            </a>

                                        </li>
                                    </div>
                                    <div className="col-md-12">
                                        <li className="">
                                            <a className="menu-item pl-0 text-center" href="#!">

                                                <p className="text-center">For Sales UK </p>
                                            </a>

                                        </li>
                                    </div>
                                    <div className="col-md-12">
                                        <li className="">
                                            <a className="menu-item pl-0 text-center" href="#!">

                                                <p className="text-center">For Sales UK </p>
                                            </a>

                                        </li>
                                    </div>
                                </div>

                            </ul>
                        </div>
                        <div className="col-md-3 col-xl-3 sub-menu">
                            <h6 className="sub-title  font-weight-bold white-text text-center">Properties
                                Countryeis </h6>
                            <ul className="list-unstyled">
                                <div className="row animated zoomIn delay-05s">
                                    <div className="col-md-12">
                                        <li className="">
                                            <a className="menu-item pl-0 text-center">
                                                <p className="text-center">For Sales UK</p>
                                            </a>

                                        </li>
                                    </div>
                                    <div className="col-md-12">
                                        <li className="">
                                            <a className="menu-item pl-0 text-center" href="#!">

                                                <p className="text-center">For Sales UK </p>
                                            </a>

                                        </li>
                                    </div>
                                    <div className="col-md-12">
                                        <li className="">
                                            <a className="menu-item pl-0 text-center" href="#!">

                                                <p className="text-center">For Sales UK </p>
                                            </a>

                                        </li>
                                    </div>
                                    <div className="col-md-12">
                                        <li className="">
                                            <a className="menu-item pl-0 text-center" href="#!">

                                                <p className="text-center">For Sales UK </p>
                                            </a>

                                        </li>
                                    </div>
                                </div>

                            </ul>
                        </div>

                    </div>
                </div>
            </li>
            <li className="nav-item dropdown mega-dropdown mr-2" >
                <h6 className="nav-link" id="navbarDropdownMenuLink2" data-toggle="dropdown"
                    aria-haspopup="true" aria-expanded="false">Market Trend
                    <i className="fa fa-angle-down ml-1"></i>

                </h6>
                <div className="dropdown-menu mega-menu v-2 z-depth-1 darken-4 py-5 px-3"
                     aria-labelledby="navbarDropdownMenuLink2">
                    <div className="row">
                        <div className="col-md-3 col-xl-3 sub-menu">
                            <h6 className="sub-title font-weight-bold white-text  text-center">Properties For Sales
                                Countreis </h6>
                            <ul className="list-unstyled">
                                <div className="row animated zoomIn delay-05s">
                                    <div className="col-md-6">
                                        <li className="">
                                            <a className="menu-item pl-0 text-center">
                                                <p className="text-center">uk</p>
                                            </a>

                                        </li>
                                    </div>
                                    <div className="col-md-6">
                                        <li className="">
                                            <a className="menu-item pl-0 text-center" href="#!">

                                                <p className="text-center">For Sales UK </p>
                                            </a>

                                        </li>
                                    </div>
                                    <div className="col-md-6">
                                        <li className="">
                                            <a className="menu-item pl-0 text-center" href="#!">

                                                <p className="text-center">For Sales UK </p>
                                            </a>

                                        </li>
                                    </div>
                                    <div className="col-md-6">
                                        <li className="">
                                            <a className="menu-item pl-0 text-center" href="#!">

                                                <p className="text-center">For Sales UK </p>
                                            </a>

                                        </li>
                                    </div>
                                    <div className="col-md-6">
                                        <li className="">
                                            <a className="menu-item pl-0 text-center" href="#!">

                                                <p className="text-center">For Sales UK 5</p>
                                            </a>

                                        </li>
                                    </div>
                                    <div className="col-md-6">
                                        <li className="">
                                            <a className="menu-item pl-0 text-center" href="#!">

                                                <p className="text-center">For Sales UK </p>
                                            </a>

                                        </li>
                                    </div>
                                    <div className="col-md-6">
                                        <li className="">
                                            <a className="menu-item pl-0 text-center" href="#!">

                                                <p className="text-center">For Sales UK </p>
                                            </a>

                                        </li>
                                    </div>
                                </div>

                            </ul>
                        </div>
                        <div className="col-md-3 col-xl-3 sub-menu">
                            <h6 className="sub-title  font-weight-bold white-text text-center">Best Properties </h6>
                            <ul className="list-unstyled">
                                <div className="row animated zoomIn delay-05s">
                                    <div className="col-md-12">
                                        <li className="">
                                            <a className="menu-item pl-0 text-center">
                                                <p className="text-center">For Sales UK</p>
                                            </a>

                                        </li>
                                    </div>
                                    <div className="col-md-12">
                                        <li className="">
                                            <a className="menu-item pl-0 text-center" href="#!">

                                                <p className="text-center">For Sales UK </p>
                                            </a>

                                        </li>
                                    </div>
                                    <div className="col-md-12">
                                        <li className="">
                                            <a className="menu-item pl-0 text-center" href="#!">

                                                <p className="text-center">For Sales UK </p>
                                            </a>

                                        </li>
                                    </div>
                                    <div className="col-md-12">
                                        <li className="">
                                            <a className="menu-item pl-0 text-center" href="#!">

                                                <p className="text-center">For Sales UK </p>
                                            </a>

                                        </li>
                                    </div>
                                </div>

                            </ul>
                        </div>
                        <div className="col-md-3 col-xl-3 sub-menu">
                            <h6 className="sub-title  font-weight-bold white-text text-center">Properties
                                Countryeis </h6>
                            <ul className="list-unstyled">
                                <div className="row animated zoomIn delay-05s">
                                    <div className="col-md-12">
                                        <li className="">
                                            <a className="menu-item pl-0 text-center">
                                                <p className="text-center">For Sales UK</p>
                                            </a>

                                        </li>
                                    </div>
                                    <div className="col-md-12">
                                        <li className="">
                                            <a className="menu-item pl-0 text-center" href="#!">

                                                <p className="text-center">For Sales UK </p>
                                            </a>

                                        </li>
                                    </div>
                                    <div className="col-md-12">
                                        <li className="">
                                            <a className="menu-item pl-0 text-center" href="#!">

                                                <p className="text-center">For Sales UK </p>
                                            </a>

                                        </li>
                                    </div>
                                    <div className="col-md-12">
                                        <li className="">
                                            <a className="menu-item pl-0 text-center" href="#!">

                                                <p className="text-center">For Sales UK </p>
                                            </a>

                                        </li>
                                    </div>
                                </div>

                            </ul>
                        </div>

                    </div>
                </div>
            </li>
            <li className="nav-item dropdown mega-dropdown mr-2" >
                <h6 className="nav-link" id="navbarDropdownMenuLink2" data-toggle="dropdown"
                    aria-haspopup="true" aria-expanded="false">Contact Us
                    <i className="fa fa-angle-down ml-1"></i>

                </h6>
                <div className="dropdown-menu mega-menu v-2 z-depth-1 darken-4 py-5 px-3"
                     aria-labelledby="navbarDropdownMenuLink2">
                    <div className="row">
                        <div className="col-md-3 col-xl-3 sub-menu">
                            <h6 className="sub-title font-weight-bold white-text  text-center">Properties For Sales
                                Countreis </h6>
                            <ul className="list-unstyled">
                                <div className="row animated zoomIn delay-05s">
                                    <div className="col-md-6">
                                        <li className="">
                                            <a className="menu-item pl-0 text-center">
                                                <p className="text-center">uk</p>
                                            </a>

                                        </li>
                                    </div>
                                    <div className="col-md-6">
                                        <li className="">
                                            <a className="menu-item pl-0 text-center" href="#!">

                                                <p className="text-center">For Sales UK </p>
                                            </a>

                                        </li>
                                    </div>
                                    <div className="col-md-6">
                                        <li className="">
                                            <a className="menu-item pl-0 text-center" href="#!">

                                                <p className="text-center">For Sales UK </p>
                                            </a>

                                        </li>
                                    </div>
                                    <div className="col-md-6">
                                        <li className="">
                                            <a className="menu-item pl-0 text-center" href="#!">

                                                <p className="text-center">For Sales UK </p>
                                            </a>

                                        </li>
                                    </div>
                                    <div className="col-md-6">
                                        <li className="">
                                            <a className="menu-item pl-0 text-center" href="#!">

                                                <p className="text-center">For Sales UK 5</p>
                                            </a>

                                        </li>
                                    </div>
                                    <div className="col-md-6">
                                        <li className="">
                                            <a className="menu-item pl-0 text-center" href="#!">

                                                <p className="text-center">For Sales UK </p>
                                            </a>

                                        </li>
                                    </div>
                                    <div className="col-md-6">
                                        <li className="">
                                            <a className="menu-item pl-0 text-center" href="#!">

                                                <p className="text-center">For Sales UK </p>
                                            </a>

                                        </li>
                                    </div>
                                </div>

                            </ul>
                        </div>
                        <div className="col-md-3 col-xl-3 sub-menu">
                            <h6 className="sub-title  font-weight-bold white-text text-center">Best Properties </h6>
                            <ul className="list-unstyled">
                                <div className="row animated zoomIn delay-05s">
                                    <div className="col-md-12">
                                        <li className="">
                                            <a className="menu-item pl-0 text-center">
                                                <p className="text-center">For Sales UK</p>
                                            </a>

                                        </li>
                                    </div>
                                    <div className="col-md-12">
                                        <li className="">
                                            <a className="menu-item pl-0 text-center" href="#!">

                                                <p className="text-center">For Sales UK </p>
                                            </a>

                                        </li>
                                    </div>
                                    <div className="col-md-12">
                                        <li className="">
                                            <a className="menu-item pl-0 text-center" href="#!">

                                                <p className="text-center">For Sales UK </p>
                                            </a>

                                        </li>
                                    </div>
                                    <div className="col-md-12">
                                        <li className="">
                                            <a className="menu-item pl-0 text-center" href="#!">

                                                <p className="text-center">For Sales UK </p>
                                            </a>

                                        </li>
                                    </div>
                                </div>

                            </ul>
                        </div>
                        <div className="col-md-3 col-xl-3 sub-menu">
                            <h6 className="sub-title  font-weight-bold white-text text-center">Properties
                                Countryeis </h6>
                            <ul className="list-unstyled">
                                <div className="row animated zoomIn delay-05s">
                                    <div className="col-md-12">
                                        <li className="">
                                            <a className="menu-item pl-0 text-center">
                                                <p className="text-center">For Sales UK</p>
                                            </a>

                                        </li>
                                    </div>
                                    <div className="col-md-12">
                                        <li className="">
                                            <a className="menu-item pl-0 text-center" href="#!">

                                                <p className="text-center">For Sales UK </p>
                                            </a>

                                        </li>
                                    </div>
                                    <div className="col-md-12">
                                        <li className="">
                                            <a className="menu-item pl-0 text-center" href="#!">

                                                <p className="text-center">For Sales UK </p>
                                            </a>

                                        </li>
                                    </div>
                                    <div className="col-md-12">
                                        <li className="">
                                            <a className="menu-item pl-0 text-center" href="#!">

                                                <p className="text-center">For Sales UK </p>
                                            </a>

                                        </li>
                                    </div>
                                </div>

                            </ul>
                        </div>

                    </div>
                </div>
            </li>
            <li className="nav-item dropdown mega-dropdown mr-2" >
                <h6 className="nav-link" id="navbarDropdownMenuLink2" data-toggle="dropdown"
                    aria-haspopup="true" aria-expanded="false">About Us
                    <i className="fa fa-angle-down ml-1"></i>

                </h6>
                <div className="dropdown-menu mega-menu v-2 z-depth-1 darken-4 py-5 px-3"
                     aria-labelledby="navbarDropdownMenuLink2">
                    <div className="row">
                        <div className="col-md-3 col-xl-3 sub-menu">
                            <h6 className="sub-title font-weight-bold white-text  text-center">Properties For Sales
                                Countreis </h6>
                            <ul className="list-unstyled">
                                <div className="row animated zoomIn delay-05s">
                                    <div className="col-md-6">
                                        <li className="">
                                            <a className="menu-item pl-0 text-center">
                                                <p className="text-center">uk</p>
                                            </a>

                                        </li>
                                    </div>
                                    <div className="col-md-6">
                                        <li className="">
                                            <a className="menu-item pl-0 text-center" href="#!">

                                                <p className="text-center">For Sales UK </p>
                                            </a>

                                        </li>
                                    </div>
                                    <div className="col-md-6">
                                        <li className="">
                                            <a className="menu-item pl-0 text-center" href="#!">

                                                <p className="text-center">For Sales UK </p>
                                            </a>

                                        </li>
                                    </div>
                                    <div className="col-md-6">
                                        <li className="">
                                            <a className="menu-item pl-0 text-center" href="#!">

                                                <p className="text-center">For Sales UK </p>
                                            </a>

                                        </li>
                                    </div>
                                    <div className="col-md-6">
                                        <li className="">
                                            <a className="menu-item pl-0 text-center" href="#!">

                                                <p className="text-center">For Sales UK 5</p>
                                            </a>

                                        </li>
                                    </div>
                                    <div className="col-md-6">
                                        <li className="">
                                            <a className="menu-item pl-0 text-center" href="#!">

                                                <p className="text-center">For Sales UK </p>
                                            </a>

                                        </li>
                                    </div>
                                    <div className="col-md-6">
                                        <li className="">
                                            <a className="menu-item pl-0 text-center" href="#!">

                                                <p className="text-center">For Sales UK </p>
                                            </a>

                                        </li>
                                    </div>
                                </div>

                            </ul>
                        </div>
                        <div className="col-md-3 col-xl-3 sub-menu">
                            <h6 className="sub-title  font-weight-bold white-text text-center">Best Properties </h6>
                            <ul className="list-unstyled">
                                <div className="row animated zoomIn delay-05s">
                                    <div className="col-md-12">
                                        <li className="">
                                            <a className="menu-item pl-0 text-center">
                                                <p className="text-center">For Sales UK</p>
                                            </a>

                                        </li>
                                    </div>
                                    <div className="col-md-12">
                                        <li className="">
                                            <a className="menu-item pl-0 text-center" href="#!">

                                                <p className="text-center">For Sales UK </p>
                                            </a>

                                        </li>
                                    </div>
                                    <div className="col-md-12">
                                        <li className="">
                                            <a className="menu-item pl-0 text-center" href="#!">

                                                <p className="text-center">For Sales UK </p>
                                            </a>

                                        </li>
                                    </div>
                                    <div className="col-md-12">
                                        <li className="">
                                            <a className="menu-item pl-0 text-center" href="#!">

                                                <p className="text-center">For Sales UK </p>
                                            </a>

                                        </li>
                                    </div>
                                </div>

                            </ul>
                        </div>
                        <div className="col-md-3 col-xl-3 sub-menu">
                            <h6 className="sub-title  font-weight-bold white-text text-center">Properties
                                Countryeis </h6>
                            <ul className="list-unstyled">
                                <div className="row animated zoomIn delay-05s">
                                    <div className="col-md-12">
                                        <li className="">
                                            <a className="menu-item pl-0 text-center">
                                                <p className="text-center">For Sales UK</p>
                                            </a>

                                        </li>
                                    </div>
                                    <div className="col-md-12">
                                        <li className="">
                                            <a className="menu-item pl-0 text-center" href="#!">

                                                <p className="text-center">For Sales UK </p>
                                            </a>

                                        </li>
                                    </div>
                                    <div className="col-md-12">
                                        <li className="">
                                            <a className="menu-item pl-0 text-center" href="#!">

                                                <p className="text-center">For Sales UK </p>
                                            </a>

                                        </li>
                                    </div>
                                    <div className="col-md-12">
                                        <li className="">
                                            <a className="menu-item pl-0 text-center" href="#!">

                                                <p className="text-center">For Sales UK </p>
                                            </a>

                                        </li>
                                    </div>
                                </div>

                            </ul>
                        </div>

                    </div>
                </div>
            </li>


        </ul>


    </div>
    </nav>

    </Toolbar>
    </AppBar>
    <Drawer
    className={classes.drawer}
    variant="persistent"
    anchor="left"
    open={open}
    classes={{
        paper: classes.drawerPaper,
    }}
>
<div className={classes.drawerHeader}>
    <img src={"./logo1.png"} style={{height:"100px",width:"225px"}}/>
        <IconButton onClick={handleDrawerClose}>
        {theme.direction === 'ltr' ? <ChevronLeftIcon/> : <ChevronRightIcon/>}
</IconButton>

    </div>


    <Divider/>
    <List>
        <ListItem className="mdb-color darken-3  text-white"
            key="menuHeading"
            disableGutters>
            <ListItemText
                inset
                primary="Main Menu"/>
        </ListItem>
        { handler(Menu) }
    </List>
<Divider/>
      <div className="socilaNetwork ml-5 mt-2">
          <i className="fa fa-facebook-square ml-3 fa-2x text-info"></i>
          <i className="fa fa-instagram ml-3 fa-2x text-danger" ></i>
          <i className="fa fa-twitter-square ml-3 fa-2x text-info" ></i>
          <i className="fa fa-envelope ml-3 fa-2x text-default" ></i>
      </div>
        <Divider/>
        <div className="ml-1 mt-3">
            <button className="btn btn-outline-danger btn-rounded text-white Login ">Login</button>
            <button className="btn btn-outline-danger btn-rounded text-white ">Sign Up</button>

        </div>
    </Drawer>


    <main

    className={clsx(classes.content, {
        [classes.contentShift]: open,
    })}
    onClick={handleDrawerClose}
>

</main>
    </div>
);
}
