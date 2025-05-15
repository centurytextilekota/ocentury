import React from "react";

const CancellationAndRefund = () => {
  return (
    <div className="bg-white min-h-screen py-10 px-4 sm:px-10">
      <div className="max-w-4xl mx-auto text-gray-800 font-sans">
        <h1 className="text-3xl font-bold mb-6 text-center">
          Cancellation and Refund Policy
        </h1>

        <p className="mb-6">
          At <strong>O'Century</strong>, a division of Kota Textiles, we are
          committed to providing premium cotton fabrics and a seamless shopping
          experience. We understand that sometimes plans change. This policy
          outlines how we handle cancellations, refunds, and returns.
        </p>

        <h2 className="text-2xl font-semibold mb-4">Order Cancellation</h2>
        <ul className="list-disc ml-6 mb-6 space-y-2">
          <li>
            Orders can be cancelled within <strong>12 hours</strong> of
            placement, provided they haven’t been processed or shipped.
          </li>
          <li>
            To cancel, contact us at{" "}
            <a
              className="text-blue-600 underline"
              href="mailto:centurytextilekota@gmail.com"
            >
              centurytextilekota@gmail.com
            </a>{" "}
            or call{" "}
            <a className="text-blue-600 underline" href="tel:+917014267489">
              +91-7014267489
            </a>
            .
          </li>
          <li>
            Orders that are already processed or shipped cannot be cancelled.
          </li>
        </ul>

        <h2 className="text-2xl font-semibold mb-4">Refunds</h2>
        <ul className="list-disc ml-6 mb-6 space-y-2">
          <li>
            Refunds are available for cancelled orders (within the allowed
            window) and for products received damaged or defective.
          </li>
          <li>
            Report damage or incorrect products within <strong>48 hours</strong>{" "}
            of delivery with photos for verification.
          </li>
          <li>
            Approved refunds are processed back to the original payment method
            within <strong>7–10 business days</strong>.
          </li>
        </ul>

        <h2 className="text-2xl font-semibold mb-4">Return Policy</h2>
        <ul className="list-disc ml-6 mb-6 space-y-2">
          <li>
            Returns are not accepted unless the item is defective or the wrong
            product was delivered.
          </li>
          <li>
            Due to fabric customization and hygiene reasons, all sales are final
            unless an error occurred on our part.
          </li>
        </ul>

        <h2 className="text-2xl font-semibold mb-4">Contact Us</h2>
        <p className="mb-6">
          For any questions about our cancellation or refund policies, feel free
          to reach us:
        </p>
        <p className="mb-2">
          <strong>Email:</strong>{" "}
          <a
            className="text-blue-600 underline"
            href="mailto:centurytextilekota@gmail.com"
          >
            centurytextilekota@gmail.com
          </a>
        </p>
        <p className="mb-2">
          <strong>Phone:</strong>{" "}
          <a className="text-blue-600 underline" href="tel:+917014267489">
            +91-7014267489
          </a>
        </p>
        <p>
          <strong>Address:</strong> O'Century, 5-C/A, Vallabhbari, Gumanpura,
          Behind Central Square Mall, Kota, Rajasthan. 324007
        </p>
      </div>
    </div>
  );
};

export default CancellationAndRefund;
