import resets from './_resets.module.css';
import classes from './FeaturesDiv.module.css';

const FeaturesDiv = () => {
  return (
    <div className={`${resets.clapyResets} ${classes.root}`}>
      <div className={classes.div}>
        <div className={classes.featuresWeProvide}>Features We Provide</div>
        <div className={classes.div2}>
          <div className={classes.divBefore}></div>
        </div>
      </div>
      <div className={classes.div3}>
        <div className={classes.div4}>
          <div className={classes.securePaymentGateway}>Secure Payment Gateway</div>
        </div>
        <div className={classes.div5}>
          <div className={classes.detailedDashboard}>Detailed Dashboard</div>
        </div>
        <div className={classes.div6}>
          <div className={classes.openBox2Png}></div>
          <div className={classes.bookingMechanism}>Booking Mechanism</div>
        </div>
        <div className={classes.div7}>
          <div className={classes.feature4}>Feature 4</div>
        </div>
      </div>
    </div>
  );
}
export default FeaturesDiv;
