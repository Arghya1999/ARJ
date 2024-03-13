import React from "react";
import { Button, Grid, Link, Typography } from "@mui/material";

const Footer = () => {
  return (
    <div>
      <Grid
        className="bg-black text-white text-center mt-10"
        container
        sx={{ bgcolor: "black", color: "white", py: 3 }}
      >
        <Grid item xs={12} sm={6} md={3} >
          <Typography className="pb-5" variant="h6">
            Company
          </Typography>
          <div>
            <Button className="pb-5" variant="h6" style={{ textTransform: 'none' }}>
              About
            </Button>
          </div>
          <div>
            <Button className="pb-5" variant="h6" style={{ textTransform: 'none' }}>
              Blog
            </Button>
          </div>
          <div>
            <Button className="pb-5" variant="h6" style={{ textTransform: 'none' }}>
              Press
            </Button>
          </div>
          <div>
            <Button className="pb-5" variant="h6" style={{ textTransform: 'none' }}>
              Jobs
            </Button>
          </div>
          <div>
            <Button className="pb-5" variant="h6" style={{ textTransform: 'none' }}>
              Partners
            </Button>
          </div>
        </Grid>
        <Grid item xs={12} sm={6} md={3}  >
          <Typography className="pb-5" variant="h6">
            Solutions
          </Typography>
          <div>
            <Button className="pb-5" variant="h6" style={{ textTransform: 'none' }}>
              Marketing
            </Button>
          </div>
          <div>
            <Button className="pb-5" variant="h6" style={{ textTransform: 'none' }}>
              Analytics
            </Button>
          </div>
          <div>
            <Button className="pb-5" variant="h6" style={{ textTransform: 'none' }}>
              Commerce
            </Button>
          </div>
          <div>
            <Button className="pb-5" variant="h6" style={{ textTransform: 'none' }}>
              Insights
            </Button>
          </div>
          <div>
            <Button className="pb-5" variant="h6" style={{ textTransform: 'none' }}>
              Support
            </Button>
          </div>
        </Grid>
        <Grid item xs={12} sm={6} md={3}  >
          <Typography className="pb-5" variant="h6" >
            Documentation
          </Typography>
          <div>
            <Button className="pb-5" variant="h6" style={{ textTransform: 'none' }}>
              Guides
            </Button>
          </div>
          <div>
            <Button className="pb-5" variant="h6" style={{ textTransform: 'none' }}>
              API Status
            </Button>
          </div>
        </Grid>
        <Grid item xs={12} sm={6} md={3} >
          <Typography className="pb-5" variant="h6">
           Legal
          </Typography>
          <div>
            <Button className="pb-5" variant="h6" style={{ textTransform: 'none' }}>
              Claim
            </Button>
          </div>
          <div>
            <Button className="pb-5" variant="h6" style={{ textTransform: 'none' }}>
              Privacy
            </Button>
          </div>
          <div>
            <Button className="pb-5" variant="h6" style={{ textTransform: 'none' }}>
              Terms
            </Button>
            </div>
        </Grid>
        <Grid className="pt-20" item xs={12}>
            <Typography variant='body2' component="p" align="center">
                &copy; 2024 MyCompany. All rights reserved.
            </Typography>
            <Typography variant="body2" component="p" align="center">
              Made with passion and joy.
            </Typography>
            <Typography variant="body2" component="p" align="center">
               Icons made by{" "}
               <Link href="https://www.freepik.com" color='inherit' underline="always">
                Freepik
               </Link>
            </Typography>
            
        </Grid>
      </Grid>
    </div>
  );
};

export default Footer;
