import React, { Component } from 'react';
import './Today.css';

class Today extends Component {
   render() {
      return (
         <div>
           	<ul className="days d-flex list-inline">
         			<li className="active">
         				<h3 className="text-uppercase"><img src="/images/Dashboard/Tabs/icon-morning-green.png" /> Morning</h3>
         			</li>
         			<li>
         				<h3 className="text-uppercase"><img src="/images/Dashboard/Tabs/icon-afternoon-white.png" /> Afternoon</h3>
         			</li>
         			<li>
         				<h3 className="text-uppercase"><img src="/images/Dashboard/Tabs/icon-night-white.png" /> Evening</h3>
         			</li>
           	</ul>
            <div className="day-content box px-5 py-4 bg-white">
              <table class="table">
                <thead>
                  <tr>
                    <th className="border-0"><h4 class="text-uppercase text-orange">STATUS</h4></th>
                    <th className="border-0 text-center"><h4 class="text-uppercase text-orange">DONE</h4></th>
                    <th className="border-0 text-center"><h4 class="text-uppercase text-orange">SKIPPED</h4></th>
                    <th className="border-0 text-center"><h4 class="text-uppercase text-orange">NOT SURE</h4></th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td><h4>Take medications</h4></td>
                    <td className="text-center"><img src="/images/Care Giver Dashboard/icon-tick-active.png" /></td>
                    <td className="text-center"><img src="/images/Care Giver Dashboard/icon-tick-default.png" /></td>
                    <td className="text-center"><img src="/images/Care Giver Dashboard/icon-tick-default.png" /></td>
                  </tr>
                  <tr>
                    <td><h4>Have Breakfast</h4></td>
                    <td className="text-center"><img src="/images/Care Giver Dashboard/icon-tick-default.png" /></td>
                    <td className="text-center"><img src="/images/Care Giver Dashboard/icon-tick-active.png" /></td>
                    <td className="text-center"><img src="/images/Care Giver Dashboard/icon-tick-default.png" /></td>
                  </tr>
                  <tr>
                    <td><h4>Feed Cat</h4></td>
                    <td className="text-center"><img src="/images/Care Giver Dashboard/icon-tick-default.png" /></td>
                    <td className="text-center"><img src="/images/Care Giver Dashboard/icon-tick-default.png" /></td>
                    <td className="text-center"><img src="/images/Care Giver Dashboard/icon-tick-active.png" /></td>
                  </tr>
                  <tr>
                    <td><h4>Take Shower</h4></td>
                    <td className="text-center"><img src="/images/Care Giver Dashboard/icon-tick-active.png" /></td>
                    <td className="text-center"><img src="/images/Care Giver Dashboard/icon-tick-default.png" /></td>
                    <td className="text-center"><img src="/images/Care Giver Dashboard/icon-tick-default.png" /></td>
                  </tr>
                  <tr>
                    <td><h4>Make Bed</h4></td>
                    <td className="text-center"><img src="/images/Care Giver Dashboard/icon-tick-active.png" /></td>
                    <td className="text-center"><img src="/images/Care Giver Dashboard/icon-tick-default.png" /></td>
                    <td className="text-center"><img src="/images/Care Giver Dashboard/icon-tick-default.png" /></td>
                  </tr>
                </tbody>
              </table>
            </div>
         </div>
      );
   }
}
export default Today;
