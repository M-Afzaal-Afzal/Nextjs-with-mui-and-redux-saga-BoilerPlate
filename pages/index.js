import Container from '@material-ui/core/Container';
import Typography from '@material-ui/core/Typography';
import Box from '@material-ui/core/Box';
import * as actions from '../src/store/counter/counter.actions';

import {useSelector, useDispatch} from "react-redux";
import {Button} from "@material-ui/core";
import {selectCounterValue} from '../src/store/counter/counter.selectors'

export default function Index() {

    const dispatch = useDispatch();
    const counter = useSelector(selectCounterValue)

    const addHandler = () => {
        dispatch(actions.incrementCount());
    }

    const subHandler = () => {
        dispatch(actions.decrementCount());
    }

    return (
        <Container maxWidth="sm">
            <Box my={4}>
                <Typography variant="h4" component="h1" gutterBottom>
                    Next.js example
                </Typography>
                <p>counter: {counter}</p>
                <Button onClick={addHandler}>Add One</Button>
                <Button onClick={subHandler}>Remove One</Button>
            </Box>
        </Container>
    );
}
