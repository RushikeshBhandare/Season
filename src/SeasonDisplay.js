import './SeasonDisplay.css'
import React from  'react'

const seasonConfig= {
    summer : {
        text: 'Lets hit the Beach !',
        iconName: 'sun'
    },
    winter: {
        text: "it's chilly ",
        iconName: 'snowflake'
    }
};

const GetSeason =(lat , month)=>{
    if (month > 2 && month < 9) {
        return lat > 0  ? 'summer' : 'winter';     
    }else{
        return lat > 0 ? 'winter' : 'summer';
    }
}   

const SeasonDisplay =(props)=>{
    const season = GetSeason(props.lat, new Date().getMonth())
    // const text = season === 'winter' ? 'Burr, it is chilly ' : 'lets hit the beach '
    // const icon = season ==='winter' ? 'snowflake' : 'sun';
  
     const { text, iconName } = seasonConfig[season];


    return <div className={`season-display ${season}`}>
             <i className={`icon-left massive ${iconName} icon`}/>
                    <h1>{text}</h1> 
               <i className={`icon-right massive ${iconName} icon`}/>

           </div>
}

export default SeasonDisplay;