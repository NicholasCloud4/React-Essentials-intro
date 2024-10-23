import React, { useState } from 'react';
import { EXAMPLES } from '../data';
import TabButton from './TabButton';
import Section from './Section';

const Examples = () => {
    const [selectedTopic, setSelectedTopic] = useState("");


    function handleButtonClick(selectedButton) {
        // selectedButton => "COMPONENTS", "JSX", "PROPS", "STATE"
        setSelectedTopic(selectedButton);
        // console.log(selectedTopic);
    }
    return (
        <Section title="Examples" id="examples">
            <h2></h2>
            <menu>
                <TabButton isSelected={selectedTopic === "components"} onClick={() => handleButtonClick("components")}>COMPONENTS</TabButton>
                <TabButton isSelected={selectedTopic === "jsx"} onClick={() => handleButtonClick("jsx")}>JSX</TabButton>
                <TabButton isSelected={selectedTopic === "props"} onClick={() => handleButtonClick("props")}>PROPS</TabButton>
                <TabButton isSelected={selectedTopic === "state"} onClick={() => handleButtonClick("state")}>STATE</TabButton>
            </menu>

            {/* Used turnery operator to check if selectedTopic is empty */}
            {selectedTopic === "" ? <p>Please select a topic</p> :
                <div id="tab-content">
                    <h3>{EXAMPLES[selectedTopic].title}</h3>
                    <p>{EXAMPLES[selectedTopic].description}</p>
                    <pre>
                        <code>
                            {EXAMPLES[selectedTopic].code}
                        </code>
                    </pre>
                </div>}
        </Section>
    )
}

export default Examples