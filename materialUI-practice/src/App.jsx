import { useState } from 'react'
import './App.css'
import { Button, Typography } from "@mui/material"
import { styled } from "@mui/material/styles"
import { Stack } from '@mui/system'

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
  

  const clickHandler = () => {
    setCount(count + 1)
  }
  
  const changeClick = () => {
    setChangeButton(!changeButton)
  }

  return (
    <div>
      <div >
        <Typography variant='orangeFont'>This has custom typography variant</Typography>

        <Typography variant="h3">
          Intro to Material UI h3
        </Typography>
        <Typography> this is default Typography "body" which is like p tag</Typography>
        <Typography>{count}</Typography>
        <Typography>materialUI's components are all customizable vai "theme" check component's API for color customization. You can check default theme on "https://mui.com/material-ui/customization/default-theme/"</Typography>

        <Typography>When changing default themes this should be done in the highest level of your react Tree. Usually index/main.js, then you must import ThemeProvider and createTheme in that file.</Typography>

        <Button variant="contained" onClick={clickHandler}>materialUI Button</Button>
        <Typography>The button below has a color of secondary while the previous button is defaulted to primary</Typography>
        <Button color="secondary" variant='contained'>Secondary Button</Button>

        <Typography sx={{ color: "myCustomColor.main" }}>The SX prop allows you to edit system properties, and CSS rules. This line has sx prop with a custom color utilized</Typography>
        <Button variant='contained' sx={{ p:2 }}>sx padding 2</Button>
        <Typography>mui default spacing is 4 pixels so the padding 2 of the above button is padding of 8 pixels. sx aliases such as p for padding, m for margin can be found here "https://mui.com/system/getting-started/the-sx-prop/"</Typography>

        <MyCustomButton variant='contained'>Custom Button</MyCustomButton>
        <MyCustomButton2 variant='contained'>Custom Button2</MyCustomButton2>
        <hr/>
      </div>
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
    </div>

  )
}

export default App
