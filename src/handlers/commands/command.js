export default class{
    name = "";

    async execute (msg, ...args){
        throw new TypeError("Some error occurred in the command.js file")
    }
}