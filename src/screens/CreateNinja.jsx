import { useState } from "react";
import LabelInputType from "../components/inputs/LabelInputType";
import StatDisplay from "../components/StatDisplay";
// ADVANCE
import HumanSvg from "../components/svg/HumanSvg";

const POSITIONS = ['frontend', 'backend', 'fullstack'];
const LANGUAGES = ['css', 'html', 'javascript', 'python', 'java']

const initialNinjaStats = {
    name: '',
    age: 0,
    position: '',
    languages: []
}

const CreateNinja = () => {
    // this is state of the object that contains the information about the new ninja.
    // NAME: '' , AGE: 0 , POSITION: '' , LANGUAGES: []
    const [ninjaStats, setNinjaStats] = useState(initialNinjaStats);

    // this variable will let us know when the user was submitted their form for character creation
    // when TRUE => Ninja stats will appear on the HTML
    const [submitted, setSubmitted] = useState(false);

    // The function that will handle input changes to update the ninja stats from the.
    // it will receive 'event' and with that event we can obtain the
    // stat that needs to be uodated and the new value
    const handleNinjaStatChange = (e) => {
        // name of the input changing
        // value of the input

        // Update state
        // first copy the current object state
        // then overwrite the specific stat
    }

    // This function will handle each individual check box check.
    const handleLanguageClick = (e) => {
        alert('language selected clicked')
        // we must check to see if the checked box exist in our array of languages. 
        // exist => the index of where it is found in the languages array
        // does not exist => -1


        // if does not exist in array => add to array
            // we will copy the current ninja object stats
            // then find the array languages and add the new language to the list

        // the option is found in the array.
            // we will copy the current ninja object stats
            // then find the array languages and update that with a new filtered array

    }

    // the function when a user clicks the submit button
    const handleFormSubmit = (e) => {
        // prevent the default action
        
        // change the variable submitted to true
        alert('submitted')
    }

    return (
        <div id="createANinjaContainer">
            <div className="content-wrp">
                <h1>Create A Ninja!</h1>
                <form onSubmit={handleFormSubmit}>
                    <LabelInputType label={"name"} type={"text"} placeholder={"What is your name?"}/>
                    <input type="submit" value="Create Character" />
                </form>
            </div>
            <div className="content-wrp black-background">
                <section className="character-stats">
                    {
                        submitted &&
                        <>
                            <StatDisplay label={"Name"} stat={ninjaStats.name}/>
                        </>
                    }
                </section>
                
                <div>
                    <HumanSvg fillAnimation={submitted}/>
                </div>
            </div>
        </div>
    )
}

export default CreateNinja;