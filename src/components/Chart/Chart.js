import * as React from 'react';
import Paper from '@mui/material/Paper';
import {
    Chart,
    ArgumentAxis,
    ValueAxis,
    AreaSeries,
    Title,
    Legend,
} from '@devexpress/dx-react-chart-material-ui';
import { styled } from '@mui/material/styles';
import { ArgumentScale, Animation } from '@devexpress/dx-react-chart';
import {
    curveCatmullRom,
    area,
} from 'd3-shape';
import { scalePoint } from 'd3-scale';

const data = [
    { day: 'Thứ 2', appStore: 10 },
    { day: 'Thứ 3', appStore: 89 },
    { day: 'Thứ 4', appStore: 27 },
    { day: 'Thứ 5', appStore: 17 },
    { day: 'Thứ 6', appStore: 106 },
    { day: 'Thứ 7', appStore: 91 },
    { day: 'CN', appStore: 91 },

];
const PREFIX = 'Demo';

const classes = {
    chart: `${PREFIX}-chart`,
};
const Root = props => (
    <Legend.Root {...props} sx={{ display: 'flex', margin: 'auto', flexDirection: 'row' }} />
);
const Label = props => (
    <Legend.Label {...props} sx={{ whiteSpace: 'nowrap' }} />
);
const StyledChart = styled(Chart)(() => ({
    [`&.${classes.chart}`]: {
        paddingRight: '20px',

    },
}));

const Area = props => (
    <AreaSeries.Path
        {...props}
        path={area()
            .x(({ arg }) => arg)
            .y1(({ val }) => val)
            .y0(({ startVal }) => startVal)
            .curve(curveCatmullRom)}
    />
);

export default class ChartAria extends React.PureComponent {
    constructor(props) {
        super(props);

        this.state = {
            data,
        };
    }

    render() {
        const { data: chartData } = this.state;
        return (
            <Paper className='border-none '>
                <StyledChart
                    data={chartData}
                    className={classes.chart}
                >
                    <ArgumentScale factory={scalePoint} />
                    <ArgumentAxis />
                    <ValueAxis />

                    <AreaSeries
                        name="App Store"
                        valueField="appStore"
                        argumentField="day"
                        seriesComponent={Area}
                    />

                    <Animation />


                </StyledChart>
            </Paper>
        );
    }
}
