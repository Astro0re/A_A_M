import { BrowserRouter as Router, Routes, Route, Link, useNavigate } from "react-router-dom";

function scroll_through(){
  
}

export default function Index(){
    const navigate = useNavigate();

    return(
        <>
                <div>
            <h1>Welcome...</h1>
            <p onScroll={ scroll_through} id='scroll'></p>
            <p>To a safe space for men to express themselves, learn and grow.
            </p>
            <p>
            With advice and support from trusted and succesful male models.
            </p>
            <p> 
            join us as we disscus, grow and florish.
            </p>
        </div>

        
        </>
    );
}