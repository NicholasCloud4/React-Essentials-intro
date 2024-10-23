import { useState } from "react";
import { CORE_CONCEPTS, EXAMPLES } from "./data.js";
import Header from "./components/Header/Header.jsx";
import CoreConcept from "./components/CoreConcept.jsx";
import TabButton from "./components/TabButton.jsx";

function App() {

    const [selectedTopic, setSelectedTopic] = useState("");


    function handleButtonClick(selectedButton) {
        // selectedButton => "COMPONENTS", "JSX", "PROPS", "STATE"
        setSelectedTopic(selectedButton);
        // console.log(selectedTopic);
    }
    return (
        <div>
            <Header />
            <main>
                <section id="core-concepts">
                    <h2>Core Concepts</h2>
                    <ul>
                        {CORE_CONCEPTS.map((conceptItem) => <CoreConcept key={conceptItem.title} {...conceptItem} />)}

                        {/* <CoreConcept
                            image={CORE_CONCEPTS[0].image}
                            title={CORE_CONCEPTS[0].title}
                            description={CORE_CONCEPTS[0].description}
                        /> */}
                        {/* Can also type like this to make shorter: */}
                        {/* <CoreConcept {...CORE_CONCEPTS[0]} /> */}
                        {/* <CoreConcept {...CORE_CONCEPTS[1]} />
                        <CoreConcept {...CORE_CONCEPTS[2]} />
                        <CoreConcept {...CORE_CONCEPTS[3]} /> */}
                    </ul>
                </section>
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
            </main>
        </div>
    );
}

export default App;
