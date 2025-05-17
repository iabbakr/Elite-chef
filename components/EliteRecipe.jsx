import ReactMarkdown from "react-markdown"

export default function EliteRecipe(props) {
    return (
        <section className="suggested-recipe-container" aria-live="polite">
            <h2>EliteChef Recommends:</h2>
            <ReactMarkdown>{props.recipe}</ReactMarkdown>
        </section>
    )
}