import React, {useState} from 'react'

const Tabs = ({config}) => {
    const [activeTab, setActiveTab] = useState(0);
  return (
    <div className='tab'>
        <div className="tab-headers">
            {
                config.map((entry, index) => (
                    <div className={`tab-header ${activeTab === index ? "active" : ""}`}
                    key={index} onClick={() => setActiveTab(index)}>
                        {entry.header}
                    </div>
                ))
            }
        </div>
        <div className="tab-body">
            {config[activeTab].component}
        </div>
    </div>
  )
}

export default Tabs