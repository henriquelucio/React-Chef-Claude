import chefClaudeLogo from "/ChefClaudeIcon.svg"

export default function Header(){
    return (   
        <header>
            <img src={chefClaudeLogo} alt="Chef Claude Icon" />
            <h1>Chef Claude</h1>
        </header>
    )
}