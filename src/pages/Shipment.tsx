import React from "react";

const ShipmentPolicy: React.FC = () => {

  return (

    <div className="bg-gradient-warm min-h-screen w-full">
      <div className="max-w-7xl mx-auto p-6 space-y-4">
        <h1 className="text-2xl font-bold text-center">Shipment Policy – SajBiopak</h1>
        <p className="text-center"><strong>Effective Date:</strong> 29/08/2025</p>

        <h2 className="text-xl font-semibold">Introduction</h2>
        <p>
          SajBiopaks, part of Rums Enterprise, is committed to ensuring that all
          customized packaging products are delivered to our customers in a timely,
          safe, and reliable manner. This Shipment Policy outlines the procedures,
          responsibilities, and terms related to the shipping and delivery of
          products ordered through our website or directly from our company.
        </p>
        <p>
          By placing an order with SajBiopaks, customers agree to comply with the
          terms described below.
        </p>

        <h2 className="text-xl font-semibold">Shipment Charges</h2>
        <ul className="list-disc list-inside space-y-1">
          <li>Shipment charges are not fixed and will be calculated based on:</li>
          <ul className="list-disc list-inside ml-6 space-y-1">
            <li>Consignment Quantity – the total number of boxes or packages ordered.</li>
            <li>Distance – the delivery location from our manufacturing and distribution point in Feroke, Kozhikode, Kerala.</li>
          </ul>
          <li>Customers will be informed of the final shipment charge at the time of order confirmation.</li>
          <li>Any applicable taxes, duties, or handling fees charged by third-party logistics partners will be borne by the customer.</li>
        </ul>

        <h2 className="text-xl font-semibold">Delivery Timelines</h2>
        <ul className="list-disc list-inside space-y-1">
          <li>Standard delivery timelines depend on order size, customization requirements, and distance of the delivery location.</li>
          <li>Once the order is ready for dispatch, customers will be informed of the estimated delivery date.</li>
          <li>While SajBiopaks strives to ensure on-time delivery, we are not liable for delays caused by courier partners, transport strikes, natural disasters, or other factors beyond our control.</li>
        </ul>

        <h2 className="text-xl font-semibold">Shipment Methods</h2>
        <ul className="list-disc list-inside space-y-1">
          <li>We partner with reliable third-party logistics providers for domestic and regional deliveries.</li>
          <li>For bulk consignments, transportation may be arranged through cargo or freight services.</li>
          <li>Customers may also choose to arrange their own pickup from our facility in Feroke, Kozhikode, Kerala, after prior confirmation.</li>
        </ul>

        <h2 className="text-xl font-semibold">Packaging Standards</h2>
        <ul className="list-disc list-inside space-y-1">
          <li>All products are packed carefully to ensure they remain safe and undamaged during transit.</li>
          <li>SajBiopaks uses protective and eco-friendly materials wherever applicable to maintain the quality of the consignment.</li>
        </ul>

        <h2 className="text-xl font-semibold">Risk & Responsibility</h2>
        <ul className="list-disc list-inside space-y-1">
          <li>Ownership and risk of goods pass to the customer once the order is handed over to the shipping carrier.</li>
          <li>SajBiopaks is not liable for loss, theft, or damage occurring during transit. However, we will assist customers in coordinating with the logistics provider to resolve such issues.</li>
        </ul>

        <h2 className="text-xl font-semibold">Damages & Shortages</h2>
        <ul className="list-disc list-inside space-y-1">
          <li>Customers must inspect all shipments upon delivery.</li>
          <li>Any damages, shortages, or discrepancies must be reported to us at <a href="mailto:sajbiopak@gmail.com" className="text-blue-600 underline">sajbiopak@gmail.com</a> within 48 hours of delivery, along with photographs as evidence.</li>
          <li>Depending on the situation, SajBiopaks may provide replacements or alternate resolutions at its sole discretion. Refunds will not be issued.</li>
        </ul>

        <h2 className="text-xl font-semibold">International Shipping</h2>
        <ul className="list-disc list-inside space-y-1">
          <li>At present, SajBiopaks primarily caters to domestic shipments within India.</li>
          <li>For international orders, special arrangements may be considered upon request. In such cases, all customs duties, taxes, and import charges will be the customer’s responsibility.</li>
        </ul>

        <h2 className="text-xl font-semibold">Customer Support</h2>
        <p>For any shipment-related queries, customers can reach us at:</p>
        <p>
          SajBiopaks (Rums Enterprise) <br />
          Pullikadavu Road, Perumugham, Feroke, <br />
          Kozhikode, Kerala – 673631 <br />
          Email: <a href="mailto:sajbiopak@gmail.com" className="text-blue-600 underline">sajbiopak@gmail.com</a> <br />
          Website: <a href="https://sajbiopak.com" className="text-blue-600 underline">https://sajbiopak.com</a>
        </p>

        <h2 className="text-xl font-semibold">Policy Updates</h2>
        <p>
          SajBiopaks reserves the right to revise or update this Shipment Policy at
          any time without prior notice. Customers are encouraged to review this
          page periodically for the latest terms.
        </p>
      </div>
    </div>
  );
};

export default ShipmentPolicy;
