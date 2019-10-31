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
        backgroundColor: '#1c2a48'
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
<div className=" d-flex ">
        <div className="mr-auto">
        logo
        </div>
        <div className="p-2 ml-auto TopheaderRight">
        <button className="btn  btn-outline-info  text-white mr-2">Login</button>
        <button className="btn btn-outline-info  text-white ">Sign Up</button>

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

    <nav className="navbar navbar-expand-lg navbar-dark">
        <NavLink className="navbar-brand" to={"/"}>ENTRANOL</NavLink>

        <div className="collapse navbar-collapse" id="navbarText">
        <ul className="navbar-nav mr-auto menu cleafix">
        {
            itemMenu.map((item, index) => (
                <li className="nav-item parent" key={index}>

            {(() => {
                if (item.subMenu) {
                    return (
                        <Typography variant={'h6'}>
                        <li className="nav-item dropdown" key={index}>
                        <a className="nav-link dropdown-toggle "
                    id="navbarDropdownMenuLink"
                    data-toggle="dropdown" aria-haspopup="true"
                    aria-expanded="false">
                        {item.name}
                        </a>
                        <div className="dropdown-menu animated bounceIn delay-1s"
                    aria-labelledby="navbarDropdownMenuLink">
                        <div className="d-flex">
                        <div className="p-2 mr-5">
                        <ul className="title_submenu">
                        <li className="subMenu mb-3 mt-4" key={index}>UK
                    property for sale
                                 </li>

                                 </ul>

                                 </div>
                                 <div className="p-2">
                        <ul className="title_submenu" >
                        <li className="subMenu mb-3 mt-4" key={index}>UK
                    property for sale
                                 </li>

                                 </ul>
                                 </div>
                                 </div>


                                 </div>
                                 </li>
                                 </Typography>

                    )
                        } else {

                    return (<Typography variant={'h6'}>
                        <NavLink className="nav-link"
                    to={item.to} key={index}>{item.name}</NavLink>
                        </Typography>);
                }
            })()}
    {/*<NavLink className="nav-link" to={item.to} >{item.name}</NavLink>*/}
</li>
))
}
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
        <IconButton onClick={handleDrawerClose}>
        {theme.direction === 'ltr' ? <ChevronLeftIcon/> : <ChevronRightIcon/>}
</IconButton>
    </div>


    <Divider/>
    <List>
        <ListItem
            key="menuHeading"
            divider
            disableGutters>
            <ListItemText
                inset
                primary="Nested Menu"/>
        </ListItem>
        { handler(Menu) }
    </List>
    </Drawer>
    <main
    className={clsx(classes.content, {
        [classes.contentShift]: open,
    })}
>

</main>
    </div>
);
}
