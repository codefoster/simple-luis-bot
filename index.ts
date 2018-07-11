import { ConsoleAdapter } from "botbuilder";
import { QnAMaker, QnAMakerEndpoint } from "botbuilder-ai";

require('dotenv').config();

let adapter = new ConsoleAdapter();

adapter.listen(async context => {
    let qna = new QnAMaker({
        host: process.env.QNA_HOST,
        endpointKey: process.env.QNA_ENDPOINT_KEY,
        knowledgeBaseId: process.env.QNA_KBID
    } as QnAMakerEndpoint);
    
    let answers = await qna.generateAnswer(context.activity.text);
    context.sendActivity(JSON.stringify(answers, null, 2));
})