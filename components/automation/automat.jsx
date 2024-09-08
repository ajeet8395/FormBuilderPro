"use client";
import Link from "next/link";
import Accordion from "../accordion";
import AutomatForm from "./automatForm";

export default function Automat() {
    return (
        <>
        <div className="w-2/4 h-full mx-auto py-5">
            <h2 className="text-lg text-gray-900 font-semibold">Automate what happens after a form is submitted</h2>
            <span className="text-sm w-3/4 block py-1 text-gray-700">Use simple workflows to take care of your follows-ups after contacts engage with your form. For example, sending them a follow-up email.
                <Link href="#" className="text-sky-600 font-semibold hover:underline"> What is a simple workflow?</Link>
            </span>
            <div className="border mt-6 bg-white">
                <Accordion
                    title={"Send a follow-up email after form submission"}
                    buttonClassName="bg-white hover:bg-white rounded-none py-5 border-b text-gray-900"
                    panelClassName="px-0 py-0"
                    showAdditionalElements={true}
                >
                    <AutomatForm/>
                </Accordion>
            </div>
        </div>
        </>
    );
}
