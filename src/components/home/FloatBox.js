import resets from './_resets.module.css';
import classes from './FloatBox.module.css';

const FloatBox = () => {
  return (
    <div className={`${resets.clapyResets} ${classes.root}`}>
      <div className={classes.div}>
        <div className={classes.div2}>
          <div className={classes.turnYourScrapIntoCash}>Turn Your Scrap into Cash</div>
          <div className={classes.scheduleAPickupInJustFewSimple}>Schedule a pickup in just few simple steps</div>
        </div>
      </div>
      <div className={classes.a}>
        <div className={classes.scheduleAPICKUP}>Schedule a PICKUP</div>
      </div>
    </div>
  );
}
export default FloatBox;
