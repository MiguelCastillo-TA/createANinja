import { useState } from "react";
import LabelCheckboxes from "../../components/inputs/LabelCheckboxes";
import LabelInputType from "../../components/inputs/LabelInputType";
import LabelSelect from "../../components/LabelSelect";
import StatDisplay from "../../components/StatDisplay";
import StatDisplayList from "../../components/StatDisplayList";
import HumanSvg from "../../components/svg/HumanSvg";

const POSITIONS = ['frontend', 'backend', 'fullstack'];
const LANGUAGES = ['css', 'html', 'javascript', 'python', 'java']

const initialNinjaStats = {
    name: '',
    age: 0,
    position: '',
    languages: []
}

const CreateANinja = () => {
    // this is state of the object that contains the information about the new ninja.
    // NAME: '' , AGE: 0 , POSITION: '' , LANGUAGES: []
    const [ninjaStats, setNinjaStats] = useState(initialNinjaStats);

    // this variable will let us know when the user was submitted their form for character creation
    // when TRUE => Ninja stats will appear on the HTML
    const [submitted, setSubmitted] = useState(false);

    // The function that will handle updating the ninja stats.
    // it will receive 'event' and through that event we can obtain the
    // stat they want to change and the new value
    const handleNinjaStatChange = (e) => {
        const name = e.target.name // name of the input changing
        const value = e.target.value // value of the input
        // first copy the current object state
        // then overwrite the specific stat
        setNinjaStats({...ninjaStats, [name]: value})
    }

    // This function will handle each individual check box check.
    const handleLanguageClick = (e) => {
        // we must check to see if the checked box exist in our array of languages. 
        // exist => the index of where it is found in the languages array
        // does not exist => -1
        const found = ninjaStats.languages.indexOf(e.target.value)
        // if does not exist in array => add to array
        if(found == -1){
            // we will copy the current ninja object stats
            // then find the array languages and add the new language to the list
            setNinjaStats({...ninjaStats, languages: [...ninjaStats.languages, e.target.value]});
        } 
        // the option is found in the array.
        else if(found >= 0){
            // we will copy the current ninja object stats
            // then find the array languages and update that with a new filtered array
            setNinjaStats({...ninjaStats, languages: ninjaStats.languages.filter((stat, index) => index != found)});
        }
    }

    // the function when a user clicks the submit button
    const handleFormSubmit = (e) => {
        // prevent the default action
        e.preventDefault();
        // change the variable submitted to true
        setSubmitted(true)
    }

    return (
        <div id="createANinjaContainer">
            <div className="content-wrp">
                <h1>Create A Ninja!</h1>
                <form onSubmit={handleFormSubmit}>
                    <LabelInputType label={"name"} value={ninjaStats.name} handleOnChange={handleNinjaStatChange} placeholder={"What is your name?"} type={"text"}/>
                    <LabelInputType label={"age"} value={ninjaStats.age} handleOnChange={handleNinjaStatChange} placeholder={"Hold Old Are you?"} type={"number"}/>
                    <LabelSelect label={"position"} value={ninjaStats.position} handleOnChange={handleNinjaStatChange} options={POSITIONS}/>
                    <LabelCheckboxes label={"languages"} options={LANGUAGES} handleOnChange={handleLanguageClick}/>
                    <input type="submit" value="Create Character" />
                </form>
            </div>
            <div className="content-wrp black-background">
                <section className="character-stats">
                    {
                        submitted &&
                        <>
                            <StatDisplay label={"Name"} stat={ninjaStats.name}/>
                            <StatDisplay label={"Age"} stat={ninjaStats.age}/>
                            <StatDisplay label={"Position"} stat={ninjaStats.position}/>
                            <StatDisplayList label={"languages"} stats={ninjaStats.languages}/>
                        </>
                    }
                </section>
                
                <div className="human-svg-wrp">
                    <HumanSvg fillAnimation={submitted}/>
                </div>
            </div>

        </div>
    )
}

export default CreateANinja;