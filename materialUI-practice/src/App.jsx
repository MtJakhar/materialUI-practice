import { useState, useEffect, useRef } from 'react'
import './App.css'
import { Button, Typography, ThemeProvider, createTheme, Paper, CssBaseline, Link, IconButton, CircularProgress, Fab, Box, LinearProgress, Rating, Card, CardContent, CardActions, CardMedia, CardHeader, Avatar, Collapse, Badge, Skeleton, List, ListItem, ListItemButton, Divider, ListItemText, ListSubheader,ListItemAvatar, Checkbox, Switch, AvatarGroup, ButtonGroup } from "@mui/material"
import { pink, green, red } from '@mui/material/colors'
import { styled } from "@mui/material/styles"
import { Stack } from '@mui/system'

import { Facebook, Instagram, YouTube, Check, Save, ExpandMore, Favorite, Share, MoreVert, Mail, Inbox, Drafts, Send, ExpandLess, StarBorder, Image, Work, BeachAccess, Comment, Wifi, Bluetooth, Delete } from '@mui/icons-material'
import foodImage from "./assets/images/seafood.jpeg"

function App() {
  const [count, setCount] = useState(0)
  const [changeButton, setChangeButton] = useState(false)
  // you cant use short hand like p for padding when customizing, nor can you use themes on them
  const MyCustomButton = styled(Button)({
    padding: 20
  })
  // You can use theme if you do the following
  const MyCustomButton2 = styled(Button)(({ theme }) => ({
    padding: theme.spacing(2)
  }))

  const [progress, setProgress] = useState(0);
  
  useEffect(() => {
    const timer = setInterval(() => {
      setProgress((prevProgress) => (prevProgress >= 100 ? 0 : prevProgress + 10));
    }, 800);

    return () => {
      clearInterval(timer);
    };
  }, []);

  const theme2 = createTheme({
    typography: {
      fontSize: 10,
      pinkFont: {
        color: pink[500] 
      },
      h3: {
        fontSize: "2rem"
      }
    }
  })

  const theme3 = createTheme({
    mode: "light"
  })

  const clickHandler = () => {
    setCount(count + 1)
  }
  
  const changeClick = () => {
    setChangeButton(!changeButton)
  }

  // this code is for integrated circular component
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);
  const [value, setValue] = useState(2);
  const timer = useRef();

  const buttonSx = {
    ...(success && {
      bgcolor: green[500],
      '&:hover': {
        bgcolor: green[700],
      },
    }),
  };

  useEffect(() => {
    return () => {
      clearTimeout(timer.current);
    };
  }, []);
  
  const handleButtonClick = () => {
    if (!loading) {
      setSuccess(false);
      setLoading(true);
      timer.current = window.setTimeout(() => {
        setSuccess(true);
        setLoading(false);
      }, 2000);
    }
  };

  // for card section
  const bull = (
    <Box
      component="span"
      sx={{ display: 'inline-block', mx: '2px', transform: 'scale(0.8)' }}
    >
      •
    </Box>
  ); 

  const card = (
    <>
      <CardContent>
        <Typography sx={{ fontSize: 14 }} color="text.secondary" gutterBottom>
          Word of the Day
        </Typography>
        <Typography variant="h5" component="div">
          be{bull}nev{bull}o{bull}lent
        </Typography>
        <Typography sx={{ mb: 1.5 }} color="text.secondary">
          adjective
        </Typography>
        <Typography variant="body2">
          well meaning and kindly.
          <br />
          {'"a benevolent smile"'}
        </Typography>
      </CardContent>
      <CardActions>
        <Button size="small">Learn More</Button>
      </CardActions>
    </>
  );

  // card complex interaction
  const [expanded, setExpanded] = useState(false);

  const handleExpandClick = () => {
    setExpanded(!expanded);
  };

  const ExpandMoreA = styled((props) => {
    const { expand, ...other } = props;
    return <IconButton {...other} />;
  })(({ theme, expand }) => ({
    transform: !expand ? 'rotate(0deg)' : 'rotate(180deg)',
    marginLeft: 'auto',
    transition: theme.transitions.create('transform', {
      duration: theme.transitions.duration.shortest,
    }),
  }));

  // For lists
  const [open, setOpen] = useState(true);

  const handleClicka = () => {
    setOpen(!open);
  };

  const [selectedIndex, setSelectedIndex] = useState(1);

  const handleListItemClick = (event, index) => {
    setSelectedIndex(index);
  };

  const [checked, setChecked] = useState([0]);

  const handleToggle = (value) => () => {
    const currentIndex = checked.indexOf(value);
    const newChecked = [...checked];

    if (currentIndex === -1) {
      newChecked.push(value);
    } else {
      newChecked.splice(currentIndex, 1);
    }

    setChecked(newChecked);
  };

  const [checkeda, setCheckeda] = useState(['wifi']);

  const handleTogglea = (value) => () => {
    const currentIndex = checkeda.indexOf(value);
    const newChecked = [...checkeda];

    if (currentIndex === -1) {
      newChecked.push(value);
    } else {
      newChecked.splice(currentIndex, 1);
    }

    setCheckeda(newChecked);
  };

  // Avatar
  function stringToColor(string) {
    let hash = 0;
    let i;

    for (i = 0; i < string.length; i += 1) {
      hash = string.charCodeAt(i) + ((hash << 5) - hash);
    }
  
    let color = '#';
  
    for (i = 0; i < 3; i += 1) {
      const value = (hash >> (i * 8)) & 0xff;
      color += `00${value.toString(16)}`.slice(-2);
    }
  
    return color;
  }

  function stringAvatar(name) {
    return {
      sx: {
        bgcolor: stringToColor(name),
      },
      children: `${name.split(' ')[0][0]}${name.split(' ')[1][0]}`,
    };
  }

  const StyledBadge = styled(Badge)(({ theme }) => ({
    '& .MuiBadge-badge': {
      backgroundColor: '#44b700',
      color: '#44b700',
      boxShadow: `0 0 0 2px ${theme.palette.background.paper}`,
      '&::after': {
        position: 'absolute',
        top: 0,
        left: 0,
        width: '100%',
        height: '100%',
        borderRadius: '50%',
        animation: 'ripple 1.2s infinite ease-in-out',
        border: '1px solid currentColor',
        content: '""',
      },
    },
    '@keyframes ripple': {
      '0%': {
        transform: 'scale(.8)',
        opacity: 1,
      },
      '100%': {
        transform: 'scale(2.4)',
        opacity: 0,
      },
    },
  }));
  

  return (
    <div>
      <CssBaseline>
        <Paper>
          <div>
            <Typography variant='orangeFont'>This has custom typography variant</Typography>
            <Typography variant="h3">
              Intro to Material UI h3
            </Typography>
            <Typography> this is default Typography "body" which is like p tag</Typography>
            <Typography>{count}</Typography>
            <Typography>materialUI's components are all customizable vai "theme" check component's API for color customization. You can check default theme <Link href="https://mui.com/material-ui/customization/default-theme/">Here</Link> Note: that the hyperlink is wrapped by materialUI component link which can be used within typography tag</Typography>

            <Typography>When changing default themes this should be done in the highest level of your react Tree. Usually index/main.js, then you must import ThemeProvider and createTheme in that file.</Typography>

            <Button variant="contained" onClick={clickHandler}>materialUI Button</Button>
            <Typography>The button below has a color of secondary while the previous button is defaulted to primary</Typography>
            <Button color="secondary" variant='contained'>Secondary Button</Button>

            <Typography sx={{ color: "myCustomColor.main" }}>The SX prop allows you to edit system properties, and CSS rules. This line has sx prop with a custom color utilized</Typography>
            <Button variant='contained' sx={{ p:2 }}>sx padding 2</Button>
            <Typography>mui default spacing is 4 pixels so the padding 2 of the above button is padding of 8 pixels. sx aliases such as p for padding, m for margin can be found <Link href="https://mui.com/system/getting-started/the-sx-prop/">here</Link></Typography>

            <MyCustomButton variant='contained'>Custom Button</MyCustomButton>
            <MyCustomButton2 variant='contained'>Custom Button2</MyCustomButton2>
            <hr/>
          </div>
        </Paper>
        <div>
          <Typography variant="h3">The SX Prop</Typography>

          <Typography>The first two buttons are in a Stack component, which allows some of the changes of sx of one button to affect another button in the stack, in this case padding affects both while the with is un affected</Typography>
          <Stack spacing={2} direction="row">
            <Button sx={{ width: "200px", p:2 }} variant='contained'>Button 1</Button>
            <Button variant='contained'>Button 2</Button>
          </Stack>

          <Typography>The Buttons below show that with out a stack component wrapping the buttons we will not see uniform sx changes applying to both buttons</Typography>
          <Button sx={{ width: "200px", m:2, p:2 }} variant='contained'>Button 3</Button>
          <Button sx={{ border: 5, borderColor: "secondary.main" }} variant='outlined'>Button 4</Button>
          <Typography sx={{ fontWeight:'fontWeightLight' }}> You can access most CSS values via the sx prop, and you cand apply theme settings on components via the sx, as seen on button 4 with its unique border</Typography>
          <Typography>Withing a components API doc you can target the specific part of that component such as a  button's text via the Global Classes. To target that specific global class within sx, we have to make the global class a key with quotes around it and put a '&' in-front of it example: '&.MuiButton-containedPrimary'. Also sx styles ca nbe applied conditionally if condition is met. This can be done only if you wrap the styles with an array. You can also customize responsive values with sx styles. The global button below has all of these done to it.</Typography>
          <Button sx={[{
            width: {
              xs: 100,
              sm: 200,
              md: 300,
              lg: 400,
              xl: 500
            },
            border: 3,
            m: 1,
            borderColor: "secondary.main",
            "&.MuiButton-root": {
              height: "100px"
            }
          },
          changeButton && {
            borderColor: "#49fb35"
          }
          ]}>Global Button</Button>
          <Button variant="contained" onClick={changeClick}>changeBorder</Button>
        </div>
        <hr/>
        <div>
          <ThemeProvider theme={theme2}>
            <Typography variant='h2'>Theming</Typography>
            <Typography variant='pinkFont'>Material UI Themes allows you to customize default components, in order to edit themes you are going to have to import createTheme and ThemeProvider from materialui. createTheme allows you to edit the themes, while theme provider allows you to implement the edited themes. In order to implement those changes you have to pass createTheme as a prop in ThemeProvider which will wrap the component you want to edit. </Typography>
          </ThemeProvider>
            <Typography sx={{ color: 'myCustomColor.superLight'}}>You can also nest ThemeProviders and the inner ThemeProvider will overwrite the Parent ThemeProvider. make sure you pass another createTheme as its prop. Also create theme is a function so it has to be declared as a variable.</Typography>
          <Typography sx={{ color: 'myCustomColor.superDark' }}>Currently the theme has been set to dark mode. Initially when we wrapped this app with the Paper component we only saw dark mode applied dto the div, and not the entire site background. In order to get teh entire sight to darkmode we have to import cssBaseline. Not only does CssBaseline allow us to change the entire page to darkmode, we also now have the ability to make the default html h3 and p tags to be the same size as materialUi typography variants of h3 and p. Initially the font sizes are different but css CssBaseline makes everything more uniform.You only need to import cssBaseline once and it should be applied to the parent of all the components</Typography>
          <Typography variant='h3'>h3 custom typography</Typography>
          <ThemeProvider theme={theme2}>
            <Typography variant='h3'>h3 custom typography</Typography>
            <Typography>typography p customized</Typography>
            <Typography variant='pinkFont'>pinkFont custom variant</Typography>
          </ThemeProvider>
          <Typography>typography p default</Typography>
          <Typography>pinkFont no custom variant</Typography>
          <Typography>These two lines are both h3's, but the second one has been customized via createTheme, also it has been wrapped with its own ThemeProvider so as to not affect all other h3s</Typography>
        </div>
        <hr/>
        <div>
          <Typography variant='h3'>Icons, SVG, Icon buttons</Typography>
          <Typography>The material Ui icons is in a separate library <Link href='https://www.npmjs.com/package/@mui/icons-material'>MUI Icon Library</Link></Typography>
          <Typography>You can browse icons in MUI in this <Link href='https://mui.com/material-ui/material-icons/'>Icon Library</Link></Typography>
          <Facebook color='primary' fontSize='large'/>
          <Instagram color='primary' fontSize='medium'/>
          <YouTube color='primary' fontSize='small'/>
          <Typography>The Props of the Icons can be found here <Link href='https://mui.com/material-ui/api/icon/'>Icon Props</Link></Typography>
          <Typography>colors are adjustable via color props based on the primary colors of your website set in createTheme, fontSizes ot icon size is defaulted to medium </Typography>
          <Typography>You can create your own svg Icon component, in order to do so you have to wrap your icon with a SvgIcon component for more information click <Link href='https://mui.com/material-ui/icons/'>Here</Link> and look for the heading SVGIcon. Once created You can you materialUI props on it to edit it accordingly</Typography>
          <Typography>Sx props can be used to customize as well</Typography>
          <IconButton color='secondary'>
            <Facebook color='primary'/>
          </IconButton>
          <Typography>You can wrap a icon with the IconButton component to give the user visual feedback, so that they know that they clicked a button. The Button can inherit the icon Buttons color, but if you give the icon a color it will overwrite the parents color. If the colors are different from parent to child the click animation color will be set by the parent, while the icon color will be as indicated by icon color</Typography>
        </div> 
        <hr/>
        <div>
          <Typography variant='h3'>Loading Spinner / Animation</Typography>
          <Typography>There are various Loading components in MUI, such as Circular, and Linear. These Can be found in the <Link href='https://mui.com/material-ui/react-progress/'>Progress section</Link> in MUI. </Typography>
          <Typography variant='h4'>Circular Progress</Typography>
          <Typography>Circular component- most are indeterminate. such as the one below</Typography>
          <CircularProgress />
          <Typography>Circular components can have colors assigned to them</Typography>
          <CircularProgress color='success' />
          <CircularProgress color='secondary' />
          <CircularProgress color='primary' />
          <Typography>The above Circulars are indeterminate below are examples of determinate, to make circular components determinate assign the variant as 'determinate'. determinate components need a value in order to work. For the first four we have used fixed numbers. the last is a CircularProgress has a value of progress which is a state, that is being rendered by a useEffect. Also a setInterval method has been used in order to get the length of time for the progress to complete.</Typography>
          <CircularProgress variant="determinate" value={25} />
          <CircularProgress variant="determinate" value={50} />
          <CircularProgress variant="determinate" value={75} />
          <CircularProgress variant="determinate" value={100} />
          <CircularProgress variant="determinate" value={progress}/>
          <Typography>You can merge the CircularProgress with other components, this is called Interactive integration</Typography>
          <Box sx={{ display: 'flex', alignItems: 'center' }}>
            <Box sx={{ m: 1, position: 'relative' }}>
              <Fab
                aria-label="save"
                color="primary"
                sx={buttonSx}
                onClick={handleButtonClick}
              >
                {success ? <Check /> : <Save />}
              </Fab>
              {loading && (
                <CircularProgress
                  size={68}
                  sx={{
                    color: green[500],
                    position: 'absolute',
                    top: -6,
                    left: -6,
                    zIndex: 1,
                  }}
                />
              )}
            </Box>
            <Box sx={{ m: 1, position: 'relative' }}>
              <Button
                variant="contained"
                sx={buttonSx}
                disabled={loading}
                onClick={handleButtonClick}
              >
                Accept terms
              </Button>
              {loading && (
                <CircularProgress
                  size={24}
                  sx={{
                    color: green[500],
                    position: 'absolute',
                    top: '50%',
                    left: '50%',
                    marginTop: '-12px',
                    marginLeft: '-12px',
                  }}
                />
              )}
            </Box>
          </Box>
          <Typography>Here are the props for Circular progress <Link href='https://mui.com/material-ui/api/circular-progress/'>CircularProgress</Link></Typography>
          <Typography variant="h4">Linear Progress</Typography>
          <Typography> the most simple Linear Progress is the indeterminate</Typography>
          <LinearProgress />
          <Typography>Like the CircularProgress The LinearProgress can have colors assigned to them</Typography>
          <Stack sx={{ width: '100%' }} spacing={2}>
            <LinearProgress color='secondary'/>
            <LinearProgress color='success'/>
            <LinearProgress color='inherit'/>
          </Stack>
          <Typography>Here is an example of a linear determinate</Typography>
          <LinearProgress variant="determinate" value={progress} />
          <Typography>Here is an example of linear determinate with a buffer</Typography>
          <Typography>More customized and complex examples can be found <Link href='https://mui.com/material-ui/react-progress/'>here</Link> The props for linear are found in this Link <Link href='https://mui.com/material-ui/api/linear-progress/'>LinearProgress</Link> </Typography>
        </div>
        <hr/>
        <div>
          <Typography variant='h3'>Paper component</Typography>
          <Typography>Paper component- The background of an application resembles the flat, opaque texture of a sheet of paper, and an application's behavior mimics paper's ability to be re-sized, shuffled, and bound together in multiple sheets.</Typography>
          <Typography variant='h4'>Elevation</Typography>
          <Typography>elevation changes the size of a shadow to the paper component. In dark mode, raising the elevation makes the surface lighter, if you want the background color to be different you must set it via the sx prop</Typography>
          <Box
            sx={{
              display: 'flex',
              flexWrap: 'wrap',
              '& > :not(style)': {
                m: 1,
                width: 128,
                height: 128,
              },
            }}>
            <Paper elevation={0}> <Typography>elevation=0</Typography></Paper>
            <Paper elevation={1}> <Typography>elevation=1</Typography></Paper>
            <Paper elevation={3}> <Typography>elevation=3</Typography></Paper>
            <Paper elevation={6}> <Typography>elevation=6</Typography></Paper>
            <Paper elevation={10}> <Typography>elevation=10</Typography></Paper>
            <Paper elevation={15}> <Typography>elevation=15</Typography></Paper>
            <Paper elevation={24}> <Typography>elevation=24</Typography></Paper>
          </Box>
          <ThemeProvider theme={theme3}>
            <Paper>
              <Box
                sx={{
                  display: 'flex',
                  flexWrap: 'wrap',
                  '& > :not(style)': {
                    m: 1,
                    width: 128,
                    height: 128,
                  },
                }}>
                <Paper sx={{ backgroundColor: "red" }} elevation={0}> <Typography>elevation=0</Typography></Paper>
                <Paper elevation={0}> <Typography>elevation=0</Typography></Paper>
                <Paper elevation={1}> <Typography>elevation=1</Typography></Paper>
                <Paper elevation={3}> <Typography>elevation=3</Typography></Paper>
                <Paper elevation={6}> <Typography>elevation=6</Typography></Paper>
                <Paper elevation={10}> <Typography>elevation=10</Typography></Paper>
                <Paper elevation={15}> <Typography>elevation=15</Typography></Paper>
                <Paper elevation={24}> <Typography>elevation=24</Typography></Paper>
              </Box>
            </Paper>
          </ThemeProvider>
          <Typography variant='h4'>Outline</Typography>
          <Typography>You can also apply 'outlined' to a paper prop. the second paper also has a square prop attached to it</Typography>
          <Box
            sx={{
              display: 'flex',
              '& > :not(style)': {
                m: 1,
                width: 128,
                height: 128,
              },
            }}
            >
            <Paper variant="outlined" />
            <Paper variant="outlined" square />
          </Box>
        </div>
        <hr/>
        <div>
          <Typography variant='h3'>Rating</Typography>
          <Typography>Ratings provide insight regarding others' opinions and experiences, and can allow the user to submit a rating of their own. In order to use rating you must import the component from MUI and</Typography>
          <Box
            sx={{
              '& > legend': { mt: 2 },
            }}
          >
            <Typography component="legend">Controlled</Typography>
            <Rating
              name="simple-controlled"
              value={value}
              onChange={(event, newValue) => {
                setValue(newValue);
              }}
            />
            <Typography component="legend">Read only</Typography>
            <Rating name="read-only" value={value} readOnly />
            <Typography component="legend">Disabled</Typography>
            <Rating name="disabled" value={value} disabled />
            <Typography component="legend">No rating given</Typography>
            <Rating name="no-value" value={null} />
            <Typography variant='h5'>Rating Precision</Typography>
            <Typography>The rating can display any float number with the value prop. Use the precision prop to define the minimum increment value change allowed.</Typography>
            <Rating name="half-rating" defaultValue={2.5} precision={0.5} />
            <Rating name="half-rating-read" defaultValue={2.5} precision={0.5} readOnly />
          </Box>
          <Typography>To see more examples of ratings <Link href='https://mui.com/material-ui/react-rating/'>Ratings MUI</Link></Typography>
          <Typography>You change rating sizes via the size prop</Typography>
          <Rating name="size-small" defaultValue={2} size="small" />
          <Rating name="size-medium" defaultValue={2} />
          <Rating name="size-large" defaultValue={2} size="large" />
          <Typography>You can customize the rating by passing in a different icon. <Link href='https://mui.com/material-ui/react-rating/'>Rating MUI</Link></Typography>
          <Typography>You can add additional props, such as max which will allow you to increase the ratings number, highlightSelectedOnly prop allows you to do just that. An example is shown below</Typography>
          <Rating highlightSelectedOnly max={10} defaultValue={5} />
        </div>
        <hr/>
        <div>
          <Typography variant='h3'>Cards</Typography>
          <Typography>Cards contain content and actions about a single subject. They should be easy to scan for relevant and actionable information. Elements, like text and images, should be placed on them in a way that clearly indicates hierarchy.</Typography>
          <Card sx={{ minWidth: 275 }}>{card}</Card>
          <Typography>Cards can have the variant outlined as shown below</Typography>
          <Card variant='outlined'>{card}</Card>
          <Typography>Within the Card is the CardContent component it acts like a regular div</Typography>
          <Typography>CardActions- is a component which is wrapped around an interactive aspect of the card. Acts like a div also, used for styling</Typography>
          <Typography variant='h4'>Complex Interaction</Typography>
          <Typography></Typography>
          <Card sx={{ maxWidth: 345 }}>
            <CardHeader
              avatar={
                <Avatar sx={{ bgcolor: red[500] }} aria-label="recipe">
                  R
                </Avatar>
              }
              action={
                <IconButton aria-label="settings">
                  <MoreVert />
                </IconButton>
              }
              title="Shrimp and Chorizo Paella"
              subheader="September 14, 2016"
            />
            <CardMedia
              component="img"
              height="194"
              image={foodImage}
              alt="Paella dish"
            />
            <CardContent>
              <Typography variant="body2" color="text.secondary">
                This impressive paella is a perfect party dish and a fun meal to cook
                together with your guests. Add 1 cup of frozen peas along with the mussels,
                if you like.
              </Typography>
            </CardContent>
            <CardActions disableSpacing>
              <IconButton aria-label="add to favorites">
                <Favorite />
              </IconButton>
              <IconButton aria-label="share">
                <Share />
              </IconButton>
              <ExpandMoreA
                expand={expanded}
                onClick={handleExpandClick}
                aria-expanded={expanded}
                aria-label="show more"
              >
                <ExpandMore />
              </ExpandMoreA>
            </CardActions>
            <Collapse in={expanded} timeout="auto" unmountOnExit>
              <CardContent>
                <Typography paragraph>Method:</Typography>
                <Typography paragraph>
                  Heat 1/2 cup of the broth in a pot until simmering, add saffron and set
                  aside for 10 minutes.
                </Typography>
                <Typography paragraph>
                  Heat oil in a (14- to 16-inch) paella pan or a large, deep skillet over
                  medium-high heat. Add chicken, shrimp and chorizo, and cook, stirring
                  occasionally until lightly browned, 6 to 8 minutes. Transfer shrimp to a
                  large plate and set aside, leaving chicken and chorizo in the pan. Add
                  pimentón, bay leaves, garlic, tomatoes, onion, salt and pepper, and cook,
                  stirring often until thickened and fragrant, about 10 minutes. Add
                  saffron broth and remaining 4 1/2 cups chicken broth; bring to a boil.
                </Typography>
                <Typography paragraph>
                  Add rice and stir very gently to distribute. Top with artichokes and
                  peppers, and cook without stirring, until most of the liquid is absorbed,
                  15 to 18 minutes. Reduce heat to medium-low, add reserved shrimp and
                  mussels, tucking them down into the rice, and cook again without
                  stirring, until mussels have opened and rice is just tender, 5 to 7
                  minutes more. (Discard any mussels that don&apos;t open.)
                </Typography>
                <Typography>
                  Set aside off of the heat to let rest for 10 minutes, and then serve.
                </Typography>
              </CardContent>
            </Collapse>
          </Card>
          <Typography> This is a very complex card The code example can be found <Link href='https://mui.com/material-ui/react-card/'>Here</Link> </Typography>
          <Typography variant='h4'>Media</Typography>
          <Typography> CardMedia component acts as a div for images It is used in the complex card component above. when component="img", CardMedia relies on object-fit for centering the image </Typography>
          <Typography variant='h4'>Card props</Typography>
          <Typography>all can be edited via sx prop</Typography>
          <Typography><Link href='https://mui.com/material-ui/api/card-action-area/'>CardActionArea</Link></Typography>
          <Typography><Link href='https://mui.com/material-ui/api/card-actions/'>CardActions</Link>Rarely used</Typography>
          <Typography><Link href='https://mui.com/material-ui/api/card-content/'>CardContent</Link></Typography>
          <Typography><Link href='https://mui.com/material-ui/api/card-header/'>CardHeader</Link></Typography>
          <Typography><Link href='https://mui.com/material-ui/api/card-media/'>CardMedia</Link></Typography>
          <Typography><Link href='https://mui.com/material-ui/api/collapse/'>Collapse</Link></Typography>
          <hr/>
        </div>
        <Box>
          <Typography variant='h3'>Box</Typography>
          <Typography>The Box component serves as a wrapper component for most of the CSS utility needs. Box has very few <Link href='https://mui.com/material-ui/api/box/'>props</Link></Typography>
          <Typography> The use case for the Box component, is basically the same as a div. but the difference is that you can use <Link href='https://mui.com/system/properties/'>MUI system props</Link> , sx props, and MUI short hands. Use it where ever you use a div. One con yto using Box over divs is that rendering 1000 Box vs 1000 div takes a little longer. 100ms for div vs 370ms for Box</Typography>
        </Box>
        <hr/>
        <Box>
          <Typography variant='h3'>Badge</Typography>
          <Typography>Badge generates a small badge to the top-right of its child(ren).</Typography>
          <Badge badgeContent={4} color="primary">
            <Mail color="action" />
          </Badge>
          <Typography>In the above case it has been used on the nested/child Icon component, It takes a prop badgeContent, which in this case is the number 4.</Typography>
          <Typography variant="h4">Badge visibility</Typography>
          <Typography>Badge visibility can be affect via the invisible prop., the badge automatically hides when badgeContent is zero. You can override this with the show zero prop</Typography>
          <Badge color="secondary" badgeContent={0}>
            <Mail />
          </Badge>
          <Badge color="secondary" badgeContent={0} showZero>
            <Mail />
          </Badge>
          <Typography variant='h5'>Maximum value</Typography>
          <Typography>You can use the max prop to cap the value of the badge content. Max prop is defaulted to 99.</Typography>
          <Badge color="secondary" badgeContent={99}>
            <Mail />
          </Badge>
          <Badge color="secondary" badgeContent={100} sx={{m:2}}>
            <Mail />
          </Badge>
          <Badge color="secondary" badgeContent={1000} max={999}>
            <Mail />
          </Badge>
          <Typography variant='h5'>Dot badge</Typography>
          <Typography>The dot prop changes a badge into a small dot. This can be used as a notification that something has changed without giving a count.</Typography>
          <Badge color="secondary" variant="dot">
            <Mail />
          </Badge>
          <Typography variant='h5'>Badge Overlap</Typography>
          <Typography>You can use the overlap prop to place the badge relative to the corner of the wrapped element. The overlap prop is usally used for circular objects hence you must use overlap="circular"<Link href='https://mui.com/material-ui/react-badge/'>Example</Link></Typography>
          <Typography variant='h5'>Badge Alignment</Typography>
          <Typography>You can use the anchorOrigin prop to move the badge to any corner of the wrapped element. Here it is used to move the dot to the bottom left of the screen</Typography>
        </Box>
        <Badge
          anchorOrigin={{
            vertical: 'bottom',
            horizontal: 'left',
          }} variant='dot' color='secondary'
        >
          <Mail />
        </Badge>
        <hr/>
        <Box>
          <Typography variant='h3'>Skeleton</Typography>
          <Typography>Display a placeholder preview of your content before the data gets loaded to reduce load-time frustration. Its use case is that hte component is designed to be used directly in your components.</Typography>
          <Box maxWidth="13rem" mx='40%'>
            {/* For variant="text", adjust the height via font-size */}

            <Skeleton variant="text" sx={{ fontSize: '1rem' }} />

            {/* For other variants, adjust the size with `width` and `height` */}
            <Skeleton variant="circular" width={40} height={40} />
            <Skeleton variant="rectangular" width={210} height={60} />
            <Skeleton variant="rounded" width={210} height={60} />
          </Box>
          <Typography variant='h5'>Animation</Typography>
          <Typography>By default, the skeleton pulsates, but you can change the animation to a wave or disable it entirely. The skeltons below have the following animations in order: pulsate, wave, false.
          </Typography>
          <Box mx='40%' maxWidth='50%'>
            <Skeleton />
            <Skeleton animation="wave" />
            <Skeleton animation={false} />
          </Box>
          <Typography variant='h5'>Inferring dimensions</Typography>
          <Typography>In addition to accepting width and height props, the component can also infer the dimensions. It works well when it comes to typography as its height is set using em units. <Link href='https://mui.com/material-ui/react-skeleton/' >More Info</Link></Typography>
          <Typography variant="h5">Color</Typography>
          <Typography>The color of the component can be customized by changing its background-color CSS property. This is especially useful when on a black background (as the skeleton will otherwise be invisible).</Typography>
          <Skeleton
            sx={{ bgcolor: 'grey.900' }}
            variant="rectangular"
            width={210}
            height={118}
          />
        </Box>
        <Box>
          <Typography variant='h3'>Lists</Typography>
          <Typography>Lists are a continuous group of text or images. They are composed of items containing primary and supplemental actions, which are represented by icons and text.</Typography>
          <Typography variant="h5">Basic List</Typography>

          <Typography></Typography>
          <Box sx={{ width: '100%', maxWidth: 360, bgcolor: 'background.paper' }}>
            <nav aria-label="main mailbox folders">
              <List>
                <ListItem disablePadding>
                  <ListItemButton>
                    <ListItem>
                      <Inbox />
                    </ListItem>
                    <ListItemText primary="Inbox" />
                  </ListItemButton>
                </ListItem>
                <ListItem disablePadding>
                  <ListItemButton>
                    <ListItem>
                      <Drafts />
                    </ListItem>
                    <ListItemText primary="Drafts" />
                  </ListItemButton>
                </ListItem>
              </List>
            </nav>
            <Divider />
            <nav aria-label="secondary mailbox folders">
              <List>
                <ListItem disablePadding>
                  <ListItemButton>
                    <ListItemText primary="Trash" />
                  </ListItemButton>
                </ListItem>
                <ListItem disablePadding>
                  <ListItemButton component="a" href="#simple-list">
                    <ListItemText primary="Spam" />
                  </ListItemButton>
                </ListItem>
              </List>
            </nav>
          </Box>
          <Typography variant="h5">Nested List</Typography>
          <Typography></Typography>
          <List
            sx={{ width: '100%', maxWidth: 360, bgcolor: 'background.paper' }}
            component="nav"
            aria-labelledby="nested-list-subheader"
            subheader={
              <ListSubheader component="div" id="nested-list-subheader">
                Nested List Items
              </ListSubheader>
            }
          >
            <ListItemButton>
              <ListItem>
                <Send />
              </ListItem>
              <ListItemText primary="Sent mail" />
            </ListItemButton>
            <ListItemButton>
              <ListItem>
                <Drafts />
              </ListItem>
              <ListItemText primary="Drafts" />
            </ListItemButton>
            <ListItemButton onClick={handleClicka}>
              <ListItem>
                <Inbox />
              </ListItem>
              <ListItemText primary="Inbox" />
              {open ? <ExpandLess /> : <ExpandMore />}
            </ListItemButton>
            <Collapse in={open} timeout="auto" unmountOnExit>
              <List component="div" disablePadding>
                <ListItemButton sx={{ pl: 4 }}>
                  <ListItem>
                    <StarBorder />
                  </ListItem>
                  <ListItemText primary="Starred" />
                </ListItemButton>
              </List>
            </Collapse>
          </List>
          <Typography variant="h5">Folder List</Typography>
          <Typography></Typography>
          <List sx={{ width: '100%', maxWidth: 360, bgcolor: 'background.paper' }}>
            <ListItem>
              <ListItemAvatar>
                <Avatar>
                  <Image />
                </Avatar>
              </ListItemAvatar>
              <ListItemText primary="Photos" secondary="Jan 9, 2014" />
            </ListItem>
            <ListItem>
              <ListItemAvatar>
                <Avatar>
                  <Work />
                </Avatar>
              </ListItemAvatar>
              <ListItemText primary="Work" secondary="Jan 7, 2014" />
            </ListItem>
            <ListItem>
              <ListItemAvatar>
                <Avatar>
                  <BeachAccess />
                </Avatar>
              </ListItemAvatar>
              <ListItemText primary="Vacation" secondary="July 20, 2014" />
            </ListItem>
          </List>
          <Typography variant="h5">Selected ListItem</Typography>
          <Box sx={{ width: '100%', maxWidth: 360, bgcolor: 'background.paper' }}>
            <List component="nav" aria-label="main mailbox folders">
              <ListItemButton
                selected={selectedIndex === 0}
                onClick={(event) => handleListItemClick(event, 0)}
              >
                <ListItem>
                  <Inbox />
                </ListItem>
                <ListItemText primary="Inbox" />
              </ListItemButton>
              <ListItemButton
                selected={selectedIndex === 1}
                onClick={(event) => handleListItemClick(event, 1)}
              >
                <ListItem>
                  <Drafts />
                </ListItem>
                <ListItemText primary="Drafts" />
              </ListItemButton>
            </List>
            <Divider />
            <List component="nav" aria-label="secondary mailbox folder">
              <ListItemButton
                selected={selectedIndex === 2}
                onClick={(event) => handleListItemClick(event, 2)}
              >
                <ListItemText primary="Trash" />
              </ListItemButton>
              <ListItemButton
                selected={selectedIndex === 3}
                onClick={(event) => handleListItemClick(event, 3)}
              >
                <ListItemText primary="Spam" />
              </ListItemButton>
            </List>
          </Box>
          <Typography variant="h5">Align List Items</Typography>
          <Typography>When displaying three lines or more, the avatar is not aligned at the top. You should set the alignItems="flex-start" prop to align the avatar at the top, following the Material Design guidelines:</Typography>

          <List sx={{ width: '100%', maxWidth: 360, bgcolor: 'background.paper' }}>
            <ListItem alignItems="flex-start">
              <ListItemAvatar>
                <Avatar alt="Remy Sharp" src={foodImage} />
              </ListItemAvatar>
              <ListItemText
                primary="Brunch this weekend?"
                secondary={
                  <>
                    <Typography
                      sx={{ display: 'inline' }}
                      component="span"
                      variant="body2"
                      color="text.primary"
                    >
                      Ali Connors
                    </Typography>
                    {" — I'll be in your neighborhood doing errands this…"}
                  </>
                }
              />
            </ListItem>
            <Divider variant="inset" component="li" />
            <ListItem alignItems="flex-start">
              <ListItemAvatar>
                <Avatar alt="Travis Howard" src={foodImage} />
              </ListItemAvatar>
              <ListItemText
                primary="Summer BBQ"
                secondary={
                  <>
                    <Typography
                      sx={{ display: 'inline' }}
                      component="span"
                      variant="body2"
                      color="text.primary"
                    >
                      to Scott, Alex, Jennifer
                    </Typography>
                    {" — Wish I could come, but I'm out of town this…"}
                  </>
                }
              />
            </ListItem>
            <Divider variant="inset" component="li" />
            <ListItem alignItems="flex-start">
              <ListItemAvatar>
                <Avatar alt="Cindy Baker" src={foodImage} />
              </ListItemAvatar>
              <ListItemText
                primary="Oui Oui"
                secondary={
                  <>
                    <Typography
                      sx={{ display: 'inline' }}
                      component="span"
                      variant="body2"
                      color="text.primary"
                    >
                      Sandra Adams
                    </Typography>
                    {' — Do you have Paris recommendations? Have you ever…'}
                  </>
                }
              />
            </ListItem>
          </List>

          <Typography variant="h5">List Controls</Typography>
          <Typography>Checkbox</Typography>
          <Typography>A checkbox can either be a primary action or a secondary action.The checkbox is the primary action and the state indicator for the list item. The comment button is a secondary action and a separate target. secondary action usually apper on the right side of the list
          </Typography>
          <List sx={{ width: '100%', maxWidth: 360, bgcolor: 'background.paper' }}>
            {[0, 1, 2, 3].map((value) => {
              const labelId = `checkbox-list-label-${value}`;

              return (
                <ListItem
                  key={value}
                  secondaryAction={
                    <IconButton edge="end" aria-label="comments">
                      <Comment />
                    </IconButton>
                  }
                  disablePadding
                >
                  <ListItemButton role={undefined} onClick={handleToggle(value)} dense>
                    <ListItem>
                      <Checkbox
                        edge="start"
                        checked={checked.indexOf(value) !== -1}
                        tabIndex={-1}
                        disableRipple
                        inputProps={{ 'aria-labelledby': labelId }}
                      />
                    </ListItem>
                    <ListItemText id={labelId} primary={`Line item ${value + 1}`} />
                  </ListItemButton>
                </ListItem>
              );
            })}
          </List>
          <Typography>Switch</Typography>
          <Typography>The switch is the secondary action and a separate target.</Typography>
          <List
            sx={{ width: '100%', maxWidth: 360, bgcolor: 'background.paper' }}
            subheader={<ListSubheader>Settings</ListSubheader>}
          >
            <ListItem>
              <ListItem>
                <Wifi />
              </ListItem>
              <ListItemText id="switch-list-label-wifi" primary="Wi-Fi" />
              <Switch
                edge="end"
                onChange={handleTogglea('wifi')}
                checked={checkeda.indexOf('wifi') !== -1}
                inputProps={{
                  'aria-labelledby': 'switch-list-label-wifi',
                }}
              />
            </ListItem>
            <ListItem>
              <ListItem>
                <Bluetooth />
              </ListItem>
              <ListItemText id="switch-list-label-bluetooth" primary="Bluetooth" />
              <Switch
                edge="end"
                onChange={handleTogglea('bluetooth')}
                checked={checkeda.indexOf('bluetooth') !== -1}
                inputProps={{
                  'aria-labelledby': 'switch-list-label-bluetooth',
                }}
              />
            </ListItem>
          </List>
          <Typography variant="h5">Sticky Subheader</Typography>
          <Typography>Upon scrolling, subheaders remain pinned to the top of the screen until pushed off screen by the next subheader. This feature relies on CSS sticky positioning.</Typography>
          <List
            sx={{
              width: '100%',
              maxWidth: 360,
              bgcolor: 'background.paper',
              position: 'relative',
              overflow: 'auto',
              maxHeight: 300,
              '& ul': { padding: 0 },
            }}
            subheader={<li />}
          >
            {[0, 1, 2, 3, 4].map((sectionId) => (
              <li key={`section-${sectionId}`}>
                <ul>
                  <ListSubheader>{`I'm sticky ${sectionId}`}</ListSubheader>
                  {[0, 1, 2].map((item) => (
                    <ListItem key={`item-${sectionId}-${item}`}>
                      <ListItemText primary={`Item ${item}`} />
                    </ListItem>
                  ))}
                </ul>
              </li>
            ))}
          </List>
          <Typography variant="h5">Inset List Item</Typography>
          <Typography>The inset prop enables a list item that does not have a leading icon or avatar to align correctly with items that do.</Typography>
          <Typography></Typography>
          <Typography></Typography>
          <Typography variant="h5">Gutterless List</Typography>
          <Typography>When rendering a list within a component that defines its own gutters, ListItem gutters can be disabled with disableGutters.</Typography>
          <List sx={{ width: '100%', maxWidth: 360, bgcolor: 'background.paper' }}>
            {[1, 2, 3].map((value) => (
              <ListItem
                key={value}
                disableGutters
                secondaryAction={
                  <IconButton aria-label="comment">
                    <Comment />
                  </IconButton>
                }
              >
                <ListItemText primary={`Line item ${value}`} />
              </ListItem>
            ))}
          </List>

          <Typography>For more info on lists click <List href='https://mui.com/material-ui/react-list/'>here</List></Typography>

        </Box>
        <Box>
          <Typography variant='h3'>Avatar</Typography>
          <Typography>Avatars are found throughout material design with uses in everything from tables to dialog menus.</Typography>

          <Typography variant='h5'>Image Avatars</Typography>
          <Typography>Image avatars are created by passing img, src, or secSet prop to the Avatar component</Typography>
          <Avatar alt='avatar1' src={foodImage} />
          <Avatar alt='avatar2' src={foodImage} />
          <Avatar alt='avatar3' src={foodImage} />

          <Typography variant='h5'>Letter Avatars</Typography>
          <Typography>Avatar containing a Letter can be created by passing a sting a child</Typography>
          <Avatar sx={{ m: 1 }} >M</Avatar>
          <Avatar sx={{ bgcolor: red[500], m: 1 }}>R</Avatar>
          <Avatar sx={{ bgcolor: pink[500], m: 1 }}>P</Avatar>

          <Typography>You can use different background colors based on the name of the person</Typography>
          <Stack direction="row" spacing={2}>
            <Avatar {...stringAvatar('Kent Dodds')} />
            <Avatar {...stringAvatar('Jed Watson')} />
            <Avatar {...stringAvatar('Tim Neutkens')} />
          </Stack>

          <Typography variant='h5'>Sizes</Typography>
          <Typography>You can change the size of the avatar with the height and width and CSS properties. This can change with the sizes prop</Typography>
          <Stack direction='row' spacing={2}>
            <Avatar sx={{width: 24, height: 24 }} src={foodImage} />
            <Avatar  src={foodImage} />
            <Avatar sx={{width: 56, height: 56 }} src={foodImage} />

          </Stack>

          <Typography variant='h5'>Icon Avatars</Typography>
          <Typography>Icon Avatars are created by passing an icon as children</Typography>
          <Avatar sx={{ bgcolor: pink[500]}}>
            <Favorite />
          </Avatar>
          <Avatar sx={{ bgcolor: red[500]}}>
            <Facebook />
          </Avatar>
          <Avatar sx={{ bgcolor: green[500]}}>
            <Wifi />
          </Avatar>

          <Typography variant='h5'>Variants</Typography>
          <Typography>If you need a square or rounded avatar use the variant prop</Typography>
          <Avatar sx={{ bgcolor: green[500]}} variant='square'>
            <Wifi />
          </Avatar>
          <Avatar sx={{ bgcolor: red[500]}} variant='rounded'>
            <Favorite />
          </Avatar>

          <Typography variant='h5'>Fallbacks</Typography>
          <Typography>If there is an error loading the avatar image, the component falls back to an alternative in the following order: To Provided Children, First letter of alt text, a generic avatar Icon</Typography>
          <Avatar sx={{ bgcolor: pink[500] }} alt="Remy Sharp" src="./assets/images/seafood.jpeg">B</Avatar>
          <Avatar sx={{ bgcolor: pink[500] }} alt="Remy Sharp" src="./assets/images/seafood.jpeg" />
          <Avatar src="./assets/images/seafood.jpeg" />

          <Typography variant='h5'>Grouped</Typography>
          <Typography>AvatarGroup renders its children as a stack. Use the max prop to limit the number of avatars</Typography>
          <AvatarGroup max={4}>
            <Avatar>A</Avatar>
            <Avatar>B</Avatar>
            <Avatar>C</Avatar>
            <Avatar>D</Avatar>
            <Avatar>E</Avatar>
            <Avatar>F</Avatar>
          </AvatarGroup>

          <Typography variant='h6'>Total Avatars</Typography>
          <Typography>If you need to control the number of avatars not show you must use the total prop</Typography>
          <AvatarGroup total={24}>
            <Avatar>A</Avatar>
            <Avatar>B</Avatar>
            <Avatar>C</Avatar>
          </AvatarGroup>

          <Typography variant='h5'>With Badge</Typography>
          <StyledBadge
            overlap="circular"
            anchorOrigin={{ vertical: 'bottom', horizontal: 'right' }}
            variant="dot"
          >
            <Avatar alt="Remy Sharp" src={foodImage} />
          </StyledBadge>
          <Typography></Typography>


          <Typography><Link href='https://mui.com/material-ui/api/avatar/'>Avatar API</Link></Typography>
        </Box>
        <Box>
          <Typography variant='h3'>Button</Typography>
          <Typography>Buttons allow users to take actions with a single tap</Typography>
          <Typography variant='h5'>Basic Button</Typography>
          <Typography>Three variants text(default), contained, Outlined</Typography>
          <Stack direction='row' m={1}>
            <Button sx={{m:1}}>Text</Button>
            <Button variant='contained' sx={{m:1}}>Contained</Button>
            <Button variant='outlined' sx={{m:1}}>Outlined</Button>
          </Stack>
          <Typography variant='h5'>Handling Clicks</Typography>
          <Typography>All components accept onClick handler which can be applied to the root element</Typography>
          <Button variant='contained' onClick={() => {
            alert('clicked')
          }}>Click Me</Button>
          <Typography variant='h5'>Color</Typography>
          <Typography>You can add color to the buttons via the color prop, the main ones are primary, secondary, success, warning, etc.. you can also add custom colors</Typography>
          <Button variant='outlined' color='secondary'>Secondary</Button>
          <Button variant='contained' sx={{ m:1 ,bgcolor: red[800] }}>Red</Button>
          <Button variant='contained' color='success'>Success</Button>
          <Typography variant='h5'>Sizes</Typography>
          <Box sx={{ '& button': { m:1 } }}>
            <div>
              <Button size='small'>small</Button>
              <Button size='medium'>medium</Button>
              <Button size='large'>large</Button>
            </div>
            <div>
              <Button variant='outlined' size='small'>small</Button>
              <Button variant='outlined' size='medium'>medium</Button>
              <Button variant='outlined' size='large'>large</Button>
            </div>
            <div>
              <Button variant='contained' size='small'>small</Button>
              <Button variant='contained' size='medium'>medium</Button>
              <Button variant='contained' size='large'>large</Button>
            </div>
          </Box>
          <Typography></Typography>
          <Typography variant='h5'>Buttons with icons and label</Typography>
          <Typography>You can add icons to buttons inorder to make ui look better</Typography>
          <Button variant='outlined' startIcon={<Delete />}>Delete</Button>
          <Button variant='outlined' endIcon={<Send />}>Send</Button>

          <Typography variant='h5'>Icon Button</Typography>
          <Typography>Icon Buttons are found in apps and toolbars</Typography>
          <IconButton aria-label='delete'><Delete/></IconButton>
          <IconButton aria-label='delete' disabled color='primary'><Delete/></IconButton>
          <IconButton color='secondary' aria-label='inbox'><Inbox /></IconButton>
          <IconButton color='success' aria-label='favorite'><Favorite/></IconButton>

        </Box>
        <Box>
          <Typography variant='h3'>ButtonGroup</Typography>
          <Typography>Used to group related buttons</Typography>

          <Typography variant='h5'>Basic Button group</Typography>
          <Typography>The buttons can be grouped together by wrapping them in the ButtonGroup component.</Typography>

          <ButtonGroup variant='contained'>
            <Button>One</Button>
            <Button>Two</Button>
            <Button>Three</Button>
          </ButtonGroup>

          <Typography variant='h5'>Button Variants</Typography>
          <Typography>All the standard button variants are supported</Typography>
          <Stack direction='column' spacing={1}>
            <ButtonGroup variant='outlined'>
              <Button>One</Button>
              <Button>Two</Button>
              <Button>Three</Button>
            </ButtonGroup>
            <ButtonGroup variant='text'>
              <Button>One</Button>
              <Button>Two</Button>
              <Button>Three</Button>
            </ButtonGroup>
          </Stack>

          <Typography variant='h5'>Sizes and Colors</Typography>
          <Typography>The size and color props can be used to control the appearance of the button group</Typography>
          <Stack direction='column' spacing={1}>
            <ButtonGroup size='small' variant='outlined'>
              <Button>One</Button>
              <Button>Two</Button>
              <Button>Three</Button>
            </ButtonGroup>
            <ButtonGroup color='secondary' variant='outlined'>
              <Button>One</Button>
              <Button>Two</Button>
              <Button>Three</Button>
            </ButtonGroup>
            <ButtonGroup size='large' variant='outlined'>
              <Button>One</Button>
              <Button>Two</Button>
              <Button>Three</Button>
            </ButtonGroup>
          </Stack>

          <Typography variant='h5'>Vertical Group</Typography>
          <Typography>The button group can be displayed vertically using the orientation prop</Typography>
          <Box sx={{ display: 'flex', '& > *': { m:1} }}>
            <ButtonGroup orientation='vertical'>
              <Button>one</Button>
              <Button>two</Button>
              <Button>three</Button>
            </ButtonGroup>
            <ButtonGroup variant='contained' orientation='vertical'>
              <Button>one</Button>
              <Button>two</Button>
              <Button>three</Button>
            </ButtonGroup>
            <ButtonGroup variant='text' orientation='vertical'>
              <Button>one</Button>
              <Button>two</Button>
              <Button>three</Button>
            </ButtonGroup>
          </Box>

          <Typography variant='h5'>Split Button</Typography>
          <Typography>ButtonGroup can be used to create a split button. The split button can be used to create a dropdown menu next to the button</Typography>
          <Link href='https://mui.com/material-ui/react-button-group/#split-button'>Split Button</Link>

          <Typography variant='h5'>Disabled Elevation</Typography>
          <Typography>You can remove the elevation with the disableElevation prop</Typography>
          <ButtonGroup
            disableElevation
            variant="contained"
            aria-label="Disabled elevation buttons"
          >
            <Button>One</Button>
            <Button>Two</Button>
          </ButtonGroup>

          <Typography variant='h5'>API</Typography>
          <Link href='https://mui.com/material-ui/api/button-group/'>API ButtonGroup</Link>
        </Box>

      
      </CssBaseline>
    </div>

  )
}

export default App
