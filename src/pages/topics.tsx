import './index.css'
import cre_to from '../components/create_topic'

export default function Topics(){
    return(
        <>
            <div>
                <h1>Topics</h1>
                <p>Need advice on a problem you are having, connect with others just like you and help work towards a solution</p>
            </div>

            <div>
                <navigator style={{display: "inline-block", gap : 5px}}>
                    <p>Trending topics</p>
                    <p>Search</p>
                    <p>Create Topic</p>
                </navigator>
            </div>

            <div>

            </div>
        </>
    )