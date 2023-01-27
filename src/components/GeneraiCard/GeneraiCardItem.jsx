import { Paper } from "components"
import { BiDotsVerticalRounded } from 'react-icons/bi'

const GeneraiCardItem = ({text, isOpenDown}) => {
    return (
        <Paper>
            <li>
                <span>{text}</span>
                <button onClick={isOpenDown}><BiDotsVerticalRounded/></button>
            </li>
        </Paper>
    )
}

export default GeneraiCardItem