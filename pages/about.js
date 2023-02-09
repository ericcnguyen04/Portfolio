// this is going to be our /about
// import css module
import styles from "../styles/About.module.css"

export default function About() {
    return (
        <div>
            <h1>About me</h1>

            <p className={styles.coolColor}>Huge dub</p>

            <p>{`don't use apostrophes unless they are in backticks`}</p>

            <h2>I am a different color</h2>
            <style jsx>{`
                h2 {
                    color: purple;
                }
            `}</style>

            {/* two ways of rendering images: stored locally and a url */}
            <img 
                src='/next.svg'
                alt='logo of my next favorite framework'
            />

            {/* getting image from outside sourceth */}
            <img 
                src="https://placekitten.come/300/600"
                alt="a magnificent creature"
            />
        </div>
    )
}