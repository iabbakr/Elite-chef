import eliteChefLogo from "./images/chef-icon.png"

export default function Header() {
    return (
        <header>
            <img src={eliteChefLogo}/>
            <h1>Elite Chef</h1>
        </header>
    )
}