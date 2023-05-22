import React from 'react';


class Classical extends React.Component{

    render(){
        return(
            <div className='card card1'>
            <h1>This is created using Class Component</h1>
            <p className='p'>This is done using External css</p>
            <h4 style={{color:'blue'}}>This is done by Inline css</h4>
            </div>
        )
        
    }
    
}
export default Classical;