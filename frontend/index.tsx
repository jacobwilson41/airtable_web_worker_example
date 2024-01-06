import { initializeBlock } from "@airtable/blocks/ui";
import React from "react";

function HelloWorldTypescriptApp() {
    const useWebWorker = () => {
        const worker = new Worker("worker.ts"); // throws an error "Failed to construct 'Worker': Script at 'https://localhost:9000/worker.ts' cannot be accessed from origin 'https://devblock---t-vjm-s-v7-g-mvh-c-b-r--55q8cmv.alt.airtableblocks.com'."
        worker.postMessage("foo");
    };

    // YOUR CODE GOES HERE
    return <button onClick={useWebWorker}>Click me</button>;
}

initializeBlock(() => <HelloWorldTypescriptApp />);
