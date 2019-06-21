import React, {Component} from "react";
import {connect} from "react-redux";

import {
    incrementMilliseconds,
    decrementMilliseconds,
    resetClock,
    startClock,
    pauseClock,
    rewindClock
} from "../actions";
import {CLOCK_HANDS, STROKE_WIDTH} from "../config";

class Clock extends Component {
    render() {
        const {
            hands,
            milliseconds,
            resetClock,
            startClock,
            pauseClock,
            rewindClock
        } = this.props;

        return (

            <svg
                onMouseEnter={startClock}
                onMouseLeave={rewindClock}
                onDoubleClick={resetClock}
                onClick={pauseClock}
                className={'clock'}
                xmlns={'http://www.w3.org/2000/svg'}
                viewBox={'0 0 100 100'}
                width={'500'}
            >{hands.map((hand, i) => {
                const {radius, circumference, position, alpha} = hand;
                return <circle
                    key={i}
                    cx={'50'}
                    cy={'50'}
                    r={radius}
                    stroke={`rgba(1, 1, 1, ${alpha})`}
                    fill={'none'}
                    strokeWidth={STROKE_WIDTH}
                    strokeDasharray={circumference}
                    strokeDashoffset={position}
                />
            })
            }
            </svg>
        );
    }
}

const mapStateToProps = state => {
    const remainingTime = state.milliseconds;

    const getTicks = (hands, timeRemaining) => {
        const [hand, ...tailHands] = hands;
        hand.ticks = Math.floor(timeRemaining / hand.ms);

        return tailHands.length ? [hand, ...getTicks(tailHands, timeRemaining % hand.ms)] : [hand]
    };

    const hands = getTicks(CLOCK_HANDS, remainingTime)
        .map((hand, i) => {
            const offset = state.milliseconds >= hand.ms ? 1 : 0;
            const position = hand.circumference - ((hand.ticks + offset) / hand.maxTicks * hand.circumference)

            return {
                ...hand,
                position
            }
        });

    return {
        hands
    }
};

export default connect(
    mapStateToProps,
    {
        startClock,
        rewindClock,
        resetClock,
        pauseClock
    }
)(Clock);
