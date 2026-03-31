import Markdown from "react-markdown"

export default function ClaudeRecipe(props){
    if (props.toggle !== "")
        return (
            <section className="suggested-recipe-container" aria-live="polite">
                <h2>Chef Llama Recommends:</h2>
                    <Markdown>
                        {props.toggle}
                    </Markdown>
            </section>
    )
}