"use client";

export default function Footer() {
  return (
    <div>
      <div className="p-6">
        <div className="text-center mb-4">
          <span className="text-sm">
            Copyright © 2025 - All rights reserved
          </span>
        </div>
        <div className="flex justify-around">
          <div>
            <h2 className="text-lg font-semibold mb-2">LINKS</h2>
            <ul className="space-y-1">
              <li>
                <a href="" className="hover:underline">
                  Support
                </a>
              </li>
              <li>
                <a href="#pricing" className="hover:underline">
                  Pricing
                </a>
              </li>
              <li>
                <a href="#" className="hover:underline">
                  Dashboard
                </a>
              </li>
              <li>
                <a href="#" className="hover:underline">
                  Blog
                </a>
              </li>
              <li>
                <a href="#" className="hover:underline">
                  Affiliates - Earn 30%
                </a>
              </li>
            </ul>
          </div>
          <div>
            <h2 className="text-lg font-semibold mb-2">LEGAL</h2>
            <ul className="space-y-1">
              <li>
                <a href="/tnc" className="hover:underline">
                  Terms of Service
                </a>
              </li>
              <li>
                <a href="#" className="hover:underline">
                  Privacy Policy
                </a>
              </li>
              <li>
                <a href="/contact" className="hover:underline">
                  Contact
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}
