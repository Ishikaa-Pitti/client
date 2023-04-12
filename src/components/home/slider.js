import resets from './_resets.module.css';
import classes from './slider.module.css';

/* @figmaId 1:5 */
const Slider = () => {
  return (
    <div className={`${resets.clapyResets} ${classes.root}`}>
    <div className={classes.div5}> <img src='../assets/slider.jpg' alt='slider'></img>
            <div className={classes.div6}> 
              <div className={classes.divBdtFa1b060}>
                <div className={classes.li}>
                  <div className={classes.div7}></div>
                  
              </div>
             
              <div className={classes.scrollDown}>Scroll Down</div>
            </div>
    </div>
    </div>
    </div>
  );
}

export default Slider;