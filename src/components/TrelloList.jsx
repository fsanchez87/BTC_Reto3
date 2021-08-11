import {Paper, CssBaseline} from "@material-ui/core"
import ListTitle from "./ListTitle"
import TrelloCard from "./TrelloCard"

const TrelloList = () => {
    return (
        <Paper>
            <CssBaseline/>
            <ListTitle/>
            <TrelloCard/>  
        </Paper>
    )
}

export default TrelloList
