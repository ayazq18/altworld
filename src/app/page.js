import InfoSection from "@/(Components)/InfoSection";
import SalesSection from "@/(Components)/SalesSection";
import SideNavBar from "@/(Components)/SideNavBar";
import { Grid } from "@mui/material";
import Image from "next/image";
// import styles from "./page.module.css";

export default function Home() {
  return (
    <Grid container spacing={0} gap={5} sx={{}}>
      <SideNavBar />
      <SalesSection />
      {/* <InfoSection /> */}
    </Grid>


  );
}
