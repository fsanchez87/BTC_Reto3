import {Paper, CssBaseline} from "@material-ui/core"
import AddCardorList from "./AddCardorList"
import ListTitle from "./ListTitle"
import TrelloCard from "./TrelloCard"

const TrelloList = () => {
    return (
        <Paper>
            <CssBaseline/>
            <ListTitle/>
            <TrelloCard/>
            <AddCardorList/>  
        </Paper>
    )
}

export default TrelloList
