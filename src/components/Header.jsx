import chefClaudeLogo from "/ChefClaudeIcon.svg"

export default function Header(){
    return (   
        <header>
            <img src={chefClaudeLogo} alt="Chef Claude Icon" />
            <h1>Chef Llama</h1>
        </header>
    )
}