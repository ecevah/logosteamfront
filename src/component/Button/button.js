import styles from '../../styles/Button.module.scss';

export default function Buttons(props) {

    const Primary = (props) => {
        return (
            <>
                <button className={props.drop ? styles.dropPrimary : styles.PrimaryBtn}><button className={styles.text}>{props.text}</button></button>
            </>
        )
    }

    const Second = (props) => {
        return (
            <>
                <button className={`${props.drop ? styles.dropSecond :styles.SecondBtn} ${styles[props.theme]} ${styles[props.width]}`}><button className={styles.text}>{props.text}</button></button>
            </>
        )
    }

    const RenderBtn = (props) => {
        if (props.type === 'primary') {
            return (<Primary {...props} />)
        } else if (props.type === 'second') {
            return (<Second {...props} />)
        }
    }

    return (
        <>
            <RenderBtn {...props} />
        </>
    )
}