import React from 'react';
import Paper from '@mui/material/Paper';
import Stack from '@mui/material/Stack';
import { styled } from '@mui/material/styles';
import './Notefication.css'


const Item = styled(Paper)(({ theme }) => ({
    ...theme.typography.body2,
    padding: theme.spacing(1),
    textAlign: 'center',
    color: theme.palette.text.secondary,
}));

export default function Notefication(props) {
    console.log(props.payLoadArr);
    return (
        <div id='Cart'>

            <Stack spacing={2} >
                {
                    props.payLoadArr.map(payload => {
                        return (<>
                            <Item>there is a customer need a car that has id:${payload.carid} has name${payload.carName} from ${payload.startDate} to ${payload.endDate}</Item>
                            <button onClick={() => props.renResponse(payload, 'ok')}>Accept</button>
                            <button onClick={() => props.renResponse(payload, 'null')}>Refuse</button>
                        </>)
                    })
                }
            </Stack>
        </div>
    )
}
