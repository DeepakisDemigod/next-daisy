"use client";

export default function CTA() {
  return (
    <a href="/auth/signin" aria-label="Start Counseling Now">
      <button className="bg-blue-600 text-white font-semibold  text-md py-2 px-5 rounded transition duration-300 ease-in-out hover:bg-blue-700 focus:outline-none focus:shadow-outline">
        Start Counseling Now
      </button>
    </a>
  );
}
