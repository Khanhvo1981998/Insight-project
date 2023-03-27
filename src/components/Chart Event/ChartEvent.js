import * as React from "react";
import Paper from "@mui/material/Paper";
import {
    Chart,
    PieSeries,
    Title
} from "@devexpress/dx-react-chart-material-ui";
import "../Chart Event/ChartEvent.css"
import { Animation } from "@devexpress/dx-react-chart";

const data = [
    { ticket: "used-ticked", val: 30256 },
    { ticket: "unused-ticket", val: 28302 }
];

export default class ChartEvent extends React.PureComponent {
    constructor(props) {
        super(props);

        this.state = {
            data
        };
    }

    render() {
        const { data: chartData } = this.state;

        return (
            <Paper className=" chart-event">
                <Chart data={chartData}>

                    <PieSeries

                        valueField="val"
                        argumentField="ticket"
                        innerRadius={0.6}
                    >

                    </PieSeries>

                    <Animation />
                </Chart>
            </Paper>
        );
    }
}
