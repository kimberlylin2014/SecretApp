import React from 'react';
import styles from './warningSession.styles.css';

const WarningSession = ({sessionEndWarning, handleCancelSessionWarning}) => (
  sessionEndWarning ? (
    <div className={styles.WarningSession}>
      <img
          src="/assets/cancel.png" width='20px'
          onClick={handleCancelSessionWarning}></img>
      <p >User Session Ended! Please Sign Back In</p>
    </div>
  ): null
)

export default WarningSession;