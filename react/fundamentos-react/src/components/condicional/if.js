/*

<If teste={exp}>
    <span>...</span>
    <span>...</span>
    <span>...</span>
</If> --> Se a expressão for verdadeira, os elementos filhos serão renderizados na tela


*/




export default props => {
    if(props.teste) {
        return props.children
    } else {
        return false
    }
}
