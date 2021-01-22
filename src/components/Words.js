import React, { Component } from 'react';
import styled, { keyframes } from 'styled-components';
import { bounce, jello, flash } from 'react-animations';
import './Style.css'

const Bounce = styled.div`animation: 2s ${keyframes`${bounce}`} infinite`;
const Jello = styled.div`animation: 2s ${keyframes`${jello}`} infinite`;
const Flash = styled.div`animation: 2s ${keyframes`${flash}`} infinite`;

export default class ReactAnimations extends Component {
    render() {
        return (
            <>


                <div class="container">
                    <div class="bounse">
                        <Bounce><h1> write a cute note </h1></Bounce>
                    </div>
                    <br />
                    <br />
                    <br />
                    <br />
                    <br />
                    <br />
                    <br />
                    <br />

                    <div class="jello">
                        <Jello><h2> embrace your truth </h2></Jello>
                    </div>
                    <br />
                    <br />
                    <br />
                    <br />
                    <br />
                    <br />
                    <br />
                    <br />

                    <div class="flash">
                        <Flash><h3> give plenty of hugs </h3></Flash>
                    </div>
                </div>

            </>
        );

    }
}
