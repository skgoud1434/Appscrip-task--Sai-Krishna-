import * as React from 'react';

import Box from '@mui/material/Box';

import Grid from '@mui/material/Grid2';
import "./Footer.css"
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import InstagramIcon from '@mui/icons-material/Instagram';
import Google1 from "../Icons/FooterIcons/Group 136187.svg"
import Google2 from "../Icons/FooterIcons/Group 136192.svg"
import Google3 from "../Icons/FooterIcons/Group 136193.svg"
import Google4 from "../Icons/FooterIcons/Group 136194.svg"
import Google5 from "../Icons/FooterIcons/Group 136195.svg"
import Google6 from "../Icons/FooterIcons/Group 136190.svg"



export default function FullWidthGrid() {
  return (
  

    <Box sx={{ flexGrow: 1 }} className="Box">
      <Grid container spacing={2}>
        <Grid size={{ xs: 12, md: 8, sm: 6 }}>
        <p className='heading1'> BE THE FIRST TO KNOW</p>
       <p>Sign up for updates from mettā muse.</p>
           <form>
           <input className="input" type ="text" placeholder='Enter your e-mail...'/> 
             <input className="button" type ="submit" value="subscribe"/>
           </form>
        </Grid>
        <Grid size={{ xs: 12, md: 4 , sm: 6}}>
          <div className='heading2'>
          <p >CONTACT US</p>
          </div>
       
           <p>+44 221 133 5360</p>
          <p>customercare@mettamuse.com</p>
           <p>Currency</p>
           <p>Transactions will be completed in Euros and a currency reference is available on hover.</p>
        </Grid>

        
        
        <Grid size={{ xs: 12, md: 4 , sm: 6}}>
        <p className='heading3'>mettā muse</p>
           <p>About Us</p>
           <p>Stories</p>
           <p>Artisans</p>
           <p>Boutiques</p>
           <p>Contact Us</p>
           <p>EU Compliances Docs</p>
        </Grid>
        <Grid size={{ xs: 12, md: 4, sm: 6}}>
        <p className='heading4'>Quick Links</p>
           <p>Orders & Shipping</p>
           <p>Join/Login as a Seller</p>            <p>Payment & Pricing</p>
         <p>Return & Refunds</p>            <p>FAQs</p>            <p>Privacy Policy</p>
         <p>Terms & Conditions</p>
        </Grid>
        <Grid size={{ xs: 12, md: 4 , sm: 6}}>
        <p className='heading5'>FOLLOW US</p>
           <span>{<LinkedInIcon/>}</span>
          
           <span>{<InstagramIcon/>}</span>
           <p>mettā muse Accepts</p>
          <img src={Google1} alt='pending' />
          <img src={Google2} alt='pending' />
          <img src={Google3} alt='pending' />
          <img src={Google4} alt='pending' />
          <img src={Google5} alt='pending' />
          <img src={Google6} alt='pending' />
           
        
        </Grid>
       
      </Grid>

     <p className='copyright'>Copyright © 2023 mettamuse. All rights reserved.</p>

    </Box>
  );
}
