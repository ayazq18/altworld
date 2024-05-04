import Footer from "@/(Components)/Footer";
import SalesSection from "@/(Components)/SalesSection";
import SideNavBar from "@/(Components)/SideNavBar";
import { Grid } from "@mui/material";

export default function Home() {
  return (
    <>
      <Grid container spacing={0} gap={5} sx={{}}>
        <SideNavBar />
        <SalesSection />
      </Grid>
      <Footer />
    </>
  );
}
