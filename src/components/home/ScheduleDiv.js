
import resets from './_resets.module.css';
import classes from './ScheduleDiv.module.css';
import {Link} from 'react-router-dom';

const ScheduleDiv = () => {
  return (
    <div className={`${resets.clapyResets} ${classes.root}`}>
      <div className={classes.div}>
        <div className={classes.lookingForAQuickAndEasyWayToGe}>
          Looking for a quick and easy way to get rid of your scrap?
        </div>
        <div className={classes.a}>
          <Link to='/about'><div className={classes.scheduleAPICKUP}>Schedule A PICKUP </div></Link>
        </div>
      </div>
      <div className={classes.pROCESSLOGOPng}></div>
    </div>
  );
}
export default ScheduleDiv;
