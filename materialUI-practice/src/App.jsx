import { useState, useEffect, useRef } from 'react'
import './App.css'
import { Button, Typography, ThemeProvider, createTheme, Paper, CssBaseline, Link, IconButton, CircularProgress, Fab, Box, LinearProgress, Rating } from "@mui/material"
import { pink, green } from '@mui/material/colors'
import { styled } from "@mui/material/styles"
import { Stack } from '@mui/system'

import { Facebook, Instagram, YouTube, Check, Save } from '@mui/icons-material'


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
      </CssBaseline>
    </div>

  )
}

export default App
