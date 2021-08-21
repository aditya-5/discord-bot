export default class{
    name = "";
    category="General";

    async execute (msg, ...args){
        throw new TypeError("Some error occurred in the command.js file")
    }
}