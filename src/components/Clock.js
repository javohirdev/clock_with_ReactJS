import React, { Component } from 'react';
import {Container, Row, Col, Card, CardHeader, CardBody} from 'reactstrap';
import '../style/Main.scss';

class Clock extends React.Component {
 render() {
     function Clock(){
         var hours = document.getElementById('hours');
         var minutes = document.getElementById('minutes');
         var seconds = document.getElementById('seconds');

         var h = new Date().getHours();
         var m = new Date().getMinutes();
         var s = new Date().getSeconds();

         hours.innerHTML = h;
         minutes.innerHTML = m;
         seconds.innerHTML = s;
     }

     var interval = setInterval(Clock, 1000);
  return(
   <div>
       <Container>
            <Row>
                <Col className="mt-3" md={{size: 4, offset: 4}}>
                  <Card>
                      <CardHeader>
                          <div id="clock">
                          <h2 className="title-time text-center">Toshkent vaqti</h2>
                          </div>
                      </CardHeader>
                      <CardBody>
                        <div id="time">
                            <div>
                                <span id="hours">00</span> <span id="name">Soat</span>
                            </div>
                            <div>
                                <span id="minutes">00</span> <span id="name">Daqiqa</span>
                            </div>
                            <div>
                                <span id="seconds">00</span> <span id="name">Sekund</span>
                            </div>
                        </div>
                      </CardBody>
                  </Card>
                </Col>
            </Row>
       </Container>
   </div>
    )
   }
}

export default Clock;