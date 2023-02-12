import React from "react";
import RestoOrders from "./RestoOrders";
import "./RestoOrders.css";
function Orders(){
    return <div>
    <table id="customers">
      <thead>
        <tr>
          <th>Cutomer</th>
          <th>Order Id</th>
          <th>Status</th>
          <th>Accept?</th>
        </tr>
      </thead>
      </table>       
    <RestoOrders name="Pragnya" orderId="120994" status="Active" accept="Accepted"/>
    <RestoOrders name="Ankur TK" orderId="010997" status="Delivered" accept="Accepted"/>
    <RestoOrders name="Arun TR" orderId="301295" status="InQueue" accept="Accept"/>
    </div>;
}
export default Orders;