
type Props = { // children'ın tipi buraya yazılır
    children: React.ReactNode;
};

function MyButton(props: Props) {
    return <button>{props.children}</button>
}

export default MyButton;