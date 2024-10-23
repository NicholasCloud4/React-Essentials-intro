import React, { useState } from 'react';
import { EXAMPLES } from '../data';
import TabButton from './TabButton';

const Examples = () => {
    const [selectedTopic, setSelectedTopic] = useState("");


    function handleButtonClick(selectedButton) {
        // selectedButton => "COMPONENTS", "JSX", "PROPS", "STATE"
        setSelectedTopic(selectedButton);
        // console.log(selectedTopic);
    }
    return (
        <section id="examples">
            <h2>Examples</h2>
            <menu>
                <TabButton isSelected={selectedTopic === "components"} onSelect={() => handleButtonClick("components")}>COMPONENTS</TabButton>
                <TabButton isSelected={selectedTopic === "jsx"} onSelect={() => handleButtonClick("jsx")}>JSX</TabButton>
                <TabButton isSelected={selectedTopic === "props"} onSelect={() => handleButtonClick("props")}>PROPS</TabButton>
                <TabButton isSelected={selectedTopic === "state"} onSelect={() => handleButtonClick("state")}>STATE</TabButton>
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
        </section>
    )
}

export default Examples