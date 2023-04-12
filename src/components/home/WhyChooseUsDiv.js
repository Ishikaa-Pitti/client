
import resets from './_resets.module.css';
import classes from './WhyChooseUsDiv.module.css';

const WhyChooseUsDiv = () => {
  return (
    <div className={`${resets.clapyResets} ${classes.root}`}>
      <div className={classes.div}>
        <div className={classes.div2}>
          <div className={classes.whyChooseUS}>Why Choose US</div>
          <div className={classes.div3}>
            <div className={classes.divBefore}></div>
          </div>
        </div>
        <div className={classes.div4}>
          <div className={classes.div5}>
            <div className={classes.screenshot2022515At44722PMPng}></div>
            <div className={classes.div6}>
              <div className={classes.professionalServices}>Professional Services</div>
              <div className={classes.professionalExecutivesWithACus}>
                Professional executives with a customer-first approach and services
              </div>
            </div>
          </div>
          <div className={classes.div7}>
            <div className={classes.screenshot2022515At44729PMPng}></div>
            <div className={classes.div8}>
              <div className={classes.transparencyInWeightAndPricing}>Transparency in Weight and Pricing</div>
              <div className={classes.precisionWeighingAndBestInTheM}>
                Precision Weighing and best in the market pay-outs, on the spot
              </div>
            </div>
          </div>
          <div className={classes.div9}>
            <div className={classes.screenshot2022515At44736PMPng}></div>
            <div className={classes.div10}>
              <div className={classes.seamlessPickupTransportation}>Seamless Pickup &amp; Transportation</div>
              <div className={classes.timelyPickupWithSafeAndSecureT}>
                Timely pickup with safe and secure transportation
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
export default WhyChooseUsDiv;
