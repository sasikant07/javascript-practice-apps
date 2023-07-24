import React, {useState} from 'react'

const ProgressBar = () => {
    const [progress, setProgress] = useState(0);

    const handleProgressButtonClick = () => {
        if (progress < 100) {
            setProgress(progress + 20);
            // setTimeout(() => {
            //     setProgress(progress + 100);
            // }, 10)
        }
    }

    const handleResetButtonClick = () => {
        setProgress(0);
    }

    const getColor = () => {
        if (progress < 40) {
            return "#ff0000";
        } else if (progress < 70) {
            return "ffa500";
        } else {
            return "#2ecc71"
        }
    }

  return (
    <div className="container">
        <div className="progress-bar">
            <div className="progress-bar-fill" style={{width: `${progress}%`, backgroundColor: getColor()}}></div>
        </div>
        <div className="progress-label">{progress}%</div>
        <button onClick={handleProgressButtonClick}>Progress</button>
        <button onClick={handleResetButtonClick}>Reset</button>
    </div>
  )
}

export default ProgressBar;