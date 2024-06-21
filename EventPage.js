import React, { Fragment } from 'react';
import { Container, TextField, Typography, Button, Box, Grid, Paper,Link } from '@mui/material';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import { styled } from '@mui/system';
import logo from './moqah.svg';
import tree from './tree.svg';
import wave from './Group.svg';
import logo2 from './M only (1).svg';



// NO.1
const Header1 = styled(Paper)(({ theme }) => ({
  width: '1519px',
  height: '150px',
  background:'#9798C5',
  display: 'inline',
  position: 'absolute',
  padding: theme.spacing(4, 0),
  [theme.breakpoints.down('sm')]: {
    padding: theme.spacing(2, 0),
  },
}));

// NO.2
const Header2 = styled(Paper)(({ theme }) => ({
  background: '#E2E0FF',
  textAlign: 'center',
  width: '1519px',
  height: '535px',
  top: '150px',
  boxShadow: '0px 4px 4px rgba(0, 0, 0, 0.25)',
  flexShrink: '0',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  position: 'relative',
  [theme.breakpoints.down('sm')]: {
    padding: theme.spacing(2, 0),
  },
}));
const SVGContainer = styled('div')({
  position: 'absolute',
  left: '50px',
  top: '50%',
  transform: 'translateY(-50%)',
});
const HeaderContent = styled('div')({
  textAlign: 'center',
});
const GradientText = styled('span')(({ gradient, paddingLeft }) => ({
  backgroundImage: gradient,
  WebkitBackgroundClip: 'text',
  WebkitTextFillColor: 'transparent',
  backgroundClip: 'text',
  fontFamily: 'Inter',
  fontStyle: 'normal',
  fontWeight: '700',
  fontSize: '90px',
  lineHeight: '36px',
  display: 'block',
  paddingBottom: '70px',
  paddingTop: '50px',
  paddingLeft: paddingLeft,
}));

const Header3 = styled(Paper)(({ theme }) => ({
  background: '#F8F8FA',
  display: 'flex',
  width: '1519px',
  height: '200px',
  justifyContent: 'center', 
  flexShrink: '0',
  position: 'absolute',
  flexDirection: 'column',
  top: '685px',
  padding: theme.spacing(4, 0),
  [theme.breakpoints.down('sm')]: {
    padding: theme.spacing(2, 0),
  },
}));
const GradientText1 = styled('span')(({ gradient, paddingLeft }) => ({
  backgroundImage: gradient,
  WebkitBackgroundClip: 'text',
  WebkitTextFillColor: 'transparent',
  backgroundClip: 'text',
  fontFamily: 'Inter',
  fontStyle: 'normal',
  fontWeight: '700',
  fontSize: '72.4px',
  lineHeight: '84px',
  display: 'block',
  gap: '0px',
  paddingLeft: paddingLeft,
  flexShrink: '0',
}));

const Header4 = styled(Paper)(({ theme }) => ({
  background: '#F8F8FA',
  display: 'flex',
  width: '1519px',
  height: '130px',
  flexDirection: 'column',
  justifyContent: 'center', 
  flexShrink: '0',
  position: 'absolute',
  top: '885px',
  padding: theme.spacing(4, 0),
  [theme.breakpoints.down('sm')]: {
    padding: theme.spacing(2, 0),
  },
}));

const Header5 = styled(Paper)(({ theme }) => ({
  background: '#F8F8FA',
  width: '1519px',
  height: '2500px',
  justifyContent: 'center', 
  flexShrink: '0',
  position: 'absolute',
  flexDirection: 'column',
  top: '1015px',
  padding: theme.spacing(4, 0),
  [theme.breakpoints.down('sm')]: {
    padding: theme.spacing(2, 0),
  },
}));

const Header6 = styled(Paper)(({ theme }) => ({
  background: '#F8F8FA',
  display: 'flex',
  width: '1519px',
  height: '150px',
  flexDirection: 'column',
  justifyContent: 'center', 
  flexShrink: '0',
  position: 'absolute',
  top: '3430px',
  padding: theme.spacing(4, 0),
  [theme.breakpoints.down('sm')]: {
    padding: theme.spacing(2, 0),
  },
}));

const Header7 = styled(Paper)(({ theme }) => ({
  width: '1519px',
  height: '253px',
  background: '#9798C5',
  display: 'flex',
  justifyContent: 'space-between',
  alignItems: 'center',
  position: 'absolute',
  top: '3580px',
  padding: theme.spacing(4, 0),
  [theme.breakpoints.down('sm')]: {
    padding: theme.spacing(2, 0),
  },
}));

const Header8 = styled(Paper)(({ theme }) => ({
  width: '1519px',
  height: '36.39px',
  background: '#C6B0EC',
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  position: 'absolute',
  top: '3833px',
  padding: theme.spacing(4, 0),
  [theme.breakpoints.down('sm')]: {
    padding: theme.spacing(2, 0),
  },
}));




const SubmitButton = styled(Button)(({ theme }) => ({
  background: '#666CFF',
  color: 'white',
  display: 'flex',
  width: '863px',
  gap: '10px',
  marginTop: '50px',
  marginLeft:'300px',
  padding: theme.spacing(1.5),
  [theme.breakpoints.down('sm')]: {
    padding: theme.spacing(1),
  },
}));

const theme = createTheme({
  components: {
    MuiOutlinedInput: {
      styleOverrides: {
        root: {
          '& .MuiOutlinedInput-notchedOutline': {
            height: '173px', // Adjust the height here
          },
        },
        input: {
          height: '100px', // Adjust the inner input height here
          padding: '0 14px',
        },
      },
    },
    MuiInputLabel: {
      styleOverrides: {
        root: {
          top: '-10px',
          left: '-14px',
        },
      },
    },
  },
});

const Wave = styled('img')(({ theme }) => ({
  width: '100%',
  marginTop: theme.spacing(4),
}));

const EventPage = () => {
  return (
    <Fragment>
      <Header1 elevation={3} style={{ display: 'flex', justifyContent: 'space-between' }}> 
      <img src={logo} alt="Company Logo" style={{paddingLeft:'200px',width: '535px', height: '73px',top: '200px',left: '146px',gap: '0px',opacity: '0px'}}/>
      <div style={{ display: 'flex', alignItems: 'center'}}> 
        <Link href="/cities" underline="none" component="button" style={{ marginRight: 50 }}>
          <Typography variant="h3" component="h1">
          <span
              style={{
                color:'white',
                fontFamily: 'Inter',
                fontWeight: '500',
                fontSize: '16px',
                lineHeight: '24px',
               }}>
            Cities
            </span>
          </Typography>
        </Link>
        <Link href="/trending" underline="none" component="button" style={{ marginRight: 50 }}>
          <Typography variant="h3" component="h1">
            <span
              style={{
              color:'white',
              fontFamily: 'Inter',
              fontWeight: '500',
              fontSize: '16px',
              lineHeight: '24px',
               
               }}>
            Trending
            </span>
          </Typography>
        </Link>
        <Link href="/categories" underline="none" component="button" style={{ marginRight: 50 }}>
          <Typography variant="h3" component="h1">
          <span
              style={{
                color:'white',
                fontFamily: 'Inter',
                fontWeight: '500',
                fontSize: '16px',
                lineHeight: '24px',
               }}>
            Categories
            </span>
          </Typography>
        </Link>
      </div>
    </Header1>

    <Header2 elevation={3}>
    <SVGContainer>
      <img src={tree} alt="Tree" />
    </SVGContainer>
    <HeaderContent>
      <Typography className="responsive-typography">
        <GradientText gradient='linear-gradient(180deg, #000 10%, rgba(0, 0, 0, 0.00) 100%)' paddingLeft='420px'>
          Register
        </GradientText>
      </Typography>
      <Typography className="responsive-typography">
        <GradientText gradient='linear-gradient(180deg, #FF002E 10%, rgba(255, 0, 46, 0.00) 100%)' paddingLeft='750px'>
          Your
        </GradientText>
      </Typography>
      <Typography className="responsive-typography">
        <GradientText gradient='linear-gradient(180deg, #761CBC 10%, rgba(118, 28, 188, 0.00) 100%)' paddingLeft='924px'>
          Event
        </GradientText>
      </Typography>
    </HeaderContent>
    </Header2>

    <Header3 elevation={3}>
      <Typography className='responsive-typography'>
      <GradientText1 gradient='linear-gradient(94deg, #666CFF 0%, #9BD0F5 100%)' paddingLeft='300px'>
          Your Dream,
        </GradientText1>
      </Typography>
      <Typography className='responsive-typography'>
      <GradientText1 gradient='linear-gradient(94deg, #666CFF 0%, #9BD0F5 100%)' paddingLeft='712px'>
          reimagined.
        </GradientText1>
      </Typography>
    </Header3>

    <Header4 elevation={3}>
    <div style={{width:'1600px', marginLeft:'-80px'}}>
      <img src={wave} alt="Wave" />
    </div>
    </Header4> 

    <Header5 elevation={3}>
    <Typography style={{color:'#000', textAlign:'center', fontFamily:'Poppins', fontSize:'36px', fontStyle:'normal', fontWeight:'700', lineHeight:'normal'}}>
        Registration
      </Typography>
      <Typography style={{marginLeft:'320px', marginTop:'50px',color:'#000', fontFamily:'Poppins', fontSize:'12px', fontStyle:'normal', fontWeight:400,lineHeight:'normal'}}>
        Your Name
      </Typography>
      <TextField  style={{width:'817px', height:'50px', marginLeft:'320px', marginTop:'10px', background:'white', fontFamily:'Poppins'}} id="outlined-basic" label="Enter Your Name" variant="outlined" />
      <Typography style={{marginLeft:'320px', marginTop:'50px',color:'#000', fontFamily:'Poppins', fontSize:'12px', fontStyle:'normal', fontWeight:400,lineHeight:'normal'}}>
        Your Email
      </Typography>
      <TextField  style={{width:'817px', height:'50px', marginLeft:'320px', marginTop:'10px', background:'white', fontFamily:'Poppins'}} id="outlined-basic" label="Enter your Email" variant="outlined" />
    
      <Typography style={{color:'#000', textAlign:'center', fontFamily:'Poppins', fontSize:'36px', fontStyle:'normal', fontWeight:'700', lineHeight:'normal', marginTop:'60px'}}>
        Contact Information
      </Typography>
      <Typography style={{marginLeft:'300px', marginTop:'50px',color:'#000', fontFamily:'Poppins', fontSize:'12px', fontStyle:'normal', fontWeight:400,lineHeight:'normal'}}>
        Organization Name
      </Typography>
      <TextField  style={{width:'866px', height:'50px', marginLeft:'300px', marginTop:'10px', background:'white', fontFamily:'Poppins'}} id="outlined-basic" label="Enter Organization Name" variant="outlined" />
      <Typography style={{marginLeft:'300px', marginTop:'50px',color:'#000', fontFamily:'Poppins', fontSize:'12px', fontStyle:'normal', fontWeight:400,lineHeight:'normal'}}>
        Primary Phone Number
      </Typography>
      <TextField  style={{width:'866px', height:'50px', marginLeft:'300px', marginTop:'10px', background:'white' , fontFamily:'Poppins'}} id="outlined-basic" label="Enter Contact Number" variant="outlined" />

      <Grid container spacing={2}>
        <Grid item xs={7} sm={3.4}>
        <Typography style={{marginLeft:'300px', marginTop:'50px',color:'#000', fontFamily:'Poppins', fontSize:'12px', fontStyle:'normal', fontWeight:400,lineHeight:'normal'}}>
        Event Facebook
      </Typography>
          <TextField fullWidth label="Event Facebook" variant="outlined" margin="normal" style={{height:'50px', marginLeft:'300px', background:'white',fontFamily:'Poppins'}}  />
        </Grid>
        <Grid item xs={7} sm={3.4} alignItems={'center'}>
        <Typography style={{marginLeft:'300px', marginTop:'50px',color:'#000', fontFamily:'Poppins', fontSize:'12px', fontStyle:'normal', fontWeight:400,lineHeight:'normal'}}>
        Event Instagram
      </Typography>
          <TextField fullWidth label="Event Instagram" variant="outlined" margin="normal" style={{height:'50px', marginLeft:'300px', background:'white',fontFamily:'Poppins'}}  />
        </Grid>
      </Grid>


      <Typography style={{color:'#000', textAlign:'center', fontFamily:'Poppins', fontSize:'36px', fontStyle:'normal', fontWeight:'700', lineHeight:'normal', marginTop:'60px'}}>
        Event Information
      </Typography>
      <Typography style={{marginLeft:'300px', marginTop:'50px',color:'#000', fontFamily:'Poppins', fontSize:'12px', fontStyle:'normal', fontWeight:400,lineHeight:'normal'}}>
        Event Title
      </Typography>
      <TextField  style={{width:'866px', height:'50px', marginLeft:'300px', marginTop:'10px', background:'white',fontFamily:'Poppins'}} id="outlined-basic" label="Enter Event Title" variant="outlined" />
      <Typography style={{marginLeft:'300px', marginTop:'50px',color:'#000', fontFamily:'Poppins', fontSize:'12px', fontStyle:'normal', fontWeight:400,lineHeight:'normal'}}>
        Event Venue
      </Typography>
      <TextField  style={{width:'866px', height:'50px', marginLeft:'300px', marginTop:'10px', background:'white',fontFamily:'Poppins'}} id="outlined-basic" label="Enter Event Venue" variant="outlined" />

      <Grid container spacing={2}>
        <Grid item xs={7} sm={3.4}>
        <Typography style={{marginLeft:'300px', marginTop:'50px',color:'#000', fontFamily:'Poppins', fontSize:'12px', fontStyle:'normal', fontWeight:400,lineHeight:'normal'}}>
        Start Time
      </Typography>
          <TextField fullWidth label="Enter Start Time" variant="outlined" margin="normal" style={{height:'50px', marginLeft:'300px', background:'white',fontFamily:'Poppins'}}  />
        </Grid>
        <Grid item xs={7} sm={3.4} alignItems={'center'}>
        <Typography style={{marginLeft:'300px', marginTop:'50px',color:'#000', fontFamily:'Poppins', fontSize:'12px', fontStyle:'normal', fontWeight:400,lineHeight:'normal'}}>
        End Time
      </Typography>
          <TextField fullWidth label="Enter Ending Time" variant="outlined" margin="normal" style={{height:'50px', marginLeft:'300px', background:'white',fontFamily:'Poppins'}}  />
        </Grid>
      </Grid>
        <Grid container spacing={2}>
        <Grid item xs={7} sm={3.4}>
        <Typography style={{marginLeft:'300px', marginTop:'50px',color:'#000', fontFamily:'Poppins', fontSize:'12px', fontStyle:'normal', fontWeight:400,lineHeight:'normal'}}>
        Start Date
      </Typography>
          <TextField fullWidth label="Enter Starting Date" variant="outlined" margin="normal" style={{height:'50px', marginLeft:'300px', background:'white',fontFamily:'Poppins'}}  />
        </Grid>
        <Grid item xs={7} sm={3.4} alignItems={'center'}>
        <Typography style={{marginLeft:'300px', marginTop:'50px',color:'#000', fontFamily:'Poppins', fontSize:'12px', fontStyle:'normal', fontWeight:400,lineHeight:'normal'}}>
        End Date
      </Typography>
          <TextField fullWidth label="Enter Ending Date" variant="outlined" margin="normal" style={{height:'50px', marginLeft:'300px', background:'white',fontFamily:'Poppins'}}  />
        </Grid>
      </Grid>

      <Typography style={{color:'#000', textAlign:'center', fontFamily:'Poppins', fontSize:'36px', fontStyle:'normal', fontWeight:'700', lineHeight:'normal', marginTop:'60px'}}>
        Event Description
      </Typography>
      <Typography style={{marginLeft:'300px', marginTop:'50px',color:'#000', fontFamily:'Poppins', fontSize:'12px', fontStyle:'normal', fontWeight:400}}>
      Event Description
      </Typography>
      <ThemeProvider theme={theme}>
      <TextField
        style={{
          width: '866px',
          height: '173px',
          marginLeft: '300px',
          marginTop: '15px',
          background: 'white',
          fontFamily:'Poppins'
        }}
        id="outlined-basic"
        label="Enter Contact Number"
        variant="outlined"
        InputProps={{
          style: {
            height: '20px', // To adjust the input field height
          }
        }}
        InputLabelProps={{
          style: {
            left: '3px'
          }
        }}
      />
    </ThemeProvider>

      <Box>
        <SubmitButton variant="contained">
          Submit your Information
        </SubmitButton>
      </Box>
    
    
    
    
    

    </Header5>

    <Header6 elevation={3}>
    <div style={{width:'1600px', marginLeft:'-80px'}}>
      //<img src={wave} alt="Wave" />
    </div>
    </Header6>

    <Header7 elevation={3} style={{ display: 'flex', justifyContent: 'space-between' }}>\
    <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'flex-start', marginLeft: '172px' }}>
        <img src={logo2} alt="MOQAH.PK Logo" style={{ width: '100px', height: '100px' }} />
        <h1 style={{ color: 'white', fontFamily:'Poppins', fontSize:'25px', fontWeight:'800'}}>MOQAH.PK</h1>
      </div>
      <div style={{ display: 'flex', justifyContent: 'space-around', flex: 1 }}>
        <div style={{ color: '#F2F6F9', fontFamily:'Poppins', fontSize:'12px', fontStyle:'normal',fontWeight:'700', lineHeight:'40px' }}>
          <p style={{marginBottom:'20px'}}>Home</p>
          <p style={{marginBottom:'20px'}}>About Us</p>
          <p>Blog</p>
        </div>
        <div style={{ color: '#F2F6F9', fontFamily:'Poppins', fontSize:'12px', fontStyle:'normal',fontWeight:'400', lineHeight:'40px'  }}>

          <p style={{display:'flex', alignItems:'center', marginBottom:'20px'}}>
          <svg xmlns="http://www.w3.org/2000/svg" width="20" height="13" viewBox="0 0 20 13" fill="none" style={{marginRight:'20px'}}>
            <path d="M18.1737 0H1.75121C0.783648 0 0 0.712619 0 1.58265V11.0786C0 11.9538 0.789407 12.6612 1.75121 12.6612H18.1737C19.1332 12.6612 19.9249 11.9567 19.9249 11.0786V1.58265C19.9249 0.714158 19.1444 0 18.1737 0ZM9.96225 1.0551C12.7623 1.0551 14.0842 4.511 12.0019 6.38294C11.5475 6.79142 11.2451 7.06335 11.2007 7.10318C10.87 7.40213 10.4302 7.56672 9.96245 7.56672C9.49468 7.56672 9.05493 7.40209 8.72306 7.10219C8.69233 7.07457 8.38696 6.80005 7.92151 6.38161C5.83926 4.50971 7.16229 1.0551 9.96225 1.0551ZM4.53885 7.8363C3.23776 9.00468 1.16747 8.08128 1.16747 6.33259C1.16747 4.58338 3.23882 3.66018 4.53966 4.82961C5.43316 5.63285 5.43278 7.03355 4.53885 7.8363ZM7.03947 11.6061C5.26804 11.6061 4.43082 9.42071 5.74882 8.23715L6.18132 7.84876C6.66979 7.41012 7.41039 7.41032 7.89862 7.84924C8.44991 8.34746 9.18285 8.62182 9.96245 8.62182C10.742 8.62182 11.475 8.34746 12.0252 7.85023C12.514 7.41075 13.2556 7.41054 13.7447 7.84975L14.1761 8.23715C15.4941 9.42071 14.6569 11.6061 12.8854 11.6061H7.03947ZM18.7574 6.33259C18.7574 8.08128 16.6871 9.00468 15.386 7.8363C14.4921 7.03355 14.4917 5.63285 15.3852 4.82961C16.6861 3.66018 18.7574 4.58338 18.7574 6.33259Z" fill="#F2F6F9"/>
          </svg>
            Email
        </p>

        <p style={{display:'flex', alignItems:'center', marginBottom:'20px'}}>
          <svg xmlns="http://www.w3.org/2000/svg" width="14" height="13" viewBox="0 0 14 13" fill="none" style={{marginRight:'20px'}}>
            <path d="M13.6097 8.9469L10.545 7.75989C10.2761 7.65631 9.96377 7.72586 9.77887 7.93053C8.96654 8.82749 7.64989 9.14328 6.64919 8.46282C5.92726 7.97191 5.2812 7.39604 4.72824 6.7508C3.95546 5.84904 4.27663 4.52701 5.2314 3.82077C5.45835 3.65395 5.5354 3.37136 5.4202 3.12835L4.10678 0.358665C3.97983 0.0956407 3.66391 -0.0486734 3.35429 0.0149276L0.508527 0.608431C0.210546 0.670618 -0.00049575 0.910463 -0.000427229 1.18685C-0.000427229 7.52991 5.68836 12.6612 12.6961 12.6612C13.002 12.6614 13.2675 12.4707 13.3364 12.2013L13.9931 9.62943C14.063 9.34827 13.9021 9.06185 13.6097 8.9469Z" fill="#F2F6F9"/>
          </svg>
            Phone Number
        </p>

          <p style={{display:'flex', alignItems:'center', marginBottom:'20px'}}>
          <svg xmlns="http://www.w3.org/2000/svg" width="14" height="13" viewBox="0 0 14 13" fill="none" style={{marginRight:'20px'}}>
            <path d="M11.0914 8.4408C11.0914 7.56673 10.3828 6.85815 9.50872 6.85815H9.1716C8.29752 6.85815 7.58895 7.56673 7.58895 8.4408C7.58895 9.31487 8.29753 10.0235 9.1716 10.0235H9.50872C10.3828 10.0235 11.0914 9.31487 11.0914 8.4408ZM10.4514 0C10.1601 0 9.9239 0.236192 9.9239 0.52755C9.9239 0.818908 9.68771 1.0551 9.39635 1.0551H4.61408C4.32272 1.0551 4.08653 0.818908 4.08653 0.52755C4.08653 0.236192 3.85033 0 3.55898 0H2.86286C2.57151 0 2.33531 0.236192 2.33531 0.52755C2.33531 0.818908 2.09912 1.0551 1.80776 1.0551H1.45934C0.656631 1.0551 0 1.64853 0 2.37398V11.3423C0 12.0678 0.656631 12.6612 1.45934 12.6612H12.5507C13.3534 12.6612 14.0101 12.0678 14.0101 11.3423V2.37398C14.0101 1.64853 13.3534 1.0551 12.5507 1.0551H12.2027C11.9113 1.0551 11.6751 0.818908 11.6751 0.52755C11.6751 0.236192 11.4389 0 11.1476 0H10.4514ZM12.5507 7.84731C12.5507 9.77755 10.9859 11.3423 9.0557 11.3423H4.95436C3.02412 11.3423 1.45934 9.77755 1.45934 7.84731C1.45934 5.91706 3.02412 4.35229 4.95436 4.35229H9.0557C10.9859 4.35229 12.5507 5.91706 12.5507 7.84731Z" fill="#F2F6F9"/>
          </svg>
              Working Days
          </p>
        </div>


        <div style={{ color: '#F2F6F9', fontFamily:'Poppins', fontSize:'12px', fontStyle:'normal',fontWeight:'400', lineHeight:'40px' }}>
          <p style={{marginBottom:'20px', textAlign:'right'}}>support@moqah.pk</p>
          <p style= {{marginBottom:'20px'}}>8884518856</p>
          <p>Monday - Sunday</p>
        </div>
      </div>


      </Header7>

    <Header8 elevation={3} style={{ display: 'flex', textAlign:'center'}}>
      <Typography style={{color:'#F2F6F9', fontFamily:'Poppins',fontSize:'12px', fontStyle:'normal', fontWeight:'400', lineHeight:'28px', textAlign:'center'}}>
        © 2024 <b>MOQAH.PK</b> Private Limited
      </Typography>
      </Header8>  


    </Fragment>

  );
};
export default EventPage;