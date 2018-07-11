import { ConsoleAdapter } from "botbuilder";
import { LuisRecognizer, LuisRecognizerSettings } from "botbuilder-ai";

require('dotenv').config();

let adapter = new ConsoleAdapter();

adapter.listen(async context => {
    const luis = new LuisRecognizer({
        appId: process.env.APP_ID,
        subscriptionKey: process.env.LUIS_SUBSCRIPTION_KEY,
        serviceEndpoint: process.env.LUIS_SERVICE_ENDPOINT, /*i.e. 'https://westus.api.cognitive.microsoft.com'*/
        options: { verbose: true }
    } as LuisRecognizerSettings);

        let results = await luis.recognize(context);
        context.sendActivity(JSON.stringify(results, null, 2));
})

let branchOne = c => c.sendActivity('branch one');
let branchTwo = c => c.sendActivity('branch two');