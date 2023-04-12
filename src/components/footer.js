import resets from './_resets.module.css';
import classes from './footer.module.css';

const Footer = () => {
  return (
    <div className={`${resets.clapyResets} ${classes.root}`}>
      <div className={classes.footerLeft}>
        <div className={classes.usefulLinksBox}>
          <div className={classes.usefulLinks}>Useful Links</div>
          <div className={classes.usefulLinkDiv}>
            <div className={classes.usefulLinkItems}>
              <div className={classes.home}>Home</div>
              <div className={classes.aboutUs}>About Us</div>
              <div className={classes.products}>Products</div>
              <div className={classes.contactUs}>Contact Us</div>
              <div className={classes.fAQS}>FAQ’s</div>
              <div className={classes.termsOfUse}>Terms of use</div>
              <div className={classes.privacyPolicy}>Privacy Policy</div>
            </div>
          </div>
        </div>
        <div className={classes.officeAddressBox}>
          <div className={classes.officeAddress}>Office Address</div>
          <div className={classes.sKNSITSLonavalaPuneMaharashtra}>
            <div className={classes.textBlock}>SKNSITS, Lonavala, Pune</div>
            <div className={classes.textBlock2}>Maharashtra</div>
          </div>
          <div className={classes.mondayToSaturday10AM6PMSundayC}>
            <div className={classes.textBlock3}>Monday To Saturday</div>
            <div className={classes.textBlock4}>10 A.M. - 6 P.M. </div>
            <div className={classes.textBlock5}>Sunday Closed</div>
          </div>
          <div className={classes.timings}>Timings</div>
        </div>
      </div>
      <div className={classes.copyrightGroup5IshikaPittiSahi}>
        <div className={classes.textBlock6}>Copyright:</div>
        <div className={classes.textBlock7}> Group 5</div>
        <div className={classes.textBlock8}> Ishika Pitti</div>
        <div className={classes.textBlock9}> Sahil Adhangle</div>
        <div className={classes.textBlock10}> Mrunal Shirture</div>
        <div className={classes.textBlock11}> Sujit Gaikwad</div>
      </div>
    </div>
  );
}
export default Footer;
