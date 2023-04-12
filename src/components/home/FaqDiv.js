import resets from './_resets.module.css';
import classes from './FaqDiv.module.css';

const FaqDiv =() => {
  return (
    <div className={`${resets.clapyResets} ${classes.root}`}>
      <div className={classes.faqTitle}>
        <div className={classes.frequentlyAskedQuestion}>Frequently Asked Question</div>
        <div className={classes.dash}>
          <div className={classes.divBefore}></div>
        </div>
      </div>
      <div className={classes.faqList}>
        <div className={classes.solutionDiv}>
          <div className={classes.questionDiv}>
            <div className={classes.questionText}>Faq 1</div>
            <div className={classes.arrowIcon}>
              <div className={classes.unnamed}></div>
            </div>
          </div>
          <div className={classes.solutionText}>Sol 1</div>
        </div>
        <div className={classes.questionDiv2}>
          <div className={classes.questionText2}>Faq 2</div>
          <div className={classes.arrowIcon2}>
            <div className={classes.unnamed2}></div>
          </div>
        </div>
        <div className={classes.a}>
          <div className={classes.faq3}>Faq 3</div>
          <div className={classes.i}>
            <div className={classes.unnamed3}></div>
          </div>
        </div>
        <div className={classes.a2}>
          <div className={classes.faq4}>Faq 4</div>
          <div className={classes.i2}>
            <div className={classes.unnamed4}></div>
          </div>
        </div>
        <div className={classes.a3}>
          <div className={classes.faq5}>Faq 5</div>
          <div className={classes.i3}>
            <div className={classes.unnamed5}></div>
          </div>
        </div>
        <div className={classes.a4}>
          <div className={classes.faqNo6}>Faq no 6</div>
          <div className={classes.i4}>
            <div className={classes.unnamed6}></div>
          </div>
        </div>
      </div>
    </div>
  );
}
export default FaqDiv;
